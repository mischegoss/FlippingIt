
$( document ).ready(function() {

const swappedImage = $(".card-img-top")
const playButton = $(".play-again");
const headsImage ="./assets/heads.jpg";
const tailsImage ="./assets/tails.jpg";
const starterImage="./assets/coin-flip.jpg"
let wins = 0;
let loss = 0;


let randomNumber; 
let guess;


function setGame() {
    swappedImage.attr('src', starterImage);
    playButton.hide();
    $("#result").empty();
    $(".head-button").attr("disabled", false);
    $(".tail-button").attr("disabled", false);
    console.log("setGame")
}


function swapImage() {
    if (randomNumber === 0) {
        swappedImage.attr('src', headsImage);
        console.log("random === 0")

    } else {
        swappedImage.attr('src', tailsImage);
        console.log("random else")
    }
}

function updateWinLoss() {
    if (randomNumber === guess) {
        wins++
        console.log("add win")
      $("#wins").text(wins);
    } else {
        loss++
        $("#loss").text(loss);
        console.log(" add loss")
    

    }
}

function setHeadsTailinText() {
    if (randomNumber == 0) {
        $("#result").text("HEADS")
    } else {
        $("#result").text("TAILS")
    }
}

function freezeAfterPlay() {
    playButton.show();
    $(".head-button").attr("disabled", true);
    $(".tail-button").attr("disabled", true);
    playButton.attr("disabled", false);
    console.log("call freeze")
}

playButton.click(function() {
    console.log("button click")
    setGame();
 });

$( ".tail-button" ).click(function() {
    randomNumber = Math.floor(Math.random() * 2);
    guess = 1;
    console.log("tail click")
    swapImage(); 
    setHeadsTailinText();
    freezeAfterPlay();
    updateWinLoss();

  });

  $( ".head-button" ).click(function() {
      console.log("head click")
    randomNumber = Math.floor(Math.random() * 2);
    guess = 0;
    swapImage();
    updateWinLoss();
    setHeadsTailinText();
    freezeAfterPlay()
  });




setGame();

});//Doc ready ending 
