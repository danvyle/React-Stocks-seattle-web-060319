import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.allStocks.map(stock => {
            return <Stock
              key={stock.id}
              stock={stock}
              handleClick={this.props.handleClick}
              />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
