const min=1;
const max=3;

function game(button){
    //getting values of computer and user
    let computer=Math.floor(Math.random()*(max-min+1)+min);
    let user_value=button.value;
    let user;
    //converting user value to num
    if(user_value=="rock"){
        document.getElementById("option").style.visibility = "hidden";
        document.getElementById("user_option").style.visibility="visible";
        document.getElementById("you").style.visibility="visible";
        document.getElementById("user_option").textContent="🪨";
        user=1;
    }
    else if(user_value=="paper"){
        document.getElementById("option").style.visibility = "hidden";
        document.getElementById("user_option").style.visibility="visible";
        document.getElementById("you").style.visibility="visible";
        document.getElementById("user_option").textContent="📄";
        
        user=2;
    }
    else if(user_value=="scissor"){
        document.getElementById("option").style.visibility = "hidden";
        document.getElementById("user_option").style.visibility="visible";
        document.getElementById("you").style.visibility="visible";
        document.getElementById("user_option").textContent="✂️";
        
        user=3;
    }
    //converting computer num to img
    if(computer==1){
        document.getElementById("response").style.visibility="visible";
        document.getElementById("option").style.visibility = "hidden";
        document.getElementById("response").textContent="🪨";
    }
    else if(computer==2){
        document.getElementById("response").style.visibility="visible";
        document.getElementById("option").style.visibility = "hidden";
        document.getElementById("response").textContent="📄";
    }
    else if(computer==3){
        document.getElementById("response").style.visibility="visible";
        document.getElementById("option").style.visibility = "hidden";
        document.getElementById("response").textContent="✂️";
    }
    //deciding winner
    if(user == computer){
        setTimeout(() => {
            document.getElementById("response").style.visibility = "hidden";
            document.getElementById("option").style.visibility = "hidden";
            document.getElementById("computer").style.visibility = "hidden";
            document.getElementById("you").style.visibility = "hidden";
            document.getElementById("user_option").style.visibility = "hidden";
            document.getElementById("msgbox").style.visibility = "visible";
            document.getElementById("msg").style.color = "#FFD600";
            document.getElementById("msg").textContent = "It's Draw!";
        }, 2000);
    }
    else if (user == 1 && computer == 3 || user == 2 && computer == 1 || user == 3 && computer == 2) {
        setTimeout(() => {
            document.getElementById("response").style.visibility = "hidden";
            document.getElementById("option").style.visibility = "hidden";
            document.getElementById("computer").style.visibility = "hidden";
            document.getElementById("you").style.visibility = "hidden";
            document.getElementById("user_option").style.visibility = "hidden";
            document.getElementById("msgbox").style.visibility = "visible";
            document.getElementById("msg").style.color = "#00C853";
            document.getElementById("msg").textContent = "You Win!";
        }, 2000);
    }
    else{
        setTimeout(() => {
            document.getElementById("response").style.visibility = "hidden";
            document.getElementById("option").style.visibility = "hidden";
            document.getElementById("computer").style.visibility = "hidden";
            document.getElementById("you").style.visibility = "hidden";
            document.getElementById("user_option").style.visibility = "hidden";
            document.getElementById("msgbox").style.visibility = "visible";
            document.getElementById("msg").style.color = "#E53935";
            document.getElementById("msg").textContent = "You Lose!";
        }, 2000);
    }
}
