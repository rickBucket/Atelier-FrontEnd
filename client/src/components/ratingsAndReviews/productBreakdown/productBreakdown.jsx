import React from 'react';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'minwidth(6, 1fr) 100px',
  gridGap: '5px'
};

const characteristicsBar = {
  position: 'relative',
  height: '7px',
  width: '150px',
  border: 'none',
  backgroundColor: 'rgba(232, 232, 232, .8)',
  boxShadow: '2px 2px 4px orange'
}


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
      <div style={gridLayout}>
        {
         characteristics.Comfort &&
            <div style={{
              gridColumn: '1',
              gridRow: '1',
            }}><div style={{fontSize: '13px', color: 'grey'}}>Comfort</div>

            <div style={characteristicsBar}>
            <div style={{
            background: 'rgba(51, 170, 51, .8)',
            height: '100%',
            borderRadius: 'inherit',
            width: `${(this.characteristicStats(characteristics.Comfort.value) / 5) * 100}%`
          }}>
          </div>
            </div>

             <div style={{fontSize: '11px', color: 'grey'}}>
              {`Uncomfortable --> Perfect`}
             </div>

          </div>
        }
        {
         characteristics.Fit &&
        <div style={{
          gridColumn: '1',
          gridRow: '2',
        }}><div style={{fontSize: '13px', color: 'grey'}}>Fit</div>
         <div style={characteristicsBar}>
         <div style={{
            background: 'rgba(51, 170, 51, .8)',
            height: '100%',
            borderRadius: 'inherit',
            width: `${(this.characteristicStats(characteristics.Fit.value) / 5) * 100}%`
          }}>
          </div>
        </div>

          <div style={{fontSize: '11px', color: 'grey'}}>
          {`Runs tight --> Perfect --> Runs long`}
          </div>
        </div>
        }
        {
          characteristics.Length &&
        <div style={{
          gridColumn: '1',
          gridRow: '3',
        }}><div style={{fontSize: '13px', color: 'grey'}}>Length</div>

         <div style={characteristicsBar}>
         <div style={{
            background: 'rgba(51, 170, 51, .8)',
            height: '100%',
            borderRadius: 'inherit',
            width: `${(this.characteristicStats(characteristics.Length.value) / 5) * 100}%`
          }}>
          </div>
        </div>
           <div style={{fontSize: '11px', color: 'grey'}}>
          {`Runs short    Perfect    Runs long`}
          </div>

        </div>
        }
        {
         characteristics.Quality &&
        <div style={{
          gridColumn: '1',
          gridRow: '4',
        }}><div style={{fontSize: '13px', color: 'grey'}}>Quality</div>

         <div style={characteristicsBar}>
         <div style={{
            background: 'rgba(51, 170, 51, .8)',
            height: '100%',
            borderRadius: 'inherit',
            width: `${(this.characteristicStats(characteristics.Quality.value) / 5) * 100}%`
          }}>
          </div>
        </div>
           <div style={{fontSize: '11px', color: 'grey'}}>
          {`Poor --> Perfect`}
          </div>

        </div>
        }
        {
         characteristics.Size &&
        <div style={{
          gridColumn: '1',
          gridRow: '5',
        }}><div style={{fontSize: '13px', color: 'grey'}}>Size</div>

         <div style={characteristicsBar}>
         <div style={{
            background: 'rgba(51, 170, 51, .8)',
            height: '100%',
            borderRadius: 'inherit',
            width: `${(this.characteristicStats(characteristics.Size.value) / 5) * 100}%`
          }}>
          </div>
        </div>

           <div style={{fontSize: '11px', color: 'grey'}}>
          {`Too small --> Perfect --> Too wide`}
          </div>

        </div>
        }
        {
        characteristics.Width &&
        <div style={{
          gridColumn: '1',
          gridRow: '6',
        }}><div style={{fontSize: '13px', color: 'grey'}}>Width</div>

         <div style={characteristicsBar}>
         <div style={{
            background: 'rgba(51, 170, 51, .8)',
            height: '100%',
            borderRadius: 'inherit',
            width: `${(this.characteristicStats(characteristics.Width.value) / 5) * 100}%`
          }}>
          </div>
        </div>
           <div style={{fontSize: '11px', color: 'grey'}}>
          {`Too narrow --> Perfect --> Too wide`}
          </div>

        </div>
        }

      </div>
    )
  }
}

export default ProductBreakdown