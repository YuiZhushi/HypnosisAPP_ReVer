import React, { useState } from 'react';
import { AppMode } from '@/models';
import { StatusBar } from '../../components/StatusBar';
import { Activity, HelpCircle, Globe, Settings, PenSquare } from 'lucide-react';
import { logger } from '@/loggerService';

interface HomeScreenProps {
  onLaunchApp: (app: AppMode) => void;
  bodyStatsUnlocked: boolean;
  systemTimeText?: string;
  systemDateText?: string;
  localNow: Date;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onLaunchApp,
  bodyStatsUnlocked,
  systemTimeText,
  systemDateText,
  localNow,
}) => {
  const displayTime = systemTimeText || `${localNow.getHours()}:${localNow.getMinutes().toString().padStart(2, '0')}`;
  const displayDate =
    systemDateText || localNow.toLocaleDateString('zh-CN', { weekday: 'long', month: 'long', day: 'numeric' });

  const [notice, setNotice] = useState<string | null>(null);

  const appendMcAnonTagToThisFloor = async () => {
    // 模擬匿名版標籤插入，避免在純模擬模式下調用 Tavern 聊天變量接口報錯
    try {
      setNotice('已插入匿名版標籤 (模擬)');
      window.setTimeout(() => setNotice(null), 1500);
    } catch (err) {
      logger.warn('插入匿名版标签失败', err);
      setNotice('插入失敗');
      window.setTimeout(() => setNotice(null), 1500);
    }
  };

  type DesktopApp = {
    id: string;
    name: string;
    icon: any;
    color: string;
    mode: AppMode;
    disabled: boolean;
    action?: () => void | Promise<void>;
  };

  const apps: DesktopApp[] = [
    { id: 'help', name: '帮助', icon: HelpCircle, color: 'bg-gray-500', mode: AppMode.HELP, disabled: false },
    {
      id: 'mc-anon',
      name: 'MC匿名版',
      icon: Globe,
      color: 'bg-blue-900',
      mode: AppMode.HOME,
      disabled: false,
      action: appendMcAnonTagToThisFloor,
    },
    {
      id: 'char-editor',
      name: '角色編輯',
      icon: PenSquare,
      color: 'bg-gradient-to-br from-pink-500 to-indigo-600',
      mode: AppMode.CHARACTER_EDITOR,
      disabled: false,
    },
    {
      id: 'settings',
      name: '設置',
      icon: Settings,
      color: 'bg-slate-700',
      mode: AppMode.SETTINGS,
      disabled: false,
    },
  ];

  const visibleApps: DesktopApp[] = apps;

  return (
    <div className="relative h-full w-full bg-linear-to-b from-slate-900 via-purple-950 to-black flex flex-col pt-12 pb-24 animate-fade-in">
      {/* Date Widget */}
      <div className="px-6 mb-8 text-white/90 drop-shadow-md">
        <div className="text-5xl sm:text-6xl font-thin tracking-tighter">{displayTime}</div>
        <div className="text-base sm:text-lg font-medium">{displayDate}</div>
      </div>

      {/* App Grid */}
      <div className="flex-1 px-3 sm:px-5 grid grid-cols-4 gap-y-4 sm:gap-y-6 gap-x-2 sm:gap-x-4 content-start">
        {visibleApps.map(app => (
          <div
            key={app.id}
            className={`flex flex-col items-center gap-1 sm:gap-1.5 group ${app.disabled ? 'opacity-50 grayscale cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => {
              if (app.disabled) return;
              if (typeof app.action === 'function') {
                void app.action();
                return;
              }
              onLaunchApp(app.mode);
            }}
          >
            <div
              className={`
              w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${app.color} flex items-center justify-center shadow-lg
              ${!app.disabled && 'group-active:scale-90 transition-transform duration-200'}
              relative
            `}
            >
              <app.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${app.id === 'calendar' ? 'text-black' : 'text-white'}`} />
              {app.disabled && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl">
                  <span className="text-[8px] font-bold text-white bg-red-600 px-1 rounded">WIP</span>
                </div>
              )}
            </div>
            <span className="text-[9px] sm:text-[10px] text-white font-medium tracking-wide drop-shadow-md">
              {app.name}
            </span>
          </div>
        ))}
      </div>

      {notice && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs border border-white/10 shadow-lg backdrop-blur-sm">
          {notice}
        </div>
      )}
    </div>
  );
};
