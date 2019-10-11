import {coinApi} from "../../api/api";
import {SET_COIN_DATA} from "../types/cryptocurrencies";



export const setCoinData = (data) => ({type: SET_COIN_DATA, data})

export const getCoinData = () => {
  return async (dispatch) => {
    try {
      const data = await coinApi.getData();
      dispatch(setCoinData(data));
    } catch (error) {
      console.log(error);
    }
  }
}
