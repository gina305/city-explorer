import React from "react"; //Import the React Component
import './App.css' //Link CSS file
//Create an app compnent from react's original component. Similar to how classes work
class Footer extends React.Component{

  //Rerun JSX - which allows us to use javascript to render html
  render(){
    //Use empty tags (fragments)
    return <> 
      <footer>
        <p>Author: G. Napier</p> 
      </footer>
    </>

}

}
export default Footer; //Make the component available for import