import React, { Component } from 'react'
import axios from 'axios';
import ItemList from './ItemList'

export class IndexComponent extends Component {
  state = {
    serverPorts: []
  }
  
  loadData = () => {
    axios.get('http://localhost:4200/serverport/')
      .then(res => this.setState({serverPorts: res.data}))
      .catch(err => console.log(err))
  }
  
  componentDidMount() {
    this.loadData();
  } 
  
  handleDelete = (id) => {
    axios.get(`http://localhost:4200/serverport/delete/${id}`)
      .then(res => {console.log('deleted'); this.loadData();})
      .catch(err => console.log(err))
  }
  
  render() {
    let renderItem = <li>loading...</li>;
    if (this.state.serverPorts.length) {
      renderItem = this.state.serverPorts.map((item, id) =>
        <ItemList key={item.name + id + item.port} id={id} serverPorts={item} delete={this.handleDelete} edit={this.handleEdit}/>)
    }
    
    return (
      <div>
      <ul style={{listStyle:"none", padding:"0", margin:"0", border:"1px solid silver", width:"fit-content"}}>
        <li style={{borderBottom:"1px solid silver"}}>
          <span style={{borderRight:"1px solid silver", padding:"2px", display:"inline-block", minWidth:"50px"}}>ID</span>
          <span style={{borderRight:"1px solid silver", padding:"2px", display:"inline-block", minWidth:"100px"}}>Host</span>
          <span style={{padding:"2px", display:"inline-block", minWidth:"200px"}}>Port</span>
        </li>
        {renderItem}
      </ul>
      </div>
    )
  }
}

export default IndexComponent
