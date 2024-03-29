function daysDifference() {
    let years = new Date().getFullYear();
    let months = new Date().getMonth() + 1;
    let days = new Date().getDate();
    let todayDate = years.toString() + "-" + months.toString() + "-" + days.toString();
    let finalDate = prompt("Please, enter the deadline for your task, it must be in format yyyy-mm-dd \n(you need to use this exact format and use symbol - in order for it to work)");
    //Conversion to simpler look + crutch for time zones
    todayDate = new Date(todayDate).valueOf() + 7200000;
    finalDate = new Date(finalDate).valueOf();
    if (finalDate > todayDate) {
        let count = 0;
        let i = todayDate;
        while (i < finalDate) {
            let localYears = new Date(i).getFullYear();
            let localMonths = new Date(i).getMonth() + 1;
            let localDays = new Date(i).getDate();
            let tempDate = localYears.toString() + "-" + localMonths.toString() + "-" + localDays.toString();
            if (new Date(tempDate).getDay() < 5) {
                count++;
            }
            i += 86400000;
        }
        if (count == 0) {
            alert("Oh no! There is just weekend left!");
        } else {
            alert("We are chilling, we still have " + count + " days left");
        }
    } else if (finalDate == todayDate) {
        alert("Oh no! The deadline is today");
    } else if (finalDate < todayDate) {
        let count = 0;
        let i = finalDate;
        while (i < todayDate) {
            let localYears = new Date(i).getFullYear();
            let localMonths = new Date(i).getMonth() + 1;
            let localDays = new Date(i).getDate();
            let tempDate = localYears.toString() + "-" + localMonths.toString() + "-" + localDays.toString();
            if (new Date(tempDate).getDay() < 5) {
                count++;
            }
            i += 86400000;
        }
        if (count == 0) {
            alert("We are one weekend behind the schedule!");
        } else {
            alert("Oh crap! We are " + count + " days behind the schedule!");
        }
    }
}
daysDifference();