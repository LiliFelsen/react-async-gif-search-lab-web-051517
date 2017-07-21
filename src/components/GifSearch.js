import React from 'react'

export default class GifSearch extends React.Component {
  constructor(){
    super()

    this.state = {
      searchTerm: ''
    }
  }

  updateSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.props.onSearch(this.state.searchTerm)
  }

  render(){
    return(
      <form onSubmit={this.handleSearch}>
        <input type='text' onChange={this.updateSearchTerm} />
        <input type='submit' value='Search' />
      </form>
    )
  }

}
