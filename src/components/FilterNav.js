import React from 'react'
import '../styling.css'

const FilterNav = ({filterhandler}) => {
  return (
    <div className='filterNav'>
      <button type='button' onClick={()=>(filterhandler('all'))} className='filterButton'>All</button>
      <button type='button' onClick={()=>(filterhandler('active'))} className='filterButton'>Active</button>
      <button type='button' onClick={()=>(filterhandler('complete'))} className='filterButton'>Completed</button>
    </div>
  )
}

export default FilterNav
