import React, { Component } from "react"
import PropTypes from "prop-types"

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
      <main className="mdl-layout__content mdl-color--grey-100">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
            <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
              <thead>
                <tr>
                  <th className="mdl-data-table__cell--non-numeric">Material</th>
                  <th>Quantity</th>
                  <th>Unit price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                  <td>25</td>
                  <td>$2.90</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                  <td>50</td>
                  <td>$1.25</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                  <td>10</td>
                  <td>$2.35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    )
  }
}

Search.proptypes = {
  fetchActiveVisits: PropTypes.func,
}

export default Search
