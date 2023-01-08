# 用腾讯云的centos7.6系统

```python
 **ssh秘钥连接**
```

生成秘钥

宝塔面板

$$
yum install -y wget && wget -O install.sh <https://download.bt.cn/install/install_6.0.sh> && sh install.sh ed8484bec

$$
clash安装

wget <https://github.com/Dreamacro/clash/releases/download/v1.12.0/clash-linux-amd64-v1.12.0.gz>

gzip -d clash-linux-amd64-v1.12.0.gz

mv clash-linux-amd64-v1.12.0 /usr/local/bin/clash

chmod +x /usr/local/bin/clash-linux-amd64-v1

yum代理

/etc/yum.conf

alias sproxy='export http_proxy=<http://127.0.0.1:7890;export>  https_proxy=<http://127.0.0.1:7890>'
alias cproxy='export http_proxy=;export https_proxy='
系统环境变量(系统代理)
/etc/profile
重载配置
source

查看系统代理
env|grep -i proxy

clash启动
service clash start

编译安装
./configure --prefix=/usr/local/python3
make && make install

# 更换仓库源一直选Y就行

bash <(curl -sSL <https://gitee.com/SuperManito/LinuxMirrors/raw/main/ChangeMirrors.sh>)

安装node.js
curl -sL <https://rpm.nodesource.com/setup_17.x> | sudo bash -
sudo yum -y install gcc-c++ make nodejs
node -V  #查看nodejs版本
npm -V  #查看npm版本

安装git
sudo yum -y install <https://packages.endpointdev.com/rhel/7/os/x86_64/endpoint-repo.x86_64.rpm> #存储库
sudo yum install git  #按y安装git
git --version #查看版本

安装chromium
yum -y install chromium

安装redis
yum -y install redis

安装中文包
yum groupinstall fonts -y

6.克隆项目
cd&&git clone --depth=1 -b main <https://gitee.com/Le-niao/Yunzai-Bot.git>  #克隆云崽
cd Yunzai-Bot    #进入文件夹

7. 安装依赖
npm install -g cnpm --registry=<https://registry.npm.taobao.org>  #安装cnpm
cnpm install pnpm -g  #使用 cnpm 安装pnpm
pnpm config set registry <https://registry.npm.taobao.org> #pnpm换源
pnpm install -P  #安装pnpm依赖

8.启动redis，启动云崽并登录
redis-server --save 900 1 --save 300 10 --daemonize yes
npm start  #后台启动
npm stop  #后台关闭
node app  #前台启动
npm run login  重新登录
