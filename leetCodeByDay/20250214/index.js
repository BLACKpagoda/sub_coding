/*
 * @Author: dingyijie dingyijie@faw.com.cn
 * @Date: 2025-02-14 16:31:18
 * @LastEditors: dingyijie dingyijie@faw.com.cn
 * @LastEditTime: 2025-02-14 16:32:36
 * @FilePath: \all-react-test\sub_coding\leetCodeByDay\20250214\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name}, All Rights Reserved. 
 */
/**
 * 2025-02-14每日一题
在代号为 C-137 的地球上，Rick 发现如果他将两个球放在他新发明的篮子里，它们之间会形成特殊形式的磁力。
Rick 有 n 个空的篮子，第 i 个篮子的位置在 position[i] ，Morty 想把 m 个球放到这些篮子里，使得任意两球间 最小磁力 最大。
已知两个球如果分别位于 x 和 y ，那么它们之间的磁力为 |x - y| 。
给你一个整数数组 position 和一个整数 m ，请你返回最大化的最小磁力。
 * 
 */

const check = (x, position, m) => {
    let pre = position[0], cnt = 1;
    for (let i = 1; i < position.length; ++i) {
        if (position[i] - pre >= x) {
            pre = position[i];
            cnt += 1;
        }
    }
    return cnt >= m;
}
var maxDistance = function(position, m) {
    position.sort((x, y) => x - y);
    let left = 1, right = position[position.length - 1] - position[0], ans = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); 
        if (check(mid, position, m)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
