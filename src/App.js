import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      loading: false
    }
  }

  clickHandler = () => {
    this.setState({open: !this.state.open})
  }

  //fakeAxiosCall is the function that will run when the submit button is clicked 
  //in a real axios call, we would want to actually hit the endpoint AND set our loading properties so that the animation worked
  fakeAxiosCall = () => {
    this.setState({loading: true})

    //this setTimeout is simulating and axios call by making the callback function wait 5 seconds to run (the 5000 is measured in milliseconds)
    //if you wanted to create similar functionality in a real axios call, then you would call setState inside of the .then and .catch blocks
    setTimeout(() => {
      this.setState({loading: false})
    }, 5000);
  }

  /*
    putting comments in the render can mess things up, so I'm going to stick this up here 

    the little code inside the span tag is what made our hamburger menu and it's called an "html entity" -- there are tons!

    we used in line ternaries to determine what classes our elements would have based on state

    we destructured open and loading from state INSIDE the render so that they would be locally available in the render function
  */
  render() {
    const {open, loading} = this.state
    return (
      <>
      <header>
        <div className='logo'>Logo</div>
       <span onClick={this.clickHandler}>&#9776;</span>
       <nav className={open ? 'opened' : 'closed'}>
         <p>Home</p>
         <p>About</p>
         <p>Products</p>
         <p>Contact</p>
       </nav>
      </header>
      <div className='form'>
        <input />
        <input />
        <input />
        <button onClick={this.fakeAxiosCall}>submit</button>
      </div>
      <div className={loading ? 'loading-ani' : null}></div>
      </>
    )
  }
}

export default App;
