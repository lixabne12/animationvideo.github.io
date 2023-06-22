
document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const backgroundImg = document.getElementById("bg-image");
    const femaleCharacterImg = document.getElementById("female-character-img");
    const headline1Img = document.getElementById("headline1-img");
    const headline2Img = document.getElementById("headline2-img");
    const subheadlineImg = document.getElementById("subheadline-img");
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const logoImg = document.getElementById("logo-img");
    const replayBtn = document.getElementById("replay-btn");
  
    // Initial animations on load
    backgroundImg.style.opacity = 1;
    femaleCharacterImg.style.opacity = 0;
    headline1Img.style.opacity = '0';
    // Delayed animations bg female 
    setTimeout(function() {
        backgroundImg.style.opacity = 1;
        femaleCharacterImg.style.left = 1;
        
      }, 1000);
      setTimeout(function() {
        
        femaleCharacterImg.style.left = 1;
        
      }, 2000);
       // Delayed animations female
    setTimeout(function() {
        backgroundImg.style.opacity = 1;
        femaleCharacterImg.style.opacity = 1;
        
      }, 3000);
       // Delayed animations female headline1
      setTimeout(function() {
        backgroundImg.style.opacity = 1;
        femaleCharacterImg.style.opacity = 1;
        headline1Img.style.opacity = 1;
      }, 4000);
      // Delayed animations female headline1
      setTimeout(function() {
        backgroundImg.style.opacity = 1;
        femaleCharacterImg.style.opacity = 0;
        headline1Img.style.opacity = 1;
      }, 5000);
      // Delayed animations headline2
    setTimeout(function() {
        backgroundImg.style.opacity = 1;
        femaleCharacterImg.style.opacity = 0;
        headline1Img.style.opacity = 0;
        headline2Img.style.opacity.left = 1;
      }, 6000);
    // Delayed animations
    setTimeout(function() {
        backgroundImg.style.opacity = 1;
      femaleCharacterImg.style.opacity = 0;
      headline2Img.style.opacity = 1;
    }, 7000);
  
    setTimeout(function() {
        femaleCharacterImg.style.opacity = 0;
        backgroundImg.style.opacity = 1;
      headline2Img.style.opacity = 1;
      subheadlineImg.style.opacity = 1;
    //   learnMoreBtn.style.opacity = 1;
    //   logoImg.style.opacity = 1;
    }, 8000);
  
    setTimeout(function() {
        femaleCharacterImg.style.opacity = 0;
        backgroundImg.style.opacity = 1;
      headline2Img.style.opacity = 1;
      subheadlineImg.style.opacity = 1;
      learnMoreBtn.style.opacity = 1;
      //logoImg.style.opacity = 1;
    //   replayBtn.style.opacity = 1;
    }, 9000);
    setTimeout(function() {
        backgroundImg.style.opacity = 1;
        headline2Img.style.opacity = 1;
        subheadlineImg.style.opacity = 1;
        logoImg.style.opacity = 1;
        learnMoreBtn.style.opacity = 1;
        
        // replayBtn.style.opacity = 1;
      }, 10000);
  
      setTimeout(function() {
        backgroundImg.style.opacity = 1;
        headline2Img.style.opacity = 1;
        subheadlineImg.style.opacity = 1;
        logoImg.style.opacity = 1;
        learnMoreBtn.style.opacity = 1;
        replayBtn.style.opacity = 1;
      }, 11000);
    // Replay animation on button click
    replayBtn.addEventListener("click", function() {
      window.location.reload(); // Refresh the banner to replay the animation
    });
  });
  