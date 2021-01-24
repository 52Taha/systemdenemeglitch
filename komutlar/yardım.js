const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» `✵System BOT Komut Sistemleri')
.setTimestamp()
.addField('» !moderasyon', 'Moderasyon menüsünü açar')
.addField('» !guard', 'Guard menüsünü açar.')
.addField('» !kayıt', 'Kayıt menüsünü açar.')
.addField('» !eğlence' , 'Eğlence menüsünü açar.')
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};