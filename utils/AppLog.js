"use strict";
const { createLogger, format, transports } =  require("winston");

const logger = createLogger({
    format: format.combine(
        format.timestamp({ format: "DD/MM/YYYY HH:mm:ss" }),
        format.printf(info => JSON.stringify(
            {
                timestamp:info.timestamp, 
                level: info.level, 
                message: info.message
            }))
    ),
    transports: [
        new transports.Console()
    ]
})

module.exports = logger;