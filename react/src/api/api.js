import axios from "axios"

export const coinApi = {
  getData() {
    return (
      axios.get(`/listings/latest`)
        .then((res => {
          return res.data.data
        }))
    )
  }
}

