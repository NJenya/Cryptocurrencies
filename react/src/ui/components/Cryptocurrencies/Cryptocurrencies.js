import React from 'react'

import styles from './Cryptocurrencies.module.css'

const Cryptocurrencies = (props) => {
  const { data } = props
  const resultDatas = data.map(c => <div key={c.id}>
                                  <div><h2>{c.name}</h2></div>
                                  <div>Symbol: {c.symbol}</div>
                                  <div>Price: {c.quote.USD.price}</div>
                                  </div>)

    return (
      <div className={styles.container}>
        <header>
          <h1>Cryptocurrencies</h1>
        </header>
        <p className="info">
          Crytocurrency coin information.
        </p>
        {resultDatas}
      </div>
    )
}

export default Cryptocurrencies
