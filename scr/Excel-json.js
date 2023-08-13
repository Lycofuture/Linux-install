/**
 * @Author: Lycofuture
 * @Date: 2023-08-12 19:51:00
 * @LastEditors: Lycofuture
 * @LastEditTime: 2023-08-12 23:40:00
 */
import xlsx from 'node-xlsx'
import fs from 'fs'

const numbers = 1

function Anime() {
    const LayerData = JSON.parse((fs.readFileSync('../AnimeThesaurus/data.json')).toString())
    const dataex = JSON.parse((fs.readFileSync('../AnimeThesaurus/可爱系二次元bot词库1.5万词V1.2.json')).toString())
    const datajs = JSON.parse((fs.readFileSync('../AnimeThesaurus/傲娇系二次元bot词库5千词V1.2.json')).toString())
    const data = {...LayerData, ...dataex, ...datajs}
    const jsondata = {}
    let num = 0
    for (let i in data) {
        if (!jsondata[i]) {
            jsondata[i] = []
        }
        jsondata[i].push(
            [
                {
                    type: 'text',
                    text: data[i]
                }
            ]
        )
        num++
    }
    console.log(num)
    fs.writeFileSync('./AnimeThesaurus.json', JSON.stringify(jsondata, null, 4))
}

function Exceljson() {
    // 解析指定路径的 Excel 文件
    const woeksheets = xlsx.parse(fs.readFileSync('./可爱系二次元bot词库1.5万词V1.2.xlsx'))
    // 解析指定路径的 Excel 文件（从缓冲区读取）
    const workSheetsFromBuffer = xlsx.parse(fs.readFileSync('./傲娇系二次元bot词库5千词V1.2.xlsx'))
    // 获取第一个 Excel 文件解析后的数据
    let jsonData = workSheetsFromBuffer[0].data
    // 获取第二个 Excel 文件解析后的数据
    const json = woeksheets[0].data
    // 合并两个数据数组
    const data = [...jsonData, ...json]
    // 创建一个空对象用于存储转换后的数据
    const text = {}
    let num = 0
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
        num++
    }
    console.log(num)
    // 将转换后的数据写入 'Excel.json' 文件
    fs.writeFileSync('./Excel.json', JSON.stringify(text, null, 4))
}

if (numbers === 0) {
    Exceljson()
} else {
    Anime()
}
