// setting the carousel time
$(".carousel").carousel({
  interval: 4000, // carousel changes in every 4sec
});

// check if the product is hearted or not
var isHearted = [false, false, false, false];

const changeColor = (i) => {
  if (!isHearted[i]) {
    isHearted[i] = true;
    document.getElementById(`heart${i}`).style.color = "#ffcb2e";
  } else {
    isHearted[i] = false;
    document.getElementById(`heart${i}`).style.color = "#4a4a4a";
  }
};