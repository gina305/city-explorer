import React from "react"; //Import the React Component
import './App.css' //Link CSS file
import Card from 'react-bootstrap/Card';
//Create an app compnent from react's original component. Similar to how classes work
class Weather extends React.Component {

  //Display the hidden text conditionally

  //Return JSX - which allows us to use javascript to render html
  render() {

    //
    const map1 = this.props.data.map((x, index)=>

      <Card style={{ width: '33%'}} id="card" key={index} className="card">
        <Card.Body>
          <Card.Title>Date: {x.date}</Card.Title>
          <Card.Text>
            Description: {x.description}
          </Card.Text>
        </Card.Body>
      </Card>

    );
  
    
    return (
      <>
      <h3>Forecast</h3>
      {map1}

      </>
    )
  }
}
export default Weather; //Make the component available for import

//NOTE: Components are created as js files in the src folder