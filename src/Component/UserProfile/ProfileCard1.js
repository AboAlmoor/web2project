import React from 'react'
import '../UserProfile/ProfileCard1.css'
import { FaLocationDot } from "react-icons/fa6";
import { AiFillIdcard } from "react-icons/ai";
import { SiBiolink } from "react-icons/si";

const ProfileCard1 = () => {
    return (
        <div>
            <div className="card3Account1">
                <main className="mainCard1Ameer">
                    <section className="text1Ameer">
                        <h2>Intro</h2>
                    </section>      
                    <section className="locAmeer">
                        <FaLocationDot /> <span className="tIgon">  Palestine - Salfit - Kafal Hares - Haret Laqna</span>
                    </section>
                    <section className="joinAmeer">
                        <AiFillIdcard /> <span className="tIgon">On Sunday after Friday prayers</span>
                    </section>
                    <section className="bioAmeer">
                        <SiBiolink /> <span className="tIgon"> bio </span>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProfileCard1