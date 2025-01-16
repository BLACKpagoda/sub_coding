/*
 * @Author: dingyijie dingyijie@faw.com.cn
 * @Date: 2025-01-10 14:45:37
 * @LastEditors: dingyijie dingyijie@faw.com.cn
 * @LastEditTime: 2025-01-14 13:44:46
 * @FilePath: \ts\test.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name}, All Rights Reserved. 
 */
/**
 * 排序算法：冒泡排序，选择排序，插入排序，快速排序和归并排序
 */
//1.冒泡排序：对相邻的元素进行比较和交换。通过多次的根据比较结果的交换，可以将序列中的元素按照规定的方式进行排序。
const arr = [5, 3, 8, 4, 9, 1, 6, 2, 7]
function bubbleSort(arr: number[]): number[] {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort(arr));
// 时间复杂度：O(n^2) 空间复杂度：O(1)

//2.选择排序：每次从待排序的序列中选择最小（或最大）的元素，将其放到已排序序列的末尾。通过多次选择和交换，可以将序列中的元素按照规定的方式进行排序。
function selectionSort(arr: number[]): number[] {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
console.log(selectionSort(arr));



