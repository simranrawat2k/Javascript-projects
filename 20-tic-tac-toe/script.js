const result = document.querySelector(".box .result");

let flag = false;
let over = false;

let matrix1 = [
  ["", "", ""], // top
  ["", "", ""], // middle
  ["", "", ""], // bottom
];

const flex = document.querySelectorAll(".game .grid .flex");

flex.forEach((x) => {
  x.addEventListener("click", () => {
    if (over) {
    } else if (x.textContent === "") {
      if (flag) {
        oTurn(x);
      } else {
        xTurn(x);
      }
    } else {
    }
  });
});

function oTurn(x) {
  flag = false;
  x.textContent = "O";
  x.style.cursor = "not-allowed";
  result.textContent = "X's Turn";
  if (x.classList.contains("one-one")) {
    matrix1[0][0] = "O";
  } else if (x.classList.contains("one-two")) {
    matrix1[0][1] = "O";
  } else if (x.classList.contains("one-three")) {
    matrix1[0][2] = "O";
  } else if (x.classList.contains("two-one")) {
    matrix1[1][0] = "O";
  } else if (x.classList.contains("two-two")) {
    matrix1[1][1] = "O";
  } else if (x.classList.contains("two-three")) {
    matrix1[1][2] = "O";
  } else if (x.classList.contains("three-one")) {
    matrix1[2][0] = "O";
  } else if (x.classList.contains("three-two")) {
    matrix1[2][1] = "O";
  } else {
    matrix1[2][2] = "O";
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix1[i][j] == "O") {
        if (j == 2) {
          result.textContent = "O's Wins";
          over = true;
          reset();
          return;
        }
      } else {
        break;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix1[j][i] == "O") {
        if (j == 2) {
          result.textContent = "O's Wins";
          over = true;
          reset();
          return;
        }
      } else {
        break;
      }
    }
  }

  if (matrix1[0][0] == "O" && matrix1[1][1] == "O" && matrix1[2][2] == "O") {
    result.textContent = "O's Wins";
    over = true;
    reset();
    return;
  }

  if (matrix1[0][2] == "O" && matrix1[1][1] == "O" && matrix1[2][0] == "O") {
    result.textContent = "O's Wins";
    over = true;
    reset();
    return;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix1[i][j] == "") {
        return;
      } else {
        if (i == 2 && j == 2) {
          result.textContent = "Game tied!";
          over = true;
          reset();
        }
      }
    }
  }

}

function xTurn(x) {
  flag = true;
  x.textContent = "X";
  x.style.cursor = "not-allowed";
  result.textContent = "O's Turn";
  if (x.classList.contains("one-one")) {
    matrix1[0][0] = "X";
  } else if (x.classList.contains("one-two")) {
    matrix1[0][1] = "X";
  } else if (x.classList.contains("one-three")) {
    matrix1[0][2] = "X";
  } else if (x.classList.contains("two-one")) {
    matrix1[1][0] = "X";
  } else if (x.classList.contains("two-two")) {
    matrix1[1][1] = "X";
  } else if (x.classList.contains("two-three")) {
    matrix1[1][2] = "X";
  } else if (x.classList.contains("three-one")) {
    matrix1[2][0] = "X";
  } else if (x.classList.contains("three-two")) {
    matrix1[2][1] = "X";
  } else {
    matrix1[2][2] = "X";
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix1[i][j] == "X") {
        if (j == 2) {
          result.textContent = "X's Wins";
          over = true;
          reset();
          return;
        }
      } else {
        break;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix1[j][i] == "X") {
        if (j == 2) {
          result.textContent = "X's Wins";
          over = true;
          reset();
          return;
        }
      } else {
        break;
      }
    }
  }

  if (matrix1[0][0] == "X" && matrix1[1][1] == "X" && matrix1[2][2] == "X") {
    result.textContent = "X's Wins";
    over = true;
    reset();
    return;
  }

  if (matrix1[0][2] == "X" && matrix1[1][1] == "X" && matrix1[2][0] == "X") {
    result.textContent = "X's Wins";
    over = true;
    reset();
    return;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(matrix1[i][j]);
      if (matrix1[i][j] == "") {
        return;
      } else {
        if (i == 2 && j == 2) {
          result.textContent = "Game tied!";
          over = true;
          reset();
        }
      }
    }
  }

}

function reset() {
  flex.forEach((x) => {
    x.addEventListener("mouseenter", () => {
      // Set cursor style to 'not-allowed' on hover
      x.style.cursor = "not-allowed";
    });

    // Remove the event listener when mouse leaves the element
    x.addEventListener("mouseleave", () => {
      // Reset cursor style to the default
      x.style.cursor = "auto";
    });
  });
}

const btn = document.querySelector(".restart button");

btn.addEventListener("click", () => {
  flag = false;
  over = false;

  matrix1 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  result.textContent = "X's Turn";

  flex.forEach((x) => {
    x.textContent = "";
    x.style.cursor = "pointer";
    x.addEventListener("mouseenter", () => {
      // Set cursor style to 'not-allowed' on hover
      x.style.cursor = "pointer";
    });

    // Remove the event listener when mouse leaves the element
    x.addEventListener("mouseleave", () => {
      // Reset cursor style to the default
      x.style.cursor = "auto";
    });
  });
});
