<p align="center"><b>Linux部分教程</b></p>
<details><summary><b>初始化</b></summary>
<p>

查看端口

```
sudo ufw status verbose 端口
```

开启端口

```
sudo ufw allow 端口
```

删除端口

```
sudo ufw delete allow 端口
```

</p>
</details>
<details><summary><b>Linux 创建用户</b></summary>
<p>

## linux通用

- debian使用`adduser`并且不用执行`passed`

```text
useradd -m 用户名
```

设置密码 > `passwd` 用户名

```text
 passwd
```

- 先登陆root账户，在root用户下更改`sudoers`文件(需要先登录刚才创建的用户才能生成此文件)

```bash
vim /etc/sudoers
```

在`## Allow root to run any commands anywhere`下添加以下内容，按I插入，插入完成后按ESC退出插入，输出:wq!保存退出，如下图所示

```bash
用户名 ALL=(ALL) NOPASSWD:ALL
```

保持长时间连接

```
vim /etc/ssh/sshd_config
```

重载配置文件生效

```bash
source /etc/profile
```

</p>
</details>
<details><summary><b>修改系统默认语言为中文</b></summary>
<p>

## Debian

下载语言包

```bash
apt-get install locales
```

设置语言，在弹出的窗口中找到`zh_CN.UTF-8 UTF-8`按空格进行选着

回车确定，在下个界面选着`zh_CN.UTF-8`设置默认语言

```bahs
dpkg-reconfigure locales
```

下载系统服务管理

```bash
apt-get install systemd
```

设置系统时区(中国时区)

```bash
timedatectl set-timezone Asia/Shanghai
```

## centos

安装中文语言包

```bash
yum groupinstall fonts -y
yum install kde-l10n-Chinese
yum reinstall glibc-common
```

修改etc目录下`locale.conf`的内容为 `LANG="zh_CN.UTF-8"`

```bash
vim /etc/locale.conf
```

执行`sudo reboot`重启，或者执行以下指令重载配置文件

```bash
source /etc/locale.conf
```

</p>
</details>
<details><summary><b>ssh密钥链接</b></summary>
<p>

生成秘钥(一路按回车)

```bash
ssh-keygen
```

查看公钥并复制(以ssh-rsa开头的)

```bash
cat .ssh/id_rsa.pub
```

登录到服务器创建秘钥文件设置权限并(按i)编辑，粘贴刚才复制的公钥(按`esc`输入`:wq`保存)

```bash
mkdir .ssh
chmod 700 .ssh
vim .ssh/authorized_keys
```

```bash
chmod 600 .ssh/authorized_keys
```

重启ssh

```text
service sshd restart
```

</p>
</details>



<details><summary><b>git代码</b></summary>
<p>

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
</p>
</details>
