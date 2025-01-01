import fs from 'fs';
import path from 'path';
import url from 'url';
import maxmind from '@maxmind/geoip2-node';

// 获取当前脚本路径
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 输入 CSV 文件路径
const csvFilePath = path.resolve(__dirname, '已检测ip.csv');
// 输出 TXT 文件路径
const txtFilegeo = path.resolve(__dirname, '可用ip.txt');
// 地理位置
const geoip = path.resolve(__dirname, 'GeoLite2-Country.mmdb');
// 提取列
let ip = 'IP地址'
let port = '端口'
const speedtestresult = '下载速度'
async function extractIpAndPort() {
  try {
    // 读取 CSV 文件内容
    const data = fs.readFile(csvFilePath, 'utf8');

    // 按行分割 CSV 内容
    const lines = data.split('\n').filter(line => line.trim()); // 去掉空行
    if (lines.length < 2) {
      throw new Error('CSV 文件内容不足或格式不正确');
    }

    // 获取表头
    const headers = lines[0].split(',');
    const ipIndex = headers.indexOf(ip);
    const portIndex = headers.indexOf(port);
    const speedIndex = headers.indexOf(speedtestresult);

    if (ipIndex === -1 || portIndex === -1) {
      throw new Error(`CSV 文件缺少 ${ip} 或 ${port} 列`);
    }

    // 提取 IP 和端口
    // 读取 GeoLite2 数据库
    const dbBuffer = fs.readFile(geoip);
    const reader = maxmind.Reader.openBuffer(dbBuffer);
    const result = lines.slice(1) // 去掉表头
      .map(line => line.split(',')) // 按逗号分割每一行
      .filter(fields => fields.length > Math.max(ipIndex, portIndex, speedIndex)) // 确保有足够的列
      .filter(fields => {
        const speed = parseFloat(fields[speedIndex].replace(' kB/s', ''));
        return speed > 0; // 过滤下载速度大于 0 kB/s 的记录
      })
      .map(fields => {
<<<<<<< HEAD
        ip = fields[ipIndex];
        port = fields[portIndex];
        const data = reader.country(ip);
        // 获取中文名称和国家代码
        const country = data.country.names['zh-CN'] || '未知';
        return `${ip}:${port}#${country}`;
      })
      .join('\n'); // 合并成多行字符串

=======
                ip = fields[ipIndex];
                port = fields[portIndex];
                const data = reader.country(ip);
                // 获取中文名称和国家代码
                const country = data.country.names['zh-CN'] || '未知';                
                return `${ip}:${port}#${country}`;
            })
      .join('\n'); // 合并成多行字符串
      
>>>>>>> c68d815766038ea5fa0e6e9a3b6cc055c1deff9b
    // 写入到 TXT 文件
    fs.writeFile(txtFilegeo, result, 'utf8');
    console.log(`已成功提取到 ${txtFilegeo}`);
  } catch (error) {
    console.error('处理文件时发生错误:', error.message);
  }
}

extractIpAndPort();
