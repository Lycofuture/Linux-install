```
curl https://get.acme.sh | sh -s email=d342jxc@gmail.com
```
```
acme.sh --set-default-ca --server letsencrypt
```
```
echo 'alias acme.sh=~/.acme.sh/acme.sh' >> ~/.bashrc
source ~/.bashrc
```
```
export CF_Key="301bf8c487528b2d67b459593daf4da271f27" 
export CF_Email="d342jxc@gmail.com"
```
```
acme.sh --issue --dns dns_cf -d example.com -d *.example.com
```
```
acme.sh --install-cert -d 'example.com' \
--key-file       /etc/nginx/ssl/example.com/example.com.key  \
--fullchain-file /etc/nginx/ssl/example.com/example.com.crt \
--reloadcmd     "service nginx force-reload"
```
```
acme.sh --install-cert -d '*.example.com' \
--key-file       /etc/nginx/ssl/example.com/example.com.key  \
--fullchain-file /etc/nginx/ssl/example.com/example.com.crt \
--reloadcmd     "service nginx force-reload"
```
