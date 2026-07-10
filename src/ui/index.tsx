import { useEffect, useRef, useState } from 'react';
import { StatusBar } from './components/StatusBar';
import { HelpApp } from './apps/Help/HelpApp';
import { WipApp } from './components/PageLayout';
import { SettingsApp } from './apps/Settings/SettingsApp';
import { CharacterBackgroundApp } from './apps/NpcBackground/CharacterBackgroundApp';
import { PlayerCoreData, EnvironmentData, AppMode } from '@/models';
import { logger } from '@/loggerService';
import { api } from '@/api';
import { HomeScreen } from './apps/OS/HomeScreen';

const App = () => {
  // Global State
  const [currentApp, setCurrentApp] = useState<AppMode>(AppMode.HOME);
  const [userData, setUserData] = useState<PlayerCoreData | null>(null);
  const [bodyStatsUnlocked, setBodyStatsUnlocked] = useState(false);
  const [systemTimeText, setSystemTimeText] = useState<string | undefined>(undefined);
  const [systemDateText, setSystemDateText] = useState<string | undefined>(undefined);
  const [localNow, setLocalNow] = useState(() => new Date());
  const userRefreshInFlightRef = useRef(false);

  // Initialize Data
  useEffect(() => {
    let stopped = false;
    let retryTimer: number | null = null;
    let attempt = 0;

    const load = async () => {
      attempt += 1;
      try {
        // 變數初始化現在已全權由外部腳本負責，這裡只負責輪詢直到取到資料
        const data = await api.getPlayerData();
        if (stopped) return;
        if (data) {
          setUserData(data);
        } else {
          throw new Error('No user data');
        }
      } catch (err) {
        logger.warn('初始化用户数据失败，将重试', err);
        if (stopped) return;
        if (attempt >= 50) { // 最多等 5 秒
          logger.error('等待變數初始化超時');
          return;
        }
        // 使用固定且快速的 100ms 輪詢，確保一初始化完就能瞬間渲染
        retryTimer = window.setTimeout(() => void load(), 100);
      }
    };

    void load();

    return () => {
      stopped = true;
      if (retryTimer !== null) window.clearTimeout(retryTimer);
    };
  }, []);

  useEffect(() => {
    if (currentApp !== AppMode.HOME) return;
    if (systemTimeText) return;
    const timer = setInterval(() => setLocalNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, [currentApp, systemTimeText]);

  const refreshUnlocks = async () => {
    try {
      const vipTier = await api.getFinalStat('player', 'vipTier');
      setBodyStatsUnlocked(vipTier >= 1);
    } catch (err) {
      logger.warn('读取解锁状态失败', err);
      setBodyStatsUnlocked(false);
    }
  };

  useEffect(() => {
    void refreshUnlocks();
  }, []);



  const refreshUserData = async () => {
    if (userRefreshInFlightRef.current) return;
    userRefreshInFlightRef.current = true;
    try {
      const data = await api.getPlayerData();
      if (data) setUserData(data);
    } catch (err) {
      logger.warn('刷新用户数据失败', err);
    } finally {
      userRefreshInFlightRef.current = false;
    }
  };

  useEffect(() => {
    if (currentApp !== AppMode.HOME) return;

    let stopped = false;
    let scheduled: number | null = null;

    const refreshHomeHeader = async () => {
      try {
        const [envData, vipTier] = await Promise.all([
          api.getEnvironmentData(),
          api.getFinalStat('player', 'vipTier')
        ]);
        
        if (stopped) return;

        if (envData && envData.virtualTime) {
            const dateObj = new Date(envData.virtualTime);
            const timeText = dateObj.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });
            const dateText = dateObj.toLocaleDateString('zh-CN', { weekday: 'long', month: 'long', day: 'numeric' });

            setSystemTimeText(timeText);
            setSystemDateText(dateText);
        }

        setBodyStatsUnlocked(vipTier >= 1);
      } catch (err) {
        logger.warn('刷新主页信息失败', err);
      }
    };

    const requestRefresh = () => {
      if (scheduled !== null) return;
      scheduled = window.setTimeout(() => {
        scheduled = null;
        void refreshHomeHeader();
      }, 100);
    };

    requestRefresh();

    return () => {
      stopped = true;
      if (scheduled !== null) window.clearTimeout(scheduled);
    };
  }, [currentApp]);

  // --- Router ---
  const renderCurrentApp = () => {
    if (!userData)
      return <div className="h-full bg-black flex items-center justify-center text-white">Loading OS...</div>;

    switch (currentApp) {

      case AppMode.HELP:
        return <HelpApp onBack={() => setCurrentApp(AppMode.HOME)} />;
      case AppMode.SETTINGS:
        return <SettingsApp onBack={() => setCurrentApp(AppMode.HOME)} />;
      case AppMode.CHARACTER_EDITOR:
        return <CharacterBackgroundApp onBack={() => setCurrentApp(AppMode.HOME)} />;
      case AppMode.HOME:
      default:
        return (
          <HomeScreen
            onLaunchApp={setCurrentApp}
            bodyStatsUnlocked={bodyStatsUnlocked}
            systemTimeText={systemTimeText}
            systemDateText={systemDateText}
            localNow={localNow}
          />
        );
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-2 sm:p-4">
      {/* Phone Bezel */}
      <div className="@container relative w-full max-w-[420px] aspect-9/19.5 bg-black rounded-[clamp(2rem,11.4cqw,3rem)] border-[clamp(4px,1.9cqw,8px)] border-gray-800 overflow-hidden shadow-2xl ring-2 ring-black/20">
        {/* Dynamic Notch/Status Bar Area - Only visible on Home */}
        {currentApp === AppMode.HOME && (
          <div className="absolute top-0 w-full z-50 pointer-events-none">
            <StatusBar timeText={systemTimeText} />
          </div>
        )}

        <div className="w-full h-full bg-black overflow-hidden relative">
          {renderCurrentApp()}
        </div>

        {/* Home Indicator (iOS style) - Always visible except in immersive hypnosis */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full z-50 pointer-events-none mb-1"></div>
      </div>
    </div>
  );
};

export default App;
