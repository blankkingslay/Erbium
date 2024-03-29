const Command = require("../../Base/Command");
const { Canvas: Canvacord } = require("canvacord");

class Color extends Command {

    constructor(client) {
        super(client);

        this.config({
            name: "color",
            aliases: ["colour"],
            description: "HTML5 Colour",
        });
    }

    async run(message, args) {
        const color = args[0] ?? "#FFFFFF";

        const img = Canvacord.color(color, false, 2048, 2048);

        return message.reply({ files: [img] });
    }
}

module.exports = Color;
