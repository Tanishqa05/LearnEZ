const mongoose = require("mongoose");
const User = require("./models/User"); // Ensure this path is correct

const DB =
  "mongodb+srv://learnEZ:2learn@cluster0.wvxxuyv.mongodb.net/LearnEZ?retryWrites=true&w=majority"; // Replace with your MongoDB connection string

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Create a new User instance for the admin
    const admin = new User({
      name: "Admin User",
      email: "admin@example.com",
      role: "admin", // Ensure your schema supports an 'admin' role
      branch: "CSE",
      password: "securepassword", // You should hash this password before production use
      // Add any other fields required by your schema
    });

    // Save the admin user to the database
    await admin.save();
    console.log("Admin user created successfully");
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

createAdmin();
