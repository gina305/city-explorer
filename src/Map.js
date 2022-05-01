import React from "react"; //Import the React Component
import { Image } from "react-bootstrap";

//Create an app compnent from react's original component. Similar to how classes work
class Map extends React.Component {

  //Retrun JSX - which allows us to use javascript to render html
  render() {
    return(
      <>
         <Image src={this.props.mapURL} alt={this.props.city} title={this.props.city} id='map'/>
    </>
    )
  }
}
export default Map; //Make the component available for import

//NOTE: Components ae created as js files in the src folder