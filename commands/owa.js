const Discord = require('discord.js');
const config = require('../config.json');
const dynEmbed = require('../modules/dynamicEmbed');

module.exports = {
	name: 'owa',
	execute(msg, args, client) {
        if (msg.author.id != 436567608125554698) {
            console.log(`! ${msg.author.tag} (${msg.author.id}) tried to use owa command!`);
            return msg.channel.send(dynEmbed("error", "You're not Nina owner!", msg.author.tag));
        }
        if (args[0] === "act") {
            if (args[1] === "relogin") {
                try {
                    msg.channel.send(dynEmbed("info", "Ok, now trying to relogin...", msg.author.tag));
                    client.destroy();
                    client.login(config.token);
                } catch(err) {
                    console.error(err);
                    return msg.channel.send(dynEmbed("error", err, msg.author.tag));
                }
            }
            else { return msg.channel.send(dynEmbed("error", "Invalid argument " + args[1], msg.author.tag)); }
        }
        else if (args[0] === "exec") {
            try {
            var toExec = "";
                var i = 1;
                while (i != args.length) {
                    toExec = `${toExec} ${args[i]}`;
                    i++;
                }
                eval(toExec);
            } catch(err) {
                console.error(err);
                return msg.channel.send(dynEmbed("error", err, msg.author.tag));
            }
        }

        else { return msg.channel.send(dynEmbed("error", "Invalid argument " + args[0], msg.author.tag)); }

	}
};