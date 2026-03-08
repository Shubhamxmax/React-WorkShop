import {React, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {
    // const [user, setUser] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/shradha-khapra')
    //         .then(response => response.json())
    //         .then(data => setUser(data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []); 

    const user=useLoaderData() 
    return (
        <>
        <div className=' text-center m-4 bg-gray-600 text-white p-4
         text-3xl'>Github Followers: {user.followers}
         <img src={user.avatar_url} alt="User Avatar"  className='w-50 h-50 rounded-2xl'/></div>
         </>
    )
}

export default Github

export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/shradha-khapra');
  if(!response.ok){
    throw new Error('Failed to fetch github info');
  }
  return response.json();
} 

