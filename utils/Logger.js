const chalk = require("chalk");

class Logger {

    static log(m) {
        console.log(`[${chalk.whiteBright("LOG")}] ${m}`);
    }

    static error(m) {
        console.error(`[${chalk.redBright("ERROR")}] ${m}`);
    }

    static success(m) {
        console.success(`[${chalk.greenBright("SUCCESS")}] ${m}`);
    }

    static info(m) {
        console.info(`[${chalk.cyanBright("INFO")}] ${m}`);
    }

    static warn(m) {
        console.warn(`[${chalk.yellowBright("WARNING")}] ${m}`);
    }

}

module.exports = Logger;
