const container = document.querySelector("#container")

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    container.appendChild(square);
}

let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
          let darkness = parseFloat(square.dataset.darkness) || 0;
          let r = square.dataset.r;
          let g = square.dataset.g;
          let b = square.dataset.b;

          if (!r && !g && !b) {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);

            square.dataset.r = r;
            square.dataset.g = g;
            square.dataset.b = b;
          }
          if (darkness < 1) {
            darkness += 0.1;
            square.dataset.darkness = darkness;

            const newR = Math.floor(r * (1 - darkness));
            const newG = Math.floor(g * (1 - darkness));
            const newB = Math.floor(b * (1 - darkness));
         
          square.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
          }
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
             
          let darkness = parseFloat(square.dataset.darkness) || 0;
          let r = square.dataset.r;
          let g = square.dataset.g;
          let b = square.dataset.b;

          if (!r && !g && !b) {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);

            square.dataset.r = r;
            square.dataset.g = g;
            square.dataset.b = b;
          }
          if (darkness < 1) {
            darkness += 0.1;
            square.dataset.darkness = darkness;

            const newR = Math.floor(r * (1 - darkness));
            const newG = Math.floor(g * (1 - darkness));
            const newB = Math.floor(b * (1 - darkness));
         
          square.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
          }

        });
    });
      
     })    

