const msg = document.getElementById("msg");
const textArea = document.querySelector("textarea");
const btn = document.getElementById("btn");
let startTime, endTime;
const toDisplay = [
  "Lets see how fast you can type Good things require a lot of hardwork and dedication",
  "Rahul was standing in a queue to get groceries He forgot his wallet at home",
  "Practice makes a man perfect even in the competitive world So keep on practicing"
];
function endGame() {
  endTime = new Date().getTime();
  let totalTime = (endTime - startTime) / 1000;
  let inputString = textArea.value;
  let totalWordCount = inputString.split(" ").length;
  let speed = Math.round((totalWordCount / totalTime) * 60);
  let givenString = msg.innerText;
  let correctwords = 0;

  let arr1 = inputString.split(" ");
  let arr2 = givenString.split(" ");

  for (let idx = 0; idx < Math.min(arr1.length, arr2.length); idx = idx + 1) {
    if (arr1[idx] === arr2[idx]) {
      correctwords = correctwords + 1;
    }
  }
  let finalMsg =
    "Congratulations ! You typed " +
    totalWordCount +
    " words with a speed of " +
    speed +
    " words per minute . You typed " +
    correctwords +
    " correct words out of " +
    arr2.length +
    " words.";
  msg.innerText = finalMsg;
  textArea.value = "";
}
function playGame() {
  let date = new Date();
  startTime = date.getTime();
  let idx = Math.floor(Math.random() * toDisplay.length);
  msg.innerText = toDisplay[idx];
}
btn.addEventListener("click", () => {
  if (btn.innerText === "Start") {
    textArea.disabled = false;
    playGame();
    btn.innerText = "Done";
  } else if (btn.innerText === "Done") {
    textArea.disabled = true;
    endGame();
    btn.innerText = "Start";
  }
});
