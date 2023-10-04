import React from 'react'
import {MdDeleteForever, MdCancel,MdCheck} from "react-icons/md"
import '../styling.css'

function TodoItem ({TodoData, deleteItem, statusUpdate})  {
  return (
    <div>
    <div className='Item-container'>
        <div className='Icon-and-item'>
            <div className='icon-cancel'>
              {TodoData.status ? <MdCheck onClick={() => statusUpdate(TodoData.id)}/>:
              <MdCancel onClick={() => statusUpdate(TodoData.id)}/> }
                </div>
            <div className={`${TodoData.status ? "strikethrough" : "grey-text"}`}>{TodoData.text}</div>
        </div>
        <div className='DelForever'>
                <MdDeleteForever onClick={() => deleteItem(TodoData.id) }/>
         </div>
    </div>
        <div className='separator'> </div>
    </div>

  )
}

export default TodoItem
