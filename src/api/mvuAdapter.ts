import { logger } from '../loggerService';

/**
 * 處理與 TavernHelper 的變數讀寫轉接器
 * 不使用 fallback，嚴格依賴 window.TavernHelper
 */

const getTavernHelper = () => {
  const helper = (globalThis as any).TavernHelper;
  if (!helper) {
    throw new Error('[HypnosisAPP] window.TavernHelper 不存在！已經禁用 fallback，請確保在酒館環境中運行並安裝了 TavernHelper。');
  }
  return helper;
};

export const mvuAdapter = {
  // -------------------------
  // Chat 變數 (通常用於存放靜態定義或全域通用的資料)
  // -------------------------
  async readChatVariable<T>(key: string): Promise<T | null> {
    const helper = getTavernHelper();
    const variables = helper.getVariables({ type: 'chat' });
    return variables?.[key] ?? null;
  },

  async writeChatVariable<T>(key: string, value: T): Promise<void> {
    const helper = getTavernHelper();
    helper.updateVariablesWith((variables: any) => {
      variables[key] = value;
      return variables;
    }, { type: 'chat' });
  },

  // -------------------------
  // MVU 變數 (Message 變數，用於存放隨對話樓層變動的動態狀態)
  // -------------------------
  async readMvuVariable<T>(key: string): Promise<T | null> {
    const helper = getTavernHelper();
    const variables = helper.getVariables({ type: 'message', message_id: 'latest' });
    if (variables?.stat_data !== undefined) {
        return variables.stat_data[key] ?? null;
    }
    return variables?.[key] ?? null;
  },

  async writeMvuVariable<T>(key: string, value: T): Promise<void> {
    const helper = getTavernHelper();
    helper.updateVariablesWith((variables: any) => {
      if (typeof variables !== 'object' || !variables) return variables;
      variables.stat_data = variables.stat_data || {};
      variables.stat_data[key] = value;
      return variables;
    }, { type: 'message', message_id: 'latest' });
  }
};
/**
 * Mock MvuBridge - 用於純模擬模式下�?Tavern 就緒輪詢等待
 * 保留此函數旨在未來對接真�?Tavern 時具有擴展性，且在�?Tavern 環境下不會阻礙掛載�? */

type WaitOptions = { timeoutMs?: number; pollMs?: number };

function isMvuDefined() {
  return typeof (globalThis as any).Mvu !== 'undefined';
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, label: string): Promise<T> {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) return promise;
  return new Promise((resolve, reject) => {
    const timer = globalThis.setTimeout(() => reject(new Error(`${label} timeout after ${timeoutMs}ms`)), timeoutMs);
    promise.then(
      value => {
        globalThis.clearTimeout(timer);
        resolve(value);
      },
      err => {
        globalThis.clearTimeout(timer);
        reject(err);
      },
    );
  });
}

async function safeWaitGlobalInitialized(name: string, timeoutMs: number): Promise<void> {
  const maybeWait = (globalThis as any).waitGlobalInitialized;
  if (typeof maybeWait !== 'function') return;
  await withTimeout(Promise.resolve(maybeWait(name)), timeoutMs, `waitGlobalInitialized(${name})`);
}

export async function waitForMvuReady(options: WaitOptions = {}): Promise<boolean> {
  const timeoutMs = options.timeoutMs ?? 2500;
  const pollMs = options.pollMs ?? 100;

  if (isMvuDefined()) return true;

  const maybeWait = (globalThis as any).waitGlobalInitialized;
  if (typeof maybeWait !== 'function') return false;

  const deadline = Date.now() + Math.max(0, timeoutMs);
  while (Date.now() < deadline) {
    try {
      await safeWaitGlobalInitialized('Mvu', Math.min(pollMs, Math.max(0, deadline - Date.now())));
    } catch {
      /* ignore */
    }
    if (isMvuDefined()) return true;
    await new Promise<void>(resolve => globalThis.setTimeout(resolve, pollMs));
  }

  return isMvuDefined();
}
