import fetch from 'node-fetch';
import fs from 'fs';
const urls =[
  'https://trackerslist.com/all.txt',
  'https://newtrackon.com/api/all',
  'https://newtrackon.com/api/stable',
  'https://newtrackon.com/api/live',
  'https://cf.trackerslist.com/best.txt',
  'https://cf.trackerslist.com/all.txt',
  'https://cf.trackerslist.com/http.txt',
  'https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best_ip.txt',
  'https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_ip.txt',
  'https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt',
  'https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt',
  'https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_udp.txt',
  'https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_http.txt',
  'https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_https.txt',
  'https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_ws.txt',
  'https://www.yaozuopan.top/iplist.txt',
  'http://github.itzmx.com/1265578519/OpenTracker/master/tracker.txt',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_best.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_all.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_all_udp.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_all_http.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_all_https.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_all_ws.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_best_ip.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_all_ip.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_bad.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/ATline_best.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/ATline_all.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/ATline_all_udp.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/ATline_all_http.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/ATline_all_https.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/ATline_all_ws.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/ATline_best_ip.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/ATline_all_ip.txt ',
  'https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/ATline_bad.txt ',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/AT_best.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/AT_all.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/AT_all_udp.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/AT_all_http.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/AT_all_https.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/AT_all_ws.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/AT_best_ip.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/AT_all_ip.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/AT_bad.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/ATline_best.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/ATline_all.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/ATline_all_udp.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/ATline_all_http.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/ATline_all_https.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/ATline_all_ws.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/ATline_best_ip.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/ATline_all_ip.txt',
  'https://cdn.jsdelivr.net/gh/DeSireFire/animeTrackerList/ATline_bad.txt',
  'https://at.raxianch.moe/AT_best.txt',
  'https://at.raxianch.moe/AT_all.txt',
  'https://at.raxianch.moe/AT_all_udp.txt',
  'https://at.raxianch.moe/AT_all_http.txt',
  'https://at.raxianch.moe/AT_all_https.txt',
  'https://at.raxianch.moe/AT_all_ws.txt',
  'https://at.raxianch.moe/AT_best_ip.txt',
  'https://at.raxianch.moe/AT_all_ip.txt',
  'https://at.raxianch.moe/AT_bad.txt',
  'https://at.raxianch.moe/ATline_best.txt',
  'https://at.raxianch.moe/ATline_all.txt',
  'https://at.raxianch.moe/ATline_all_udp.txt',
  'https://at.raxianch.moe/ATline_all_http.txt',
  'https://at.raxianch.moe/ATline_all_https.txt',
  'https://at.raxianch.moe/ATline_all_ws.txt',
  'https://at.raxianch.moe/ATline_best_ip.txt',
  'https://at.raxianch.moe/ATline_all_ip.txt',
  'https://at.raxianch.moe/ATline_bad.txt'
]
// 循环遍历所有URL
async function fetchUrls(urls) {
let data = ''
for (let i = 0; i < urls.length; i++) {
      const response = await fetch(urls[i]);
      const body = await response.text();
      data += body + '\n'
  };
  console.log(data)
  fs.writeFileSync('data.txt', data);
}
await fetchUrls(urls)