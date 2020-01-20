console.log("\n       ___     ___    ##                  ___ ");
console.log("        w       w    ##   pp        pp    lll");
console.log("       w w     w         pp ii     pp    ll ll");
console.log("      w   w   w    ww   pp   ii   pp    ll   ll");
console.log("     w     w w    ww   pp     ii pp    ll#####ll");
console.log("    w       w    ww   pp       iipp   ll       ll");
console.log("   ===     ===  ww    ==       ====   ==       ==");
console.log("\nLoading...");

const Discord = require('discord.js');
const fs = require('fs');
const { token, prefix, maincolor } = require('./config.json');
const dynEmbed = require('./modules/dynamicEmbed');
const status = require('./modules/status');
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
    client.user.setPresence({ game: { name: `type "n!"`, type: 2 } });
    console.log(`Logged in as ${client.user.username}\n────────────────────────────────────────`);
    status(client);
});

client.on('message', async msg => {
    if (msg.channel.type == "dm") return;
    if (msg.author.bot) return;
    const args = await msg.content.slice(prefix.length).split(/ +/);
    const command = await args.shift().toLowerCase();
    if (!msg.content.startsWith(prefix)) return;
	console.log(`${msg.guild.name} | ${msg.guild.id} | ${msg.channel} | ${msg.author.tag} | ${msg.author.id}\n${msg.content}\n──────────`);
    try {
        if (!client.commands.has(command)) return msg.channel.send(dynEmbed("error", "Sorry, but... this command does not exist!", msg.author.tag));
        client.commands.get(command).execute(msg, args, client);
    } catch(err) {
        console.error(err);
        return msg.channel.send(dynEmbed("error", err, msg.author.tag));
    }
});

console.log("\nLogging in...");
client.login(token);