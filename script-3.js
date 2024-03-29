function howOldAreYou() {
    let birthDate = prompt("Please enter your birthday in format yyyy-mm-dd \n(you need to use this exact format and use symbol - in order for it to work)");
    let total = Math.floor((new Date().valueOf() - new Date(birthDate).valueOf())/1000/60/60/24/365);
    alert("You are (most probably) " + total + " year(s) old");
}
howOldAreYou();