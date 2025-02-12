import { DateTime } from "luxon";
import winston from "winston";
import fs from 'fs';

// Define your severity levels.
// With them, You can create log files,
// see or hide levels based on the running ENV.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// This method set the current severity based on
// the current NODE_ENV: show all the log levels
// if the server was run in development mode; otherwise,
// if it was run in production, show only warn and error messages.
const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

// Define different colors for each level.
// Colors make the log message more visible,
// adding the ability to focus or ignore messages.
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white"
};

// Tell winston that you want to link the colors
// defined above to the severity levels.
winston.addColors(colors);

// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
  // // Tell Winston that the logs must be colored
  // winston.format.colorize({ all: true }),
  // Add the message timestamp with the preferred format
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  // Create custom formatting
  winston.format.printf((info) => `[${info.timestamp}] [${info.level}] : ${JSON.stringify(info.message, null, 2)}`),
  // winston.format.json()
);

const createLogDirIfNotExists = (path: string) => {
  const dir = path.split('/');
  for (let i = 1; i <= dir.length; i++) {
    const subDir = dir.slice(0, i).join('/');
    if (!fs.existsSync(subDir)) {
      fs.mkdirSync(subDir, { recursive: true });
    }
  }
};

// Define which transports the logger must use to print out messages.
// In this example, we are using three different transports
const todayDate = DateTime.now().setZone("Asia/Jakarta").toISODate()
const folderName = `${todayDate?.split("-")[0]}-${todayDate?.split("-")[1]}`
const fileName = todayDate
const transports = [
  // Allow the use the console to print the messages
  new winston.transports.Console(),
  // Allow to print all the error level messages inside the error.log file
  (() => {
    const errorDir = `logs/errors/${folderName}`;
    createLogDirIfNotExists(errorDir);
    return new winston.transports.File({
      filename: `${errorDir}/${fileName}.log`,
      level: "error",
      dirname: errorDir,
    });
  })(),
  // Allow to print all the http level messages inside the http.log file
  (() => {
    const httpDir = `logs/http/${folderName}`;
    createLogDirIfNotExists(httpDir);
    return new winston.transports.File({
      filename: `${httpDir}/${fileName}.log`,
      level: "http",
      dirname: httpDir,
    });
  })(),
  // Allow to print all the info level messages inside the info.log file
  (() => {
    const infoDir = `logs/info/${folderName}`;
    createLogDirIfNotExists(infoDir);
    return new winston.transports.File({
      filename: `${infoDir}/${fileName}.log`,
      level: "info",
      dirname: infoDir,
    });
  })(),
  // Allow to print all combined log messages
  (() => {
    const combinedDir = `logs/combined/${folderName}`;
    createLogDirIfNotExists(combinedDir);
    return new winston.transports.File({
      filename: `${combinedDir}/${fileName}.log`,
      dirname: combinedDir,
    });
  })()
];

// Create the logger instance that has to be exported
// and used to log messages.
const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default Logger;
