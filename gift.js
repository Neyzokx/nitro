const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

 console.log(`Started bot ${client.user.tag}!`);

});



client.on('message', message => {

 if (message.content === 'gift') {

   message.reply('Generating gift links...');

   setInterval(function() {

     var links = [];

     for (x = 0; x < 2; x++) {

       var used = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

       var link = "https://discord.gift/";

       for (var y = 0; y < 16; y++) {

         link += used.charAt(Math.floor(Math.random() * used.length));

       }

       links.push(link);

     }



     message.channel.send(links.join(" "));

   }, 3600);

 }
});

client.login("Nzk5OTM3NjU3NjY5MDI1Nzky.YAK1_w.21_aApP9PlJ1b0ZR3rqxL98bqQo");