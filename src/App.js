import React, {Component} from "react";
import { Routes, Route, Link} from 'react-router-dom'
import "./App.css"
import axios from "axios";
// pages
import Home from "./pages/Home";
import About from "./pages/About";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      PopularMovies: {},
      HorrorMovies: {},
      loaded: false
    }
  }

  setloaded = () => {
    this.setState({loaded: true })
  }
  
  componentDidMount(){
    console.log("app did mount");
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9ec9eafb71ae45ba76400994a6778f89&language=en-US&page=1`)
      .then(res => {
        const movies = res.data.results;
        this.setState({PopularMovies:movies})
      })
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9ec9eafb71ae45ba76400994a6778f89&with_genres=27`)
    .then(res => {
      const horrorMovies = res.data.results;
      this.setState({HorrorMovies:horrorMovies})
    })
  }


  render(){
    console.log("app rendered");
    return (

      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    )
  }
}

export default App;
