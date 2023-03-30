import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardInfo from '../Components/CardInfo.jsx'

const CardPage = () => {
        const { cardId } = useParams();
        const [card, setCard] = useState(null);
    
        useEffect(() => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon`)
            .then(response => {
            setCard(response.data.data[0]);
            console.log(response)
            })
            .catch(error => {
            console.log(error);
            });
        }, [cardId]);
    
        return (
        <div>
            {card ? <CardInfo card={card} /> : <p>Loading...</p>}
        </div>
        );
};
    
    
    export default CardPage;