import React from 'react'
import {NavLink} from 'react-router-dom'

let NotFound=()=>{
    return <div className='container'>
        <h1>Page Not Found</h1>
        <NavLink to={'/'}>Home</NavLink>
    </div>
}
export default NotFound