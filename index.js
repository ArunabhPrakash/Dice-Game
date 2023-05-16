var randomNumber1  = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// For second Image
var randomNumber2 = Math.floor(Math.random() * 6 )+ 1 ;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML="It's a Draw!";
}

/*
In the provided code, a dice rolling game is implemented using JavaScript and DOM manipulation. Let's break down the code step by step:
1. `var randomNumber1 = Math.floor(Math.random() * 6) + 1;` generates a random number between 1 and 6 (inclusive) using the `Math.random()` function and some arithmetic. This represents the value of the first dice roll.
2. `var randomDiceImage = "dice" + randomNumber1 + ".png";` constructs a string representing the image file name for the first dice based on the random number generated. For example, if `randomNumber1` is 3, the `randomDiceImage` will be "dice3.png".
3. `var randomImageSource = "images/" + randomDiceImage;` constructs the source path for the image of the first dice by combining the "images/" directory path with the `randomDiceImage` string. For example, if `randomDiceImage` is "dice3.png", the `randomImageSource` will be "images/dice3.png".
4. `var image1 = document.querySelectorAll("img")[0];` selects the first `img` element on the page using `document.querySelectorAll("img")` and accessing the element at index 0.
5. `image1.setAttribute("src", randomImageSource);` sets the `src` attribute of the first `img` element to the `randomImageSource`, effectively changing the image displayed on the webpage to the corresponding dice image.
6. The above steps are repeated for the second dice roll:
   - `var randomNumber2 = Math.floor(Math.random() * 6) + 1;` generates a random number between 1 and 6 for the second dice roll.
   - `var randomImageSource2 = "images/dice" + randomNumber2 + ".png";` constructs the image source path for the second dice roll.
   - `var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);` selects the second `img` element on the page and sets its `src` attribute to `randomImageSource2`, changing the displayed image for the second dice.
7. The code then compares the values of `randomNumber1` and `randomNumber2` to determine the winner or if it's a draw:
   - If `randomNumber1` is greater than `randomNumber2`, it sets the innerHTML of the `h1` element to "🚩Player 1 Wins!".
   - If `randomNumber1` is less than `randomNumber2`, it sets the innerHTML of the `h1` element to "Player 2 Wins! 🚩".
   - If `randomNumber1` is equal to `randomNumber2`, it sets the innerHTML of the `h1` element to "It's a Draw!".
In summary, this code simulates a dice rolling game where two players roll dice, and the outcome is displayed on the webpage. The dice images are randomly chosen, and the winner or draw is determined by comparing the values of the rolled dice.
*/
