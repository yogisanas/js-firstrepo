
const arr = [30, 50, 20, 10, 40]

for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        let t = 0 
        if(arr[i] > arr[j])
        {
            t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
        }
    }
    console.log(arr[i]);   
}

