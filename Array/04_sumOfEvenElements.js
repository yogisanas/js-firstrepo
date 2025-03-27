
const arr = [2, 9, 4, 6]

let s = 0;

for(let i=0; i<arr.length; i++)
{
    if(arr[i] % 2 == 0)
    {
        s = s + arr[i]
    }
}

console.log(s);
