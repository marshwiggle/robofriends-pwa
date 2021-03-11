import React, { Component } from 'react';

class CounterButton extends Component {
     constructor(){
          super();
          this.state = {
               count: 0
          }
     }

   
     shouldComponentUpdate(nextProps, nextState){
          if (this.sate.count !== nextState.count){
               return true
          }
          return false;
     }

     updateCount = () => {
          this.setState(state => { 
               return {count: this.state.count + 1} // Beacause state is async
              })
     }

     render(){
           console.log('Header');      
           return (
               <button color={this.props.color} onClick={updateCount}>
                    Count: {this.state.count} 
               </button>
           );
     }
}

export default Header;
