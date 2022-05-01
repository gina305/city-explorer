import React from "react"; //Import the React Component
import './App.css' //Link CSS file
import Card from 'react-bootstrap/Card';

//Create an app compnent from react's original component. Similar to how classes work
class Movie extends React.Component {

  //Display movies



  //Return JSX - which allows us to use javascript to render html
  render() {

    
   // console.log(arr);
    //
    const map1 = this.props.data.map((x, index)=>

      <Card  id="movieCards" key={index} className="card">
        <Card.Body>
          <Card.Title>{x.title}</Card.Title>
          <Card.Text>
           <img src={x.image} alt={x.title}></img>
           </Card.Text>
           <Card.Text>
           Released: {x.release_date}
          </Card.Text>
        </Card.Body>
      </Card>

    );
  
    
    return (
      <>
      <h3>Upcoming Movies</h3>
      {map1}

      </>
    )
  }
}
export default Movie; //Make the component available for import

//NOTE: Components are created as js files in the src folder