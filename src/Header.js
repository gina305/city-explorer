import React from "react"; //Import the React Component
import './App.css' //Link CSS file

//Create an app compnent from react's original component. Similar to how classes work
class Header extends React.Component {



  //Retrun JSX - which allows us to use javascript to render html
  render() {
    return(
     
       <div>
         <title>Location Data Finder</title>
       </div>
    
    )
  }
}
export default Header; //Make the component available for import

//NOTE: Components ae created as js files in the src folder