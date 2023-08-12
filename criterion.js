/**
 * @Author: Lycofuture
 * @Date: 2023-08-12 19:51:00
 * @LastEditors: Lycofuture
 * @LastEditTime: 2023-08-12 23:40:00
 */
import fs from 'fs'
// 读取 'ds.json' 文件的内容
const jsondata = fs.readFileSync('ds.json', 'utf-8')
// 将 JSON 数据解析为对象
let data = JSON.parse(jsondata)
// 创建一个空对象用于存储转换后的数据
const text = {}
// 遍历数据对象
for (let i in data) {
  let key = data[i]
  // 打印每个键的值
  console.log(key)
  // 检查文本数组的首个元素是否已经是 text 对象的属性
  if (!text[key[0]]) {
    // 如果不是，则创建一个空数组作为该属性的值
    text[key[0]] = []
  }
  // 向相应的数组中推入包含文本值的对象
  text[key[0]].push(
    [
      {
        type: 'text',
        text: key[1]
      }
    ]
  )
}
// 将转换后的数据写入 'data.json' 文件
fs.writeFileSync('data.json', JSON.stringify(text, null, 4))
