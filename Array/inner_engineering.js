const myArray = []
// %DebugPrint(myArray)   --v8 engine

//** There are two types of array:- 
// 1. Continious / Packed
// 2. Holey

//** Types of above two array:-
// 1. SMI (small integer)
// 2. Packed Element
// 3. Double (float, String, function)


// 1. Continious / Packed
//--default/ most preferred array
//--Once it becomes PACKED_DOUBLE_ELEMENTS, it cannot revert back to PACKED_SMI_ELEMENTS 
//--optimization depends on types of array elements

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY ELEMENTS


console.log(arrTwo);          //-- [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(arrTwo.length);   //-- 11
console.log(arrTwo[9]);       //-- undefined
console.log(arrTwo[19]);      //-- undefined

// bound check  -- out of bound
// hasOwnProperty(arrTwo, 9)              //--expensive checks
// hasOwnProperty(arrTwo.prototype, 10)   //--checks starts for holey array
// hasOwnProperty(Object.prottotype, 10)

// holes are very expensive in js   


const arrThree = [1,2,3,4,5]
console.log(arrThree[8]);

//** Optimization steps:-
// SMI > DOUBEL > PACKED          //--packed
// H_SMI > H_DOUBEL > H_PACKED    //--holey


const arrFour = new Array(3)
// just 3 holes / HOLEY_SMI_ELEMENTS
arrFour[0] = '1'  // HOLEY_ELEMENTS
arrFour[1] = '2'  // HOLEY_ELEMENTS
arrFour[2] = '3'  // HOLEY_ELEMENTS

//--More optimize / better approach
const arrFive = []
arrFive.push('1')  // PACKED_ELEMENTS
arrFive.push('2')  // PACKED_ELEMENTS
arrFive.push('3')  // PACKED_ELEMENTS

const arrSix = [1,2,3,4,5]

arrSix.push(NaN)       // DOUBLE
arrSix.push(Infinity)  // DOUBLE


// IMP:--
//-- It prefers to use array methods (for, for-of, for-in, foreach) for optimization of any browser