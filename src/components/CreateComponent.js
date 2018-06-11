import React, { Component } from 'react'
import axios from 'axios'

export class CreateComponent extends Component {
  state = {
    name: '',
    port: ''
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    const serverPort = {
      name: this.state.name,
      port: this.state.port
    };

    axios.post('http://localhost:4200/serverport/add', serverPort)
      .then(res => {
        console.log(res.data);
        this.setState({
          name: '',
          port: ''
        })
        this.props.history.push('/index')
      })
  }
  
  onChangeHostName = (e) => this.setState({name: e.target.value});
  onChangePort = (e) => this.setState({port: e.target.value});
  
  render() {
    return (
      <div>
        <h3>Add New Server</h3>
        <form onSubmit={this.onSubmit}>
          <div><label>Add Host Name:</label><input value={this.state.name} onChange={this.onChangeHostName} type="text"/></div>
          <div><label>Add Server Port:</label><input value={this.state.port} onChange={this.onChangePort} type="text"/></div>
          <div><label>Submit</label><input type="submit"/></div>
        </form>
      </div>
    )
  }
}

export default CreateComponent
