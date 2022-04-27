//Makes sure you have this for component styling!
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react"; //Import the React Component
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import axios from 'axios';
import Footer from './Footer';
import Weather from './Weather'
import Modal from 'react-bootstrap/Modal';
import Map from './Map'
import Form from 'react-bootstrap/Form';

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
      error: false,
      errorMsg: '',
      map: '',
      showModal: false,
      weatherResponse: [],
      forecast: []
    }
  }
  //asynchronous function for getting city data using the axios module
  /*
  An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
  */

  //*****************Modal handlers*********************
  hideModal = () => {
    this.setState({
      showModal: false
    });
  }

  showModal = () => {
    this.setState({
      showModal: true
    });

  }

  //function to find the city based on user input
  findCity = async (event) => {
    //prevent the defsult action associated with submit events
    event.preventDefault();

    //clear error
    // this.setState({
    //   error: ''
    // });

    //save the input city to a variable
    let userCity = event.target[0].value;

    let apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&city=${userCity}&format=json`

    try {
      let cityData = await axios.get(apiUrl);

      //Try getting lat,long values

      //send an api request for data on the using my secret credentials

      //let's see. 
      // console.log(cityData.data[0].lat);
      // const lat = cityData.data[0].lat;
      // const lon = cityData.data[0].lon;

      //set the city and it's returned data in state

      this.setState((state, props) => ({
        city: userCity,
        locationData: cityData.data[0],
        display_name: 'City: ' + cityData.data[0].display_name,
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,
        latLonText: 'Location: '
      }));
      console.log(cityData);
      // console.log(this.state); State won't update here

      this.findMap()
    } catch (error) {

      //set state
      this.setState({
        error: error.response.data.error,
        showModal: true,
        errorMsg: `${error.message}. Check the city spelling and try again.`
      });
    }
    // this.findMap();
  }
  // console.log(this.state.error);


  //Map the data
  findMap = async () => {
    //Try getting a map using lat,lon values
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=10&format=jpg`

    try {
      // let cityMap = await axios.get(mapUrl);

      //ISSUE WITH STATE RENDERING ON MAP
      //console.log(map.request.responseURL);

      this.setState({
        map: mapUrl
      }, () => this.findWeather());

    } catch (error) {

      //Set state and run find
      this.setState({
        error: error.response.data.error,
        showModal: true,
        errorMsg: `${this.state.city} can not be found. ${error.message}. Try again.`
      });
    }
    // //get weather data for the city
    // this.findWeather();

  }

  //Request data from my custom weather server endpoint
  findWeather = async () => {
    let weatherURL = `https://city-explorer-cf301-gina.herokuapp.com/weather?city=${this.state.city}`


    try {
      //Retrieve data from backend
      let weather = await axios.get(weatherURL);

      //Set retieved data in state
      this.setState({
        weatherResponse: weather.data
      });

      console.log(weather.data);
      //Create Weather cards if weather for this location exists
      // const map1 = weather.data.map(x =>
      //   <Weather description={x.description}/>
      //   );

      //Store forecast in an array
      // this.setState({
      //   forecast: map1})

    } catch (error) {

      //Change Error 
      this.setState({
        errorMsg: `${error.response.status}: ${error.response.statusText}. Can not get weather for this location.`
      });
      this.showModal()
      //       console.log(`${error.response.status}: ` ,error.response.statusText)
    }
  }


  // //Alert user if there is an error
  // closeAlert = (event) => {
  //   console.log(event.target.value)
  // }
  closeError = () => this.setState({ errorMsg: "" });


  render() {
    //Render data for return
    return (
      <>
        <Header />

        <Form onSubmit={this.findCity} style={{ width: '10%' }} id='form'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter a city: </Form.Label>
            <Form.Control type="text" placeholder="Orlando" />
          </Form.Group>
          <Button variant="primary" type="submit" id="submitButton" >
            Explore!
          </Button>
        </Form>
        <div id='wDiv'>
        <h3> {this.state.display_name}</h3>
          <p> {this.state.lat},  {this.state.lon}</p>
          <Weather data={this.state.weatherResponse} />
        </div>
        <div id='mainDiv'>
          <div id='div2'>
            {this.state.lat && (<Map mapURL={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=10&format=jpg`} city={this.state.city} lat={this.state.lat}  lon={this.state.lon}/>)}
          </div>
          <div id='div3'>
          </div>
        </div>
        <Modal show={this.state.showModal} onHide={this.hideModal} dialogClassName="modal-90w">
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Invalid Location</Modal.Title>
            </Modal.Header>
            <Modal.Body> {this.state.errorMsg}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hideModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>

        <Footer />

      </>
    )
  }
}


//Make the app component to make it available for to other components
export default App;
