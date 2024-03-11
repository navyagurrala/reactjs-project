import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="bg-body-tertiary text-center" style={{ backgroundColor: "blue", padding: "5px", borderBottom: "1px solid #ccc", borderTop: "1px solid #ccc", marginTop: "2rem" }}>
                <div className="text-center p-3" style={{ color: "black", fontSize: "24px" }}>
                    © 2024 Task Manager & Reminder.com
                </div>
            </footer>
        </>
    );
};

export default Footer;
