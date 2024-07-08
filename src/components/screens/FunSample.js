import React, { useState } from 'react'

export default function FunSample() {
    const [name,setName] = useState('anu')
    const [age,setAge] = useState(0)
    return (
    <div>
        <h1>{name} {age}</h1>
        <button onClick={()=>setName('anuachu')}>Update Name</button>
        <button onClick={()=>setAge((prevState)=>  prevState+1)}>Update Age</button>
        <img src="https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
  )
}
