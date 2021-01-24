const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/801701302605316167/801741967066529802/discord_logo.jpg")   
.addField("Selam, suncumuza buradan arkadaşlarını davet edebilirsin","[TIKLA](https://discord.gg/BNEAwXJ5SK)")
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "Davet Linki"
  };