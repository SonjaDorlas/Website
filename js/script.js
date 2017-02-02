// var divWidth = document.getElementsByClassName('logoBody')[0].offsetWidth;
//
var logoBodyHeight = $(".logoBody").height();
var mainGifHeight = $(".mainGif").height();

var logoBodyWidth = $(".logoBody").width();
var mainGifWidth = $(".mainGif").width();
var mainGifWidthMobile = $(".mainGif-mobile").width();
var windowWidth = window.innerWidth;
var gifMobPos = (windowWidth/2) - (mainGifWidthMobile/2);

console.log('logoBodyWidth = ' + logoBodyWidth);
console.log('mainGifWidthMobile = ' + mainGifWidthMobile);
console.log('windowWidth = ' + windowWidth);
console.log('gifMobPos = ' + gifMobPos);
$('.carousel').carousel('cycle');

$('#modal').modal();

// $(".mainGif").css("top", 200 + "px");
// $(".mainGif").css("top", ((logoBodyHeight / 2) - (mainGifHeight / 2)) + "px");

// $(".mainGif").css("top", "170px");

$(".mainGif").css("left", ((logoBodyWidth - mainGifWidth) / 2) + "px");
// $(".mainGif-mobile").css("left", (gifMobPos) + "px");
$(".mainGif-mobile").css("left", ((logoBodyWidth - mainGifWidthMobile) / 2) + "px");

$(".button").click(function() {
    $(".phase").toggle();
});

var rand1, rand2, rand3;
var interval;

function randomIt() {
    return Math.floor(Math.random() * 200)
};

function resetColour() {
    $(".text0").css("color", "white")
    $(".text" + rand1).css("color", "white")
    $(".text" + rand2).css("color", "white")
    $(".text" + rand3).css("color", "white")
};

function arrive(){
    console.log("mouse is on")
}

function leave(){
    console.log("mouse is out")
}

function repeat() {
    // interval = window.setInterval(function() { console.log("Mouse is on image") }, 1000)
    // interval = window.setInterval(randomHighlighting, 3000)
    console.log("repeat() function is working");
    randomHighlighting();
};
$(".mainGif").on({
    mouseover: function() {
      arrive(),
        repeat(),
        displayImage();
    },
    mouseout: function() {
        window.clearInterval(interval),
        leave(),
        resetColour(),
        resetGif();
    }
});

function randomHighlighting() {
    $(".text0").css("color", "#FFA197")
    if (rand1 != 0) { //prevents first span ever going white.
        $(".text" + rand1).css("color", "white")
    }
    if (rand2 != 0) {
        $(".text" + rand2).css("color", "white")
    }
    if (rand3 != 0) {
        $(".text" + rand3).css("color", "white")
    }
    rand1 = randomIt();
    rand2 = randomIt();
    rand3 = randomIt();
    $(".text" + rand1).css("color", "#FFA197")
    $(".text" + rand2).css("color", "#FFA197")
    $(".text" + rand3).css("color", "#FFA197")
};
// var imagesArray = ["../images/hptestgifimg.png", "../images/gifimagetemplate2.png"];
// var imagesArray_Pink = []; HP_gifstop_.png
// var imagesArray_No_Pink = ["../images/HP_gifstop_pink.png", ];
// var imagesArray = ["images/head2.gpg", "images/head3.jpg"];

function displayImage() {
    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * 7); // 0...6
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    // document.canvas.src = imagesArray[num];
    document.canvas.src = "images/No_Pink/HP_gifstop_" + (num + 1) + ".png";
    // document.canvas.src = "Pink/HP_gifstop" + (num + 1) + "_pink.png";
    // HP_gifstop7_pink.png

}

function resetGif() {
    document.canvas.src = "images/HPGIF_slow.gif";
}
