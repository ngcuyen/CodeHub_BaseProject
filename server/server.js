import express from "express";
import cors from "cors";
import recordsRouter from "./routes/record.js";
import problemsRouter from "./routes/problem.js"; // Import the problems router

const PORT = process.env.PORT || 5050;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/record", recordsRouter);
app.use("/problem", problemsRouter); // Add the problems router

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
