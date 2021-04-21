//1a
import './MCUShows.css';

//1b 5b 5c
const MCUShows = ({dates}) => {
    //1c
    return (
        //4a
        <div className="MCUShows">
            {/* 3a */}
                <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
                <h2>MCU Show Release Dates</h2>
                <p>1: WandaVision{dates.wandaVision}</p>
                <p>2: The Falcon and the Winter Soldier{dates.falconWinter}</p>
                <p>3: Loki{dates.loki}</p>
                <p>4: Hawkeye{dates.hawkeye}</p>
                {/* 6e */}
                <button onClick="randomAvenger()">RANDOM AVENGER</button>
                {/* 7c */}
                <button>NEXT AVENGER</button>
            </div>
    );
}
   
//1d
export default MCUShows;