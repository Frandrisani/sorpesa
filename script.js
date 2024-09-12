document.addEventListener("DOMContentLoaded", function () {
  const startScreen = document.getElementById("start-screen");
  const questionScreen = document.getElementById("question-screen");
  const resultScreen = document.getElementById("result-screen");
  const playButton = document.getElementById("play-button");
  const nextButton = document.getElementById("next-button");
  const questionText = document.getElementById("question-text");
  const resultMessage = document.getElementById("result-message");
  const imagePlaceholder = document.getElementById("image-placeholder");

  let currentQuestion = 1;

  playButton.addEventListener("click", function () {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
    // Logic to change image if needed: imagePlaceholder.src = 'new-image.jpg';
  });

  nextButton.addEventListener("click", function () {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (!answer) return; // Ensure an answer is selected

    if (currentQuestion === 1) {
      currentQuestion++;
      questionText.textContent = "Domanda 2: Quanto fa 3 + 3?";
      document.getElementById("answers").innerHTML = `
            <label><input type="radio" name="answer" value="a"> 3</label>
            <label><input type="radio" name="answer" value="b"> Sotto al pontos</label>
            <label><input type="radio" name="answer" value="c"> 6</label>
          `;
    } else if (currentQuestion === 2) {
      currentQuestion++;
      questionText.textContent =
        "Domanda 3: Se avessi un desiderio ora, quale sarebbe?";
      document.getElementById("answers").innerHTML = `
            <label><input type="radio" name="answer" value="a"> Che un bravo ragazzo mi offrisse del sushi</label>
            <label><input type="radio" name="answer" style="color: red" value="b"> Sentire fra dire 'vavallina' da piccolo</label>
            <label><input type="radio" name="answer" value="c"> Un campo di zucchine enorme sotto casa</label>
          `;
      nextButton.textContent = "Scopri cosa hai vinto";
    } else if (currentQuestion === 3) {
      if (answer.value === "a") {
        questionScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        resultMessage.textContent =
          "Hai vinto un pranzo o cena al sushi offerto interamente dallo sviluppatore!";
      } else {
        resultMessage.textContent =
          "Mi dispiace, non è possibile... riprova a scegliere e clicca qui.";
        nextButton.textContent = "Risposta sbagliata, scegli un'altra risposta";
        // Optional: Add logic to reset questions or go back to start
      }
    }
  });
});
