"use client"
import React, { FormEvent, useState } from 'react'


const Searchbar = () => {

  const [searchPrompt, setSearchPrompt] = useState('');
 
  const submit = async (event) => {
    
  }



  return (
    <div>
      <form className='flex flex-wrap gap-4 mt-12'
      onSubmit={submit}>
        <input type='text'
        value={searchPrompt}
        placeholder='Enter product name'
        className='searchbar-input'
        />
        <button
        type="submit" 
        className='searchbar-btn'
        >Search
        </button>
      </form>
    </div>
  )
}

export default Searchbar