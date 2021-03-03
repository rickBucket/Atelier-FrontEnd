import React from 'react';

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props)

    this.characteristicStats = this.characteristicStats.bind(this);
  }

  characteristicStats(string) {
    return (Math.round(Number(string) * 4) / 4).toFixed(2)
  }

  render() {
    const characteristics = this.props.metaData.characteristics
    return(
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'minwidth(6, 1fr) 100px',
        gridGap: '5px'
      }}>
        {
         characteristics.Comfort &&
        <div style={{
          gridColumn: '1',
          gridRow: '1',
        }}><b>Comfort</b>
          {this.characteristicStats(characteristics.Comfort.value)}
          {`Uncomfortable --> Perfect`}
        </div>
        }
        {
         characteristics.Fit &&
        <div style={{
          gridColumn: '1',
          gridRow: '2',
        }}><b>Fit</b>
          {this.characteristicStats(characteristics.Fit.value)}
          {`Runs tight --> Perfect --> Runs long`}
        </div>
        }
        {
          characteristics.Length &&
        <div style={{
          gridColumn: '1',
          gridRow: '3',
        }}><b>Length</b>
          {this.characteristicStats(characteristics.Length.value)}
          {`Runs short --> Perfect --> Runs long`}
        </div>
        }
        {
         characteristics.Quality &&
        <div style={{
          gridColumn: '1',
          gridRow: '4',
        }}><b>Quality</b>
          {this.characteristicStats(characteristics.Quality.value)}
          {`Poor --> Perfect`}
        </div>
        }
        {
         characteristics.Size &&
        <div style={{
          gridColumn: '1',
          gridRow: '5',
        }}><b>Size</b>
          {this.characteristicStats(characteristics.Size.value)}
          {`Too small --> Perfect --> Too wide`}
        </div>
        }
        {
        characteristics.Width &&
        <div style={{
          gridColumn: '1',
          gridRow: '6',
        }}><b>Width</b>
          {this.characteristicStats(characteristics.Width.value)}
          {`Too narrow --> Perfect --> Too wide`}
        </div>
        }
      </div>
    )
  }
}

export default ProductBreakdown