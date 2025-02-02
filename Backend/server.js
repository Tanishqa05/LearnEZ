const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { expressjwt: expressJwt } = require("express-jwt");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const jwt = require("jsonwebtoken");

const JWT_SECRET = "abc@123"; // Replace with your secret key

const app = express();
const DB =
  "mongodb+srv://learnEZ:2learn@cluster0.wvxxuyv.mongodb.net/LearnEZ?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection Succesfull");
  })
  .catch((error) => console.log("no Connetion", error));
const PORT = 5000;

app.use(cors()); // To handle CORS issues when making requests from React
app.use(bodyParser.json()); // To parse JSON request bodies

const User = require("./models/User");
const Course = require("./models/course");
const { log } = require("console");

const requireAuth = (req, res, next) => {
  // Get the token from the "Authorization" header
  const token = req.header("Authorization");

  console.log("Received token:", token); // Debugging: Log the received token

  if (!token) {
    console.log("No token found"); // Debugging: Log if no token is found
    return res.status(401).json({ message: "Unauthorized (no token)" });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, JWT_SECRET);

    console.log("Decoded token payload:", decoded); // Debugging: Log the decoded token payload

    // Attach the user's role to req.user.role
    req.user = decoded;

    // Continue to the next middleware or route
    next();
  } catch (error) {
    console.log("Error decoding token:", error); // Debugging: Log if there's an error decoding the token
    return res.status(401).json({ message: "Unauthorized (invalid token)" });
  }
};

function requireRole() {
  return (req, res, next) => {
    const userRole = req.headers.authorization; // Retrieve the user's role from the request headers

    // Check the user's role and perform authorization logic as needed
    if (userRole === "teacher") {
      next(); // Allow access to the next middleware or route
    } else {
      return res.status(403).json({ message: "Unauthorized" });
    }
  };
}

const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Unauthorized - Admin access required" });
  }
  next();
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "application/vnd.ms-powerpoint"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Allow only up to 5MB
  },
  fileFilter: fileFilter,
});

app.get("/teacher-requests", async (req, res) => {
  try {
    const requests = await User.find({ role: "teacher", status: "pending" });
    res.json(requests);
  } catch (error) {
    console.error("Error retrieving teacher requests:", error);
    res.status(500).json({ error: "Failed to retrieve teacher requests" });
  }
});

app.get("/getUploadedFiles", (req, res) => {
  const uploadDirectory = path.join(__dirname, "uploads");

  // Read the contents of the "uploads" directory
  fs.readdir(uploadDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res
        .status(500)
        .json({ error: "Failed to retrieve uploaded files" });
    }

    // Filter out any non-file items (e.g., subdirectories)
    const filePaths = files
      .filter((file) => fs.statSync(path.join(uploadDirectory, file)).isFile())
      .map((file) => `/uploads/${file}`);

    res.json(filePaths);
  });
});

app.get("/downloadFile", (req, res) => {
  // Define the base path
  const basePath = `D:\\Work\\College Minor\\Final Project\\Backend`;

  // Get the file path from the query parameter and sanitize it to prevent directory traversal
  const filePath = path
    .normalize(req.query.filePath)
    .replace(/^(\.\.(\/|\\|$))+/, "");
  const fullPath = path.join(basePath, filePath);

  console.log(fullPath);

  // Check if the file exists
  if (fs.existsSync(fullPath)) {
    // Set the appropriate headers for the download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${path.basename(fullPath)}`
    );
    res.setHeader("Content-Type", "application/octet-stream");

    // Create a readable stream from the file and pipe it to the response
    const fileStream = fs.createReadStream(fullPath);
    fileStream.pipe(res);
  } else {
    res.status(404).send("File not found");
  }
});

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send({ message: "Please upload a file." });
  }

  res.send({
    filePath: `/uploads/${file.filename}`,
    message: "File uploaded successfully.",
  });
});

app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error("Error getting courses:", error);
    res.status(500).json({ error: "Failed to retrieve courses" });
  }
});
app.get("/courses/:courseId", async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error("Error getting course:", error);
    res.status(500).json({ error: "Failed to retrieve the course" });
  }
});
app.get("/course/:courseId/resources", async (req, res) => {
  const _id = req.params.courseId;

  try {
    const course = await Course.findById(_id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // const resources = course.resources;

    res.send(course);

    console.log(course);
  } catch (error) {
    console.error("Error getting course resources:", error);
    res.status(500).json({ error: "Failed to retrieve course resources" });
  }
});

/* app.post("/course/:courseId/createresources",  async (req, res) => {
  const courseId = req.params.courseId;
  const { youtubeLink, pastYearQuestions, files } = req.body;

  try {
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const resource = {
      youtubeLink,
      pastYearQuestions,
      files
    };

      course.resources.push(resource);

    await course.save();

    res.status(201).json({ message: "Resource created successfully", resource });
  } catch (error) {
    console.error("Error creating resource:", error);
    res.status(500).json({ error: "Failed to create resource" });
  }
});
*/
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (user) {
      if (user.password === password) {
        // Ideally, use bcrypt for password comparison
        if (user.role === "teacher" && user.status !== "approved") {
          // Prevent login for non-approved teachers
          return res
            .status(401)
            .json({ message: "Teacher is not approved to login." });
        }
        // Generate the token as the user is either not a teacher or is an approved teacher
        const token = jwt.sign({ _id: user._id, role: user.role }, JWT_SECRET);
        res.json({ message: "Login Successful", token });
      } else {
        res.status(401).json({ message: "Incorrect Password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// app.post("/createcourse", requireAuth, requireRole(), async (req, res) => {
//   const { courseName, branch, sem, subjectName, youtubeLink } = req.body;
//   try {
//     const course = new Course({
//       courseName,
//       branch,
//       sem,
//       subjectName,
//       youtubeLink,
//     });
//     await course.save();
//     res.status(201).json(course);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to create course" });
//     console.log(error);
//   }
// });

app.post("/createcourse", async (req, res) => {
  const { sem, subjectName, branch, courseName, youtubeLink, filePath } =
    req.body;

  try {
    const newCourse = new Course({
      sem: sem,
      subjectName: subjectName,
      branch: branch,
      courseName: courseName,
      resources: [
        {
          filePath: filePath,
          ytLink: youtubeLink,
        },
      ],
    });

    await newCourse.save();
    res.send({ message: "Course created successfully." });
  } catch (error) {
    console.error("Error creating the course:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post(
  "/approve-teacher/:userId",

  async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.status = "approved";
      await user.save();
      res.json({ message: "Teacher approved successfully" });
    } catch (error) {
      console.error("Error approving teacher:", error);
      res.status(500).json({ error: "Failed to approve teacher" });
    }
  }
);

// app.post("/upload/:courseId", upload.single("file"), async (req, res, next) => {
//   const file = req.file;
//   const courseId = req.params.courseId;

//   if (!file) {
//     return res.status(400).send({ message: "Please upload a file." });
//   }

//   // Link this file to the specific course
//   try {
//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).send({ message: "Course not found." });
//     }

//     course.resources.push(`/uploads/${file.filename}`);
//     await course.save();

//     res.send({ message: "File uploaded and linked successfully." });
//   } catch (error) {
//     console.error("Error linking the file to course:", error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

app.delete("/deletecourse/:courseId", requireRole(), async (req, res) => {
  const _id = req.params.courseId;

  try {
    const course = await Course.findById(_id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    await Course.findByIdAndDelete(_id);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Failed to delete course" });
  }
});

app.put(
  "/updatecourse/:courseId",

  requireRole(),
  async (req, res) => {
    const _id = req.params.courseId;
    const updatedCourseData = req.body;

    try {
      const course = await Course.findById(_id);

      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }

      Object.assign(course, updatedCourseData);
      await course.save();
      res.json({
        message: "Course updated successfully",
        updatedCourse: course,
      });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Failed to update course" });
    }
  }
);
app.post(
  "/reject-teacher/:userId",
  requireAuth,
  requireAdmin,
  async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.status = "rejected";
      await user.save();
      res.json({ message: "Teacher rejected successfully" });
    } catch (error) {
      console.error("Error rejecting teacher:", error);
      res.status(500).json({ error: "Failed to reject teacher" });
    }
  }
);

// Add a new route for changing the password
app.post("/changepassword/:userId", async (req, res) => {
  const _id = req.params.userId;
  const currentPassword = req.body.currentPassword;
  const newPassword = req.body.newPassword;

  try {
    // Verify the JWT from the request headers
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized (no token)" });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Ensure the user is trying to change their own password
    if (decoded._id !== _id) {
      return res
        .status(403)
        .json({ error: "Unauthorized (user ID does not match token)" });
    }

    // Find the user by ID
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify that the current password matches the stored password
    if (user.password !== currentPassword) {
      return res.status(401).json({ error: "Current password is incorrect" });
    }

    // Update the user's password with the new one
    user.password = newPassword;

    // Save the updated user
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ error: "Failed to change password" });
  }
});

app.post("/signup", async (req, res) => {
  const { email, name, phoneNumber, password, role } = req.body;

  try {
    // Create a new user instance and save it to the database
    const user = new User({
      email,
      name,
      phoneNumber,
      password,
      role,
      status: role === "teacher" ? "pending" : "approved",
    });
    await user.save();

    res.json({ message: "Successfull" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Internal server error" });
  }

  // Here, you'd typically hash the password and store the user data in a database.
  // For this example, we'll just log it and return a success message.

  //   console.log("Received signup data:", {
  //     email,
  //     fullName,
  //     phoneNumber,
  //     password,
  //     confirmPassword,
  //   });
  //   res.json({ message: "Signup successful!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
