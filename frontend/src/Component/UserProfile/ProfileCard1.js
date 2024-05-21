import React, { useState, useEffect } from 'react';
import '../UserProfile/ProfileCard1.css'
import { FaLocationDot } from "react-icons/fa6";
import { AiFillIdcard } from "react-icons/ai";
import { SiBiolink } from "react-icons/si";

const ProfileCard1 = () => {
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [joiningTime, setJoiningTime] = useState("");
    

    useEffect(() => {
        const savedProfile = JSON.parse(localStorage.getItem('profileData'));
        if (savedProfile) {
            setBio(savedProfile.bio);
            setLocation(savedProfile.location);
            setJoiningTime(savedProfile.joiningTime);
            
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
                        <FaLocationDot /> {location ||"Palestine - Salfit - Kafal Hares - Haret Laqn"}
                    </section>
                    <section className="joinAmeer">
                        <AiFillIdcard /> {joiningTime ||"On Sunday after Friday prayers"}
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