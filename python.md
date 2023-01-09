# 安装python3.10.9

安装依赖

```text
yum -y groupinstall "Development tools"
yum install -y ncurses-devel gdbm-devel xz-devel sqlite-devel tk-devel uuid-devel readline-devel bzip2-devel libffi-devel
yum install -y openssl-devel openssl11 openssl11-devel
```

[下载python](https://www.python.org/)

```text
wget https://www.python.org/ftp/python/3.10.9/Python-3.10.9.tgz
```

解压并进入目录

```text
tar zxvf Python-3.10.9.tgz && cd Python-3.10.9
```

设置编译FLAG，以便使用最新的openssl库。

```text
export CFLAGS=$(pkg-config --cflags openssl11)
export LDFLAGS=$(pkg-config --libs openssl11)
```

设置编译目录

```text
./configure --prefix=/usr/local/python3 --enable-optimizations
```

编译

```text
make
```

安装

```text
make install
```

也可直接编译安装(但是如果编译中有报错是看不的)

```text
make && make install
```

配置

```text
ln -sf /usr/local/python3/bin/python3 /usr/bin/python3
ln -sf /usr/local/python3/bin/pip3 /usr/bin/pip3
```

检查是否配置正确

```text
python3 --version
pip3 --version
```
