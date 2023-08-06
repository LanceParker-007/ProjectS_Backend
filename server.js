import app from "./app.js";

try {
  app.listen(process.env.PORT || 5000, () => {
    // Function to start/listen server
    console.log(`Server is up and running!`);
  });
} catch (error) {
  console.log(error);
}
