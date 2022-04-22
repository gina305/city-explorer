import React from "react"; //Import the React Component
import Popover from 'react-bootstrap/Popover'
import './App.css' //Link CSS file

//Create an app compnent from react's original component. Similar to how classes work
class Header extends React.Component {



  //Retrun JSX - which allows us to use javascript to render html
  render() {
    return(
      <>
       <head>
         <title>Location Data finder</title>
       </head>
      </>
    )
  }
}
export default Header; //Make the component available for import

//NOTE: Components ae created as js files in the src folder