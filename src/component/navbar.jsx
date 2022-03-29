import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div>
            <div>
                <h1>booking</h1>
                <div>
                    <input type="text" placeholder='검색' />
                </div>
                <div>
                <FontAwesomeIcon icon={faSearch} className="search" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;