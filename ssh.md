# ssh秘钥连接

生成秘钥(一路按回车)

 ```text
ssh-keygen
```

查看公钥并复制(以ssh-rsa开头的)

```text
cat .ssh/id_rsa.pub
```

登录到服务器创建秘钥文件设置权限并(按i)编辑，粘贴刚才复制的公钥(按esc输入:wq保存)

```text
mkdir .ssh
chmod 700 .ssh
vim .ssh/authorized_keys
```

```text
chmod 600 .ssh/authorized_keys
```

重启ssh

```text
service sshd restart
```
