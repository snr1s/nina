const Discord = require('discord.js');
const fs = require('fs');
const { token, prefix, maincolor } = require('./config.json');
const dynEmbed = require('./modules/dynamicEmbed');
const client = new Discord.Client();
client.commands = new Discord.Collection();

console.log("\nLoading commands...");
fs.readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(file => {
	try {
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
		console.log(` |-- ${file} loaded.`);
	} catch (err) {
		return console.error(err);
	}
});


client.on('ready', () => {
    client.user.setPresence({
        game: {
          name: `n! | ${client.guilds.size} Servers`,
          type: 2
        }
      });
  console.log(`Logged in as ${client.user.username}`);
  
});

client.on('message', msg => {
    if (msg.channel.type == "dm") return;
    if (msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!msg.content.startsWith(prefix)) return;
    try {
        client.commands.get(command).execute(msg, args, client);
    } catch(err) {
        if (err.message == "Cannot read property 'execute' of undefined" && err.name == "TypeError") {
            msg.channel.send(dynEmbed("error", "Sorry, but... this command does not exist!", msg.author.tag));
        }
    }
});

client.login(token);