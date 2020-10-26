import React, { Component }  from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {
  }

  componentWillMount(){
    console.log("Will Mount")
  }

  componentDidMount(){
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      genres={movie.genres}
      synopsis={movie.synopsis} 
      key={movie.id}
      /> 
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=reating")
    .then((response) => response.json())
    .then(json => json.data.movies)
    .catch((err) => console.log(err))
  }

  render() {
    console.log("Render")
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
