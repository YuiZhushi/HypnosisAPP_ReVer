import { PostData } from '@/models';

export const mockPosts: PostData[] = [
  {
    id: 'post_001',
    boardType: 'discussion',
    authorId: 'user_hypnomaster',
    title: '【討論】關於深度潛意識引導的技巧',
    content: '最近在研究第二層級的潛意識控制，發現如果在目標疲勞時施加，效果會提升30%。有人有類似經驗嗎？',
    createdAt: '2026-04-15T10:00:00Z',
    comments: [
      {
        id: 'c_001',
        authorId: 'user_sleepwalker',
        content: '確實如此，我通常會配合睡眠眼罩使用。',
        createdAt: '2026-04-15T11:20:00Z',
        replies: []
      }
    ]
  },
  {
    id: 'post_002',
    boardType: 'showcase',
    authorId: 'user_mindhacker',
    title: '【分享】成功讓班花以為自己是貓',
    content: '利用多重條件反射植入，花了三個禮拜終於達成了！現在她只要聽到鈴鐺聲就會開始喵喵叫。',
    createdAt: '2026-04-16T14:30:00Z',
    comments: [
      {
        id: 'c_002',
        authorId: 'user_newbie',
        content: '太神啦！求詳細教學！',
        createdAt: '2026-04-16T15:00:00Z',
        replies: [
          {
            id: 'r_001',
            authorId: 'user_mindhacker',
            content: '首先你需要先解鎖VIP3...',
            createdAt: '2026-04-16T15:10:00Z'
          }
        ]
      }
    ]
  }
];
