const Command = require("../../Base/Command.js");
const { Canvas: Canvacord } = require("canvacord");

class Wasted extends Command {

    constructor(client) {
        super(client);

        this.config({
            name: "wasted",
            aliases: [],
            description: "WASTED",
        });
    }

    async run(message, args) {
        const user = message.mentions.users.first() || await this.client.resolveUser(args.join(" ")) || message.author;

        const m = await message.reply("⏱ | Please wait...");
        const img = await Canvacord.wasted(user.displayAvatarURL({ extension: "png", size: 2048 }));
        await m.delete().catch(() => { });

        return message.reply({ files: [img] });
    }

}

module.exports = Wasted;
