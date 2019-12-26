const Discord = require('discord.js');
const config = require('../config.json');
const dynEmbed = require('../modules/dynamicEmbed');

module.exports = {
	name: 'say',
	execute(msg, args, client) {
        try {
            var toSay = "";
            var i = 0;
            while (i != args.length) {
                toSay = `${toSay} ${args[i]}`;
                i++;
            }
            msg.channel.send(dynEmbed("notitle", toSay, msg.author.tag));
        } catch(err) {
            console.error(err);
            return msg.channel.send(dynEmbed("error", err, msg.author.tag));
        }
	}
};