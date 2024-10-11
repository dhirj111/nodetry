const express1 = require("express");
//imported expres and saved in a constant

const LocalStorage = require("node-localstorage").LocalStorage;
//installed and used localstorae here and in  line 11
//imported node-ls with .ls method in ls variable
const filesystem1 = require("fs");
const router = express1.Router();
const bodyparser1 = require("body-parser");
router.use(bodyparser1.urlencoded({ extended: true }));
const localStorage = new LocalStorage("./scratch");
// stored Router method on express1 constant in a new constant
// now we can code the middlewares but we have to use methods on
// router instead of app as router.use('/', { ..middleware})

router.use("/", (req1, res1) => {
  // Store the username if submitted
  let username = localStorage.getItem("username");
  
  // Store the username if submitted
  if (req1.body.username) {
    username = req1.body.username;
    localStorage.setItem("username", username);
  }

  console.log("Current username:", username);


  const content = filesystem1.readFileSync('message1.txt', 'utf8');
  // console.log("File content:", content);

  // If a message is submitted, append it to the file
  if (req1.body.msg) {
    const newMessage = `${username}: ${req1.body.msg}\n`;
    filesystem1.appendFileSync("message1.txt", newMessage);
    // console.log("Appended message:", newMessage);
  }

  // Reload the file content to display updated messages
  const updatedContent = filesystem1.readFileSync('message1.txt', 'utf8');

  // Send response to display previous messages and ask for a new message
  res1.send(`
    <p>Previous messages:</p>
    <pre>${updatedContent}</pre>
    <form action="/" method="POST">
      <label for="msg">Enter your message:</label>
      <input type="text" name="msg" required>
      <button type="submit">Send Message</button>
    </form>
  `);
});

module.exports = router;
//we exported above defined router constant in module so that we can import and use this module in app.js
