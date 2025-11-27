require("dotenv").config();
const connectDB = require("../config/db");
const Admin = require("../models/adminModel");
(async () => {
  try {
    await connectDB();
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    if (!email || !password) {
      console.log(
        "ADMIN_EMAIL and ADMIN_PASSWORD not set in .env - createAdmin will not create admin. This is intentional."
      );
      process.exit(0);
    }
    const exists = await Admin.findOne({ email });
    if (exists) {
      console.log("Admin already exists");
      process.exit(0);
    }
    const a = new Admin({ email, password });
    await a.save();
    console.log("Admin created:", email);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
