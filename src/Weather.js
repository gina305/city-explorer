import React from "react"; //Import the React Component
import './App.css' //Link CSS file
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//Create an app compnent from react's original component. Similar to how classes work
class Header extends React.Component {

 //Display the hidden text conditionally

 


  //Return JSX - which allows us to use javascript to render html
  render() {
    return(
      <>
       <Form onSubmit={this.props.findCity}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Enter a city: </Form.Label>
    <Form.Control type="text" placeholder="Michigan" />
  </Form.Group>
  <Button variant="primary" type="submit" id="submitButton" >
    Explore!
  </Button>
</Form>
<Card style={{ width: '50%' }} id="card">
  <Card.Body>
    <Card.Title>{this.props.display_name}</Card.Title>
    <Card.Text>
    {this.props.latLonText}{this.props.locationData.lat}, {this.props.locationData.lon}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
    <Card.Img variant="top" src={this.props.map} />
  </Card.Body>
</Card>
      </> 
    )
  }
}
export default Header; //Make the component available for import

//NOTE: Components are created as js files in the src folder