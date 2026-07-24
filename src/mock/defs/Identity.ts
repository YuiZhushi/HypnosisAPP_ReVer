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
    id: 'department_store_employee',
    name: '百貨公司員工',
    description: '可進入百貨各樓層的員工通道與休息室。',
  },
  {
    id: 'department_store_manager',
    name: '百貨公司主管',
    description: '擁有百貨後勤區、保全中控室與各店倉庫的管理權限。',
  },
  {
    id: 'security_guard',
    name: '百貨保全',
    description: '負責百貨大樓巡邏與保全中控作業。',
  },
  {
    id: 'department_store_vip',
    name: '百貨 VIP',
    description: '可使用百貨 VIP 休息室。',
  },
  {
    id: 'bookstore_employee',
    name: '書店員工',
    description: '可進入六樓書店倉庫。',
  },
  {
    id: 'electronics_store_employee',
    name: '家電商場員工',
    description: '可進入五樓家電倉庫。',
  },
  {
    id: 'clothing_store_employee',
    name: '服飾商場員工',
    description: '可進入四樓衣物倉庫。',
  },
  {
    id: 'pharmacy_employee',
    name: '藥妝商場員工',
    description: '可進入三樓藥物與一般倉庫。',
  },
  {
    id: 'supermarket_employee',
    name: '生鮮超市員工',
    description: '可進入二樓冷凍、冷藏與一般倉庫。',
  },
  {
    id: 'dorm_male_resident',
    name: '男宿住戶',
    description: '住在男生宿舍的學生，擁有進入男宿建築與房間的基本權限',
  },

  // ==========================================
  // 金融街相關身分
  // ==========================================
  {
    id: 'lawyer',
    name: '律師',
    description: '律師身分，可進入律師事務所內部管制區域與檔案庫。',
  },
  {
    id: 'bank_clerk',
    name: '銀行行員',
    description: '銀行行員，可進入銀行行員休息室。',
  },
  {
    id: 'bank_vip',
    name: '銀行VIP',
    description: '銀行貴賓客戶，可使用銀行貴賓招待室。',
  },
  {
    id: 'bank_director',
    name: '銀行總行主管',
    description: '銀行總行高階主管，擁有銀行全區域通行權限。',
  },
  {
    id: 'stock_vip',
    name: '證券交易所VIP',
    description: '證券交易所貴賓客戶，可進入證交所貴賓交易室。',
  },
  {
    id: 'stock_manager',
    name: '證券交易所主管',
    description: '證券交易所高階主管，擁有證交所全區域與機房通行權限。',
  },
  {
    id: 'stock_broker_liaison',
    name: '證券商聯絡員',
    description: '證券商派駐聯絡員，可進入證交所貴賓交易室。',
  },
  {
    id: 'stock_it_engineer',
    name: '證券交易所資訊工程師',
    description: '證券交易所資訊技術工程師，可進入數據機房與網路安控室。',
  },
  {
    id: 'biz_vip',
    name: '商務大樓VIP',
    description: '商務大樓 VIP 貴賓，可使用 4F VIP 接待室。',
  },
  {
    id: 'biz_chief_secretary',
    name: '商務大樓總裁秘書長',
    description: '商務大樓總裁秘書長，可進入 5F 高級秘書室。',
  },
  {
    id: 'biz_ceo',
    name: '商務大樓總裁',
    description: '商務大樓總裁，擁有商務大樓最高層權限。',
  },
  {
    id: 'media_staff',
    name: '媒體中心員工',
    description: '綜合演藝媒體中心一般員工，可進入後勤與專用通道。',
  },
  {
    id: 'media_idol',
    name: '偶像',
    description: '演藝偶像，可進入 LiveHouse 後台休息室。',
  },
  {
    id: 'media_theater_staff',
    name: '媒體劇場員工',
    description: '劇場工作人員，可進入劇場後台與化妝間。',
  },
  {
    id: 'media_vip',
    name: '媒體中心貴賓',
    description: '媒體中心貴賓，可使用劇場貴賓包廂。',
  },
  {
    id: 'media_model',
    name: '模特兒',
    description: '時尚模特兒，可進入試衣間與秀場後台。',
  },
  {
    id: 'media_agent',
    name: '模特兒經紀人',
    description: '模特兒經紀人，可進入經紀人室、訓練室與秀場後台。',
  },
  {
    id: 'media_photographer',
    name: '攝影師',
    description: '專業攝影師，可進入器材庫與沖洗暗房。',
  },
  {
    id: 'media_radio_staff',
    name: '媒體廣播員工',
    description: '廣播電台工作人員，可進入播音室、錄音棚與休息酒廊。',
  },
  {
    id: 'media_audio_engineer',
    name: '錄音師',
    description: '專業錄音工程師，可進入錄音控制室。',
  },
  {
    id: 'media_tv_staff',
    name: '新聞台員工',
    description: '電視新聞台工作人員，可進入編輯室、剪輯室與主播休息室。',
  },
  {
    id: 'media_tv_director',
    name: '新聞台主管',
    description: '電視台高階主管，可進入台長辦公室與高層辦公室。',
  },
];
