import React from 'react';

import {getMergeSortAnimations} from '../sortingAlgos/MergeSort';
import {getBubbleSortAnimation} from '../sortingAlgos/BubbleSort';
import { getQuickSortAnimation } from '../sortingAlgos/QuickSort';
import './sortingVisualizer.css';


const animationSpeed = 2;

const maxArrayBars = 70;

const PRIMARY_COLOR = '#4dffa0';

const SECONDARY_COLOR = 'red';


const isSorted = false;
const isSorting = false;

export default class SortingVisualizer extends React.Component 
{


  constructor(props) 
  {
    super(props);

    this.state = 
    {
      array: [], 
    };
  }


  componentDidMount() 
  {
    this.resetArray();
    this.isSorted = false;
  }

  resetArray() 
  {
    const currentArray = [];
    for (let i = 0; i < maxArrayBars; i++) 
    {
      currentArray.push(randomIntFromInterval(5, 500));
    }
    this.setState({array: currentArray});
    this.isSorted = false;
  }

  mergeSort() 
  {
    if(this.isSorted || this.isSorting)
    {
      return;
    }
    this.isSorting = true;
    const animations = getMergeSortAnimations(this.state.array);
    
    for (let i = 0; i < animations.length; i++)
     {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      
      if (isColorChange) 
      {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => 
        {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, 
        i * animationSpeed);
      } 
      else {
        setTimeout(() => 
        {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, 
        i * animationSpeed);
      }
    }
    this.isSorting = false;
    this.isSorted = true;
  }

  bubbleSort() 
  {
    if(this.isSorted || this.isSorting)
    {
      return;
    }

    this.isSorting = true;

    let[animations,randomValue] = getBubbleSortAnimation(this.state.array); 
    for (let i= 0; i < animations.length; i++)
    {
        const isColorChange = (i % 4 === 0) || (i % 4 === 1);
        const arrayBars = document.getElementsByClassName('array-bar');
        if (isColorChange) 
        {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => 
          {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, 
          i * animationSpeed / 2);
        } 
        else {

            const [barIndex, newHeight] = animations[i];
            if(barIndex === -1)
            {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
          setTimeout(() => 
            {
              barStyle.height = `${newHeight}px`;
            }, 
           i * animationSpeed / 2);
      }
    }
    this.isSorted = true;
    this.isSorting = false;
  }
  
  quickSort() 
  {
    if(this.isSorted || this.isSorting)
    {
      return;
    }

    this.isSorting = true;
    let[animations] = getQuickSortAnimation(this.state.array); 

    for (let i= 0; i < animations.length; i++)
    {
        const isColorChange = (i % 4 === 0) || (i % 4 === 1);
        const arrayBars = document.getElementsByClassName('array-bar');
        if (isColorChange) 
        {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => 
          {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, 
          i * animationSpeed);
        } 
        else
        {

          const [barIndex, newHeight] = animations[i];
          if(barIndex === -1)
          {
            continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => 
          {
           barStyle.height = `${newHeight}px`;
          }, 
          i * animationSpeed );
        }
      }
      this.isSorted = true;
      this.isSorting = false;
  }
  

  heapSort() 
  {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }



  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  iterateForTesting() 
  {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) 
      {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b); //Array Sorted By deafault JS method
      const mergeSortedArray = getMergeSortAnimations(array.slice());   //Array Sorted by Merge
      console.log(areArraysEqual(javaScriptSortedArray, mergeSortedArray)); //Compare the two
    }
  }

  render() {
    const {array} = this.state;

    return (
        <div className='main-container'>
            {/*HEADER SECTION*/}
            <div className='header-container'>
            <button className='btn' onClick={() => this.resetArray()}>Generate New Array</button>

            <button className='btn' onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button className='btn' onClick={() => this.mergeSort()}>Merge Sort</button>
            <button className='btn' onClick={() => this.quickSort()}>quicksort</button>
                
            {/* <button className='btn' onClick={() => this.testSortingAlgo()}>IterateTest</button>*/}
            </div>

        <div className="array-container">
            {array.map((value, idx) => (
            <div
                className="array-bar"
                key={idx}
                style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                }}></div>
            ))}
        </div> 
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function areArraysEqual(arrayOne, arrayTwo) 
{
  if (arrayOne.length !== arrayTwo.length)
  {
    return false;
  } 
  for (let i = 0; i < arrayOne.length; i++) 
  {
    if (arrayOne[i] !== arrayTwo[i]) 
    {
      return false;
    }
  }
  return true;
}

