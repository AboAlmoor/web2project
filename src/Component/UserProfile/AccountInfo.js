import React, { useState, useEffect } from 'react';
import '../UserProfile/AccountInfo.css'

function AccountInfo() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    
    useEffect(() => {
        if (password === '') {
            setShowPassword(false); 
        }
    }, [password]);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo, Democratic Republic of the",
        "Congo, Republic of the",
        "Costa Rica",
        "Côte d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor (Timor-Leste)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea, North",
        "Korea, South",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];

    const handleCountryChange = (event) => {

        console.log(event.target.value);

    };

    return (
        <div>
            <div className="titAccount">
                <h2>Account Info</h2>
            </div>

            <div className="lineAccount">
                <h2>_________________________________________________________________________________________________________________________</h2>
            </div>

            <div className=" rowAccount">
                <div>
                    <div className="form-group field">
                        <label htmlFor="name" className="form-label-2 test2Account">First Name</label>
                        <input type="text" className="form-field-2 AccountInput" placeholder="first name..." name="name" id="name" required />
                    </div>
                </div>
                <div>
                    <div className="form-group field">
                        <label htmlFor="name" className="form-label-2 test2Account">Last Name</label>
                        <input type="text" className="form-field-2 AccountInput" placeholder="last name..." name="name" id="name" required />
                    </div>
                </div>
            </div>

            <div className=" rowAccount">
                <div>
                    <div className="form-group field">
                        <label htmlFor="email" className="form-label-3 test3Account" >Email</label>
                        <input type="text" className="form-field-3 AccountInput" placeholder="email... " name="email" id="email" required />
                    </div>
                </div>
            </div>

            <div className=" rowAccount">
                <div>
                    <div className="form-group field">
                        <label htmlFor="name" className="form-label-4 test4Account">Address</label>
                        <input type="text" className="form-field-4 AccountInput" placeholder="street address..." name="name" id="name" required />
                    </div>
                </div>
            </div>

            <div className=" rowAccount">
                <div>
                    <div className="form-group field">
                        <label htmlFor="name" className="form-label-5 test5Account">City</label>
                        <input type="text" className="form-field-5 AccountInput" placeholder="city..." name="name" id="name" required />
                    </div>
                </div>
            </div>

            <div className=" rowAccount">
                <div>
                    <div className="form-group field">
                        <label htmlFor="name" className="form-label-6 test6Account">County</label>
                        <div className="form-field-6" >
                            <div>
                                <select onChange={handleCountryChange}>
                                    <option value="">Select a country...</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" rowAccount">
                <div>
                    <div className="form-group field">
                        <label htmlFor="name" className="test7Account">Phone Number</label>
                        <input type="phonenumber" className="form-field-7 AccountInput" placeholder="phone number..." name="name" id="name" required />
                    </div>
                </div>
            </div>

            <div className=" rowAccount">
                <div >
                    <div className="form-group field">
                        <label htmlFor="name" className="test8Account">Password</label>
                        <div>
                            <div className="password-field">
                                <input
                                    className="AccountInput"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />  
                                <input className="clear AccountInput" type="text" placeholder="Password" />
                                <button className="AccountButton" onClick={togglePasswordVisibility}>
                                    <svg className="AccountSvg"  viewBox="0 0 21 21">
                                        <circle className="eye" cx="10.5" cy="10.5" r="2.25" />
                                        <path className="top" d="M2 10.5C2 10.5 6.43686 5.5 10.5 5.5C14.5631 5.5 19 10.5 19 10.5" />
                                        <path className="bottom" d="M2 10.5C2 10.5 6.43686 15.5 10.5 15.5C14.5631 15.5 19 10.5 19 10.5" />
                                        <g className="lashes">
                                            <path d="M10.5 15.5V18" />
                                            <path d="M14.5 14.5L15.25 17" />
                                            <path d="M6.5 14.5L5.75 17" />
                                            <path d="M3.5 12.5L2 15" />
                                            <path d="M17.5 12.5L19 15" />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lineAccount">
                <h2>_________________________________________________________________________________________________________________________</h2>
            </div>

            <div className=" rowAccount">
                <div>
                    <div className="butAccount">
                        <div className="flex-grid-center" style={{marginRight:"600px"}}>
                            <button  className="pure-button fuller-button blue AccountButton">save</button>
                            <button className="pure-button fuller-button red AccountButton">cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountInfo