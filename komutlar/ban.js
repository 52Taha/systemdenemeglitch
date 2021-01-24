const Discord = require("discord.js"); 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("Yetersiz Yetki!");
  let nrcos_user = args[0];
  if (isNaN(nrcos_user)) return message.reply("Doğru ID Girmelisiniz!");
  await message.guild.members.ban(nrcos_user);
  return message.reply(`\`${nrcos_user}\`idli şahıs sunucudan banlandı!`);
}; 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["idban","ban"]
};

exports.help = {
  name: "forceban",
  description: "ID ile Sunucudan Birisini Banlar!",
  usage: "forceban <kullanıcı-id>"
};