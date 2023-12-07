# 安装python3.10.9

安装依赖

```text
apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev 
```

[下载python](https://www.python.org/)

```text
wget https://www.python.org/ftp/python/3.10.9/Python-3.10.9.tgz
```

解压并进入目录

```text
tar zxvf Python-3.10.9.tgz && cd Python-3.10.9
```

设置编译目录

```text
./configure --prefix=/usr/local/python3 --enable-optimizations
```

编译 && 安装

```text
make && make install
```

配置

```text
echo 'export PATH=/usr/local/python3/bin:$PATH' >> /etc/profile
source /etc/profile
```

检查是否配置正确

```text
python3 --version
pip3 --version
```
