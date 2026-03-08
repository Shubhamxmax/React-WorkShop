import React from 'react'
import { useParams } from 'react-router-dom'    

function User() {
     const {userid} =useParams()
    return (
        <div className=' mt-2 mb-2 text-center 
         text-3xl'>User:{userid}</div>
    )
}

export default User
