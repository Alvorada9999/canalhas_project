#### Requirements

- [Debian 10 or 11](https://www.debian.org/)
- [Apache server](https://httpd.apache.org/)
- [Certbot](https://certbot.eff.org/)

#### General instructions
- First of all, put "sites-available/vazou_website.conf" file inside the "sites-available" folder, on debian, the folder is by default in "/etc/apache2" and run:
```bash
sudo systemctl reload apache2
```

#### "vazou_website" related instructions
- Replace the "ServerName" directive value with your domain name (If you have one) and run:
```bash
sudo systemctl reload apache2
```
- If you have a domain already poiting to the ip where the apache server is hosted and a certificate is wanted
```bash
#Install cerbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-apache
#Enable the needed modules
sudo a2enmod ssl
sudo a2enmod headers
#Setup the certificates
sudo certbot --apache
#Restart apache to apply the changes
sudo systemctl reload apache2
```
Cerbot automatically will:
###### Store the certificates in "/etc/letsencrypt/live/<domain_name>"
###### Update the apache ".conf" files from "/etc/apache2/sites-available" with the "SSLCertificateFile", "SSLCertificateKeyFile" and "Include" directives

#### "vazou_server" related instructions
- Enable the needed modules to provide proxy capabilities in Apache
```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo systemctl reload apache2
```
- Add the following directives to "vazou_website.conf"
```
ProxyPreserveHost On
ProxyPass /api http://localhost:3000/
ProxyPassReverse /api http://localhost:3000/
```
