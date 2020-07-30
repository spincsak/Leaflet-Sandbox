import React from 'react';
//ideally this should pull from the database but
//for now let's just manually grab the array from the file
import sampleMarkets from '../../server/seedData';

export class MarketMap extends React.Component {
  render() {
    return (
      <div>
        <div id="market-list">
          <h2>list of markets:</h2>
          <ul>
            {sampleMarkets.map((market) => {
              return <li key={market.latitude}>{market.name}</li>;
            })}
          </ul>
        </div>
        <div id="market-map"></div>
      </div>
    );
  }
}
