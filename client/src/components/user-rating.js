import React, { useState } from "react";

// icons
import { FaStar } from "react-icons/fa";


const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [userRating, setUserRating] = useLocalStorage('rating', rating);

    return ( 
    <>
        {/* calling an array or 5 stars */}
        {[...Array(5)].map((star, i) => {

        //seting ratingValue to start at 1
        const ratingValue = i + 1;

            return ( 
            <label>
                <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue || userRating} 
                    onClick={()=> setRating(ratingValue)}
                    onChange={e => setUserRating(e.target.value)}
                /> 

                <FaStar className="star" 
                color ={ratingValue <= (hover || rating) ? "#ffc107" :  "#e4e5e9"} 
                size={20} 
                onMouseEnter={()=> setHover(ratingValue)}
                onMouseLeave={()=> setHover(null)}
                />
            </label>
            );
        })}   
    </> 
    );

};


            // //saving to local storage
            // localStorage.setItem('rating', rating)


            // // pulling from local storage
            // const getRating = localStorage.getItem(rating);
            // console.log(localStorage);  
            // if (getRating){
            //     // Refresh our rating on screen
            //     return (rating);
            // }


            // Hook
            function useLocalStorage(key, initialValue) {
                // State to store our value
                // Pass initial state function to useState so logic is only executed once
                const [storedValue, setStoredValue] = useState(() => {
                try {
                    // Get from local storage by key
                    const item = window.localStorage.getItem(key);
                    // Parse stored json or if none return initialValue
                    return item ? JSON.parse(item) : initialValue;
                } catch (error) {
                    // If error also return initialValue
                    console.log(error);
                    return initialValue;
                }
                });
            
                // Return a wrapped version of useState's setter function that ...
                // ... persists the new value to localStorage.
                const setValue = value => {
                try {
                    // Allow value to be a function so we have same API as useState
                    const valueToStore =
                    value instanceof Function ? value(storedValue) : value;
                    // Save state
                    setStoredValue(valueToStore);
                    // Save to local storage
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                } catch (error) {
                    // A more advanced implementation would handle the error case
                    console.log(error);
                }
                };
            
                return [storedValue, setValue];
            }


export default StarRating;


