const mongoose = require("mongoose");

// Fonction asynchrone pour établir la connexion à MongoDB
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/raqmiya";

    await mongoose.connect(uri);

    // Message affiché si la connexion réussit
    console.log("MongoDB connected");
  } catch (err) {
    // Affiche l'erreur si la connexion échoue
    console.error(err);

    // Quitte le processus avec un code d'échec
    process.exit(1);
  }
};

module.exports = connectDB;
