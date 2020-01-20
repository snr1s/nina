const Discord = require('discord.js');
const config = require('../config.json');
const dynEmbed = require('../modules/dynamicEmbed');

module.exports = {
	name: 'ping',
	async execute(msg, args, client) {
		try {
			t = Date.now();
			m = await msg.channel.send("Yes i heard");
			var embed = new Discord.RichEmbed()
				.setColor(config.maincolor)
				.setTitle(":ping_pong: Pong!")
				.setDescription(`Latency is ~${Date.now() - t} ms.\nAPI latency is ${Math.floor(client.ping)} ms.`)
				.setFooter("Command used by " + msg.author.tag)
				.setTimestamp();
			await m.edit("", embed);
		} catch(err) {
			console.error(err);
			return msg.channel.send(dynEmbed("error", err, msg.author.tag));
		}
	}
};