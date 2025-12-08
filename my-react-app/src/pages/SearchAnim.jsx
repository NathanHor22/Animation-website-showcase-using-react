import './SearchAnim.css';
import { useState } from 'react';
import Animation, {animationStates} from '../components/animation';

function SearchAnim() {
    const [searchQuery, setSearchQuery] = useState('');
    const[selectedAnimation, setSelectedAnimation] = useState(null);

    // filters through the animationState array to check the anmation name contains what the user typed
    const filterAnimations = animationStates.filter (animation => animation.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <>
        <div className='animation-text'>
            <h2>Look at our selection of animation</h2>
                <input 
                type="text"
                className="search-bar" 
                placeholder="Search for animations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>

            <div className = "animation-results">
                {/* takes each animation and create a clickable box */}
                {filterAnimations.map(animation => (
                    <div
                    key={animation.name}
                    className='animation-item'
                    //sets the animation that the user has selected
                    onClick={() => setSelectedAnimation(animation.name)}
                    >
                        {/* Show small preview of the animation */}
                        <Animation playerState={animation.name} width={300} height={300} />
                        {/* shows the name of the animation */}
                        <h3>{animation.name}</h3>
                    </div>
                ))}
            </div>

            {/* only shows if animation is selected */}
            {selectedAnimation && (
                <div className='display-anim'>
                    {/* shows which animation is playing and plays it */}
                </div>
            )}

        </>
    )
}
export default SearchAnim;
