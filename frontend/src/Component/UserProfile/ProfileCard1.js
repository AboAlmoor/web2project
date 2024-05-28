import React, { useState, useEffect } from 'react';
import '../UserProfile/ProfileCard1.css'
import { FaLocationDot } from "react-icons/fa6";
import { SiBiolink } from "react-icons/si";

const ProfileCard1 = () => {
    const [bio, setBio] = useState(localStorage.getItem("bio")||"");
    const [country, setCountry] = useState(localStorage.getItem("country") || "");

    
    

    useEffect(() => {
        const savedProfile = JSON.parse(localStorage.getItem('profileData'));
        if (savedProfile) {

            setBio(savedProfile.bio);
            setCountry(savedProfile.country);
            
        }
    }, []);

    return (
        <div>
            <div className="card3Account1">
                <main className="mainCard1Ameer">
                    <section className="text1Ameer">
                        <h2>Intro</h2>
                    </section>      
                    <section className="locAmeer">
                        <FaLocationDot /> {country}
                    </section>
                    <section className="bioAmeer">
                        <SiBiolink /> {bio ||"bio"}
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProfileCard1