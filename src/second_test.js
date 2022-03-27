import {test} from "./first_test";
export function get_who_asked(){
    console.log(test());
    let str = test();
    str = str.replace(/!/g,"");
//    gets a random number and prints out different messages if it is equal to 3 or less
    if (Math.floor((Math.random() * 5) + 1) <= 3)
        return str + ", " + "big man asked";
    else
        return str + ", " + "small man asked";
}