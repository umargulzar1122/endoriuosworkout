const mongoose = require("mongoose");

const connectToDatabase = () => {
	mongoose.connect(process.env.CONNECTION__STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}).then((data) => {
		console.warn(`Mongodb connected with server : ${data.connection.host}`)
	}).catch((error) => console.error(`MongoDB ${error}`));
}

module.exports = connectToDatabase;