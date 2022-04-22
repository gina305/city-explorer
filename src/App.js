import './App.css';
import React from "react"; //Import the React Component
import Button from 'react-bootstrap/Button';


//Create an app component 
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     faves: 0,
  //   };
  // }


  // favored = (beast) => {
  //   this.setState({
  //     faves: this.state.faves + 1,

  //   });
  //   //Call the modal function
  //   this.props.modalBeast(beast);
  //   this.props.showModal();
  // }
  //**********************************//

  //Rerun JSX 
  render(title) {



    //Wrap JSX in empty tags (fragments)
    return (<>
      <article>
        Article
      </article>
    </>)

  }

}



//Make the app component to make it available for to other components
export default App;
