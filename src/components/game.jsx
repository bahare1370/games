import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/game.css';

const API_KEY = '02fc549733164031be651b8c7a7bedd6';

function Game() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://rawg.io/api/games?key=${API_KEY}`)
            .then(res => {
                setData(res.data);
                console.log(res)
            })
    }, []);

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                {!data && <h3>Loading...</h3>}
                {data &&
                    data.results.map(game => {
                        const { id, background_image, name, rating } = game;

                        return <div className="col-4 mb-4" key={id}>
                            <div className="card game-card" style={{ direction: 'ltr' }}>
                                <img src={background_image} className="card-img-top" alt={name} />
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="rate-text">rate: {rating}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Game
