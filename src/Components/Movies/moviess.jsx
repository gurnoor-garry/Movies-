import React, { Component } from 'react';
import Movie from "../Movie/movie"
import "./moviess.css"
import {API_URL, API_KEY} from"../../secret"
import axios from "axios"

class Movies extends React.Component {

    
    render() {
        
        return <div className="one-movie">
          {this.props.moviesData.map( (movieObj) => {
              
              return <Movie key={movieObj.id} movieObj={movieObj}></Movie>
           })}
                </div>;
    }
}
 
export default Movies;