/*
 * @Author: jhl
 * @Date: 2021-11-08 16:43:21
 * @LastEditors: jhl
 * @LastEditTime: 2021-11-08 16:43:22
 * @Description:
 */
import * as shelljs from 'shelljs';

/* 
    -R 表示递归拷贝（recursive）
*/
// 将 public 拷贝到 dist 下
shelljs.cp('-R', 'public', 'dist');
shelljs.cp('-R', 'views', 'dist');
