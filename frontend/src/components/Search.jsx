import React from 'react'

function Search() {
  return (
    <div className='container mb-4 flex flex-row'>
        <input type="text" placeholder="Find workouts by body parts" className="input input-bordered input-info w-full mx-2 input-sm" />
        <button className='btn btn-info btn-outline btn-sm mr-2'>Search</button>
    </div>
  )
}

export default Search