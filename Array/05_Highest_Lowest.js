
const arr = [50, 20, 40, 70, 10, 30]

let max = arr[0]

for(let i=0; i<arr.length; i++)
{
    if(max < arr[i])          //--for lowest - if(min > arr[i])
        {
            max = arr[i]
        }
}

console.log(`Highest element is ${max}`);


let max2 = arr[0]

for(let i=0; i<arr.length; i++)
{
    if(max2 < arr[i] && max != arr[i])
    {
        max2 = arr[i]
    }
}

console.log(`Second highest is ${max2}`);
