
import React, { useState, useEffect } from 'react';

function Episode3() {

    const [episode3Comments, setEpisode3Comments] = useState([]);

    useEffect(() => {
        let myComments = []
        
        if(localStorage.getItem('3')) {
            myComments = JSON.parse(localStorage.getItem('3'))
        }

        setEpisode3Comments(myComments);
    }, []);

    return (
        <div className="comment-history">
            <h4>Revenge of the Sith</h4>
            {
                episode3Comments.map((comment, index) => {
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

export default Episode3;