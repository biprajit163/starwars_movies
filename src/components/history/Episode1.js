
import React, { useState, useEffect } from 'react';

function Episode1() {

    const [episode1Comments, setEpisode1Comments] = useState([]);

    useEffect(() => {
        let myComments = []
        
        if(localStorage.getItem('aNewHope')) {
            myComments = JSON.parse(localStorage.getItem('aNewHope'))
        }

        setEpisode1Comments(myComments);
    }, []);

    return (
        <div className="Episode1">
            <h4>A New Hope comment history</h4>
            {
                episode1Comments.map((comment, index) => {
                    return(
                        <p
                            key={index} 
                            style={{textAlign: 'left'}}
                        >{comment}</p>
                    );
                })
            }
        </div>
    );
}

export default Episode1;