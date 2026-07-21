import { IdentityDef } from '@/models';

export const defaultIdentities: IdentityDef[] = [
  // ==========================================
  // 中央車站相關身分
  // ==========================================
  {
    id: 'hsr_staff',
    name: '高鐵員工',
    description: '高鐵員工 (可自由進出高鐵內部員工休息室與工作區)',
  },
  {
    id: 'subway_staff',
    name: '地鐵員工',
    description: '地鐵員工 (可自由進出地鐵內部員工休息室與工作區)',
  },

  // ==========================================
  // 齋明學院相關身分
  // ==========================================
  {
    id: 'bus_staff',
    name: '客運員工',
    description: '客運員工 (可自由進出客運內部維護區)',
  },
  {
    id: 'student',
    name: '學生',
    description: '學生',
  },
  {
    id: 'teacher',
    name: '老師',
    description: '老師',
  },
  {
    id: 'classmate',
    name: '同學',
    description: '同學',
  },
  {
    id: 'prostitute',
    name: '妓女',
    description: '妓女',
  },
  {
    id: 'adult',
    name: '成人',
    description: '成人',
  },
  {
    id: 'archery_club_member',
    name: '弓道社社員',
    description: '弓道社社員',
  },
  {
    id: 'bank_manager',
    name: '銀行經理',
    description: '銀行經理',
  },
  {
    id: 'beauty_staff',
    name: '美容院員工',
    description: '美容院員工',
  },
  {
    id: 'board_chairman',
    name: '理事長',
    description: '學院理事長',
  },
  {
    id: 'bookstore_manager',
    name: '書局店長',
    description: '書局店長',
  },
  {
    id: 'bookstore_staff',
    name: '書局員工',
    description: '書局員工',
  },
  {
    id: 'broadcast_club_member',
    name: '廣播社社員',
    description: '廣播社社員',
  },
  {
    id: 'combat_club_member',
    name: '格鬥社社員',
    description: '格鬥社社員',
  },
  {
    id: 'dance_club_member',
    name: '舞蹈社社員',
    description: '舞蹈社社員',
  },
  {
    id: 'fencing_club_member',
    name: '擊劍社社員',
    description: '擊劍社社員',
  },
  {
    id: 'gym_staff',
    name: '健身房員工',
    description: '健身房員工',
  },
  {
    id: 'kendo_club_member',
    name: '劍道社社員',
    description: '劍道社社員',
  },
  {
    id: 'lifeguard',
    name: '救生員',
    description: '救生員',
  },
  {
    id: 'matchmaker_member',
    name: '婚友社會員',
    description: '婚友社會員',
  },
  {
    id: 'matchmaker_staff',
    name: '婚友社人員',
    description: '婚友社人員',
  },
  {
    id: 'pet_cafe_staff',
    name: '寵物咖啡廳員工',
    description: '寵物咖啡廳員工',
  },
  {
    id: 'principal',
    name: '校長',
    description: '學院校長',
  },
  {
    id: 'rock_climbing_club_member',
    name: '攀岩社社員',
    description: '攀岩社社員',
  },
  {
    id: 'school_maintenance',
    name: '學校維修工',
    description: '學校維修工',
  },
  {
    id: 'stock_exchange_it_director',
    name: '證交所IT主管',
    description: '證交所IT主管',
  },
  {
    id: 'student_council_member',
    name: '學生會成員',
    description: '學生會成員',
  },
  {
    id: 'supermarket_staff',
    name: '量販店員工',
    description: '量販店員工',
  },
  {
    id: 'tennis_club_member',
    name: '網球社社員',
    description: '網球社社員',
  },
  {
    id: 'yoga_club_member',
    name: '瑜珈社社員',
    description: '瑜珈社社員',
  },
  {
    id: 'student_council_president',
    name: '學生會長',
    description: '學生會長',
  },
  {
    id: 'astronomy_club_member',
    name: '天文社成員',
    description: '天文社成員',
  },
  {
    id: 'gardening_club_member',
    name: '園藝社成員',
    description: '園藝社成員',
  },
  {
    id: 'tea_ceremony_club_member',
    name: '茶道社成員',
    description: '茶道社成員',
  },
  {
    id: 'light_music_club_member',
    name: '輕音社成員',
    description: '輕音社成員',
  },
  {
    id: 'drama_club_member',
    name: '演劇社成員',
    description: '演劇社成員',
  },
  {
    id: 'photography_club_member',
    name: '攝影社成員',
    description: '攝影社成員',
  },
  {
    id: 'occult_club_member',
    name: '超自然現象研究社成員',
    description: '超自然現象研究社成員',
  },
  {
    id: 'cosplay_club_member',
    name: 'Cosplay社成員',
    description: 'Cosplay社成員',
  },
  {
    id: 'hypnosis_club_member',
    name: '催眠社成員',
    description: '催眠社成員',
  },
  {
    id: 'art_club_member',
    name: '美術社成員',
    description: '美術社成員',
  },
  {
    id: 'computer_club_member',
    name: '電腦與程式設計社成員',
    description: '電腦與程式設計社成員',
  },
  {
    id: 'anime_club_member',
    name: '動漫社成員',
    description: '動漫社成員',
  },
  {
    id: 'boardgame_club_member',
    name: '桌遊與卡牌社成員',
    description: '桌遊與卡牌社成員',
  },
  {
    id: 'science_club_member',
    name: '科學實驗社成員',
    description: '科學實驗社成員',
  },
  {
    id: 'esports_club_member',
    name: '電競社成員',
    description: '電競社成員',
  },
  {
    id: 'traditional_chess_club_member',
    name: '傳統棋藝社成員',
    description: '傳統棋藝社成員',
  },
  {
    id: 'orchestra_club_member',
    name: '管絃社成員',
    description: '管絃社成員',
  },
  {
    id: 'journalism_club_member',
    name: '新聞社成員',
    description: '新聞社成員',
  },
  {
    id: 'tea_club_member',
    name: '茶道社成員',
    description: '茶道社成員',
  },
  {
    id: 'cooking_club_member',
    name: '料理社成員',
    description: '料理社成員',
  },
  {
    id: 'handicraft_club_member',
    name: '手工藝社成員',
    description: '手工藝社成員',
  },
  {
    id: 'literature_club_member',
    name: '文學與詩歌社成員',
    description: '文學與詩歌社成員',
  },
  {
    id: 'track_field_club_member',
    name: '田徑社員',
    description: '田徑社員',
  },
  {
    id: 'javelin_club_member',
    name: '標槍社成員',
    description: '標槍社成員',
  },
  {
    id: 'swimming_club_member',
    name: '游泳與水上活動社成員',
    description: '游泳與水上活動社成員',
  },
  {
    id: 'golf_club_member',
    name: '高爾夫球社成員',
    description: '高爾夫球社成員',
  },
  {
    id: 'badminton_club_member',
    name: '羽球社成員',
    description: '羽球社成員',
  },
  {
    id: 'basketball_club_member',
    name: '籃球社成員',
    description: '籃球社成員',
  },
  {
    id: 'volleyball_club_member',
    name: '排球社成員',
    description: '排球社成員',
  },
  {
    id: 'gymnastics_club_member',
    name: '體操社成員',
    description: '體操社成員',
  },
  {
    id: 'table_tennis_club_member',
    name: '桌球社成員',
    description: '桌球社成員',
  },
  {
    id: 'billiards_club_member',
    name: '撞球社成員',
    description: '撞球社成員',
  },
  {
    id: 'baseball_club_member',
    name: '棒球社成員',
    description: '棒球社成員',
  },
  {
    id: 'dorm_warden',
    name: '宿管員',
    description: '負責宿舍管理與安全巡邏的工作人員，擁有宿舍全區域通行權限',
  },
  {
    id: 'dorm_female_resident',
    name: '女宿住戶',
    description: '住在女生宿舍的學生，擁有進入女宿建築與房間的基本權限',
  },
  {
    id: 'dorm_male_resident',
    name: '男宿住戶',
    description: '住在男生宿舍的學生，擁有進入男宿建築與房間的基本權限',
  },
];
