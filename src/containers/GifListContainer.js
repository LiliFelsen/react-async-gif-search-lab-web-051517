import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      gifs: []
    }
  }

  handleSearch = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
    .then(response => response.json())
    .then(jsonObj => {
      const gifs = jsonObj.data.slice(0,3)
      this.setState({ gifs })
    })
  }

  render(){
    return(
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}
