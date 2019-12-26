const Discord = require('discord.js');
const config = require('../config.json');

function embed(type, content, msgAuthor) {
    try { 
    if (!type) type = "error";
    if (!msgAuthor) msgAuthor = "not specified";
    if (!content) content = "";

    if (type == "error") {
        var ourEmbed = new Discord.RichEmbed()
            .setColor(config.maincolor)
            .setTitle(":warning: Error!")
            .setDescription("It looks like error happend")
            .addField("Here is some additional information", "```" + content + "```")
            .setFooter("Command used by " + msgAuthor)
            .setTimestamp();
    }
    else if (type == "info") {
        var ourEmbed = new Discord.RichEmbed()
            .setColor(config.maincolor)
            .setTitle(":information_source: Info")
            .setDescription(content)
            .setFooter("Command used by " + msgAuthor)
            .setTimestamp();
    }
    else if (type == "notitle") {
        var ourEmbed = new Discord.RichEmbed()
            .setColor(config.maincolor)
            .setDescription(content)
            .setFooter("Command used by " + msgAuthor)
            .setTimestamp();
    }
    else {
        return embed("error", `Embed type ${type} is invalid.`, msgAuthor);
    }

    return ourEmbed;
    } catch(err) {
        console.error(err);
        return embed("error", err, msgAuthor)
    }
}
module.exports = embed;