import './App.css';
import React from "react"; //Import the React Component

import Header from "./Header";
import axios from 'axios';
import Footer from './Footer';
import Weather from './Weather'
import Alert from 'react-bootstrap/Alert';
//Create an app component 
class App extends React.Component {


  //Define state and functions BEFORE the render method is called
  constructor(props) {
    super(props);
    this.state = {

      //Define variables for my App that will change with each request
      city: '',
      display_name: '',
      locationData: {},
      latLonText: '',
      lat: '',
      lon: '',
      error1: '',
      map: ''
    }
  }
  //asynchronous function for getting city data using the axios module
  /*
  An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
  */
  findCity = async (event) => {
    //prevent the defsult action associated with submit events
    event.preventDefault();

    //clear error
    this.setState({
      error:''
    });

    //save the input city to a variable
    let userCity = event.target[0].value;

    let apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&city=${userCity}&format=json`


let cityData = await axios.get(apiUrl);
    
    //Try getting lat,long values
    try {
      //send an api request for data on the using my secret credentials
      

      //let's see. 
      // console.log(cityData.data[0].lat);
      // const lat = cityData.data[0].lat;
      // const lon = cityData.data[0].lon;


      //set the city and it's retruned data in state

      this.setState((state, props) => ({
        city: userCity,
        locationData: cityData.data[0],
        display_name: 'City: ' + cityData.data[0].display_name,
        latLonText: 'Location: ',
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,

      }));
      // console.log(this.state); State won't update here

    } catch (error) {
      alert(error)
      //set state
      this.setState({
        error:error.toString()
      });
    }

    //Try getting map using lat,lon values
    try {
      //send an api request for data on the using my secret credentials
      let mapUrl= `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=9&format=jpg`

      let cityMap = await axios.get(mapUrl);

      //let's see the map result
      console.log(cityMap.request.responseURL);
      
      this.setState({
    map: cityMap.request.responseURL
  });
    } catch (error) {

      alert(error)
      this.setState({
        error:'Unmapped location:' + error.toString() + "-Enter a new city"
      });

    }
this.showMap();
    
    
  }
  
  showMap = async (event) => {
console.log(this.state)
  }
  render() {

    //Render data for return
    return (
      <>
        <Header />
        {/* <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
        <button onClick={this.getLocation}>Locate!</button>
        {this.state.location.place_id && 
          <h2>The city is: {this.state.location.display_name}</h2>
        } */}

        <Weather city={this.state.city} display_name={this.state.display_name} locationData={this.state.locationData} findCity={this.findCity} map={this.state.map} latLonText={this.state.latLonText}/>
        <Alert variant="success">
          <Alert.Heading>{this.state.error}</Alert.Heading>
          <hr />
          <p className="mb-0">
            
          </p>
        </Alert>
        <Footer/>

      </>
    )
  }
}



//Make the app component to make it available for to other components
export default App;
