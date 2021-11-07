import React from 'react';
import './App.css';
import Child from './Child';

class App extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={show: true};
    }
    delHeader = () =>{
      this.setState({show: false});
    }
  render(){
    let myheader;
    if(this.state.show){
      myheader=<Child/>;
    };
    return <div>
                
                  {myheader}
                <button type="button" onClick={this.delHeader}>Delete Para
                </button>
          
            </div>;
  }
}
export default App;
