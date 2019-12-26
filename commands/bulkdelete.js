const Discord = require('discord.js');
const config = require('../config.json');
const dynEmbed = require('../modules/dynamicEmbed');

module.exports = {
	name: 'bulkdelete',
	execute(msg, args, client) {
        const amount = parseInt(args[0]);
        if (isNaN(amount)) {
            return msg.channel.send(dynEmbed("error", args[0] + " Is not valid number!", msg.author.tag));
        }
        else if (amount > 100) {
            return msg.channel.send(dynEmbed("error", args[0] + " Is not valid number!", msg.author.tag));
        }
        msg.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            msg.channel.send(dynEmbed("error", "There was an error trying to delete messages in this channel!", msg.author.tag));
        });
	}
};