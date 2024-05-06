import React from 'react'
import './ProfileCard1.css'
import { FaLocationDot } from "react-icons/fa6";
import { AiFillIdcard } from "react-icons/ai";
import { SiBiolink } from "react-icons/si";

const ProfileCard1 = () => {
    return (
        <div>
            <div className="card3">
                <main className="1-card">
                    <section className="text2">
                        <h2>Intro</h2>
                    </section>      
                    <section className="loc">
                        <FaLocationDot /> <span className="t1">Palestine - Salfit - Kafal Hares - Haret Laqna</span>
                    </section>
                    <section className="join">
                        <AiFillIdcard /> <span className="t1">On Sunday after Friday prayers</span>
                    </section>
                    <section className="bio1">
                        <SiBiolink /> <span> bio </span>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProfileCard1