import React,{Component} from 'react';

import './App.css';

class App extends Component{

  render(){

  return <div className="wrapper">
    <div className="form-wrapper">
    <h1>Create Account</h1>
    <form onSubmit={this.handleSubmit} noValidate>
      <div className="firstName">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className=""
          placeholder="First Name"
          name="firstName"
          noValidate
          onChange={this.handleChange}
          />
      </div>

      <div className="LastName">
      <label htmlFor="LastName">Last Name</label>
      <input
        type="text"
        className=""
        placeholder="Last Name"
        name="LastName"
        noValidate
        onChange={this.handleChange}
        />
    </div>

    <div className="email">
    <label htmlFor="email">email</label>
    <input
      type="text"
      className=""
      placeholder="email"
      name="email"
      noValidate
      onChange={this.handleChange}
      />
  </div>

  <div className="password">
  <label htmlFor="password">password</label>
  <input
    type="text"
    className=""
    placeholder="password"
    name="password"
    noValidate
    onChange={this.handleChange}
    />
</div>
    </form>
    </div>
  </div>;
 
}
}
export default App;
