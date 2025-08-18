//#. for in:-
//#. Objects:-

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "rubby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
      // js           //--output
      // cpp
      // rb
      // swift

    // console.log(myObject[key]);
    //    javascript       //--output
    //    c++
    //    rubby
    //    swift by apple

    // console.log(`${key} shortcut for ${myObject[key]}`);
    //   js shortcut for javascript
    //   cpp shortcut for c++
    //   rb shortcut for rubby
    //   swift shortcut for swift by apple
}


//#. Array:-
//--keys in array starts from 0 and by default is in number format.

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
  // console.log(key);
    // 0       //--output
    // 1
    // 2
    // 3
    // 4

    // console.log(programming[key]);
    //   js      //--output
    //   rb
    //   py
    //   java
    //   cpp
}


//#. Maps:-

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}