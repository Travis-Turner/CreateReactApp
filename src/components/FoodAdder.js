import React from 'react';
import './FoodAdder.css';

class FoodAdder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      foodList: []
    }
  }
  handleSubmit = () => {

  }
  render(){
    return (
      <div>
        <p>Add some food:</p>
      </div>
    )
  }
}

export default FoodAdder;