function register() {
    
    let user1 = document.getElementById("p1").value.trim();
    let user2 = document.getElementById("p2").value.trim();
    
    if (user1 === "" || user2 === "") {
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("msg").textContent = "Please fill all information!";
        setTimeout(() => msg.style.visibility = "hidden", 3000);
    }
    
    else if(user1 === user2){
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("msg").textContent = "Names can't be same";
        setTimeout(() => msg.style.visibility = "hidden", 3000);
    }
    
    else {
        localStorage.setItem("user1", user1);
        localStorage.setItem("user2", user2);
        window.location.href = "pvp.html";
    }
}