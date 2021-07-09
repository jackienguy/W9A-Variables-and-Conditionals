var userAge = [19, 23, 19, 42, 17, 45, 32, 24];
var is_subscribed = [true, true, false, false, true, false, false, false];

var arrayLength = userAge.length;

for (var counter = 0; counter < arrayLength; counter++) {
    console.log(userAge[counter]);
    console.log(is_subscribed[counter]);
    if (userAge[counter] < 18) {
        if (is_subscribed[counter] != true) {    
            console.log("The user is younger than 18 and not subscribed");
        } else if (is_subscribed[counter]) {
            console.log("The user is younger than 18 and is subscribed");
        }
    } else  {
        if (is_subscribed[counter] != true) {
            console.log("The user is 18 or older and not subscribed");
        } else if (is_subscribed[counter]) {
            console.log("The user is 18 or older and is subscribed");
        }
    }
    console.log();
}

