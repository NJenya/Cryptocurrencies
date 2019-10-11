import {SET_COIN_DATA} from "../types/cryptocurrencies";

const initialState = {
  hasError: false,
  data: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      quote: {
        USD: {
          price: 8243
        }
      }
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      quote: {
        USD: {
          price: 180
        }
      }
    },
    {
      id: 3,
      name: "Bitcoin Cash",
      symbol: "BCH",
      quote: {
        USD: {
          price: 231
        }
      }
    },
    {
      id: 4,
      name: "Litecoin",
      symbol: "LTC",
      quote: {
        USD: {
          price: 57
        }
      }
    },
  ],
  errorMessage: null
}

const cryptocurrenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COIN_DATA: {
      return {...state, data: action.data}
    }
    default: {
      return state
    }
  }
}



export default cryptocurrenciesReducer
