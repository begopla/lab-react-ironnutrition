import React from 'react'

import {Divider, Input} from 'antd'
const Search = ({searchedString, setSearchedString}) => {
  return (


    <div className='entry-form'>
    <Divider></Divider>

    <label className='entry-label'>Search</label>
    <Input value={searchedString} type="text" onChange={(e)=>{setSearchedString(e.target.value)}} />
    </div>
  )
}

export default Search