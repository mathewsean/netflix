import React from "react";
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import './App.css'
import RowPost from "./Components/RowPost/RowPost";
import {API_KEY} from "./constants/constants"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Originals" url={`/discover/tv?api_key=${API_KEY}&with_networks=213`}/>
      <RowPost title="Action" isSmall url={`/discover/movie?api_key=${API_KEY}&with_genres=28`}/>
      <RowPost title="Trending" isSmall url={`/trending/all/week?api_key=${API_KEY}&language=en-US'`} />
      <RowPost title="Comedy" isSmall url={`/discover/movie?api_key=${API_KEY}&with_genres=35`}/>
      <RowPost title="Horror" isSmall url={`/discover/movie?api_key=${API_KEY}&with_genres=27`} />  

    </div>
  );
}

export default App;
