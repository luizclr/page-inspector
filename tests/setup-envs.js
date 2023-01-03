const fs = require("fs");

const envPath = fs.existsSync("./.env") ? "./.env" : "./.env.example";

fs.readFileSync(envPath)
  .toString()
  .split("\n")
  .forEach((row) => {
    const [key, value] = row.split("=");

    process.env[key] = value;
  });
