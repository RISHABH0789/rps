// getting player names
const user1 = localStorage.getItem("user1");
const user2 = localStorage.getItem("user2");

// showing player names
document.getElementById("p1").textContent = user1;
document.getElementById("p2").textContent = user2;

// global variables
let gamer1 = null;
let gamer2 = null;

// player 1 chooses
function player1(button) {
    const pl1 = button.value;
    if (pl1 === "rock") gamer1 = 1;
    else if (pl1 === "paper") gamer1 = 2;
    else if (pl1 === "scissor") gamer1 = 3;

    // store emoji for later display
    document.getElementById("p1_choice").textContent = button.textContent;

    checkChoices(); // check if both chosen
}

// player 2 chooses
function player2(button) {
    const pl2 = button.value;
    if (pl2 === "rock") gamer2 = 1;
    else if (pl2 === "paper") gamer2 = 2;
    else if (pl2 === "scissor") gamer2 = 3;

    document.getElementById("p2_choice").textContent = button.textContent;

    checkChoices(); // check if both chosen
}

// check if both players have chosen
function checkChoices() {
    if (gamer1 !== null && gamer2 !== null) {
        // now show both boxes
        document.getElementById("p1_choice").style.visibility = "visible";
        document.getElementById("p2_choice").style.visibility = "visible";

        // call winner function
        checkWinner();
    }
}

// winner logic
function checkWinner() {
    const msg = document.getElementById("msg");
    const box = document.getElementById("msgbox");

    if (gamer1 === gamer2) {
        msg.textContent = "It's a Tie!";
    } else if (
        (gamer1 === 1 && gamer2 === 3) ||
        (gamer1 === 2 && gamer2 === 1) ||
        (gamer1 === 3 && gamer2 === 2)
    ) {
        msg.textContent = `${user1} Wins!`;
    } else {
        msg.textContent = `${user2} Wins!`;
    }

    box.style.visibility = "visible";
}
