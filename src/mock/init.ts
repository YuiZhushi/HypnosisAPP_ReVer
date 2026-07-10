import { mvuAdapter } from '../api/mvuAdapter';
import { initialEnvironmentState } from './state/env_init';
import { initialPlayerState } from './state/player_init';
import { defaultItems } from './defs/items';
import { defaultHypnosis } from './defs/hypnosis';
import { defaultLocations, defaultZones } from './defs/locations';
import { logger } from '../loggerService';

export const initDatabase = async () => {
  // 檢查是否已初始化 (檢查環境變數是否存在)
  const existingEnv = await mvuAdapter.readMvuVariable('environment');
  if (existingEnv) {
    logger.info('Database already initialized, skipping init script.');
    return;
  }

  logger.info('Initializing mock database into MVU/Chat...');

  // 初始化動態變數 (MVU)
  await mvuAdapter.writeMvuVariable('environment', initialEnvironmentState);
  await mvuAdapter.writeMvuVariable('player', initialPlayerState);
  await mvuAdapter.writeMvuVariable('npcs', {});

  // 初始化靜態變數 (Chat) - 在實際系統中這些也是以某種方式存在的
  await mvuAdapter.writeChatVariable('items', Object.fromEntries(defaultItems.map(i => [i.id, i])));
  await mvuAdapter.writeChatVariable('hypnosis', Object.fromEntries(defaultHypnosis.map(h => [h.id, h])));
  await mvuAdapter.writeChatVariable('locations', Object.fromEntries(defaultLocations.map(l => [l.id, l])));
  await mvuAdapter.writeChatVariable('zones', Object.fromEntries(defaultZones.map(z => [z.id, z])));

  logger.info('Database initialization complete.');
};
