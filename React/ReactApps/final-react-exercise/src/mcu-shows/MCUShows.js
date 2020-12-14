import './MCUShows.css'

const MCUShows = (props) => {
    return (
        <div className='MCUShows'>
            <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
            <h2>Upcoming MCU Show Release Dates</h2>
            <p>WandaVision: {props.dates.wandaVision} </p>
            <p>The Falcon and the Winter Soldier: {props.dates.falconWinter} </p>
            <p>Loki: {props.dates.loki} </p>
            <p>Hawkeye: {props.dates.hawkeye} </p>
        </div>
    );
}
export default MCUShows; 