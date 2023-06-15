import React from 'react'
import { categories } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './home.scss';

const Home = () => {
    const [active, setActive] = React.useState(categories[0]);
    return (
        <div className="home-page-container">
            <div className="home-page-wrapper">
                <div className="container">
                    <h1 className="heading">Categories</h1>
                    <div className="navigation-container">
                        <ul className="tabs-navigation-container">
                            {
                                categories.map((category, index) => (
                                    <li className="tabs-navigation-list" key={index} onClick={() => setActive(category)}>
                                        <a className={"tabs-navigation-link" + (active ===  category ? " active" : '')}>{category}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <button className="primary-btn">
                            <span className="btn-text">Add Topic </span>
                            <FontAwesomeIcon icon={faAngleRight} style={{color: "#ffffff"}}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
