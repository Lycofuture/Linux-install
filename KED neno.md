## 更新软件源

```bash
pkcon refresh && pkcon update
```
## pkcon 取消代理

[原文参考地址](https://www.jianshu.com/p/4bd3c3be978f)

原来这个服务把代理藏在一个Sqlite的数据库里，在这里：

/var/lib/PackageKit/transactions.db

- 安装数据库可视化工具

```bash
sudo apt install sqlitebrowser
```

- 编辑数据库

```bash
sqlitebrowser transactions.db
```

- 最后重启pkcon

```bash
sudo systemctl restart packagekit.service
```

## 修改为root登录

```bash
sudo nano /etc/pam.d/sddm
```
将第一个注释，第二个取消注释

#auth    required        pam_succeed_if.so user != root quiet_success

auth    sufficient      pam_succeed_if.so user ingroup nopasswdlogin	
