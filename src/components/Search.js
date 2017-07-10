import React from 'react'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  onChange(e) {
    e.preventDefault()
    this.setState({
      value: e.target.value
    })
    this.props.handleChange(e.target.value)
  }

  render() {
    return (
      <div className="ui huge fluid icon input">
        <input
          onChange={this.onChange.bind(this)}
          type="text"
          value={this.state.value}
          placeholder={"Search your Recent Transactions"}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
