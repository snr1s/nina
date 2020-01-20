const Discord = require('discord.js');
const config = require('../config.json');
const dynEmbed = require('../modules/dynamicEmbed');

module.exports = {
	name: 'kick',
	async execute(msg, args, client) {
		try {
            var userid = args[0];
            var reason = args[1];
            var member = msg.mentions.members.first() || msg.guild.member(client.users.find(mU => mU.id == userid));
            if (msg.guild.member(msg.author).hasPermission("KICK_MEMBERS")) {
                if (!msg.guild.me.hasPermission("KICK_MEMBERS")) { return msg.channel.send(dynEmbed("error", "It looks like I don't have permission to kick members!", msg.author.tag)); }
                if (member.kickable) {
                    m = await msg.channel.send(dynEmbed("info", `Trying to kick ${member.user.tag} ...`, msg.author.tag));
                    await member.kick(reason);
                    await m.edit("", dynEmbed("info", `${member.user.tag} was kicked!`, msg.author.tag));
                }
                else {
                    return msg.channel.send(dynEmbed("error", `${member.user.username}'s role is higher then mine!`, msg.author.tag));
                }
            }   
            else {
                msg.channel.send(dynEmbed("error", "It looks like you don't have permission to kick members!", msg.author.tag));
            }
		} catch(err) {
			console.error(err);
			return msg.channel.send(dynEmbed("error", err, msg.author.tag));
		}
	}
};