const Discord = require('discord.js');
const config = require('../config.json');
const dynEmbed = require('../modules/dynamicEmbed');

module.exports = {
	name: 'avatar',
	async execute(msg, args, client) {
		try {
            if (!args.length) var member = msg.guild.member(msg.author);
            else var member = msg.mentions.members.first() || msg.guild.member(client.users.find(u => u.id == args[0] || u.tag == args[0]));
            if (!member) return msg.channel.send(dynEmbed("error", "Unknown error occurred!\nYou used @everyone or @here?", msg.author.tag));

            var embed = new Discord.RichEmbed()
            .setColor(config.maincolor)
            .setTitle(`**${member.user.username}**'s avatar`)
            .setImage(member.user.displayAvatarURL)
            .setFooter("Command used by " + msg.author.tag)
            .setTimestamp();

            await msg.channel.send(embed);
		} catch(err) {
			console.error(err);
			return msg.channel.send(dynEmbed("error", err, msg.author.tag));
		}
	}
};