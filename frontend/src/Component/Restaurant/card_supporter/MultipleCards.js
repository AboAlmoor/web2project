import { useState, useEffect } from 'react';
import axios from 'axios';
import CardHover from './Cardfood';
// import MideCard from './Restaurant_photo';

const useDataRestaurant = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [specificRestaurant, setSpecificRestaurant] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/getRestaurant');
        const lastFiveData = res.data.slice(8,13);
        const specificData = res.data;
        setRestaurantData(lastFiveData);
        setSpecificRestaurant(specificData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return { restaurantData, specificRestaurant };
};

function MultipleCards() {
  const { restaurantData } = useDataRestaurant();

  return (
    <>
      {/* {specificRestaurant && (
        <div className="specific-restaurant">
          <MideCard
            imageURl={specificRestaurant.imageUrl}
            title={specificRestaurant.title}
            subtitle={specificRestaurant.subtitle}
          />
        </div>
      )} */}
      <h1 className="Head_card_res">Kan ya ma kan</h1>
      <div className="card_rees ">
        {restaurantData.map((restaurant, index) => (
          <div className="best_res" key={index}>
            <CardHover
              imageUrl={restaurant.imageUrl}
              title={restaurant.title}
              subtitle={restaurant.subtitle}
            />

          </div>
        ))}
      </div>
    </>
  );
}

export default MultipleCards;