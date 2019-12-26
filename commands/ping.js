const Discord = require('discord.js');
const config = require('../config.json');
const dynEmbed = require('../modules/dynamicEmbed');

module.exports = {
	name: 'ping',
	execute(msg, args, client) {
		try {
			var embed = new Discord.RichEmbed()
				.setColor(config.maincolor)
				.setTitle(":ping_pong: Pong!")
				.setDescription(`API latency is ${Math.floor(client.ping)} ms`)
				.setFooter("Command used by " + msg.author.tag)
				.setTimestamp();
			msg.channel.send(embed);
		} catch(err) {
			console.error(err);
			return msg.channel.send(dynEmbed("error", err, msg.author.tag));
		}
	}
};