import React from 'react';
import { defaultTopics, colorPalette } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import './recommended-topics.scss';

const RecommendedTopics = () => {

    return (
        <div className="recommended-topics-container">
            <div className="recommended-topics-wrapper">
                <h2 className="">Recommended Topics</h2>
                <ul className="topics-wrapper">
                    {
                        defaultTopics && defaultTopics.length && defaultTopics.map((topic, index) => (
                            <li className="topic-list-container" key={index}>
                                <div className="topic-list-wrapper">
                                    <p className="topic-name">{topic.topic}</p>
                                    <div className="topic-keywords-wrapper">
                                        {
                                            topic.keywords.map((keyword, index) => (
                                                <span className="topic-keyword" style={{backgroundColor : (colorPalette[Math.floor(Math.random() * colorPalette.length)]).replace(/\)/i,',0.2)')}} key={index}>{keyword}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <NavLink to="/write-blog" className="primary-btn">
                                    <span className="btn-text">Write</span>
                                    <FontAwesomeIcon icon={faAngleRight} style={{color: "#ffffff"}}/>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default RecommendedTopics;
