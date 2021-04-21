import './App.css';
//2a
import MCUShows from './mcu-shows/MCUShows';
//6a
import {useState} from 'react';

//5a
const releaseDates = 
  {
    wandaVision: 'Jan 2021',
    falconWinter: 'Mar 2021',
    loki: 'June 2021',
    hawkeye: 'Fall 2021'
  }

  //6b
const avengers = [
  'Scarlet Witch',		
  'Vision',		
  'Falcon',		
  'Winter Soldier',		
  'Hawkeye'	
];

//6c
const State = ()=> {

}

function App() {
  return (
    <div>
      {/* 2b */}
       <h1>FINAL REACT EXERCISE</h1>
       {/* 2c */}
      <MCUShows dates={releaseDates}/>
      {/* 6b */}
      <h1>Random Avenger: </h1>
      {/* 7b */}
      <h1>Next Avenger: </h1>

    </div>
    
  );
}

export default App;
