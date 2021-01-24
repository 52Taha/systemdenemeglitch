const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» `✵System BOT Eğlence Komutları')
.setTimestamp()
.addField('» !avatar', 'Discord profil fotoğrafınızı atar..')
.addField('» !ilginçbilgi','İlginç bilhiler gönderir..')
.addField('» !renk-ara', 'Kodunu girdiğiniz rengi atar.')
.addField('» !şanslısayım', 'Şanslı sayınızı atar.')
.addField('» !sorusor', 'Sorduğunuz soruya rastgele evet hayır gibi cevaplar verir.')
.addField('» !yetkilerim', 'Sahip olduğunuz yetkileri atar.')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};