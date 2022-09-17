import React,  { Component } from 'react';
import {IMG_LINK} from "../../secret"
import "./movie.css"
import {Link} from "react-router-dom"
import axios from "axios";
import { API_URL, API_KEY, IMAGE_URL } from "../../secret";


class Movie extends React.Component {
    state={
        detailedMovieObj: {},
    }

    async componentDidMount() {
        // https://api.themoviedb.org/3/movie/299534?api_key=bdd243ea847239dc0799805e63e189f0
        let response = await axios.get(
          `${API_URL}/movie/${this.props.movieObj.id}?api_key=${API_KEY}`
        );
        // console.log(response.data);
        let detailedMovieObj = response.data;
        let posterPath = IMAGE_URL + detailedMovieObj.poster_path;
        this.setState({
          detailedMovieObj: { ...detailedMovieObj, poster_path: posterPath },
        });
      }

    render() { 
        let Obj = this.props.movieObj;
        let imgLink = IMG_LINK + Obj.poster_path


        return <div className="movie-item">
            <div className="movie-poster">
            <Link to={{ pathname: "/moviepage", state: this.state.detailedMovieObj }}>
            <img src={imgLink} alt=""/>
            </Link>
            </div>
            <div className="movie-info">
                <div className="movie-title">{Obj.title}</div>
                <div className="movie-rating">{Obj.vote_average} IMDB</div>
            </div>
        </div>
    }
}
 
export default Movie;