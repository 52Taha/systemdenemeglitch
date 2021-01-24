const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')
const moment = require('moment');

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on('message', async (msg, member, guild) => {
    let i = await  db.fetch(`selam_${msg.guild.id}`)
  if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'selamün aleyküm' || msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'slm')  
    msg.channel.send(new Discord.MessageEmbed().setColor('GREEN').setAuthor(msg.author.username, msg.author.avatarURL({dynamic: true})).setDescription(`${msg.author} **Aleyküm Selam.**`))
    
})
 
client.on('message', async (msg, member, guild) => {
    let i = await  db.fetch(`selam_${msg.guild.id}`)
  if (msg.content.toLowerCase() == 'tag' || msg.content.toLowerCase() == 'tag' || msg.content.toLowerCase() == 'tag' || msg.content.toLowerCase() == 'tag' || msg.content.toLowerCase() == 'tag' || msg.content.toLowerCase() == 'tag')  
    msg.channel.send('✵')
})
 
//-----------------------HOŞ-GELDİN-MESAJI----------------------\\     

client.on("guildMemberAdd", member => {  
    const kanal = member.guild.channels.cache.find(r => r.id === "801701302605316167");
      
      let user = client.users.cache.get(member.id);
      require("moment-duration-format");
        const kurulus = new Date().getTime() - user.createdAt.getTime();  
    const gecen = moment.duration(kurulus).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
     
      var kontrol;
    if (kurulus < 1296000000) kontrol = '❌'
    if (kurulus > 1296000000) kontrol = '✅'
    moment.locale("tr");
    kanal.send("Sunucumuza Hoş Geldin ! <@" + member + "> \n\n Hesabın "+ gecen +" Önce Oluşturulmuş "+kontrol+" \n\n Sunucu kurallarımız <#798211236625776674> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek. \n\n Seninle beraber " + member.guild.memberCount + " kişi olduk ! Tagımızı alarak bizlere destek olabilirsin ! Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor <@&798211236293509138> seninle ilgilenecektir ! İyi eğlenceler.")
    });
    
  //-----------------------HOŞ-GELDİN-MESAJI----------------------\\     

  //-----------------------TAG-ROL----------------------\\     STG

client.on("userUpdate", async (stg, yeni) => {
    var sunucu = client.guilds.cache.get('798211236260478996'); // Buraya Sunucu ID
    var uye = sunucu.members.cache.get(yeni.id);
    var tag = "✵"; // Buraya Ekip Tag
    var tagrol = "798211236293509132"; // Buraya Ekip Rolünün ID
    var logKanali = "798211237158584364"; // Loglanacağı Kanalın ID
  
    if (!sunucu.members.cache.has(yeni.id) || yeni.bot || stg.username === yeni.username) return;
    
    if ((yeni.username).includes(tag) && !uye.roles.cache.has(tagrol)) {
      try {
        await uye.roles.add(tagrol);
        await uye.send(`Tagımızı aldığın için teşekkürler! Aramıza hoş geldin.`);
        await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`${yeni} adlı üye tagımızı alarak aramıza katıldı!`));
      } catch (err) { console.error(err) };
    };
    
    if (!(yeni.username).includes(tag) && uye.roles.cache.has(tagrol)) {
      try {
        await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(tagrol).position));
        await uye.send(`Tagımızı bıraktığın için ekip rolün alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${tag}**`);
        await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(`${yeni} adlı üye tagımızı bırakarak aramızdan ayrıldı!`));
      } catch(err) { console.error(err) };
    };
  });
  
  //----------------------TAG-KONTROL----------------------\\     
  
  client.on("guildMemberAdd", member => {
    let sunucuid = "798211236260478996"; //Buraya sunucunuzun IDsini yazın
    let tag = "✵"; //Buraya tagınızı yazın
    let rol = "798211236293509132"; //Buraya tag alındığı zaman verilecek rolün IDsini yazın
  if(member.user.username.includes(tag)){
  member.roles.add(rol)
    const tagalma = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, o doğuştan beri bizden !`)
        .setTimestamp()
       client.channels.cache.get('798211237158584364').send(tagalma)
  }
  })
  
  //-----------------------TAG-KONTROL----------------------\\     
