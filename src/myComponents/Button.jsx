import React from 'react'

const Button = (props) => {

  return (
    <button className='flex flex-row justify-between items-center gap-3 p-2 bg-white rounded-full text-sm text-primary hover:text-white hover:bg-gray-800'>
        <span className=' font-bold'>{props.label}</span>
        {props.theURL?<img src={props.theURL}/>:""}
    </button>
  )
}

export default Button;
