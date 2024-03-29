function finalCountdown() {
    let futureDate = prompt("Please enter the future date in format yyyy-mm-dd \n(you need to use this exact format and use symbol - in order for it to work)");
    //Так, я бачив у лекції методи .getSeconds, .getMinutes та інші, але мені здалося, що використати звичайну математику буде простіше
    let total = new Date(futureDate).valueOf() - new Date().valueOf();
    let years = Math.floor(total/1000/60/60/24/365);
    let days = Math.floor((total - years*1000*60*60*24*365)/1000/60/60/24);
    let hours = Math.floor((total - years*1000*60*60*24*365 - days*1000*60*60*24)/1000/60/60);
    let minutes = Math.floor((total - years*1000*60*60*24*365 - days*1000*60*60*24 - hours*1000*60*60)/1000/60);
    let seconds = Math.floor((total - years*1000*60*60*24*365 - days*1000*60*60*24 - hours*1000*60*60 - minutes*1000*60)/1000);
    alert("The total difference between entered future date and now is " + years + " years, " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");
}
finalCountdown();