import React from 'react'
import './App.css';
import Nav from './Components/Nav.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import "animate.css/animate.min.css";
import PodcastLinks from './Components/PodcastLinks';


class App extends React.Component {

    render() {
      return (
        <div className="App">

            {/* <Nav></Nav> */}
            <Main></Main>
                    
            <Footer></Footer>
            </div>



      );
  } 
}

export default App;
