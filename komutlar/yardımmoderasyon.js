const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» `✵System BOT Komut Sistemleri')
.setTimestamp()
.addField('» !ban', 'IDsi belirtilen kulanıcıya ban atar.')
.addField('» !kick', 'Belirttiğiniz kullanıcıyı kickler.')
.addField('» !sil', 'Belirttiğiniz sayıda mesaj siler.')
.addField('» !sunucubilgi', 'Sunucunun bölgesi ,kurucusu vb. bilgileri gösterir.')
.addField('» !kullanıcıbilgi', 'Etiketlediğiniz kişinin bilgilerni gösterir.')
.addField('» !yetkilerim', 'Suncudaki yetkilerinizi görmenizi sağlar.')
.addField('» !davet', 'Sunucumuzun sınırsız davet linkini atar.')
.addField('» !oylama', 'Basit bir oylama yapmanızı sağlar.')
.setFooter('© 2020 `✵System Bot', client.user.avatarURL())
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};