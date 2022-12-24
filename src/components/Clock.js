import React from "react";


// let local = (locale) => {
//     setInterval(() =>{
   
//       let element = (
//         <h1>Hello {new Date().toLocaleTimeString(locale)}</h1>
//       )
        
//         ReactDOM.render(element, document.getElementById('root'))
//       }, 1000)
//   }
  
//   local('bn-BD')
  
  
  
  
  class Clock extends React.Component{

    // constructor(props){
    //   super(props);
    //   this.state = {
    //     date: new Date()
    //   }
    // }

    state = {date: new Date()}
    
    componentDidMount(){
      this.clockTimer = setInterval(() => {
       this.tick();
      }, 1000);
    }

    componentWillUnmount(){
      clearInterval(this.clockTimer)
    }


    tick(){
      this.setState({
        date: new Date()
      })
    }

    render(){
      return(
        <h1>{new Date().toLocaleTimeString(this.props.locale)}</h1>
      );
    }
  }

  export default Clock;