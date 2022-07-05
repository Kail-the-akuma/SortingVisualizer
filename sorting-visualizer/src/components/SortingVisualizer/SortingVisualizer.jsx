import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgos/MergeSort';
import {getBubbleSortAnimation} from '../sortingAlgos/BubbleSort';
import './sortingVisualizer.css';


const animationSpeed = 2;

const maxArrayBars = 70;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

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
  }

  resetArray() 
  {
    const currentArray = [];
    for (let i = 0; i < maxArrayBars; i++) 
    {
      currentArray.push(randomIntFromInterval(5, 500));
    }
    this.setState({array: currentArray});
  }

  mergeSort() 
  {
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
  }

  bubbleSort() 
  {
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
          i * animationSpeed);
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
          i * animationSpeed);
        }
      }
    }

  quickSort() 
  {
    // We leave it as an exercise to the viewer of this code to implement this method.
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

                <select className='algo-Dropdown' onCha>
                    <option className='algo-Dropdown-option'>Selection Sort</option>
                    <option className='algo-Dropdown-option'>Bubble Sort</option>
                    <option className='algo-Dropdown-option'>Quick Sort</option>
                    <option className='algo-Dropdown-option'>Heap Sort</option>
                    <option className='algo-Dropdown-option'>Merge Sort</option>
                </select>
                <button className='btn' onClick={() => this.resetArray()}>Sort</button>

                <button className='btn' onClick={() => this.mergeSort()}>merge</button>
                <button className='btn' onClick={() => this.bubbleSort()}>bubbleSort</button>
                
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
            {/*
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.testSortingAlgorithms()}>
            Test Sorting Algorithms (BROKEN)
            </button> */}
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