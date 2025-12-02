function StCalc(_) {
    for (n_A_STR = 1 * c.A_STR.value,
        n_A_AGI = 1 * c.A_AGI.value,
        n_A_VIT = 1 * c.A_VIT.value,
        n_A_DEX = 1 * c.A_DEX.value,
        n_A_INT = 1 * c.A_INT.value,
        n_A_LUK = 1 * c.A_LUK.value,
        StPoint = 0,
        i = 2; i <= n_A_STR; i++)
        StPoint += StCalc2(i);
    for (i = 2; i <= n_A_AGI; i++)
        StPoint += StCalc2(i);
    for (i = 2; i <= n_A_VIT; i++)
        StPoint += StCalc2(i);
    for (i = 2; i <= n_A_INT; i++)
        StPoint += StCalc2(i);
    for (i = 2; i <= n_A_DEX; i++)
        StPoint += StCalc2(i);
    for (i = 2; i <= n_A_LUK; i++)
        StPoint += StCalc2(i);
    if (n_A_BaseLV = c.A_BaseLV.value,
        n_A_JobSet(),
        n_Reborn ? wStPoint = 100 : wStPoint = 48,
        1 == _ || 0 == c.BLVauto.checked)
        for (i = 1; i < n_A_BaseLV; i++)
            wStPoint += Math.floor(i / 5) + 3;
    else
        for (i = 1; StPoint > wStPoint && 99 > i; i++)
            wStPoint += Math.floor(i / 5) + 3;
    i > 99 && (i = 99),
        c.A_BaseLV.value = i,
        myInnerHtml("A_STPOINT", wStPoint - StPoint, 0)
}
function StCalc2(_) {
    return Math.floor((_ - 2) / 10) + 2
}
function SuperNoviceFullWeapon(_) {
    1 == _ ? (SuperNoviceFullWeaponCHECK = 1,
        m_JobASPD[20][7] = 120,
        m_JobASPD_R[20][7] = 120) : (SuperNoviceFullWeaponCHECK = 0,
            m_JobASPD[20][7] = 0,
            m_JobASPD_R[20][7] = 0);
    var a = n_A_WeaponTypesArray.length;
    for (i = 0; a > i; i++)
        n_A_WeaponTypesArray[0] = null;
    for (j = 0,
        i = 0; 21 >= i; i++)
        0 != m_JobASPD[20][i] && (n_A_WeaponTypesArray[j] = i,
            j++);
    if (7 != m_Item[n_A_Equip[0]][2] && JobEquipItemSearch(m_Item[n_A_Equip[0]][2])) {
        var n = n_A_Equip[0];
        n_A_WeaponType = m_Item[n][1],
            ClickWeaponType(m_Item[n][1]),
            WeaponSet2(),
            c.A_weapon1.value = n
    } else
        ClickWeaponType(0),
            WeaponSet2();
    JobEquipItemSearch(m_Item[n_A_Equip[2]][2]) && (c.A_head1.value = n_A_Equip[2]),
        JobEquipItemSearch(m_Item[n_A_Equip[3]][2]) && (c.A_head2.value = n_A_Equip[3]),
        JobEquipItemSearch(m_Item[n_A_Equip[4]][2]) && (c.A_head3.value = n_A_Equip[4]),
        c.A_left.value = n_A_Equip[5],
        c.A_body.value = n_A_Equip[6],
        c.A_shoulder.value = n_A_Equip[7],
        c.A_shoes.value = n_A_Equip[8],
        c.A_acces1.value = n_A_Equip[9],
        c.A_acces2.value = n_A_Equip[10]
}
function StAllCalc() {
    n_A_JobSet();
    if (20 == n_A_JOB && (0 == SuperNoviceFullWeaponCHECK && 1 * c.A_skill9.value == 1 ? SuperNoviceFullWeapon(1) : 1 == SuperNoviceFullWeaponCHECK && 1 * c.A_skill9.value == 0 && SuperNoviceFullWeapon(0)),
        n_A_BaseLV = 1 * c.A_BaseLV.value,
        n_A_JobLV = 1 * c.A_JobLV.value,
        n_A_STR = 1 * c.A_STR.value,
        n_A_AGI = 1 * c.A_AGI.value,
        n_A_VIT = 1 * c.A_VIT.value,
        n_A_DEX = 1 * c.A_DEX.value,
        n_A_INT = 1 * c.A_INT.value,
        n_A_LUK = 1 * c.A_LUK.value,
        SU_STR = n_A_STR,
        SU_AGI = n_A_AGI,
        SU_VIT = n_A_VIT,
        SU_DEX = n_A_DEX,
        SU_INT = n_A_INT,
        SU_LUK = n_A_LUK,
        n_A_WeaponType = m_Item[c.A_weapon1.value][1],
        n_Nitou && (n_A_Weapon2Type = m_Item[c.A_weapon2.value][1]),
        n_A_Arrow = 1 * c.A_Arrow.value,
        n_A_HEAD_REFINE = 1 * c.A_HEAD_REFINE.value,
        n_A_BODY_REFINE = 1 * c.A_BODY_REFINE.value,
        n_A_LEFT_REFINE = 1 * c.A_LEFT_REFINE.value,
        n_A_SHOULDER_REFINE = 1 * c.A_SHOULDER_REFINE.value,
        n_A_SHOES_REFINE = 1 * c.A_SHOES_REFINE.value,
        n_A_ActiveSkill = 1 * c.A_ActiveSkill.value,
        n_A_ActiveSkill >= 5e3 ? n_A_ActiveSkill = m_EnableSkill[n_A_ActiveSkill - 5e3][2] : n_A_ActiveSkill >= 3e3 ? n_A_ActiveSkill = m_EnableSkill[n_A_ActiveSkill - 3e3][2] : n_A_ActiveSkill >= 2e3 && (n_A_ActiveSkill = m_AutoSpellSkill[n_A_ActiveSkill - 2e3][2]),
        n_A_ActiveSkillLV = 1 * c.A_ActiveSkillLV.value,
        n_A_Equip[0] = 1 * c.A_weapon1.value,
        n_A_Equip[1] = 0,
        n_Nitou && (n_A_Equip[1] = 1 * c.A_weapon2.value),
        n_A_Equip[2] = 1 * c.A_head1.value,
        n_A_Equip[3] = 1 * c.A_head2.value,
        n_A_Equip[4] = 1 * c.A_head3.value,
        n_A_Equip[5] = 1 * c.A_left.value,
        n_A_Equip[6] = 1 * c.A_body.value,
        n_A_Equip[7] = 1 * c.A_shoulder.value,
        n_A_Equip[8] = 1 * c.A_shoes.value,
        n_A_Equip[9] = 1 * c.A_acces1.value,
        n_A_Equip[10] = 1 * c.A_acces2.value,
        SetEquip(),
        n_A_WeaponLV = m_Item[n_A_Equip[0]][4],
        n_A_Weapon_ATK = m_Item[n_A_Equip[0]][3],
        n_A_Weapon_refine = 1 * c.A_Weapon_refine.value,
        W_REF = 0,
        n_A_WeaponLV_refineATK = 0,
        n_A_WeaponLV_Minplus = 0,
        n_A_WeaponLV_Maxplus = 0,
        1 == n_A_WeaponLV ? (n_A_WeaponLV_refineATK = 2 * n_A_Weapon_refine,
            n_A_Weapon_refine >= 8 && (n_A_WeaponLV_Minplus = 1,
                n_A_WeaponLV_Maxplus = 3 * (n_A_Weapon_refine - 7))) : 2 == n_A_WeaponLV ? (n_A_WeaponLV_refineATK = 3 * n_A_Weapon_refine,
                    n_A_Weapon_refine >= 7 && (n_A_WeaponLV_Minplus = 1,
                        n_A_WeaponLV_Maxplus = 5 * (n_A_Weapon_refine - 6))) : 3 == n_A_WeaponLV ? (n_A_WeaponLV_refineATK = 5 * n_A_Weapon_refine,
                            n_A_Weapon_refine >= 6 && (n_A_WeaponLV_Minplus = 1,
                                n_A_WeaponLV_Maxplus = 8 * (n_A_Weapon_refine - 5))) : 4 == n_A_WeaponLV && (n_A_WeaponLV_refineATK = 7 * n_A_Weapon_refine,
                                    n_A_Weapon_refine >= 5 && (n_A_WeaponLV_Minplus = 1,
                                        n_A_WeaponLV_Maxplus = 13 * (n_A_Weapon_refine - 4))),
        n_A_Weapon2LV = 0,
        n_A_Weapon2_ATK = 0,
        n_A_Weapon2_refine = 0,
        n_A_Weapon2LV_refineATK = 0,
        n_A_Weapon2LV_Minplus = 0,
        n_A_Weapon2LV_Maxplus = 0,
        n_Nitou && (W_REF2 = 0,
            n_A_Weapon2LV = m_Item[n_A_Equip[1]][4],
            n_A_Weapon2_ATK = m_Item[n_A_Equip[1]][3],
            n_A_Weapon2_refine = 1 * c.A_Weapon2_refine.value,
            1 == n_A_Weapon2LV ? (n_A_Weapon2LV_refineATK = 2 * n_A_Weapon2_refine,
                n_A_Weapon2_refine >= 8 && (n_A_Weapon2LV_Minplus = 1,
                    n_A_Weapon2LV_Maxplus = 3 * (n_A_Weapon2_refine - 7))) : 2 == n_A_Weapon2LV ? (n_A_Weapon2LV_refineATK = 3 * n_A_Weapon2_refine,
                        n_A_Weapon2_refine >= 7 && (n_A_Weapon2LV_Minplus = 1,
                            n_A_Weapon2LV_Maxplus = 5 * (n_A_Weapon2_refine - 6))) : 3 == n_A_Weapon2LV ? (n_A_Weapon2LV_refineATK = 5 * n_A_Weapon2_refine,
                                n_A_Weapon2_refine >= 6 && (n_A_Weapon2LV_Minplus = 1,
                                    n_A_Weapon2LV_Maxplus = 8 * (n_A_Weapon2_refine - 5))) : 4 == n_A_Weapon2LV && (n_A_Weapon2LV_refineATK = 7 * n_A_Weapon2_refine,
                                        n_A_Weapon2_refine >= 5 && (n_A_Weapon2LV_Minplus = 1,
                                            n_A_Weapon2LV_Maxplus = 13 * (n_A_Weapon2_refine - 4)))),
        n_A_card[0] = 1 * c.A_weapon1_card1.value,
        n_A_card[1] = 1 * c.A_weapon1_card2.value,
        n_A_card[2] = 1 * c.A_weapon1_card3.value,
        n_A_card[3] = 1 * c.A_weapon1_card4.value,
        n_Nitou)
        n_A_card[4] = 1 * c.A_weapon2_card1.value,
            n_A_card[5] = 1 * c.A_weapon2_card2.value,
            n_A_card[6] = 1 * c.A_weapon2_card3.value,
            n_A_card[7] = 1 * c.A_weapon2_card4.value;
    else
        for (var _ = 4; 7 >= _; _++)
            n_A_card[_] = 0;
    if (n_A_card[8] = 1 * c.A_head1_card.value,
        n_A_card[9] = 1 * c.A_head2_card.value,
        n_A_card[10] = 1 * c.A_left_card.value,
        n_A_card[11] = 1 * c.A_body_card.value,
        n_A_card[12] = 1 * c.A_shoulder_card.value,
        n_A_card[13] = 1 * c.A_shoes_card.value,
        n_A_card[14] = 1 * c.A_acces1_card.value,
        n_A_card[15] = 1 * c.A_acces2_card.value,
        SetCard(),
        n_A_Weapon_element = 1 * c.A_Weapon_element.value,
        n_A_Weapon2_element = n_A_Weapon_element,
        0 == n_A_Weapon_element) {
        for (B = 0; 0 != m_Item[n_A_Equip[0]][B + 11]; B += 2)
            20 == m_Item[n_A_Equip[0]][B + 11] && (n_A_Weapon_element = m_Item[n_A_Equip[0]][B + 12]);
        for (B = 0; 0 != m_Item[n_A_Equip[1]][B + 11]; B += 2)
            20 == m_Item[n_A_Equip[1]][B + 11] && (n_A_Weapon2_element = m_Item[n_A_Equip[1]][B + 12]);
        201 <= m_Card[n_A_card[0]][0] && m_Card[n_A_card[0]][0] <= 204 && (n_A_Weapon_element = m_Card[n_A_card[0]][0] - 200),
            201 <= m_Card[n_A_card[4]][0] && m_Card[n_A_card[4]][0] <= 204 && (n_A_Weapon2_element = m_Card[n_A_card[4]][0] - 200),
            (10 == n_A_WeaponType || 17 <= n_A_WeaponType && n_A_WeaponType <= 21) && m_Arrow[n_A_Arrow][1] > 0 && (n_A_Weapon_element = m_Arrow[n_A_Arrow][1])
    }
    n_A_Buf = new Array;
    for (var _ = 0; 999 != m_JobBuff[n_A_JOB][_]; _++) {
        var a = document.getElementById("A_skill" + _);
        n_A_Buf[_] = 1 * a.value
    }
    for (n_SkillSW && (n_A_Buf2[0] = 1 * c.A2_Skill0.value,
        n_A_Buf2[1] = 1 * c.A2_Skill1.value,
        n_A_Buf2[2] = 1 * c.A2_Skill2.value,
        n_A_Buf2[3] = 1 * c.A2_Skill3.checked,
        n_A_Buf2[4] = 1 * c.A2_Skill4.value,
        n_A_Buf2[5] = 1 * c.A2_Skill5.checked,
        n_A_Buf2[6] = 1 * c.A2_Skill6.value,
        n_A_Buf2[7] = 1 * c.A2_Skill7.checked,
        n_A_Buf2[8] = 1 * c.A2_Skill8.checked,
        n_A_Buf2[9] = 1 * c.A2_Skill9.value,
        n_A_Buf2[10] = 1 * c.A2_Skill10.value,
        n_A_Buf2[11] = 1 * c.A2_Skill11.value,
        n_A_Buf2[12] = 1 * c.A2_Skill12.value,
        n_A_Buf2[13] = 1 * c.A2_Skill13.value,
        n_A_Buf2[14] = 1 * c.A2_Skill14.value,
        n_A_Buf2[15] = 1 * c.A2_Skill15.value,
        n_A_Buf2[16] = 1 * c.A5_Skill0.checked,
        n_A_Buf2[17] = 1 * c.A5_Skill1.checked,
        n_A_Buf2[18] = 1 * c.A5_Skill2.checked,
        n_A_Buf2[19] = 1 * c.A5_Skill3.checked,
        n_A_Buf2[20] = 1 * c.A5_Skill4.checked,
        n_A_Buf2[21] = 1 * c.A5_Skill5.checked),
        n_Skill3SW && (n_A_Buf3[0] = 1 * c.A3_Skill0_1.value,
            n_A_Buf3[1] = 1 * c.A3_Skill1_1.value,
            n_A_Buf3[2] = 1 * c.A3_Skill2_1.value,
            n_A_Buf3[3] = 1 * c.A3_Skill3_1.value,
            n_A_Buf3[4] = 1 * c.A3_Skill4_1.value,
            n_A_Buf3[5] = 1 * c.A3_Skill5_1.value,
            n_A_Buf3[6] = 1 * c.A3_Skill6_1.value,
            n_A_Buf3[7] = 1 * c.A3_Skill7.value,
            n_A_Buf3[8] = 1 * c.A3_Skill8.value,
            n_A_Buf3[9] = 1 * c.A3_Skill9.value,
            n_A_Buf3[10] = 1 * c.A3_Skill10.value,
            n_A_Buf3[11] = 1 * c.A3_Skill11.checked,
            n_A_Buf3[11] && (n_A_Buf3[12] = 1 * c.A3_Skill11_STR.value,
                n_A_Buf3[13] = 1 * c.A3_Skill11_AGI.value,
                n_A_Buf3[14] = 1 * c.A3_Skill11_VIT.value,
                n_A_Buf3[15] = 1 * c.A3_Skill11_INT.value,
                n_A_Buf3[16] = 1 * c.A3_Skill11_DEX.value,
                n_A_Buf3[17] = 1 * c.A3_Skill11_LUK.value,
                n_A_Buf3[18] = 1 * c.A3_Skill11a.checked),
            n_A_Buf3[0] && (n_A_Buf3[20] = 1 * c.A3_Skill0_2.value,
                n_A_Buf3[30] = 1 * c.A3_Skill0_3.value),
            n_A_Buf3[1] && (n_A_Buf3[21] = 1 * c.A3_Skill1_2.value,
                n_A_Buf3[31] = 1 * c.A3_Skill1_3.value),
            n_A_Buf3[2] && (n_A_Buf3[22] = 1 * c.A3_Skill2_2.value,
                n_A_Buf3[29] = 1 * c.A3_Skill2_3.value,
                n_A_Buf3[32] = 1 * c.A3_Skill2_4.value),
            n_A_Buf3[3] && (n_A_Buf3[23] = 1 * c.A3_Skill3_2.value,
                n_A_Buf3[33] = 1 * c.A3_Skill3_3.value),
            n_A_Buf3[4] && (n_A_Buf3[24] = 1 * c.A3_Skill4_2.value,
                n_A_Buf3[34] = 1 * c.A3_Skill4_3.value),
            n_A_Buf3[5] && (n_A_Buf3[25] = 1 * c.A3_Skill5_2.value,
                n_A_Buf3[35] = 1 * c.A3_Skill5_3.value),
            n_A_Buf3[6] && (n_A_Buf3[26] = 1 * c.A3_Skill6_2.value,
                n_A_Buf3[36] = 1 * c.A3_Skill6_3.value)),
        n_Skill4SW && (n_A_Buf3[40] = 1 * c.A3_Skill40.checked,
            n_A_Buf3[41] = 1 * c.A3_Skill41.value,
            n_A_Buf3[42] = 1 * c.A3_Skill42.value,
            n_A_Buf3[43] = 1 * c.A3_Skill43.value,
            n_A_Buf3[44] = 1 * c.A3_Skill44.value),
        n_Skill6SW && (n_A_Buf6[0] = 1 * c.A6_Skill0.value,
            n_A_Buf6[1] = 1 * c.A6_Skill1.value,
            n_A_Buf6[3] = 1 * c.A6_Skill3.checked,
            n_A_Buf6[4] = 1 * c.A6_Skill4.value,
            n_A_Buf6[5] = 1 * c.A6_Skill5.value,
            n_A_Buf6[6] = 1 * c.A6_Skill6.checked,
            n_A_Buf6[7] = 1 * c.A6_Skill7.checked,
            n_A_Buf6[8] = 1 * c.A6_Skill8.checked,
            n_A_Buf6[9] = 1 * c.A6_Skill9.checked,
            n_A_Buf6[10] = 1 * c.A6_Skill10.checked,
            n_A_Buf6[11] = 1 * c.A6_Skill11.checked,
            n_A_Buf6[12] = 1 * c.A6_Skill12.checked,
            n_A_Buf6[13] = 1 * c.A6_Skill13.checked,
            n_A_Buf6[14] = 1 * c.A6_Skill14.checked,
            n_A_Buf6[15] = 1 * c.A6_Skill15.checked,
            n_A_Buf6[16] = 1 * c.A6_Skill16.checked,
            n_A_Buf6[17] = 1 * c.A6_Skill17.checked,
            n_A_Buf6[18] = 1 * c.A6_Skill18.value,
            n_A_Buf6[19] = 1 * c.A_IJYOU0.value,
            n_A_Buf6[20] = 1 * c.A_IJYOU1.value,
            n_A_Buf6[21] = 1 * c.A_IJYOU2.checked,
            n_A_Buf6[22] = 1 * c.A_IJYOU3.checked),
        n_Skill7SW && (n_A_Buf7[0] = 1 * c.A7_Skill0.checked,
            n_A_Buf7[1] = 1 * c.A7_Skill1.checked,
            n_A_Buf7[2] = 1 * c.A7_Skill2.checked,
            n_A_Buf7[3] = 1 * c.A7_Skill3.value,
            n_A_Buf7[4] = 1 * c.A7_Skill4.value,
            n_A_Buf7[5] = 1 * c.A7_Skill5.value,
            n_A_Buf7[6] = 1 * c.A7_Skill6.value,
            n_A_Buf7[7] = 1 * c.A7_Skill7.value,
            n_A_Buf7[8] = 1 * c.A7_Skill8.value,
            n_A_Buf7[9] = 1 * c.A7_Skill9.checked,
            n_A_Buf7[10] = 1 * c.A7_Skill10.checked,
            n_A_Buf7[11] = 1 * c.A7_Skill11.checked,
            n_A_Buf7[12] = 1 * c.A7_Skill12.checked,
            n_A_Buf7[13] = 1 * c.A7_Skill13.checked,
            n_A_Buf7[14] = 1 * c.A7_Skill14.checked,
            n_A_Buf7[16] = 1 * c.A7_Skill16.checked,
            n_A_Buf7[17] = 1 * c.A7_Skill17.checked,
            n_A_Buf7[18] = 1 * c.A7_Skill18.checked,
            n_A_Buf7[19] = 1 * c.A7_Skill19.checked,
            n_A_Buf7[20] = 1 * c.A7_Skill20.checked,
            n_A_Buf7[21] = 1 * c.A7_Skill21.checked,
            n_A_Buf7[22] = 1 * c.A7_Skill22.checked,
            n_A_Buf7[23] = 1 * c.A7_Skill23.checked,
            n_A_Buf7[24] = 1 * c.A7_Skill24.checked,
            n_A_Buf7[25] = 1 * c.A7_Skill25.checked,
            n_A_Buf7[26] = 1 * c.A7_Skill26.checked,
            n_A_Buf7[27] = 1 * c.A7_Skill27.checked,
            n_A_Buf7[28] = 1 * c.A7_Skill28.checked,
            n_A_Buf7[29] = 1 * c.A7_Skill29.checked,
            n_A_Buf7[30] = 1 * c.A7_Skill30.checked,
            n_A_Buf7[31] = 1 * c.A7_Skill31.checked,
            n_A_Buf7[32] = 1 * c.A7_Skill32.checked,
            n_A_Buf7[33] = 1 * c.A7_Skill33.checked,
            n_A_Buf7[34] = 1 * c.A7_Skill34.checked,
            n_A_Buf7[35] = 1 * c.A_SpeedPOT.value,
            n_A_Buf7[36] = 1 * c.A7_Skill36.checked,
            n_A_Buf7[37] = 1 * c.A7_Skill37.checked,
            n_A_Buf7[38] = 1 * c.A7_Skill38.checked,
            n_A_Buf7[39] = 1 * c.A7_Skill39.value,
            n_A_Buf7[40] = 1 * c.A7_Skill40.value,
            n_A_Buf7[41] = 1 * c.A7_Skill41.checked,
            n_A_Buf7[42] = 1 * c.A7_Skill42.value,
            n_A_Buf7[43] = 1 * c.A7_Skill43.checked,
            n_A_Buf7[44] = 1 * c.A7_Skill44.checked,
            n_A_Buf7[45] = 1 * c.A7_Skill45.checked,
            n_A_Buf7[46] = 1 * c.A7_Skill46.checked,
            n_A_Buf7[47] = 1 * c.A7_Skill47.checked,
            n_A_Buf7[48] = 1 * c.A7_Skill48.checked,
            n_A_Buf7[49] = 1 * c.A7_Skill49.checked,
            n_A_Buf7[50] = 1 * c.A7_Skill50.checked,
            n_A_Buf7[51] = 1 * c.A7_Skill51.checked),
        n_Skill8SW && (n_A_Buf8[0] = 1 * c.A8_Skill0.value,
            n_A_Buf8[1] = 1 * c.A8_Skill1.value,
            n_A_Buf8[2] = 1 * c.A8_Skill2.checked,
            n_A_Buf8[3] = 1 * c.A8_Skill3.value,
            n_A_Buf8[5] = 1 * c.A8_Skill5.value,
            n_A_Buf8[6] = 1 * c.A8_Skill6.value,
            n_A_Buf8[7] = 1 * c.A8_Skill7.value,
            n_A_Buf8[8] = 1 * c.A8_Skill8.value,
            n_A_Buf8[9] = 1 * c.A8_Skill9.value,
            n_A_Buf8[10] = 1 * c.A8_Skill10.value,
            n_A_Buf8[11] = 1 * c.A8_Skill11.value),
        n_Skill9SW && (n_A_Buf9[0] = 1 * c.A9_Skill0.value,
            n_A_Buf9[1] = 1 * c.ARG_RC0.value,
            n_A_Buf9[2] = 1 * c.A9_Skill1.value,
            n_A_Buf9[3] = 1 * c.ARG_RC1.value,
            n_A_Buf9[4] = 1 * c.A9_Skill2.value,
            n_A_Buf9[5] = 1 * c.ARG_RC2.value,
            n_A_Buf9[6] = 1 * c.A9_Skill3.value,
            n_A_Buf9[7] = 1 * c.ARG_RC3.value,
            n_A_Buf9[8] = 1 * c.A9_Skill4.value,
            n_A_Buf9[9] = 1 * c.ARG_RC4.value,
            n_A_Buf9[10] = 1 * c.A9_Skill5.value,
            n_A_Buf9[11] = 1 * c.ARG_RC5.value,
            n_A_Buf9[12] = 1 * c.A9_Skill6.value,
            n_A_Buf9[13] = 1 * c.ARG_RC6.value,
            n_A_Buf9[14] = 1 * c.A9_Skill7.value,
            n_A_Buf9[15] = 1 * c.ARG_RC7.value,
            n_A_Buf9[16] = 1 * c.ARG_RC43.value,
            n_A_Buf9[17] = 1 * c.ARG_RC44.value,
            n_A_Buf9[18] = 1 * c.ARG_RC45.value,
            n_A_Buf9[30] = 1 * c.ARG_RC15.value,
            n_A_Buf9[31] = 1 * c.ARG_RC16.value,
            n_A_Buf9[32] = 1 * c.ARG_RC17.value,
            n_A_Buf9[33] = 1 * c.ARG_RC18.value,
            n_A_Buf9[34] = 1 * c.ARG_RC19.value,
            n_A_Buf9[35] = 1 * c.ARG_RC20.value,
            n_A_Buf9[36] = 1 * c.ARG_RC21.value,
            n_A_Buf9[37] = 1 * c.ARG_RC22.value,
            n_A_Buf9[38] = 1 * c.ARG_RC23.value,
            n_A_Buf9[39] = 1 * c.ARG_RC24.value,
            n_A_Buf9[40] = 1 * c.ARG_RC25.value,
            n_A_Buf9[41] = 1 * c.ARG_RC26.value,
            n_A_Buf9[42] = 1 * c.ARG_RC27.value,
            n_A_Buf9[43] = 1 * c.ARG_RC28.value,
            n_A_Buf9[44] = 1 * c.ARG_RC29.value,
            n_A_Buf9[45] = 1 * c.ARG_RC30.value,
            n_A_Buf9[46] = 1 * c.ARG_RC31.value,
            n_A_Buf9[47] = 1 * c.ARG_RC32.value,
            n_A_Buf9[48] = 1 * c.ARG_RC33.value,
            n_A_Buf9[49] = 1 * c.ARG_RC34.value,
            n_A_Buf9[50] = 1 * c.ARG_RC35.value,
            n_A_Buf9[51] = 1 * c.ARG_RC36.value,
            n_A_Buf9[52] = 1 * c.ARG_RC37.value,
            n_A_Buf9[53] = 1 * c.ARG_RC38.value,
            n_A_Buf9[54] = 1 * c.ARG_RC39.value,
            n_A_Buf9[55] = 1 * c.ARG_RC40.value,
            n_A_Buf9[56] = 1 * c.ARG_RC41.value,
            n_A_Buf9[57] = 1 * c.ARG_RC42.value,
            n_A_Buf9[58] = 0,
            n_A_Buf9[59] = 0),
        n_Skill10SW && (n_B_manual[1] = 1 * c.BRG_RC0.value,
            n_B_manual[2] = 1 * c.Bman1.value,
            n_B_manual[3] = 1 * c.BRG_RC1.value,
            n_B_manual[4] = 1 * c.Bman2.value,
            n_B_manual[5] = 1 * c.BRG_RC2.value,
            n_B_manual[7] = 1 * c.BRG_RC3.value,
            n_B_manual[9] = 1 * c.BRG_RC4.value,
            n_B_manual[21] = 1 * c.BRG_RC10.value,
            n_B_manual[30] = 1 * c.BRG_RC15.value,
            n_B_manual[31] = 1 * c.BRG_RC16.value,
            n_B_manual[34] = 1 * c.BRG_RC19.value,
            n_B_manual[35] = 1 * c.BRG_RC20.value,
            n_B_manual[36] = 1 * c.BRG_RC21.value,
            n_B_manual[37] = 1 * c.BRG_RC22.value,
            n_B_manual[38] = 1 * c.BRG_RC23.value,
            n_B_manual[39] = 1 * c.BRG_RC24.value,
            n_B_manual[40] = 1 * c.BRG_RC25.value,
            n_B_manual[41] = 1 * c.BRG_RC26.value,
            n_B_manual[42] = 1 * c.BRG_RC27.value,
            n_B_manual[43] = 1 * c.BRG_RC28.value,
            n_B_manual[44] = 1 * c.BRG_RC29.value,
            n_B_manual[48] = 1 * c.BRG_RC33.value,
            n_B_manual[49] = 1 * c.BRG_RC34.value,
            n_B_manual[50] = 1 * c.BRG_RC35.value,
            n_B_manual[51] = 1 * c.BRG_RC36.value,
            n_B_manual[52] = 1 * c.BRG_RC37.value,
            n_B_manual[53] = 1 * c.BRG_RC38.value,
            n_B_manual[54] = 1 * c.BRG_RC39.value,
            n_B_manual[55] = 1 * c.BRG_RC40.value),
        _ = 0; 22 >= _; _++)
        selectedMonster[_] = m_Monster[c.B_Enemy.value][_];
    n_A_Bodyelement = StPlusCard(198),
        0 == n_A_Bodyelement && (n_A_Bodyelement = StPlusCalc2(198)),
        13 != n_A_JOB && 27 != n_A_JOB || !CardNumSearch(456) || (n_A_Bodyelement = 6),
        n_A_Buf6[6] && (n_A_Bodyelement = 6),
        n_A_Buf6[13] && (n_A_Bodyelement = 2),
        n_A_Buf6[15] && (n_A_Bodyelement = 1),
        n_A_Buf6[8] && (n_A_Bodyelement = 9),
        myInnerHtml("A_BodyELEMENT", v_Element[n_A_Bodyelement] + "1", 0);
    for (var _ = 0; 6 >= _; _++)
        n_Delay[_] = 0;
    for (_ = 1; 210 >= _; _++) {
        n_tok[_] = 0;
        n_tok[_] += StPlusCalc2(_);
        n_tok[_] += StPlusCard(_);
    }

    for (_ = 290; 339 >= _; _++) {
        n_tok[_] = 0;
        n_tok[_] += StPlusCalc2(_);
        n_tok[_] += StPlusCard(_);
    }

    n_tok[10001] = 0;
    n_tok[10001] += StPlusCard(10001);

    for (StPlusCalc(),
        restrictEquipslot(),
        equip_restrict ? (n_tok[195] ? (c.A_LEFT_REFINE.disabled = !0,
            c.A_LEFT_REFINE.value = 0,
            c.A_left.disabled = !0,
            c.A_left.value = 305,
            c.A_left_card.disabled = !0,
            c.A_left_card.value = 0) : 9 == n_A_WeaponType && (c.A_LEFT_REFINE.disabled = !1,
                c.A_left.disabled = !1,
                card_restrict && 0 != m_Item[c.A_left.value][5] && (c.A_left_card.disabled = !1)),
            1 == n_tok[200] ? (c.A_head2.disabled = !0,
                c.A_head2.value = 243,
                c.A_head2_card.disabled = !0,
                c.A_head2_card.value = 0,
                c.A_head3.disabled = !1) : 2 == n_tok[200] ? (c.A_head2.disabled = !1,
                    c.A_head2_card.disabled = !1,
                    c.A_head3.disabled = !0,
                    c.A_head3.value = 268) : 3 == n_tok[200] ? (c.A_head3.disabled = !0,
                        c.A_head3.value = 268) : n_tok[200] >= 4 ? (c.A_head2.disabled = !0,
                            c.A_head2.value = 243,
                            c.A_head2_card.disabled = !0,
                            c.A_head2_card.value = 0,
                            c.A_head3.disabled = !0,
                            c.A_head3.value = 268) : (c.A_head2.disabled = !1,
                                c.A_head3.disabled = !1)) : (c.A_LEFT_REFINE.disabled = !1,
                                    c.A_left.disabled = !1,
                                    card_restrict = 1 * c.restrict_cardslot.checked,
                                    card_restrict || (c.A_left_card.disabled = !1,
                                        c.A_head2_card.disabled = !1),
                                    c.A_head2.disabled = !1,
                                    c.A_head3.disabled = !1),
        10 != n_A_WeaponType && 14 != n_A_WeaponType && 15 != n_A_WeaponType && 17 != n_A_WeaponType && 18 != n_A_WeaponType && 19 != n_A_WeaponType && 20 != n_A_WeaponType && 21 != n_A_WeaponType ? (n_A_ATK_w = Math.round(Math.floor(n_A_STR / 10) * Math.floor(n_A_STR / 10)),
            n_A_ATK = n_A_STR + n_A_ATK_w + Math.floor(n_A_DEX / 5) + Math.floor(n_A_LUK / 5)) : (n_A_ATK_w = Math.round(Math.floor(n_A_DEX / 10) * Math.floor(n_A_DEX / 10)),
                n_A_ATK = n_A_DEX + n_A_ATK_w + Math.floor(n_A_STR / 5) + Math.floor(n_A_LUK / 5)),
        S = n_tok[17],
        S += n_A_Buf9[40],
        n_A_Buf7[38] ? S += 30 : n_A_Buf7[9] || n_A_Buf7[46] ? S += 20 : n_A_Buf7[29] ? S += 15 : n_A_Buf7[2] && (S += 10),
        SkillSearch(146) && (S += 3),
        SkillSearch(420) && (S += 100),
        S += Math.floor(n_A_JobLV / 10) * CardNumSearch(492),
        4 == n_A_JobClass() && (S += 10 * EquipNumSearch(1120)),
        676 == n_A_Equip[2] && (S += 2 * n_A_HEAD_REFINE),
        1165 == n_A_Equip[0] && (S += 10 * SkillSearch(311)),
        1714 == n_A_Equip[7] && (S += 2 * n_A_SHOULDER_REFINE),
        1723 == n_A_Equip[6] && (S += 3 * n_A_BODY_REFINE),
        n_A_Weapon_refine >= 7 && (S += 35 * CardNumSearch(532)),
        SU_AGI >= 90 && (S += 10 * EquipNumSearch(442)),
        SU_STR >= 80 && 267 == n_A_card[12] && (S += 20),
        SU_STR >= 95 && 621 == n_A_Equip[0] && (S += 340),
        SU_STR >= 44 && 625 == n_A_Equip[0] && (S += 44),
        SU_STR >= 95 && 1160 == n_A_Equip[0] && (S += 20),
        SU_LUK >= 90 && 1164 == n_A_Equip[0] && (S += 20),
        SU_STR >= 99 && EquipNumSearch(1717) && (S += 30),
        953 != n_A_Equip[2] && 1261 != n_A_Equip[2] || (S += Math.floor(2 * n_A_JobLV / 7)),
        n_A_HEAD_REFINE >= 5 && 1218 == n_A_Equip[2] && (S += n_A_HEAD_REFINE - 4),
        n_A_HEAD_REFINE >= 5 && 1495 == n_A_Equip[2] && (S += n_A_HEAD_REFINE - 4),
        n_A_HEAD_REFINE >= 7 && 1274 == n_A_Equip[2] && (S += 15),
        n_A_HEAD_REFINE >= 7 && 1474 == n_A_Equip[2] && (S += 15),
        n_A_HEAD_REFINE >= 7 && 1275 == n_A_Equip[2] && (S += 15),
        n_A_HEAD_REFINE >= 7 && 1475 == n_A_Equip[2] && (S += 15),
        n_A_HEAD_REFINE >= 7 && 1276 == n_A_Equip[2] && (S += 15),
        n_A_HEAD_REFINE >= 7 && 1477 == n_A_Equip[2] && (S += 15),
        n_A_HEAD_REFINE >= 7 && 1479 == n_A_Equip[2] && (S += 15),
        n_A_HEAD_REFINE >= 7 && 1480 == n_A_Equip[2] && (S += 15),
        n_A_HEAD_REFINE >= 7 && 1291 == n_A_Equip[2] && (S += 5),
        10 == n_A_HEAD_REFINE && 1290 == n_A_Equip[2] && (S += 5),
        n_A_SHOULDER_REFINE >= 7 && SU_STR >= 90 && 1472 == n_A_Equip[7] && (S += 20),
        n_A_SHOULDER_REFINE >= 9 && SU_STR >= 90 && 1472 == n_A_Equip[7] && (S += 10),
        !SkillSearch(433) || 20 != n_A_WeaponType && 0 != n_A_WeaponType || (S += 20 + 10 * SkillSearch(433)),
        0 == n_A_Buf6[0] && n_A_Buf6[1] >= 1 && 3 == n_A_Bodyelement && (S += 10 * n_A_Buf6[1]),
        0 > S && SRV > 0 && (S = 0),
        n_A_ATK += S,
        SRV < 50 ? V_ATK = Math.floor(n_A_Weapon_ATK + n_A_Weapon2_ATK + n_A_ATK) : V_ATK = Math.floor(n_A_Weapon_ATK + n_A_WeaponLV_refineATK + n_A_Weapon2_ATK + n_A_Weapon2LV_refineATK),
        S = n_tok[87] + n_A_Buf9[53],
        SkillSearch(342) && (S += SkillSearch(380) <= 1 ? 0 : 2 * SkillSearch(342) * SkillSearch(380)),
        SkillSearch(256) && (S += 5 * SkillSearch(256)),
        SkillSearch(12) && (S += 32),
        n_A_Buf7[17] && (S += 5),
        n_A_Buf6[5] && 0 == n_A_Buf7[31] && (S += 2 + 3 * n_A_Buf6[5]),
        n_A_Buf7[31] && 0 == n_A_Buf6[5] && (S += 5),
        1799 == n_A_Equip[2] && (wSPVS = n_A_JobClass(),
            1 != wSPVS && 2 != wSPVS && 6 != wSPVS || (S += 8)),
        V_ATK < 0 && 0 == SRV && (V_ATK = 0),
        V_ATK += Math.floor(V_ATK * (S / 100)),
        n_A_ATK < 0 && 0 == SRV && (n_A_ATK = 0),
        n_A_ATK = Math.floor(n_A_ATK * (100 + S) / 100),
        wImp = 5 * n_A_Buf2[2],
        n_A_Buf3[9] && (wImp += 25 + 25 * n_A_Buf3[9]),
        !n_A_Buf3[10] || 4 != n_A_WeaponLV && 4 != n_A_Weapon2LV || (V_ATK += 50 + 25 * n_A_Buf3[10]),
        0 == n_A_Buf6[0] && n_A_Buf6[1] >= 1 && 3 == n_A_Bodyelement && (V_ATK += 10 * n_A_Buf6[1]),
        1 == n_A_Buf2[19] && (V_ATK = 2 * V_ATK),
        myInnerHtml("A_ATK2", Math.floor(wImp + V_ATK) + "+" + (n_A_WeaponLV_refineATK + n_A_Weapon2LV_refineATK), 0),
        SRV < 50 ? myInnerHtml("A_RealATK", wImp + Math.floor(V_ATK * (100 + S) / 100) + n_A_WeaponLV_refineATK + n_A_Weapon2LV_refineATK + n_A_WeaponLV_Minplus + "~" + (wImp + Math.floor(V_ATK * (100 + S) / 100) + n_A_WeaponLV_refineATK + n_A_Weapon2LV_refineATK + n_A_WeaponLV_Maxplus), 0) : myInnerHtml("A_RealATK", wImp + Math.floor(V_ATK * (100 + S) / 100) + n_A_WeaponLV_refineATK + n_A_Weapon2LV_refineATK + n_A_WeaponLV_Minplus + "~" + (wImp + Math.floor(V_ATK * (100 + S) / 100) + n_A_WeaponLV_refineATK + n_A_Weapon2LV_refineATK + n_A_WeaponLV_Maxplus), 0),
        JobHP_A = new Array(0, 70, 50, 40, 50, 30, 40, 150, 110, 75, 85, 55, 90, 110, 85, 90, 75, 75, 75, 90, 0, 150, 110, 75, 85, 55, 90, 110, 85, 90, 75, 75, 75, 90, 0, 0, 0, 0, 0, 0, 0, 70, 90, 75, 75, 84),
        JobHP_B = new Array(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 5, 6.5, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 5, 6.5, 3, 3, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 6.5, 5, 3, 3.5),
        wHPSL = 0,
        43 == n_A_JOB && n_A_BaseLV >= 70 && (n_A_BaseLV <= 79 ? wHPSL = 40 * (n_A_BaseLV - 70) : n_A_BaseLV <= 84 ? wHPSL = 50 * (n_A_BaseLV - 80) : n_A_BaseLV <= 89 ? wHPSL = 50 * (n_A_BaseLV - 80) - 10 : n_A_BaseLV <= 92 ? wHPSL = 50 * (n_A_BaseLV - 90) : n_A_BaseLV <= 97 ? wHPSL = 50 * (n_A_BaseLV - 90) - 10 : 98 == n_A_BaseLV ? wHPSL = 375 : wHPSL = 4),
        S = 0,
        _ = 2; _ <= n_A_BaseLV; _++)
        S += Math.round(JobHP_A[n_A_JOB] * _ / 100);
    n_A_MaxHP = Math.floor(JobHP_B[n_A_JOB] * n_A_BaseLV + 35 + S),
        44 == n_A_JOB && (NinHP = new Array(131, 137, 144, 151, 159, 167, 175, 184, 193, 202, 212, 222, 232, 243, 254, 265, 277, 289, 301, 316, 331, 346, 364, 382, 400, 420, 440, 460, 482, 504, 526, 548, 572, 596, 620, 646, 672, 698, 726, 754, 784, 814, 844, 876, 908, 940, 975, 1010, 1100, 1140, 1180, 1220, 1260, 1300, 1340, 1385, 1430, 1475, 1520, 1565, 1615, 1665, 1715, 1765, 1815, 1880, 1935, 1990, 2045, 2100, 2160, 2200, 2280, 2340, 2400, 2460, 2520, 2580, 2640, 2705, 2770, 2835, 2900, 2965, 3030, 3100, 3170, 3240, 3310, 3380, 3455, 3530, 3605, 3680, 3760, 3840, 3920, 4e3, 4080),
            n_A_MaxHP = NinHP[n_A_BaseLV - 1]),
        45 == n_A_JOB && n_A_BaseLV >= 10 && (GunHP = new Array(202, 212, 222, 232, 243, 254, 265, 277, 289, 301, 316, 331, 346, 364, 382, 400, 420, 440, 460, 490, 520, 550, 580, 610, 650, 680, 710, 740, 770, 800, 830, 860, 890, 920, 950, 990, 1020, 1050, 1080, 1110, 1140, 1180, 1230, 1280, 1330, 1395, 1455, 1515, 1575, 1635, 1695, 1760, 1820, 1885, 1950, 2015, 2080, 2145, 2210, 2275, 2340, 2410, 2480, 2550, 2620, 2690, 2760, 2830, 2900, 2970, 3040, 3115, 3190, 3265, 3340, 3415, 3490, 3565, 3640, 3715, 3790, 3870, 3950, 4030, 4110, 4190, 4270, 4350, 4430, 4510),
            n_A_MaxHP = GunHP[n_A_BaseLV - 10]),
        20 == n_A_JOB && 99 == n_A_BaseLV && (n_A_MaxHP += 2e3),
        n_Reborn && (n_A_MaxHP = Math.floor(125 * n_A_MaxHP / 100));
    c.A_adopted.checked;
    if (1 * c.A_adopted.checked ? (n_A_MaxHP = Math.floor(70 * n_A_MaxHP / 100),
        myInnerHtml("A_BodySIZE", "Demi-Human & Small", 0)) : myInnerHtml("A_BodySIZE", "Demi-Human & Medium", 0),
        n_A_MaxHP = Math.floor((n_A_MaxHP - wHPSL) * (100 + n_A_VIT) / 100),
        41 == n_A_JOB && n_A_BaseLV >= 70 && (n_A_BaseLV <= 79 ? n_A_MaxHP = Math.floor((2127 + 10 * (n_A_BaseLV - 70)) * (100 + n_A_VIT) / 100) : n_A_BaseLV <= 89 ? n_A_MaxHP = Math.floor((2200 + 50 * (n_A_BaseLV - 80)) * (100 + n_A_VIT) / 100) : n_A_BaseLV <= 99 && (n_A_MaxHP = (2700 + 50 * (n_A_BaseLV - 90)) * (100 + n_A_VIT) / 100,
            SkillSearch(345) && (n_A_MaxHP = 3 * n_A_MaxHP),
            n_A_MaxHP = Math.floor(n_A_MaxHP))),
        42 == n_A_JOB && n_A_BaseLV >= 70 && (wKenseiHP = [3455, 3524, 3593, 3663, 3834, 3806, 3878, 3951, 4025, 4500],
            n_A_BaseLV <= 79 ? n_A_MaxHP = Math.floor((2670 + 10 * (n_A_BaseLV - 70)) * (100 + n_A_VIT) / 100) : n_A_BaseLV <= 89 ? n_A_MaxHP = Math.floor((3e3 + 20 * (n_A_BaseLV - 80)) * (100 + n_A_VIT) / 100) : n_A_BaseLV <= 99 && (n_A_MaxHP = Math.floor(wKenseiHP[n_A_BaseLV - 90] * (100 + n_A_VIT) / 100))),
        1 == n_A_Buf7[39] ? n_A_MaxHP += Math.floor(500 + 10 * n_A_BaseLV / 3) : 2 == n_A_Buf7[39] ? n_A_MaxHP += Math.floor(1500 + 10 * n_A_BaseLV / 3) : 3 == n_A_Buf7[39] && (n_A_MaxHP += Math.floor(2500 + 10 * n_A_BaseLV / 3)),
        n_A_MaxHP += 200 * SkillSearch(156),
        S = 0,
        S += n_tok[13] + n_A_Buf9[30],
        n_A_BaseLV <= 79 && (S += 400 * EquipNumSearch(883)),
        5 == n_A_JobClass() && (S -= 100 * CardNumSearch(474)),
        0 == n_A_JobClass() && (S += 30 * EquipNumSearch(1116)),
        1 == n_A_JobClass() && (S += 500 * CardNumSearch(477)),
        186 == n_A_card[11] && (S -= 40 * n_A_BODY_REFINE),
        836 == n_A_Equip[8] && (S += 10 * n_A_BaseLV),
        859 == n_A_Equip[6] && (S += 20 * n_A_BaseLV),
        762 == n_A_Equip[6] && (S += 20 * n_A_BaseLV),
        EquipNumSearch(770) && (S += 3 * n_A_BaseLV),
        986 == n_A_Equip[6] && (S += 7 * n_A_BaseLV),
        1172 == n_A_Equip[0] && (S += 25 * n_A_Weapon_refine),
        EquipNumSearch(1058) && (S += 10 * n_A_BaseLV),
        1785 == n_A_Equip[5] && SU_INT > 97 && (S += 800),
        n_A_BODY_REFINE >= 9 && 225 == n_A_card[11] && (S += 800),
        n_A_Weapon_refine >= 6 && 1168 == n_A_Equip[0] && (S -= 200 * (n_A_Weapon_refine - 5)),
        0 != n_A_JOB && 20 != n_A_JOB || 1670 != n_A_Equip[3] || (S += 80),
        536 == n_A_Equip[8] && (i = n_A_JobClass(),
            3 != i && 4 != i && 5 != i || (S += 5 * n_A_BaseLV)),
        n_A_MaxHP += S,
        n_A_MaxHP < 1 && (n_A_MaxHP = 1),
        S = 0,
        S += n_tok[15] + n_A_Buf9[31],
        n_A_Buf3[3] && (S += 5 + 2 * n_A_Buf3[3] + n_A_Buf3[33] + Math.floor(n_A_Buf3[23] / 10)),
        n_A_Buf2[17] && (S += 100),
        n_A_Buf7[16] && (S += 3),
        715 == n_A_Equip[8] && (S -= n_A_SHOES_REFINE),
        1730 == n_A_Equip[6] && (S += n_A_BODY_REFINE),
        SU_VIT >= 80 && 267 == n_A_card[12] && (S += 3),
        n_A_BODY_REFINE >= 7 && 531 == n_A_card[11] && (S += 3),
        n_A_BODY_REFINE >= 9 && 531 == n_A_card[11] && (S += 10),
        564 == n_A_card[11] && (S += 5),
        n_A_SHOES_REFINE >= 9 && 304 == n_A_card[13] && (S += 10),
        n_A_SHOES_REFINE >= 9 && 560 == n_A_card[13] && (S += 10),
        n_A_SHOES_REFINE >= 9 && 572 == n_A_card[13] && (S += 10),
        n_A_SHOES_REFINE <= 4 && 407 == n_A_card[13] && (S += 4),
        n_A_SHOES_REFINE >= 8 && 1732 == n_A_Equip[8] && (S += n_A_SHOES_REFINE - 7),
        405 != n_A_card[12] || 1 != n_A_JobClass() && 2 != n_A_JobClass() && 6 != n_A_JobClass() || (S += 5),
        n_A_MaxHP = n_A_MaxHP * (100 + S) / 100,
        1 == n_A_Buf6[0] && n_A_Buf6[1] >= 1 && 1 == n_A_Bodyelement) {
        var n = [5, 9, 12, 14, 15];
        n_A_MaxHP = n_A_MaxHP * (100 + n[n_A_Buf6[1] - 1]) / 100
    }
    for (SkillSearch(258) && (n_A_MaxHP *= 3),
        n_A_MaxHP = Math.floor(n_A_MaxHP),
        n_A_MaxHP >= 100 ? n_A_MaxHP >= 1e4 ? myInnerHtml("A_MaxHP", " " + n_A_MaxHP, 0) : myInnerHtml("A_MaxHP", n_A_MaxHP, 0) : myInnerHtml("A_MaxHP", " " + n_A_MaxHP, 0),
        JobSP_A = new Array(1, 2, 2, 5, 2, 6, 3, 3, 4, 8, 4, 9, 4, 4.7, 5, 4.7, 6, 6, 7, 4, 1, 3, 4, 8, 4, 9, 4, 4.7, 5, 4.7, 6, 6, 7, 4, 0, 0, 0, 0, 0, 0, 0, 2, 4.7, 9, 3.75, 3.75),
        wSPSL = 0,
        43 == n_A_JOB && n_A_BaseLV >= 70 && (n_A_BaseLV < 80 ? wSPSL = 4 * (n_A_BaseLV - 70) + 5 : n_A_BaseLV < 90 ? wSPSL = 4 * (n_A_BaseLV - 80) : n_A_BaseLV < 93 ? wSPSL = 4 * (n_A_BaseLV - 90) : n_A_BaseLV < 99 ? wSPSL = 4 * (n_A_BaseLV - 90) - 10 : wSPSL = 1),
        n_A_MaxSP = 10 + n_A_BaseLV * JobSP_A[n_A_JOB] - wSPSL,
        44 == n_A_JOB && (n_A_BaseLV <= 20 ? n_A_MaxSP = 11 + 3 * n_A_BaseLV : n_A_BaseLV <= 40 ? n_A_MaxSP = 71 + 4 * (n_A_BaseLV - 20) : n_A_BaseLV <= 60 ? n_A_MaxSP = 151 + 5 * (n_A_BaseLV - 40) : n_A_BaseLV <= 80 ? n_A_MaxSP = 251 + 6 * (n_A_BaseLV - 60) : n_A_MaxSP = 370 + 8 * (n_A_BaseLV - 80)),
        45 == n_A_JOB && (n_A_BaseLV <= 25 ? n_A_MaxSP = 10 + 3 * n_A_BaseLV : n_A_BaseLV <= 35 ? n_A_MaxSP = 85 + 4 * (n_A_BaseLV - 25) : n_A_BaseLV <= 40 ? n_A_MaxSP = 126 + 3 * (n_A_BaseLV - 35) : n_A_BaseLV <= 50 ? n_A_MaxSP = 141 + 4 * (n_A_BaseLV - 40) : n_A_BaseLV <= 75 ? n_A_MaxSP = 181 + 5 * (n_A_BaseLV - 50) : n_A_BaseLV <= 78 ? n_A_MaxSP = 306 + 6 * (n_A_BaseLV - 75) : n_A_MaxSP = 330 + 6 * (n_A_BaseLV - 78)),
        n_Reborn && (n_A_MaxSP = Math.floor(125 * n_A_MaxSP / 100)),
        1 * c.A_adopted.checked && (n_A_MaxSP = Math.floor(70 * n_A_MaxSP / 100)),
        n_A_MaxSP = Math.floor(n_A_MaxSP * (100 + n_A_INT) / 100),
        1 == n_A_Buf7[40] ? n_A_MaxSP = Math.floor(n_A_MaxSP * (95 + n_A_BaseLV / 10) / 100) : 2 == n_A_Buf7[40] ? n_A_MaxSP = Math.floor(n_A_MaxSP * (100 + n_A_BaseLV / 10) / 100) : 3 == n_A_Buf7[40] && (n_A_MaxSP = Math.floor(n_A_MaxSP * (105 + n_A_BaseLV / 10) / 100)),
        41 == n_A_JOB && n_A_BaseLV >= 70 && (n_A_BaseLV <= 79 ? n_A_MaxSP = Math.floor((150 + 1 * (n_A_BaseLV - 70)) * (100 + n_A_INT) / 100) : n_A_BaseLV <= 89 ? n_A_MaxSP = Math.floor((160 + 1 * (n_A_BaseLV - 70)) * (100 + n_A_INT) / 100) : n_A_BaseLV <= 99 && (n_A_MaxSP = 190 * (100 + n_A_INT) / 100,
            SkillSearch(345) && (n_A_MaxSP = 3 * n_A_MaxSP),
            n_A_MaxSP = Math.floor(n_A_MaxSP))),
        42 == n_A_JOB && n_A_BaseLV >= 70 && (n_A_BaseLV <= 79 ? n_A_MaxSP = Math.floor((339 + 2 * (n_A_BaseLV - 70)) * (100 + n_A_INT) / 100) : n_A_BaseLV <= 89 ? n_A_MaxSP = Math.floor((386 + 2 * (n_A_BaseLV - 80)) * (100 + n_A_INT) / 100) : n_A_BaseLV <= 99 && (n_A_MaxSP = Math.floor((430 + 3 * (n_A_BaseLV - 90)) * (100 + n_A_INT) / 100))),
        S = 0,
        S += n_tok[14] + n_A_Buf9[32],
        S += StPlusCalc2(4),
        S += StPlusCalc2(7),
        S += 30 * SkillSearch(372),
        n_A_BaseLV <= 79 && (S += 200 * EquipNumSearch(883)),
        179 == n_A_card[9] && (S += 40),
        3 == n_A_JobClass() && (S += 50 * EquipNumSearch(1118)),
        5 == n_A_JobClass() && (S += 100 * CardNumSearch(474) + 100 * CardNumSearch(476)),
        859 == n_A_Equip[6] && (S += 5 * n_A_BaseLV),
        762 == n_A_Equip[6] && (S += 5 * n_A_BaseLV),
        EquipNumSearch(770) && (S += n_A_JobLV),
        986 == n_A_Equip[6] && (S += Math.floor(.5 * n_A_BaseLV)),
        1671 == n_A_Equip[0] && (S += 50 * Math.floor(n_A_Weapon_refine / 2)),
        1193 == n_A_Equip[7] && (S += Math.floor(n_A_BaseLV / 3) + 10 * n_A_SHOULDER_REFINE),
        EquipNumSearch(1058) && (S += 2 * n_A_BaseLV),
        n_A_HEAD_REFINE <= 4 && 179 == n_A_card[8] && (S += 40),
        n_A_HEAD_REFINE >= 9 && 298 == n_A_card[8] && (S += 150),
        n_A_Weapon_refine >= 9 && 642 == n_A_Equip[0] && (S += 300),
        n_A_Weapon_refine >= 6 && 1168 == n_A_Equip[0] && (S -= 100 * (n_A_Weapon_refine - 5)),
        n_A_HEAD_REFINE >= 6 && 1593 == n_A_Equip[2] && (S += 10 * (n_A_HEAD_REFINE - 5)),
        n_A_HEAD_REFINE >= 6 && EquipNumSearch(1581) && (S += n_A_HEAD_REFINE),
        0 != n_A_JOB && 20 != n_A_JOB || 1670 != n_A_Equip[3] || (S += 30),
        536 == n_A_Equip[8] && (wSPVS = n_A_JobClass(),
            1 != wSPVS && 2 != wSPVS && 6 != wSPVS || (S += 2 * n_A_JobLV)),
        n_A_MaxSP += S,
        n_A_MaxSP < 0 && (n_A_MaxSP = 0),
        S = 0,
        S += n_tok[16] + n_A_Buf9[33],
        S += SkillSearch(269),
        S += 2 * SkillSearch(274),
        n_A_Buf2[18] && (S += 100 + n_tok[16]),
        n_A_Buf7[16] && (S += 3),
        715 == n_A_Equip[8] && (S -= n_A_SHOES_REFINE),
        n_A_HEAD_REFINE >= 6 && EquipNumSearch(1581) && (S += n_A_HEAD_REFINE),
        n_A_SHOES_REFINE >= 9 && 304 == n_A_card[13] && (S += 10),
        564 == n_A_card[11] && (S += 5),
        n_A_SHOES_REFINE >= 9 && 560 == n_A_card[13] && (S += 10),
        n_A_SHOES_REFINE >= 9 && 572 == n_A_card[13] && (S += 10),
        n_A_SHOES_REFINE <= 4 && 407 == n_A_card[13] && (S += 4),
        405 != n_A_card[12] || 3 != n_A_JobClass() && 4 != n_A_JobClass() && 5 != n_A_JobClass() || (S += 5),
        n_A_Buf3[6] && (S += SRV ? 15 + n_A_Buf3[6] + n_A_Buf3[26] / 10 + n_A_Buf3[36] : 15 + n_A_Buf3[6] + Math.floor(n_A_Buf3[36] / 2) + Math.floor(n_A_Buf3[26] / 10)),
        n_A_MaxSP = Math.floor(n_A_MaxSP * (1 + S / 100)),
        n_A_MaxSP >= 100 ? myInnerHtml("A_MaxSP", n_A_MaxSP, 0) : myInnerHtml("A_MaxSP", " " + n_A_MaxSP, 0),
        n_A_DEFplus = n_A_HEAD_REFINE + n_A_BODY_REFINE + n_A_LEFT_REFINE + n_A_SHOULDER_REFINE + n_A_SHOES_REFINE,
        SRV >= 50 && (n_A_HEAD_REFINE >= 5 && (n_A_DEFplus += n_A_HEAD_REFINE - 4),
            n_A_HEAD_REFINE >= 9 && (n_A_DEFplus += n_A_HEAD_REFINE - 8),
            n_A_HEAD_REFINE >= 13 && (n_A_DEFplus += n_A_HEAD_REFINE - 12),
            n_A_HEAD_REFINE >= 17 && (n_A_DEFplus += n_A_HEAD_REFINE - 16),
            n_A_BODY_REFINE >= 5 && (n_A_DEFplus += n_A_BODY_REFINE - 16),
            n_A_BODY_REFINE >= 9 && (n_A_DEFplus += n_A_BODY_REFINE - 16),
            n_A_BODY_REFINE >= 13 && (n_A_DEFplus += n_A_BODY_REFINE - 16),
            n_A_BODY_REFINE >= 17 && (n_A_DEFplus += n_A_BODY_REFINE - 16),
            n_A_LEFT_REFINE >= 5 && (n_A_DEFplus += n_A_LEFT_REFINE - 16),
            n_A_LEFT_REFINE >= 9 && (n_A_DEFplus += n_A_LEFT_REFINE - 16),
            n_A_LEFT_REFINE >= 13 && (n_A_DEFplus += n_A_LEFT_REFINE - 16),
            n_A_LEFT_REFINE >= 17 && (n_A_DEFplus += n_A_LEFT_REFINE - 16),
            n_A_SHOULDER_REFINE >= 5 && (n_A_DEFplus += n_A_SHOULDER_REFINE - 16),
            n_A_SHOULDER_REFINE >= 9 && (n_A_DEFplus += n_A_SHOULDER_REFINE - 16),
            n_A_SHOULDER_REFINE >= 13 && (n_A_DEFplus += n_A_SHOULDER_REFINE - 16),
            n_A_SHOULDER_REFINE >= 17 && (n_A_DEFplus += n_A_SHOULDER_REFINE - 16),
            n_A_SHOES_REFINE >= 5 && (n_A_DEFplus += n_A_SHOES_REFINE - 16),
            n_A_SHOES_REFINE >= 9 && (n_A_DEFplus += n_A_SHOES_REFINE - 16),
            n_A_SHOES_REFINE >= 13 && (n_A_DEFplus += n_A_SHOES_REFINE - 16),
            n_A_SHOES_REFINE >= 17 && (n_A_DEFplus += n_A_SHOES_REFINE - 16)),
        n_A_DEF = n_tok[18] + n_A_Buf9[34],
        _ = 2; 10 >= _; _++)
        n_A_DEF += m_Item[n_A_Equip[_]][3];
    if (521 == n_A_Equip[0] && (n_A_Weapon_refine <= 5 ? n_A_DEF += 2 : n_A_Weapon_refine >= 9 ? n_A_DEF += 7 : n_A_DEF += 5),
        n_A_LEFT_REFINE <= 5 && 222 == n_A_card[10] && (n_A_DEF += 2),
        n_A_BODY_REFINE <= 5 && 283 == n_A_card[11] && (n_A_DEF += 2),
        n_A_BODY_REFINE >= 9 && 531 == n_A_card[11] && (n_A_DEF += 10),
        n_A_HEAD_REFINE >= 7 && 1272 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1273 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1274 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1474 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1275 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1475 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1276 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1280 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1282 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1286 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1287 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1486 == n_A_Equip[2] && (n_A_DEF += 2),
        n_A_HEAD_REFINE >= 7 && 1487 == n_A_Equip[2] && (n_A_DEF += 2),
        n_A_HEAD_REFINE >= 7 && 1485 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_HEAD_REFINE >= 7 && 1550 == n_A_Equip[2] && (n_A_DEF += 1),
        n_A_Buf3[9] && (SRV < 50 ? n_A_DEF += 2 + 2 * n_A_Buf3[9] : n_A_DEF += 10 * n_A_Buf3[9]),
        n_A_Buf7[32] && (n_A_DEF += 3),
        1 == n_A_JobClass() && (n_A_DEF += 2 * EquipNumSearch(1117)),
        658 == n_A_Equip[0] && (n_A_DEF += n_A_Weapon_refine),
        715 == n_A_Equip[8] && (n_A_DEF += Math.floor(n_A_SHOES_REFINE / 2)),
        942 == n_A_Equip[0] && (n_A_DEF += Math.floor(n_A_Weapon_refine / 2)),
        1350 == n_A_Equip[2] && (n_A_DEF -= n_A_HEAD_REFINE),
        EquipNumSearch(1026) && (n_A_DEF -= 5),
        // * Guardian's skull extra def
        EquipNumSearch(1345) && (n_A_DEF += Math.floor(n_A_HEAD_REFINE / 2)),
        EquipNumSearch(764) && (SRV ? n_A_DEF -= n_A_HEAD_REFINE + n_A_LEFT_REFINE : n_A_DEFplus -= n_A_HEAD_REFINE + n_A_LEFT_REFINE),
        EquipNumSearch(742) && 1 == n_A_JobClass() && (n_A_DEF += 6),
        986 != n_A_Equip[6] || 1 != n_A_JobClass() && 2 != n_A_JobClass() && 6 != n_A_JobClass() || (n_A_DEF += 3),
        809 == n_A_Equip[2] && (n_A_DEFplus -= n_A_HEAD_REFINE),
        (TimeItemNumSearch(9) || TimeItemNumSearch(50)) && (n_A_DEF += 20),
        (TimeItemNumSearch(33) || TimeItemNumSearch(51)) && (n_A_DEF -= 20),
        SRV < 50 ? n_A_totalDEF = n_A_DEF + Math.round(7 * n_A_DEFplus / 10) : n_A_totalDEF = n_A_DEF + n_A_DEFplus,
        n_tok[24] && (n_A_totalDEF = Math.floor(n_A_totalDEF / n_tok[24])),
        n_tok[85] && (n_A_totalDEF -= Math.floor(n_A_totalDEF * n_tok[85] / 100)),
        n_A_Buf6[21] && (n_A_totalDEF -= Math.floor(25 * n_A_totalDEF / 100)),
        SkillSearch(256) && SRV < 50 && (n_A_totalDEF = Math.floor(n_A_totalDEF * (1 - .05 * SkillSearch(256)))),
        (n_A_Buf6[13] || n_A_Buf6[15]) && (n_A_totalDEF -= Math.floor(.5 * n_A_totalDEF)),
        n_A_Buf2[21] && (n_A_totalDEF += Math.floor(.25 * n_A_totalDEF)),
        SRV < 50)
        n_A_totalDEF >= 100 && (n_A_totalDEF = 99),
            CardNumSearch(392) && (n_A_totalDEF -= 50),
            c.B_num.value >= 2 && (n_A_totalDEF -= Math.floor(n_A_totalDEF * (1 * c.B_num.value - 1) * 5 / 100)),
            SkillSearch(196) && (n_A_totalDEF = Math.min(n_A_totalDEF * 2, 90));
    else {
        var e = 0;
        SkillSearch(256) && (e += -0.05 * SkillSearch(256)),
            n_A_Buf2[5] && (e += 1),
            SkillSearch(689) && (e += .02 * SkillSearch(689)),
            CardNumSearch(392) && (e -= .5),
            n_A_totalDEF *= 1 + e,
            c.B_num.value >= 2 && (n_A_totalDEF -= Math.floor(n_A_totalDEF * (1 * c.B_num.value - 1) * 5 / 100)),
            SkillSearch(258) && (n_A_totalDEF = 0),
            SkillSearch(610) && (n_A_totalDEF = 0)
    }
    if (SRV < 50) {
        for (_ = 0; 11 > _; _++)
            n_A_Buf2[4] == _ && (P_VIT1 = n_A_VIT * (.05 * _));
        o = parseInt(n_A_VIT + P_VIT1),
            n_A_Buf7[31] && (o -= Math.floor(.1 * o)),
            n_A_Buf6[5] && (o -= Math.floor((.05 + .05 * n_A_Buf6[5]) * o)),
            SkillSearch(258) && (n_A_totalDEF = 0,
                o = 0);
        var t = -n_A_totalDEF
            , A = "";
        if (0 == t ? A = "-" : t > 0 && (A = "+"),
            myInnerHtml("A_totalDEF", n_A_totalDEF + "+" + o + " (" + A + t + " % dmg)", 0),
            n_A_VITDEF = new Array,
            n_A_VITDEF[0] = Math.floor(.5 * n_A_VIT) + Math.floor(.3 * n_A_VIT),
            n_A_VITDEF[2] = Math.floor(.5 * n_A_VIT) + Math.floor(n_A_VIT * n_A_VIT / 150) - 1,
            n_A_VITDEF[2] > n_A_VITDEF[0] ? n_A_VITDEF[1] = (n_A_VITDEF[0] + n_A_VITDEF[2]) / 2 : (n_A_VITDEF[1] = n_A_VITDEF[0],
                n_A_VITDEF[2] = n_A_VITDEF[0]),
            SkillSearch(12))
            for (_ = 0; 2 >= _; _++)
                n_A_VITDEF[_] = Math.floor(.45 * n_A_VITDEF[_]);
        else if (n_A_Buf6[5])
            for (_ = 0; 2 >= _; _++)
                n_A_VITDEF[_] = Math.floor(n_A_VITDEF[_] * (.95 - .05 * n_A_Buf6[5]));
        else if (n_A_Buf7[31])
            for (_ = 0; 2 >= _; _++)
                n_A_VITDEF[_] = Math.floor(.9 * n_A_VITDEF[_]);
        if (n_tok[24])
            for (_ = 0; 2 >= _; _++)
                n_A_VITDEF[_] = Math.floor(n_A_VITDEF[_] / n_tok[24]);
        if (SkillSearch(256))
            for (_ = 0; 2 >= _; _++)
                n_A_VITDEF[_] = Math.floor(n_A_VITDEF[_] * (1 - .05 * SkillSearch(256)));
        if (n_A_Buf2[4])
            for (_ = 0; 2 >= _; _++)
                n_A_VITDEF[_] = Math.floor(n_A_VITDEF[_] * (1 + .05 * n_A_Buf2[4]));
        if (n_A_Buf6[21])
            for (_ = 0; 2 >= _; _++)
                n_A_VITDEF[_] -= Math.floor(25 * n_A_VITDEF[_] / 100);
        if (SkillSearch(258))
            for (_ = 0; 2 >= _; _++)
                n_A_VITDEF[_] = 0;
        if (c.B_num.value >= 2)
            for (_ = 0; 2 >= _; _++)
                n_A_VITDEF[_] -= Math.floor(n_A_VITDEF[_] * (1 * c.B_num.value - 1) * 5 / 100)
    } else {
        var o = Math.floor(n_A_VIT / 2 + n_A_BaseLV / 2 + n_A_AGI / 5);
        SkillSearch(12) ? o = Math.floor(.45 * o) : n_A_Buf6[5] ? o = Math.floor(o * (.95 - .05 * n_A_Buf6[5])) : n_A_Buf7[31] && (o = Math.floor(.9 * o)),
            n_tok[24] && (o = Math.floor(o / n_tok[24])),
            n_A_Buf2[4] && (o = Math.floor(o * (1 + .05 * n_A_Buf2[4]))),
            c.B_num.value >= 2 && (o -= Math.floor(o * (1 * c.B_num.value - 1) * 5 / 100)),
            TimeItemNumSearch(33) && (o -= Math.floor(20 * o / 100)),
            n_A_Buf6[21] && (o -= Math.floor(25 * o / 100)),
            SkillSearch(256) && (o = Math.floor(o * (1 - .05 * SkillSearch(256)))),
            SkillSearch(258) && (o = 0);
        var t = -Math.floor(1e3 - 1e3 * defReduction(n_A_totalDEF))
            , A = "";
        for (0 == t ? A = "-" : t > 0 && (A = "+"),
            myInnerHtml("A_totalDEF", n_A_totalDEF + "+" + o + " (" + A + t / 10 + " % dmg)", 0),
            n_A_VITDEF = new Array,
            _ = 0; 2 >= _; _++)
            n_A_VITDEF[_] = o
    }
    if (n_A_MDEF = n_tok[19] + n_A_Buf9[35],
        3 == n_A_JobClass() && (n_A_MDEF += CardNumSearch(383)),
        n_A_Buf7[33] && (n_A_MDEF += 3),
        213 == n_A_card[9] && (n_A_MDEF += 5),
        213 == n_A_card[16] && (n_A_MDEF += 5),
        213 == n_A_card[17] && (n_A_MDEF += 5),
        213 == n_A_card[18] && (n_A_MDEF += 5),
        EquipNumSearch(764) && (n_A_MDEF += n_A_HEAD_REFINE + n_A_LEFT_REFINE),
        1169 == n_A_Equip[0] && (n_A_MDEF += n_A_Weapon_refine),
        // * Frus extra MDEF on mage
        199 == n_A_card[11] && 5 == n_A_JobClass() && (n_A_MDEF += 3),
        (EquipNumSearch(809) || 1350 == n_A_Equip[2]) && (n_A_MDEF += n_A_HEAD_REFINE),
        n_A_HEAD_REFINE <= 5 && 213 == n_A_card[8] && (n_A_MDEF += 5),
        n_A_LEFT_REFINE <= 5 && 222 == n_A_card[10] && (n_A_MDEF += 3),
        n_A_BODY_REFINE <= 5 && 283 == n_A_card[11] && (n_A_MDEF += 5),
        n_A_LEFT_REFINE >= 9 && 310 == n_A_card[10] && (n_A_MDEF += 5),
        // * Megalith card 26th March patch
        n_A_SHOES_REFINE <= 5 && 381 == n_A_card[13] && (n_A_MDEF += 10),
        n_A_HEAD_REFINE >= 6 && 1593 == n_A_Equip[2] && (n_A_MDEF += n_A_HEAD_REFINE - 5),
        n_A_HEAD_REFINE >= 7 && 1277 == n_A_Equip[2] && (n_A_MDEF += 1),
        n_A_HEAD_REFINE >= 7 && 1281 == n_A_Equip[2] && (n_A_MDEF += 7),
        n_A_HEAD_REFINE >= 7 && 1478 == n_A_Equip[2] && (n_A_MDEF += 7),
        n_A_HEAD_REFINE >= 7 && 1483 == n_A_Equip[2] && (n_A_MDEF += 5),
        n_A_SHOULDER_REFINE <= 5 && 258 == n_A_card[12] && (n_A_MDEF += 8),
        986 != n_A_Equip[6] || 3 != n_A_JobClass() && 4 != n_A_JobClass() && 5 != n_A_JobClass() || (n_A_MDEF += 5),
        SkillSearch(9) ? n_A_MDEF += SkillSearch(9) : SkillSearch(256) && (n_A_MDEF += 1),
        (TimeItemNumSearch(9) || TimeItemNumSearch(50)) && (n_A_MDEF -= 20),
        (TimeItemNumSearch(33) || TimeItemNumSearch(51)) && (n_A_MDEF += 20),
        (n_A_Buf6[13] || n_A_Buf6[15]) && (n_A_MDEF += Math.floor(.25 * n_A_MDEF)),
        SRV < 50)
        SkillSearch(196) && (n_A_MDEF = Math.min(n_A_MDEF * 4, 90)),
            CardNumSearch(392) && (n_A_MDEF -= 50),
            n_A_MDEF >= 99 && (n_A_MDEF = 99);
    else {
        var l = 0;
        n_A_Buf2[5] && (l += 1),
            CardNumSearch(392) && (l -= .5),
            n_A_MDEF *= 1 + l,
            SkillSearch(258) && (n_A_MDEF = 0)
    }
    SRV < 50 ? (n_A_INTMDEF = n_A_INT,
        n_A_softMDEF = n_A_INT + Math.floor(n_A_VIT / 2),
        n_A_Buf6[4] && (n_A_softMDEF -= Math.floor(n_A_softMDEF * n_A_Buf6[4] * .12)),
        SkillSearch(258) && (n_A_MDEF = 0,
            n_A_INTMDEF = 0,
            n_A_softMDEF = 0)) : (n_A_softMDEF = Math.floor(n_A_INT + n_A_VIT / 5 + n_A_DEX / 5 + n_A_BaseLV / 4),
                TimeItemNumSearch(9) && (n_A_softMDEF -= Math.floor(20 * n_A_softMDEF / 100)),
                n_A_INTMDEF = n_A_softMDEF);
    var u = -Math.floor(1e3 - 1e3 * mdefReduction(n_A_MDEF))
        , A = "";
    if (0 == u ? A = "-" : u > 0 && (A = "+"),
        myInnerHtml("A_MDEF", n_A_MDEF + "+" + n_A_INTMDEF + " (" + A + u / 10 + " % dmg)", 0),
        myInnerHtml("A_RealMDEF", n_A_MDEF + "+" + n_A_softMDEF + " (" + A + u / 10 + " % dmg)", 0),
        SRV < 50 ? n_A_HIT = n_A_BaseLV + n_A_DEX : n_A_HIT = 175 + n_A_BaseLV + n_A_DEX + Math.floor(n_A_LUK / 3),
        n_A_HIT += n_tok[8] + n_A_Buf9[36],
        n_A_HIT += Math.floor(n_A_JobLV / 10) * CardNumSearch(492),
        SRV && 324 == n_A_ActiveSkill && (n_A_HIT += 20),
        n_A_Buf2[20] && (n_A_HIT += 50),
        n_A_Buf3[4] && (n_A_HIT += 10 + 2 * n_A_Buf3[4] + n_A_Buf3[34] + Math.floor(n_A_Buf3[24] / 10)),
        n_A_Buf7[0] && (n_A_HIT += 30),
        n_A_Buf7[27] ? n_A_HIT += 33 : n_A_Buf7[46] ? n_A_HIT += 30 : n_A_Buf7[18] && (n_A_HIT += 10),
        10 == n_A_WeaponType && (n_A_HIT += 5 * CardNumSearch(465)),
        654 == n_A_Equip[0] && (n_A_HIT += Math.floor(SU_AGI / 10)),
        656 == n_A_Equip[0] && (n_A_HIT -= Math.floor(SU_DEX / 3)),
        1796 == n_A_Equip[0] && (n_A_HIT += Math.floor(SU_LUK / 2)),
        SU_STR >= 90 && (n_A_HIT += 10 * EquipNumSearch(442)),
        SU_STR >= 95 && 1167 == n_A_Equip[0] && (n_A_HIT += 10),
        3 != n_A_WeaponType && 2 != n_A_WeaponType || (n_A_HIT += 5 * CardNumSearch(464)),
        EquipNumSearch(1005) & EquipNumSearch(442) && (n_A_HIT += Math.floor(n_A_Weapon_refine / 2)),
        1176 == n_A_Equip[0] && 10 == SkillSearch(81) && (n_A_HIT += 10),
        n_A_HEAD_REFINE >= 7 && 1480 == n_A_Equip[2] && (n_A_HIT += 5),
        n_A_HEAD_REFINE >= 7 && 1549 == n_A_Equip[2] && (n_A_HIT += 5),
        n_A_HIT += 1 * SkillSearch(39),
        n_A_HIT += 2 * SkillSearch(148),
        n_A_HIT += 3 * SkillSearch(270),
        n_A_HIT += 10 * SkillSearch(256),
        n_A_HIT += 1 * SkillSearch(426),
        n_A_HIT += 2 * SkillSearch(425),
        SkillSearch(421) && (n_A_HIT -= 30),
        SkillSearch(422) && (n_A_HIT += 20),
        n_A_Buf7[16] && (n_A_HIT += Math.floor(.03 * n_A_HIT)),
        n_A_Buf6[11] && (n_A_HIT = Math.round(.75 * n_A_HIT)),
        n_A_HIT < 1 && SRV > 0 && (n_A_HIT = 1),
        myInnerHtml("A_HIT", n_A_HIT, 0),
        n_tok[86] += n_A_Buf9[55],
        myInnerHtml("A_PefHIT", n_tok[86], 0),
        SRV < 50 ? n_A_FLEE = n_A_BaseLV + n_A_AGI : n_A_FLEE = 100 + n_A_BaseLV + n_A_AGI + Math.floor(n_A_LUK / 5),
        n_A_FLEE += n_tok[9] + n_A_Buf9[37],
        24 == n_A_JOB && (n_A_FLEE += Math.round(SkillSearch(273) / 2)),
        SkillSearch(383) && (n_A_FLEE += 10),
        SkillSearch(356) && (n_A_FLEE += Math.floor((n_A_BaseLV + n_A_LUK + n_A_DEX) / 10)),
        SkillSearch(421) && (n_A_FLEE += 30),
        483 == n_A_Equip[0] && (n_A_FLEE -= n_A_BaseLV + SU_AGI),
        1714 == n_A_Equip[7] && (n_A_FLEE += 2 * n_A_SHOULDER_REFINE),
        1718 == n_A_Equip[6] && (n_A_FLEE += n_A_BODY_REFINE),
        n_A_Buf2[20] && (n_A_FLEE += 50),
        n_A_Buf3[0] && (n_A_FLEE += n_A_Buf3[0] + Math.floor(n_A_Buf3[30] / 2) + Math.floor(n_A_Buf3[20] / 10)),
        n_A_Buf7[1] && (n_A_FLEE += 30),
        n_A_Buf7[28] ? n_A_FLEE += 33 : n_A_Buf7[46] && (n_A_FLEE += 30),
        TimeItemNumSearch(1) && (n_A_FLEE += 30 * TimeItemNumSearch(1)),
        SU_STR >= 90 && (n_A_FLEE += 10 * EquipNumSearch(442)),
        // WELDER card extra flee if agi <= 80
        SU_AGI <= 80 && (n_A_FLEE += 20 * CardNumSearch(585)),
        n_A_Buf2[9] && 0 == SkillSearch(273) && (n_A_FLEE += Math.round(n_A_Buf2[9] / 2)),
        2 == n_A_JobClass() && 295 == n_A_card[12] && (n_A_FLEE += 20),
        n_A_HEAD_REFINE >= 6 && 1555 == n_A_Equip[2] && (n_A_FLEE += 2),
        n_A_HEAD_REFINE >= 5 && 1576 == n_A_Equip[2] && (n_A_FLEE += 5),
        n_A_HEAD_REFINE >= 7 && 1576 == n_A_Equip[2] && (n_A_FLEE += 2),
        n_A_HEAD_REFINE >= 7 && 1541 == n_A_Equip[2] && (n_A_FLEE += 2),
        n_A_HEAD_REFINE >= 7 && 1276 == n_A_Equip[2] && (n_A_FLEE += 10),
        n_A_HEAD_REFINE >= 7 && 1280 == n_A_Equip[2] && (n_A_FLEE += 10),
        n_A_HEAD_REFINE >= 7 && 1282 == n_A_Equip[2] && (n_A_FLEE += 10),
        n_A_HEAD_REFINE >= 7 && 1283 == n_A_Equip[2] && (n_A_FLEE += 10),
        n_A_HEAD_REFINE >= 7 && 1481 == n_A_Equip[2] && (n_A_FLEE += 10),
        n_A_HEAD_REFINE >= 7 && 1550 == n_A_Equip[2] && (n_A_FLEE += 10),
        n_A_HEAD_REFINE >= 9 && 1285 == n_A_Equip[2] && (n_A_FLEE += 5),
        n_A_SHOULDER_REFINE >= 8 && 271 == n_A_card[12] && (n_A_FLEE += 20),
        n_A_SHOULDER_REFINE <= 4 && 401 == n_A_card[12] && (n_A_FLEE += 10),
        n_A_SHOULDER_REFINE >= 9 && 403 == n_A_card[12] && (n_A_FLEE += 5),
        2 == n_A_Buf6[0] && n_A_Buf6[1] >= 1 && 4 == n_A_Bodyelement && (n_A_FLEE += 3 * n_A_Buf6[1]),
        8 == n_A_JOB || 14 == n_A_JOB || 22 == n_A_JOB || 28 == n_A_JOB ? n_A_FLEE += 4 * SkillSearch(14) : n_A_FLEE += 3 * SkillSearch(14),
        SkillSearch(433) && (20 != n_A_WeaponType && 0 != n_A_WeaponType || (n_A_FLEE -= 5 * SkillSearch(433))),
        // * Dodge values updated, from 1.5 to 2
        // Mikiri = new Array(0,1,3,4,6,7,9,10,12,13,15),
        // n_A_FLEE += Mikiri[SkillSearch(191)],
        n_A_FLEE += SkillSearch(191) * 2,
        SRV >= 50) {
        var r = 1;
        n_A_FLEE = Math.floor(n_A_FLEE * r)
    }
    if (c.B_num.value >= 2) {
        var S = 1 * c.B_num.value - 1;
        S > 10 && (S = 10),
            n_A_FLEE -= Math.floor(n_A_FLEE * S * 10 / 100)
    }
    if (SkillSearch(258) && (n_A_FLEE = Math.round(n_A_FLEE / 2)),
        n_A_Buf6[11] && (n_A_FLEE = Math.round(.75 * n_A_FLEE)),
        n_A_Buf6[12] && (n_A_FLEE = 0),
        n_A_Buf6[14] && (n_A_FLEE = 0),
        n_A_Buf6[15] && (n_A_FLEE = 0),
        n_A_FLEE < 0 && 0 == SRV && (n_A_FLEE = 0),
        n_A_FLEE < 1 && SRV > 0 && (n_A_FLEE = 1),

        // * 2HQ Gives 1 extra flee per lvl
        SkillSearch(74) && n_A_WeaponType === 3 && (n_A_FLEE += SkillSearch(74)),

        myInnerHtml("A_FLEE", n_A_FLEE, 0),
        myInnerHtml("A_WoeFLEE", Math.floor(.8 * n_A_FLEE), 0),
        n_A_LUCKY = 1 + .1 * n_A_LUK,
        n_A_LUCKY += n_tok[11] + n_A_Buf9[38],
        n_A_Buf7[18] && (n_A_LUCKY += 20),
        1 == n_A_JobClass() && (n_A_LUCKY += 3 * CardNumSearch(354)),
        2 == n_A_JobClass() && 391 == n_A_card[13] && (n_A_LUCKY += 5),
        n_A_SHOULDER_REFINE > 6 && 1724 == n_A_Equip[7] && (n_A_LUCKY += n_A_SHOULDER_REFINE - 6),
        n_A_SHOULDER_REFINE <= 4 && 401 == n_A_card[12] && (n_A_LUCKY += 1),
        535 == n_A_Equip[7]) {
        var i = n_A_JobClass();
        3 != i && 4 != i && 5 != i || (n_A_LUCKY += 5,
            n_A_LUCKY += 2 * n_A_SHOULDER_REFINE)
    }
    41 == n_A_JobClass() && 678 == n_A_Equip[3] && (n_A_LUCKY += 2),
        n_A_LUCKY = Math.round(10 * n_A_LUCKY) / 10,
        n_A_LUCKY < 0 && (n_A_LUCKY = 0),
        myInnerHtml("A_LUCKY", n_A_LUCKY, 0),
        n_A_CRI = 1 + .33 * n_A_LUK,
        S = 0,
        S += n_tok[10] + n_A_Buf9[39],
        S += n_tok[110 + selectedMonster[2]],
        S += Math.floor(n_A_JobLV / 10) * CardNumSearch(492),
        24 == n_A_JOB && (S += SkillSearch(270)),
        SkillSearch(253) && (S += 50),
        (n_A_Buf7[16] || n_A_Buf7[19]) && (S += 7),
        2 == n_A_JobClass() && (S += 4 * CardNumSearch(328)),
        10 == n_A_WeaponType && (S += 5 * CardNumSearch(465)),
        402 == n_A_card[12] && (S += n_A_SHOULDER_REFINE),
        640 == n_A_Equip[0] && (S += Math.floor(SU_LUK / 5)),
        689 == n_A_Equip[6] && (S += Math.floor(SU_LUK / 10)),
        623 == n_A_Equip[0] && (S += n_A_Weapon_refine),
        1161 == n_A_Equip[0] && (S += 2 * SkillSearch(89)),
        1709 == n_A_Equip[7] && (S += n_A_SHOULDER_REFINE),
        n_A_Weapon_refine >= 9 && (S += 10 * CardNumSearch(532)),
        SU_AGI >= 90 && (S += 10 * EquipNumSearch(442)),
        SU_LUK >= 80 && 267 == n_A_card[12] && (S += 3),
        SU_DEX >= 90 && 1164 == n_A_Equip[0] && (S += 5),
        3 != n_A_WeaponType && 2 != n_A_WeaponType || (S += 5 * CardNumSearch(464)),
        6 == n_A_JobClass() && (S += 5 * EquipNumSearch(1122)),
        41 == n_A_JobClass() && 675 == n_A_Equip[2] && (S += 5),
        3 != n_A_JobClass() || 1 != selectedMonster[2] && 6 != selectedMonster[2] || (S += 9 * CardNumSearch(253)),
        n_A_HEAD_REFINE >= 6 && 785 == n_A_Equip[2] && (S += n_A_HEAD_REFINE - 5),
        n_A_HEAD_REFINE >= 7 && 1612 == n_A_Equip[2] && (S += 10),
        n_A_HEAD_REFINE >= 8 && 1555 == n_A_Equip[2] && (S += 10),
        n_A_Weapon_refine >= 6 && 7 == selectedMonster[2] && 1091 == n_A_Equip[0] && (S += 5),
        10 == n_A_WeaponType && 15 == n_A_Arrow && (S += 20),
        (10 == n_A_WeaponType || 17 <= n_A_WeaponType && n_A_WeaponType <= 21) && (S += 15 * CardNumSearch(462)),
        SkillSearch(195) ? S += 7.5 + 2.5 * SkillSearch(195) : TimeItemNumSearch(34) && (S += 10),
        // Spear Quicken: Add 1 CRIT per skill level
        (4 == n_A_WeaponType || 5 == n_A_WeaponType) && SkillSearch(166) && (n_A_CRI += SkillSearch(166)),
        n_A_CRI += S,
        n_A_Buf3[5] && (n_A_CRI += 10 + n_A_Buf3[5] + Math.floor(n_A_Buf3[35] / 2) + Math.floor(n_A_Buf3[25] / 10)),
        11 == n_A_WeaponType && (n_A_CRI *= 2),
        n_A_CRI = Math.round(10 * n_A_CRI) / 10,
        n_A_Buf6[9] && (n_A_CRI = 0),

        // * Brutality status
        n_A_Buf8[8] === 38 && (n_A_CRI += 5),
        n_A_Buf8[9] === 38 && (n_A_CRI += 5),
        n_A_Buf8[10] === 38 && (n_A_CRI += 5),
        n_A_Buf8[11] === 38 && (n_A_CRI += 5),

        // * 2HQ Gives 0.8 extra crit per lvl
        SkillSearch(74) && n_A_WeaponType === 3 && (n_A_CRI += SkillSearch(74) * 0.8),

        // * Katar mastery 1 extra crit per lvl
        // ? Crit adds 10, but wiki description hints this has to double, check
        SkillSearch(81) && n_A_WeaponType === 11 && (n_A_CRI += SkillSearch(81) * 1),
        n_A_CRI = Number(n_A_CRI).toFixed(1),

        myInnerHtml("A_CRI", n_A_CRI, 0),
        n_A_CRITshield = 1 + .2 * n_A_LUK,
        n_A_CRITshield = Math.round(10 * n_A_CRITshield) / 10,
        myInnerHtml("A_CRITSHIELD", n_A_CRITshield, 0),
        S = n_tok[88] + n_A_Buf9[42],
        n_A_Buf7[2] && (S += 10),
        n_A_Buf7[10] || n_A_Buf7[46] ? S += 20 : n_A_Buf7[30] && (S += 15),
        1785 == n_A_Equip[5] && SU_INT > 97 && (S += 10),
        1492 == n_A_Equip[2] && 89 == n_A_Equip[0] && (S += 10 * n_A_Weapon_refine),
        1492 == n_A_Equip[2] && 936 == n_A_Equip[0] && (S += 10 * n_A_Weapon_refine),
        1561 == n_A_Equip[2] && 1563 == n_A_Equip[3] && (S += 30),
        n_A_HEAD_REFINE >= 7 && 1280 == n_A_Equip[2] && (S += 15),
        n_A_SHOULDER_REFINE >= 7 && SU_INT >= 90 && 1472 == n_A_Equip[7] && (S += 30),
        n_A_SHOULDER_REFINE >= 9 && SU_INT >= 90 && 1472 == n_A_Equip[7] && (S += 20),
        n_A_Buf7[17] && (S += Math.floor(.05 * S));
    var s = S;
    S = 100 + n_tok[89] + n_A_Buf9[43],
        n_A_Buf6[2] && (S += 10),
        646 == n_A_Equip[0] && (S += Math.floor(n_A_Weapon_refine / 2)),
        1682 == n_A_Equip[0] && (S += 3 * n_A_Weapon_refine),
        1083 == n_A_Equip[0] && (S += n_A_Weapon_refine),
        1173 == n_A_Equip[0] && (S += Math.floor(n_A_Weapon_refine / 2)),
        1569 == n_A_Equip[0] && (S += n_A_Weapon_refine),
        EquipNumSearch(737) && (S += n_A_Weapon_refine),
        EquipNumSearch(1042) && (S += n_A_Weapon_refine),
        14 != n_A_JOB && 28 != n_A_JOB || (S += 10 * CardNumSearch(479)),
        484 == n_A_Equip[0] && SU_INT >= 70 && (S += 5),
        5 == n_A_JobClass() && CardNumSearch(454) && (S += 3),
        n_A_HEAD_REFINE >= 9 && 177 == n_A_card[8] && (S += 2),
        n_A_HEAD_REFINE >= 5 && 1492 == n_A_Equip[2] && (S += 3),
        n_A_HEAD_REFINE >= 5 && 1218 == n_A_Equip[2] && (S += n_A_HEAD_REFINE - 4),
        n_A_HEAD_REFINE >= 5 && 1495 == n_A_Equip[2] && (S += n_A_HEAD_REFINE - 4),
        n_A_HEAD_REFINE >= 6 && 1029 == n_A_Equip[2] && (S += n_A_HEAD_REFINE - 5),
        n_A_HEAD_REFINE >= 7 && 565 == n_A_Equip[2] && (S += 1),
        n_A_HEAD_REFINE >= 7 && 1284 == n_A_Equip[2] && (S += 3),
        n_A_HEAD_REFINE >= 7 && 1482 == n_A_Equip[2] && (S += 3),
        n_A_HEAD_REFINE >= 7 && 1286 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 7 && 1287 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 7 && 1483 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 7 && 1484 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 7 && 1485 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 7 && 1277 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 7 && 1548 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 7 && 1281 == n_A_Equip[2] && (S += 8),
        n_A_HEAD_REFINE >= 7 && 1478 == n_A_Equip[2] && (S += 8),
        n_A_HEAD_REFINE >= 7 && 1551 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 7 && 1292 == n_A_Equip[2] && (S += 1),
        n_A_HEAD_REFINE >= 7 && 1293 == n_A_Equip[2] && (S += 1),
        n_A_HEAD_REFINE >= 7 && 1492 == n_A_Equip[2] && (S += 3),
        n_A_HEAD_REFINE >= 7 && 1407 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 9 && 1407 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 9 && 1284 == n_A_Equip[2] && (S += 5),
        10 == n_A_HEAD_REFINE && 1289 == n_A_Equip[2] && (S += 4),
        n_A_Weapon_refine >= 9 && 642 == n_A_Equip[0] && (S += 3),
        n_A_Weapon_refine >= 9 && 1084 == n_A_Equip[0] && (S += 5),
        n_A_Weapon_refine >= 9 && 1095 == n_A_Equip[0] && (S += 5),
        14 != n_A_JobClass2() && 44 != n_A_JOB || (S += 15 * EquipNumSearch(897)),
        14 != n_A_JobClass2() && 44 != n_A_JOB || (S += 15 * EquipNumSearch(898)),
        1799 == n_A_Equip[2] && (wSPVS = n_A_JobClass(),
            3 != wSPVS && 5 != wSPVS || (S += 8,
                n_tok[99] += 7),
            4 == wSPVS && (n_tok[25] += 10));
    var f = S;
    if (SRV < 50)
        n_A_MATK = [0, 0, 0],
            S = Math.floor(n_A_INT / 7),
            n_A_MATK[0] = n_A_INT + S * S,
            S = Math.floor(n_A_INT / 5),
            n_A_MATK[2] = n_A_INT + S * S,
            n_A_MATK[0] += s,
            n_A_MATK[2] += s,
            n_A_MATK[0] = Math.floor(n_A_MATK[0] * f / 100),
            n_A_MATK[2] = Math.floor(n_A_MATK[2] * f / 100),
            849 == n_A_Equip[2] && (n_A_MATK[0] += Math.floor(n_A_MATK[0] * Math.floor(n_A_HEAD_REFINE / 2) / 100),
                n_A_MATK[2] += Math.floor(n_A_MATK[2] * Math.floor(n_A_HEAD_REFINE / 2) / 100)),
            BK_n_A_MATK = [0, 0, 0],
            BK_n_A_MATK[0] = n_A_MATK[0],
            BK_n_A_MATK[2] = n_A_MATK[2],
            BK_n_A_MATK[0] != BK_n_A_MATK[2] && (BK_n_A_MATK[2] -= 1),
            BK_n_A_MATK[1] = (BK_n_A_MATK[2] + BK_n_A_MATK[0]) / 2,
            n_A_Buf6[4] && (S = 100 + 20 * n_A_Buf6[4],
                n_A_MATK[0] = Math.floor(n_A_MATK[0] * S / 100),
                n_A_MATK[2] = Math.floor(n_A_MATK[2] * S / 100)),
            SkillSearch(276) && (n_A_MATK[0] = Math.floor(n_A_MATK[0] * (1 + .05 * SkillSearch(276))),
                n_A_MATK[2] = Math.floor(n_A_MATK[2] * (1 + .05 * SkillSearch(276)))),

                // WELDER extra MATK, this is weird but looks ok
            SU_INT <= 80 && (n_A_MATK[0] += Math.floor(n_A_MATK[0] * 0.1 * CardNumSearch(585))),
            SU_INT <= 80 && (n_A_MATK[1] += Math.floor(n_A_MATK[1] * 0.1 * CardNumSearch(585))),
            SU_INT <= 80 && (n_A_MATK[2] += Math.floor(n_A_MATK[2] * 0.1 * CardNumSearch(585)));
    else {
        n_A_StatMATK = n_A_INT + Math.floor(n_A_INT / 2) + Math.floor(n_A_DEX / 5) + Math.floor(n_A_LUK / 3) + Math.floor(n_A_BaseLV / 4);
        var E = 0;
        10 == n_A_WeaponType ? E = 0 : 1 === n_A_WeaponLV ? E = 2 * n_A_Weapon_refine : 2 === n_A_WeaponLV ? E = 3 * n_A_Weapon_refine : 3 === n_A_WeaponLV ? E = 5 * n_A_Weapon_refine : 4 === n_A_WeaponLV && (E = 7 * n_A_Weapon_refine),
            overrefineMagicAttack = 0,
            10 == n_A_WeaponType ? overrefineMagicAttack = 0 : 1 == n_A_WeaponLV && n_A_Weapon_refine >= 8 ? overrefineMagicAttack = 3 * (n_A_Weapon_refine - 7) : 2 == n_A_WeaponLV && n_A_Weapon_refine >= 7 ? overrefineMagicAttack = 5 * (n_A_Weapon_refine - 6) : 3 == n_A_WeaponLV && n_A_Weapon_refine >= 6 ? overrefineMagicAttack = 8 * (n_A_Weapon_refine - 5) : 4 == n_A_WeaponLV && n_A_Weapon_refine >= 5 && (overrefineMagicAttack = 14 * (n_A_Weapon_refine - 4)),
            minOverrefineMagicAttack = 0,
            overrefineMagicAttack > 0 && (minOverrefineMagicAttack = 1),
            n_Nitou && (1 === n_A_Weapon2LV ? E += 2 * n_A_Weapon2_refine : 2 === n_A_Weapon2LV ? E += 3 * n_A_Weapon2_refine : 3 === n_A_Weapon2LV ? E += 5 * n_A_Weapon2_refine : 4 === n_A_Weapon2LV && (E += 7 * n_A_Weapon2_refine),
                1 == n_A_Weapon2LV && n_A_Weapon2_refine >= 8 ? overrefineMagicAttack += 3 * (n_A_Weapon2_refine - 7) : 2 == n_A_Weapon2LV && n_A_Weapon2_refine >= 7 ? overrefineMagicAttack += 5 * (n_A_Weapon2_refine - 6) : 3 == n_A_Weapon2LV && n_A_Weapon2_refine >= 6 ? overrefineMagicAttack += 8 * (n_A_Weapon2_refine - 5) : 4 == n_A_Weapon2LV && n_A_Weapon2_refine >= 5 && (overrefineMagicAttack += 14 * (n_A_Weapon2_refine - 4)),
                overrefineMagicAttack > 0 && (minOverrefineMagicAttack = 1));
        for (var d = 0, B = 0; 0 != m_Item[n_A_Equip[0]][B + 0]; B += 2)
            88 == m_Item[n_A_Equip[0]][B + 0] && (d = m_Item[n_A_Equip[0]][B + 0 + 1]);
        var v = Math.floor((d + E) * n_A_WeaponLV * .1);
        n_A_StatMATK = n_A_StatMATK * f / 100,
            v = v * f / 100,
            n_A_EquipMATK = (s + E) * f / 100,
            n_A_StatMATK = Math.floor(n_A_StatMATK),
            v = Math.floor(v),
            n_A_EquipMATK = Math.floor(n_A_EquipMATK),
            n_A_MATK = [0, 0, 0],
            n_A_MATK[0] = n_A_StatMATK + n_A_EquipMATK - v + minOverrefineMagicAttack,
            n_A_MATK[2] = n_A_StatMATK + n_A_EquipMATK + v + overrefineMagicAttack,
            n_A_MATK[1] = Math.floor((n_A_MATK[0] + n_A_MATK[2]) / 2),
            BK_n_A_MATK = [0, 0, 0],
            BK_n_A_MATK[0] = n_A_MATK[0],
            BK_n_A_MATK[1] = n_A_MATK[1],
            BK_n_A_MATK[2] = n_A_MATK[2]
    }
    myInnerHtml("A_MATK", n_A_MATK[0] + "~" + n_A_MATK[2], 0),
        n_A_MATK[0] != n_A_MATK[2] && (n_A_MATK[2] -= 1),
        n_A_MATK[1] = (n_A_MATK[2] + n_A_MATK[0]) / 2;
    var p = 0;
    78 == m_JobBuff[n_A_JOB][5] ? c.A_skill5.value > 0 && (p = 1) : 78 == m_JobBuff[n_A_JOB][8] && c.A_skill8.value > 0 && (p = 1),
        S = 100,
        1324 == n_A_Equip[2] && p ? S = 1.96 * S : n_tok[209] || n_A_Buf2[1] || n_A_Buf7[26] ? S = 1.4 * S : n_A_Buf2[9] ? S = 1.24 * S : CardNumSearch(451) && (S = 1.05 * S),
        1324 != n_A_Equip[2] && p && (S = 1.4 * S),
        1324 != n_A_Equip[2] || p || (S = 1.4 * S),
        S -= 10 * n_A_Buf6[19],
        n_A_Buf6[22] ? S = 25 : 196 == m_JobBuff[n_A_JOB][6] && c.A_skill6.value > 0 && (S = 20),
        myInnerHtml("A_MovSPEED", S + " %", 0),
        S = n_tok[12] + n_A_Buf9[44],
        624 == n_A_Equip[0] && (S += n_A_Weapon_refine),
        641 == n_A_Equip[0] && (S += n_A_Weapon_refine),
        654 == n_A_Equip[0] && (S += Math.floor(SU_AGI / 14)),
        484 == n_A_Equip[0] && SU_STR >= 50 && (S += 5),
        SU_STR >= 77 && 944 == n_A_Equip[0] && (S += 4),
        SU_STR >= 95 && 621 == n_A_Equip[0] && (S -= 40),
        SU_STR >= 95 && 1167 == n_A_Equip[0] && (S += 3),
        21 == n_A_JOB && EquipNumSearch(855) && (S -= 5),
        2 == n_A_JobClass() && (S += 3 * EquipNumSearch(1121)),
        EquipNumSearch(1004) && (S += Math.floor(n_A_Weapon_refine / 2)),
        903 == n_A_Equip[0] && 13 == n_A_JobClass2() && (S += 20),
        n_A_HEAD_REFINE >= 7 && 1283 == n_A_Equip[2] && (S += 3),
        n_A_HEAD_REFINE >= 7 && 1481 == n_A_Equip[2] && (S += 3),
        n_A_HEAD_REFINE >= 7 && 1288 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 8 && 1290 == n_A_Equip[2] && (S += 2),
        n_A_HEAD_REFINE >= 8 && 1555 == n_A_Equip[2] && (S += 8),
        10 == n_A_HEAD_REFINE && 1290 == n_A_Equip[2] && (S += 2),
        n_A_Weapon_refine >= 6 && 1081 == n_A_Equip[0] && (S += 10),
        n_A_Weapon_refine >= 6 && 1086 == n_A_Equip[0] && (S += 5),
        n_A_Weapon_refine >= 9 && 1086 == n_A_Equip[0] && (S += 5),
        n_A_Weapon_refine >= 6 && 1088 == n_A_Equip[0] && (S += 5),
        n_A_Weapon_refine >= 9 && 1088 == n_A_Equip[0] && (S += 5),
        n_A_Weapon_refine >= 7 && 1077 == n_A_Equip[0] && (S += 5),
        n_A_Weapon_refine >= 9 && 1077 == n_A_Equip[0] && (S += 5),
        n_A_Weapon2_refine >= 7 && 1077 == n_A_Equip[1] && (S += 5),
        n_A_Weapon2_refine >= 9 && 1077 == n_A_Equip[1] && (S += 5),
        n_A_SHOULDER_REFINE >= 7 && SU_AGI >= 90 && 1472 == n_A_Equip[7] && (S += 8);
    var m = S;
    if (D = 0,
        0 == n_A_Buf6[19] && 0 == n_A_Buf6[20] && (3 == n_A_WeaponType && SkillSearch(74) && (S += 30,
            D = 1),
            2 == n_A_WeaponType && SkillSearch(386) && (S += 30,
                D = 1),
            6 <= n_A_WeaponType && n_A_WeaponType <= 8 && SkillSearch(152) && (S += 30, D = 1),
            0 == D && SkillSearch(389) && (S += 30, D = 1),
            0 == D && (TimeItemNumSearch(5) || TimeItemNumSearch(28)) && (n_A_WeaponType > 5 && n_A_WeaponType < 9 || 0 == SRV) && (S += 30, D = 1),

            // * Spear quicken balance
            4 == n_A_WeaponType && SkillSearch(166) && (S += SkillSearch(166) * 0.5 + 7.5, D = 1),
            5 == n_A_WeaponType && SkillSearch(166) && (S += SkillSearch(166) * 1.5 + 20, D = 1)),


        !SkillSearch(78) || 0 != n_A_ActiveSkill && 284 != n_A_ActiveSkill || (S -= 10 * (6 - SkillSearch(78))),
        S += Math.round(SkillSearch(425) / 2),
        // * Iron fists +1% aspd per lvl
        (0 == n_A_WeaponType || 13 == n_A_WeaponType) && SkillSearch(183) && (S += SkillSearch(183)),

        // * Mace mastery +12% aspd at lvl 10 with maces
        8 == n_A_WeaponType && SkillSearch(89) == 10 && (S += 12),

        // * Musical lesson +1% aspd per lvl 
        14 == n_A_WeaponType && SkillSearch(198) && (S += SkillSearch(198)),

        // * Dancing lesson +1% aspd per lvl
        15 == n_A_WeaponType && SkillSearch(206) && (S += SkillSearch(206)),

        // * Axe mastery +0.8% aspd per lvl
        (6 == n_A_WeaponType || 7 == n_A_WeaponType) && SkillSearch(241) && (S += SkillSearch(241) * 0.8),

        12 == n_A_WeaponType && SkillSearch(224) && (S += SkillSearch(224) * 0.7),
        SkillSearch(196) && (S -= 25),
        SkillSearch(258) && (S += 30),
        SkillSearch(420) && (S += 20),
        SkillSearch(433) && (20 != n_A_WeaponType && 0 != n_A_WeaponType || (S += 2 * SkillSearch(433))),
        SkillSearch(357) && (D = 1,
            S += Math.floor((n_A_BaseLV + n_A_LUK + n_A_DEX) / 10)),
        SkillSearch(361) && n_A_JobLV >= 50 && (D = 1,
            S += 3 * SkillSearch(361)),
        0 == n_A_Buf6[19] && 0 == n_A_Buf6[20] && (0 == D && 2 == n_A_Buf2[6] ? 10 == n_A_WeaponType || 17 <= n_A_WeaponType && n_A_WeaponType <= 21 || (S += 25,
            D = 1) : 0 == D && 6 <= n_A_WeaponType && n_A_WeaponType <= 8 && 1 == n_A_Buf2[6] ? (S += 25,
                D = 1) : 0 == D && 6 <= n_A_WeaponType && n_A_WeaponType <= 8 && 3 == n_A_Buf2[6] && (S += 30,
                    D = 1)),
        n_A_Buf3[1] && 0 == D && (10 == n_A_WeaponType || 17 <= n_A_WeaponType && n_A_WeaponType <= 21 || (S += SRV ? 10 + n_A_Buf3[1] + Math.round(n_A_Buf3[31] / 2) + Math.round(n_A_Buf3[21] / 10) : 5 + n_A_Buf3[1] + Math.floor(n_A_Buf3[31] / 2) + Math.floor(n_A_Buf3[21] / 20))),
        3 == n_A_Buf7[35] ? S += 20 : n_A_Buf7[44] || 2 == n_A_Buf7[35] ? S += 15 : (n_A_Buf7[26] || 1 == n_A_Buf7[35]) && (S += 10),
        EquipNumSearch(1003) & EquipNumSearch(442) && (S += n_A_Weapon_refine / 2),
        1 * c.server.value < 50)
        1 == n_Nitou ? 0 == n_A_WeaponType && 0 != n_A_Weapon2Type ? WD = 50 * m_JobASPD[n_A_JOB][n_A_Weapon2Type] : WD = 35 * (m_JobASPD[n_A_JOB][n_A_WeaponType] + m_JobASPD[n_A_JOB][n_A_Weapon2Type]) : WD = 50 * m_JobASPD[n_A_JOB][n_A_WeaponType],
            n_A_ASPD = 200 - (WD - (Math.round(WD * n_A_AGI / 25) + Math.round(WD * n_A_DEX / 100)) / 10) * (1 - S / 100);
    else {
        if (n_A_ASPD = 0,
            jobASPD = m_JobASPD_R[n_A_JOB][n_A_WeaponType],
            50 !== n_A_JOB && 51 !== n_A_JOB || StPlusWeapon(bon_TWO_HANDED_STAFF) && (jobASPD += 5),
            15 === n_A_JobClass2() && StPlusWeapon(bon_TWO_HANDED_STAFF) && (62 === n_A_JOB || 63 === n_A_JOB ? jobASPD += 2 : jobASPD -= 2),
            n_Nitou) {
            var h = 1 * n_A_Weapon2Type + 1 * weapTyp_SHIELD + 1;
            jobASPD += m_JobASPD_R[n_A_JOB][h]
        }
        statASPD = Math.sqrt(9.9987 * n_A_AGI + .1922 * n_A_DEX);
        var N = 0;
        305 !== n_A_Equip[5] && (N = m_JobASPD_R[n_A_JOB][22]);
        var k = 0
            , D = 0;
        20 == n_A_WeaponType && (k += 2 * SkillSearch(433)),
            13 === n_A_JobClass2() && SkillSearch(78) && (k -= 10 * (5 - SkillSearch(78))),
            7 === n_A_JobClass2() && (SkillSearch(78) || SkillSearch(552)) && (k -= SkillSearch(78) ? 10 * (5 - SkillSearch(78)) : 5 * (5 - SkillSearch(552))),
            SkillSearch(196) && (k -= 25),
            SkillSearch(165) && (k -= 25 - 5 * SkillSearch(165)),
            3 == n_A_Buf7[35] ? k += 20 : n_A_Buf7[44] || 2 == n_A_Buf7[35] ? k += 15 : (n_A_Buf7[26] || 1 == n_A_Buf7[35]) && (k += 10),
            k = (100 - k) / 100;
        var b = 0;
        n_A_AGI < 205 && (b = (Math.sqrt(205) - Math.sqrt(n_A_AGI)) / 7.15);
        var I = .96;
        jobASPD > 145 && (I = 1 - (jobASPD - 144) / 50),
            n_A_ASPD = 200 - (200 - (jobASPD + N - b + statASPD * I)) * k,
            percentAspdEquipment = (195 - n_A_ASPD) * (m / 100),
            n_A_ASPD += percentAspdEquipment
    }
    var S = 0;
    S += EquipNumSearch(1696);
    n_A_Buf2[15] && (S -= 25 - 5 * n_A_Buf2[15]);
    47 == n_A_Equip[0] && (S += 2);
    1434 == n_A_Equip[0] && (S += Math.floor(n_A_Weapon_refine / 2));
    1632 == n_A_Equip[4] && (S += 1);
    EquipNumSearch(1722) && (S += 2);
    EquipNumSearch(1727) && (S -= 7);
    EquipNumSearch(1752) && (S += 1);
    SU_AGI >= 120 && EquipNumSearch(1255) && (S += 1);
    SU_AGI >= 120 && EquipNumSearch(1399) && (S += 1);
    SU_STR >= 120 && EquipNumSearch(1259) && (S += 1);
    10 == n_A_WeaponType && n_A_Weapon_refine >= 7 && (S += CardNumSearch(544));
    10 == n_A_WeaponType && n_A_Weapon_refine >= 9 && (S += CardNumSearch(544));
    3 == n_A_WeaponType && n_A_Weapon_refine >= 10 && (S += CardNumSearch(525));
    3 == n_A_WeaponType && n_A_Weapon_refine >= 14 && (S += CardNumSearch(525));
    10 == n_A_WeaponType && n_A_Weapon_refine >= 10 && (S += CardNumSearch(528));
    10 == n_A_WeaponType && n_A_Weapon_refine >= 14 && (S += CardNumSearch(528));
    n_A_SHOULDER_REFINE >= 9 && SU_AGI >= 90 && 1472 == n_A_Equip[7] && (S += 1);
    SkillSearch(560) && (S += SkillSearch(555) / 10 * 4);
    1 == SkillSearch(815) && SkillSearch(816) > 0 && 1 == SkillSearch(806) && (S += 5);
    n_A_ASPD += S;
    1 === thirdClass && n_A_ASPD > 193 ? n_A_ASPD = 193 : n_A_ASPD > 190 && (n_A_ASPD = 190);
    n_A_ASPD = Math.floor(10 * n_A_ASPD) / 10;
    myInnerHtml("A_ASPD", n_A_ASPD, 0);
    n_A_ASPD = (200 - n_A_ASPD) / 50,
        n_Delay[1] = Math.floor(1e3 * n_A_ASPD) / 1e3,
        17 == n_A_ActiveSkill && (n_Delay[1] = Math.floor(75 * n_A_ASPD) / 100),
        sandanDelay = 0,
        SkillSearch(187) && 0 == n_A_ActiveSkill && (sandanDelay = (1e3 - 4 * n_A_AGI - 2 * n_A_DEX) / 1e3,
            SkillSearch(301) && (sandanDelay += .3)),
        SRV < 50 ? n_A_CAST = 1 - n_A_DEX / 150 : n_A_CAST = 1 - Math.sqrt((2 * n_A_DEX + n_A_INT) / 530),
        n_A_CAST < 0 && (n_A_CAST = 0);
    var S = 100;
    nb_tok = 0,
        S += n_tok[73],
        25 == n_A_JOB && (S -= 50 * CardNumSearch(533)),
        EquipNumSearch(750) && (S -= n_A_Weapon_refine),
        EquipNumSearch(1005) & EquipNumSearch(442) && (S -= n_A_Weapon_refine / 2),
        n_A_Weapon_refine >= 9 && 1084 == n_A_Equip[0] && (S -= 5),
        n_A_Weapon_refine >= 9 && 1095 == n_A_Equip[0] && (S -= 5),
        10 == n_A_Weapon_refine && EquipNumSearch(1493) && (S -= 10),
        n_A_HEAD_REFINE >= 8 && 1279 == n_A_Equip[2] && (S -= 3),
        n_A_HEAD_REFINE >= 8 && 1476 == n_A_Equip[2] && (S -= 3),
        n_A_HEAD_REFINE >= 7 && 1289 == n_A_Equip[2] && (S -= 3),
        n_A_HEAD_REFINE >= 9 && 1289 == n_A_Equip[2] && (S -= 2),
        // Mage set -15 casting time
        5 == n_A_JobClass() && CardNumSearch(454) && (S -= 15),
        // * WELDER card -10% casting time when dex <= 80
        SU_DEX <= 80 && CardNumSearch(585) && (S -= 10),
        18 != n_A_JOB && 32 != n_A_JOB || !CardNumSearch(460) || (S -= 15),
        177 == n_A_card[8] && (S -= n_A_HEAD_REFINE),
        0 != n_A_Buf3[2] && (SRV ? (S -= S / 100 * ((3 * n_A_Buf3[2] + n_A_Buf3[32] + Math.floor(n_A_Buf3[22] / 10)) / 100) * 100,
            nb_tok += (3 * n_A_Buf3[2] + n_A_Buf3[32] + Math.floor(n_A_Buf3[22] / 10)) / 100 * 100) : (S -= 3 * n_A_Buf3[2] + n_A_Buf3[32] + Math.floor(n_A_Buf3[22] / 10),
                nb_tok += (3 * n_A_Buf3[2] + n_A_Buf3[32] + Math.floor(n_A_Buf3[22] / 10)) / 100 * 100)),
        S -= 50 * TimeItemNumSearch(1),
        0 > S && (S = 0),
        n_B_Cast = S,
        n_A_CAST *= S / 100,
        S = 100,
        0 != StPlusCalc2(7e3 + n_A_ActiveSkill) && (S -= StPlusCalc2(7e3 + n_A_ActiveSkill)),
        0 != StPlusCard(7e3 + n_A_ActiveSkill) && (S -= StPlusCard(7e3 + n_A_ActiveSkill)),
        321 != n_A_ActiveSkill && 197 != n_A_ActiveSkill || SkillSearch(195) && n_A_Weapon_refine >= 9 && EquipNumSearch(1097) && (S -= 100),
        430 == n_A_ActiveSkill && n_A_Weapon_refine >= 9 && 1100 == n_A_Equip[0] && 0 == SRV && (S -= 25),
        131 == n_A_ActiveSkill && n_A_Weapon_refine >= 10 && 1169 == n_A_Equip[0] && 0 == SRV && (S -= 8),
        0 > S && (S = 0),
        n_A_CAST *= S / 100,
        n_A_Buf2[10] && (n_A_CAST *= (100 - 15 * n_A_Buf2[10]) / 100),
        SkillSearch(322) && (n_A_CAST /= 2),
        S = 100 + n_tok[72],
        50 > S && (S = 50),
        n_A_fCAST = S / 100,
        936 == n_A_Equip[0] && (n_tok[74] += 3 * Math.floor(n_A_Weapon_refine / 2)),
        934 == n_A_Equip[0] && n_A_Weapon_refine >= 9 && (n_tok[74] += 20),
        1036 == n_A_Equip[2] && n_A_HEAD_REFINE >= 6 && (n_tok[74] += n_A_HEAD_REFINE - 5),
        EquipNumSearch(1582) && n_A_HEAD_REFINE >= 5 && (n_tok[74] += n_A_HEAD_REFINE - 4),
        1084 == n_A_Equip[0] && n_A_Weapon_refine >= 9 && (n_tok[74] += 5),
        1095 == n_A_Equip[0] && n_A_Weapon_refine >= 9 && (n_tok[74] += 5),
        AC_I = n_tok[74];
    var S = n_A_Buf3[2];
    S ? 10 == S ? n_tok[74] = 5 * S + 2 * n_A_Buf3[32] + Math.floor(n_A_Buf3[29] / 5) : n_tok[74] = 3 * S + 2 * n_A_Buf3[32] + Math.floor(n_A_Buf3[29] / 5) : n_tok[74] = 0,
        AC_I > 100 && (AC_I = 100),
        n_tok[74] > 100 && (n_tok[74] = 100),
        n_A_HPR = Math.floor(n_A_VIT / 5) + Math.floor(n_A_MaxHP / 200),
        n_A_HPR < 1 && (n_A_HPR = 1),
        S = 100,
        S += n_tok[75] + n_A_Buf9[45],
        SU_LUK >= 77 && (S += 100 * CardNumSearch(221)),
        41 == n_A_JobClass() && 672 == n_A_Equip[2] && (S += 3),
        n_A_SHOES_REFINE <= 4 && 407 == n_A_card[13] && (S += 5),
        n_A_HPR = Math.floor(n_A_HPR * S / 100),
        (n_A_Buf6[21] || n_A_Buf6[17] || 333 == n_A_card[11]) && (n_A_HPR = 0),
        myInnerHtml("A_HPR", n_A_HPR, 0),
        n_A_SPR = Math.floor(n_A_INT / 6) + Math.floor(n_A_MaxSP / 100) + 1,
        S = 100,
        S += 3 * SkillSearch(269),
        S += n_tok[76] + n_A_Buf9[46],
        SU_LUK >= 77 && (S += 100 * CardNumSearch(221)),
        179 == n_A_card[9] && (S += 5),
        179 == n_A_card[16] && (S += 5),
        179 == n_A_card[17] && (S += 5),
        179 == n_A_card[18] && (S += 5),
        5 == n_A_JobClass() && (S += 5 * EquipNumSearch(1119)),
        41 == n_A_JobClass() && 673 == n_A_Equip[2] && (S += 3),
        n_A_HEAD_REFINE <= 4 && 179 == n_A_card[8] && (S += 5),
        n_A_SHOES_REFINE <= 4 && 407 == n_A_card[13] && (S += 5),
        n_A_SPR = Math.floor(n_A_SPR * S / 100),
        n_A_INT >= 120 && (n_A_SPR += Math.floor((n_A_INT - 120) / 2) + 4),
        (n_A_Buf6[21] || n_A_Buf6[17] || CardNumSearch(334)) && (n_A_SPR = 0),
        myInnerHtml("A_SPR", n_A_SPR, 0),
        "Holy Arrow" == m_Arrow[n_A_Arrow][2] && (n_tok[36] += 5),
        n_A_Weapon_refine >= 6 && ((1076 == n_A_Equip[0] || 1077 == n_A_Equip[0] || 1081 == n_A_Equip[0] || 1082 == n_A_Equip[0] || 1086 == n_A_Equip[0] || 1088 <= n_A_Equip[0] && n_A_Equip[0] <= 1094 || 1096 == n_A_Equip[0] || 1097 == n_A_Equip[0] || 1099 <= n_A_Equip[0] && n_A_Equip[0] <= 1103) && (6 == n_A_Weapon_refine && (n_tok[37] += 4),
            7 == n_A_Weapon_refine && (n_tok[37] += 9),
            8 == n_A_Weapon_refine && (n_tok[37] += 16),
            9 == n_A_Weapon_refine && (n_tok[37] += 25),
            n_A_Weapon_refine >= 10 && (n_tok[37] += 36)),
            1080 != n_A_Equip[0] && 1087 != n_A_Equip[0] && 1098 != n_A_Equip[0] || (6 == n_A_Weapon_refine && (n_tok[37] += 9),
                7 == n_A_Weapon_refine && (n_tok[37] += 16),
                8 == n_A_Weapon_refine && (n_tok[37] += 25),
                9 == n_A_Weapon_refine && (n_tok[37] += 36),
                n_A_Weapon_refine >= 10 && (n_tok[37] += 49))),
        n_A_Buf7[42] && (n_tok[150] += 10 * n_A_Buf7[42],
            n_tok[151] += 10 * n_A_Buf7[42],
            n_tok[152] += 10 * n_A_Buf7[42],
            n_tok[153] += 10 * n_A_Buf7[42],
            n_tok[154] += 10 * n_A_Buf7[42],
            n_tok[155] += 10 * n_A_Buf7[42],
            n_tok[156] += 10 * n_A_Buf7[42],
            n_tok[157] += 10 * n_A_Buf7[42],
            n_tok[158] += 10 * n_A_Buf7[42],
            n_tok[159] += 10 * n_A_Buf7[42]),
        n_A_Buf9[54] && (n_tok[170] += n_A_Buf9[54],
            n_tok[171] += n_A_Buf9[54],
            n_tok[172] += n_A_Buf9[54],
            n_tok[173] += n_A_Buf9[54],
            n_tok[174] += n_A_Buf9[54],
            n_tok[175] += n_A_Buf9[54],
            n_tok[176] += n_A_Buf9[54],
            n_tok[177] += n_A_Buf9[54],
            n_tok[178] += n_A_Buf9[54],
            n_tok[179] += n_A_Buf9[54]),
        n_tok[25] += n_A_Buf9[56],
        n_tok[70] += n_A_Buf9[57],
        SkillSearch(156) && (n_tok[66] += 5 * SkillSearch(156)),
        SkillSearch(234) && (n_tok[59] += 4 * SkillSearch(234)),
        SkillSearch(234) && (n_tok[39] += 4 * SkillSearch(234)),
        n_A_Buf7[45] && (n_tok[100] += 20),

        // * Extra crit damage applied on Angra mantis card
        2 == n_A_JobClass() && (n_tok[70] += CardNumSearch(550) * Math.floor(n_A_HEAD_REFINE / 2)),

        // * Brutality status extra crit damage
        // ? Check in-game numbers, calc damage looks so big
        n_A_Buf8[8] === 38 && (n_tok[70] += 50),
        n_A_Buf8[9] === 38 && (n_tok[70] += 50),
        n_A_Buf8[10] === 38 && (n_tok[70] += 50),
        n_A_Buf8[11] === 38 && (n_tok[70] += 50),

        624 == n_A_Equip[0] && (n_tok[191] += n_A_Weapon_refine),
        1089 == n_A_Equip[0] && (n_tok[70] += 2 * n_A_Weapon_refine),
        1718 == n_A_Equip[6] && (n_tok[25] += 2 * n_A_BODY_REFINE),
        1161 == n_A_Equip[0] && (n_tok[99] += SkillSearch(23)),
        1792 == n_A_Equip[0] && (n_tok[5054] += 3 * n_A_Weapon_refine),
        CardNumSearch(551) && (n_tok[99] += n_A_HEAD_REFINE / 2),
        EquipNumSearch(737) && (n_tok[60] += 3 * n_A_SHOULDER_REFINE),
        EquipNumSearch(1217) && (n_tok[25] += n_A_HEAD_REFINE),
        EquipNumSearch(1575) && (n_tok[25] += n_A_HEAD_REFINE),
        626 == n_A_Equip[0] && 2 == n_A_Arrow && (n_tok[25] += 25),
        627 == n_A_Equip[0] && 5 == n_A_Arrow && (n_tok[25] += 25),
        628 == n_A_Equip[0] && 4 == n_A_Arrow && (n_tok[25] += 25),
        629 == n_A_Equip[0] && 6 == n_A_Arrow && (n_tok[25] += 25),
        630 == n_A_Equip[0] && 10 == n_A_Arrow && (n_tok[25] += 50),
        101 == n_A_Equip[0] && 17 == n_A_Arrow && (n_tok[25] += 50),
        1491 == n_A_Equip[0] && 18 == n_A_Arrow && (n_tok[25] += 50),
        n_A_HEAD_REFINE >= 9 && 543 == n_A_card[8] && (n_tok[54] += 5),
        n_A_LEFT_REFINE >= 6 && 1622 == n_A_Equip[5] && (n_tok[60] += n_A_LEFT_REFINE - 5),
        n_A_LEFT_REFINE >= 9 && 1797 == n_A_Equip[5] && (n_tok[192] += 5),
        n_A_HEAD_REFINE >= 8 && 1244 == n_A_Equip[2] && (n_tok[61] += 5),
        n_A_HEAD_REFINE >= 9 && 1288 == n_A_Equip[2] && (n_tok[25] += 5),
        n_A_HEAD_REFINE >= 9 && 1285 == n_A_Equip[2] && (n_tok[80] += 3),
        n_A_HEAD_REFINE >= 7 && 1407 == n_A_Equip[2] && (n_tok[80] += 2),
        n_A_HEAD_REFINE >= 9 && 1407 == n_A_Equip[2] && (n_tok[80] += 2),
        n_A_HEAD_REFINE >= 7 && 1812 == n_A_Equip[2] && (n_tok[70] += 10),
        n_A_HEAD_REFINE >= 9 && 1812 == n_A_Equip[2] && (n_tok[80] += 5),
        n_A_HEAD_REFINE >= 9 && 1612 == n_A_Equip[2] && (n_tok[80] += 5),
        n_A_HEAD_REFINE >= 9 && 1612 == n_A_Equip[2] && (n_tok[25] += 5),
        n_A_HEAD_REFINE >= 7 && 1768 == n_A_Equip[2] && (n_tok[99] += 3),
        n_A_Weapon_refine >= 9 && 1101 == n_A_Equip[0] && (n_tok[80] += n_A_Weapon_refine),
        n_A_Weapon_refine >= 9 && EquipNumSearch(1573) && (n_tok[80] += n_A_Weapon_refine),
        n_A_Weapon_refine >= 6 && 1083 == n_A_Equip[0] && (n_tok[177] += 2 * (n_A_Weapon_refine - 5)),
        n_A_SHOULDER_REFINE >= 9 && 403 == n_A_card[12] && (n_tok[60] += 5),
        n_A_Buf2[11] && 13 != n_A_JOB && 27 != n_A_JOB && (n_tok[56] += 5 * n_A_Buf2[11]),
        n_A_Buf2[11] && 13 != n_A_JOB && 27 != n_A_JOB && (n_tok[66] += 5 * n_A_Buf2[11]),
        14 != n_A_JOB && 28 != n_A_JOB || (n_tok[80] += 10 * CardNumSearch(479)),
        n_A_SHOULDER_REFINE >= 7 && 1472 == n_A_Equip[7] && (SU_DEX >= 90 && (n_tok[25] += 5),
            SU_VIT >= 90 && (n_tok[60] += 5),
            SU_LUK >= 90 && (n_tok[70] += 10)),
        n_A_SHOULDER_REFINE >= 9 && 1472 == n_A_Equip[7] && (SU_DEX >= 90 && (n_tok[25] += 5),
            SU_VIT >= 90 && (n_tok[60] += 5),
            SU_LUK >= 90 && (n_tok[70] += 5)),
        CardNumSearch(452) && 3 == n_A_JobClass() && (n_tok[51] += 30,
            n_tok[56] += 30),
        n_A_HEAD_REFINE >= 5 && (1507 == n_A_Equip[2] || 1508 == n_A_Equip[2] || 1703 == n_A_Equip[2]) && (n_tok[57] += n_A_HEAD_REFINE - 4,
            n_tok[37] += n_A_HEAD_REFINE - 4);
    for (var _ = 971; 977 >= _; _++)
        EquipNumSearch(_) && (n_tok[50] -= 200,
            n_tok[51] -= 200,
            n_tok[52] -= 200,
            n_tok[53] -= 200,
            n_tok[54] -= 200,
            n_tok[55] -= 200,
            n_tok[56] -= 200,
            n_tok[58] -= 200,
            n_tok[59] -= 200);
    if ((0 == selectedMonster[20] && 0 == n_B_rangedAtk && 0 == n_B_rangedMAtk && 2 != c.B_AtkRange.value || 1 == c.B_AtkRange.value) && 957 == n_A_Equip[7])
        for (_ = 0; 9 >= _; _++)
            n_tok[60 + _] += 30;
    if (n_A_HEAD_REFINE >= 7 && 1498 == n_A_Equip[2])
        for (_ = 0; 9 >= _; _++)
            n_tok[60 + _] += 5;
    // * Skin tempering increase 4% def per lvl and 2% fire def per lvl
    if (SkillSearch(150) && (n_tok[60] += SkillSearch(150) * 4,
        n_tok[63] += 6 * SkillSearch(150)),
        n_A_Buf3[7]) {
        for (_ = 61; 69 >= _; _++)
            n_tok[_] += 55 + 5 * n_A_Buf3[7];
        for (_ = 150; 159 >= _; _++)
            n_tok[_] += 10 * n_A_Buf3[7]
    }
    for (n_A_Buf7[11] && (n_tok[61] += 20,
        n_tok[64] -= 15),
        n_A_Buf7[12] && (n_tok[62] += 20,
            n_tok[63] -= 15),
        n_A_Buf7[13] && (n_tok[63] += 20,
            n_tok[61] -= 15),
        n_A_Buf7[14] && (n_tok[64] += 20,
            n_tok[62] -= 15),
        1085 == n_A_Equip[0] && (n_A_Weapon_refine >= 6 && (n_tok[99] += 5 + 2 * (n_A_Weapon_refine - 5)),
            n_A_Weapon_refine >= 10 && (n_tok[99] += 10)),
        0 == SRV && EquipNumSearch(1030) && (n_tok[77] -= 5,
            n_tok[79] -= 5),
        534 == n_A_Equip[6] && (wSPVS = n_A_JobClass(),
            1 != wSPVS && 2 != wSPVS && 6 != wSPVS || (n_tok[151] += 50),
            3 != wSPVS && 4 != wSPVS && 5 != wSPVS || (n_tok[156] += 50)),
        828 == n_A_Equip[2] && (n_tok[151] += 2 * n_A_HEAD_REFINE,
            n_tok[152] += 2 * n_A_HEAD_REFINE,
            n_tok[159] += 2 * n_A_HEAD_REFINE),
        SU_AGI >= 90 && (n_tok[151] += 30 * CardNumSearch(176),
            n_tok[156] += 30 * CardNumSearch(176)),
        SU_VIT >= 80 && (n_tok[155] += 50 * CardNumSearch(176),
            n_tok[159] += 50 * CardNumSearch(176)),
        42 == n_A_Buf8[0] && 1218 == n_A_Equip[2] && (n_tok[151] += 10),
        n_A_element = new Array,
        _ = 0; 9 >= _; _++)
        n_A_element[_] = 100 * element[10 * n_A_Bodyelement + 1][_],
            n_A_element[_] = n_A_element[_] - Math.floor(n_A_element[_] * n_tok[60 + _]) / 100;
    if (1076 != n_A_Equip[1] && 1077 != n_A_Equip[1] || n_A_Weapon2_refine >= 6 && (n_tok[307] += 5),
        (1076 == n_A_Equip[0] || 1077 == n_A_Equip[0] || 1080 == n_A_Equip[0] || 1081 == n_A_Equip[0] || 1086 == n_A_Equip[0] || 1088 <= n_A_Equip[0] && n_A_Equip[0] <= 1090 || 1092 == n_A_Equip[0] || 1093 == n_A_Equip[0] || 1097 <= n_A_Equip[0] && n_A_Equip[0] <= 1103) && n_A_Weapon_refine >= 6 && (n_tok[307] += 5),
        1082 != n_A_Equip[0] && 1087 != n_A_Equip[0] && 1094 != n_A_Equip[0] && 1096 != n_A_Equip[0] || n_A_Weapon_refine >= 6 && (n_tok[307] += 5),
        645 == n_A_Equip[0] && (n_tok[295] += 10 + n_A_Weapon_refine),
        // * MDEF ignoring of Necromancer card
        9 == n_A_WeaponType && (n_tok[295] += 2 * CardNumSearch(466)),
        // * Staff of the Scholar MDEF ignore
        n_tok[295] += 15 * CardNumSearch(1369),
        1 == selectedMonster[19] && (n_tok[297] += 30 * CardNumSearch(425)),
        936 == n_A_Equip[0] && (n_tok[295] += 1 * n_A_Weapon_refine),
        1 == selectedMonster[19] && 1228 == n_A_Equip[2] && n_A_HEAD_REFINE >= 6 && (n_tok[297] += n_A_HEAD_REFINE - 5),
        1 == selectedMonster[19] && (n_tok[295] += n_tok[297]),
        1084 != n_A_Equip[0] && 1095 != n_A_Equip[0] || n_A_Weapon_refine >= 6 && (n_tok[317] += 5),
        1085 == n_A_Equip[0] && n_A_Weapon_refine >= 6 && (n_tok[317] += 5),
        1083 == n_A_Equip[0] && n_A_Weapon_refine >= 6 && (n_tok[317] += 5 + 2 * (n_A_Weapon_refine - 5)),
        n_tok[70] += n_tok[320 + selectedMonster[2]],
        535 == n_A_Equip[7]) {
        n_A_JobClass();
        1 != i && 2 != i && 6 != i || (n_tok[71] += 5,
            n_tok[71] += 2 * n_A_SHOULDER_REFINE)
    }
    TimeItemNumSearch(52) && (n_tok[71] += 3 * n_A_LEFT_REFINE),
        ClickB_Enemy(),
        KakutyouKansuu()
}
function StPlusCalc() {
    n_A_JobSet(),
        n_A_JobLV = 1 * c.A_JobLV.value;
    for (var _ = [0, 0, 0, 0, 0, 0], a = 0; m_Job[n_A_JOB][a] <= n_A_JobLV && "n" != m_Job[n_A_JOB][a]; a += 2)
        _[m_Job[n_A_JOB][a + 1]] += 1;
    if (0 == n_A_JOB && n_Reborn)
        for (var a = 0; m_Job[34][a] <= n_A_JobLV && "n" != m_Job[34][a]; a += 2)
            _[m_Job[34][a + 1]] += 1;
    if (n_A_JobLV >= 70 && SkillSearch(309))
        for (var a = 0; 6 > a; a++)
            _[a] += 10;
    var n = _[0]
        , e = _[1]
        , t = _[2]
        , A = _[3]
        , o = _[4]
        , l = _[5];
    wSPCall = StPlusCalc2(7),
        n += StPlusCalc2(1) + wSPCall,
        e += StPlusCalc2(2) + wSPCall,
        t += StPlusCalc2(3) + wSPCall,
        t += StPlusCalc2(213),
        A += StPlusCalc2(4) + wSPCall,
        A += StPlusCalc2(214),
        o += StPlusCalc2(5) + wSPCall,
        l += StPlusCalc2(6) + wSPCall,
        o += SkillSearch(38),
        (SkillSearch(68) || TimeItemNumSearch(17)) && (n += 4),
        n += SkillSearch(146),
        n += SkillSearch(404),
        A += SkillSearch(404),
        SkillSearch(234) && (A += Math.round(SkillSearch(234) / 2)),
        SkillSearch(286) && (5 == SkillSearch(286) && (n += 16),
            4 == SkillSearch(286) && (n += 8),
            3 == SkillSearch(286) && (n += 4),
            2 == SkillSearch(286) && (n += 2),
            1 == SkillSearch(286) && (n += 1));
    var u = SkillSearch(42);
    u ? (u += 102,
        o = Math.floor((n_A_DEX + o) * u / 100) - n_A_DEX,
        e = Math.floor((n_A_AGI + e) * u / 100) - n_A_AGI) : TimeItemNumSearch(31) ? (o = Math.floor(104 * (n_A_DEX + o) / 100) - n_A_DEX,
            e = Math.floor(104 * (n_A_AGI + e) / 100) - n_A_AGI) : n_A_Buf7[34] ? (o = Math.floor(103 * (n_A_DEX + o) / 100) - n_A_DEX,
                e = Math.floor(103 * (n_A_AGI + e) / 100) - n_A_AGI) : TimeItemNumSearch(4) && (o = Math.floor(103 * (n_A_DEX + o) / 100) - n_A_DEX,
                    e = Math.floor(103 * (n_A_AGI + e) / 100) - n_A_AGI),
        SkillSearch(422) && (o += 4,
            e += 4),
        e += StPlusCalc2(212),
        o += StPlusCalc2(215),
        1636 != n_A_Equip[6] && 1643 != n_A_Equip[6] && 1650 != n_A_Equip[6] && 1657 != n_A_Equip[6] || SU_INT >= 99 && (A += 1),
        9 == n_A_WeaponType && (A += CardNumSearch(466)),
        649 == n_A_Equip[0] && (o -= SU_DEX),
        1172 != n_A_Equip[0] && 1671 != n_A_Equip[0] || (A += Math.floor(n_A_Weapon_refine / 2)),
        1799 == n_A_Equip[2] && 4 == n_A_JobClass() && (o += 3),
        41 == n_A_JobClass() && 672 == n_A_Equip[2] && (e += 1),
        41 == n_A_JobClass() && 673 == n_A_Equip[2] && (A += 1),
        41 == n_A_JobClass() && 675 == n_A_Equip[2] && (l += 2),
        41 == n_A_JobClass() && 676 == n_A_Equip[2] && (o += 2),
        41 == n_A_JobClass() && 678 == n_A_Equip[3] && (l += 1),
        5 == SkillSearch(234) && 1171 == n_A_Equip[0] && (A += 3),
        n_A_HEAD_REFINE >= 6 && 1555 == n_A_Equip[2] && (e += 2),
        n_A_HEAD_REFINE >= 7 && 1576 == n_A_Equip[2] && (e += 2),
        n_A_HEAD_REFINE >= 5 && 1069 == n_A_Equip[2] && (l += n_A_HEAD_REFINE - 4),
        n_A_Weapon_refine >= 6 && 1168 == n_A_Equip[0] && (A += n_A_Weapon_refine - 5),
        n_A_SHOES_REFINE >= 9 && 717 == n_A_Equip[8] && (e += 2),
        n_A_SHOES_REFINE >= 8 && 1737 == n_A_Equip[8] && (e += n_A_SHOES_REFINE - 7),
        1078 != n_A_Equip[0] && 1079 != n_A_Equip[0] || (A += n_A_Weapon_refine,
            1078 == n_A_Equip[0] && n_A_Weapon_refine >= 9 && (A += 5),
            1079 == n_A_Equip[0] && n_A_Weapon_refine >= 10 && (A += 5)),
        1078 != n_A_Equip[1] && 1079 != n_A_Equip[1] || (A += n_A_Weapon2_refine,
            1078 == n_A_Equip[1] && n_A_Weapon2_refine >= 9 && (A += 5),
            1079 == n_A_Equip[1] && n_A_Weapon2_refine >= 10 && (A += 3)),
        wSPCall = StPlusCard(7),
        n += StPlusCard(1) + wSPCall,
        e += StPlusCard(2) + wSPCall,
        t += StPlusCard(3) + wSPCall,
        A += StPlusCard(4) + wSPCall,
        o += StPlusCard(5) + wSPCall,
        l += StPlusCard(6) + wSPCall,
        3 == n_A_JobClass() && (A += CardNumSearch(383)),
        4 == n_A_JobClass() && 540 == n_A_card[8] && (o += Math.floor(n_A_HEAD_REFINE / 3)),
        180 == n_A_card[8] && (n += n_A_HEAD_REFINE),
        173 == n_A_card[10] && (A += n_A_LEFT_REFINE),
        198 == n_A_card[11] && (t += n_A_BODY_REFINE),
        402 == n_A_card[12] && (l += n_A_SHOULDER_REFINE),
        406 == n_A_card[13] && (e += n_A_SHOES_REFINE),
        1 != n_A_JobClass() && 2 != n_A_JobClass() && 6 != n_A_JobClass() && 41 != n_A_JOB && 42 != n_A_JOB || (n += 1 * EquipNumSearch(1670)),
        3 != n_A_JobClass() && 5 != n_A_JobClass() && 43 != n_A_JOB && 44 != n_A_JOB || (A += 1 * EquipNumSearch(1670)),
        4 != n_A_JobClass() && 45 != n_A_JOB || (o += 1 * EquipNumSearch(1670)),
        n_A_HEAD_REFINE >= 7 && 1272 == n_A_Equip[2] && (t += 1),
        n_A_HEAD_REFINE >= 7 && 1273 == n_A_Equip[2] && (t += 1),
        n_A_HEAD_REFINE >= 7 && 1277 == n_A_Equip[2] && (n_tok[99] += 3),
        n_A_HEAD_REFINE >= 7 && 1279 == n_A_Equip[2] && (A += 2),
        n_A_HEAD_REFINE >= 7 && 1476 == n_A_Equip[2] && (A += 2),
        n_A_HEAD_REFINE >= 7 && 1484 == n_A_Equip[2] && (A += 3),
        n_A_HEAD_REFINE >= 9 && 1279 == n_A_Equip[2] && (n_tok[99] += 4),
        n_A_HEAD_REFINE >= 9 && 1476 == n_A_Equip[2] && (n_tok[99] += 4),
        n_A_HEAD_REFINE >= 7 && 1280 == n_A_Equip[2] && (n_tok[64] += 5),
        n_A_HEAD_REFINE >= 7 && 1281 == n_A_Equip[2] && (n_tok[64] += 5),
        n_A_HEAD_REFINE >= 7 && 1477 == n_A_Equip[2] && (n_tok[64] += 5),
        n_A_HEAD_REFINE >= 7 && 1478 == n_A_Equip[2] && (n_tok[64] += 5),
        n_A_HEAD_REFINE >= 8 && 1288 == n_A_Equip[2] && (e += 2),
        n_A_HEAD_REFINE >= 7 && 1291 == n_A_Equip[2] && (o += 1),
        n_A_HEAD_REFINE >= 7 && 1292 == n_A_Equip[2] && (o += 1),
        n_A_HEAD_REFINE >= 7 && 1293 == n_A_Equip[2] && (o += 1),
        n_A_HEAD_REFINE >= 7 && 1486 == n_A_Equip[2] && (n_tok[63] += 7),
        n_A_HEAD_REFINE >= 7 && 1487 == n_A_Equip[2] && (t += 2),
        n_A_HEAD_REFINE >= 7 && 1294 == n_A_Equip[2] && (n_tok[62] += 5),
        185 == n_A_card[11] && (t += Math.floor(SU_DEX / 18)),
        187 == n_A_card[11] && (n += Math.floor(SU_INT / 18)),
        189 == n_A_card[11] && (l += Math.floor(SU_AGI / 18)),
        191 == n_A_card[11] && (e += Math.floor(SU_LUK / 18)),
        196 == n_A_card[11] && (A += Math.floor(SU_STR / 18)),
        197 == n_A_card[11] && (o += Math.floor(SU_VIT / 18)),
        98 == n_A_card[14] && CardNumSearch(273) && (n += 3),
        98 == n_A_card[15] && CardNumSearch(273) && (n += 3),
        98 == n_A_card[14] && 98 == n_A_card[15] && 1 == CardNumSearch(273) && (n -= 3),
        872 == n_A_Equip[2] && (n_tok[77] += n_A_HEAD_REFINE),
        n_A_HEAD_REFINE >= 7 && 565 == n_A_Equip[2] && (n_tok[80] += 1,
            n_tok[99] += 1),
        n_A_HEAD_REFINE >= 6 && 1629 == n_A_Equip[2] && (n_tok[177] += n_A_HEAD_REFINE - 5,
            n_tok[57] += n_A_HEAD_REFINE - 5),
        405 == n_A_card[12] && (1 != n_A_JobClass() && 2 != n_A_JobClass() && 6 != n_A_JobClass() || (n += 2),
            3 != n_A_JobClass() && 4 != n_A_JobClass() && 5 != n_A_JobClass() || (A += 2)),
        1687 == n_A_Equip[2] && (1 != n_A_JobClass() && 2 != n_A_JobClass() && 6 != n_A_JobClass() || (e += 2,
            t += 2,
            n_tok[60] += Math.floor(n_A_JobLV / 14),
            n_tok[61] += Math.floor(n_A_JobLV / 14)),
            3 != n_A_JobClass() && 4 != n_A_JobClass() && 5 != n_A_JobClass() || (A += 2,
                o += 2,
                n_tok[60] += Math.floor(n_A_JobLV / 14),
                n_tok[61] += Math.floor(n_A_JobLV / 14))),
        SRV > 0 && (-n > n_A_STR && (n = -n_A_STR),
            -e > n_A_AGI && (e = -n_A_AGI),
            -t > n_A_VIT && (t = -n_A_VIT),
            -A > n_A_INT && (A = -n_A_INT),
            -o > n_A_DEX && (o = -n_A_DEX),
            -l > n_A_LUK && (l = -n_A_LUK)),
        n += n_A_Buf2[0],
        A += n_A_Buf2[0],
        o += n_A_Buf2[0],
        0 == n_A_Buf6[19] && 0 == n_A_Buf6[20] && (n_A_Buf7[26] && n_A_Buf2[1] < 6 ? e += 7 : n_A_Buf2[1] > 0 && (e += n_A_Buf2[1] + 2)),
        l += 30 * n_A_Buf2[3],
        24 == n_A_JOB && SkillSearch(270) && (n += 5,
            e += 5,
            t += 5,
            o += 5,
            A += 5,
            l += 5),
        SkillSearch(379) && 0 == n_A_WeaponType && (n += 10),
        n_A_Buf3[40] && (n += 5,
            o += 5,
            A += 5),
        n += n_A_Buf3[41],
        t += n_A_Buf3[42],
        e += n_A_Buf3[43],
        o += n_A_Buf3[44],
        n_A_Buf2[16] && (n += 20,
            e += 20,
            t += 20,
            o += 20,
            A += 20,
            l += 20),
        1 == n_A_Buf6[2] && (n += 3,
            e += 3,
            t += 3,
            o += 3,
            A += 3,
            l += 3),
        2 == n_A_Buf6[2] && (n += 5,
            e += 5,
            t += 5,
            o += 5,
            A += 5,
            l += 5),
        n_A_Buf6[10] && (n += 1,
            e += 1,
            t += 1,
            o += 1,
            A += 1,
            l += 1),
        SkillSearch(310) && (n -= 1,
            e -= 1,
            t -= 1,
            o -= 1,
            A -= 1,
            l -= 1),
        n_A_Buf7[3] && (n += n_A_Buf7[3]),
        n_A_Buf7[4] && (e += n_A_Buf7[4]),
        n_A_Buf7[5] && (t += n_A_Buf7[5]),
        n_A_Buf7[6] && (A += n_A_Buf7[6]),
        n_A_Buf7[7] && (o += n_A_Buf7[7]),
        n_A_Buf7[8] && (l += n_A_Buf7[8]),
        (n_A_Buf7[36] || n_A_Buf7[43]) && (n += 3,
            e += 3,
            t += 3,
            o += 3,
            A += 3,
            l += 3),
        n_A_Buf7[37] && (l += 21),
        n_A_Buf7[41] && (n += 20),
        n_A_Buf7[47] && (e += 20),
        n_A_Buf7[48] && (t += 20),
        n_A_Buf7[49] && (A += 20),
        n_A_Buf7[50] && (o += 20),
        n_A_Buf7[51] && (l += 20);
    var r = 1 * c.A_HSE.value;
    if (r) {
        var u = r % 10;
        r >= 1 && 9 >= r && (n += u),
            r >= 11 && 19 >= r && (e += u),
            r >= 21 && 29 >= r && (t += u),
            r >= 31 && 39 >= r && (A += u),
            r >= 41 && 49 >= r && (o += u),
            r >= 51 && 59 >= r && (l += u)
    }
    var S = 1 * c.A_HSE_HEAD1.value;
    if (S) {
        var u = S % 10;
        S >= 1 && 9 >= S && (n += u),
            S >= 11 && 19 >= S && (e += u),
            S >= 21 && 29 >= S && (t += u),
            S >= 31 && 39 >= S && (A += u),
            S >= 41 && 49 >= S && (o += u),
            S >= 51 && 59 >= S && (l += u)
    }
    if (0 == SRV && Math.floor(r / 10) == Math.floor(S / 10)) {
        var i = r % 10
            , _ = S % 10;
        i > _ && (i = _),
            r >= 1 && 9 >= r && (n -= i),
            r >= 11 && 19 >= r && (e -= i),
            r >= 21 && 29 >= r && (t -= i),
            r >= 31 && 39 >= r && (A -= i),
            r >= 41 && 49 >= r && (o -= i),
            r >= 51 && 59 >= r && (l -= i)
    }
    if (1 == SkillSearch(392) && 1 == n_Reborn && n_A_BaseLV > 10 && n_A_BaseLV < 70 && (n_A_STR + n <= 50 && (n = 50 - n_A_STR),
        n_A_AGI + e <= 50 && (e = 50 - n_A_AGI),
        n_A_VIT + t <= 50 && (t = 50 - n_A_VIT),
        n_A_INT + A <= 50 && (A = 50 - n_A_INT),
        n_A_DEX + o <= 50 && (o = 50 - n_A_DEX),
        n_A_LUK + l <= 50 && (l = 50 - n_A_LUK)),
        2 == SkillSearch(392) && 1 == n_Reborn && n_A_BaseLV > 10 && n_A_BaseLV < 70) {
        var s = n_A_BaseLV - 10;
        s > 50 ? (n = 50,
            e = 50,
            t = 50,
            A = 50,
            o = 50,
            l = 50) : (n_A_STR < s && (n = s - n_A_STR),
                n_A_AGI < s && (e = s - n_A_AGI),
                n_A_VIT < s && (t = s - n_A_VIT),
                n_A_INT < s && (A = s - n_A_INT),
                n_A_DEX < s && (o = s - n_A_DEX),
                n_A_LUK < s && (l = s - n_A_LUK))
    }
    if (3 == SkillSearch(392) && 1 == n_Reborn && n_A_BaseLV > 10 && n_A_BaseLV < 70) {
        var s = n_A_BaseLV - 10;
        n > 50 || (n + s > 50 ? n = 50 : n += s),
            e > 50 || (e + s > 50 ? e = 50 : e += s),
            t > 50 || (t + s > 50 ? t = 50 : t += s),
            A > 50 || (A + s > 50 ? A = 50 : A += s),
            o > 50 || (o + s > 50 ? o = 50 : o += s),
            l > 50 || (l + s > 50 ? l = 50 : l += s)
    }
    if (n_A_Buf3[11] && 0 == n_A_Buf3[18] ? (n_A_STR + n < 99 && (n_A_STR + n + Math.floor(n_A_Buf3[12] / 2) < 99 ? n += Math.floor(n_A_Buf3[12] / 2) : n = 99 - n_A_STR),
        n_A_AGI + e < 99 && (n_A_AGI + e + Math.floor(n_A_Buf3[13] / 2) < 99 ? e += Math.floor(n_A_Buf3[13] / 2) : e = 99 - n_A_AGI),
        n_A_VIT + t < 99 && (n_A_VIT + t + Math.floor(n_A_Buf3[14] / 2) < 99 ? t += Math.floor(n_A_Buf3[14] / 2) : t = 99 - n_A_VIT),
        n_A_INT + A < 99 && (n_A_INT + A + Math.floor(n_A_Buf3[15] / 2) < 99 ? A += Math.floor(n_A_Buf3[15] / 2) : A = 99 - n_A_INT),
        n_A_DEX + o < 99 && (n_A_DEX + o + Math.floor(n_A_Buf3[16] / 2) < 99 ? o += Math.floor(n_A_Buf3[16] / 2) : o = 99 - n_A_DEX),
        n_A_LUK + l < 99 && (n_A_LUK + l + Math.floor(n_A_Buf3[17] / 2) < 99 ? l += Math.floor(n_A_Buf3[17] / 2) : l = 99 - n_A_LUK)) : n_A_Buf3[11] && n_A_Buf3[18] && (u = SRV ? 2 : 1,
            n += Math.floor(n_A_Buf3[12] / u),
            e += Math.floor(n_A_Buf3[13] / u),
            t += Math.floor(n_A_Buf3[14] / u),
            A += Math.floor(n_A_Buf3[15] / u),
            o += Math.floor(n_A_Buf3[16] / u),
            l += Math.floor(n_A_Buf3[17] / u)),
        n_A_Buf6[19]) {
        var _, i = Math.floor((n_A_AGI + e) / 2);
        _ = PvP ? 5 * n_A_Buf6[19] : 10 * n_A_Buf6[19],
            e -= i > _ ? _ : i,
            i = Math.floor((n_A_DEX + o) / 2),
            o -= i > _ ? _ : i
    }
    n_A_Buf6[20] && (e -= n_A_Buf6[20] + 2),
        n_A_Buf6[22] && (l = -1 * n_A_LUK),
        n_A_STR += n,
        n_A_AGI += e,
        n_A_VIT += t,
        n_A_INT += A,
        n_A_DEX += o,
        n_A_LUK += l,
        n >= 0 ? myInnerHtml("A_STRp", " + " + n, 0) : myInnerHtml("A_STRp", " - " + -n, 0),
        e >= 0 ? myInnerHtml("A_AGIp", " + " + e, 0) : myInnerHtml("A_AGIp", " - " + -e, 0),
        t >= 0 ? myInnerHtml("A_VITp", " + " + t, 0) : myInnerHtml("A_VITp", " - " + -t, 0),
        A >= 0 ? myInnerHtml("A_INTp", " + " + A, 0) : myInnerHtml("A_INTp", " - " + -A, 0),
        o >= 0 ? myInnerHtml("A_DEXp", " + " + o, 0) : myInnerHtml("A_DEXp", " - " + -o, 0),
        l >= 0 ? myInnerHtml("A_LUKp", " + " + l, 0) : myInnerHtml("A_LUKp", " - " + -l, 0)
}
function StPlusCalc2(_) {
    for (var a = 0, n = 0; 20 >= n; n++)
        for (var e = 0; 0 != m_Item[n_A_Equip[n]][e + 11]; e += 2)
            _ == Math.abs(m_Item[n_A_Equip[n]][e + 11]) && (a += m_Item[n_A_Equip[n]][e + 12]);
    return a
}
function StPlusCard(_) {
    for (var a = 0, n = 0; 25 >= n; n++)
        for (var e = 0; 0 != m_Card[n_A_card[n]][e + 4]; e += 2)
            _ == Math.abs(m_Card[n_A_card[n]][e + 4]) && (a += m_Card[n_A_card[n]][e + 5]);
    for (var e = 0; 0 != m_PET[n_A_Buf8[0]][e + 3]; e += 2)
        _ == Math.abs(m_PET[n_A_Buf8[0]][e + 3]) && (a += m_PET[n_A_Buf8[0]][e + 4]);
    var t = [0, 0, 0, 0];
    for (n = 0; 3 >= n; n++)
        t[n] = n_A_Buf8[8 + n];
    for (n = 0; 2 >= n; n++)
        for (e = n + 1; 3 >= e; e++)
            t[n] == t[e] && (t[e] = 0);
    for (n = 0; 3 >= n; n++)
        for (var e = 0; 0 != m_TempEffect[t[n]][5 + e]; e += 2)
            _ == Math.abs(m_TempEffect[t[n]][5 + e]) && (a += m_TempEffect[t[n]][6 + e]);
    for (n = 0; 8 > n; n += 2)
        _ == n_A_Buf9[n] + 30 && n_A_Buf9[n] < 20 && (a += n_A_Buf9[n + 1]);
    for (n = 0; 8 > n; n += 2)
        _ == n_A_Buf9[n] + 7 && n_A_Buf9[n] >= 20 && n_A_Buf9[n] < 23 && (a += n_A_Buf9[n + 1]);
    for (n = 0; 8 > n; n += 2)
        _ == n_A_Buf9[n] + 57 && 24 == n_A_Buf9[n] ? a += n_A_Buf9[n + 1] : _ == n_A_Buf9[n] + 59 && 25 == n_A_Buf9[n] ? a += n_A_Buf9[n + 1] : 1063 != _ && 1064 != _ && 1065 != _ && 1575 != _ && 1576 != _ || 26 != n_A_Buf9[n] ? _ == n_A_Buf9[n] + 55 && 27 == n_A_Buf9[n] ? a += n_A_Buf9[n + 1] : _ == n_A_Buf9[n] + 55 && 28 == n_A_Buf9[n] ? a += n_A_Buf9[n + 1] : 1495 != _ && 1496 != _ || 29 != n_A_Buf9[n] || (a += n_A_Buf9[n + 1]) : a += n_A_Buf9[n + 1];
    for (n = 8; 16 > n; n += 2)
        _ == n_A_Buf9[n] + 50 && n_A_Buf9[n] < 20 && (a += n_A_Buf9[n + 1]);
    for (n = 8; 16 > n; n += 2)
        _ == n_A_Buf9[n] + 170 && n_A_Buf9[n] >= 20 && n_A_Buf9[n] < 23 && (a += n_A_Buf9[n + 1]);
    for (n = 8; 16 > n; n += 2)
        _ == n_A_Buf9[n] + 54 && 23 == n_A_Buf9[n] ? a += n_A_Buf9[n + 1] : _ == n_A_Buf9[n] + 55 && 24 == n_A_Buf9[n] ? a += n_A_Buf9[n + 1] : 3063 != _ && 3064 != _ && 3065 != _ || 25 != n_A_Buf9[n] || (a += n_A_Buf9[n + 1]);
    for (n = 47; 53 > n; n++)
        _ == n - 46 && (a += n_A_Buf9[n]);
    return 80 == _ && (a += n_A_Buf9[41]),
        290 == _ && (a += n_A_Buf9[16]),
        295 == _ && (a += n_A_Buf9[17]),
        78 == _ && (a += n_A_Buf9[18]),
        a
}
function sort(_) {
    for (var a = 1; "EOF" != _[a]; a++)
        for (var n = a; n > 0; n--)
            if (m_Item[_[n - 1]][8] > m_Item[_[n]][8]) {
                var e = _[n - 1];
                _[n - 1] = _[n],
                    _[n] = e
            }
    return _
}
function WeaponSet(_) {
    "undefined" == typeof _ && (_ = n_A_JOB),
        myInnerHtml("A_w1", '<select name="A_weapon1" style="width:185px;" onchange="ClickWeaponType(this[this.selectedIndex].value) | StAllCalc()|ClickB_Item(this[this.selectedIndex].value)|restrictCardslot(1)"><option value="0">(No Weapon)</option></select>', 0);
    var a = 1 * c.restrict_lvlequip.checked
        , n = 0;
    for (k = 1; k <= 21; k++) {
        var e = 0;
        if (e = renewal ? m_JobASPD_R[_][k] : m_JobASPD[_][k],
            0 != e) {
            var t = document.createElement("OPTGROUP");
            for (t.label = WeaponName[k],
                c.A_weapon1.appendChild(t),
                n_A_JobSet(),
                n_A_WeaponType = k,
                work = new Array,
                j = 0,
                i = 0; i <= ItemMax; i++)
                m_Item[i][1] == n_A_WeaponType && (1 == JobEquipItemSearch(m_Item[i][2]) && (m_Item[i][7] <= c.A_BaseLV.value || 0 == a) ? (work[j] = i,
                    j++) : SRV && m_Item[i][4] >= 1 && SuperNoviceFullWeaponCHECK ? (1 == m_Item[i][1] && 4 == m_Item[i][4] && (work[j] = i,
                        j++),
                        (2 == m_Item[i][1] || m_Item[i][1] > 3) && (work[j] = i,
                            j++)) : 0 == SRV && 4 == m_Item[i][4] && SuperNoviceFullWeaponCHECK && (work[j] = i,
                                j++));
            if (j > 0) {
                for (work[j] = "EOF",
                    work = sort(work),
                    i = 1; j + 1 > i; i++) {
                    var A = "";
                    m_Item[work[i - 1]][5] && (A = " [" + m_Item[work[i - 1]][5] + "]"),
                        c.A_weapon1.options[i + n] = new Option(m_Item[work[i - 1]][8] + A, m_Item[work[i - 1]][0]),
                        t.appendChild(c.A_weapon1.options[i + n])
                }
                n += j
            } else
                c.A_weapon1.options[n] = new Option("(Restricted by Base Lv)", 0),
                    t.appendChild(c.A_weapon1.options[n]),
                    n++
        }
    }
    ClickWeaponType(0)
}
function WeaponSetLeft(_) {
    "undefined" == typeof _ && (_ = n_A_JOB);
    var a = 1 * c.restrict_lvlequip.checked;
    myInnerHtml("A_w2", '<select name="A_weapon2" style="width:185px;" onchange="ClickWeaponType2(this[this.selectedIndex].value) | StAllCalc()|ClickB_Item(this[this.selectedIndex].value)|restrictCardslot(1)"><option value="0">(Fist or Shield)</option></select>', 0),
        myInnerHtml("A_weapon2refine", "", 0),
        myInnerHtml("A_weapon2_cardshort", "", 0),
        myInnerHtml("nA_weapon2_c1", "", 0),
        myInnerHtml("nA_weapon2_c2", "", 0),
        myInnerHtml("nA_weapon2_c3", "", 0),
        myInnerHtml("nA_weapon2_c4", "", 0),
        n_Nitou = 0;
    var n = 0;
    for (k = 1; k <= 6; k++) {
        var e = 0;
        if (e = renewal ? m_JobASPD_R[_][k] : m_JobASPD[_][k],
            0 != e) {
            var t = document.createElement("OPTGROUP");
            for (t.label = WeaponName[k],
                c.A_weapon2.appendChild(t),
                n_A_JobSet(),
                n_A_Weapon2Type = k,
                work = new Array,
                j = 0,
                i = 0; i <= ItemMax; i++)
                m_Item[i][1] == n_A_Weapon2Type && 1 == JobEquipItemSearch(m_Item[i][2]) && (m_Item[i][7] <= c.A_BaseLV.value || 0 == a) && (work[j] = i,
                    j++);
            if (j > 0) {
                for (work[j] = "EOF",
                    work = sort(work),
                    i = 1; j + 1 > i; i++) {
                    var A = "";
                    m_Item[work[i - 1]][5] && (A = " [" + m_Item[work[i - 1]][5] + "]"),
                        c.A_weapon2.options[i + n] = new Option(m_Item[work[i - 1]][8] + A, m_Item[work[i - 1]][0]),
                        t.appendChild(c.A_weapon2.options[i + n])
                }
                n += j
            } else
                c.A_weapon1.options[n] = new Option("(Restricted by Base Lv)", 0),
                    t.appendChild(c.A_weapon1.options[n]),
                    n++
        }
    }
}
function WeaponSet2(_) {
    var a = 1 * c.restrict_lvlequip.checked;
    if (!_ || 0 != a) {
        n_A_JobSet();
        for (var n = 0; n < c.A_head1.length; n++)
            c.A_head1.options[0] = null;
        for (n = 0; n < c.A_head2.length; n++)
            c.A_head2.options[0] = null;
        for (n = 0; n < c.A_head3.length; n++)
            c.A_head3.options[0] = null;
        for (n = 0; n < c.A_left.length; n++)
            c.A_left.options[0] = null;
        for (n = 0; n < c.A_body.length; n++)
            c.A_body.options[0] = null;
        for (n = 0; n < c.A_shoulder.length; n++)
            c.A_shoulder.options[0] = null;
        for (n = 0; n < c.A_shoes.length; n++)
            c.A_shoes.options[0] = null;
        for (n = 0; n < c.A_acces1.length; n++)
            c.A_acces1.options[0] = null,
                c.A_acces2.options[0] = null;
        if (0 == first_check)
            return first_check = 1,
                c.A_head1.options[0] = new Option(m_Item[142][8], m_Item[142][0]),
                c.A_head2.options[0] = new Option(m_Item[243][8], m_Item[243][0]),
                c.A_head3.options[0] = new Option(m_Item[268][8], m_Item[268][0]),
                c.A_left.options[0] = new Option(m_Item[305][8], m_Item[305][0]),
                c.A_body.options[0] = new Option(m_Item[279][8], m_Item[279][0]),
                c.A_shoulder.options[0] = new Option(m_Item[311][8], m_Item[311][0]),
                c.A_shoes.options[0] = new Option(m_Item[317][8], m_Item[317][0]),
                c.A_acces1.options[0] = new Option(m_Item[326][8], m_Item[326][0]),
                void (c.A_acces2.options[0] = new Option(m_Item[326][8], m_Item[326][0]));
        first_check = 2;
        var equippableItems = new Array
            , t = 1 * c.restrict_jobequip.checked
            , a = 1 * c.restrict_lvlequip.checked;
        for (n = 0; 7 >= n; n++)
            equippableItems[n] = new Array;
        var A = new Array;
        for (n = 0; 7 >= n; n++)
            A[n] = 0;

        // Here it is decided which items a given class can equip
        for (n = 0; n <= ItemMax; n++) {
            // if (m_Item[n][1] === 50 && (1 == JobEquipItemSearch(m_Item[n][2]) || SuperNoviceFullWeaponCHECK || 0 == t) && (m_Item[n][7] <= n_A_BaseLV || SuperNoviceFullWeaponCHECK || 0 == a)) {

            // } else {

            // }
            let jobEquippable = JobEquipItemSearch(m_Item[n][2]);
            50 == m_Item[n][1] && (1 == jobEquippable || SuperNoviceFullWeaponCHECK || 0 == t) && (m_Item[n][7] <= n_A_BaseLV || SuperNoviceFullWeaponCHECK || 0 == a) ? (equippableItems[0][A[0]] = n,
                A[0]++) : 51 == m_Item[n][1] && (1 == jobEquippable || SuperNoviceFullWeaponCHECK || 0 == t) && (m_Item[n][7] <= n_A_BaseLV || SuperNoviceFullWeaponCHECK || 0 == a) ? (equippableItems[1][A[1]] = n,
                    A[1]++) : 52 == m_Item[n][1] && (1 == jobEquippable || SuperNoviceFullWeaponCHECK || 0 == t) && (m_Item[n][7] <= n_A_BaseLV || SuperNoviceFullWeaponCHECK || 0 == a) ? (equippableItems[2][A[2]] = n,
                        A[2]++) : 61 != m_Item[n][1] || 1 != jobEquippable && 0 != t || !(m_Item[n][7] <= n_A_BaseLV || 0 == a) ? 60 != m_Item[n][1] || 1 != jobEquippable && 0 != t || !(m_Item[n][7] <= n_A_BaseLV || 0 == a) ? 62 != m_Item[n][1] || 1 != jobEquippable && 0 != t || !(m_Item[n][7] <= n_A_BaseLV || 0 == a) ? 63 != m_Item[n][1] || 1 != jobEquippable && 0 != t || !(m_Item[n][7] <= n_A_BaseLV || 0 == a) ? 64 != m_Item[n][1] || 1 != jobEquippable && 0 != t || !(m_Item[n][7] <= n_A_BaseLV || 0 == a) || (equippableItems[7][A[7]] = n,
                            A[7]++) : (equippableItems[6][A[6]] = n,
                                A[6]++) : (equippableItems[5][A[5]] = n,
                                    A[5]++) : (equippableItems[4][A[4]] = n,
                                        A[4]++) : (equippableItems[3][A[3]] = n,
                                            A[3]++);
        }
        for (n = 0; 7 >= n; n++)
            equippableItems[n][A[n]] = "EOF";
        for (var o = 0; 7 >= o; o++)
            equippableItems[o] = sort(equippableItems[o]);
        var l = 0
            , u = "";
        for (n = 0; n < A[0]; n++)
            l = equippableItems[0][n],
                u = m_Item[l][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[l][5] ? c.A_head1.options[n] = new Option(m_Item[l][8] + u + " [" + m_Item[l][5] + "]", m_Item[l][0]) : c.A_head1.options[n] = new Option(m_Item[l][8] + u, m_Item[l][0]);
        for (n = 0; n < A[1]; n++)
            l = equippableItems[1][n],
                u = m_Item[l][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[l][5] ? c.A_head2.options[n] = new Option(m_Item[l][8] + u + " [" + m_Item[l][5] + "]", m_Item[l][0]) : c.A_head2.options[n] = new Option(m_Item[l][8] + u, m_Item[l][0]);
        for (n = 0; n < A[2]; n++)
            l = equippableItems[2][n],
                u = m_Item[l][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[l][5] ? c.A_head3.options[n] = new Option(m_Item[l][8] + u + " [" + m_Item[l][5] + "]", m_Item[l][0]) : c.A_head3.options[n] = new Option(m_Item[l][8] + u, m_Item[l][0]);
        for (n = 0; n < A[3]; n++) {
            l = equippableItems[3][n];
            u = m_Item[l][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "";
            m_Item[l][5] ? c.A_left.options[n] = new Option(m_Item[l][8] + u + " [" + m_Item[l][5] + "]", m_Item[l][0]) : c.A_left.options[n] = new Option(m_Item[l][8] + u, m_Item[l][0]);
        }
        for (n = 0; n < A[4]; n++)
            l = equippableItems[4][n],
                u = m_Item[l][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[l][5] ? c.A_body.options[n] = new Option(m_Item[l][8] + u + " [" + m_Item[l][5] + "]", m_Item[l][0]) : c.A_body.options[n] = new Option(m_Item[l][8] + u, m_Item[l][0]);
        for (n = 0; n < A[5]; n++)
            l = equippableItems[5][n],
                u = m_Item[l][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[l][5] ? c.A_shoulder.options[n] = new Option(m_Item[l][8] + u + " [" + m_Item[l][5] + "]", m_Item[l][0]) : c.A_shoulder.options[n] = new Option(m_Item[l][8] + u, m_Item[l][0]);
        for (n = 0; n < A[6]; n++)
            l = equippableItems[6][n],
                u = m_Item[l][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[l][5] ? c.A_shoes.options[n] = new Option(m_Item[l][8] + u + " [" + m_Item[l][5] + "]", m_Item[l][0]) : c.A_shoes.options[n] = new Option(m_Item[l][8] + u, m_Item[l][0]);
        for (n = 0; n < A[7]; n++)
            l = equippableItems[7][n],
                u = m_Item[l][2] >= 3e3 && n_A_JOB >= 41 ? " (aRO)" : "",
                m_Item[l][5] ? (c.A_acces1.options[n] = new Option(m_Item[l][8] + u + " [" + m_Item[l][5] + "]", m_Item[l][0]),
                    c.A_acces2.options[n] = new Option(m_Item[l][8] + u + " [" + m_Item[l][5] + "]", m_Item[l][0])) : (c.A_acces1.options[n] = new Option(m_Item[l][8] + u, m_Item[l][0]),
                        c.A_acces2.options[n] = new Option(m_Item[l][8] + u, m_Item[l][0]))
    }
}
function FirstNovis() {
    1 == first_check && (first_check = 2,
        WeaponSet2())
}
function JobEquipItemSearch(_) {
    if (_ >= 2e3 && n_A_JOB <= 40 && (_ -= 2e3),
        _ >= 1e3 && 1999 >= _) {
        if (1 != n_Reborn)
            return 0;
        _ -= 1e3
    }
    for (var a = 0; 999 != m_JobEquip[n_A_JOB][a]; a++)
        if (m_JobEquip[n_A_JOB][a] == _)
            return 1;
    return 0
}


function n_A_JobSet() {
    n_A_JOB = 1 * document.calcForm.A_JOB.value,
        21 <= n_A_JOB && n_A_JOB <= 40 ? (n_Reborn = 1,
            34 <= n_A_JOB && n_A_JOB <= 40 && (n_A_JOB -= 34)) : n_Reborn = 0
}
function n_A_JobClass() {
    return n_A_JOB <= 6 ? n_A_JOB : 20 == n_A_JOB ? 0 : 7 == n_A_JOB || 13 == n_A_JOB || 21 == n_A_JOB || 27 == n_A_JOB ? 1 : 8 == n_A_JOB || 14 == n_A_JOB || 22 == n_A_JOB || 28 == n_A_JOB ? 2 : 9 == n_A_JOB || 15 == n_A_JOB || 23 == n_A_JOB || 29 == n_A_JOB ? 3 : 10 == n_A_JOB || 16 == n_A_JOB || 17 == n_A_JOB || 24 == n_A_JOB || 30 == n_A_JOB || 31 == n_A_JOB ? 4 : 11 == n_A_JOB || 18 == n_A_JOB || 25 == n_A_JOB || 32 == n_A_JOB ? 5 : 12 == n_A_JOB || 19 == n_A_JOB || 26 == n_A_JOB || 33 == n_A_JOB ? 6 : 41 == n_A_JOB || 42 == n_A_JOB || 43 == n_A_JOB ? 41 : 7
}
function n_A_JobClass2() {
    return 7 == n_A_JOB || 21 == n_A_JOB ? 7 : 8 == n_A_JOB || 22 == n_A_JOB ? 8 : 9 == n_A_JOB || 23 == n_A_JOB ? 9 : 10 == n_A_JOB || 24 == n_A_JOB ? 10 : 11 == n_A_JOB || 25 == n_A_JOB ? 11 : 12 == n_A_JOB || 26 == n_A_JOB ? 12 : 13 == n_A_JOB || 27 == n_A_JOB ? 13 : 14 == n_A_JOB || 28 == n_A_JOB ? 14 : 15 == n_A_JOB || 29 == n_A_JOB ? 15 : 16 == n_A_JOB || 30 == n_A_JOB ? 16 : 17 == n_A_JOB || 31 == n_A_JOB ? 16 : 18 == n_A_JOB || 32 == n_A_JOB ? 18 : 19 == n_A_JOB || 33 == n_A_JOB ? 19 : 0
}
function EquipNumSearch(_) {
    for (var a = 0, n = 0; 20 >= n; n++)
        _ == n_A_Equip[n] && (a += 1);
    return a
}
function CardNumSearch(_) {
    for (var a = 0, n = 0; 25 >= n; n++)
        _ == n_A_card[n] && (a += 1);
    return a
}
function TimeItemNumSearch(_) {
    for (var a = 0, n = 0; 3 >= n; n++)
        _ == n_A_Buf8[8 + n] && (a += 1);
    return a
}
function NumSearch(_, a) {
    for (var n = a.length - 1, e = 0; n >= e; e++)
        if (_ == a[e])
            return 1;
    return 0
}
function ActiveSkillSetPlus() {
    for (w_ASSP0 = new Array,
        w_ASSP9 = new Array,
        n = 0; 20 > n; n++)
        w_ASSP0[n] = 999,
            w_ASSP9[n] = 0;
    j = 0;
    var _ = 0;
    for (n = 0; 20 >= n; n++)
        for (j2 = 0; 0 != m_Item[n_A_Equip[n]][11 + j2]; j2 += 2)
            _ = m_Item[n_A_Equip[n]][12 + j2],
                220 == Math.abs(m_Item[n_A_Equip[n]][11 + j2]) ? 1 == m_EnableSkill[_][1] && (w_ASSP0[j] = m_EnableSkill[_][2],
                    w_ASSP9[j] = m_EnableSkill[_][0] + 3e3,
                    j++) : 221 == Math.abs(m_Item[n_A_Equip[n]][11 + j2]) && 1 == m_AutoSpellSkill[_][1] && (w_ASSP0[j] = m_AutoSpellSkill[_][2],
                        w_ASSP9[j] = m_AutoSpellSkill[_][0] + 2e3,
                        j++);
    for (n = 0; 25 >= n; n++)
        for (j2 = 0; 0 != m_Card[n_A_card[n]][4 + j2]; j2 += 2)
            220 == m_Card[n_A_card[n]][4 + j2] ? 1 == m_EnableSkill[m_Card[n_A_card[n]][5 + j2]][1] && (w_ASSP0[j] = m_EnableSkill[m_Card[n_A_card[n]][5 + j2]][2],
                w_ASSP9[j] = m_Card[n_A_card[n]][5 + j2] + 3e3,
                j++) : 221 == m_Card[n_A_card[n]][4 + j2] && 1 == m_AutoSpellSkill[m_Card[n_A_card[n]][5 + j2]][1] && (w_ASSP0[j] = m_AutoSpellSkill[m_Card[n_A_card[n]][5 + j2]][2],
                    w_ASSP9[j] = m_Card[n_A_card[n]][5 + j2] + 2e3,
                    j++);
    !CardNumSearch(164) || 9 != n_A_JOB && 23 != n_A_JOB || (w_ASSP0[j] = 162,
        w_ASSP9[j] = 2095,
        j++),
        CardNumSearch(277) && 1 == n_A_JobClass() && (w_ASSP0[j] = 76,
            w_ASSP9[j] = 2096,
            j++),
        EquipNumSearch(1096) && 9 != n_A_JobClass2() && (w_ASSP0[j] = 193,
            w_ASSP9[j] = 2108,
            j++);
    for (var a = [33, 34, 35, 36, 13, 37, 38, 39, 7], n = 0; 8 >= n; n++)
        w_ASSP0[j] = m_EnableSkill[a[n]][2],
            w_ASSP9[j] = a[n] + 5e3,
            j++;
    for (w_ASSP0[j] = m_EnableSkill[40][2],
        w_ASSP9[j] = 5040,
        j++,
        w_ASSPch = 0,
        n = 0; 20 > n; n++)
        w_ASSP0bk[n] != w_ASSP0[n] && (w_ASSPch = 1);
    if (w_ASSPch) {
        if (c.all_dmgSkills.checked)
            k = 109;
        else
            for (k = 0; 999 != m_JobAtkSkill[n_A_JOB][k]; k++)
                ;
        for (n = k + 20; n >= k; n--)
            c.A_ActiveSkill.options[n] = null;
        for (j = 0,
            n = k; 999 != w_ASSP0[j]; n++,
            j++)
            5040 == w_ASSP9[j] ? c.A_ActiveSkill.options[n] = new Option(m_Skill[w_ASSP0[j]][2] + " (Yggdrasil Leaf)", w_ASSP9[j]) : w_ASSP9[j] >= 5e3 ? c.A_ActiveSkill.options[n] = new Option(m_Skill[w_ASSP0[j]][2] + " (Scroll Skill)", w_ASSP9[j]) : w_ASSP9[j] >= 3e3 ? c.A_ActiveSkill.options[n] = new Option(m_Skill[w_ASSP0[j]][2] + " (Acquired Skill)", w_ASSP9[j]) : c.A_ActiveSkill.options[n] = new Option(m_Skill[w_ASSP0[j]][2] + " (Auto-Casted Skill)", w_ASSP9[j])
    }
    for (n = 0; 20 > n; n++)
        w_ASSP0bk[n] = w_ASSP0[n];
    1 * c.A_ActiveSkill.value == 0 && (c.A_ActiveSkillLV.style.visibility = "hidden")
}
function KakutyouKansuu() {
    if (wKK = 1 * c.A_Kakutyou.value,
        0 == wKK)
        return void myInnerHtml("A_KakutyouData", "", 0);
    if (Heal = new Array,
        Heal2 = new Array,
        2 == wKK) {
        for (t = "<table><tr><td></td><td class=title>Heal on yourself</td><td class=title>Heal on other player</td></tr>",
            n = 0; 10 >= n; n++)
            Heal[n] = HealCalc(n, 1),
                Heal2[n] = HealCalc(n, 0);
        3 == n_A_JobClass() || 13 == n_A_JOB || 14 == n_A_JOB || 20 == n_A_JOB || 27 == n_A_JOB || 28 == n_A_JOB ? (t += "<tr><td><b>Heal Level 1</b></td><td class=center>" + Heal[1] + "</td><td class=center>" + Heal2[1] + "</td></tr>",
            t += "<tr><td><b>Heal Level 2</b></td><td class=center>" + Heal[2] + "</td><td class=center>" + Heal2[2] + "</td></tr>",
            t += "<tr><td><b>Heal Level 3</b></td><td class=center>" + Heal[3] + "</td><td class=center>" + Heal2[3] + "</td></tr>",
            t += "<tr><td><b>Heal Level 4</b></td><td class=center>" + Heal[4] + "</td><td class=center>" + Heal2[4] + "</td></tr>",
            t += "<tr><td><b>Heal Level 5</b></td><td class=center>" + Heal[5] + "</td><td class=center>" + Heal2[5] + "</td></tr>",
            t += "<tr><td><b>Heal Level 6</b></td><td class=center>" + Heal[6] + "</td><td class=center>" + Heal2[6] + "</td></tr>",
            t += "<tr><td><b>Heal Level 7</b></td><td class=center>" + Heal[7] + "</td><td class=center>" + Heal2[7] + "</td></tr>",
            t += "<tr><td><b>Heal Level 8</b></td><td class=center>" + Heal[8] + "</td><td class=center>" + Heal2[8] + "</td></tr>",
            t += "<tr><td><b>Heal Level 9</b></td><td class=center>" + Heal[9] + "</td><td class=center>" + Heal2[9] + "</td></tr>",
            t += "<tr><td><b>Heal Level 10</b></td><td class=center>" + Heal[10] + "</td><td class=center>" + Heal2[10] + "</td></tr></table>") : (t += "<tr><td><b>Heal Level 1 [Vitata Card]</b></td><td class=center>" + Heal[1] + "</td><td class=center>" + Heal2[1] + "</td></tr>",
                t += "<tr><td><b>Heal Level 2</b></td><td class=center>" + Heal[2] + "</td><td class=center>" + Heal2[2] + "</td></tr>",
                t += "<tr><td><b>Heal Level 3</b></td><td class=center>" + Heal[3] + "</td><td class=center>" + Heal2[3] + "</td></tr>",
                t += "<tr><td><b>Heal Level 4</b></td><td class=center>" + Heal[4] + "</td><td class=center>" + Heal2[4] + "</td></tr>",
                t += "<tr><td><b>Heal Level 5 [Scroll]</b></td><td class=center>" + Heal[5] + "</td><td class=center>" + Heal2[5] + "</td></tr></table>"),
            t += "<BR><B>Heal Boost:</B> " + (1 * n_tok[91] + 1 * n_tok[99]) + "%",
            t += "<br><b>Required Int/Lv for next bonus:</b> +" + (8 - (n_A_BaseLV + n_A_INT) % 8),
            myInnerHtml("A_KakutyouData", t, 0)
    } else if (4 == wKK) {
        if (9 == n_A_JOB || 14 == n_A_JOB || 23 == n_A_JOB || 28 == n_A_JOB) {
            for (Sanctuary = new Array,
                Sanctuary2 = new Array,
                n = 0; 10 >= n; n++)
                Sanctuary[n] = SanctuaryCalc(n, 1),
                    Sanctuary2[n] = SanctuaryCalc(n, 0);
            t = "<table><tr><td></td><td class=title>Sanctuary on yourself</td><td class=title>Sanctuary on other player</td></tr>",
                t += "<tr><td><b>Sanctuary Level 1</b></td><td class=center>" + Sanctuary[1] + " x 4 = " + 4 * Sanctuary[1] + "</td><td class=center>" + Sanctuary2[1] + " x 4 = " + 4 * Sanctuary2[1] + "</td></tr>",
                t += "<tr><td><b>Sanctuary Level 2</b></td><td class=center>" + Sanctuary[2] + " x 5 = " + 5 * Sanctuary[2] + "</td><td class=center>" + Sanctuary2[2] + " x 5 = " + 5 * Sanctuary2[2] + "</td></tr>",
                t += "<tr><td><b>Sanctuary Level 3</b></td><td class=center>" + Sanctuary[3] + " x 6 = " + 6 * Sanctuary[3] + "</td><td class=center>" + Sanctuary2[3] + " x 6 = " + 6 * Sanctuary2[3] + "</td></tr>",
                t += "<tr><td><b>Sanctuary Level 4</b></td><td class=center>" + Sanctuary[4] + " x 7 = " + 7 * Sanctuary[4] + "</td><td class=center>" + Sanctuary2[4] + " x 7 = " + 7 * Sanctuary2[4] + "</td></tr>",
                t += "<tr><td><b>Sanctuary Level 5</b></td><td class=center>" + Sanctuary[5] + " x 8 = " + 8 * Sanctuary[5] + "</td><td class=center>" + Sanctuary2[5] + " x 8 = " + 8 * Sanctuary2[5] + "</td></tr>",
                t += "<tr><td><b>Sanctuary Level 6</b></td><td class=center>" + Sanctuary[6] + " x 9 = " + 9 * Sanctuary[6] + "</td><td class=center>" + Sanctuary2[6] + " x 9 = " + 9 * Sanctuary2[6] + "</td></tr>",
                t += "<tr><td><b>Sanctuary Level 7</b></td><td class=center>" + Sanctuary[7] + " x 10 = " + 10 * Sanctuary[7] + "</td><td class=center>" + Sanctuary2[7] + " x 10 = " + 10 * Sanctuary2[7] + "</td></tr>",
                t += "<tr><td><b>Sanctuary Level 8</b></td><td class=center>" + Sanctuary[8] + " x 11 = " + 11 * Sanctuary[8] + "</td><td class=center>" + Sanctuary2[8] + " x 11 = " + 11 * Sanctuary2[8] + "</td></tr>",
                t += "<tr><td><b>Sanctuary Level 9</b></td><td class=center>" + Sanctuary[9] + " x 12 = " + 12 * Sanctuary[9] + "</td><td class=center>" + Sanctuary2[9] + " x 12 = " + 12 * Sanctuary2[9] + "</td></tr>",
                t += "<tr><td><b>Sanctuary Level 10</b></td><td class=center>" + Sanctuary[10] + " x 13 = " + 13 * Sanctuary[10] + "</td><td class=center>" + Sanctuary2[10] + " x 13 = " + 13 * Sanctuary2[10] + "</td></tr></table>",
                t += "<BR><B>Heal Boost:</B> " + (1 * n_tok[94] + 1 * n_tok[99]) + "%"
        } else
            t = '<p class="center">Not available for this class.</p>';
        myInnerHtml("A_KakutyouData", t, 0)
    } else if (5 == wKK)
        ;
    else if (6 == wKK)
        1 == n_A_JobClass() || 20 == n_A_JOB ? (HPRLV = 1 * c.A_KakutyouSelNum.value,
            t = "<br>HP regen: " + Math.floor((5 + n_A_MaxHP / 500) * HPRLV),
            (EquipNumSearch(1240) || 20 == n_A_JOB) && (SPRLV = 1 * c.A_KakutyouSelNumSP.value,
                t += "<br>SP regen: " + Math.floor((3 + n_A_MaxSP / 500) * SPRLV)),
            myInnerHtml("A_KakutyouData", t, 0)) : 5 == n_A_JobClass() || 9 == n_A_JOB || 23 == n_A_JOB || 44 == n_A_JOB ? (SPRLV = 1 * c.A_KakutyouSelNum.value,
                t = "<br>SP regen: " + Math.floor((3 + n_A_MaxSP / 500) * SPRLV),
                EquipNumSearch(1240) && (HPRLV = 1 * c.A_KakutyouSelNumHP.value,
                    t += "<br>HP regen: " + Math.floor((5 + n_A_MaxHP / 500) * HPRLV)),
                myInnerHtml("A_KakutyouData", t, 0)) : EquipNumSearch(1240) ? (HPRLV = 1 * c.A_KakutyouSelNumHP.value,
                    SPRLV = 1 * c.A_KakutyouSelNumSP.value,
                    s = Math.floor((5 + n_A_MaxHP / 500) * HPRLV),
                    w2 = Math.floor((3 + n_A_MaxSP / 500) * SPRLV),
                    myInnerHtml("A_KakutyouData", "<br>HP regen: " + s + "<br>SP regen: " + w2, 0)) : myInnerHtml("A_KakutyouData", "", 0);
    else if (8 == wKK)
        15 == n_A_JOB || 29 == n_A_JOB ? (SPRLV = 1 * c.A_KakutyouSelNum.value,
            s = Math.floor((4 + n_A_MaxHP / 500) * SPRLV),
            w2 = Math.floor((2 + n_A_MaxSP / 500) * SPRLV),
            myInnerHtml("A_KakutyouData", "<br>HP regen: " + s + "<br>SP regen: " + w2, 0)) : myInnerHtml("A_KakutyouData", "", 0);
    else if (10 == wKK) {
        for (syozijob = [0, 800, 400, 400, 600, 200, 800, 800, 400, 600, 700, 400, 1e3, 800, 400, 600, 700, 700, 400, 1e3, 0, 800, 400, 600, 700, 400, 1e3, 800, 400, 600, 700, 700, 400, 1e3, 0, 0, 0, 0, 0, 0, 0, 800, 800, 400, 600, 800],
            syoziryou = 2e3 + syozijob[n_A_JOB],
            syoziryou2 = 1 * c.A_KakutyouSelNum2.value * 200,
            1 * c.A_adopted.checked && (syoziryou = 2e3),
            syoziryou += 1 * c.A_STR.value * 30,
            SkillSearch(78) && (syoziryou += 1e3),
            6 != n_A_JobClass() && 20 != n_A_JOB || (syoziryou += 1 * c.A_KakutyouSelNum.value * 200),
            42 == n_A_JOB ? Knowledge = 1 + 1 * c.SG_Weight.value * .1 : Knowledge = 1,
            EquipKG = 0,
            n = 0; 10 >= n; n++)
            EquipKG += m_Item[n_A_Equip[n]][6];
        t = "<table>",
            t += "<tr><td><b><font color=red>Weight Limit: </font></b>" + (Math.floor(syoziryou * Knowledge) + syoziryou2) + "</td></tr><tr><td><b>Total Weight of Items: </b>" + EquipKG,
            t += "</td></tr></table>",
            myInnerHtml("A_KakutyouData", t, 0)
    } else if (12 == wKK) {
        var _ = new Array
            , a = (n_A_BaseLV + n_A_LUK) / 10;
        if (SRV) {
            _[0] = Math.floor(100 * (3 + n_A_VIT) / 100),
                _[1] = _[0],
                _[2] = Math.floor(100 * (3 + n_A_MDEF) / 100),
                _[3] = Math.floor(100 * (3 + n_A_LUK) / 100),
                _[4] = Math.floor(100 * (3 + (n_A_INT + n_A_VIT) / 2) / 100),
                _[5] = Math.floor(100 * (3 + n_A_INT) / 100),
                _[6] = _[0],
                _[7] = Math.floor(100 * (3 + (n_A_STR + n_A_INT) / 2) / 100),
                _[8] = _[0],
                _[9] = _[2];
            for (var n = 0; 9 >= n; n++)
                _[n] > 100 && (_[n] = 100),
                    _[n] < 0 && (_[n] = 0);
            n_A_LUK < 1 && (_[3] = 100),
                n_A_VIT > 99 && (_[3] = 100),
                n_A_LUK > n_A_BaseLV && (_[3] = 100)
        } else
            _[0] = Math.floor(100 * n_A_VIT) / 100,
                _[1] = _[0],
                _[2] = Math.floor(100 * n_A_MDEF) / 100,
                _[3] = Math.floor(100 * n_A_LUK) / 100,
                _[4] = Math.floor(100 * n_A_INT) / 150,
                _[5] = Math.floor(100 * n_A_INT) / 100,
                _[6] = _[0],
                _[7] = _[4],
                _[8] = _[0],
                _[9] = _[2],
                0 == n_A_LUK && (_[3] = 100);
        9 == n_A_Bodyelement && (_[2] = 100,
            _[8] = 100,
            _[9] = 100);
        for (var n = 0; 9 >= n; n++)
            _[n] += Math.floor((100 - _[n]) * n_tok[150 + n]) / 100,
                _[n] = Math.floor(100 * _[n]) / 100,
                _[n] > 100 && (_[n] = 100);
        t = "<table>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[0]) + "</b> % to</td><td class='data'>" + v_Element[0] + "</td>",
            t += "<td class='right'><b>" + n_tok[50] + "</b> % to</td><td class='data'>" + v_Race[0] + "</td>",
            t += "<td class='right'><b>" + _[0] + "</b> % to</td><td class='data'><b>" + v_Effect[0] + "</b></td></tr>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[1]) + "</b> % to</td><td class='data'>" + v_Element[1] + "</td>",
            t += "<td class='right'><b>" + n_tok[51] + "</b> % to</td><td class='data'>" + v_Race[1] + "</td>",
            t += "<td class='right'><b>" + _[1] + "</b> % to</td><td class='data'><b>" + v_Effect[1] + "</b></td></tr>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[2]) + "</b> % to</td><td class='data'>" + v_Element[2] + "</td>",
            t += "<td class='right'><b>" + n_tok[52] + "</b> % to</td><td class='data'>" + v_Race[2] + "</td>",
            t += "<td class='right'><b>" + _[2] + "</b> % to</td><td class='data'><b>" + v_Effect[2] + "</b></td></tr>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[3]) + "</b> % to</td><td class='data'>" + v_Element[3] + "</td>",
            t += "<td class='right'><b>" + n_tok[53] + "</b> % to</td><td class='data'>" + v_Race[3] + "</td>",
            t += "<td class='right'><b>" + _[3] + "</b> % to</td><td class='data'><b>" + v_Effect[3] + "</b></td></tr>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[4]) + "</b> % to</td><td class='data'>" + v_Element[4] + "</td>",
            t += "<td class='right'><b>" + n_tok[54] + "</b> % to</td><td class='data'>" + v_Race[4] + "</td>",
            t += "<td class='right'><b>" + _[4] + "</b> % to</td><td class='data'><b>" + v_Effect[4] + "</b></td></tr>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[5]) + "</b> % to</td><td class='data'>" + v_Element[5] + "</td>",
            t += "<td class='right'><b>" + n_tok[55] + "</b> % to</td><td class='data'>" + v_Race[5] + "</td>",
            t += "<td class='right'><b>" + _[5] + "</b> % to</td><td class='data'><b>" + v_Effect[5] + "</b></td></tr>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[6]) + "</b> % to</td><td class='data'>" + v_Element[6] + "</td>",
            t += "<td class='right'><b>" + n_tok[56] + "</b> % to</td><td class='data'>" + v_Race[6] + "</td>",
            t += "<td class='right'><b>" + _[6] + "</b> % to</td><td class='data'><b>" + v_Effect[6] + "</b></td></tr>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[7]) + "</b> % to</td><td class='data'>" + v_Element[7] + "</td>",
            t += "<td class='right'><b>" + n_tok[57] + "</b> % to</td><td class='data'>" + v_Race[7] + "</td>",
            t += "<td class='right'><b>" + _[7] + "</b> % to</td><td class='data'><b>" + v_Effect[7] + "</b></td></tr>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[8]) + "</b> % to</td><td class='data'>" + v_Element[8] + "</td>",
            t += "<td class='right'><b>" + n_tok[58] + "</b> % to</td><td class='data'>" + v_Race[8] + "</td>",
            t += "<td class='right'><b>" + _[8] + "</b> % to</td><td class='data'><b>" + v_Effect[8] + "</b></td></tr>",
            t += "<tr><td class='right'><b>" + (100 - n_A_element[9]) + "</b> % to</td><td class='data'>" + v_Element[9] + "</td>",
            t += "<td class='right'><b>" + n_tok[59] + "</b> % to</td><td class='data'>" + v_Race[9] + "</td>",
            t += "<td class='right'><b>" + _[9] + "</b> % to</td><td class='data'><b>" + v_Effect[9] + "</b></td></tr>",
            t += "<tr><td colspan='6' class='center'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</td></tr></table>",
            t += "<table>",
            t += "<tr><td class='right'><b>" + n_tok[190] + "</b> % to</td><td class='data'><b>Small size</b></td>",
            t += "<td class='right'><b>" + n_tok[77] + "</b> % to</td><td class='data'><b>Boss monsters</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[191] + "</b> % to</td><td class='data'><b>Medium size</b></td>",
            t += "<td class='right'><b>" + n_tok[79] + "</b> % to</td><td class='data'><b>Normal monsters</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[192] + "</b> % to</td><td class='data'><b>Large size</b></td>",
            t += "<td class='right'><b>" + n_tok[78] + "</b> % to</td><td class='data'><b>Long-range attacks</b></td></tr>",
            t += "</table>";
        var e = Math.floor(100 * (a - 9.9)) / 100;
        0 > e && (e = 0),
            myInnerHtml("A_KakutyouData", t, 0)
    } else if (14 == wKK) {
        var t;
        F_MOD = 0,
            G_MOD = 0,
            B_MOD = 0,
            SM_MOD = 0,
            B_MOD += n_tok[80] + n_tok[26];
        for (var n = 0; 7 >= n; n++)
            244 == n_A_card[n] && (G_MOD += 40);
        for (EquipNumSearch(835) && (SM_MOD += 10),
            844 != n_A_Equip[9] && 1753 != n_A_Equip[9] || (SM_MOD += 10),
            844 != n_A_Equip[10] && 1753 != n_A_Equip[10] || (SM_MOD += 10),
            n = 0; 8 > n; n += 2)
            29 == n_A_Buf9[n] && (SM_MOD += n_A_Buf9[n + 1]);
        for (n = 0; 8 > n; n += 2)
            26 == n_A_Buf9[n] && (G_MOD += n_A_Buf9[n + 1]);
        F_M1 = 1 * c.R_OBJ.value,
            F_M2 = 1 * c.S_OBJ.value,
            F_M3 = 1 * c.E_OBJ.value,
            F_M4 = 1 * c.B_OBJ.value,
            F_M5 = 1 * c.SP_OBJ.value,
            0 == F_M1 ? F_M1 = n_tok[30] : 1 == F_M1 ? F_M1 = n_tok[31] : 2 == F_M1 ? F_M1 = n_tok[32] : 3 == F_M1 ? F_M1 = n_tok[33] : 4 == F_M1 ? F_M1 = n_tok[34] : 5 == F_M1 ? F_M1 = n_tok[35] : 6 == F_M1 ? F_M1 = n_tok[36] : 7 == F_M1 ? F_M1 = n_tok[37] : 8 == F_M1 ? F_M1 = n_tok[38] : 9 == F_M1 && (F_M1 = n_tok[39]),
            0 == F_M2 ? F_M2 = n_tok[27] : 1 == F_M2 ? F_M2 = n_tok[28] : 2 == F_M2 && (F_M2 = n_tok[29]),
            0 == F_M3 ? F_M3 = n_tok[40] : 1 == F_M3 ? F_M3 = n_tok[41] : 2 == F_M3 ? F_M3 = n_tok[42] : 3 == F_M3 ? F_M3 = n_tok[43] : 4 == F_M3 ? F_M3 = n_tok[44] : 5 == F_M3 ? F_M3 = n_tok[45] : 6 == F_M3 ? F_M3 = n_tok[46] : 7 == F_M3 ? F_M3 = n_tok[47] : 8 == F_M3 ? F_M3 = n_tok[48] : 9 == F_M3 && (F_M3 = n_tok[49]),
            0 == F_M4 ? F_M4 = n_tok[80] : 1 == F_M4 && (F_M4 = B_MOD),
            0 == F_M5 ? F_M5 = 0 : 1 == F_M5 ? F_M5 = n_tok[81] : 2 == F_M5 ? F_M5 = n_tok[84] : 3 == F_M5 ? F_M5 = G_MOD : 4 == F_M5 ? F_M5 = n_tok[82] : 5 == F_M5 ? F_M5 = n_tok[83] : 6 == F_M5 && (F_M5 = SM_MOD),
            F_M1 = 1 + F_M1 / 100,
            F_M2 = 1 + F_M2 / 100,
            F_M3 = 1 + F_M3 / 100,
            F_M4 = 1 + F_M4 / 100,
            F_M5 = 1 + F_M5 / 100,
            F_M6 = 1 + n_tok[25] / 100,
            F_M7 = 1 + n_tok[70] / 100,
            F_MOD = Math.round(F_M1 * F_M2 * F_M3 * F_M4 * F_M5 * 100),
            F_MOD2 = Math.round(F_M1 * F_M2 * F_M3 * F_M4 * F_M5 * F_M6 * 100),
            F_MOD3 = Math.round(F_M1 * F_M2 * F_M3 * F_M4 * F_M5 * F_M7 * 100),
            F_MOD4 = Math.round(F_M1 * F_M2 * F_M3 * F_M4 * F_M5 * F_M6 * F_M7 * 100),
            t = "<table>",
            t += "<tr><td class='right'><b>" + n_tok[40] + "</b> %</td><td class='data'>to " + v_Element[0] + "</td>",
            t += "<td class='right'><b>" + n_tok[30] + "</b> %</td><td class='data'>to " + v_Race[0] + "</td>",
            t += "<td class='right'><b>" + n_tok[81] + "</b> %</td><td class='data'>to <b>Goblin</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[41] + "</b> %</td><td class='data'>to " + v_Element[1] + "</td>",
            t += "<td class='right'><b>" + n_tok[31] + "</b> %</td><td class='data'>to " + v_Race[1] + "</td>",
            t += "<td class='right'><b>" + n_tok[84] + "</b> %</td><td class='data'>to <b>Golem</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[42] + "</b> %</td><td class='data'>to " + v_Element[2] + "</td>",
            t += "<td class='right'><b>" + n_tok[32] + "</b> %</td><td class='data'>to " + v_Race[2] + "</td>",
            t += "<td class='right'><b>" + n_tok[82] + "</b> %</td><td class='data'>to <b>Kobold</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[43] + "</b> %</td><td class='data'>to " + v_Element[3] + "</td>",
            t += "<td class='right'><b>" + n_tok[33] + "</b> %</td><td class='data'>to " + v_Race[3] + "</td>",
            t += "<td class='right'><b>" + n_tok[83] + "</b> %</td><td class='data'>to <b>Orc</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[44] + "</b> %</td><td class='data'>to " + v_Element[4] + "</td>",
            t += "<td class='right'><b>" + n_tok[34] + "</b> %</td><td class='data'>to " + v_Race[4] + "</td>",
            t += "<td class='right'><b>" + SM_MOD + "</b> %</td><td class='data'>to <b>Satan Morroc</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[45] + "</b> %</td><td class='data'>to " + v_Element[5] + "</td>",
            t += "<td class='right'><b>" + n_tok[35] + "</b> %</td><td class='data'>to " + v_Race[5] + "</td>",
            t += "<td class='right'><b>" + G_MOD + "</b> %</td><td class='data'>to <b>Guardian</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[46] + "</b> %</td><td class='data'>to " + v_Element[6] + "</td>",
            t += "<td class='right'><b>" + n_tok[36] + "</b> %</td><td class='data'>to " + v_Race[6] + "</td>",
            t += "<td class='right'><b>" + n_tok[80] + "</b> %</td><td class='data'>to <b>Normal</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[47] + "</b> %</td><td class='data'>to " + v_Element[7] + "</td>",
            t += "<td class='right'><b>" + n_tok[37] + "</b> %</td><td class='data'>to " + v_Race[7] + "</td>",
            t += "<td class='right'><b>" + B_MOD + "</b> %</td><td class='data'>to <b>Boss</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[48] + "</b> %</td><td class='data'>to " + v_Element[8] + "</td>",
            t += "<td class='right'><b>" + n_tok[38] + "</b> %</td><td class='data'>to " + v_Race[8] + "</td>",
            t += "<td class='right'><b>" + n_tok[25] + "</b> %</td><td class='data'>to <b>Long-range</b></td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[49] + "</b> %</td><td class='data'>to " + v_Element[9] + "</td>",
            t += "<td class='right'><b>" + n_tok[39] + "</b> %</td><td class='data'>to " + v_Race[9] + "</td>",
            t += "<td class='right'><b>+" + n_tok[70] + "</b> %</td><td class='data'><b>Critical damage</b></td></tr>",
            t += "<tr><td colspan='6' class='center'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</td></tr></table>",
            t += "<table>",
            t += "<tr><td class='right'><b>" + n_tok[27] + "</b> % to</td><td class='data'><b>Small</b></td>",
            t += "<td class='right'><b>" + n_tok[28] + "</b> % to</td><td class='data'><b>Medium</b></td>",
            t += "<td class='right'><b>" + n_tok[29] + "</b> % to</td><td class='data'><b>Large</b></td></tr>",
            t += "</table>",
            t += "<hr><table>",
            t += "<tr><td><b>Final Non-Critical Melee ATK based Damage Modifier: </b>" + F_MOD + " %</td></tr>",
            t += "<tr><td><b>Final Non-Critical Long-range ATK based Damage Modifier: </b>" + F_MOD2 + " %</td></tr>",
            t += "<tr><td><b>Final Critical Melee ATK based Damage Modifier: </b>" + F_MOD3 + " %</td></tr>",
            t += "<tr><td><b>Final Critical Long-range ATK based Damage Modifier: </b>" + F_MOD4 + " %</td></tr>",
            t += "</table>",
            myInnerHtml("A_KakutyouSel", t, 0)
    } else if (16 == wKK) {
        var t;
        t = "<table>",
            t += "<tr><td class='right'><b>" + n_tok[170] + "</b> % to</td><td class='data'>" + v_Race[0] + "</td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[171] + "</b> % to</td><td class='data'>" + v_Race[1] + "</td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[172] + "</b> % to</td><td class='data'>" + v_Race[2] + "</td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[173] + "</b> % to</td><td class='data'>" + v_Race[3] + "</td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[174] + "</b> % to</td><td class='data'>" + v_Race[4] + "</td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[175] + "</b> % to</td><td class='data'>" + v_Race[5] + "</td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[176] + "</b> % to</td><td class='data'>" + v_Race[6] + "</td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[177] + "</b> % to</td><td class='data'>" + v_Race[7] + "</td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[178] + "</b> % to</td><td class='data'>" + v_Race[8] + "</td></tr>",
            t += "<tr><td class='right'><b>" + n_tok[179] + "</b> % to</td><td class='data'>" + v_Race[9] + "</td></tr>",
            t += "</table>",
            myInnerHtml("A_KakutyouData", t, 0)
    } else if (18 == wKK) {
        var A;
        SRV < 50 ? A = "<b>Cast Time: </b>" + Math.floor(1e4 * n_A_CAST) / 100 + " % [<b>Bragi:</b> " + nb_tok + " %| <b>Gear:</b> " + -n_tok[73] + " % | <b>DEX:</b> " + n_A_DEX + " ]<BR>" : (A = "<b>Variable Cast Time: </b>" + Math.floor(1e4 * n_A_CAST) / 100 + " % [<b>Bragi:</b> " + nb_tok + " %| <b>Gear:</b> " + -n_tok[73] + " % | <b>INT+DEX*2:</b> " + (2 * n_A_DEX + n_A_INT) + " ]<BR>",
            A += "<b>Fixed Cast Time: </b>" + Math.floor(1e4 * n_A_fCAST) / 100 + " % [<b>Skills:</b> " + (100 * (1 - n_A_fCAST) - n_tok[72]) + " %| <b>Gear:</b> " + -n_tok[72] + " % ]<BR>"),
            A += "<b>Cast Delay: </b>" + Math.floor(100 - AC_I - (100 - AC_I) * n_tok[74] / 100) + " % [<b>Bragi:</b> " + n_tok[74] + " % | <b>Gear:</b> " + AC_I + " %]<BR>",
            myInnerHtml("A_KakutyouData", A, 0)
    } else if (20 == wKK) {
        var o = 1 * c.A_KakutyouSelNum.value
            , l = 1 * c.A_KakutyouSelNum2.value;
        o >= 0 && 100 > o || (o = 0,
            c.A_KakutyouSelNum.value = 0),
            l >= 0 && 100 > l || (l = 0,
                c.A_KakutyouSelNum2.value = 0);
        var u = 0;
        0 == n_A_JOB && n_Reborn && (u = 1),
            (1 <= n_A_JOB && n_A_JOB <= 6 || 41 == n_A_JOB || 20 == n_A_JOB) && (u = 2,
                n_Reborn && (u = 3)),
            (7 <= n_A_JOB && n_A_JOB <= 19 || 43 == n_A_JOB) && (u = 4),
            21 <= n_A_JOB && n_A_JOB <= 33 && (u = 5),
            42 == n_A_JOB && (u = 7),
            44 != n_A_JOB && 45 != n_A_JOB || (u = 6),
            o = Math.floor(PC_BaseExp[n_Reborn][n_A_BaseLV] * o / 100);
        var t = "Required BaseExp for Base Up: <B>" + Kanma(PC_BaseExp[n_Reborn][n_A_BaseLV] - o) + " </B>exp<BR>"
            , r = 0
            , S = 0;
        if (0 != selectedMonster[16]) {
            for (n = n_A_BaseLV; 99 > n; n++) {
                var i = PC_BaseExp[n_Reborn][n]
                    , s = Math.floor((i - o) / selectedMonster[16]);
                for (r += s,
                    o += s * selectedMonster[16]; i > o;)
                    o += selectedMonster[16],
                        r += 1;
                0 == S && (S = 1,
                    t += "(Equals <B>" + Kanma(r) + "</B> " + selectedMonster[1] + " kill" + (1 != Kanma(r) ? "s" : "") + ")<BR>"),
                    o -= i,
                    o > i - 1 && (o = i - 1)
            }
            t += "Until BaseLv99: <B>" + Kanma(r) + "</B> more " + selectedMonster[1] + " kill" + (1 != Kanma(r) ? "s" : "") + "<BR><BR>"
        }
        if (l = Math.floor(PC_JobExp[u][n_A_JobLV] * l / 100),
            (1 <= n_A_JOB && n_A_JOB <= 6 || 41 == n_A_JOB) && 50 == n_A_JobLV && (l = 0),
            t += "Required JobExp for Job Up: <B>" + Kanma(PC_JobExp[u][n_A_JobLV] - l) + "</B> exp<BR>",
            r = 0,
            S = 0,
            0 != selectedMonster[17]) {
            for (n = 1; 0 != PC_JobExp[u][n]; n++)
                ;
            var f = n;
            for ((1 <= n_A_JOB && n_A_JOB <= 6 || 41 == n_A_JOB) && (f = 50),
                n = n_A_JobLV; f > n; n++) {
                var i = PC_JobExp[u][n]
                    , s = Math.floor((i - l) / selectedMonster[17]);
                for (r += s,
                    l += s * selectedMonster[17]; i > l;)
                    l += selectedMonster[17],
                        r += 1;
                0 == S && (S = 1,
                    t += "(Equals <B>" + Kanma(r) + "</B> " + selectedMonster[1] + " kill" + (1 != Kanma(r) ? "s" : "") + ")<BR>"),
                    l -= i,
                    l > i - 1 && (l = i - 1)
            }
            t += "Until JobLv" + f + ": <B>" + Kanma(r) + "</B> more " + selectedMonster[1] + " kill" + (1 != Kanma(r) ? "s" : "") + "<BR>"
        }
        myInnerHtml("A_KakutyouData", t, 0)
    } else if (22 == wKK)
        if (H_Bonus = 1,
            H_Bonus2 = 1,
            H_Bonus3 = 1,
            19 == n_A_JOB || 33 == n_A_JOB) {
            slv = 1 * c.SL_LV.value,
                evit = 1 * c.E_VIT.value,
                eint = 1 * c.E_INT.value,
                potr = 1 * c.POT_RLevel.value,
                isp = 1 * c.ISP.value,
                irp = 1 * c.IRP.value,
                rank_bonus = 1 * c.RNK_BNS.value,
                pot1 = 1 * c.PP.value,
                prate1 = m_Potion2[pot1][1],
                prate2 = m_Potion2[pot1][2],
                1 == rank_bonus && (prate1 = 1.5 * prate1),
                1 == rank_bonus && (prate2 = 1.5 * prate2),
                33 == n_A_JOB && (pot2 = 1 * c.SPP.value,
                    prate3 = m_Potion3[pot2][1],
                    prate4 = m_Potion3[pot2][2]),
                EquipNumSearch(712) && (H_Bonus2 += .2),
                EquipNumSearch(1194) && (H_Bonus3 += .05);
            for (var n = 8; 12 > n; n++)
                10 == n_A_Buf8[n] && EquipNumSearch(1e3) && (H_Bonus += .2);
            for (var n = 8; 9 >= n; n++)
                332 == n_A_card[n] && (H_Bonus += .3),
                    513 == n_A_card[n] && (H_Bonus += .03);
            844 != n_A_Equip[9] && 1753 != n_A_Equip[9] || (H_Bonus += .05),
                844 != n_A_Equip[10] && 1753 != n_A_Equip[10] || (H_Bonus += .05),
                1111 == n_A_Equip[9] && (H_Bonus += .05),
                1111 == n_A_Equip[10] && (H_Bonus += .05),
                EquipNumSearch(1162) && (H_Bonus += .1),
                EquipNumSearch(1258) && (H_Bonus += .1),
                EquipNumSearch(1194) && (H_Bonus += .05),
                n_A_HEAD_REFINE >= 7 && EquipNumSearch(1277) && (H_Bonus += .03),
                n_A_HEAD_REFINE >= 9 && EquipNumSearch(1279) && (H_Bonus += .04),
                n_A_HEAD_REFINE >= 9 && EquipNumSearch(1476) && (H_Bonus += .04),
                (1111 == n_A_Equip[9] && 983 == n_A_Equip[10] || 1111 == n_A_Equip[10] && 983 == n_A_Equip[9]) && (H_Bonus += .05),
                EquipNumSearch(1104) && EquipNumSearch(1107) && EquipNumSearch(1110) && (H_Bonus += .03),
                EquipNumSearch(959) && EquipNumSearch(965) && EquipNumSearch(968) && (H_Bonus += .1),
                H_HEALS = 1 + .1 * irp,
                S_HEALS = 1 + .1 * isp,
                4 == pot1 ? (potheal1 = Math.floor(prate1 * (1 + .1 * potr + .05 * pot1) * (1 + slv / 100) * (1 + .02 * eint) * S_HEALS),
                    potheal2 = Math.floor(prate2 * (1 + .1 * potr + .05 * pot1) * (1 + slv / 100) * (1 + .02 * eint) * S_HEALS)) : (potheal1 = Math.floor(prate1 * (1 + .1 * potr + .05 * pot1) * (1 + slv / 100) * (1 + .02 * evit) * H_HEALS * H_Bonus * H_Bonus2 * H_Bonus3),
                        potheal2 = Math.floor(prate2 * (1 + .1 * potr + .05 * pot1) * (1 + slv / 100) * (1 + .02 * evit) * H_HEALS * H_Bonus * H_Bonus2 * H_Bonus3)),
                33 == n_A_JOB && (potheal3 = Math.floor(prate3 * (1 + .1 * potr + .1 * pot2) * (1 + .02 * evit) * H_HEALS * H_Bonus3),
                    potheal4 = Math.floor(prate4 * (1 + .1 * potr + .1 * pot2) * (1 + .02 * evit) * H_HEALS * H_Bonus3)),
                Heal_POT = "<table><tr><td><b>Potion Pitcher heals for: </b>" + potheal1 + " ~ " + potheal2 + "</td>",
                33 == n_A_JOB && (Heal_POT += "<td><b>Slim Potion Pitch heals for: </b>" + potheal3 + " ~ " + potheal4),
                Heal_POT += "</td></tr></table>",
                myInnerHtml("A_KakutyouData", Heal_POT, 0)
        } else
            myInnerHtml("A_KakutyouData", "", 0);
    else if (24 == wKK)
        12 == n_A_JOB || 26 == n_A_JOB ? (smithing = 1 * c.A_SmithT.value,
            orideconres = 1 * c.A_OriR.value,
            weaponres = 1 * c.A_WepR.value,
            starcrumb = 1 * c.A_StarC.value,
            elemstone = 1 * c.A_ElemS.value,
            anvil = 1 * c.A_KakutyouSelNum.value,
            iron = 1 * c.A_Iron.value,
            steel = 1 * c.A_Steel.value,
            stone = 1 * c.A_StoneC.value,
            anvil2 = m_Anvil[anvil][1],
            adopted = 1 * c.A_adopted.checked,
            srate1 = Math.floor(100 * (50 + 5 * smithing + weaponres + anvil2 + .2 * n_A_JobLV + .1 * (n_A_DEX + n_A_LUK) - 15 * starcrumb - 20 * elemstone)) / 100,
            srate2 = Math.floor(100 * (50 + 5 * smithing + weaponres + anvil2 + .2 * n_A_JobLV + .1 * (n_A_DEX + n_A_LUK) - 15 * starcrumb - 20 * elemstone - 20)) / 100,
            srate3 = Math.floor(100 * (50 + 5 * smithing + orideconres + weaponres + anvil2 + .2 * n_A_JobLV + .1 * (n_A_DEX + n_A_LUK) - 15 * starcrumb - 20 * elemstone - 30)) / 100,
            srate4 = Math.floor(100 * (40 + .2 * n_A_JobLV + .1 * (n_A_DEX + n_A_LUK) + 5 * iron)) / 100,
            srate5 = Math.floor(100 * (30 + .2 * n_A_JobLV + .1 * (n_A_DEX + n_A_LUK) + 5 * steel)) / 100,
            srate6 = Math.floor(100 * (10 + .2 * n_A_JobLV + .1 * (n_A_DEX + n_A_LUK) + 5 * stone)) / 100,
            (srate1 < 0 || 0 == smithing) && (srate1 = 0),
            (srate2 < 0 || 0 == smithing) && (srate2 = 0),
            (srate3 < 0 || 0 == smithing) && (srate3 = 0),
            (srate4 < 0 || 0 == iron) && (srate4 = 0),
            (srate5 < 0 || 0 == steel) && (srate5 = 0),
            (srate6 < 0 || 0 == stone) && (srate6 = 0),
            adopted && (srate1 = Math.floor(.7 * srate1 * 100) / 100,
                srate2 = Math.floor(.7 * srate2 * 100) / 100,
                srate3 = Math.floor(.7 * srate3 * 100) / 100),
            t = "<br><table><tr><td><b>Weapon Lvl 1: </b>" + srate1 + " %</td>",
            t += "<td><b>Weapon Lvl 2: </b>" + srate2 + " %</td>",
            t += "<td><b>Weapon Lvl 3: </b>" + srate3 + " %</td></tr>",
            t += "<tr><td><b>Iron: </b>" + srate4 + " %</td>",
            t += "<td><b>Steel: </b>" + srate5 + " %</td>",
            t += "<td><b>Elemental Stone: </b>" + srate6 + " %</td></tr></table>",
            myInnerHtml("A_KakutyouData", t, 0)) : 19 == n_A_JOB || 33 == n_A_JOB ? (potionr = 1 * c.A_PotionRLevel.value,
                vani = 1 * c.A_Van.value,
                preparep = 1 * c.A_PreparePLevel.value,
                selpot = 1 * c.A_KakutyouSelNum.value,
                potrate = m_Potion[selpot][1],
                adopted = 1 * c.A_adopted.checked,
                srate = Math.floor(100 * potionr + 300 * preparep + 20 * n_A_JobLV + 10 * (n_A_DEX + n_A_LUK) + 5 * n_A_INT + 100 * potrate + 100 * vani) / 100,
                (srate < 0 || 0 == potionr || 0 == preparep) && (srate = 0),
                adopted && (srate = Math.floor(.7 * srate)),
                brate = m_Potion[selpot][3],
                frate1 = Math.floor(100 * (srate - brate)) / 100,
                frate1 < 0 && (frate1 = 0),
                frate2 = Math.floor(100 * (srate + brate)) / 100,
                frate2 < 0 && (frate2 = 0),
                myInnerHtml("A_KakutyouData", "<b><br>Sucess rate: </b>" + srate + " % [ " + frate1 + " % ~ " + frate2 + " % ]", 0)) : 22 == n_A_JOB ? (myInnerHtml("A_KakutyouSel", 'Potion to Create: <select name="A_KakutyouSelNum" onChange="StAllCalc()"></select><BR>', 0),
                    document.calcForm.A_KakutyouSelNum.options[0] = new Option("Poison Bottle", 0),
                    srate = Math.floor(200 + 4 * n_A_DEX + 2 * n_A_LUK) / 10,
                    myInnerHtml("A_KakutyouData", "<b><br>Sucess rate: </b>" + srate + " %", 0)) : myInnerHtml("A_KakutyouData", "", 0);
    else if (26 == wKK) {
        var t = "";
        (2 == n_A_JobClass() || EquipNumSearch(1630) || CardNumSearch(152)) && (E_DEX1 = 1 * c.E_DEX.value,
            StealLV = 1 * c.Steal_LV.value,
            DropC = 1 * c.DropChance.value,
            StealC = Math.round(DropC * (10 + 3 * StealLV + n_A_DEX - E_DEX1)) / 100,
            myInnerHtml("Steal_CHANCE", StealC + " %", 0),
            14 != n_A_JOB && 28 != n_A_JOB || (SmugLV = 1 * c.Steal_LV.value,
                SmugC = Math.round(DropC * (10 + 3 * SmugLV + n_A_DEX - E_DEX1)) / 100,
                myInnerHtml("Smug_CHANCE", SmugC + " %", 0))),
            myInnerHtml("A_KakutyouData", "", 0)
    } else if (28 == wKK)
        (CardNumSearch(157) || CardNumSearch(413) || EquipNumSearch(633) || 14 == n_A_JOB || 28 == n_A_JOB) && (E_DEX1 = 1 * c.E_DEX.value,
            14 != n_A_JOB && 28 != n_A_JOB || (S_LV1 = 1 * c.S_LV.value,
                Strip = 5 + 5 * S_LV1 + (n_A_DEX - E_DEX1) / 5,
                S_Time = 60 + 15 * S_LV1 + (n_A_DEX - E_DEX1) / 2,
                Strip < 5 + 5 * S_LV1 && (Strip = 5 + 5 * S_LV1),
                S_Time < 60 && (S_Time = 60),
                myInnerHtml("S_CHANCE", Math.floor(10 * Strip) / 10 + " %", 0),
                myInnerHtml("S_TIME", Math.floor(10 * S_Time) / 10 + " seconds", 0)),
            28 == n_A_JOB && (FS_LV1 = 1 * c.FS_LV.value,
                FStrip = 5 + 2 * FS_LV1 + (n_A_DEX - E_DEX1) / 5,
                FS_Time = 60 + 15 * FS_LV1 + (n_A_DEX - E_DEX1) / 2,
                FStrip < 5 + 2 * FS_LV1 && (FStrip = 5 + 2 * FS_LV1),
                FS_Time < 60 && (FS_Time = 60),
                myInnerHtml("FS_CHANCE", Math.floor(10 * FStrip) / 10 + " %", 0),
                myInnerHtml("FS_TIME", Math.floor(10 * FS_Time) / 10 + " seconds", 0)),
            CardNumSearch(157) && (S_LV1 = 1 * c.S2_LV.value,
                Strip = 5 + 5 * S_LV1 + (n_A_DEX - E_DEX1) / 5,
                S_Time = 60 + 15 * S_LV1 + (n_A_DEX - E_DEX1) / 2,
                Strip < 5 + 5 * S_LV1 && (Strip = 5 + 5 * S_LV1),
                S_Time < 60 && (S_Time = 60),
                myInnerHtml("S2_CHANCE", Math.floor(10 * Strip) / 10 + " %", 0),
                myInnerHtml("S2_TIME", Math.floor(10 * S_Time) / 10 + " seconds", 0)),
            CardNumSearch(413) && (S_LV1 = 1 * c.S3_LV.value,
                Strip = 5 + 5 * S_LV1 + (n_A_DEX - E_DEX1) / 5,
                S_Time = 60 + 15 * S_LV1 + (n_A_DEX - E_DEX1) / 2,
                Strip < 5 + 5 * S_LV1 && (Strip = 5 + 5 * S_LV1),
                S_Time < 60 && (S_Time = 60),
                myInnerHtml("S3_CHANCE", Math.floor(10 * Strip) / 10 + " %", 0),
                myInnerHtml("S3_TIME", Math.floor(10 * S_Time) / 10 + " seconds", 0)),
            EquipNumSearch(633) && (FS_LV1 = 1 * c.FS2_LV.value,
                FStrip = 5 + 2 * FS_LV1 + (n_A_DEX - E_DEX1) / 5,
                FS_Time = 60 + 15 * FS_LV1 + (n_A_DEX - E_DEX1) / 2,
                FStrip < 5 + 2 * FS_LV1 && (FStrip = 5 + 2 * FS_LV1),
                FS_Time < 60 && (FS_Time = 60),
                myInnerHtml("FS2_CHANCE", Math.floor(10 * FStrip) / 10 + " %", 0),
                myInnerHtml("FS2_TIME", Math.floor(10 * FS_Time) / 10 + " seconds", 0))),
            myInnerHtml("A_KakutyouData", "", 0);
    else if (30 == wKK)
        Flv1 = 1 * c.Flv.value,
            FStat1 = 1 * c.FStat.value,
            CKit1 = 1 * c.CKit.value,
            CExp1 = 1 * c.CExp.value,
            adopted = 1 * c.A_adopted.checked,
            ItemN = 1,
            CExp1 > 2e3 && (CExp1 = 2e3),
            adopted ? adp = .7 : adp = 1,
            1 == Flv1 && 4 == FStat1 && (ItemN = 2),
            (1 == Flv1 && 4 != FStat1 || 2 == Flv1 && 4 == FStat1 || 3 == Flv1 && 4 == FStat1) && (ItemN = 3),
            (2 == Flv1 && 4 != FStat1 || 3 == Flv1 && (2 == FStat1 || 3 == FStat1 || 6 == FStat1) || 6 == Flv1 && 2 == FStat1) && (ItemN = 4),
            (3 == Flv1 && (1 == FStat1 || 5 == FStat1) || 4 == Flv1 && (1 != FStat1 || 5 != FStat1) || 5 == Flv1 && 5 != FStat1 || 6 == Flv1 && (2 != FStat1 || 5 != FStat1) || 7 == Flv1 && 4 == FStat1) && (ItemN = 5),
            (4 == Flv1 && (4 == FStat1 || 5 == FStat1) || 5 == Flv1 && 5 == FStat1 || 6 == Flv1 && 5 == FStat1 || 7 == Flv1 && 4 != FStat1 || 8 == Flv1 && 5 != FStat1) && (ItemN = 6),
            (8 == Flv1 && 5 == FStat1 || 9 == Flv1) && (ItemN = 7),
            10 == Flv1 && (ItemN = 8),
            Food_Powa = 1200 * (CKit1 + 1) + 20 * (n_A_BaseLV + 1) + 20 * n_A_DEX - 400 * Flv1 - 10 * (100 - (n_A_LUK + 1)) - 500 * (ItemN - 1),
            Food_MIN = Math.round(Food_Powa + 100 * (0 + (6 + CExp1 / 80)) * adp) / 100,
            Food_AVG = Math.round(Food_Powa + 100 * (12 + (6 + CExp1 / 80)) * adp) / 100,
            Food_MAX = Math.round(Food_Powa + 100 * (24 + (6 + CExp1 / 80)) * adp) / 100,
            FDA1 = Math.round(100 * (Food_MIN - 5)) / 100,
            FDA2 = Math.round(100 * (Food_MIN - 1)) / 100,
            FDB1 = Math.round(100 * (Food_AVG - 5)) / 100,
            FDB2 = Math.round(100 * (Food_AVG - 1)) / 100,
            FDC1 = Math.round(100 * (Food_MAX - 5)) / 100,
            FDC2 = Math.round(100 * (Food_MAX - 1)) / 100,
            Food_MIN <= 0 && (Food_MIN = 0,
                FDA1 = 0,
                FDA2 = 0),
            FDA1 <= 0 && (FDA1 = 0),
            FDA2 <= 0 && (FDA1 = 0,
                FDA2 = 0),
            Food_AVG <= 0 && (Food_AVG = 0,
                FDB1 = 0,
                FDB2 = 0),
            FDB1 <= 0 && (FDB1 = 0),
            FDB2 <= 0 && (FDB1 = 0,
                FDB2 = 0),
            Food_MAX <= 0 && (Food_MAX = 0,
                FDC1 = 0,
                FDC2 = 0),
            FDC1 <= 0 && (FDC1 = 0),
            FDC2 <= 0 && (FDC1 = 0,
                FDC2 = 0),
            Food_MIN > 100 && (Food_MIN = 100),
            FDA1 > 100 && (FDA1 = 100),
            FDA2 > 100 && (FDA2 = 100),
            Food_AVG > 100 && (Food_AVG = 100),
            FDB1 > 100 && (FDB1 = 100),
            FDB2 > 100 && (FDB2 = 100),
            Food_MAX > 100 && (Food_MAX = 100),
            FDC1 > 100 && (FDC1 = 100),
            FDC2 > 100 && (FDC2 = 100),
            4 == CKit1 ? (myInnerHtml("COOK_MIN", "100%", 0),
                myInnerHtml("COOK_AVE", "", 0),
                myInnerHtml("COOK_MAX", "", 0)) : (myInnerHtml("COOK_MIN", "Minimum: " + Food_MIN + "% [" + FDA1 + "% ~ " + FDA2 + "%]", 0),
                    myInnerHtml("COOK_AVE", "Average: " + Food_AVG + "% [" + FDB1 + "% ~ " + FDB2 + "%]", 0),
                    myInnerHtml("COOK_MAX", "Maximum: " + Food_MAX + "% [" + FDC1 + "% ~ " + FDC2 + "%]", 0)),
            myInnerHtml("A_KakutyouData", "", 0);
    else if (32 == wKK) {
        var E = 1 * c.Pet.value
            , d = 1 * c.PetHP.value
            , B = Math.round((m_Pets[0][E] + 30 * (n_A_BaseLV - m_Monster[E][5]) + 20 * n_A_LUK) * (100 - (d - 100)) / 100) / 100;
        0 > B && (B = 0);
        var t = "<HR><table><tr><td>Chance to pet: </td><td>" + B + " %</td></tr></table>";
        myInnerHtml("A_KakutyouData", t, 0)
    } else if (34 == wKK) {
        var t;
        refinetype = [[[1, 1, 1, 1, 1, 1, 1, .6, .24, .048], [1, 1, 1, 1, 1, 1, .6, .24, .048, .0096], [1, 1, 1, 1, 1, .6, .3, .06, .012, .0024], [1, 1, 1, 1, .6, .24, .096, .0192, .00384, 384e-6], [1, 1, 1, 1, .6, .24, .096, .0192, .00384, 384e-6]], [[1, 1, 1, 1, 1, 1, 1, .9, .54, .108], [1, 1, 1, 1, 1, 1, .9, .54, .162, .0324], [1, 1, 1, 1, 1, .9, .675, .2025, .06075, .0121], [1, 1, 1, 1, .9, .54, .324, .0972, .02916, .002916], [1, 1, 1, 1, .9, .54, .324, .0972, .02916, .002916]], [[.9, .81, .729, .6561, .52488, .419904, .2519424, .15116544, .060466176, .0120932352], [.9, .81, .729, .5832, .46656, .279936, .1679616, .06718464, .013436928, .0026873856], [.9, .81, .648, .5184, .31104, .186624, .093312, .0186624, .00373248, 746496e-9], [.9, .72, .576, .3456, .20736, .082944, .0331776, .00663552, .001327104, .0001327104], [.8, .64, .512, .3072, .18432, .073728, .0294912, .00589824, .001179648, .0001179648]], [[1, 1, 1, 1, 1, 1, 1, .6, .24, .048], [1, 1, 1, 1, 1, 1, .6, .24, .048, .0096], [1, 1, 1, 1, 1, .6, .3, .06, .012, .0024], [1, 1, 1, 1, .6, .24, .096, .0192, .00384, 384e-6], [1, 1, 1, 1, .6, .24, .096, .0192, .00384, 384e-6]]];
        var v = 1 * c.EquipValue.value
            , p = 1 * c.EquipType.value
            , m = 1 * c.OreType.value
            , h = 1 * c.OreValue.value
            , N = 1 * c.npcCost.value
            , k = 1 * c.DesiredRefine.value
            , D = refinetype[m][p][k - 1]
            , b = Math.round((v + (h + N) * k) / D) - v;
        t = "<HR><table><tr><td>Chance to refine up to +" + k + " = " + Math.round(1e6 * D) / 1e4 + " %</td></tr>",
            t += "<tr><td>Mean investment = " + b + " zeny</td></tr></table>",
            myInnerHtml("A_KakutyouData", t, 0)
    } else if (36 == wKK) {
        var v = 1 * c.EquipValue.value
            , I = 1 * c.ItemValue.value
            , N = 1 * c.npcCost.value
            , M = 1 * c.SocketChance.value
            , F = Math.round((v + I + N) / (M / 100))
            , t = "<HR><table><tr><td>Mean investment = " + F + " zeny</td></tr></table>";
        myInnerHtml("A_KakutyouData", t, 0)
    } else if (38 == wKK) {
        hiddentype = [[.2, .4, .0667, .2667, .0444, .1333, .0222], [.28, .36, .06, .24, .04, .12, .02], [.3333, .3333, .0555, .2222, .037, .1111, .0185]];
        var v = 1 * c.EquipValue.value
            , p = 1 * c.EquipType.value
            , N = 1 * c.npcCost.value
            , t = '<HR><table style="text-align:right;"><tr><td></td><td class=title>Chance to get</td><td class=title>Mean zeny cost</td></tr>';
        t += "<tr><td>Any +1 stat enchant</td><td>" + 1e6 * hiddentype[p][1] / 1e4 + " %</td><td>" + Math.round((v + N) / hiddentype[p][1]) + "</td></tr>",
            t += "<tr><td>Specific +1 stat enchant</td><td>" + 1e6 * hiddentype[p][2] / 1e4 + " %</td><td>" + Math.round((v + N) / hiddentype[p][2]) + "</td></tr>",
            t += "<tr><td>Any +2 stat enchant</td><td>" + 1e6 * hiddentype[p][3] / 1e4 + " %</td><td>" + Math.round((v + N) / hiddentype[p][3]) + "</td></tr>",
            t += "<tr><td>Specific +2 stat enchant</td><td>" + 1e6 * hiddentype[p][4] / 1e4 + " %</td><td>" + Math.round((v + N) / hiddentype[p][4]) + "</td></tr>",
            t += "<tr><td>Any +3 stat enchant</td><td>" + 1e6 * hiddentype[p][5] / 1e4 + " %</td><td>" + Math.round((v + N) / hiddentype[p][5]) + "</td></tr>",
            t += "<tr><td>Specific +3 stat enchant</td><td>" + 1e6 * hiddentype[p][6] / 1e4 + " %</td><td>" + Math.round((v + N) / hiddentype[p][6]) + "</td></tr>",
            t += "<tr><td>Break</td><td>" + 1e6 * hiddentype[p][0] / 1e4 + " %</td><td></td></tr>",
            t += "</table>",
            myInnerHtml("A_KakutyouData", t, 0)
    } else if (40 == wKK) {
        var t;
        19 == n_A_JOB || 33 == n_A_JOB ? (Amistr = n_A_STR + n_A_AGI + n_A_VIT,
            Filir = n_A_STR + n_A_AGI + n_A_LUK,
            Vanilmirth = n_A_INT + n_A_DEX + n_A_LUK,
            Lif = n_A_VIT + n_A_INT + n_A_DEX,
            homontotal = Amistr + Filir + Vanilmirth + Lif,
            Amistr = Amistr / homontotal * 100,
            Filir = Filir / homontotal * 100,
            Vanilmirth = Vanilmirth / homontotal * 100,
            Lif = Lif / homontotal * 100,
            t = "<table><tr><td>Chance to get Amistr: </td><td>" + Math.floor(10 * Amistr) / 10 + " %</td></tr>",
            t += "<tr><td>Chance to get Filir: </td><td>" + Math.floor(10 * Filir) / 10 + " %</td></tr>",
            t += "<tr><td>Chance to get Vanilmirth: </td><td>" + Math.floor(10 * Vanilmirth) / 10 + " %</td></tr>",
            t += "<tr><td>Chance to get Lif: </td><td>" + Math.floor(10 * Lif) / 10 + " %</td></tr></table>") : t = '<p class="center">Not available for this class.</p>',
            myInnerHtml("A_KakutyouData", t, 0)
    }
}
function Kanma(_) {
    var a = ""
        , n = new Array;
    0 > _ && (_ = -1 * _,
        a += "-");
    for (var e = 0; 0 != Math.floor(_ / 1e3); e++) {
        var t = _ % 1e3;
        0 == t ? n[e] = ",000" : 10 > t ? n[e] = ",00" + t : 100 > t ? n[e] = ",0" + t : n[e] = "," + t,
            _ = Math.floor(_ / 1e3)
    }
    for (n[e] = _; e >= 0;)
        a += n[e],
            e--;
    return a
}
function KakutyouKansuu2() {
    if (wKK = 1 * c.A_Kakutyou.value,
        6 == wKK) {
        if (1 == n_A_JobClass() || 20 == n_A_JOB) {
            for (HPRname = 'Increase HP Recovery Lv: <select name="A_KakutyouSelNum" onChange="StAllCalc()"></select>',
                20 == n_A_JOB ? HPRname += '<br>Increase SP Recovery Lv: <select name="A_KakutyouSelNumSP" onChange="StAllCalc()"></select>' : EquipNumSearch(1240) && (HPRname += '<br>Increase SP Recovery Lv: <select name="A_KakutyouSelNumSP" onChange="StAllCalc()"><option value="3">3</option></select>'),
                myInnerHtml("A_KakutyouSel", HPRname, 0),
                i = 0; 10 >= i; i++)
                c.A_KakutyouSelNum.options[i] = new Option(i, i);
            if (c.A_KakutyouSelNum.value = 10,
                20 == n_A_JOB) {
                for (i = 0; 10 >= i; i++)
                    c.A_KakutyouSelNumSP.options[i] = new Option(i, i);
                c.A_KakutyouSelNumSP.value = 10
            }
            return
        }
        if (5 == n_A_JobClass() || 9 == n_A_JOB || 23 == n_A_JOB || 44 == n_A_JOB) {
            for (SPRname = "Increase SP Recovery Lv: ",
                44 == n_A_JOB && (SPRname = "Ninja Mastery Lv: "),
                SPRname += '<select name="A_KakutyouSelNum" onChange="StAllCalc()"></select>',
                EquipNumSearch(1240) && (SPRname += '<br>Increase HP Recovery Lv: <select name="A_KakutyouSelNumHP" onChange="StAllCalc()"><option value="3">3</option></select>'),
                myInnerHtml("A_KakutyouSel", SPRname, 0),
                i = 0; 10 >= i; i++)
                c.A_KakutyouSelNum.options[i] = new Option(i, i);
            return void (c.A_KakutyouSelNum.value = 10)
        }
        return EquipNumSearch(1240) ? (_ = 'Increase HP Recovery Lv: <select name="A_KakutyouSelNumHP" onChange="StAllCalc()"><option value="3">3</option></select><br>',
            _ += 'Increase SP Recovery Lv: <select name="A_KakutyouSelNumSP" onChange="StAllCalc()"><option value="3">3</option></select><br>',
            void myInnerHtml("A_KakutyouSel", _, 0)) : void myInnerHtml("A_KakutyouSel", '<p class="center">Not available for this class.</p>', 0)
    }
    if (8 == wKK) {
        if (15 == n_A_JOB || 29 == n_A_JOB) {
            for (myInnerHtml("A_KakutyouSel", 'Spiritual Cadence Lv: <select name="A_KakutyouSelNum" onChange="StAllCalc()"></select>', 0),
                i = 0; 5 >= i; i++)
                c.A_KakutyouSelNum.options[i] = new Option(i, i);
            return void (c.A_KakutyouSelNum.value = 5)
        }
        return void myInnerHtml("A_KakutyouSel", '<p class="center">Not available for this class.</p>', 0)
    }
    if (10 != wKK) {
        if (14 == wKK) {
            for (_ = "<table>",
                _ += '<tr><td>Target: <select name="R_OBJ" onChange = "StAllCalc()"></select><select name="S_OBJ" onChange = "StAllCalc()"></select><select name="E_OBJ" onChange = "calc()"></select><select name="B_OBJ" onChange = "calc()"></select><select name="SP_OBJ" onChange = "calc()"></select></td></tr>',
                _ += "</table>",
                myInnerHtml("A_KakutyouData", _, 0),
                i = 0; i < v_Race_.length; i++)
                c.R_OBJ.options[i] = new Option(v_Race_[i], i);
            for (c.R_OBJ.value = 0,
                i = 0; i < v_Size.length; i++)
                c.S_OBJ.options[i] = new Option(v_Size[i], i);
            for (c.S_OBJ.value = 0,
                i = 0; i < v_Element_.length; i++)
                c.E_OBJ.options[i] = new Option(v_Element_[i], i);
            for (c.E_OBJ.value = 0,
                i = 0; i < v_Type.length; i++)
                c.B_OBJ.options[i] = new Option(v_Type[i], i);
            for (c.B_OBJ.value = 0,
                i = 0; i < v_Race2.length; i++)
                c.SP_OBJ.options[i] = new Option(v_Race2[i], i);
            return void (c.SP_OBJ.value = 0)
        }
        if (20 == wKK) {
            var _;
            return _ = 'Current Base Exp <input type="tel" name="A_KakutyouSelNum" value="0" size=4 onkeyup="StAllCalc()" style="text-align: right;">%<BR>',
                _ += 'Current Job Exp <input type="tel" name="A_KakutyouSelNum2" value="0" size=4 onkeyup="StAllCalc()" style="text-align: right;">%<BR>',
                void myInnerHtml("A_KakutyouSel", _, 0)
        }
        if (22 == wKK) {
            if (19 == n_A_JOB || 33 == n_A_JOB) {
                for (_ = "<table>",
                    _ += '<tr><td>Soul Linker Lv:</td><td><select name="SL_LV" onChange="StAllCalc()"></select>',
                    _ += '<td>Target\'s VIT:</td><td><select name="E_VIT" onChange="StAllCalc()"></select></td>',
                    _ += '<td>Target\'s INT:</td><td><select name="E_INT" onChange="StAllCalc()"></select></td></tr>',
                    _ += '<tr><td>Potion Pitcher:</td><td><select name="PP" onChange="StAllCalc()"></select></td>',
                    _ += '<td>Learning Potion:</td><td><select name="POT_RLevel" onChange="StAllCalc()"></select></td>',
                    _ += '<td>Ranked:</td><td><select name="RNK_BNS" onChange="StAllCalc()"></select></td>',
                    _ += "</tr>",
                    33 == n_A_JOB && (_ += '<td>Slim Potion Pitcher:</td><td><select name="SPP" onChange="StAllCalc()"></select></td>'),
                    _ += '<td>Increase Spiritual Power: <td><select name="ISP" onChange="StAllCalc()"></select></td>',
                    _ += '<td>Increase Recuperative Power: <td><select name="IRP" onChange="StAllCalc()"></select></td>',
                    _ += "</tr></table>",
                    myInnerHtml("A_KakutyouSel", _ + "<br>", 0),
                    i = 0; i < Potion_Max_2; i++)
                    c.PP.options[i] = new Option(m_Potion2[i][3], i);
                if (c.PP.value = 0,
                    33 == n_A_JOB) {
                    for (i = 0; i < Potion_Max_3; i++)
                        c.SPP.options[i] = new Option(m_Potion3[i][3], i);
                    c.SPP.value = 0
                }
                for (i = 0; 10 >= i; i++)
                    c.POT_RLevel.options[i] = new Option(i, i);
                for (c.POT_RLevel.value = 0,
                    i = 0; 1 >= i; i++)
                    c.RNK_BNS.options[i] = new Option(Pot_Rank[i][1], i);
                for (c.RNK_BNS.value = 0,
                    i = 0; 200 >= i; i++)
                    c.E_VIT.options[i] = new Option(i, i);
                for (c.E_VIT.value = 0,
                    i = 0; 200 >= i; i++)
                    c.E_INT.options[i] = new Option(i, i);
                for (c.E_INT.value = 0,
                    i = 0; 99 >= i; i++)
                    c.SL_LV.options[i] = new Option(i, i);
                for (c.SL_LV.value = 0,
                    i = 0; 10 >= i; i++)
                    c.ISP.options[i] = new Option(i, i);
                for (c.ISP.value = 0,
                    i = 0; 10 >= i; i++)
                    c.IRP.options[i] = new Option(i, i);
                return void (c.IRP.value = 0)
            }
            return void myInnerHtml("A_KakutyouSel", '<p class="center">Not available for this class.</p>', 0)
        }
        if (24 == wKK) {
            if (12 == n_A_JOB || 26 == n_A_JOB) {
                for (_ = "<table>",
                    _ += '<tr><td>Oridecon Research: </td><td class="data"><select name="A_OriR" onChange="StAllCalc()"></select></td><td>Anvil:</td><td><select name="A_KakutyouSelNum" onChange="StAllCalc()"></select></td></tr>',
                    _ += '<tr><td>Weapon Research: </td><td class="data"><select name="A_WepR" onChange="StAllCalc()"></select></td><td>Star Crumb:</td><td><select name="A_StarC" onChange="StAllCalc()"></select></td></tr>',
                    _ += '<tr><td>Iron Tempering: </td><td class="data"><select name="A_Iron" onChange="StAllCalc()"></select></td><td>Elemental Stone:</td><td><select name="A_ElemS" onChange="StAllCalc()"></select></td></tr>',
                    _ += '<tr><td>Steel Tempering: </td><td class="data"><select name="A_Steel" onChange="StAllCalc()"></select></td><td>Enchanted Stone Craft:</td><td><select name="A_StoneC" onChange="StAllCalc()"></select></td></tr>',
                    _ += '<tr><td>Smith (weapon) Lvl: </td><td class="data"><select name="A_SmithT" onChange="StAllCalc()"></select></td><td></td></tr>',
                    _ += "</table>",
                    myInnerHtml("A_KakutyouSel", _, 0),
                    i = 0; i < Anvil_Max; i++)
                    c.A_KakutyouSelNum.options[i] = new Option(m_Anvil[i][2], i);
                for (c.A_KakutyouSelNum.value = 0,
                    i = 0; 5 >= i; i++)
                    c.A_OriR.options[i] = new Option(i, i);
                for (c.A_OriR.value = 0,
                    i = 0; 10 >= i; i++)
                    c.A_WepR.options[i] = new Option(i, i);
                for (c.A_WepR.value = 0,
                    i = 0; 3 >= i; i++)
                    c.A_StarC.options[i] = new Option(i, i);
                for (c.A_StarC.value = 0,
                    i = 0; 1 >= i; i++)
                    c.A_ElemS.options[i] = new Option(i, i);
                for (c.A_ElemS.value = 0,
                    i = 0; 3 >= i; i++)
                    c.A_SmithT.options[i] = new Option(i, i);
                for (c.A_SmithT.value = 0,
                    i = 0; 5 >= i; i++)
                    c.A_Iron.options[i] = new Option(i, i);
                for (c.A_Iron.value = 0,
                    i = 0; 5 >= i; i++)
                    c.A_Steel.options[i] = new Option(i, i);
                for (c.A_Steel.value = 0,
                    i = 0; 5 >= i; i++)
                    c.A_StoneC.options[i] = new Option(i, i);
                return void (c.A_StoneC.value = 0)
            }
            if (19 == n_A_JOB || 33 == n_A_JOB) {
                for (potiontext = '<table><tr><td>Potion to Create:</td><td><select name="A_KakutyouSelNum" onChange="StAllCalc()"></select></td>',
                    potiontext += '<td>Change Instruction Level:</td><td><select name="A_Van" onChange="StAllCalc()"></select><td></tr>',
                    potiontext += '<tr><td>Learning Potion:</td><td><select name="A_PotionRLevel" onChange="StAllCalc()"></select></td>',
                    potiontext += '<td>Pharmacy:</td><td><select name="A_PreparePLevel" onChange="StAllCalc()"></select></td></tr></table>',
                    myInnerHtml("A_KakutyouSel", potiontext + "", 0),
                    i = 0; i < Potion_Max; i++)
                    c.A_KakutyouSelNum.options[i] = new Option(m_Potion[i][2], i);
                for (c.A_KakutyouSelNum.value = 0,
                    i = 0; 10 >= i; i++)
                    c.A_PotionRLevel.options[i] = new Option(i, i);
                for (c.A_PotionRLevel.value = 0,
                    i = 0; 5 >= i; i++)
                    c.A_Van.options[i] = new Option(i, i);
                for (c.A_Van.value = 0,
                    i = 0; 10 >= i; i++)
                    c.A_PreparePLevel.options[i] = new Option(i, i);
                return void (c.A_PreparePLevel.value = 0)
            }
            return void myInnerHtml("A_KakutyouSel", '<p class="center">Not available for this class.</p>', 0)
        }
        if (26 != wKK) {
            if (28 != wKK) {
                if (30 == wKK) {
                    for (_ = '<table><tr><td>Level of the Food:</td><td><select name="Flv" onChange="StAllCalc()"></select></td><td class="title">Success Rate</td></tr>',
                        _ += '<tr><td>Stat of the Food:</td><td><select name="FStat" onChange="StAllCalc()"></select></td><td class="center"><span id="COOK_MIN"></span></td></tr>',
                        _ += '<tr><td>Cooking Kit Used:</td><td><select name="CKit" onChange="StAllCalc()" style="width:130px;"></select></td><td class="center"><span id="COOK_AVE"></span></td></tr>',
                        _ += '<tr><td>Cooking Experience:</td><td><input type="text" onkeyup="StAllCalc()" name="CExp" value="0" size=2></td><td class="center"><span id="COOK_MAX"></span></td></tr></table>',
                        myInnerHtml("A_KakutyouSel", _, 0),
                        i = 1; 10 >= i; i++)
                        c.Flv.options[i - 1] = new Option(i, i);
                    for (c.Flv.value = 10,
                        i = 0; 5 >= i; i++)
                        c.FStat.options[i] = new Option(m_Stat_Food[i][1], i);
                    for (c.FStat.value = 0,
                        i = 0; i < Cook_Kit_Max; i++)
                        c.CKit.options[i] = new Option(m_Cook_Kit[i][1], i);
                    return void (c.CKit.value = 0)
                }
                if (32 == wKK) {
                    for (_ = '<table><tr><td>Monster to pet:</td><td><select name="Pet" onChange="StAllCalc()"></select></td></tr>',
                        _ += '<tr><td>Monster remaining HP:</td><td><select name="PetHP" onChange="StAllCalc()"></select></td></tr>',
                        myInnerHtml("A_KakutyouSel", _, 0),
                        i = 0; 55 >= i; i++)
                        c.Pet.options[i] = new Option(m_Monster[m_Pets[1][i]][1], i);
                    for (c.Pet.value = 0,
                        i = 0; 100 >= i; i++)
                        c.PetHP.options[i] = new Option(i + " %", i);
                    return void (c.PetHP.value = 100)
                }
                if (34 == wKK) {
                    for (_ = '<table style="text-align:right;"><tr><td>Equipment zeny value:</td><td><input type="text" name="EquipValue" onkeyup="StAllCalc()" value="0" size="9" class="center"></td></tr>',
                        _ += '<tr><td>Equipment type:</td><td><select name="EquipType" onChange="StAllCalc()"><option value="0">Weapon Lv1</option><option value="1">Weapon Lv2</option><option value="2">Weapon Lv3</option><option value="3">Weapon Lv4</option><option value="4">Armor</option></select></td></tr>',
                        _ += '<tr><td>Ore type:</td><td><select name="OreType" onChange="StAllCalc()"><option value="0">Normal Ores</option><option value="1">Enriched Ores</option><option value="2">Normal Ores (F2P server)</option><option value="3">Enriched Ores (F2P server)</option></select></td></tr>',
                        _ += '<tr><td>Ore zeny value:</td><td><input type="text" name="OreValue" onkeyup="StAllCalc()" value="0" size="4" class="center"></td></tr>',
                        _ += '<tr><td>Refining zeny cost:</td><td><input type="text" name="npcCost" onkeyup="StAllCalc()" value="0" size="4" class="center"></td></tr>',
                        _ += '<tr><td>Desired refine:</td><td><select name="DesiredRefine" onChange="StAllCalc()"></select></td></tr></table>',
                        myInnerHtml("A_KakutyouSel", _, 0),
                        i = 1; 10 >= i; i++)
                        c.DesiredRefine.options[i - 1] = new Option("+" + i, i);
                    return void (c.DesiredRefine.value = 1)
                }
                if (36 == wKK) {
                    for (_ = '<table style="text-align:right;"><tr><td>Equipment zeny value:</td><td><input type="text" name="EquipValue" onkeyup="StAllCalc()" value="0" size="9" class="center"></td></tr>',
                        _ += '<tr><td>Used item zeny value:</td><td><input type="text" name="ItemValue" onkeyup="StAllCalc()" value="0" size="6" class="center"></td></tr>',
                        _ += '<tr><td>Enchanting zeny cost:</td><td><input type="text" name="npcCost" onkeyup="StAllCalc()" value="0" size="6" class="center"></td></tr>',
                        _ += '<tr><td>Enchanting success chance:</td><td><select name="SocketChance" onChange="StAllCalc()"></select></td></tr></table>',
                        myInnerHtml("A_KakutyouSel", _, 0),
                        i = 1; 100 >= i; i++)
                        c.SocketChance.options[i - 1] = new Option(i + " %", i);
                    return void (c.SocketChance.value = 1)
                }
                return 38 == wKK ? (_ = '<table style="text-align:right;"><tr><td>Equipment zeny value:</td><td><input type="text" name="EquipValue" onkeyup="StAllCalc()" value="0" size="9" class="center"></td></tr>',
                    _ += '<tr><td>Equipment type:</td><td><select name="EquipType" onChange="StAllCalc()"><option value="0">Non slotted</option><option value="1">Slotted</option><option value="2">Special</option></select></td></tr>',
                    _ += '<tr><td>Enchanting zeny cost:</td><td><input type="text" name="npcCost" onkeyup="StAllCalc()" value="0" size="6" class="center"></td></tr></table>',
                    void myInnerHtml("A_KakutyouSel", _, 0)) : void myInnerHtml("A_KakutyouSel", "", 0)
            }
            if (_ = "",
                CardNumSearch(157) || CardNumSearch(413) || EquipNumSearch(633) || 14 == n_A_JOB || 28 == n_A_JOB ? (_ += '<table><tr><td>Enemy DEX: <select name="E_DEX" onChange="StAllCalc()"></select></td><td class="title">Skill Lv</td><td class="title">Chance</td><td class="title">Duration Time</td></tr>',
                    14 != n_A_JOB && 28 != n_A_JOB || (_ += '<tr class="center"><td>Strip [Helm], [Armor], [Weapon] or [Shield]</td><td><select name="S_LV" onChange="StAllCalc()"></select></td><td><span id="S_CHANCE"></span></td><td><span id="S_TIME"></span></td></tr>'),
                    28 == n_A_JOB && (_ += '<tr class="center"><td>Full Strip</td><td><select name="FS_LV" onChange="StAllCalc()"></select></td><td><span id="FS_CHANCE"></span></td><td><span id="FS_TIME"></span></td></tr>'),
                    CardNumSearch(157) && (_ += '<tr class="center"><td>Strip [Weapon] (Auto-Casted)</td><td><select name="S2_LV" onChange="StAllCalc()"><option value="1">1</option></select></td><td><span id="S2_CHANCE"></span></td><td><span id="S2_TIME"></span></td></tr>'),
                    CardNumSearch(413) && (_ += '<tr class="center"><td>Strip [Armor] (Auto-Casted)</td><td><select name="S3_LV" onChange="StAllCalc()"></select></td><td><span id="S3_CHANCE"></span></td><td><span id="S3_TIME"></span></td></tr>'),
                    EquipNumSearch(633) && (_ += '<tr class="center"><td>Full Strip (Auto-Casted)</td><td><select name="FS2_LV" onChange="StAllCalc()"><option value="1">1</option></select></td><td><span id="FS2_CHANCE"></span></td><td><span id="FS2_TIME"></span></td></tr>'),
                    _ += "</table>",
                    myInnerHtml("A_KakutyouSel", _, 0)) : myInnerHtml("A_KakutyouSel", '<p class="center">Not available for this class.</p>', 0),
                CardNumSearch(157) || CardNumSearch(413) || EquipNumSearch(633) || 14 == n_A_JOB || 28 == n_A_JOB) {
                for (i = 0; 200 >= i; i++)
                    c.E_DEX.options[i] = new Option(i, i);
                if (c.E_DEX.value = 0,
                    14 == n_A_JOB || 28 == n_A_JOB) {
                    for (i = 1; 5 >= i; i++)
                        c.S_LV.options[i - 1] = new Option(i, i);
                    c.S_LV.value = 1
                }
                if (28 == n_A_JOB) {
                    for (i = 1; 5 >= i; i++)
                        c.FS_LV.options[i - 1] = new Option(i, i);
                    c.FS_LV.value = 1
                }
                CardNumSearch(413) && (CardNumSearch(113) && CardNumSearch(295) && CardNumSearch(391) && CardNumSearch(260) && (14 == n_A_JOB || 28 == n_A_JOB) ? c.S3_LV.options[0] = new Option("5", 5) : c.S3_LV.options[0] = new Option("1", 1))
            }
        } else if (_ = '<table><tr><td>Enemy DEX: <select name="E_DEX" onChange="StAllCalc()"></select></td><td></td><td></td></tr>',
            _ += '<tr><td>Monster Item Drop Chance: <input type="text" name="DropChance" onkeyup="StAllCalc()" value="0" size="4" class="center">%</td><td class="title">Skill Lv</td><td class="title">Chance</td></tr>',
            2 == n_A_JobClass() || EquipNumSearch(1630) || CardNumSearch(152) ? (_ += '<tr class="center"><td style="text-align:right;">Steal</td><td><select name="Steal_LV" onChange="StAllCalc()"></select></td><td><span id="Steal_CHANCE"></span></td></tr>',
                14 != n_A_JOB && 28 != n_A_JOB || (_ += '<tr class="center"><td style="text-align:right;">Smug</td><td><select name="Smug_LV" onChange="StAllCalc()"></select></td><td><span id="Smug_CHANCE"></span></td></tr>'),
                _ += "</table>") : _ = '<p class="center">Not available for this class.</p>',
            myInnerHtml("A_KakutyouSel", _, 0),
            2 == n_A_JobClass() || EquipNumSearch(1630) || CardNumSearch(152)) {
            for (i = 0; 200 >= i; i++)
                c.E_DEX.options[i] = new Option(i, i);
            if (c.E_DEX.value = 0,
                2 == n_A_JobClass()) {
                for (i = 1; 10 >= i; i++)
                    c.Steal_LV.options[i - 1] = new Option(i, i);
                c.Steal_LV.value = 1
            } else if (EquipNumSearch(1630) || CardNumSearch(152)) {
                for (i = 1; 1 >= i; i++)
                    c.Steal_LV.options[i - 1] = new Option(i, i);
                c.Steal_LV.value = 1
            }
            if (14 == n_A_JOB || 28 == n_A_JOB) {
                for (i = 1; 5 >= i; i++)
                    c.Smug_LV.options[i - 1] = new Option(i, i);
                c.Smug_LV.value = 1
            }
        }
    } else if (6 == n_A_JobClass() || 20 == n_A_JOB) {
        for (myInnerHtml("A_KakutyouSel", 'Enlarge Weight Limit Lv: <select name="A_KakutyouSelNum" onChange="StAllCalc()"></select><BR>Enlarge Weight Limit R Lv: <select name="A_KakutyouSelNum2" onChange="StAllCalc()"></select><BR>', 0),
            i = 0; 10 >= i; i++)
            c.A_KakutyouSelNum2.options[i] = new Option(i, i);
        for (i = 0; 10 >= i; i++)
            c.A_KakutyouSelNum.options[i] = new Option(i, i);
        20 == n_A_JOB ? c.A_KakutyouSelNum.value = 0 : c.A_KakutyouSelNum.value = 10
    } else if (42 == n_A_JOB) {
        for (myInnerHtml("A_KakutyouSel", 'Enlarge Weight Limit R Lv: <select name="A_KakutyouSelNum2" onChange="StAllCalc()"></select><BR>Knowledge of the Sun, Moon and Stars Lv: <select name="SG_Weight" onChange="StAllCalc()"></select><BR>', 0),
            i = 0; 10 >= i; i++)
            c.A_KakutyouSelNum2.options[i] = new Option(i, i);
        for (i = 0; 10 >= i; i++)
            c.SG_Weight.options[i] = new Option(i, i)
    } else
        for (myInnerHtml("A_KakutyouSel", 'Enlarge Weight Limit R Lv: <select name="A_KakutyouSelNum2" onChange="StAllCalc()"></select><BR>', 0),
            i = 0; 10 >= i; i++)
            c.A_KakutyouSelNum2.options[i] = new Option(i, i)
}
function SetEquipShort() {
    w = 1 * c.A_equipshort.value,
        w > 0 && ("Remove All Cards" != m_CardShort[w][0] ? (0 != m_CardShort[w][2] && (c.A_weapon1_card1.value = m_CardShort[w][2]),
            0 != m_CardShort[w][3] && (c.A_head1_card.value = m_CardShort[w][3]),
            0 != m_CardShort[w][4] && (c.A_left_card.value = m_CardShort[w][4]),
            0 != m_CardShort[w][5] && (c.A_body_card.value = m_CardShort[w][5]),
            0 != m_CardShort[w][6] && (c.A_shoulder_card.value = m_CardShort[w][6]),
            0 != m_CardShort[w][7] && (c.A_shoes_card.value = m_CardShort[w][7]),
            0 != m_CardShort[w][8] && (c.A_acces1_card.value = m_CardShort[w][8]),
            0 != m_CardShort[w][9] && (c.A_acces2_card.value = m_CardShort[w][9]),
            0 != m_CardShort[w][10] && (c.A_head2_card.value = m_CardShort[w][10])) : (c.A_weapon1_card1.value = 0,
                c.A_weapon1_card2.value = 0,
                c.A_weapon1_card3.value = 0,
                c.A_weapon1_card4.value = 0,
                c.A_head1_card.value = 0,
                c.A_head2_card.value = 0,
                c.A_left_card.value = 0,
                c.A_body_card.value = 0,
                c.A_shoulder_card.value = 0,
                c.A_shoes_card.value = 0,
                c.A_acces1_card.value = 0,
                c.A_acces2_card.value = 0),
            ActiveSkillSetPlus())
}
function Setm_CardShort() {
    w = 1 * c.A_cardshort.value,
        w > 0 && (m_CardShort[w][1] < 1e4 ? (c.A_weapon1_card1.value = m_CardShort[w][1],
            c.A_weapon1_card2.value = m_CardShort[w][2],
            c.A_weapon1_card3.value = m_CardShort[w][3],
            c.A_weapon1_card4.value = m_CardShort[w][4],
            16 != w && 17 != w || (w = m_Monster[1 * c.B_Enemy.value][3],
                10 <= w && w <= 14 && (c.A_weapon1_card1.value = 204),
                (20 <= w && w <= 24 || 80 <= w && w <= 94) && (c.A_weapon1_card1.value = 203),
                30 <= w && w <= 34 && (c.A_weapon1_card1.value = 201),
                40 <= w && w <= 44 && (c.A_weapon1_card1.value = 202))) : "Remove All Cards" != m_CardShort[w][0] ? (0 != m_CardShort[w][2] && (c.A_weapon1_card1.value = m_CardShort[w][2]),
                    0 != m_CardShort[w][3] && (c.A_head1_card.value = m_CardShort[w][3]),
                    0 != m_CardShort[w][4] && (c.A_left_card.value = m_CardShort[w][4]),
                    0 != m_CardShort[w][5] && (c.A_body_card.value = m_CardShort[w][5]),
                    0 != m_CardShort[w][6] && (c.A_shoulder_card.value = m_CardShort[w][6]),
                    0 != m_CardShort[w][7] && (c.A_shoes_card.value = m_CardShort[w][7]),
                    0 != m_CardShort[w][8] && (c.A_acces1_card.value = m_CardShort[w][8]),
                    0 != m_CardShort[w][9] && (c.A_acces2_card.value = m_CardShort[w][9])) : (c.A_weapon1_card1.value = 0,
                        c.A_weapon1_card2.value = 0,
                        c.A_weapon1_card3.value = 0,
                        c.A_weapon1_card4.value = 0,
                        "undefined" != typeof A_weapon2_card1 && (c.A_weapon2_card1.value = 0,
                            c.A_weapon2_card2.value = 0,
                            c.A_weapon2_card3.value = 0,
                            c.A_weapon2_card4.value = 0),
                        c.A_head1_card.value = 0,
                        c.A_head2_card.value = 0,
                        c.A_left_card.value = 0,
                        c.A_body_card.value = 0,
                        c.A_shoulder_card.value = 0,
                        c.A_shoes_card.value = 0,
                        c.A_acces1_card.value = 0,
                        c.A_acces2_card.value = 0),
            ActiveSkillSetPlus())
}
function Setm_CardShortLeft() {
    w = 1 * c.A_cardshortLeft.value,
        c.A_weapon2_card1.value = m_CardShort[w][1],
        c.A_weapon2_card2.value = m_CardShort[w][2],
        c.A_weapon2_card3.value = m_CardShort[w][3],
        c.A_weapon2_card4.value = m_CardShort[w][4],
        16 != w && 17 != w || (w = m_Monster[1 * c.B_Enemy.value][3],
            10 <= w && w <= 14 && (c.A_weapon2_card1.value = 204),
            (20 <= w && w <= 24 || 80 <= w && w <= 94) && (c.A_weapon2_card1.value = 203),
            30 <= w && w <= 34 && (c.A_weapon2_card1.value = 201),
            40 <= w && w <= 44 && (c.A_weapon2_card1.value = 202))
}
function EnemySort() {
    for (var _ = c.B_Enemy.length, a = 0; _ > a; a++)
        c.B_Enemy.options[0] = null;
    ESNum = [1, 3, 2, 21, 22, 16, 17, 13, 100];
    var n = 1 * c.ENEMY_SORT.value;
    if (0 != n) {
        for (wES = ESNum[1 * c.ENEMY_SORT.value],
            wESx[0][0] = "S",
            wESx[0][1] = "E",
            STERTw = 0,
            ENDw = 0,
            a = 1; a <= EnemyNum; a++)
            if (t = ENDw,
                m_Monster[a][wES] >= m_Monster[t][wES])
                wESx[t][1] = a,
                    wESx[a][0] = t,
                    wESx[a][1] = "E",
                    ENDw = a;
            else if (t = STERTw,
                m_Monster[a][wES] <= m_Monster[t][wES])
                wESx[t][0] = a,
                    wESx[a][0] = "S",
                    wESx[a][1] = t,
                    STERTw = a;
            else {
                for (t = STERTw,
                    jbk = STERTw; m_Monster[a][wES] > m_Monster[t][wES];)
                    jbk = t,
                        t = wESx[t][1];
                wESx[jbk][1] = a,
                    wESx[a][0] = jbk,
                    wESx[a][1] = t,
                    wESx[t][0] = a
            }
        var a, e = new Array;
        e[0] = a = STERTw;
        for (var t = 1; "E" != wESx[a][1]; t++)
            e[t] = wESx[a][1],
                a = wESx[a][1];
        if (e = checkMonsterPlace(e),
            ESwork2 = new Array,
            21 == wES || 22 == wES)
            for (a = 0; a <= EnemyNum; a++)
                ESwork2[a] = "[" + m_Monster[a][wES] + "] ";
        else if (2 == wES)
            for (a = 0; a <= EnemyNum; a++)
                ESwork2[a] = "[" + v_Race_[m_Monster[a][2]] + "] ";
        else if (3 == wES)
            for (a = 0; a <= EnemyNum; a++)
                ESwork2[a] = "[" + v_Element_[Math.floor(m_Monster[a][3] / 10)] + m_Monster[a][3] % 10 + "] ";
        else
            for (a = 0; a <= EnemyNum; a++)
                ESwork2[a] = "";
        var t = 0;
        for (a = 0; a <= EnemyNum; a++)
            -1 != e[a] && (c.B_Enemy.options[t] = new Option(ESwork2[e[a]] + m_Monster[e[a]][1], e[a]),
                t++)
    } else {
        for (var e = new Array, a = 0; a <= EnemyNum; a++)
            e[a] = v_MonsterSort[a];
        e = checkMonsterPlace(e);
        for (var t = 0, a = 0; a <= EnemyNum; a++)
            -1 != e[a] && (c.B_Enemy.options[t] = new Option(m_Monster[e[a]][1], e[a]),
                t++)
    }
}

/**
 * When the user selects a Place to filter monsters this becomes useful
 * Check the selected Place and mark every monster out of it with -1
 * 
 * @param {number[]} monsterIdArray Array of monster's id
 * @returns 
 */
function checkMonsterPlace(monsterIdArray) {
    var selectedMap = document.calcForm.ENEMY_SORT2.value;
    if (selectedMap === "0") return monsterIdArray;

    for (var n = 0; n <= EnemyNum; n++) {
        monsterIdArray[n] = m_MonsterMap[selectedMap].monsterList.includes(monsterIdArray[n]) ? monsterIdArray[n] : -1;
    }

    return monsterIdArray
}
function MANUKU_MONSTER() {
    for (var _ = 0; _ < nMANUKU.length; _++)
        if (selectedMonster[0] == nMANUKU[_])
            return 1;
    return 0
}
function SUPURE_MONSTER() {
    for (var _ = 0; _ < nSUPURE.length; _++)
        if (selectedMonster[0] == nSUPURE[_])
            return 1;
    return 0
}
function SaveLocal() {
    if ("undefined" == typeof Storage)
        alert("Sorry, your browser does not support local storage. Please let me know if you see this message at kurimet@gmail.com");
    else {
        for (SaveData = new Array, a = 0; 414 >= a; a++) {
            SaveData[a] = 0;
        }

        SaveData[0] = 1;
        SaveData[2] = 1 * c.A_JOB.value;
        SaveData[3] = 1 * c.A_JobLV.value;
        SaveData[4] = 1 * c.A_BaseLV.value;
        SaveData[5] = 1 * c.A_adopted.checked;
        1 == SaveData[5] ? SaveData[5] = 1 : 0 == SaveData[5] && (SaveData[5] = 0);
        SaveData[6] = 1 * c.A_STR.value;
        SaveData[7] = 1 * c.A_AGI.value;
        SaveData[8] = 1 * c.A_VIT.value;
        SaveData[9] = 1 * c.A_DEX.value;
        SaveData[10] = 1 * c.A_INT.value;
        SaveData[11] = 1 * c.A_LUK.value;
        SaveData[12] = 1 * c.A_Weapon_element.value;
        SaveData[13] = m_Item[c.A_weapon1.value][1];
        SaveData[14] = 1 * c.A_weapon1.value;
        SaveData[15] = 1 * c.A_Weapon_refine.value;
        SaveData[16] = 1 * c.A_weapon1_card1.value;
        SaveData[17] = 1 * c.A_weapon1_card2.value;
        SaveData[18] = 1 * c.A_weapon1_card3.value;
        SaveData[19] = 1 * c.A_weapon1_card4.value;

        if (n_Nitou) {
            SaveData[20] = m_Item[c.A_weapon2.value][1];
            SaveData[21] = 1 * c.A_weapon2.value;
            SaveData[22] = 1 * c.A_Weapon2_refine.value;
            SaveData[23] = 1 * c.A_weapon2_card1.value;
            SaveData[24] = 1 * c.A_weapon2_card2.value;
            SaveData[25] = 1 * c.A_weapon2_card3.value;
            SaveData[26] = 1 * c.A_weapon2_card4.value;
        } else {
            SaveData[20] = 0;
            SaveData[21] = 0;
            SaveData[22] = 0;
            SaveData[23] = 0;
            SaveData[24] = 0;
            SaveData[25] = 0;
            SaveData[26] = 0;
        }

        (2 == n_A_JobClass() || 4 == n_A_JobClass() || 45 == n_A_JOB && 0 != n_A_WeaponType) && (SaveData[27] = 1 * c.A_Arrow.value);
        SaveData[28] = 1 * c.A_head1.value;
        SaveData[29] = 1 * c.A_head1_card.value;
        SaveData[30] = 1 * c.A_HEAD_REFINE.value;
        SaveData[31] = 1 * c.A_head2.value;
        SaveData[32] = 1 * c.A_head2_card.value;
        SaveData[33] = 1 * c.A_head3.value;
        SaveData[34] = 1 * c.A_left.value;
        SaveData[35] = 1 * c.A_left_card.value;
        SaveData[36] = 1 * c.A_LEFT_REFINE.value;
        SaveData[37] = 1 * c.A_body.value;
        SaveData[38] = 1 * c.A_body_card.value;
        SaveData[39] = 1 * c.A_BODY_REFINE.value;
        SaveData[40] = 1 * c.A_shoulder.value;
        SaveData[41] = 1 * c.A_shoulder_card.value;
        SaveData[42] = 1 * c.A_SHOULDER_REFINE.value;
        SaveData[43] = 1 * c.A_shoes.value;
        SaveData[44] = 1 * c.A_shoes_card.value;
        SaveData[45] = 1 * c.A_SHOES_REFINE.value;
        SaveData[46] = 1 * c.A_acces1.value;
        SaveData[47] = 1 * c.A_acces1_card.value;
        SaveData[48] = 1 * c.A_acces2.value;
        SaveData[49] = 1 * c.A_acces2_card.value;
        SaveData[50] = 1 * c.A_HSE_HEAD1.value;
        SaveData[51] = 1 * c.A_HSE.value;
        SaveData[52] = 0;
        SaveData[53] = 0;
        SaveData[54] = 0;
        SaveData[55] = 0;
        n_A_JobSet();
        w = n_A_JOB;
        for (var _ = 0, a = 0; 14 >= a && 0 == _; a++)
            if (999 != m_JobBuff[w][a]) {
                var n = document.getElementById("A_skill" + a);
                SaveData[56 + a] = 1 * n.value
            } else
                _ = 1;
        for (SaveData[71] = 0,
            SaveData[72] = 0,
            a = 0; 21 >= a; a++)
            SaveData[73 + a] = n_A_Buf2[a],
                1 == SaveData[73 + a] ? SaveData[73 + a] = 1 : 0 == SaveData[73 + a] && (SaveData[73 + a] = 0);
        for (SaveData[95] = 0,
            SaveData[96] = 0,
            a = 0; 36 >= a; a++)
            SaveData[96 + a] = n_A_Buf3[a],
                1 == SaveData[96 + a] ? SaveData[96 + a] = 1 : 0 == SaveData[96 + a] && (SaveData[96 + a] = 0);
        for (SaveData[134] = 0,
            SaveData[135] = 0,
            SaveData[136] = n_A_Buf3[40],
            SaveData[137] = n_A_Buf3[41],
            SaveData[138] = n_A_Buf3[42],
            SaveData[139] = n_A_Buf3[43],
            SaveData[140] = n_A_Buf3[44],
            SaveData[141] = 0,
            SaveData[142] = 0,
            a = 0; 23 >= a; a++)
            SaveData[143 + a] = n_A_Buf6[a],
                1 == SaveData[143 + a] ? SaveData[143 + a] = 1 : 0 == SaveData[143 + a] && (SaveData[143 + a] = 0);
        for (SaveData[167] = 0,
            SaveData[168] = 0,
            a = 0; 51 >= a; a++)
            SaveData[169 + a] = n_A_Buf7[a],
                1 == SaveData[169 + a] ? SaveData[169 + a] = 1 : 0 == SaveData[169 + a] && (SaveData[169 + a] = 0);
        for (a = 0; 11 >= a; a++)
            SaveData[221 + a] = n_A_Buf8[a],
                1 == SaveData[221 + a] ? SaveData[221 + a] = 1 : 0 == SaveData[221 + a] && (SaveData[221 + a] = 0);
        for (SaveData[233] = 0,
            SaveData[234] = 0,
            SaveData[235] = 0,
            SaveData[236] = 0,
            SaveData[237] = c.Conf01.value,
            SaveData[238] = c.B_num.value,
            SaveData[239] = c.A8_Skill14.value,
            SaveData[240] = c.A8_Skill15.value,
            SaveData[241] = 0,
            SaveData[242] = 0,
            SaveData[243] = 1 * c.A_ActiveSkill.value,
            SaveData[244] = 1 * c.A_ActiveSkillLV.value,
            (66 == n_A_ActiveSkill || 326 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 88 == n_A_ActiveSkill || 197 == n_A_ActiveSkill || 394 == n_A_ActiveSkill || 395 == n_A_ActiveSkill || 405 == n_A_ActiveSkill || 429 == n_A_ActiveSkill || SkillSearch(441) && (51 == n_A_ActiveSkill || 54 == n_A_ActiveSkill || 56 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 542 == n_A_ActiveSkill)) && (SaveData[245] = 1 * c.SkillSubNum.value),
            SaveData[246] = c.B_Enemy.value,
            SaveData[247] = 1 * c.B_AtkSkill.value,
            444 != n_B_AtkSkill && 445 != n_B_AtkSkill && 125 != n_B_AtkSkill && 131 != n_B_AtkSkill || (SaveData[248] = 1 * c.BSkillSubNum.value),
            a = 0; 24 >= a; a++)
            SaveData[253 + a] = n_B_IJYOU[a],
                1 == SaveData[253 + a] ? SaveData[253 + a] = 1 : 0 == SaveData[253 + a] && (SaveData[253 + a] = 0);
        for (SaveData[278] = 0,
            SaveData[279] = 0,
            SaveData[280] = 0,
            a = 0; 14 >= a; a++)
            SaveData[281 + a] = n_B_KYOUKA[a],
                1 == SaveData[281 + a] ? SaveData[281 + a] = 1 : 0 == SaveData[281 + a] && (SaveData[281 + a] = 0);
        for (SaveData[296] = 0,
            SaveData[297] = 0,
            SaveData[298] = 0,
            SaveData[299] = 0,
            SaveData[300] = 0,
            SaveData[301] = 0,
            SaveData[302] = 0,
            a = 0; 59 >= a; a++)
            SaveData[303 + a] = n_A_Buf9[a],
                1 == SaveData[303 + a] ? SaveData[303 + a] = 1 : 0 == SaveData[303 + a] && (SaveData[303 + a] = 0);
        for (SaveData[363] = 0,
            a = 0; 55 >= a; a++)
            SaveData[364 + a] = n_B_manual[a],
                1 == SaveData[364 + a] ? SaveData[364 + a] = 1 : 0 == SaveData[364 + a] && (SaveData[364 + a] = 0);
        SaveData[420] = 0,
            SaveData[421] = 0,
            SaveData[422] = 0,
            SaveData[423] = 0,
            SaveData[424] = 0,
            SaveData[425] = c.theme.value,
            SaveData[426] = c.server.value,
            SaveData[427] = c.autocalc.checked,
            SaveData[428] = c.all_dmgSkills.checked,
            SaveData[429] = c.restrict_jobequip.checked,
            SaveData[430] = c.restrict_lvlequip.checked,
            SaveData[431] = c.restrict_equipslot.checked,
            SaveData[432] = c.restrict_cardslot.checked,
            SaveData[433] = c.all_card.checked,
            SaveData[434] = c.B_AtkRange.value,
            SaveData[435] = c.B_AtkElem.value,
            SaveData[436] = 0,
            SaveData[437] = 0,
            SaveData[438] = 0,
            SaveData[439] = 0,
            slotNum = c.A_SaveSlotLocal.value,
            localStorage["Slot" + slotNum] = JSON.stringify(SaveData),
            bkcN = slotNum,
            LoadLocal3(),
            c.A_SaveSlotLocal.value = bkcN
    }
}
function LoadLocal() {
    if ("undefined" == typeof Storage)
        alert("Sorry, your browser does not support local storage. If you see this message, please let me know at kurimet@gmail.com");
    else if (myInnerHtml("bREFLECT2", "", 0),
        myInnerHtml("bREFLECT2name", "", 0),
        slotNum = c.A_SaveSlotLocal.value,
        SaveData = new Array,
        "undefined" == typeof localStorage["Slot" + slotNum]) {
        c.A_JOB.value = 0,
            ClickJob(0),
            c.A_JobLV.value = 1,
            c.A_BaseLV.value = 1,
            c.A_adopted.checked = 0,
            c.A_STR.value = 1,
            c.A_AGI.value = 1,
            c.A_VIT.value = 1,
            c.A_DEX.value = 1,
            c.A_INT.value = 1,
            c.A_LUK.value = 1,
            c.A_Weapon_element.value = 0,
            c.A_weapon1.value = 0,
            n_A_WeaponType = 0,
            ClickWeaponType(0),
            n_A_JobSet(),
            c.A_Weapon_refine.value = 0,
            c.A_weapon1_card1.value = 0,
            c.A_weapon1_card2.value = 0,
            c.A_weapon1_card3.value = 0,
            c.A_weapon1_card4.value = 0,
            c.A_head1.value = 142,
            c.A_head1_card.value = 0,
            c.A_HEAD_REFINE.value = 0,
            c.A_head2.value = 243,
            c.A_head2_card.value = 0,
            c.A_head3.value = 268,
            c.A_left.value = 305,
            c.A_left_card.value = 0,
            c.A_LEFT_REFINE.value = 0,
            c.A_body.value = 279,
            c.A_body_card.value = 0,
            c.A_BODY_REFINE.value = 0,
            c.A_shoulder.value = 311,
            c.A_shoulder_card.value = 0,
            c.A_SHOULDER_REFINE.value = 0,
            c.A_shoes.value = 317,
            c.A_shoes_card.value = 0,
            c.A_SHOES_REFINE.value = 0,
            c.A_acces1.value = 326,
            c.A_acces1_card.value = 0,
            c.A_acces2.value = 326,
            c.A_acces2_card.value = 0,
            c.A_HSE_HEAD1.value = 0,
            c.A_HSE.value = 0,
            n_itemSW = 0,
            ClickB_Item("SW"),
            w = n_A_JOB;
        for (var _ = 0, a = 0; 14 >= a && 0 == _; a++)
            if (999 != m_JobBuff[w][a]) {
                var n = document.getElementById("A_skill" + a);
                n.value = 0
            } else
                _ = 1;
        for (a = 0; 21 >= a; a++)
            n_A_Buf2[a] = 0;
        for (n_SkillSW = 0,
            a = 0; 36 >= a; a++)
            n_A_Buf3[a] = 0;
        for (n_Skill3SW = 0,
            a = 0; 4 >= a; a++)
            n_A_Buf3[40 + a] = 0;
        for (n_Skill4SW = 0,
            a = 0; 23 >= a; a++)
            n_A_Buf6[a] = 0;
        for (n_Skill6SW = 0,
            a = 0; 60 >= a; a++)
            n_A_Buf7[a] = 0;
        for (n_Skill7SW = 0,
            a = 0; 15 >= a; a++)
            n_A_Buf8[a] = 0;
        for (n_Skill8SW = 0,
            c.Conf01.value = 33,
            c.B_num.value = 1,
            c.A8_Skill14.value = 0,
            c.A8_Skill15.value = 0,
            c.A_ActiveSkill.value = 0,
            ClickActiveSkill(),
            c.A_ActiveSkillLV.value = 0,
            (66 == n_A_ActiveSkill || 326 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 88 == n_A_ActiveSkill || 197 == n_A_ActiveSkill || 394 == n_A_ActiveSkill || 395 == n_A_ActiveSkill || 405 == n_A_ActiveSkill || 429 == n_A_ActiveSkill || SkillSearch(441) && (51 == n_A_ActiveSkill || 54 == n_A_ActiveSkill || 56 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 542 == n_A_ActiveSkill)) && (c.SkillSubNum.value = 0),
            c.B_Enemy.value = 144,
            c.B_AtkRange.value = 0,
            Bskill(),
            c.B_AtkSkill.value = 0,
            a = 0; 24 >= a; a++)
            n_B_IJYOU[a] = 0;
        for (n_IjyouSW = 0,
            a = 0; 14 >= a; a++)
            n_B_KYOUKA[a] = 0;
        for (n_KyoukaSW = 0,
            a = 0; 59 >= a; a++)
            n_A_Buf9[a] = 0;
        for (n_A_Buf9[2] = 10,
            n_A_Buf9[4] = 20,
            n_A_Buf9[6] = 23,
            n_A_Buf9[10] = 10,
            n_A_Buf9[12] = 20,
            n_A_Buf9[14] = 23,
            n_Skill9SW = 0,
            a = 0; 55 >= a; a++)
            n_B_manual[a] = 0;
        n_Skill10SW = 0
    } else {
        for (a = 0; 336 >= a; a++)
            SaveData[a] = 0;
        SaveData = JSON.parse(localStorage["Slot" + slotNum]),
            c.A_JOB.value = SaveData[2],
            ClickJob(SaveData[2]),
            c.A_JobLV.value = SaveData[3],
            c.A_BaseLV.value = SaveData[4],
            c.A_adopted.checked = SaveData[5],
            c.A_STR.value = SaveData[6],
            c.A_AGI.value = SaveData[7],
            c.A_VIT.value = SaveData[8],
            c.A_DEX.value = SaveData[9],
            c.A_INT.value = SaveData[10],
            c.A_LUK.value = SaveData[11],
            c.A_Weapon_element.value = SaveData[12],
            c.A_weapon1.value = SaveData[14],
            n_A_WeaponType = SaveData[13],
            ClickWeaponType(SaveData[13]),
            8 != SaveData[2] && 22 != SaveData[2] || 11 == SaveData[13] || (n_A_Weapon2Type = SaveData[20],
                ClickWeaponType2(n_A_Weapon2Type)),
            n_A_JobSet(),
            (2 == n_A_JobClass() || 4 == n_A_JobClass() || 45 == n_A_JOB && 0 != SaveData[13]) && (c.A_Arrow.value = SaveData[27]),
            ClickB_Item(SaveData[14]),
            c.A_Weapon_refine.value = SaveData[15],
            c.A_weapon1_card1.value = SaveData[16],
            c.A_weapon1_card2.value = SaveData[17],
            c.A_weapon1_card3.value = SaveData[18],
            c.A_weapon1_card4.value = SaveData[19],
            n_Nitou && (c.A_weapon2.value = SaveData[21],
                c.A_Weapon2_refine.value = SaveData[22],
                c.A_weapon2_card1.value = SaveData[23],
                c.A_weapon2_card2.value = SaveData[24],
                c.A_weapon2_card3.value = SaveData[25],
                c.A_weapon2_card4.value = SaveData[26]),
            c.A_head1.value = SaveData[28],
            c.A_head1_card.value = SaveData[29],
            c.A_HEAD_REFINE.value = SaveData[30],
            c.A_head2.value = SaveData[31],
            c.A_head2_card.value = SaveData[32],
            c.A_head3.value = SaveData[33],
            c.A_left.value = SaveData[34],
            c.A_left_card.value = SaveData[35],
            c.A_LEFT_REFINE.value = SaveData[36],
            c.A_body.value = SaveData[37],
            c.A_body_card.value = SaveData[38],
            c.A_BODY_REFINE.value = SaveData[39],
            c.A_shoulder.value = SaveData[40],
            c.A_shoulder_card.value = SaveData[41],
            c.A_SHOULDER_REFINE.value = SaveData[42],
            c.A_shoes.value = SaveData[43],
            c.A_shoes_card.value = SaveData[44],
            c.A_SHOES_REFINE.value = SaveData[45],
            c.A_acces1.value = SaveData[46],
            c.A_acces1_card.value = SaveData[47],
            c.A_acces2.value = SaveData[48],
            c.A_acces2_card.value = SaveData[49],
            c.A_HSE_HEAD1.value = SaveData[50],
            c.A_HSE.value = SaveData[51],
            w = n_A_JOB;
        for (var _ = 0, a = 0; 14 >= a && 0 == _; a++)
            if (999 != m_JobBuff[w][a]) {
                var n = document.getElementById("A_skill" + a);
                n.value = SaveData[56 + a]
            } else
                _ = 1;
        for (a = 0; 21 >= a; a++)
            n_A_Buf2[a] = SaveData[73 + a];
        for (a = 0; 36 >= a; a++)
            n_A_Buf3[a] = SaveData[96 + a];
        for (Buf3SW(0),
            a = 0; 4 >= a; a++)
            n_A_Buf3[40 + a] = SaveData[136 + a];
        for (a = 0; 23 >= a; a++)
            n_A_Buf6[a] = SaveData[143 + a];
        for (a = 0; 51 >= a; a++)
            n_A_Buf7[a] = SaveData[169 + a];
        for (a = 0; 11 >= a; a++)
            n_A_Buf8[a] = SaveData[221 + a];
        c.Conf01.value = SaveData[237],
            c.B_num.value = SaveData[238],
            c.A8_Skill14.value = SaveData[239],
            c.A8_Skill15.value = SaveData[240],
            StCalc(1),
            ActiveSkillSetPlus(),
            c.A_ActiveSkill.value = SaveData[243],
            ClickActiveSkill(),
            c.A_ActiveSkillLV.value = SaveData[244],
            66 != n_A_ActiveSkill && 326 != n_A_ActiveSkill && 131 != n_A_ActiveSkill && 88 != n_A_ActiveSkill && 197 != n_A_ActiveSkill && 394 != n_A_ActiveSkill && 395 != n_A_ActiveSkill && 405 != n_A_ActiveSkill && 429 != n_A_ActiveSkill || (c.SkillSubNum.value = SaveData[245]);
        for (var e = 0, t = 0; 14 >= t; t++)
            if (441 == m_JobBuff[n_A_JOB][t]) {
                if (e = c.A_skill6.value,
                    e && (51 == n_A_ActiveSkill || 54 == n_A_ActiveSkill || 56 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 542 == n_A_ActiveSkill)) {
                    var A = 1 * e + 3;
                    myInnerHtml("AASkill", 'Double Bolt chance: <select name="SkillSubNum" onChange="calc()"></select>', 0),
                        c.SkillSubNum.options[0] = new Option("No chance (0%)", 0),
                        c.SkillSubNum.options[1] = new Option("Average chance (" + 10 * A + "%)", A),
                        c.SkillSubNum.options[2] = new Option("Max chance (100%)", 10),
                        c.SkillSubNum.value = SaveData[245]
                }
                break
            }
        for (selectedMonster[0] = SaveData[246],
            c.B_Enemy.value = SaveData[246],
            Bskill(),
            c.B_AtkSkill.value = SaveData[247],
            BClickAtkSkill(),
            444 != SaveData[247] && 445 != SaveData[247] && 125 != SaveData[247] && 131 != SaveData[247] || (c.BSkillSubNum.value = SaveData[248]),
            a = 0; 24 >= a; a++)
            n_B_IJYOU[a] = SaveData[253 + a];
        if (0 == SaveData[0]) {
            for (a = 0; 9 >= a; a++)
                n_B_KYOUKA[a] = SaveData[281 + a];
            var o = 0
        } else {
            for (a = 0; 14 >= a; a++)
                n_B_KYOUKA[a] = SaveData[281 + a];
            var o = 10
        }
        for (a = 0; 59 >= a; a++)
            n_A_Buf9[a] = SaveData[293 + a + o];
        for (a = 0; 55 >= a; a++)
            n_B_manual[a] = SaveData[354 + a + o];
        c.theme.value = SaveData[425],
            c.server.value = SaveData[426],
            c.autocalc.checked = SaveData[427],
            c.all_dmgSkills.checked = SaveData[428],
            c.restrict_jobequip.checked = SaveData[429],
            c.restrict_lvlequip.checked = SaveData[430],
            c.restrict_equipslot.checked = SaveData[431],
            c.restrict_cardslot.checked = SaveData[432],
            c.all_card.checked = SaveData[433],
            c.B_AtkRange.value = SaveData[434],
            c.B_AtkElem.value = SaveData[435]
    }
    refreshFields(),
        SRV = 1 * c.server.value,
        StCalc(1),
        StAllCalc(),
        ActiveSkillSetPlus(),
        calc(),
        themes()
}
function LoadLocal3() {
    for (SaveData = new Array,
        k = 1; k <= 19; k++)
        slotNum = "num0" + (k - 1),
            9 == k && (slotNum = "num0" + k),
            k >= 10 && (slotNum = "num" + k),
            "undefined" == typeof localStorage["Slot" + slotNum] ? c.A_SaveSlotLocal.options[k - 1] = new Option("Save" + k + ": No Data", slotNum) : (SaveData = JSON.parse(localStorage["Slot" + slotNum]),
                1 <= SaveData[2] && SaveData[2] <= 45 ? 0 == SaveData[5] ? c.A_SaveSlotLocal.options[k - 1] = new Option("Save" + k + ": " + JobName[SaveData[2]], slotNum) : c.A_SaveSlotLocal.options[k - 1] = new Option("Save" + k + ": Baby " + JobName[SaveData[2]], slotNum) : 999 == SaveData[2] || 0 == SaveData[2] ? c.A_SaveSlotLocal.options[k - 1] = new Option("Save" + k + ": Novice", slotNum) : c.A_SaveSlotLocal.options[k - 1] = new Option("Save" + k + ": No Data", slotNum))
}
function delLocal() {
    window.confirm("Do you really want to DELETE selected saved data?") && (slotNum = document.calcForm.A_SaveSlotLocal.value,
        localStorage["Slot" + slotNum] = 0,
        bkcN = slotNum,
        LoadLocal3(),
        document.calcForm.A_SaveSlotLocal.value = bkcN)
}
function NtoS2(_, a) {
    var n = "";
    return 3 == a ? (n += n_NtoS2[Math.floor(_ / 3844)],
        n += n_NtoS2[Math.floor(_ % 3844 / 62)],
        n += n_NtoS2[_ % 62]) : 2 == a ? (n += n_NtoS2[Math.floor(_ / 62)],
            n += n_NtoS2[_ % 62]) : n += n_NtoS2[_],
        n
}
function NtoS01(_, a, n, e, t) {
    var A = 0;
    return 1 == _ && (A += 16),
        1 == a && (A += 8),
        1 == n && (A += 4),
        1 == e && (A += 2),
        1 == t && (A += 1),
        NtoS2(A, 1)
}
function NtoS05(_, a) {
    var n;
    return n = 6 * _,
        n += a,
        NtoS2(n, 1)
}
function URLOUT() {
    calc(),
        SaveData = new Array;
    for (var _ = 0; 88 >= _; _++)
        SaveData[_] = "a";
    SaveData[0] = NtoS2(7, 1),
        SaveData[1] = NtoS2(1 * c.A_JOB.value, 2),
        SaveData[2] = NtoS2(1 * c.A_BaseLV.value, 2),
        SaveData[3] = NtoS2(1 * c.A_JobLV.value, 2),
        SaveData[4] = NtoS2(1 * c.A_STR.value, 2),
        SaveData[5] = NtoS2(1 * c.A_AGI.value, 2),
        SaveData[6] = NtoS2(1 * c.A_VIT.value, 2),
        SaveData[7] = NtoS2(1 * c.A_DEX.value, 2),
        SaveData[8] = NtoS2(1 * c.A_INT.value, 2),
        SaveData[9] = NtoS2(1 * c.A_LUK.value, 2),
        SaveData[10] = NtoS2(10 * n_A_Buf7[35] + 1 * c.A_Weapon_element.value, 1),
        SaveData[11] = NtoS2(m_Item[c.A_weapon1.value][1], 1),
        n_Nitou && (SaveData[12] = NtoS2(m_Item[c.A_weapon2.value][1], 1)),
        (2 == n_A_JobClass() || 4 == n_A_JobClass() || 45 == n_A_JOB && 0 != n_A_WeaponType) && (SaveData[13] = NtoS2(1 * c.A_Arrow.value, 1)),
        SaveData[14] = NtoS2(1 * c.A_weapon1.value, 2),
        SaveData[15] = NtoS2(1 * c.A_Weapon_refine.value, 1),
        SaveData[16] = NtoS2(1 * c.A_weapon1_card1.value, 2),
        SaveData[17] = NtoS2(1 * c.A_weapon1_card2.value, 2),
        SaveData[18] = NtoS2(1 * c.A_weapon1_card3.value, 2),
        SaveData[19] = NtoS2(1 * c.A_weapon1_card4.value, 2),
        n_Nitou ? (SaveData[20] = NtoS2(1 * c.A_weapon2.value, 2),
            SaveData[21] = NtoS2(1 * c.A_Weapon2_refine.value, 1),
            SaveData[22] = NtoS2(1 * c.A_weapon2_card1.value, 2),
            SaveData[23] = NtoS2(1 * c.A_weapon2_card2.value, 2),
            SaveData[24] = NtoS2(1 * c.A_weapon2_card3.value, 2),
            SaveData[25] = NtoS2(1 * c.A_weapon2_card4.value, 2)) : (SaveData[20] = NtoS2(1 * c.A_left.value, 2),
                SaveData[21] = NtoS2(1 * c.A_LEFT_REFINE.value, 1),
                SaveData[22] = NtoS2(1 * c.A_left_card.value, 2),
                SaveData[24] = SaveData[25] = SaveData[23] = NtoS2(0, 2)),
        SaveData[26] = NtoS2(1 * c.A_head1.value, 2),
        SaveData[27] = NtoS2(1 * c.A_head1_card.value, 2),
        SaveData[28] = NtoS2(1 * c.A_head2.value, 2),
        SaveData[29] = NtoS2(1 * c.A_head2_card.value, 2),
        SaveData[30] = NtoS2(1 * c.A_head3.value, 2),
        SaveData[31] = NtoS2(1 * c.A_body.value, 2),
        SaveData[32] = NtoS2(1 * c.A_body_card.value, 2),
        SaveData[33] = NtoS2(1 * c.A_shoulder.value, 2),
        SaveData[34] = NtoS2(1 * c.A_shoulder_card.value, 2),
        SaveData[35] = NtoS2(1 * c.A_shoes.value, 2),
        SaveData[36] = NtoS2(1 * c.A_shoes_card.value, 2),
        SaveData[37] = NtoS2(1 * c.A_acces1.value, 2),
        SaveData[38] = NtoS2(1 * c.A_acces1_card.value, 2),
        SaveData[39] = NtoS2(1 * c.A_acces2.value, 2),
        SaveData[40] = NtoS2(1 * c.A_acces2_card.value, 2),
        SaveData[41] = NtoS2(1 * c.A_HEAD_REFINE.value, 1),
        SaveData[42] = NtoS2(1 * c.A_BODY_REFINE.value, 1),
        SaveData[43] = NtoS2(1 * c.A_SHOULDER_REFINE.value, 1),
        SaveData[44] = NtoS2(1 * c.A_SHOES_REFINE.value, 1),
        SaveData[45] = NtoS01(c.A_adopted.checked, 0, 0, 0, 0),
        SaveData[46] = NtoS2(1 * c.A_HSE.value, 2),
        SaveData[47] = NtoS2(1 * c.A_HSE_HEAD1.value, 2),
        SaveData[48] = NtoS2(0, 2),
        SaveData[49] = NtoS2(0, 2),
        n_A_JobSet();
    for (var a = n_A_JOB, n = 0, _ = 0; 19 >= _ && 0 == n; _++)
        if (999 != m_JobBuff[a][_]) {
            var e = document.getElementById("A_skill" + _);
            SaveData[51 + _] = NtoS2(1 * e.value, 1)
        } else
            SaveData[50] = NtoS2(_, 1),
                n = 1;
    for (var t = 51 + _ - 1, _ = 0; 21 >= _ && 0 == n_A_Buf2[_]; _++)
        ;
    22 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(n_A_Buf2[0], 1),
        SaveData[t + 2] = NtoS2(n_A_Buf2[1], 1),
        SaveData[t + 3] = NtoS2(n_A_Buf2[4], 1),
        SaveData[t + 4] = NtoS2(n_A_Buf2[9], 1),
        SaveData[t + 5] = NtoS2(n_A_Buf2[13], 1),
        SaveData[t + 6] = NtoS2(n_A_Buf2[14], 1),
        SaveData[t + 7] = NtoS05(n_A_Buf2[2], n_A_Buf2[6]),
        SaveData[t + 8] = NtoS05(n_A_Buf2[10], n_A_Buf2[11]),
        SaveData[t + 9] = NtoS05(n_A_Buf2[12], n_A_Buf2[15]),
        SaveData[t + 10] = NtoS01(n_A_Buf2[3], n_A_Buf2[5], n_A_Buf2[7], n_A_Buf2[8], n_A_Buf2[16]),
        SaveData[t + 11] = NtoS01(n_A_Buf2[17], n_A_Buf2[18], n_A_Buf2[19], n_A_Buf2[20], n_A_Buf2[21]),
        t += 11),
        t += 1;
    for (var _ = 0; 24 >= _ && 0 == n_B_IJYOU[_]; _++)
        ;
    25 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(n_B_IJYOU[0], 1),
        SaveData[t + 2] = NtoS05(n_B_IJYOU[1], n_B_IJYOU[18]),
        SaveData[t + 3] = NtoS01(n_B_IJYOU[2], n_B_IJYOU[3], n_B_IJYOU[4], n_B_IJYOU[5], n_B_IJYOU[6]),
        SaveData[t + 4] = NtoS01(n_B_IJYOU[7], n_B_IJYOU[8], n_B_IJYOU[9], n_B_IJYOU[10], n_B_IJYOU[19]),
        SaveData[t + 5] = NtoS2(n_B_IJYOU[11], 1),
        SaveData[t + 6] = NtoS2(n_B_IJYOU[12], 1),
        SaveData[t + 7] = NtoS01(n_B_IJYOU[13], n_B_IJYOU[14], n_B_IJYOU[15], n_B_IJYOU[16], n_B_IJYOU[17]),
        SaveData[t + 8] = NtoS01(n_B_IJYOU[20], n_B_IJYOU[21], n_B_IJYOU[22], 0, 0),
        SaveData[t + 9] = NtoS05(n_B_IJYOU[23], n_B_IJYOU[24]),
        t += 9),
        t += 1;
    for (var _ = 0; 19 >= _ && 0 == n_B_KYOUKA[_]; _++)
        ;
    10 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(n_B_KYOUKA[0], 1),
        SaveData[t + 2] = NtoS01(n_B_KYOUKA[1], n_B_KYOUKA[2], n_B_KYOUKA[3], n_B_KYOUKA[4], n_B_KYOUKA[9]),
        SaveData[t + 3] = NtoS2(n_B_KYOUKA[6], 2),
        SaveData[t + 4] = NtoS05(n_B_KYOUKA[7], n_B_KYOUKA[8]),
        SaveData[t + 5] = NtoS2(n_B_KYOUKA[5], 1),
        SaveData[t + 6] = NtoS2(n_B_KYOUKA[10], 1),
        SaveData[t + 7] = NtoS2(n_B_KYOUKA[11], 1),
        SaveData[t + 8] = NtoS2(n_B_KYOUKA[12], 1),
        SaveData[t + 9] = NtoS2(n_B_KYOUKA[13], 1),
        SaveData[t + 10] = NtoS2(n_B_KYOUKA[14], 1),
        t += 10),
        t += 1;
    for (var A = [0, 0, 0, 0, 0], _ = 0; 36 >= _ && 0 == n_A_Buf3[_]; _++)
        ;
    for (37 != _ && (A[0] = 1),
        _ = 0; 4 >= _ && 0 == n_A_Buf3[40 + _]; _++)
        ;
    for (5 != _ && (A[1] = 1),
        _ = 0; 23 >= _ && 0 == n_A_Buf6[_]; _++)
        ;
    for (24 != _ && (A[3] = 1),
        _ = 0; 60 >= _ && 0 == n_A_Buf7[_]; _++)
        ;
    61 != _ && (A[4] = 1),
        SaveData[t] = NtoS01(A[0], A[1], A[2], A[3], A[4]),
        A[0] && (SaveData[t + 1] = NtoS2(n_A_Buf3[0], 1),
            SaveData[t + 2] = NtoS2(n_A_Buf3[1], 1),
            SaveData[t + 3] = NtoS2(n_A_Buf3[2], 1),
            SaveData[t + 4] = NtoS2(n_A_Buf3[3], 1),
            SaveData[t + 5] = NtoS2(n_A_Buf3[4], 1),
            SaveData[t + 6] = NtoS2(n_A_Buf3[5], 1),
            SaveData[t + 7] = NtoS2(n_A_Buf3[6], 1),
            SaveData[t + 8] = NtoS05(n_A_Buf3[7], n_A_Buf3[8]),
            SaveData[t + 9] = NtoS05(n_A_Buf3[9], n_A_Buf3[10]),
            SaveData[t + 10] = NtoS01(n_A_Buf3[11], n_A_Buf3[18], 0, 0, 0),
            SaveData[t + 11] = NtoS2(n_A_Buf3[12], 2),
            SaveData[t + 12] = NtoS2(n_A_Buf3[13], 2),
            SaveData[t + 13] = NtoS2(n_A_Buf3[14], 2),
            SaveData[t + 14] = NtoS2(n_A_Buf3[15], 2),
            SaveData[t + 15] = NtoS2(n_A_Buf3[16], 2),
            SaveData[t + 16] = NtoS2(n_A_Buf3[17], 2),
            SaveData[t + 17] = NtoS2(n_A_Buf3[20], 2),
            SaveData[t + 18] = NtoS2(n_A_Buf3[30], 1),
            SaveData[t + 19] = NtoS2(n_A_Buf3[21], 2),
            SaveData[t + 20] = NtoS2(n_A_Buf3[31], 1),
            SaveData[t + 21] = NtoS2(n_A_Buf3[22], 2),
            SaveData[t + 22] = NtoS2(n_A_Buf3[29], 2),
            SaveData[t + 23] = NtoS2(n_A_Buf3[32], 1),
            SaveData[t + 24] = NtoS2(n_A_Buf3[23], 2),
            SaveData[t + 25] = NtoS2(n_A_Buf3[33], 1),
            SaveData[t + 26] = NtoS2(n_A_Buf3[24], 2),
            SaveData[t + 27] = NtoS2(n_A_Buf3[34], 1),
            SaveData[t + 28] = NtoS2(n_A_Buf3[25], 2),
            SaveData[t + 29] = NtoS2(n_A_Buf3[35], 1),
            SaveData[t + 30] = NtoS2(n_A_Buf3[26], 2),
            SaveData[t + 31] = NtoS2(n_A_Buf3[36], 1),
            t += 31),
        A[1] && (SaveData[t + 1] = NtoS01(n_A_Buf3[40], 0, 0, 0, 0),
            SaveData[t + 2] = NtoS05(n_A_Buf3[41], n_A_Buf3[42]),
            SaveData[t + 3] = NtoS05(n_A_Buf3[43], n_A_Buf3[44]),
            t += 3),
        A[3] && (SaveData[t + 1] = NtoS2(n_A_Buf6[5], 1),
            SaveData[t + 2] = NtoS2(n_A_Buf6[20], 1),
            SaveData[t + 3] = NtoS05(n_A_Buf6[0], n_A_Buf6[1]),
            SaveData[t + 4] = NtoS05(n_A_Buf6[2], n_A_Buf6[4]),
            SaveData[t + 5] = NtoS05(n_A_Buf6[18], n_A_Buf6[19]),
            SaveData[t + 6] = NtoS01(n_A_Buf6[3], n_A_Buf6[6], n_A_Buf6[7], n_A_Buf6[8], n_A_Buf6[9]),
            SaveData[t + 7] = NtoS01(n_A_Buf6[10], n_A_Buf6[11], n_A_Buf6[12], n_A_Buf6[13], n_A_Buf6[14]),
            SaveData[t + 8] = NtoS01(n_A_Buf6[15], n_A_Buf6[16], n_A_Buf6[17], n_A_Buf6[21], n_A_Buf6[22]),
            t += 8),
        A[4] && (SaveData[t + 1] = NtoS2(n_A_Buf7[3], 1),
            SaveData[t + 2] = NtoS2(n_A_Buf7[4], 1),
            SaveData[t + 3] = NtoS2(n_A_Buf7[5], 1),
            SaveData[t + 4] = NtoS2(n_A_Buf7[6], 1),
            SaveData[t + 5] = NtoS2(n_A_Buf7[7], 1),
            SaveData[t + 6] = NtoS2(n_A_Buf7[8], 1),
            SaveData[t + 7] = NtoS05(n_A_Buf7[35], n_A_Buf7[42]),
            SaveData[t + 8] = NtoS05(n_A_Buf7[39], n_A_Buf7[40]),
            SaveData[t + 9] = NtoS01(n_A_Buf7[0], n_A_Buf7[1], n_A_Buf7[2], n_A_Buf7[9], n_A_Buf7[10]),
            SaveData[t + 10] = NtoS01(n_A_Buf7[11], n_A_Buf7[12], n_A_Buf7[13], n_A_Buf7[14], 0),
            SaveData[t + 11] = NtoS01(n_A_Buf7[16], n_A_Buf7[17], n_A_Buf7[18], n_A_Buf7[19], n_A_Buf7[20]),
            SaveData[t + 12] = NtoS01(n_A_Buf7[21], n_A_Buf7[22], n_A_Buf7[23], n_A_Buf7[24], n_A_Buf7[25]),
            SaveData[t + 13] = NtoS01(n_A_Buf7[26], n_A_Buf7[27], n_A_Buf7[28], n_A_Buf7[29], n_A_Buf7[30]),
            SaveData[t + 14] = NtoS01(n_A_Buf7[31], n_A_Buf7[32], n_A_Buf7[33], n_A_Buf7[34], n_A_Buf7[36]),
            SaveData[t + 15] = NtoS01(n_A_Buf7[37], n_A_Buf7[38], n_A_Buf7[41], n_A_Buf7[43], n_A_Buf7[44]),
            SaveData[t + 16] = NtoS01(n_A_Buf7[45], n_A_Buf7[46], n_A_Buf7[47], n_A_Buf7[48], n_A_Buf7[49]),
            SaveData[t + 17] = NtoS01(n_A_Buf7[50], n_A_Buf7[51], n_A_Buf7[52], n_A_Buf7[53], n_A_Buf7[54]),
            SaveData[t + 18] = NtoS2(n_A_Buf7[55], 1),
            SaveData[t + 19] = NtoS01(n_A_Buf7[56], 0, 0, 0, 0),
            t += 19),
        t += 1;
    for (var _ = 0; 11 >= _ && 0 == n_A_Buf8[_]; _++)
        ;
    12 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(n_A_Buf8[0], 2),
        SaveData[t + 2] = NtoS2(n_A_Buf8[3], 2),
        SaveData[t + 3] = NtoS2(n_A_Buf8[7], 2),
        SaveData[t + 4] = NtoS2(n_A_Buf8[8], 2),
        SaveData[t + 5] = NtoS2(n_A_Buf8[9], 2),
        SaveData[t + 6] = NtoS2(n_A_Buf8[10], 2),
        SaveData[t + 7] = NtoS2(n_A_Buf8[11], 2),
        SaveData[t + 8] = NtoS2(n_A_Buf8[5], 1),
        SaveData[t + 9] = NtoS2(n_A_Buf8[6], 1),
        SaveData[t + 10] = NtoS05(n_A_Buf8[1], 0),
        SaveData[t + 11] = NtoS01(n_A_Buf8[2], 0, 0, 0, 0),
        t += 11),
        t += 1;
    for (var _ = 0; 59 >= _ && 0 == n_A_Buf9[_]; _++)
        ;
    if (60 == _)
        SaveData[t] = NtoS2(0, 1);
    else {
        for (SaveData[t] = NtoS2(1, 1),
            SaveData[t + 1] = NtoS2(n_A_Buf9[0], 1),
            SaveData[t + 2] = NtoS2(n_A_Buf9[1], 2),
            SaveData[t + 3] = NtoS2(n_A_Buf9[2], 1),
            SaveData[t + 4] = NtoS2(n_A_Buf9[3], 2),
            SaveData[t + 5] = NtoS2(n_A_Buf9[4], 1),
            SaveData[t + 6] = NtoS2(n_A_Buf9[5], 2),
            SaveData[t + 7] = NtoS2(n_A_Buf9[6], 1),
            SaveData[t + 8] = NtoS2(n_A_Buf9[7], 2),
            SaveData[t + 9] = NtoS2(n_A_Buf9[8], 1),
            SaveData[t + 10] = NtoS2(n_A_Buf9[9], 2),
            SaveData[t + 11] = NtoS2(n_A_Buf9[10], 1),
            SaveData[t + 12] = NtoS2(n_A_Buf9[11], 2),
            SaveData[t + 13] = NtoS2(n_A_Buf9[12], 1),
            SaveData[t + 14] = NtoS2(n_A_Buf9[13], 2),
            SaveData[t + 15] = NtoS2(n_A_Buf9[14], 1),
            SaveData[t + 16] = NtoS2(n_A_Buf9[15], 2),
            SaveData[t + 17] = NtoS2(n_A_Buf9[16], 1),
            SaveData[t + 18] = NtoS2(n_A_Buf9[17], 2),
            SaveData[t + 19] = NtoS2(n_A_Buf9[18], 1),
            SaveData[t + 20] = NtoS2(n_A_Buf9[19], 2),
            SaveData[t + 21] = NtoS2(n_A_Buf9[20], 1),
            SaveData[t + 22] = NtoS2(n_A_Buf9[21], 2),
            SaveData[t + 23] = NtoS2(n_A_Buf9[22], 1),
            SaveData[t + 24] = NtoS2(n_A_Buf9[23], 2),
            SaveData[t + 25] = NtoS2(n_A_Buf9[24], 1),
            SaveData[t + 26] = NtoS2(n_A_Buf9[25], 2),
            SaveData[t + 27] = NtoS2(n_A_Buf9[26], 1),
            SaveData[t + 28] = NtoS2(n_A_Buf9[27], 2),
            SaveData[t + 29] = NtoS2(n_A_Buf9[28], 1),
            SaveData[t + 30] = NtoS2(n_A_Buf9[29], 2),
            SaveData[t + 31] = NtoS2(n_A_Buf9[30], 3),
            _ = 31; 59 >= _; _++)
            SaveData[t + _ + 1] = NtoS2(n_A_Buf9[_], 2);
        t += 60
    }
    t += 1;
    for (var _ = 0; 55 >= _ && 0 == n_B_manual[_]; _++)
        ;
    for (56 == _ ? SaveData[t] = NtoS2(0, 1) : (SaveData[t] = NtoS2(1, 1),
        SaveData[t + 1] = NtoS2(n_B_manual[1], 2),
        SaveData[t + 2] = NtoS2(n_B_manual[2], 1),
        SaveData[t + 3] = NtoS2(n_B_manual[3], 2),
        SaveData[t + 4] = NtoS2(n_B_manual[4], 1),
        SaveData[t + 5] = NtoS2(n_B_manual[5], 2),
        SaveData[t + 6] = NtoS2(n_B_manual[7], 2),
        SaveData[t + 7] = NtoS2(n_B_manual[9], 2),
        SaveData[t + 8] = NtoS2(n_B_manual[21], 2),
        SaveData[t + 9] = NtoS2(n_B_manual[30], 3),
        SaveData[t + 10] = NtoS2(n_B_manual[31], 2),
        SaveData[t + 11] = NtoS2(n_B_manual[34], 2),
        SaveData[t + 12] = NtoS2(n_B_manual[35], 2),
        SaveData[t + 13] = NtoS2(n_B_manual[36], 2),
        SaveData[t + 14] = NtoS2(n_B_manual[37], 2),
        SaveData[t + 15] = NtoS2(n_B_manual[38], 2),
        SaveData[t + 16] = NtoS2(n_B_manual[39], 2),
        SaveData[t + 17] = NtoS2(n_B_manual[40], 3),
        SaveData[t + 18] = NtoS2(n_B_manual[41], 2),
        SaveData[t + 19] = NtoS2(n_B_manual[42], 3),
        SaveData[t + 20] = NtoS2(n_B_manual[43], 3),
        SaveData[t + 21] = NtoS2(n_B_manual[44], 2),
        SaveData[t + 22] = NtoS2(n_B_manual[48], 2),
        SaveData[t + 23] = NtoS2(n_B_manual[49], 2),
        SaveData[t + 24] = NtoS2(n_B_manual[50], 2),
        SaveData[t + 25] = NtoS2(n_B_manual[51], 2),
        SaveData[t + 26] = NtoS2(n_B_manual[52], 2),
        SaveData[t + 27] = NtoS2(n_B_manual[53], 3),
        SaveData[t + 28] = NtoS2(n_B_manual[54], 2),
        SaveData[t + 29] = NtoS2(n_B_manual[55], 2),
        t += 29),
        SaveData[t + 1] = NtoS2(1 * c.Conf01.value, 2),
        SaveData[t + 2] = NtoS2(c.B_num.value, 1),
        SaveData[t + 3] = NtoS2(c.A8_Skill14.value, 1),
        SaveData[t + 4] = NtoS2(c.A8_Skill15.value, 2),
        SaveData[t + 5] = NtoS01(0, 0, 0, 0, 0),
        SaveData[t + 6] = NtoS2(c.A_ActiveSkill.value, 2),
        SaveData[t + 7] = NtoS2(1 * c.A_ActiveSkillLV.value, 1),
        66 == n_A_ActiveSkill || 326 == n_A_ActiveSkill || 131 == n_A_ActiveSkill || 88 == n_A_ActiveSkill || 197 == n_A_ActiveSkill || 394 == n_A_ActiveSkill || 395 == n_A_ActiveSkill || 405 == n_A_ActiveSkill || 429 == n_A_ActiveSkill || SkillSearch(441) && (51 == n_A_ActiveSkill || 54 == n_A_ActiveSkill || 56 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 542 == n_A_ActiveSkill) ? SaveData[t + 8] = NtoS2(1 * c.SkillSubNum.value, 3) : SaveData[t + 8] = NtoS2(0, 3),
        SaveData[t + 9] = NtoS2(selectedMonster[0], 2),
        SaveData[t + 10] = NtoS2(c.B_AtkSkill.value, 2),
        444 == n_B_AtkSkill || 445 == n_B_AtkSkill || 125 == n_B_AtkSkill || 131 == n_B_AtkSkill ? SaveData[t + 11] = NtoS2(c.BSkillSubNum.value, 3) : SaveData[t + 11] = NtoS2(0, 3),
        t += 11,
        SaveData[t + 1] = NtoS2(c.B_AtkRange.value, 1),
        SaveData[t + 2] = NtoS2(c.B_AtkElem.value, 1),
        SaveData[t + 3] = NtoS2(c.theme.value, 1),
        SaveData[t + 4] = NtoS2(c.server.value, 1),
        SaveData[t + 5] = NtoS01(c.autocalc.checked, c.all_dmgSkills.checked, c.restrict_jobequip.checked, c.restrict_lvlequip.checked, c.restrict_equipslot.checked),
        SaveData[t + 6] = NtoS01(c.restrict_cardslot.checked, c.all_card.checked, 0, 0, 0),
        t += 6,
        wStr = "" + SaveData[0],
        _ = 1; t >= _; _++)
        wStr += "" + SaveData[_];
    var a = location.href.split("#");
    c.URL_TEXT.value = a[0] + "#" + wStr,
        window.location.replace(a[0] + "#" + wStr),
        alert("Your current character can be saved in your bookmarks/favorites by pressing Ctrl+D on your keyboard.\n\nEl personaje actual puede guardarse en marcadores/favoritos pulsando Ctrl+D en su teclado.")
}
function StoNx(_) {
    _ += "";
    for (var a = 0; 61 >= a; a++)
        if (_ == n_NtoS2[a])
            return a
}
function StoN2(_) {
    _ += "";
    var a = _.length;
    if (3 == a) {
        var n = _.charAt(0)
            , e = 62 * StoNx(n) * 62;
        n = _.charAt(1),
            e += 62 * StoNx(n),
            n = _.charAt(2),
            e += StoNx(n)
    } else if (2 == a) {
        var n = _.charAt(0)
            , e = 62 * StoNx(n);
        n = _.charAt(1),
            e += StoNx(n)
    } else
        var n = _.charAt(0)
            , e = StoNx(n);
    return e
}
function URLIN() {
    var _ = location.href.match(/\#/)
        , a = location.href.match(/\?/)
        , n = otherURL_TEXT.value.match(/\#/)
        , e = otherURL_TEXT.value.match(/\?/);
    if (a || e || _ || n) {
        for (u = 0; 21 >= u; u++)
            n_A_Buf2[u] = 0;
        for (u = 0; 45 >= u; u++)
            n_A_Buf3[u] = 0;
        for (u = 0; 23 >= u; u++)
            n_A_Buf6[u] = 0;
        for (u = 0; 60 >= u; u++)
            n_A_Buf7[u] = 0;
        for (u = 0; 15 >= u; u++)
            n_A_Buf8[u] = 0;
        for (u = 0; 55 >= u; u++)
            n_A_Buf9[u] = 0;
        for (u = 0; 55 >= u; u++)
            n_B_manual[u] = 0;
        for (u = 0; 3 >= u; u++)
            n_A_IJYOU[u] = 0;
        for (u = 0; 24 >= u; u++)
            n_B_IJYOU[u] = 0;
        for (u = 0; 14 >= u; u++)
            n_B_KYOUKA[u] = 0;
        n_A_Buf9[2] = 10,
            n_A_Buf9[4] = 20,
            n_A_Buf9[6] = 23,
            n_A_Buf9[10] = 10,
            n_A_Buf9[12] = 20,
            n_A_Buf9[14] = 23;
        var t = new Array;
        e && (t = otherURL_TEXT.value.split("?")),
            n && (t = otherURL_TEXT.value.split("#")),
            a && (t = location.href.split("?")),
            _ && (t = location.href.split("#"));
        var a = t[1];
        // Super Novice Spirit lives in skill slot 9 (skills start at offset 89)
        20 == StoN2(a.substr(1, 2)) && StoN2(a.substr(89 + 9, 1)) ? SuperNoviceFullWeaponCHECK = 1 : SuperNoviceFullWeaponCHECK = 0;
        var A = StoN2(a.substr(0, 1));
        c.A_JOB.value = StoN2(a.substr(1, 2)),
            ClickJob(StoN2(a.substr(1, 2)), 2),
            c.A_BaseLV.value = StoN2(a.substr(3, 2)),
            c.A_JobLV.value = StoN2(a.substr(5, 2)),
            c.A_STR.value = StoN2(a.substr(7, 2)),
            c.A_AGI.value = StoN2(a.substr(9, 2)),
            c.A_VIT.value = StoN2(a.substr(11, 2)),
            c.A_DEX.value = StoN2(a.substr(13, 2)),
            c.A_INT.value = StoN2(a.substr(15, 2)),
            c.A_LUK.value = StoN2(a.substr(17, 2)),
            n_A_Buf7[35] = Math.floor(StoN2(a.substr(19, 1)) / 10),
            c.A_Weapon_element.value = StoN2(a.substr(19, 1)) % 10,
            c.A_weapon1.value = StoN2(a.substr(23, 2)),
            n_A_WeaponType = StoN2(a.substr(20, 1)),
            ClickWeaponType(n_A_WeaponType),
            8 != c.A_JOB.value && 22 != c.A_JOB.value || 11 == n_A_WeaponType || (n_A_Weapon2Type = StoN2(a.substr(21, 1)),
                ClickWeaponType2(n_A_Weapon2Type)),
            n_A_JobSet(),
            (2 == n_A_JobClass() || 4 == n_A_JobClass() || 45 == n_A_JOB && 0 != n_A_WeaponType) && (c.A_Arrow.value = StoN2(a.substr(22, 1))),
            ClickB_Item(StoN2(a.substr(23, 2))),
            c.A_Weapon_refine.value = StoN2(a.substr(25, 1)),
            c.A_weapon1_card1.value = StoN2(a.substr(26, 2)),
            c.A_weapon1_card2.value = StoN2(a.substr(28, 2)),
            c.A_weapon1_card3.value = StoN2(a.substr(30, 2)),
            c.A_weapon1_card4.value = StoN2(a.substr(32, 2)),
            n_Nitou ? (c.A_weapon2.value = StoN2(a.substr(34, 2)),
                c.A_Weapon2_refine.value = StoN2(a.substr(36, 1)),
                c.A_weapon2_card1.value = StoN2(a.substr(37, 2)),
                c.A_weapon2_card2.value = StoN2(a.substr(39, 2)),
                c.A_weapon2_card3.value = StoN2(a.substr(41, 2)),
                c.A_weapon2_card4.value = StoN2(a.substr(43, 2))) : (c.A_left.value = StoN2(a.substr(34, 2)),
                    c.A_LEFT_REFINE.value = StoN2(a.substr(36, 1)),
                    c.A_left_card.value = StoN2(a.substr(37, 2))),
            c.A_head1.value = StoN2(a.substr(45, 2)),
            c.A_head1_card.value = StoN2(a.substr(47, 2)),
            c.A_head2.value = StoN2(a.substr(49, 2)),
            c.A_head2_card.value = StoN2(a.substr(51, 2)),
            c.A_head3.value = StoN2(a.substr(53, 2)),
            c.A_body.value = StoN2(a.substr(55, 2)),
            c.A_body_card.value = StoN2(a.substr(57, 2)),
            c.A_shoulder.value = StoN2(a.substr(59, 2)),
            c.A_shoulder_card.value = StoN2(a.substr(61, 2)),
            c.A_shoes.value = StoN2(a.substr(63, 2)),
            c.A_shoes_card.value = StoN2(a.substr(65, 2)),
            c.A_acces1.value = StoN2(a.substr(67, 2)),
            c.A_acces1_card.value = StoN2(a.substr(69, 2)),
            c.A_acces2.value = StoN2(a.substr(71, 2)),
            c.A_acces2_card.value = StoN2(a.substr(73, 2)),
            c.A_HEAD_REFINE.value = StoN2(a.substr(75, 1)),
            c.A_BODY_REFINE.value = StoN2(a.substr(76, 1)),
            c.A_SHOULDER_REFINE.value = StoN2(a.substr(77, 1)),
            c.A_SHOES_REFINE.value = StoN2(a.substr(78, 1));
        var o = StoN2(a.substr(79, 1));
        if (c.A_adopted.checked = Math.floor(o / 16),
            4 > A) {
            var l = StoN2(a.substr(80, 1));
            if (12 == c.A_JOB.value || 26 == c.A_JOB.value) {
                for (var u = 0; 4 > u; u++) {
                    var r = document.getElementById("A_skill" + u);
                    r.value = StoN2(a.substr(81 + u, 1))
                }
                if (StoN2(a.substr(85, 1)) > 0) {
                    var r = document.getElementById("A_skill4");
                    r.value = 1
                }
                n_A_Buf2[7] = StoN2(a.substr(86, 1));
                for (var u = 5; l - 1 > u; u++) {
                    var r = document.getElementById("A_skill" + u);
                    r.value = StoN2(a.substr(82 + u, 1))
                }
            } else if (13 == c.A_JOB.value || 27 == c.A_JOB.value) {
                for (var u = 0; 8 > u; u++) {
                    var r = document.getElementById("A_skill" + u);
                    r.value = StoN2(a.substr(81 + u, 1))
                }
                n_A_Buf2[13] = StoN2(a.substr(89, 1)),
                    document.getElementById("A_skill8").value = StoN2(a.substr(90, 1)),
                    n_A_Buf2[15] = StoN2(a.substr(91, 1)),
                    document.getElementById("A_skill9").value = StoN2(a.substr(92, 1)),
                    n_A_Buf2[14] = StoN2(a.substr(93, 1)),
                    u += 12
            } else if (15 == c.A_JOB.value || 29 == c.A_JOB.value) {
                for (var u = 0; 3 > u; u++) {
                    var r = document.getElementById("A_skill" + u);
                    r.value = StoN2(a.substr(81 + u, 1))
                }
                n_A_Buf2[12] = StoN2(a.substr(84, 1));
                for (var u = 3; l - 1 > u; u++) {
                    var r = document.getElementById("A_skill" + u);
                    r.value = StoN2(a.substr(82 + u, 1))
                }
            } else
                for (var u = 0; l > u; u++) {
                    var r = document.getElementById("A_skill" + u);
                    r.value = StoN2(a.substr(81 + u, 1))
                }
            var S = 81 + l;
            if (1 == StoN2(a.substr(S, 1))) {
                n_A_Buf2[0] = StoN2(a.substr(S + 1, 1)),
                    n_A_Buf2[1] = StoN2(a.substr(S + 2, 1)),
                    n_A_Buf2[4] = StoN2(a.substr(S + 3, 1)),
                    n_A_Buf2[9] = StoN2(a.substr(S + 4, 1)),
                    n_A_Buf2[2] = Math.floor(StoN2(a.substr(S + 5, 1)) / 6),
                    n_A_Buf2[6] = StoN2(a.substr(S + 5, 1)) % 6,
                    n_A_Buf2[8] = Math.floor(StoN2(a.substr(S + 6, 1)) / 6),
                    n_A_Buf2[12] = StoN2(a.substr(S + 6, 1)) % 6,
                    n_A_Buf2[10] = Math.floor(StoN2(a.substr(S + 7, 1)) / 6),
                    n_A_Buf2[11] = StoN2(a.substr(S + 7, 1)) % 6;
                var o = StoN2(a.substr(S + 8, 1));
                n_A_Buf2[3] = Math.floor(o / 16),
                    n_A_Buf2[5] = Math.floor(o % 16 / 8),
                    n_A_Buf2[7] = Math.floor(o % 8 / 4),
                    n_A_Buf6[7] = Math.floor(o % 4 / 2),
                    n_A_Buf7[31] = Math.floor(o % 2 / 1),
                    S += 8,
                    12 != c.A_JOB.value && 26 != c.A_JOB.value || StoN2(a.substr(86, 1)) > 0 && (n_A_Buf2[7] = 1),
                    15 != c.A_JOB.value && 29 != c.A_JOB.value || StoN2(a.substr(84, 1)) > n_A_Buf2[12] && (n_A_Buf2[12] = StoN2(a.substr(84, 1)))
            }
            var i = S;
            if (S += 8,
                S += 1,
                1 == StoN2(a.substr(S, 1))) {
                n_B_IJYOU[0] = StoN2(a.substr(S + 1, 1)),
                    n_B_IJYOU[1] = Math.floor(StoN2(a.substr(S + 2, 1)) / 6),
                    n_B_IJYOU[18] = StoN2(a.substr(S + 2, 1)) % 6;
                var o = StoN2(a.substr(S + 3, 1));
                n_B_IJYOU[2] = Math.floor(o / 16),
                    n_B_IJYOU[3] = Math.floor(o % 16 / 8),
                    n_B_IJYOU[4] = Math.floor(o % 8 / 4),
                    n_B_IJYOU[5] = Math.floor(o % 4 / 2),
                    n_B_IJYOU[6] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 4, 1)),
                    n_B_IJYOU[7] = Math.floor(o / 16),
                    n_B_IJYOU[8] = Math.floor(o % 16 / 8),
                    n_B_IJYOU[9] = Math.floor(o % 8 / 4),
                    n_B_IJYOU[10] = Math.floor(o % 4 / 2),
                    n_B_IJYOU[19] = Math.floor(o % 2 / 1),
                    n_B_IJYOU[11] = StoN2(a.substr(S + 5, 1)),
                    n_B_IJYOU[12] = StoN2(a.substr(S + 6, 1)),
                    o = StoN2(a.substr(S + 7, 1)),
                    n_B_IJYOU[13] = Math.floor(o / 16),
                    n_B_IJYOU[14] = Math.floor(o % 16 / 8),
                    n_B_IJYOU[15] = Math.floor(o % 8 / 4),
                    n_B_IJYOU[16] = Math.floor(o % 4 / 2),
                    n_B_IJYOU[17] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 8, 1)),
                    n_B_IJYOU[20] = Math.floor(o / 16),
                    n_B_IJYOU[21] = Math.floor(o % 16 / 8),
                    n_B_IJYOU[22] = Math.floor(o % 8 / 4),
                    n_B_IJYOU[23] = Math.floor(StoN2(a.substr(S + 9, 1)) / 6),
                    n_B_IJYOU[24] = StoN2(a.substr(S + 9, 1)) % 6,
                    S += 9
            }
            if (S += 1,
                1 == StoN2(a.substr(S, 1))) {
                n_B_KYOUKA[0] = StoN2(a.substr(S + 1, 1));
                var o = StoN2(a.substr(S + 2, 1));
                n_B_KYOUKA[1] = Math.floor(o / 16),
                    n_B_KYOUKA[2] = Math.floor(o % 16 / 8),
                    n_B_KYOUKA[3] = Math.floor(o % 8 / 4),
                    n_B_KYOUKA[4] = Math.floor(o % 4 / 2),
                    n_B_KYOUKA[6] = StoN2(a.substr(S + 3, 2)),
                    n_B_KYOUKA[7] = Math.floor(StoN2(a.substr(S + 5, 1)) / 6),
                    n_B_KYOUKA[8] = StoN2(a.substr(S + 5, 1)) % 6,
                    o = StoN2(a.substr(S + 6, 1)),
                    n_B_KYOUKA[9] = Math.floor(o / 16),
                    S += 6
            }
            var s = [0, 0, 0, 0, 0];
            if (o = StoN2(a.substr(S + 1, 1)),
                s[0] = Math.floor(o / 16),
                s[1] = Math.floor(o % 16 / 8),
                s[2] = Math.floor(o % 8 / 4),
                s[3] = Math.floor(o % 4 / 2),
                s[4] = Math.floor(o % 2 / 1),
                S += 1,
                Buf3SW(0),
                s[0] && (n_A_Buf3[0] = StoN2(a.substr(S + 1, 1)),
                    n_A_Buf3[1] = StoN2(a.substr(S + 2, 1)),
                    n_A_Buf3[2] = StoN2(a.substr(S + 3, 1)),
                    n_A_Buf3[3] = StoN2(a.substr(S + 4, 1)),
                    n_A_Buf3[4] = StoN2(a.substr(S + 5, 1)),
                    n_A_Buf3[5] = StoN2(a.substr(S + 6, 1)),
                    n_A_Buf3[6] = StoN2(a.substr(S + 7, 1)),
                    n_A_Buf3[7] = Math.floor(StoN2(a.substr(S + 8, 1)) / 6),
                    n_A_Buf3[8] = StoN2(a.substr(S + 8, 1)) % 6,
                    n_A_Buf3[9] = Math.floor(StoN2(a.substr(S + 9, 1)) / 6),
                    n_A_Buf3[10] = StoN2(a.substr(S + 9, 1)) % 6,
                    n_A_Buf3[11] = Math.floor(StoN2(a.substr(S + 10, 1)) / 16),
                    n_A_Buf3[18] = Math.floor(StoN2(a.substr(S + 10, 1)) % 16 / 8),
                    n_A_Buf3[12] = StoN2(a.substr(S + 11, 2)),
                    n_A_Buf3[13] = StoN2(a.substr(S + 13, 2)),
                    n_A_Buf3[14] = StoN2(a.substr(S + 15, 2)),
                    n_A_Buf3[15] = StoN2(a.substr(S + 17, 2)),
                    n_A_Buf3[16] = StoN2(a.substr(S + 19, 2)),
                    n_A_Buf3[17] = StoN2(a.substr(S + 21, 2)),
                    n_A_Buf3[20] = StoN2(a.substr(S + 23, 2)),
                    n_A_Buf3[30] = StoN2(a.substr(S + 25, 1)),
                    n_A_Buf3[21] = StoN2(a.substr(S + 26, 2)),
                    n_A_Buf3[31] = StoN2(a.substr(S + 28, 1)),
                    n_A_Buf3[22] = StoN2(a.substr(S + 29, 2)),
                    n_A_Buf3[29] = StoN2(a.substr(S + 31, 2)),
                    n_A_Buf3[32] = StoN2(a.substr(S + 33, 1)),
                    n_A_Buf3[23] = StoN2(a.substr(S + 34, 2)),
                    n_A_Buf3[33] = StoN2(a.substr(S + 36, 1)),
                    n_A_Buf3[24] = StoN2(a.substr(S + 37, 2)),
                    n_A_Buf3[34] = StoN2(a.substr(S + 39, 1)),
                    n_A_Buf3[25] = StoN2(a.substr(S + 40, 2)),
                    n_A_Buf3[35] = StoN2(a.substr(S + 42, 1)),
                    n_A_Buf3[26] = StoN2(a.substr(S + 43, 2)),
                    n_A_Buf3[36] = StoN2(a.substr(S + 45, 1)),
                    S += 45),
                s[1]) {
                var o = StoN2(a.substr(S + 1, 1));
                n_A_Buf3[40] = Math.floor(o / 16),
                    n_A_Buf3[41] = Math.floor(StoN2(a.substr(S + 2, 1)) / 6),
                    n_A_Buf3[42] = StoN2(a.substr(S + 2, 1)) % 6,
                    n_A_Buf3[43] = Math.floor(StoN2(a.substr(S + 3, 1)) / 6),
                    n_A_Buf3[44] = StoN2(a.substr(S + 3, 1)) % 6,
                    S += 3
            }
            for (s[2] && (o = StoN2(a.substr(S + 1, 1)),
                n_A_Buf2[16] = Math.floor(o / 16),
                n_A_Buf2[17] = Math.floor(o % 16 / 8),
                n_A_Buf2[18] = Math.floor(o % 8 / 4),
                n_A_Buf2[19] = Math.floor(o % 4 / 2),
                n_A_Buf2[20] = Math.floor(o % 2 / 1),
                o = StoN2(a.substr(S + 2, 1)),
                n_A_Buf2[21] = Math.floor(o / 16),
                S += 2),
                s[3] && (n_A_Buf6[0] = Math.floor(StoN2(a.substr(S + 1, 1)) / 6),
                    n_A_Buf6[1] = StoN2(a.substr(S + 1, 1)) % 6,
                    n_A_Buf6[2] = Math.floor(StoN2(a.substr(S + 2, 1)) / 6),
                    n_A_Buf6[4] = StoN2(a.substr(S + 2, 1)) % 6,
                    n_A_Buf6[5] = Math.floor(StoN2(a.substr(S + 3, 1)) / 6),
                    n_A_Buf7[34] = StoN2(a.substr(S + 4, 1)),
                    o = StoN2(a.substr(S + 5, 1)),
                    n_A_Buf6[6] = Math.floor(o / 16),
                    S += 5),
                s[4] && (n_A_Buf7[3] = StoN2(a.substr(S + 1, 2)),
                    n_A_Buf7[4] = StoN2(a.substr(S + 3, 2)),
                    n_A_Buf7[5] = StoN2(a.substr(S + 5, 2)),
                    n_A_Buf7[6] = StoN2(a.substr(S + 7, 2)),
                    n_A_Buf7[7] = StoN2(a.substr(S + 9, 2)),
                    n_A_Buf7[8] = StoN2(a.substr(S + 11, 2)),
                    o = StoN2(a.substr(S + 13, 1)),
                    n_A_Buf7[0] = Math.floor(o / 16),
                    n_A_Buf7[1] = Math.floor(o % 16 / 8),
                    n_A_Buf7[2] = Math.floor(o % 8 / 4),
                    n_A_Buf7[9] = Math.floor(o % 4 / 2),
                    n_A_Buf7[10] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 14, 1)),
                    n_A_Buf7[11] = Math.floor(o / 16),
                    n_A_Buf7[12] = Math.floor(o % 16 / 8),
                    n_A_Buf7[13] = Math.floor(o % 8 / 4),
                    n_A_Buf7[14] = Math.floor(o % 4 / 2),
                    S += 14),
                u = 0; 55 >= u; u++)
                n_A_Buf9[u] = 0;
            for (n_A_Buf9[2] = 10,
                n_A_Buf9[4] = 20,
                n_A_Buf9[6] = 23,
                n_A_Buf9[10] = 10,
                n_A_Buf9[12] = 20,
                n_A_Buf9[14] = 23,
                n_Skill9SW = 0,
                u = 0; 55 >= u; u++)
                n_B_manual[u] = 0;
            n_Skill10SW = 0,
                c.Conf01.value = StoN2(a.substr(S + 1, 2)),
                S += 2,
                A >= 1 && (c.A_HSE.value = StoN2(a.substr(S + 1, 2)),
                    S += 2),
                A >= 2 && (c.A_HSE_HEAD1.value = StoN2(a.substr(S + 1, 2)),
                    S += 2),
                StCalc(1),
                ActiveSkillSetPlus(),
                S = i,
                c.A_ActiveSkill.value = StoN2(a.substr(S + 1, 2)),
                ClickActiveSkill(),
                c.A_ActiveSkillLV.value = StoN2(a.substr(S + 3, 1)),
                66 != n_A_ActiveSkill && 326 != n_A_ActiveSkill && 131 != n_A_ActiveSkill && 88 != n_A_ActiveSkill && 197 != n_A_ActiveSkill && 394 != n_A_ActiveSkill && 395 != n_A_ActiveSkill && 405 != n_A_ActiveSkill && 429 != n_A_ActiveSkill || (c.SkillSubNum.value = StoN2(a.substr(S + 4, 3))),
                c.B_Enemy.value = StoN2(a.substr(S + 7, 2))
        } else if (A >= 4) {
            c.A_HSE.value = StoN2(a.substr(80, 2)),
                c.A_HSE_HEAD1.value = StoN2(a.substr(82, 2));
            for (var l = StoN2(a.substr(88, 1)), u = 0; l > u; u++) {
                var r = document.getElementById("A_skill" + u);
                r.value = StoN2(a.substr(89 + u, 1))
            }
            var S = 89 + u;
            if (1 == StoN2(a.substr(S, 1))) {
                n_A_Buf2[0] = StoN2(a.substr(S + 1, 1)),
                    n_A_Buf2[1] = StoN2(a.substr(S + 2, 1)),
                    n_A_Buf2[4] = StoN2(a.substr(S + 3, 1)),
                    n_A_Buf2[9] = StoN2(a.substr(S + 4, 1)),
                    n_A_Buf2[13] = StoN2(a.substr(S + 5, 1)),
                    n_A_Buf2[14] = StoN2(a.substr(S + 6, 1)),
                    n_A_Buf2[2] = Math.floor(StoN2(a.substr(S + 7, 1)) / 6),
                    n_A_Buf2[6] = StoN2(a.substr(S + 7, 1)) % 6,
                    n_A_Buf2[10] = Math.floor(StoN2(a.substr(S + 8, 1)) / 6),
                    n_A_Buf2[11] = StoN2(a.substr(S + 8, 1)) % 6,
                    n_A_Buf2[12] = Math.floor(StoN2(a.substr(S + 9, 1)) / 6),
                    n_A_Buf2[15] = StoN2(a.substr(S + 9, 1)) % 6;
                var o = StoN2(a.substr(S + 10, 1));
                n_A_Buf2[3] = Math.floor(o / 16),
                    n_A_Buf2[5] = Math.floor(o % 16 / 8),
                    n_A_Buf2[7] = Math.floor(o % 8 / 4),
                    n_A_Buf2[8] = Math.floor(o % 4 / 2),
                    n_A_Buf2[16] = Math.floor(o % 2 / 1);
                var o = StoN2(a.substr(S + 11, 1));
                n_A_Buf2[17] = Math.floor(o / 16),
                    n_A_Buf2[18] = Math.floor(o % 16 / 8),
                    n_A_Buf2[19] = Math.floor(o % 8 / 4),
                    n_A_Buf2[20] = Math.floor(o % 4 / 2),
                    n_A_Buf2[21] = Math.floor(o % 2 / 1),
                    S += 11
            }
            if (S += 1,
                1 == StoN2(a.substr(S, 1))) {
                n_B_IJYOU[0] = StoN2(a.substr(S + 1, 1)),
                    n_B_IJYOU[1] = Math.floor(StoN2(a.substr(S + 2, 1)) / 6),
                    n_B_IJYOU[18] = StoN2(a.substr(S + 2, 1)) % 6;
                var o = StoN2(a.substr(S + 3, 1));
                n_B_IJYOU[2] = Math.floor(o / 16),
                    n_B_IJYOU[3] = Math.floor(o % 16 / 8),
                    n_B_IJYOU[4] = Math.floor(o % 8 / 4),
                    n_B_IJYOU[5] = Math.floor(o % 4 / 2),
                    n_B_IJYOU[6] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 4, 1)),
                    n_B_IJYOU[7] = Math.floor(o / 16),
                    n_B_IJYOU[8] = Math.floor(o % 16 / 8),
                    n_B_IJYOU[9] = Math.floor(o % 8 / 4),
                    n_B_IJYOU[10] = Math.floor(o % 4 / 2),
                    n_B_IJYOU[19] = Math.floor(o % 2 / 1),
                    n_B_IJYOU[11] = StoN2(a.substr(S + 5, 1)),
                    n_B_IJYOU[12] = StoN2(a.substr(S + 6, 1)),
                    o = StoN2(a.substr(S + 7, 1)),
                    n_B_IJYOU[13] = Math.floor(o / 16),
                    n_B_IJYOU[14] = Math.floor(o % 16 / 8),
                    n_B_IJYOU[15] = Math.floor(o % 8 / 4),
                    n_B_IJYOU[16] = Math.floor(o % 4 / 2),
                    n_B_IJYOU[17] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 8, 1)),
                    n_B_IJYOU[20] = Math.floor(o / 16),
                    n_B_IJYOU[21] = Math.floor(o % 16 / 8),
                    n_B_IJYOU[22] = Math.floor(o % 8 / 4),
                    n_B_IJYOU[23] = Math.floor(StoN2(a.substr(S + 9, 1)) / 6),
                    n_B_IJYOU[24] = StoN2(a.substr(S + 9, 1)) % 6,
                    S += 9
            }
            if (S += 1,
                1 == StoN2(a.substr(S, 1))) {
                n_B_KYOUKA[0] = StoN2(a.substr(S + 1, 1));
                var o = StoN2(a.substr(S + 2, 1));
                n_B_KYOUKA[1] = Math.floor(o / 16),
                    n_B_KYOUKA[2] = Math.floor(o % 16 / 8),
                    n_B_KYOUKA[3] = Math.floor(o % 8 / 4),
                    n_B_KYOUKA[4] = Math.floor(o % 4 / 2),
                    n_B_KYOUKA[9] = Math.floor(o % 2 / 1),
                    n_B_KYOUKA[6] = StoN2(a.substr(S + 3, 2)),
                    n_B_KYOUKA[7] = Math.floor(StoN2(a.substr(S + 5, 1)) / 6),
                    n_B_KYOUKA[8] = StoN2(a.substr(S + 5, 1)) % 6,
                    n_B_KYOUKA[5] = StoN2(a.substr(S + 6, 1)),
                    A >= 5 && (n_B_KYOUKA[10] = StoN2(a.substr(S + 7, 1)),
                        n_B_KYOUKA[11] = StoN2(a.substr(S + 8, 1)),
                        n_B_KYOUKA[12] = StoN2(a.substr(S + 9, 1)),
                        n_B_KYOUKA[13] = StoN2(a.substr(S + 10, 1)),
                        n_B_KYOUKA[14] = StoN2(a.substr(S + 11, 1)),
                        S += 5),
                    S += 6
            }
            var s = [0, 0, 0, 0, 0];
            if (o = StoN2(a.substr(S + 1, 1)),
                s[0] = Math.floor(o / 16),
                s[1] = Math.floor(o % 16 / 8),
                s[2] = Math.floor(o % 8 / 4),
                s[3] = Math.floor(o % 4 / 2),
                s[4] = Math.floor(o % 2 / 1),
                S += 1,
                Buf3SW(0),
                s[0] && (n_A_Buf3[0] = StoN2(a.substr(S + 1, 1)),
                    n_A_Buf3[1] = StoN2(a.substr(S + 2, 1)),
                    n_A_Buf3[2] = StoN2(a.substr(S + 3, 1)),
                    n_A_Buf3[3] = StoN2(a.substr(S + 4, 1)),
                    n_A_Buf3[4] = StoN2(a.substr(S + 5, 1)),
                    n_A_Buf3[5] = StoN2(a.substr(S + 6, 1)),
                    n_A_Buf3[6] = StoN2(a.substr(S + 7, 1)),
                    n_A_Buf3[7] = Math.floor(StoN2(a.substr(S + 8, 1)) / 6),
                    n_A_Buf3[8] = StoN2(a.substr(S + 8, 1)) % 6,
                    n_A_Buf3[9] = Math.floor(StoN2(a.substr(S + 9, 1)) / 6),
                    n_A_Buf3[10] = StoN2(a.substr(S + 9, 1)) % 6,
                    n_A_Buf3[11] = Math.floor(StoN2(a.substr(S + 10, 1)) / 16),
                    n_A_Buf3[18] = Math.floor(StoN2(a.substr(S + 10, 1)) % 16 / 8),
                    n_A_Buf3[12] = StoN2(a.substr(S + 11, 2)),
                    n_A_Buf3[13] = StoN2(a.substr(S + 13, 2)),
                    n_A_Buf3[14] = StoN2(a.substr(S + 15, 2)),
                    n_A_Buf3[15] = StoN2(a.substr(S + 17, 2)),
                    n_A_Buf3[16] = StoN2(a.substr(S + 19, 2)),
                    n_A_Buf3[17] = StoN2(a.substr(S + 21, 2)),
                    n_A_Buf3[20] = StoN2(a.substr(S + 23, 2)),
                    n_A_Buf3[30] = StoN2(a.substr(S + 25, 1)),
                    n_A_Buf3[21] = StoN2(a.substr(S + 26, 2)),
                    n_A_Buf3[31] = StoN2(a.substr(S + 28, 1)),
                    n_A_Buf3[22] = StoN2(a.substr(S + 29, 2)),
                    n_A_Buf3[29] = StoN2(a.substr(S + 31, 2)),
                    n_A_Buf3[32] = StoN2(a.substr(S + 33, 1)),
                    n_A_Buf3[23] = StoN2(a.substr(S + 34, 2)),
                    n_A_Buf3[33] = StoN2(a.substr(S + 36, 1)),
                    n_A_Buf3[24] = StoN2(a.substr(S + 37, 2)),
                    n_A_Buf3[34] = StoN2(a.substr(S + 39, 1)),
                    n_A_Buf3[25] = StoN2(a.substr(S + 40, 2)),
                    n_A_Buf3[35] = StoN2(a.substr(S + 42, 1)),
                    n_A_Buf3[26] = StoN2(a.substr(S + 43, 2)),
                    n_A_Buf3[36] = StoN2(a.substr(S + 45, 1)),
                    S += 45),
                s[1]) {
                var o = StoN2(a.substr(S + 1, 1));
                n_A_Buf3[40] = Math.floor(o / 16),
                    n_A_Buf3[41] = Math.floor(StoN2(a.substr(S + 2, 1)) / 6),
                    n_A_Buf3[42] = StoN2(a.substr(S + 2, 1)) % 6,
                    n_A_Buf3[43] = Math.floor(StoN2(a.substr(S + 3, 1)) / 6),
                    n_A_Buf3[44] = StoN2(a.substr(S + 3, 1)) % 6,
                    S += 3
            }
            if (s[3] && (n_A_Buf6[5] = StoN2(a.substr(S + 1, 1)),
                n_A_Buf6[20] = StoN2(a.substr(S + 2, 1)),
                n_A_Buf6[0] = Math.floor(StoN2(a.substr(S + 3, 1)) / 6),
                n_A_Buf6[1] = StoN2(a.substr(S + 3, 1)) % 6,
                n_A_Buf6[2] = Math.floor(StoN2(a.substr(S + 4, 1)) / 6),
                n_A_Buf6[4] = StoN2(a.substr(S + 4, 1)) % 6,
                n_A_Buf6[18] = Math.floor(StoN2(a.substr(S + 5, 1)) / 6),
                n_A_Buf6[19] = StoN2(a.substr(S + 5, 1)) % 6,
                o = StoN2(a.substr(S + 6, 1)),
                n_A_Buf6[3] = Math.floor(o / 16),
                n_A_Buf6[6] = Math.floor(o % 16 / 8),
                n_A_Buf6[7] = Math.floor(o % 8 / 4),
                n_A_Buf6[8] = Math.floor(o % 4 / 2),
                n_A_Buf6[9] = Math.floor(o % 2 / 1),
                o = StoN2(a.substr(S + 7, 1)),
                n_A_Buf6[10] = Math.floor(o / 16),
                n_A_Buf6[11] = Math.floor(o % 16 / 8),
                n_A_Buf6[12] = Math.floor(o % 8 / 4),
                n_A_Buf6[13] = Math.floor(o % 4 / 2),
                n_A_Buf6[14] = Math.floor(o % 2 / 1),
                o = StoN2(a.substr(S + 8, 1)),
                n_A_Buf6[15] = Math.floor(o / 16),
                n_A_Buf6[16] = Math.floor(o % 16 / 8),
                n_A_Buf6[17] = Math.floor(o % 8 / 4),
                n_A_Buf6[21] = Math.floor(o % 4 / 2),
                n_A_Buf6[22] = Math.floor(o % 2 / 1),
                S += 8),
                s[4] && (n_A_Buf7[3] = StoN2(a.substr(S + 1, 1)),
                    n_A_Buf7[4] = StoN2(a.substr(S + 2, 1)),
                    n_A_Buf7[5] = StoN2(a.substr(S + 3, 1)),
                    n_A_Buf7[6] = StoN2(a.substr(S + 4, 1)),
                    n_A_Buf7[7] = StoN2(a.substr(S + 5, 1)),
                    n_A_Buf7[8] = StoN2(a.substr(S + 6, 1)),
                    n_A_Buf7[35] = Math.floor(StoN2(a.substr(S + 7, 1)) / 6),
                    n_A_Buf7[42] = StoN2(a.substr(S + 7, 1)) % 6,
                    n_A_Buf7[39] = Math.floor(StoN2(a.substr(S + 8, 1)) / 6),
                    n_A_Buf7[40] = StoN2(a.substr(S + 8, 1)) % 6,
                    o = StoN2(a.substr(S + 9, 1)),
                    n_A_Buf7[0] = Math.floor(o / 16),
                    n_A_Buf7[1] = Math.floor(o % 16 / 8),
                    n_A_Buf7[2] = Math.floor(o % 8 / 4),
                    n_A_Buf7[9] = Math.floor(o % 4 / 2),
                    n_A_Buf7[10] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 10, 1)),
                    n_A_Buf7[11] = Math.floor(o / 16),
                    n_A_Buf7[12] = Math.floor(o % 16 / 8),
                    n_A_Buf7[13] = Math.floor(o % 8 / 4),
                    n_A_Buf7[14] = Math.floor(o % 4 / 2),
                    o = StoN2(a.substr(S + 11, 1)),
                    n_A_Buf7[16] = Math.floor(o / 16),
                    n_A_Buf7[17] = Math.floor(o % 16 / 8),
                    n_A_Buf7[18] = Math.floor(o % 8 / 4),
                    n_A_Buf7[19] = Math.floor(o % 4 / 2),
                    n_A_Buf7[20] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 12, 1)),
                    n_A_Buf7[21] = Math.floor(o / 16),
                    n_A_Buf7[22] = Math.floor(o % 16 / 8),
                    n_A_Buf7[23] = Math.floor(o % 8 / 4),
                    n_A_Buf7[24] = Math.floor(o % 4 / 2),
                    n_A_Buf7[25] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 13, 1)),
                    n_A_Buf7[26] = Math.floor(o / 16),
                    n_A_Buf7[27] = Math.floor(o % 16 / 8),
                    n_A_Buf7[28] = Math.floor(o % 8 / 4),
                    n_A_Buf7[29] = Math.floor(o % 4 / 2),
                    n_A_Buf7[30] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 14, 1)),
                    n_A_Buf7[31] = Math.floor(o / 16),
                    n_A_Buf7[32] = Math.floor(o % 16 / 8),
                    n_A_Buf7[33] = Math.floor(o % 8 / 4),
                    n_A_Buf7[34] = Math.floor(o % 4 / 2),
                    n_A_Buf7[36] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 15, 1)),
                    n_A_Buf7[37] = Math.floor(o / 16),
                    n_A_Buf7[38] = Math.floor(o % 16 / 8),
                    n_A_Buf7[41] = Math.floor(o % 8 / 4),
                    n_A_Buf7[43] = Math.floor(o % 4 / 2),
                    n_A_Buf7[44] = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 16, 1)),
                    n_A_Buf7[45] = Math.floor(o / 16),
                    n_A_Buf7[46] = Math.floor(o % 16 / 8),
                    n_A_Buf7[47] = Math.floor(o % 8 / 4),
                    n_A_Buf7[48] = Math.floor(o % 4 / 2),
                    n_A_Buf7[49] = Math.floor(o % 2 / 1),
                    A >= 6 && (o = StoN2(a.substr(S + 17, 1)),
                        n_A_Buf7[50] = Math.floor(o / 16),
                        n_A_Buf7[51] = Math.floor(o % 16 / 8),
                        n_A_Buf7[52] = Math.floor(o % 8 / 4),
                        n_A_Buf7[53] = Math.floor(o % 4 / 2),
                        n_A_Buf7[54] = Math.floor(o % 2 / 1),
                        n_A_Buf7[55] = StoN2(a.substr(S + 18, 1)),
                        o = StoN2(a.substr(S + 19, 1)),
                        n_A_Buf7[56] = Math.floor(o / 16),
                        n_A_Buf7[57] = Math.floor(o % 16 / 8),
                        n_A_Buf7[58] = Math.floor(o % 8 / 4),
                        n_A_Buf7[59] = Math.floor(o % 4 / 2),
                        n_A_Buf7[60] = Math.floor(o % 2 / 1),
                        S += 3),
                    S += 16),
                S += 1,
                1 == StoN2(a.substr(S, 1))) {
                n_A_Buf8[0] = StoN2(a.substr(S + 1, 2)),
                    n_A_Buf8[3] = StoN2(a.substr(S + 3, 2)),
                    n_A_Buf8[7] = StoN2(a.substr(S + 5, 2)),
                    n_A_Buf8[8] = StoN2(a.substr(S + 7, 2)),
                    n_A_Buf8[9] = StoN2(a.substr(S + 9, 2)),
                    n_A_Buf8[10] = StoN2(a.substr(S + 11, 2)),
                    n_A_Buf8[11] = StoN2(a.substr(S + 13, 2)),
                    n_A_Buf8[5] = StoN2(a.substr(S + 15, 1)),
                    n_A_Buf8[6] = StoN2(a.substr(S + 16, 1)),
                    n_A_Buf8[1] = Math.floor(StoN2(a.substr(S + 17, 1)) / 6);
                var o = StoN2(a.substr(S + 18, 1));
                n_A_Buf8[2] = Math.floor(o / 16),
                    S += 18
            }
            if (A >= 6) {
                if (S += 1,
                    1 == StoN2(a.substr(S, 1)))
                    if (n_A_Buf9[0] = StoN2(a.substr(S + 1, 1)),
                        n_A_Buf9[1] = StoN2(a.substr(S + 2, 2)),
                        n_A_Buf9[2] = StoN2(a.substr(S + 4, 1)),
                        n_A_Buf9[3] = StoN2(a.substr(S + 5, 2)),
                        n_A_Buf9[4] = StoN2(a.substr(S + 7, 1)),
                        n_A_Buf9[5] = StoN2(a.substr(S + 8, 2)),
                        n_A_Buf9[6] = StoN2(a.substr(S + 10, 1)),
                        n_A_Buf9[7] = StoN2(a.substr(S + 11, 2)),
                        n_A_Buf9[8] = StoN2(a.substr(S + 13, 1)),
                        n_A_Buf9[9] = StoN2(a.substr(S + 14, 2)),
                        n_A_Buf9[10] = StoN2(a.substr(S + 16, 1)),
                        n_A_Buf9[11] = StoN2(a.substr(S + 17, 2)),
                        n_A_Buf9[12] = StoN2(a.substr(S + 19, 1)),
                        n_A_Buf9[13] = StoN2(a.substr(S + 20, 2)),
                        n_A_Buf9[14] = StoN2(a.substr(S + 22, 1)),
                        n_A_Buf9[15] = StoN2(a.substr(S + 23, 2)),
                        n_A_Buf9[16] = StoN2(a.substr(S + 25, 1)),
                        n_A_Buf9[17] = StoN2(a.substr(S + 26, 2)),
                        n_A_Buf9[18] = StoN2(a.substr(S + 28, 1)),
                        n_A_Buf9[19] = StoN2(a.substr(S + 29, 2)),
                        n_A_Buf9[20] = StoN2(a.substr(S + 31, 1)),
                        n_A_Buf9[21] = StoN2(a.substr(S + 32, 2)),
                        n_A_Buf9[22] = StoN2(a.substr(S + 34, 1)),
                        n_A_Buf9[23] = StoN2(a.substr(S + 35, 2)),
                        n_A_Buf9[24] = StoN2(a.substr(S + 37, 1)),
                        n_A_Buf9[25] = StoN2(a.substr(S + 38, 2)),
                        n_A_Buf9[26] = StoN2(a.substr(S + 40, 1)),
                        n_A_Buf9[27] = StoN2(a.substr(S + 41, 2)),
                        n_A_Buf9[28] = StoN2(a.substr(S + 43, 1)),
                        n_A_Buf9[29] = StoN2(a.substr(S + 44, 2)),
                        n_A_Buf9[30] = StoN2(a.substr(S + 46, 3)),
                        A >= 7) {
                        for (u = 31; 59 >= u; u++)
                            n_A_Buf9[u] = StoN2(a.substr(S - 13 + 2 * u, 2));
                        S += 106
                    } else {
                        for (u = 31; 55 >= u; u++)
                            n_A_Buf9[u] = StoN2(a.substr(S - 13 + 2 * u, 2));
                        S += 98
                    }
                S += 1,
                    1 == StoN2(a.substr(S, 1)) && (n_B_manual[1] = StoN2(a.substr(S + 1, 2)),
                        n_B_manual[2] = StoN2(a.substr(S + 3, 1)),
                        n_B_manual[3] = StoN2(a.substr(S + 4, 2)),
                        n_B_manual[4] = StoN2(a.substr(S + 6, 1)),
                        n_B_manual[5] = StoN2(a.substr(S + 7, 2)),
                        n_B_manual[7] = StoN2(a.substr(S + 9, 2)),
                        n_B_manual[9] = StoN2(a.substr(S + 11, 2)),
                        n_B_manual[21] = StoN2(a.substr(S + 13, 2)),
                        n_B_manual[30] = StoN2(a.substr(S + 15, 3)),
                        n_B_manual[31] = StoN2(a.substr(S + 18, 2)),
                        n_B_manual[34] = StoN2(a.substr(S + 20, 2)),
                        n_B_manual[35] = StoN2(a.substr(S + 22, 2)),
                        n_B_manual[36] = StoN2(a.substr(S + 24, 2)),
                        n_B_manual[37] = StoN2(a.substr(S + 26, 2)),
                        n_B_manual[38] = StoN2(a.substr(S + 28, 2)),
                        n_B_manual[39] = StoN2(a.substr(S + 30, 2)),
                        n_B_manual[40] = StoN2(a.substr(S + 32, 3)),
                        n_B_manual[41] = StoN2(a.substr(S + 35, 2)),
                        n_B_manual[42] = StoN2(a.substr(S + 37, 3)),
                        n_B_manual[43] = StoN2(a.substr(S + 40, 3)),
                        n_B_manual[44] = StoN2(a.substr(S + 43, 2)),
                        n_B_manual[48] = StoN2(a.substr(S + 45, 2)),
                        n_B_manual[49] = StoN2(a.substr(S + 47, 2)),
                        n_B_manual[50] = StoN2(a.substr(S + 49, 2)),
                        n_B_manual[51] = StoN2(a.substr(S + 51, 2)),
                        n_B_manual[52] = StoN2(a.substr(S + 53, 2)),
                        n_B_manual[53] = StoN2(a.substr(S + 55, 3)),
                        n_B_manual[54] = StoN2(a.substr(S + 58, 2)),
                        n_B_manual[55] = StoN2(a.substr(S + 60, 2)),
                        S += 61)
            }
            c.Conf01.value = StoN2(a.substr(S + 1, 2)),
                c.B_num.value = StoN2(a.substr(S + 3, 1)),
                c.A8_Skill14.value = StoN2(a.substr(S + 4, 1)),
                c.A8_Skill15.value = StoN2(a.substr(S + 5, 2));
            var o = StoN2(a.substr(S + 7, 1));
            StCalc(1),
                ActiveSkillSetPlus(),
                c.A_ActiveSkill.value = StoN2(a.substr(S + 8, 2)),
                ClickActiveSkill(),
                c.A_ActiveSkillLV.value = StoN2(a.substr(S + 10, 1)),
                66 != n_A_ActiveSkill && 326 != n_A_ActiveSkill && 131 != n_A_ActiveSkill && 88 != n_A_ActiveSkill && 197 != n_A_ActiveSkill && 394 != n_A_ActiveSkill && 395 != n_A_ActiveSkill && 405 != n_A_ActiveSkill && 429 != n_A_ActiveSkill || (c.SkillSubNum.value = StoN2(a.substr(S + 11, 3)));
            for (var f = 0, E = 0; 14 >= E; E++)
                if (441 == m_JobBuff[n_A_JOB][E]) {
                    if (f = c.A_skill6.value,
                        f && (51 == n_A_ActiveSkill || 54 == n_A_ActiveSkill || 56 == n_A_ActiveSkill || 540 == n_A_ActiveSkill || 541 == n_A_ActiveSkill || 542 == n_A_ActiveSkill)) {
                        var d = 1 * f + 3;
                        myInnerHtml("AASkill", 'Double Bolt chance: <select name="SkillSubNum" onChange="calc()"></select>', 0),
                            c.SkillSubNum.options[0] = new Option("No chance (0%)", 0),
                            c.SkillSubNum.options[1] = new Option("Average chance (" + 10 * d + "%)", d),
                            c.SkillSubNum.options[2] = new Option("Max chance (100%)", 10),
                            c.SkillSubNum.value = StoN2(a.substr(S + 11, 3))
                    }
                    break
                }
            selectedMonster[0] = StoN2(a.substr(S + 14, 2)),
                c.B_Enemy.value = StoN2(a.substr(S + 14, 2)),
                calc(),
                Bskill(),
                c.B_AtkSkill.value = StoN2(a.substr(S + 16, 2)),
                BClickAtkSkill(),
                n_B_AtkSkill = 1 * c.B_AtkSkill.value,
                444 != n_B_AtkSkill && 445 != n_B_AtkSkill && 125 != n_B_AtkSkill && 131 != n_B_AtkSkill || (c.BSkillSubNum.value = StoN2(a.substr(S + 18, 3))),
                A >= 6 && (c.B_AtkRange.value = StoN2(a.substr(S + 21, 1)),
                    c.B_AtkElem.value = StoN2(a.substr(S + 22, 1)),
                    c.theme.value = StoN2(a.substr(S + 23, 1)),
                    c.server.value = StoN2(a.substr(S + 24, 1)),
                    o = StoN2(a.substr(S + 25, 1)),
                    c.autocalc.checked = Math.floor(o / 16),
                    c.all_dmgSkills.checked = Math.floor(o % 16 / 8),
                    c.restrict_jobequip.checked = Math.floor(o % 8 / 4),
                    c.restrict_lvlequip.checked = Math.floor(o % 4 / 2),
                    c.restrict_equipslot.checked = Math.floor(o % 2 / 1),
                    o = StoN2(a.substr(S + 26, 1)),
                    c.restrict_cardslot.checked = Math.floor(o / 16),
                    c.all_card.checked = Math.floor(o % 16 / 8))
        }
        refreshFields(),
            SRV = 1 * c.server.value,
            calc(),
            themes()
    }
}
function refreshFields() {
    ClickB_Item("SW"),
        IjyouSW(n_IjyouSW),
        EnemyKyoukaSW(n_KyoukaSW),
        BufSW(n_SkillSW),
        Buf3SW(n_Skill3SW),
        Buf4SW(n_Skill4SW),
        Buf6SW(n_Skill6SW),
        Buf7SW(n_Skill7SW),
        Buf8SW(n_Skill8SW),
        Buf9SW(n_Skill9SW),
        Buf10SW(n_Skill10SW)
}
for (var c = document.calcForm, i = 1; 22 >= i; i++)
    c.B_num.options[i - 1] = new Option(i, i - 1);
for (var i = 1; 20 >= i; i++)
    c.A8_Skill15.options[i] = new Option(5 * i, i);
for (w_ASSP0bk = new Array,
    i = 0; 20 > i; i++)
    w_ASSP0bk[i] = 999;
for (wESx = new Array,
    i = 0; i <= EnemyNum; i++)
    wESx[i] = new Array;
var nMANUKU = [524, 527, 528, 530, 531, 534, 541, 588, 591, 592, 594, 595, 598]
    , nSUPURE = [525, 526, 529, 532, 533, 537, 589, 590, 593, 596, 597];
for (n_NtoS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    n_NtoS2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    EnName = ["Neutral", "Water", "Earth", "Fire", "Wind", "Poison", "Holy", "Shadow", "Ghost", "Undead"],
    i = 0; 9 >= i; i++)
    document.calcForm.A_Weapon_element.options[i] = new Option(EnName[i], i),
        document.calcForm.B_AtkElem.options[i] = new Option(EnName[i], i);
for (document.calcForm.B_AtkElem.options[i] = new Option("(unchanged)", 10),
    m_CardShort = [["(Card Shortcuts)", 0, 0, 0, 0], ["Remove All Cards", 1e4, 0], ["Remove Weapon Cards", 0, 0, 0, 0], ["+40% [2 Race Card]", 1, 1, 0, 0], ["+60% [3 Race Card]", 1, 1, 1, 0], ["+80% [4 Race Card]", 1, 1, 1, 1], ["+61% [2 Race + 1 Size Cards]", 1, 1, 3, 0], ["+68% [2 Race + 1 Element Cards]", 1, 1, 2, 0], ["+84% [3 Race + 1 Size Cards]", 1, 1, 1, 3], ["+96% [2 Race + 2 Element Cards]", 1, 1, 2, 2], ["+110% [2 AK + 2 Race Cards]", 31, 31, 1, 1], ["+110% [3 AK + 1 Race Cards]", 31, 31, 31, 1], ["+110% [3 AK + 1 Element Cards]", 31, 31, 31, 2], ["2 Size Cards", 3, 3, 0, 0], ["3 Size Cards", 3, 3, 3, 0], ["4 Size Cards", 3, 3, 3, 3], ["1 Elemental Stone + 1 Star Crumb", 0, 106, 0, 0], ["1 Elemental Stone + 2 Star Crumbs", 0, 106, 106, 0], ["3 Star Crumbs", 106, 106, 106, 0], ["+40 ATK [2 Andre Cards]", 11, 11, 0, 0], ["+60 ATK [3 Andre Cards]", 11, 11, 11, 0], ["+80 ATK [4 Andre Cards]", 11, 11, 11, 11], ["+60 ATK [2 Zipper Bear Cards]", 326, 326, 0, 0], ["+90 ATK [3 Zipper Bear Cards]", 326, 326, 326, 0], ["+120 ATK [4 Zipper Bear Cards]", 326, 326, 326, 326], ["+18 CRIT [2 Soldier Skeleton Cards]", 41, 41, 0, 0], ["+27 CRIT [3 Soldier Skeleton Cards]", 41, 41, 41, 0], ["+36 CRIT [4 Soldier Skeleton Cards]", 41, 41, 41, 41], ["+40 HIT [2 Mummy Cards]", 40, 40, 0, 0], ["+60 HIT [3 Mummy Cards]", 40, 40, 40, 0], ["+80 HIT [4 Mummy Cards]", 40, 40, 40, 40], ["+60% [2 Orc Lady Cards]", 252, 252, 0, 0], ["+92% [2 Orc Lady + 1 Hydra Cards]", 252, 252, 13, 0], ["+128% [3 Orc Lady + 1 Hydra Cards]", 252, 252, 252, 13], ["+20% [2 Archer Skeleton Cards]", 107, 107, 0, 0], ["+30% [3 Archer Skeleton Cards]", 107, 107, 107, 0], ["+40% [4 Archer Skeleton Cards]", 107, 107, 107, 107], ["2 Fabre Cards", 4, 4, 0, 0], ["3 Fabre Cards", 4, 4, 4, 0], ["4 Fabre Cards", 4, 4, 4, 4], ["2 Drops Cards", 5, 5, 0, 0], ["3 Drops Cards", 5, 5, 5, 0], ["4 Drops Cards", 5, 5, 5, 5], ["+50% [2 Abysmal Knight Cards]", 31, 31, 0, 0], ["+75% [3 Abysmal Knight Cards]", 31, 31, 31, 0], ["+100% [4 Abysmal Knight Cards]", 31, 31, 31, 31], ["2 Crit Dmg +10%, CRIT +7 Cards", 156, 156, 0, 0], ["3 Crit Dmg +10%, CRIT +7 Cards", 156, 156, 156, 0], ["4 Crit Dmg +10%, CRIT +7 Cards", 156, 156, 156, 156], ["2 Cecil Damon Cards", 160, 160, 0, 0], ["3 Cecil Damon Cards", 160, 160, 160, 0], ["4 Cecil Damon Cards", 160, 160, 160, 160], ["Swordman Set", 1e4, 223, 347, 0, 317, 0, 362, 354, 0], ["Thief Set", 1e4, 233, 0, 0, 0, 295, 391, 395, 260], ["Acolyte Set", 1e4, 253, 383, 307, 301, 0, 0, 270, 0], ["Archer Set", 1e4, 279, 0, 0, 224, 340, 351, 230, 0], ["Magician Set", 1e4, 0, 337, 358, 220, 346, 379, 350, 0], ["Merchant Set", 1e4, 326, 376, 0, 281, 0, 388, 216, 0], ["Crusader Set", 1e4, 0, 347, 0, 190, 0, 362, 354, 0], ["Rogue Set", 1e4, 0, 113, 0, 0, 295, 391, 260, 413], ["Monk Set", 1e4, 253, 383, 0, 181, 0, 0, 270, 0], ["Bard/Dancer Set", 1e4, 279, 0, 0, 224, 340, 408, 230, 0], ["Sage Set", 1e4, 0, 337, 0, 193, 346, 379, 350, 0], ["Alchemist Set", 1e4, 326, 175, 0, 281, 0, 388, 104, 0], ["Test (for now)", 0, 0, 0, 0]],
    i = 0; 63 >= i; i++)
    document.calcForm.A_cardshort.options[i] = new Option(m_CardShort[i][0], i);
var HSEname = ["STR", "AGI", "VIT", "INT", "DEX", "LUK"];
document.calcForm.A_HSE.options[0] = new Option("(Enchant)", 0);
var iHSE = 1;
for (i = 0; 5 >= i; i++)
    for (var j = 1; 3 >= j; j++)
        document.calcForm.A_HSE.options[iHSE] = new Option(HSEname[i] + "+" + j, 10 * i + j),
            iHSE++;
document.calcForm.A_HSE_HEAD1.options[0] = new Option("(Headgear Hidden Slot Enchant)", 0);
var iHSE = 1;
for (i = 0; 5 >= i; i++)
    for (var j = 1; 3 >= j; j++)
        document.calcForm.A_HSE_HEAD1.options[iHSE] = new Option(HSEname[i] + "+" + j, 10 * i + j),
            iHSE++;
for (n_A_Buf2 = new Array,
    i = 0; 21 >= i; i++)
    n_A_Buf2[i] = 0;
for (n_A_Buf3 = new Array,
    i = 0; 45 >= i; i++)
    n_A_Buf3[i] = 0;
for (n_A_Buf6 = new Array,
    i = 0; 23 >= i; i++)
    n_A_Buf6[i] = 0;
for (n_A_Buf7 = new Array,
    i = 0; 60 >= i; i++)
    n_A_Buf7[i] = 0;
for (n_A_Buf8 = new Array,
    i = 0; 15 >= i; i++)
    n_A_Buf8[i] = 0;
for (n_A_Buf9 = new Array,
    i = 0; 59 >= i; i++)
    n_A_Buf9[i] = 0;
for (n_A_Buf9[2] = 10,
    n_A_Buf9[4] = 20,
    n_A_Buf9[6] = 23,
    n_A_Buf9[10] = 10,
    n_A_Buf9[12] = 20,
    n_A_Buf9[14] = 23,
    n_B_manual = new Array,
    i = 0; 55 >= i; i++)
    n_B_manual[i] = 0;
for (n_A_IJYOU = new Array,
    i = 0; 3 >= i; i++)
    n_A_IJYOU[i] = 0;
for (n_B_IJYOU = new Array,
    i = 0; 24 >= i; i++)
    n_B_IJYOU[i] = 0;
for (n_B_KYOUKA = new Array,
    i = 0; 14 >= i; i++)
    n_B_KYOUKA[i] = 0;
for (n_A_Equip = new Array,
    i = 0; 20 >= i; i++)
    n_A_Equip[i] = 0;
for (n_A_card = new Array,
    i = 0; 25 >= i; i++)
    n_A_card[i] = 0;
for (tPlusTaiseiSyokia(),
    i = 0; i < m_TempEffect.length; i++)
    if (1 == m_TempEffect[i][3]) {
        var str = "<B>(Special Effect: [" + m_TempEffect[i][2] + "] can be activated under 'Additional Effects' at 'BUFF, ITEMS AND OTHER STUFF')</B>";
        0 == m_Item[m_TempEffect[i][4]][10] ? m_Item[m_TempEffect[i][4]][10] = str : m_Item[m_TempEffect[i][4]][10] += "<BR>" + str
    }
for (i = 0; i < m_TempEffect.length; i++)
    if (2 == m_TempEffect[i][3]) {
        var str = "<B>(Special Effect: [" + m_TempEffect[i][2] + "] can be activated under 'Additional Effects' at 'BUFF, ITEMS AND OTHER STUFF')</B>";
        0 == m_Card[m_TempEffect[i][4]][3] ? m_Card[m_TempEffect[i][4]][3] = str : m_Card[m_TempEffect[i][4]][3] += "<BR>" + str
    }
document.calcForm.B_AtkRange.value = 0,
    document.calcForm.B_AtkElem.value = 10,
    document.calcForm.theme.value = 0,
    document.calcForm.server.value = 10,
    document.calcForm.autocalc.checked = !0,
    document.calcForm.all_dmgSkills.checked = !1,
    document.calcForm.restrict_jobequip.checked = !0,
    document.calcForm.restrict_lvlequip.checked = !1,
    document.calcForm.restrict_equipslot.checked = !1,
    document.calcForm.restrict_cardslot.checked = !1,
    document.calcForm.all_card.checked = !1,
    document.calcForm.A_JOB.value = 0,
    ClickJob(0),
    allCard(),
    EnemySort(),
    StCalc(),
    servers(),
    Bskill(),
    LoadLocal3(),
    URLIN(),
    refreshFields(),
    restrictCardslot(0),
    LoadChangelog();
