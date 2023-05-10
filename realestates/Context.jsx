import React from 'react'
import axios from 'axios'
const Context = () => {

    axios.get('/profile').then((data)=>{

        console.log(data)
    })
  return (
    <div>


    </div>
  )
}

export default Context