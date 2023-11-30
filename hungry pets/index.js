const pets = ["🐇","🐱", "🐶", "🐕", "🐈", "🐰", "🦎","🐹", "😻", 
  "🐧", "🐷", "🐦", "🦖", "🐓", "🐭", "🐩", "🐳", "🐀", "🐬" ];


  const petNames = [
    "Fluffy", "Whiskers", "Buddy", "Luna", "Max",
    "Oreo", "Coco", "Mittens", "Simba", "Snowball",
    "Daisy", "Rocky", "Shadow", "Sunny", "Charlie",
    "Oliver", "Ziggy", "Pumpkin", "Nala"
  ];

  const petsContainer = document.querySelector("#pets-container");

  function shuffleArray(pets) {
    // Make a copy of the original array to avoid modifying it directly
    const shuffledArray = pets.slice();
  
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  
  const shuffledArray = shuffleArray(pets);
  
  let currentIndex = 0;
  let nameIndex = 0;


  function firstAnimal() {
    const message = document.querySelector("#message");
    const div = document.createElement("div");
    div.className = "pets-frame";
  
    const emoji = document.createElement("p");
    emoji.textContent = shuffledArray[currentIndex];
    emoji.style.fontSize = "40px";
    emoji.style.marginTop = "0px";
    div.appendChild(emoji);
    emoji.addEventListener("click", function () {
      loveBar = 100;
      document.body.style.cursor = 'url("image.webp"), auto';
  
      // Reset cursor after a short delay (e.g., 2 seconds)
      setTimeout(function () {
        document.body.style.cursor = 'auto';
      }, 2000);
      document.body.style.cursor="💚";
    });
  
    const name = document.createElement("p");
    name.textContent = petNames[nameIndex];
    nameIndex++;
    div.appendChild(name);
  
    const hunger = document.createElement("p");
    hunger.textContent = "Hunger: ";
    div.appendChild(hunger);
  
    // Progress bar container
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progress-bar-container";
    const progressBarContainer2 = document.createElement("div");
    progressBarContainer2.className = "progress-bar-container2";
  
    // Progress bar
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.width = "0% ";
    progressBarContainer.appendChild(progressBar);
    let hungerBar = 0;
    setInterval(function () {
      if(hungerBar === 100){
        div.style.backgroundColor = "blue";
        div.style.width = "130px";
        div.style.height = "250px";
        progressBarContainer.remove();
        hunger.textContent = `"May their soul find eternal joy in the afterlife."`;
        love.textContent = '';
        progressBarContainer2.remove();
        button.remove();
        currentIndex =19;
        
      } else {
      hungerBar += 1;
      progressBar.style.width = `${hungerBar}%`;
      }
    }, 1000);
    let loveBar = 100;
    setInterval(function () {
      loveBar -= 1;
      progressBar2.style.width = `${loveBar}%`;
    }, 1000);
  
    // ends here
    // Append progress bar container under hunger
    div.appendChild(progressBarContainer);
  
    const love = document.createElement("p");
    love.textContent = "Love: ";
    div.appendChild(love);
    // Progress bar for love
    const progressBar2 = document.createElement("div");
    progressBar2.className = "progress-bar2";
  
    progressBar2.style.width = Math.min(pets.love, 100) + "%";
    progressBarContainer2.appendChild(progressBar2);
    div.appendChild(progressBarContainer2);
  
    const button = document.createElement("button");
    button.style.marginTop = "10px";
    button.textContent = "Feed me 🍞";
    button.addEventListener("click", function () {
      hungerBar = 0;
    });
    div.appendChild(button);
  
    petsContainer.appendChild(div);
  }

  firstAnimal();
  currentIndex++; 
  
  function displayArray() {
    if (currentIndex < shuffledArray.length) {
      firstAnimal();  // Call the function to create a new animal element
      currentIndex++;
    } else {
      clearInterval(intervalId);
    }
  }
  
  const intervalId = setInterval(displayArray,10000);

  