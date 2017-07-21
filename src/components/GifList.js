import React from 'react'

const GifList = (props) => {
  return(
    <ul>
    {props.gifs.map(gif => <li>gif.url</li>)}
    </ul>
  )
}

export default GifList
