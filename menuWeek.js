const printMenu = day => {
    switch (day) {
        case 1:
        console.log("Monday=Chana Masala");
        break;
        case 2:
        console.log("Tuesday=Paneer Masala");
        break;
        case 3:
        console.log("Wednesday=Chicken");
        break;
        case 4:
        console.log("Thursday=Veg Pulav");
        break;
        case 5:
        console.log("Friday=Egg Curry");
        break;
        case 6:
        console.log("Saturday=Idli Dosa");
        break;
        case 7:
        console.log("Sunday=Chicken Biryani");
        break;
        default:
        console.log("Sorry, we don't have a menu for that day.");
    }
    };
    printMenu(1);
    printMenu(4);
    printMenu(2);
    printMenu(7);