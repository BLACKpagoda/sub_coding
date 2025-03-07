/*
 * @Author: dingyijie dingyijie@faw.com.cn
 * @Date: 2025-02-13 16:26:21
 * @LastEditors: dingyijie dingyijie@faw.com.cn
 * @LastEditTime: 2025-02-13 16:32:04
 * @FilePath: \all-react-test\sub_coding\leetCodeByDay\20250213\index.js
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name}, All Rights Reserved. 
 */
/**
 * 2025-02-13每日一题
 * 你在一家生产小球的玩具厂工作，有 n 个小球，编号从 lowLimit 开始，到 highLimit 结束（包括 lowLimit 和 highLimit ，即 n == highLimit - lowLimit + 1）。
 * 另有无限数量的盒子，编号从 1 到 infinity 。你的工作是将每个小球放入盒子中，其中盒子的编号应当等于小球编号上每位数字的和。
 * 例如，编号 321 的小球应当放入编号 3 + 2 + 1 = 6 的盒子，而编号 10 的小球应当放入编号 1 + 0 = 1 的盒子。
 * 给你两个整数 lowLimit 和 highLimit ，返回放有最多小球的盒子中的小球数量。如果有多个盒子都满足放有最多小球，只需返回其中任一盒子的小球数量
 * 
 * 示例 1：
 * 输入：lowLimit = 1, highLimit = 10
 * 输出：2
 * 解释：
 * 盒子编号：1 2 3 4 5 6 7 8 9 10 11 ...
 * 小球数量：2 1 1 1 1 1 1 1 1 0  0  ...
 */
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const count = new Map();
    let res = 0;
    var x = 0;
    for(let i = lowLimit;i<=highLimit;i++){
        // 对区间内每一个数字进行求和
        let box = 0; x = i;
        while (x!=0){
            box+=x%10;
            x = Math.floor(x/10);
        }
        count.set(box,(count.get(box) || 0)+1);
        res = Math.max(res,count.get(box));
    }
    return res
};

console.log(countBalls(1,10));
console.log(countBalls(5,15));
console.log(countBalls(19,28));
