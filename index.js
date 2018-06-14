// This is updating groceryList from function to component

import React from 'react';
import ReactDOM from 'react-dom';

const GroceryList = props => {
    return (
      <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ul>
    );
  };
  
  ReactDOM.render(
    <GroceryList item1="Apples" item2="Oranges" item3="Mangos" />,
    document.getElementById('root')
  );
