import React from "react";

import 'tachyons'
const Card = ({name, username, id, email}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${username}.jpg`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card; 