import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: []
    }
  }

  componentWillMount() {
    this.fetchTransactions()
  }

  fetchTransactions() {
    const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({
        transactions: data
      })
    )
  }

  handleChange(search) {
    this.setState({
      searchTerm: search
    })
  }

  filterTransactions = () => {
    if (this.state.searchTerm === '') {
      return this.state.transactions 
    } else {
      return (this.state.transactions.filter(t => t.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || t.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())) 
      )
    }
  }

  render() {
    const filteredTransactions = this.filterTransactions()
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <TransactionsList transactions={filteredTransactions}  />
      </div>
    )
  }
}

export default AccountContainer
