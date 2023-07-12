import './App.css';
import Slider from './Slider'
import SlideBarItem from './SlideBar-Item'
import { useState } from 'react';


const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property : 'brightness',
    value : 100,
    range : {
      min :0,
      max : 200
    },
    unit : '%'
  },
  {
    name: 'Contrast',
    property : 'contrast',
    value : 100,
    range : {
      min :0,
      max : 200
    },
    unit : '%'
  },
  {
    name: 'Saturation',
    property : 'saturate',
    value : 100,
    range : {
      min :0,
      max : 200
    },
    unit : '%'
  },
  {
    name: 'Grayscale',
    property : 'grayscale',
    value : 0,
    range : {
      min :0,
      max : 100
    },
    unit : '%'
  },
  {
    name: 'Sepia',
    property : 'sepia',
    value : 0,
    range : {
      min :0,
      max : 100
    },
    unit : '%'
  },
  {
    name: 'Hue Rotate',
    property : 'hue-rotate',
    value : 0,
    range : {
      min :0,
      max : 360
    },
    unit : 'deg'
  },
  {
    name: 'Blur',
    property : 'blur',
    value : 0,
    range : {
      min :0,
      max : 20
    },
    unit : 'px'
  },
]

function App() {
  const [options,setOptions] =  useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex , setSelectedOptionIndex] = useState(0);
  const selectedOption  = options[selectedOptionIndex]

  /**
   * The function iterates over the previous options,
   * and if the index of the option does not match the index of the selected option, 
   * it returns the previous option. 
   * Otherwise, it returns a new option with the same properties as the previous option, 
   * except with the new value.
   */
  
  const handleSliderChange = ({target})=>{
       setOptions(prevOptions=>{
        return prevOptions.map((option,index)=>{
          if(index !== selectedOptionIndex) return option
           
          return {...option,value:target.value}
        })
       })
  }

  function getImageStyle(){
     const filters = options.map(option=>{
      return `${option.property}(${option.value}${option.unit})`
     })

     return {filter : filters.join(' ')}
  }

  console.log(getImageStyle());

  return (
    <div className='container'>
      <div className='image-container' style={getImageStyle()}></div>
      <div className='sidebar-container'>
          {options.map((option,index)=>{
             return(
              <SlideBarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={()=> setSelectedOptionIndex(index)}
             />
             )
          })}
      </div>
      <Slider
       min = {selectedOption.range.min}
       max = {selectedOption.range.max}
       value = {selectedOption.value}
       handleChange={handleSliderChange}
      />
    </div>
  );
}

export default App;
