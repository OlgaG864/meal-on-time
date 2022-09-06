import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <i className="bi-cup-hot me-3"></i>
                        Meal On Time
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Header;