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
      setTimeout(() => {
         this.setState({
          movies : [
            { title: "Matrix",
              poster: "https://cphoto.asiae.co.kr/listimglink/6/2017071813023751011_1.jpg"
            },
            { title: "FMJ",
              poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Suzy_at_Asia_Artist_Awards_red_carpet%2C_16_November_2016_02.jpg/250px-Suzy_at_Asia_Artist_Awards_red_carpet%2C_16_November_2016_02.jpg"
            },
            { title: "Oldboy",
              poster: "https://www.gukjenews.com/news/photo/202008/2053779_2051154_2459.jpg"
            },
            { title: "Star Wars",
              poster: "https://t1.daumcdn.net/cfile/tistory/994E9F3359CD6FF90A"
            },
            {
              title: "Transpotting",
              poster: "https://img.huffingtonpost.com/asset/5f717f211f00002e000c0d2e.jpeg?cache=V7RChr6aR7&ops=crop_14_42_3423_3720,scalefit_630_noupscale"
            }
          ]
         }) 
      }, 2000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/> 
    })
    return movies
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
