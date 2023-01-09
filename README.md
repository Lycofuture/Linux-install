# **centos7.6系统初始化**

创建用户 > useradd -m 用户名

```text
useradd -m 用户名
```

设置密码 > passwd 用户名

```text
 passwd
```

- [ssh秘钥连接](/ssh.md)

- 换源

 ```text
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/ChangeMirrors.sh)
```

- 宝塔面板

 ```text
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```

## clash安装

下载[clash](https://github.com/Dreamacro/clash)

```text
wget https://github.com/Dreamacro/clash/releases/download/v1.12.0/clash-linux-amd64-v1.12.0.gz
```

解压

```text
gzip -d clash-linux-amd64-v1.12.0.gz
```

移动到/usr/local/bin/clash并重命名

```text
mv clash-linux-amd64-v1.12.0 /usr/local/bin/clash
```

给执行权限

```text
chmod +x /usr/local/bin/clash-linux-amd64-v1
```

## 系统变量

全局代理(开关版)

```text
vim  /etc/profile
```

```text
alias sproxy='export http_proxy=<http://127.0.0.1:7890;export>  https_proxy=<http://127.0.0.1:7890>'
alias cproxy='export http_proxy=;export https_proxy='
```

退出

```text
:wq
```

重载配置

```text
source /etc/profile
```

代理开

```text
sproxy
```

代理关

```text
cproxy
```

查看系统代理

```text
env|grep -i proxy
```

clash启动

```text
service clash start
```

## 编译安装

配置安装到指定路径

```text
./configure --prefix=/usr/local/text3
```

编译 && 安装

```text
make && make install
```

## 更换仓库源一直选Y就行

```text
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/ChangeMirrors.sh)
```

## 安装node.js

添加仓库源

```text
curl -sL https://rpm.nodesource.com/setup_17.x | sudo bash -
```

安装gcc-c++ make nodejs

```text
sudo yum -y install gcc-c++ make nodejs
```

查看nodejs版本

```text
node -v
```

查看npm版本

```text
npm -v
```

## git安装

导入git源

```text
sudo yum -y install https://packages.endpointdev.com/rhel/7/os/x86_64/endpoint-repo.x86_64.rpm
```

安装git

```text
sudo yum install git
```

查看版本

```text
git --version
```

## 安装chromium

```text
yum -y install chromium
```

## 安装redis

```text
yum -y install redis
```

## 安装中文包(没什么软用)

```text
yum groupinstall fonts -y
```

## QQ机器人部署

### 部署云崽

克隆云崽

```text
cd&&git clone --depth=1 -b main <https://gitee.com/Le-niao/Yunzai-Bot.git>
```

进入目录

```text
cd Yunzai-Bot
```

安装依赖cnpm

```text
npm install -g cnpm --registry=<https://registry.npm.taobao.org>
```  

使用 cnpm 安装pnpm

```text
cnpm install pnpm -g  
```

pnpm换源加安装pnpm依赖

```text
pnpm config set registry <https://registry.npm.taobao.org>

pnpm install -P
```

启动redis

```text
redis-server --save 900 1 --save 300 10 --daemonize yes
```

前台启动

```text
node app
```

后台启动

```text
npm start
```

关闭云崽

```text
npm stop
```

重新登录

```text
npm run login
```

## git代码部分

```text
git init
```

```text
git add README.md
```

```text
git commit -m "first commit"
```

```text
git branch -M main
```

```text
git remote add origin https://github.com/Lycofuture/Centos7.6-initial.git
```

```text
git push -u origin main
```
