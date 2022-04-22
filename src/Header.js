import React from "react"; //Import the React Component
import Popover from 'react-bootstrap/Popover'
import './App.css' //Link CSS file
const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        Welcome to the Horned Beats Web App!
      </Popover.Body>
    </Popover>
  );
  

//Create an app compnent from react's original component. Similar to how classes work
class Header extends React.Component{
  
 

  //Retrun JSX - which allows us to use javascript to render html
  render(){
    // console.log(this.props.name); //Get all (names) of the poperites of the header component(s)
    //Use empty tags (fragments)
    return <>()
      <header>
        <h1 onClick={this.props.modalBeast}> Gallery of Horned Beasts</h1>
        <p>{this.props.title}</p>
      </header>
      



    </>
    

}


}
export default Header; //Make the component available for import

//NOTE: Components ae created as js files in the src folder