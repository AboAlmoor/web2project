import { useState, useEffect } from 'react';
import axios from 'axios'

const dataRestaurant = () => {
    const [Restaurantdata , setRestaurantdata] = useState ([]);

    useEffect(()=> {
        const fetchdata = async () => {
            try{
                const res = await axios.get("http://localhost:3001/getRestaurant");
                setRestaurantdata(res.data);
            } catch (error) {
                console.error("Error fetching data" , error);
            }
        };
        
        fetchdata();
    }, []);

    return Restaurantdata;

};

export default dataRestaurant;
