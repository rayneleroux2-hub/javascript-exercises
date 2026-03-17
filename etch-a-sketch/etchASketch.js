const container = document.querySelector("#container")

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    container.appendChild(square);
}

let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
          square.classList.add("active");  
        });
      });

const button = document.querySelector("#reset-grid");
     button.addEventListener("click", () => {
      let num = parseInt(prompt("Enter number of squares per side(max 100)"));
      
      if (isNaN(num) || num < 1) {
        num = 16;
      } else if (num > 100) {
        num = 100;
      }

      container.innerHTML = "";

      const squareSize = 100 / num;

for (let i = 0; i< num * num; i++) {
  const square = document.createElement("div");
  square.classList.add("square")
  square.style.width = `${squareSize}%`;
  square.style.aspectRatio = "1 / 1"; 
  container.appendChild(square)
}

 squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
          square.classList.add("active");  
        });
    });
      
     })    

