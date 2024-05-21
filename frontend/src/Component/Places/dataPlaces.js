/*import { useState, useEffect } from 'react';
import axios from 'axios'

const dataPlaces = () => {
    const [Placesdata , setPlasesdata] = useState ([]);

    useEffect(()=> {
        const fetchdata = async () => {
            try{
                const res = await axios.get("http://localhost:3001/Places");
                setPlasesdata(res.data);
            } catch (error) {
                console.error("Error fetching data" , error);
            }
        };
        
        fetchdata();
    }, []);

    return Placesdata;

};

export default dataPlaces;
*/



/*
import React, { useState, useEffect } from 'react';
 
const ErrorHandling = () => {
    
    const [Placesdata , setPlasesdata] = useState ([null]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        fetchData()
            .then(data => {
                setPlasesdata(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
 
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/getPlaces");
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();

        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    };
 
    if (loading) {
        return <div>Loading...</div>;
    }
 
    if (error) {
        return <div>Error: {error.message}</div>;
    }
 
    if (!Placesdata) {
        return <div>No data available</div>;
    }
 
    return fetchData();
};
 


export default ErrorHandling;*/