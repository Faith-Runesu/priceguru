#!/usr/bin/bash

#install dependencies
npm i
npm i sharp

#install pm2
npm i pm2 -g

#build next project for production
npm run build

#run using pm2
pm2 start "npm run start"
pm2 save
pm2 startup
sudo env PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.15.0/bin /home/ubuntu/.nvm/versions/node/v20.15.0/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu


#install nginx
sudo apt update
sudo apt install -y nginx

#configure nginx
sudo cp setup /etc/nginx/conf.d/priceguru.conf

sudo nginx -t
sudo service nginx restart