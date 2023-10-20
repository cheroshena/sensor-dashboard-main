import React, { useState } from "react";

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedCommunicationCategory, setSelectedCommunicationCategory] = useState("");
    const [selectedPowerCategory, setSelectedPowerCategory] = useState("");
    const [selectedStatusCategory, setSelectedStatusCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const comunicationcategories = [
        "MQTT",
        "HTTP",
        "LoRaWAN",
    ];
    const powercategories = [
        "Battery",
        "AC Power",

    ];
    const statuscategories = [
        "Online",
        "Offline",

    ];
    const categories = [
        "Choose the Value",
        "Measurement of physical Properties",
        "Environmental Sensing",
        "Biological & Chemical Sensing",
        "Position & Navigation",
        "Imaging & Vision",
        "Flow and Fluid",
    ];
    const subCategories = {
        "Measurement of physical Properties": [
            "Choose the Value",
            "Temperature",
            "Pressure",
            "Humidity",
            "Motion",
            "Proximity",
        ],
        "Environmental Sensing": [
            "Choose the Value",
            "Gas",
            "Weather",
            "Light",
            "Sound",
        ],
        "Biological & Chemical Sensing": [
            "Choose the Value",
            "Chemical Sensing",
            "Bio Sensors",
        ],
        "Position & Navigation": [
            "Choose the Value",
            "Global Positioning System",
            "Compass Sensor",
        ],
        "Imaging & Vision": [
            "Choose the Value",
            "Image Sensor",
            "infra-red sensor",
        ],
        "Flow and Fluid": ["Choose the Value", "Flow Sensor", "Viscosity Sensor"],
    };

    const handleCommunicationCategoryChange = (event) => {

        setSelectedCommunicationCategory(event.target.value);
    };

    const handlePowerCategoryChange = (event) => {

        setSelectedPowerCategory(event.target.value);
    };

    const handleStatusCategoryChange = (event) => {

        setSelectedStatusCategory(event.target.value);
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setSelectedSubCategory("");
    };

    const handleSubCategoryChange = (event) => {
        const subCategory = event.target.value;
        setSelectedSubCategory(subCategory);
    };

    const formStyles = {
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",

        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    };

    const labelStyles = {
        fontSize: "18px",
        margin: "10px 0",
        fontFamily: "Poppins, sans-serif",
    };

    const inputStyles = {
        width: "100%",
        padding: "10px",
        margin: "4px 0",
        border: "1px solid #ccc",
        borderRadius: "40px",
        fontFamily: "Poppins, sans-serif",
    };

    return (
        <div>
            <div style={formStyles}>
            <div>
            <label style={labelStyles}>Sensor Type</label>
                <input type="text" placeholder="Name" style={inputStyles} />
                <input type="text" placeholder="Model Number" style={inputStyles} />
                </div>
                <label style={labelStyles}>Sensor ID</label>
                <input type="text" placeholder="Serial Number" style={inputStyles} />
                <label style={labelStyles}>Location</label>
                <input type="text" placeholder="Address" style={inputStyles} />
                <input type="text" placeholder="GPS Co-ordinates" style={inputStyles} />
                <input
                    type="text"
                    placeholder="Installation Site"
                    style={inputStyles}
                />
                <label style={labelStyles}>Sensor Capabilities</label>

                <div>
                    <select
                        style={inputStyles}
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    {selectedCategory && (
                        <select
                            style={inputStyles}
                            value={selectedSubCategory}
                            onChange={handleSubCategoryChange}
                        >
                            {subCategories[selectedCategory].map((subCategory) => (
                                <option key={subCategory} value={subCategory}>
                                    {subCategory}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
                <label style={labelStyles}>Calibration Data</label>

                <input type="text" placeholder="Certificates & Standard used" style={inputStyles} />

                <label style={labelStyles}>Communication Protocol</label>
                <div>
                    <select
                        style={inputStyles}
                        value={selectedCommunicationCategory}
                        onChange={handleCommunicationCategoryChange}
                    >

                        <option value="" >
                            Choose the Value
                        </option>
                        {comunicationcategories.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <label style={labelStyles}>Power Supply</label>
                <div>
                    <select
                        style={inputStyles}
                        value={selectedPowerCategory}
                        onChange={handlePowerCategoryChange}
                    >

                        <option value="" >
                            Choose the Value
                        </option>
                        {powercategories.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <label style={labelStyles}>Sensor Status & Health</label>
                <div>
                    <select
                        style={inputStyles}
                        value={selectedStatusCategory}
                        onChange={handleStatusCategoryChange}
                    >

                        <option value="" >
                            Choose the Value
                        </option>
                        {statuscategories.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
