export function getBubbleSortAnimation(array)
{
    if (array.length <= 1) 
    {
        return array;
    }
    let animations = [];
    let auxArray = array.slice();

    BubbleSort(auxArray, animations)
    array = auxArray
    return[animations, array];
}
  
function BubbleSort(auxArray, animations)
{
    const L = auxArray.length;
    for(let i = 0; i < L-1; i++ )
    {
        for(let j = 0; j < L-1; j++ )
        {
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            if(auxArray[j] > auxArray[j+1])
            {
                animations.push([j, auxArray[j+1]]);
                animations.push([j +1, auxArray[j]]);
                Swap(auxArray,j,j+1);
            }
            else
            {
                animations.push([-1,-1]);
                animations.push([-1,-1]);
            }
        }
    }
}

function Swap (auxArray, firstIndex, secondIndex)
{
    let temp = auxArray[firstIndex];
    auxArray[firstIndex] = auxArray[secondIndex];
    auxArray[secondIndex] = temp;


}