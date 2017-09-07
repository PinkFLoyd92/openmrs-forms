import React, { Component } from "react"

class Search extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.info("Renderizar pacientes con citas activas...")
    this.props.fetchActiveVisits()
  }

  render() {
    return (
      <div id="search-bar">
        PACIENTES...
        </div>
    )
  }
}

export default Search
