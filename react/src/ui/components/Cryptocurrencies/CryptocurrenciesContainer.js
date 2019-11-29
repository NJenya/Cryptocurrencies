import React, { Component } from 'react'
import Cryptocurrencies from "./Cryptocurrencies";
import {connect} from "react-redux";
import {getCoinData} from "../../../redux/actions/cryptocurrencies";

class CryptocurrenciesContainer extends Component {

  componentDidMount() {

    this.props.getCoinData()
  }



  render() {
    return (
      <Cryptocurrencies {...this.props}  />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    hasError: state.cryptocurrencies.hasError,
    data: state.cryptocurrencies.data,
    errorMessage: state.cryptocurrencies.errorMessage

  }
}

export default connect(mapStateToProps, {getCoinData})(CryptocurrenciesContainer)
