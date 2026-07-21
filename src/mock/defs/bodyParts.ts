import { BodyPartsDef } from '@/models';

export const mockBodyParts: BodyPartsDef[] = [
  // ==================== 頭部 ====================
  { id: 'bp_head', name: '頭部', isCustom: false, baseModSlots: 1, description: '頭部' },
  { id: 'bp_head_hair', parentId: 'bp_head', name: '頭髮', isCustom: false, baseModSlots: 1, description: '頭髮' },
  { id: 'bp_head_eyes', parentId: 'bp_head', name: '眼睛', isCustom: false, baseModSlots: 1, description: '雙眼' },
  { id: 'bp_head_eyes_left', parentId: 'bp_head_eyes', name: '左眼', isCustom: false, baseModSlots: 1, description: '左眼' },
  { id: 'bp_head_eyes_right', parentId: 'bp_head_eyes', name: '右眼', isCustom: false, baseModSlots: 1, description: '右眼' },
  { id: 'bp_head_ears', parentId: 'bp_head', name: '耳朵', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '雙耳' },
  { id: 'bp_head_ears_left', parentId: 'bp_head_ears', name: '左耳', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '左耳' },
  { id: 'bp_head_ears_right', parentId: 'bp_head_ears', name: '右耳', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '右耳' },
  { id: 'bp_head_nose', parentId: 'bp_head', name: '鼻子', isCustom: false, hasSensitivity: true, baseModSlots: 1, description: '鼻子' },
  { id: 'bp_head_nose_nostrils', parentId: 'bp_head_nose', name: '鼻孔', isCustom: false, baseModSlots: 1, description: '鼻孔' },
  { id: 'bp_head_nose_cavity', parentId: 'bp_head_nose', name: '鼻腔', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '鼻腔' },
  { id: 'bp_head_mouth', parentId: 'bp_head', name: '嘴巴', isCustom: false, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '嘴巴' },
  { id: 'bp_head_mouth_lips', parentId: 'bp_head_mouth', name: '嘴唇', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '嘴唇' },
  { id: 'bp_head_mouth_oral', parentId: 'bp_head_mouth', name: '口腔', isCustom: false, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '口腔' },
  { id: 'bp_head_mouth_oral_tongue', parentId: 'bp_head_mouth_oral', name: '舌頭', isCustom: false, hasSensitivity: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '舌頭' },
  { id: 'bp_head_mouth_oral_teeth', parentId: 'bp_head_mouth_oral', name: '牙齒', isCustom: false, baseModSlots: 1, description: '牙齒' },
  { id: 'bp_head_face', parentId: 'bp_head', name: '臉部', isCustom: false, baseModSlots: 1, description: '臉部' },

  // ==================== 脖子 ====================
  { id: 'bp_neck', name: '脖子', isCustom: false, hasSensitivity: true, baseModSlots: 1, description: '脖子' },
  { id: 'bp_neck_throat', parentId: 'bp_neck', name: '喉嚨', isCustom: false, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '喉嚨' },
  { id: 'bp_neck_esophagus', parentId: 'bp_neck', name: '食道', isCustom: false, hasTightness: true, baseModSlots: 1, description: '頸部食道' },
  { id: 'bp_neck_cervical_spine', parentId: 'bp_neck', name: '頸椎', isCustom: false, baseModSlots: 1, description: '頸椎' },

  // ==================== 軀幹 ====================
  { id: 'bp_torso', name: '軀幹', isCustom: false, baseModSlots: 1, description: '身體軀幹' },
  { id: 'bp_torso_chest', parentId: 'bp_torso', name: '胸部', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 2, description: '胸部' },
  { id: 'bp_torso_chest_left', parentId: 'bp_torso_chest', name: '左乳', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '左乳' },
  { id: 'bp_torso_chest_right', parentId: 'bp_torso_chest', name: '右乳', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '右乳' },
  
  { id: 'bp_torso_thoracic', parentId: 'bp_torso', name: '胸腔', isCustom: false, baseModSlots: 1, description: '胸腔內部器官' },
  { id: 'bp_torso_thoracic_trachea', parentId: 'bp_torso_thoracic', name: '氣管', isCustom: false, hasTightness: true, baseModSlots: 1, description: '氣管' },
  { id: 'bp_torso_thoracic_lungs', parentId: 'bp_torso_thoracic', name: '肺部', isCustom: false, baseModSlots: 1, description: '肺部' },
  { id: 'bp_torso_thoracic_heart', parentId: 'bp_torso_thoracic', name: '心臟', isCustom: false, baseModSlots: 1, description: '心臟' },
  { id: 'bp_torso_thoracic_diaphragm', parentId: 'bp_torso_thoracic', name: '橫膈膜', isCustom: false, baseModSlots: 1, description: '橫膈膜' },
  
  { id: 'bp_torso_spine', parentId: 'bp_torso', name: '脊椎', isCustom: false, baseModSlots: 1, description: '脊椎' },
  
  { id: 'bp_torso_abdomen', parentId: 'bp_torso', name: '腹部', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '腹部' },
  { id: 'bp_torso_abdomen_upper', parentId: 'bp_torso_abdomen', name: '上腹部', isCustom: false, hasSensitivity: true, baseModSlots: 1, description: '上腹部' },
  { id: 'bp_torso_abdomen_upper_stomach', parentId: 'bp_torso_abdomen_upper', name: '胃部', isCustom: false, baseModSlots: 1, description: '胃部' },
  { id: 'bp_torso_abdomen_upper_liver', parentId: 'bp_torso_abdomen_upper', name: '肝臟', isCustom: false, baseModSlots: 1, description: '肝臟' },
  { id: 'bp_torso_abdomen_upper_pancreas', parentId: 'bp_torso_abdomen_upper', name: '胰臟', isCustom: false, baseModSlots: 1, description: '胰臟' },
  { id: 'bp_torso_abdomen_upper_gallbladder', parentId: 'bp_torso_abdomen_upper', name: '膽囊', isCustom: false, baseModSlots: 1, description: '膽囊' },
  
  { id: 'bp_torso_abdomen_lower', parentId: 'bp_torso_abdomen', name: '下腹部', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '下腹部' },
  { id: 'bp_torso_abdomen_lower_intestines', parentId: 'bp_torso_abdomen_lower', name: '腸道', isCustom: false, hasSensitivity: true, hasTightness: true, baseModSlots: 1, description: '腸道' },
  { id: 'bp_torso_abdomen_lower_intestines_small', parentId: 'bp_torso_abdomen_lower_intestines', name: '小腸', isCustom: false, hasSensitivity: true, hasTightness: true, baseModSlots: 1, description: '小腸' },
  { id: 'bp_torso_abdomen_lower_intestines_large', parentId: 'bp_torso_abdomen_lower_intestines', name: '大腸', isCustom: false, hasSensitivity: true, hasTightness: true, baseModSlots: 1, description: '大腸' },
  { id: 'bp_torso_abdomen_lower_bladder', parentId: 'bp_torso_abdomen_lower', name: '膀胱', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '膀胱' },
  { id: 'bp_torso_abdomen_lower_navel', parentId: 'bp_torso_abdomen_lower', name: '肚臍', isCustom: false, hasSensitivity: true, baseModSlots: 1, description: '肚臍' },
  
  { id: 'bp_torso_pelvis', parentId: 'bp_torso', name: '盆部', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '盆部(下體)' },
  
  { id: 'bp_torso_pelvis_female', parentId: 'bp_torso_pelvis', name: '女性生殖器官', isCustom: false, baseModSlots: 1, description: '女性生殖器官' },
  { id: 'bp_torso_pelvis_female_ovary', parentId: 'bp_torso_pelvis_female', name: '卵巢', isCustom: false, baseModSlots: 1, description: '卵巢' },
  { id: 'bp_torso_pelvis_female_clitoris', parentId: 'bp_torso_pelvis_female', name: '陰蒂', isCustom: false, hasSensitivity: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '陰蒂' },
  { id: 'bp_torso_pelvis_female_vagina', parentId: 'bp_torso_pelvis_female', name: '陰道', isCustom: false, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '陰道' },
  { id: 'bp_torso_pelvis_female_labia', parentId: 'bp_torso_pelvis_female', name: '陰唇', isCustom: false, hasSensitivity: true, baseModSlots: 1, description: '陰唇' },
  { id: 'bp_torso_pelvis_female_urethra', parentId: 'bp_torso_pelvis_female', name: '尿道', isCustom: false, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '尿道' },
  
  { id: 'bp_torso_pelvis_male', parentId: 'bp_torso_pelvis', name: '男性生殖器官', isCustom: false, baseModSlots: 1, description: '男性生殖器官' },
  { id: 'bp_torso_pelvis_male_penis', parentId: 'bp_torso_pelvis_male', name: '陰莖', isCustom: false, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '陰莖' },
  { id: 'bp_torso_pelvis_male_penis_glans', parentId: 'bp_torso_pelvis_male_penis', name: '龜頭', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '龜頭' },
  { id: 'bp_torso_pelvis_male_penis_foreskin', parentId: 'bp_torso_pelvis_male_penis', name: '包皮', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '包皮' },
  { id: 'bp_torso_pelvis_male_penis_root', parentId: 'bp_torso_pelvis_male_penis', name: '陰莖根部', isCustom: false, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '陰莖根部' },
  { id: 'bp_torso_pelvis_male_testicles', parentId: 'bp_torso_pelvis_male', name: '睾丸', isCustom: false, hasSensitivity: true, baseModSlots: 1, description: '睾丸' },

  { id: 'bp_torso_pelvis_anus', parentId: 'bp_torso_pelvis', name: '肛門', isCustom: false, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '肛門' },

  // ==================== 手部 ====================
  { id: 'bp_arms', name: '手部', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '雙手' },
  { id: 'bp_arms_left', parentId: 'bp_arms', name: '左手', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '左手' },
  { id: 'bp_arms_left_upper', parentId: 'bp_arms_left', name: '左上臂', isCustom: false, baseModSlots: 1, description: '左上臂' },
  { id: 'bp_arms_left_lower', parentId: 'bp_arms_left', name: '左下臂', isCustom: false, baseModSlots: 1, description: '左下臂' },
  { id: 'bp_arms_left_elbow', parentId: 'bp_arms_left', name: '左手肘', isCustom: false, baseModSlots: 1, description: '左手肘' },
  { id: 'bp_arms_left_hand', parentId: 'bp_arms_left', name: '左手掌', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '左手掌' },
  
  { id: 'bp_arms_right', parentId: 'bp_arms', name: '右手', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '右手' },
  { id: 'bp_arms_right_upper', parentId: 'bp_arms_right', name: '右上臂', isCustom: false, baseModSlots: 1, description: '右上臂' },
  { id: 'bp_arms_right_lower', parentId: 'bp_arms_right', name: '右下臂', isCustom: false, baseModSlots: 1, description: '右下臂' },
  { id: 'bp_arms_right_elbow', parentId: 'bp_arms_right', name: '右手肘', isCustom: false, baseModSlots: 1, description: '右手肘' },
  { id: 'bp_arms_right_hand', parentId: 'bp_arms_right', name: '右手掌', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '右手掌' },

  // ==================== 腿部 ====================
  { id: 'bp_legs', name: '腿部', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '雙腿' },
  { id: 'bp_legs_left', parentId: 'bp_legs', name: '左腿', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '左腿' },
  { id: 'bp_legs_left_thigh', parentId: 'bp_legs_left', name: '左大腿', isCustom: false, baseModSlots: 1, description: '左大腿' },
  { id: 'bp_legs_left_calf', parentId: 'bp_legs_left', name: '左小腿', isCustom: false, baseModSlots: 1, description: '左小腿' },
  { id: 'bp_legs_left_knee', parentId: 'bp_legs_left', name: '左膝蓋', isCustom: false, baseModSlots: 1, description: '左膝蓋' },
  { id: 'bp_legs_left_foot', parentId: 'bp_legs_left', name: '左腳掌', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '左腳掌' },

  { id: 'bp_legs_right', parentId: 'bp_legs', name: '右腿', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '右腿' },
  { id: 'bp_legs_right_thigh', parentId: 'bp_legs_right', name: '右大腿', isCustom: false, baseModSlots: 1, description: '右大腿' },
  { id: 'bp_legs_right_calf', parentId: 'bp_legs_right', name: '右小腿', isCustom: false, baseModSlots: 1, description: '右小腿' },
  { id: 'bp_legs_right_knee', parentId: 'bp_legs_right', name: '右膝蓋', isCustom: false, baseModSlots: 1, description: '右膝蓋' },
  { id: 'bp_legs_right_foot', parentId: 'bp_legs_right', name: '右腳掌', isCustom: false, hasProficiency: true, baseModSlots: 1, description: '右腳掌' },

  // ==================== 其他部位 ====================
  { id: 'bp_other', name: '其他部位', isCustom: true, baseModSlots: 1, description: '其他改造/特殊部位' },
  { id: 'bp_other_cat_ears', parentId: 'bp_other', name: '貓耳', isCustom: true, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '貓耳' },
  { id: 'bp_other_dog_ears', parentId: 'bp_other', name: '狗耳', isCustom: true, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '狗耳' },
  { id: 'bp_other_mouse_ears', parentId: 'bp_other', name: '鼠耳', isCustom: true, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '鼠耳' },
  { id: 'bp_other_fox_ears', parentId: 'bp_other', name: '狐耳', isCustom: true, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '狐耳' },
  { id: 'bp_other_elf_ears', parentId: 'bp_other', name: '精靈耳', isCustom: true, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '精靈耳' },
  { id: 'bp_other_horns', parentId: 'bp_other', name: '角', isCustom: true, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '角' },
  { id: 'bp_other_wings', parentId: 'bp_other', name: '翅膀', isCustom: true, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '翅膀' },
  { id: 'bp_other_tail', parentId: 'bp_other', name: '尾巴', isCustom: true, hasSensitivity: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '尾巴' },
  
  { id: 'bp_other_womb_brain', parentId: 'bp_other', name: '腹宮腦', isCustom: true, hasSensitivity: true, canOrgasm: true, baseModSlots: 1, description: '腹宮腦' },
  
  { id: 'bp_other_sim_vagina_l_hand', parentId: 'bp_other', name: '左手模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '左手模擬陰道' },
  { id: 'bp_other_sim_vagina_r_hand', parentId: 'bp_other', name: '右手模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '右手模擬陰道' },
  
  { id: 'bp_other_sim_vagina_l_foot', parentId: 'bp_other', name: '左腳模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '左腳模擬陰道' },
  { id: 'bp_other_sim_vagina_r_foot', parentId: 'bp_other', name: '右腳模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '右腳模擬陰道' },
  
  { id: 'bp_other_sim_vagina_l_breast', parentId: 'bp_other', name: '左乳模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '左乳模擬陰道' },
  { id: 'bp_other_sim_penis_l_breast', parentId: 'bp_other', name: '左乳模擬陰莖', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '左乳模擬陰莖' },
  
  { id: 'bp_other_sim_vagina_r_breast', parentId: 'bp_other', name: '右乳模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '右乳模擬陰道' },
  { id: 'bp_other_sim_penis_r_breast', parentId: 'bp_other', name: '右乳模擬陰莖', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '右乳模擬陰莖' },
  
  { id: 'bp_other_sim_vagina_navel', parentId: 'bp_other', name: '肚臍模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '肚臍模擬陰道' },
  
  { id: 'bp_other_sim_vagina_r_eye', parentId: 'bp_other', name: '右眼模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '右眼模擬陰道' },
  { id: 'bp_other_sim_vagina_l_eye', parentId: 'bp_other', name: '左眼模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '左眼模擬陰道' },
  
  { id: 'bp_other_sim_vagina_r_ear', parentId: 'bp_other', name: '右耳模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '右耳模擬陰道' },
  { id: 'bp_other_sim_vagina_l_ear', parentId: 'bp_other', name: '左耳模擬陰道', isCustom: true, hasSensitivity: true, hasTightness: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '左耳模擬陰道' },
  
  { id: 'bp_other_tentacles', parentId: 'bp_other', name: '觸手', isCustom: true, hasSensitivity: true, hasProficiency: true, canOrgasm: true, baseModSlots: 1, description: '觸手' }
];
