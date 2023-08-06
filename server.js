import app from "./app.js";

try {
  app.listen(process.env.PORT || 5000, () => {
    // Function to start/listen server
    console.log(`Serving running on port ${process.env.PORT}`);
  });
} catch (error) {
  console.log(error);
}
