import React, { useState, useEffect } from "react";
import excuses from "./excuses";
import "./ExcuseGenerator.css";

const categories = ["all", "college", "dev-life", "deadlines"];

const ExcuseGenerator = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredExcuses, setFilteredExcuses] = useState(excuses);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [copied, setCopied] = useState(false);
     const [showExcuse, setShowExcuse] = useState(true);


    useEffect(() => {
        const filtered = selectedCategory === "all"
            ? excuses
            : excuses.filter(e => e.category === selectedCategory);
        setFilteredExcuses(filtered);
        setCurrentIndex(0);
        setCopied(false);
    }, [selectedCategory]);


    const generateExcuse = () => {
        setCopied(false);
        setShowExcuse(false);

        setTimeout( ()=>{
            
        setCurrentIndex(prevIndex => (prevIndex + 1) % filteredExcuses.length);
        setShowExcuse(true);
    },300);
    };

    const copyToClipboard = () => {
        if (filteredExcuses.length > 0) {
            navigator.clipboard.writeText(filteredExcuses[currentIndex].text);
            setCopied(true);
        }
    };

    return (
        <div className="generator">
            <div className="filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={selectedCategory === cat ? "active" : ""}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            <button className="generate-button" onClick={generateExcuse}>
                Generate Excuse
            </button>

            {filteredExcuses.length > 0 && (
                <div className="excuse-display">
                    <p className={`excuse-text ${showExcuse ? "show" : "hide"}`}>{filteredExcuses[currentIndex].text}</p>
                    {/* <button  className={`copy-button ${copied ? "copied" : ""}`} onClick={copyToClipboard}>
                        {copied ? "Copied!" : "Copy"}

                    </button> */}

                    <button className={`copy-button ${copied ? "copied" : ""}`} onClick={copyToClipboard}>
      <span>
        Copy</span>
      <span>Copied</span>
    </button>
                </div>
            )}
        </div>
    );
};

export default ExcuseGenerator;
