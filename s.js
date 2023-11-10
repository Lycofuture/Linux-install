
import fs from 'fs';
// 读取txt文件
let data = fs.readFileSync('s.txt', 'utf-8');

// 按行分割字符串
let lines = data.split(/\r?\n/);
let newArray
// 输出每行
lines.forEach(function(line) {
  // 这里使用ES6的箭头函数表达式
  newArray = lines.map(line => {
    return line;
  });
  
});
console.log(newArray);