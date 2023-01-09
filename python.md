# 安装python3.10.9

[下载python](https://www.python.org/)

```text
wget https://www.python.org/ftp/python/3.10.9/Python-3.10.9.tgz
```

解压并进入目录

tar zxvf Python-3.10.9.tgz && cd Python-3.10.9

设置编译目录

./configure --prefix=/usr/local/python3 --enable-optimizations

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
