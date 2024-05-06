import React from 'react'
import { IoCamera } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import './ProfileCard3.css'

const ProfileCard3 = () => {
    return (
        <div>
            <div className="card1">
                <main className="l-card">
                    <section className="l-cardtext">
                        <h2>Share your travel tips</h2>
                    </section> 
                    <section>
                        <div className="camera-section">
                            <IoCamera /> <span className="pp">Post Photos</span>
                        </div>
                    </section>
                    <section>
                        <div className="write">
                            <FaEdit /> <span className="pp">Write Reviw</span>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProfileCard3