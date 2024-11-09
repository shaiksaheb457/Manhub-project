window.addEventListener('load', function() {
    const dynamicText = document.getElementById('dynamic-text');
    console.log("Initial text loaded.");
  
    setTimeout(() => {
      console.log("Fading out text...");
      dynamicText.style.opacity = '0';  // Fade out
  
      setTimeout(() => {
        console.log("Changing text to 'FOR THE MEN WHO LEAD' and fading in.");
        dynamicText.textContent = 'FOR THE MEN WHO LEAD';  // Change text
        dynamicText.style.opacity = '1';  // Fade back in
      }, 1000);  // Delay for fade-out before changing text
    }, 1000);  // Initial delay before changing text
  });
  window.addEventListener('load', function() {
    const dynamicText = document.getElementById('dynamic-text');
    const words = ["MANHUB", "FOR THE MEN WHO LEAD"];
    let currentWordIndex = 0;
  
    function changeWord() {
      // Fade out the current word
      dynamicText.style.opacity = '0';
  
      // Change to the next word after 1 second (to ensure it stays visible for 1 second)
      setTimeout(() => {
        dynamicText.textContent = words[currentWordIndex];
        currentWordIndex = (currentWordIndex + 1) % words.length; // Loop back to the first word
  
        // Fade in the new word
        dynamicText.style.opacity = '1';
      }, 1000); // Ensure the word stays for 1 second
    }
  
    // Set the interval to change the word every 2 seconds (1000ms for fade, 1000ms for the new word)
    setInterval(changeWord, 1000); // Every 2 seconds to allow full transition
  });
  