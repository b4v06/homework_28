function daysDifference() {
    let total;
    let firstDate = prompt("Please enter the first date in format yyyy-mm-dd \n(you need to use this exact format and use symbol - in order for it to work)");
    let secondDate = prompt("Please enter the second date in format yyyy-mm-dd \n(you need to use this exact format and use symbol - in order for it to work)");
    if (new Date(firstDate).valueOf() > new Date(secondDate).valueOf()) {
        total = new Date(firstDate).valueOf() - new Date(secondDate).valueOf();
        total = total/1000/60/60/24;
        alert("The difference between first date and second date is " + total + " day(s)");
    } else if (new Date(firstDate).valueOf() == new Date(secondDate).valueOf()) {
        alert("The first date and the second date are equal");
    } else if (new Date(firstDate).valueOf() < new Date(secondDate).valueOf()) {
        total = new Date(secondDate).valueOf() - new Date(firstDate).valueOf();
        total = total/1000/60/60/24;
        alert("The difference between first date and second date is " + total + " day(s)");
    }

}
daysDifference();