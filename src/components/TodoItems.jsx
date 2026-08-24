import React from 'react'
import tick from '../assets/right_tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2 p-2 hover:bg-[#E8EDF2] hover:bg-opacity-30 rounded-lg transition-all'>

        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete ? tick : not_tick} alt="" />
            <p className= {`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>
                {text}
            </p>
        </div>

        <img onClick={ () => {deleteTodo(id)}} className='w-3.5 cursor-pointer hover:scale-125 transition-transform' src={delete_icon} alt="" />

    </div>
  )
}

export default TodoItems