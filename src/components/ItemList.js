import React from 'react'
import {Link} from 'react-router-dom'

const ItemList = (props) => {
  return (
    <div>
      <li style={{borderBottom:`${props.id !== props.serverPorts.length - 1 ? '1px solid silver' : null}`, backgroundColor:`${props.id % 2 === 0 ? 'floralwhite' : null}`}}>
        <span style={{borderRight:"1px solid silver", padding:"2px", display:"inline-block", minWidth:"50px"}}>{props.id}</span>
        <span style={{borderRight:"1px solid silver", padding:"2px", display:"inline-block", minWidth:"100px"}}>{props.serverPorts.name}</span>
        <span style={{padding:"2px", display:"inline-block", minWidth:"100px"}}>{props.serverPorts.port}</span>
        <span style={{padding:"2px", display:"inline-block", minWidth:"50px"}}><Link to={`/edit/${props.serverPorts._id}`}><button style={{cursor:"pointer", border:"none", color:"white", padding:"3px", fontSize:".7em", backgroundColor:"royalblue"}}>Edit</button></Link></span>
        <span style={{padding:"2px", display:"inline-block", minWidth:"50px"}}><button style={{cursor:"pointer", border:"none", color:"white", padding:"3px", fontSize:".7em", backgroundColor:"indianred"}} onClick={() => props.delete(props.serverPorts._id)}>Delete</button></span>
      </li>      
    </div>
  )
}

export default ItemList
