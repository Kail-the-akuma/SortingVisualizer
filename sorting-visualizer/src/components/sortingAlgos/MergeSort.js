export function getMergeSortAnimations(array)
 {
    const animations = [];
    if (array.length <= 1) 
    {
        return array;
    }
    const auxiliaryArray = array.slice();
    mergeHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeHelper (mainArray, startIndex, endIndex, auxArray, animations) 
  {
    if (startIndex === endIndex) 
    {
        return;
    }

    const middleIdx = Math.floor((startIndex + endIndex) / 2);
    mergeHelper(auxArray, startIndex, middleIdx, mainArray, animations);
    mergeHelper(auxArray, middleIdx + 1, endIndex, mainArray, animations);
    merge(mainArray, startIndex, middleIdx, endIndex, auxArray, animations);
  }
  
  function merge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) 
    {

      animations.push([i, j]);
      animations.push([i, j]);

      if (auxiliaryArray[i] <= auxiliaryArray[j])
      {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } 
      else 
      {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) 
    {
      animations.push([i, i]);
      animations.push([i, i]);

      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx)
    {

      animations.push([j, j]);
      animations.push([j, j]);

      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

