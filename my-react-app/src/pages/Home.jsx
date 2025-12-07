import { useState } from 'react';
import Animation from '../components/animation';

function Home () {
      const [playerState, setPlayerState] = useState('idle');
  return (
    <>
        <div className = "dropdown-options">
        <h1>Check out the different type of animations!</h1>
            <select 
            id="animations" 
            name="animations"
            value={playerState}
            onChange={(e) => setPlayerState(e.target.value)} // ADDED: Makes dropdown work
            >
            <option value="idle">Idle</option>
            <option value="jump">Jump</option>
            <option value="fall">Fall</option>
            <option value="run">Run</option>
            <option value="dizzy">Dizzy</option>
            <option value="sit">Sit</option>
            <option value="roll">Roll</option>
            <option value="bite">Bite</option>
            <option value="ko">Ko</option>
            <option value="getHit">GetHit</option>
        </select>
    </div>
      <Animation playerState={playerState} />
    </>
  )
}

  export default Home;