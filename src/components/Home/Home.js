import React from 'react'
import { categories } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import RecommendedTopics from '../RecommendedTopics/RecommendedTopics';
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
                                        <a
                                            href="#"
                                            className={"tabs-navigation-link" + (active === category ? " active" : '')}
                                        >
                                            {category}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <NavLink to="/add-topic" className="primary-btn">
                            <span className="btn-text">Add Topic </span>
                            <FontAwesomeIcon icon={faAngleRight} style={{color: "#ffffff"}}/>
                        </NavLink>
                    </div>
                    <RecommendedTopics />
                </div>
            </div>
        </div>
    )
}

export default Home;
