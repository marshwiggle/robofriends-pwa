import React from 'react';

// There are props, state and chlidren in React.

const Scroll = (props) => {
     return (
          <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
             { props.children }
          </div>
    );

};

export default Scroll;
