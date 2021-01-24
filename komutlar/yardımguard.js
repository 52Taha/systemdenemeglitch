const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» `✵System BOT Guard Komutları')
.setTimestamp()
.addField('» !kanalkilitle', 'Komutu attığınız kanala üyelerin mesaj atmasını engeller.')
.addField('» !kanalkilitaç','Komutu attığınız kanalın mesaj atma kilitini açar')
.addField('» !yavaş-mod', 'Mesajı attığınız kanalı belirtilen sürede yavaş moda alır.')
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'guard',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};