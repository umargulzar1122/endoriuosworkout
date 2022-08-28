const app = require("./src/app");
const dotenv = require("dotenv");
const database = require("./src/database/database");
dotenv.config({ path: "./src/config/config.env" });

database();


var server = app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${process.env.PORT}`);
});