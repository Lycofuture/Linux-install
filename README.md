# centos7.6系统初始化

## ssh秘钥连接

生成秘钥

 ```python
ssh-keygen
```

```python
cat id_rsa.pub >> authorized_keys
```

重启ssh

```python
service sshd restart
```

## 宝塔面板

安装宝塔面板

```java
yum install -y wget && wget -O install.sh <https://download.bt.cn/install/install_6.0.sh> && sh install.sh ed8484becS
```

## clash安装

下载[clash](https://github.com/Dreamacro/clash)

```python
wget <https://github.com/Dreamacro/clash/releases/download/v1.12.0/clash-linux-amd64-v1.12.0.gz>
```

解压

```python
gzip -d clash-linux-amd64-v1.12.0.gz
```

移动到/usr/local/bin/clash并重命名

```python
mv clash-linux-amd64-v1.12.0 /usr/local/bin/clash
```

给执行权限

```python
chmod +x /usr/local/bin/clash-linux-amd64-v1
```

## 系统变量

全局代理(开关版)

```python
vim  /etc/profile
```

```python
alias sproxy='export http_proxy=<http://127.0.0.1:7890;export>  https_proxy=<http://127.0.0.1:7890>'
alias cproxy='export http_proxy=;export https_proxy='
```

退出

```python
:wq
```

重载配置

```python
source /etc/profile
```

代理开

```python
sproxy
```

代理关

```python
cproxy
```

查看系统代理

```python
env|grep -i proxy
```

clash启动

```python
service clash start
```

## 编译安装

配置安装到指定路径

```pytho
./configure --prefix=/usr/local/python3
```

编译 && 安装

```pytho
make && make install
```

## 更换仓库源一直选Y就行

```python
bash <(curl -sSL <https://gitee.com/SuperManito/LinuxMirrors/raw/main/ChangeMirrors.sh>)
```

## 安装node.js

添加仓库源

```python
curl -sL <https://rpm.nodesource.com/setup_17.x> | sudo bash -
```

安装gcc-c++ make nodejs

```pytho
sudo yum -y install gcc-c++ make nodejs
```

查看nodejs版本

```python
node -V 
```

查看npm版本

```python
npm -V 
```

## git安装

导入git源

```python
sudo yum -y install <https://packages.endpointdev.com/rhel/7/os/x86_64/endpoint-repo.x86_64.rpm>
```

安装git

```python
sudo yum install git
```

查看版本

```pytho
git --version
```

## 安装chromium

```python
yum -y install chromium
```

## 安装redis

```python
yum -y install redis
```

## 安装中文包(没什么软用)

```python
yum groupinstall fonts -y
```

## QQ机器人部署

### 部署云崽

克隆云崽

```pytho
cd&&git clone --depth=1 -b main <https://gitee.com/Le-niao/Yunzai-Bot.git>
```

进入目录

```python
cd Yunzai-Bot
```

安装依赖cnpm

```pytho
npm install -g cnpm --registry=<https://registry.npm.taobao.org>
```  

使用 cnpm 安装pnpm

```python
cnpm install pnpm -g  
```

pnpm换源加安装pnpm依赖

```python
pnpm config set registry <https://registry.npm.taobao.org>

pnpm install -P
```

启动redis

```pytho
redis-server --save 900 1 --save 300 10 --daemonize yes
```

前台启动

```python
node app
```

后台启动

```python
npm start
```

关闭云崽

```python
npm stop
```

重新登录

```python
npm run login
```

## git代码部分

```python
git init
```

```python
git add README.md
```

```python
git commit -m "first commit"
```

```python
git branch -M main
```

```python
git remote add origin https://github.com/Lycofuture/Centos7.6-initial.git
```

```python
git push -u origin main
```
