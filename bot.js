const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : faisal`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : AJ ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
});

 


client.login(process.env.BOT_TOKEN);
