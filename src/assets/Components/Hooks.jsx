import React, { useEffect, useState } from 'react'
/**useState Hook with object */
const Hooks = () => {
   const[name ,setName]=  useState({firstName:'', lastName:''})
   const [count , setCount] = useState(0)

   useEffect(()=>{
    console.log('useeffect is running...')
   },[count]);
  return (
    <div>
        <input type="text" value={name.firstName} onChange={(e)=>setName({...name ,firstName : e.target.value})} />
        <input type="text" value={name.lastName} onChange={(e)=>setName({...name ,lastName :e.target.value})} />
        <h2>First Name is - {name.firstName}</h2>
        <h2>Last Name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
        <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default Hooks