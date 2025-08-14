#  Addition Game Web App

Live Preview: https://ramaddgamedy.ccbp.tech/

##  Visual Preview
Here’s how the game works—two numbers appear, and the player enters the sum. The app instantly tells them if they're right or wrong:

![Addition Game Preview](https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/addition-game-v1.gif)

---

##  Project Overview
The **Addition Game Web App** is a simple, interactive web application where the user is shown two numbers and must input the correct sum. Built with **HTML**, **CSS**, **Bootstrap**, and **JavaScript**, it highlights form handling, DOM updates, and responsiveness.

### Required Element IDs and Classes
- The `<span>` elements with class `number` must have IDs:
  - `firstNumber`
  - `secondNumber`
- The `<input>` element for user answer must have the ID:
  - `userInput`
- The `<p>` element showing the result with class `game-result` must have the ID:
  - `gameResult`

---

##  Features
- Displays two randomly generated numbers.
- User enters their guess in the input field.
- Results are displayed instantly:
  - **Correct!** if the answer matches.
  - **Try again** if not.
- Optionally includes a "New Game" button to refresh numbers.
- Fully responsive layout using **Bootstrap**.
- Smooth UI experience with instant feedback.

---

##  Tech Stack
- **HTML5** – Semantic structure and required IDs
- **CSS3 & Bootstrap 4/5** – Layout, styling, and responsiveness
- **JavaScript (ES6)** – Logic, random number generation, event handling, and DOM manipulation

---

##  How to Run the Project
1. Clone or download the repository.
2. Open `index.html` in your browser.
3. The two numbers will appear. Input the sum in the field with `id="userInput"`.
4. The result text (`<p id="gameResult">`) updates immediately based on your answer.
5. Click **New Game** (if implemented) to reset the numbers and play again.
6. Resize your browser to test the responsive design.

---

##  Concepts Applied
- Semantic HTML with specific `id` requirements
- Bootstrap grid and responsive utilities
- CSS styling for layout and feedback
- JavaScript for:
  - Random number generation
  - Event listeners for input
  - DOM updates based on user input

---

