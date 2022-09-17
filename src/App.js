import React, { Component } from "react";
import Header from "./Components/Header/header";
import Movies from "./Components/Movies/moviess";
import Pagination from "./Components/Pagination/pagination";
import axios from "axios";
import { API_URL, API_KEY, ID_URL } from "./secret";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favourite from "./Components/Favourite/Favourite";
import MoviePage from "./Components/MoviePage/MoviePage";

class App extends React.Component {
  state = {
    moviesData: [],
    currentMovie: "Furious",
    currPage: null,
    pageCount: [],
  };

  nextPage = async () => {
    let data = await axios.get(API_URL + "/search/movie", {
      params: {
        api_key: API_KEY,
        page: this.state.currPage + 1,
        query: this.state.currentMovie,
      },
    });

    data = data.data.results;

    this.setState({
      moviesData: data,
      currPage: this.state.currPage + 1,
    });
  };

  previousPage = async () => {
    let data = await axios.get(API_URL + "/search/movie", {
      params: {
        api_key: API_KEY,
        page: this.state.currPage - 1,
        query: this.state.currentMovie,
      },
    });
    data = data.data.results;
    this.setState({
      moviesData: data,
      currPage: this.state.currPage - 1,
    });
  };

  setPage = async (pageNumber) => {
    let data = await axios.get(API_URL + "/search/movie", {
      params: {
        api_key: API_KEY,
        page: pageNumber,
        query: this.state.currentMovie,
      },
    });
    data = data.data.results;
    this.setState({
      moviesData: data,
      currPage: pageNumber,
    });
  };

  async componentDidMount() {
    let data = await axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: 1, query: this.state.currentMovie },
    });

    let noofpages = data.data.total_pages;
    data = data.data.results;
    let pages = [];
    for (let i = 1; i <= noofpages; i++) {
      pages.push(i);
    }
    this.setState({
      moviesData: data,
      currPage: 1,
      pageCount: pages,
    });
  }

  handleChange = async (q) => {
    let data = await axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: 1, query: q },
    });
    let noofpages = data.data.total_pages;
    data = data.data.results;
    let pages = [];
    for (let i = 1; i <= noofpages; i++) {
      pages.push(i);
    }
    this.setState({
      moviesData: data,
      currentMovie: q,
      pageCount: pages,
    });
  };

  render() {
    return (
      <Router>
        <div id="root2">
          <Header handleChange={this.handleChange}></Header>

          <Switch>
            <Route path="/" exact>
              {this.state.moviesData.length == 0 ? (
                <h1>OOPS NO MOVIES FOUND !!!</h1>
              ) : (
                <React.Fragment>
                  <Movies moviesData={this.state.moviesData}></Movies>
                  <Pagination
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                    setPage={this.setPage}
                    currPage={this.state.currPage}
                    page={this.state.pageCount}
                  ></Pagination>
                </React.Fragment>
              )}
            </Route>

            <Route path="/favourites" exact component={Favourite}></Route>

            <Route path="/moviepage" exact component={MoviePage}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
