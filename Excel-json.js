/**
 * @Author: Lycofuture
 * @Date: 2023-08-12 19:51:00
 * @LastEditors: Lycofuture
 * @LastEditTime: 2023-08-12 23:40:00
 */
import xlsx from 'node-xlsx'
import fs from 'fs'
// 解析指定路径的 Excel 文件
const woeksheets = xlsx.parse(fs.readFileSync('C:\\Users\\hizcm\\Downloads\\可爱系二次元bot词库1.5万词V1.2.xlsx'))
// 解析指定路径的 Excel 文件（从缓冲区读取）
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync('C:\\Users\\hizcm\\Downloads\\傲娇系二次元bot词库5千词V1.2.xlsx'))
// 获取第一个 Excel 文件解析后的数据
let jsonData = workSheetsFromBuffer[0].data
// 获取第二个 Excel 文件解析后的数据
const json = woeksheets[0].data
// 合并两个数据数组
const css = [...jsonData, ...json]
// 将合并后的数据转换成 JSON 字符串，格式化并缩进为 4 个空格
fs.writeFileSync('ds.json', JSON.stringify(css, null, 4))
