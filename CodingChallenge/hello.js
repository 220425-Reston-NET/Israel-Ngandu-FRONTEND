let arr = ["Kevin", "Steve", "Nikki"]

let str = "Kevin"

let pigLatinarr = arr.map((name) => {
    let firstChar = name.charAt(0);
    name = name.concat(firstChar + "ay");
    name = name.substring(1);
    return name;
})
let firstChar = str.charAt(0);
 str = str.concat(firstChar + "ay");
 str = str.substring(1);
 console.log(str);

console.log(pigLatinarr)

       
