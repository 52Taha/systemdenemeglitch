const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» `✵System BOT Komut Sistemleri')
.setTimestamp()
.addField('» !alınacak-rol', 'Kayıt olunca alınacak rolü ayarlar.')
.addField('» !erkek','Erkek olarak kayıt eder.')
.addField('» !erkek-rol', 'Erkek rolünü ayarlar.')
.addField('» !kız', 'Kız olarak kayıt eder.')
.addField('» !kız-rol', 'Kız rolünü ayarlar.')
.addField('» !kayıtçı-rol', 'Kayıtçı rolünü ayarlar.')
.addField('» !kayıtçı-ver', 'Belirtilen kişiye kayıtçı rolü verir')
.addField('» !kayıt-kanal', 'Kayıt Olunacak Kanalı Ayarlar')
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
  name: 'kayıt',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};