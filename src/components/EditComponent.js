import React, { Component } from 'react'
import axios from 'axios';

export class EditComponent extends Component {
  state = {
    name: '',
    port: ''
  }

  componentDidMount() {
    axios.get('http://localhost:4200/serverport/edit/'+this.props.match.params.id)
      .then(res => this.setState({
        name: res.data.name,
        port: res.data.port
      })).catch(err => console.log(err));
  }
  
  onChangeHostName = (e) => this.setState({name: e.target.value})
  onChangePort = (e) => this.setState({port: e.target.value})

  onSubmit = (e) => {
    e.preventDefault();
    const serverPort = {
      name: this.state.name,
      port: this.state.port
    }

    if (serverPort) {
      axios.post(`http://localhost:4200/serverport/update/${this.props.match.params.id}`, serverPort)
        .then(res => {
          console.log(res.data);
          this.setState({name: '', port: ''});
          this.props.history.push('/index');
        })
    } else {
      alert('Please fill the form!');
    }
  }

  render() {
    return (
      <div>
        <h3>Edit Server</h3>
        <form onSubmit={this.onSubmit}>
          <div><label>Edit Host Name:</label><input value={this.state.name} onChange={this.onChangeHostName} type="text"/></div>
          <div><label>Edit Server Port:</label><input value={this.state.port} onChange={this.onChangePort} type="text"/></div>
          <div><label>Save:</label><input type="submit"/></div>
        </form>
      </div>    )
  }
}

export default EditComponent
