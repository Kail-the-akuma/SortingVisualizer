export function getQuickSortAnimation(array)
{
    const animations = [];
    let [sortedArray,sortedAnimations] = quickSort(array, 0, array.length - 1, animations);

    console.log(sortedArray, sortedAnimations); 
    return [sortedAnimations];
}

    function swap(auxArray, leftIndex, rightIndex)
    {
        var temp = auxArray[leftIndex];
        auxArray[leftIndex] = auxArray[rightIndex];
        auxArray[rightIndex] = temp;
    }

    function partition(auxArray, left, right,animations ) {
        var pivot   = auxArray[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) 
        {
            animations.push([i,j]);
            animations.push([i,j]);

            while (auxArray[i] < pivot) 
            {
                animations.push([i,i]);
                animations.push([i,i]);
                i++;
            }
            while (auxArray[j] > pivot) 
            {
                animations.push([j,j]);
                animations.push([j,j]);
                j--;
            }
            if (i <= j) 
            {
                animations.push([i, auxArray[i]]);
                animations.push([j, auxArray[j]]);
                swap(auxArray, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    function quickSort(auxArray, left, right, animations) 
    {
        var index;
        if (auxArray.length > 1) 
        {
            index = partition(auxArray, left, right, animations); //index returned from partition

            if (left < index - 1)   //more elements on the left side of the pivot
            { 
                quickSort(auxArray, left, index - 1, animations);
            }
            if (index < right)      //more elements on the right side of the pivot
            { 
                quickSort(auxArray, index, right, animations);
            }
        }
        return [auxArray, animations];
    }


