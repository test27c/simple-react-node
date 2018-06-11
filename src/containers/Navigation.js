import React from 'react'
import {Link} from 'react-router-dom';
import Aux from '../utils/Auxiliary'

const Navigation = (props) => {
  return (
    <Aux>
      <div style={{display:"flex", borderBottom:"1px solid silver", padding:"0 50px"}}>
        <h2 style={{padding:"10px 0"}}>Simple React Node Apps</h2>
        <ul style={{listStyle:"none", margin:"0", display:"flex", alignItems:"center"}}>
          <li style={{padding:"10px"}}><Link to='/'>Home</Link></li>
          <li style={{padding:"10px"}}><Link to='/create'>Create</Link></li>
          <li style={{padding:"10px"}}><Link to='/index'>List</Link></li>
          <li style={{padding:"10px"}}><Link to='/edit/:id'>Edit</Link></li>
        </ul>
      </div>
      <div style={{padding:"0 50px", marginTop:"50px"}}>
        {props.children}
      </div>
    </Aux>      
  )
}

export default Navigation
