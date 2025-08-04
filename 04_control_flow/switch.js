//--without break; remaining all the code get execute except default.

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("Invalid");
        break;
}


//------------------------------------------------------------------------------------------------------

const char = 'A'          //--It's: A

switch (char) {
    case 'a':
        console.log("It's: a");
        break;
    case 'A':
        // console.log("It's: A");
        console.log(`It's: ${char}`);     //--It's: A
        break;

    default:
        console.log("Invalid Char");
        break;
}