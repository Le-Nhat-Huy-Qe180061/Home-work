import React from 'react';
import './style.scss';
// Import các icon từ react-icons/fa
import { FaRocket, FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaBriefcase, FaGraduationCap, FaCode, FaBezierCurve, FaStar, FaPalette, FaBook, FaFilm, FaHeadphones, FaGamepad } from 'react-icons/fa';
import image from "../../images/z5685129335071_cfdbf8984800258964a1a17de5b3e789.jpg";

const Index = () => {
    return (
        <div className="resume">
            <div className="base">
                <div className="profile">
                    <div className="photo">
                        <img src={image} alt='ảnh đại diện'/>
                        <FaRocket />
                    </div>
                    <div className="info">
                        <h1 className="name">Lê Nhật Huy Qe180061</h1>
                        <h2 className="job">Frontend Web Designer</h2>
                    </div>
                </div>
                <div className="about">
                    <h3>About Me</h3>
                    <p>I'm a web designer at FPT with experience in web design, graphic design, and user experience. I’m familiar with Adobe Creative Suite, responsive design, social media management, and prototyping.</p>
                </div>
                <div className="contact">
                    <h3>Contact Me</h3>
                    <div className="call">
                        <a href="*">
                            <FaPhone /><span>0569589113</span>
                        </a>
                    </div>
                    <div className="address">
                        <a href="*">
                            <FaMapMarkerAlt /><span>Quy Nhơn</span>
                        </a>
                    </div>
                    <div className="email">
                        <a href="lenhathuy9a6@gmail.com">
                            <FaEnvelope /><span>huylnqe180061@fpt.edu.vn</span>
                        </a>
                    </div>
                </div>
                <div className="follow">
                    <h3>Follow Me</h3>
                    <div className="box">
                        <a href="https://www.facebook.com/lenhat.huy.79274/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.instagram.com/lnhuyk4/https://www.instagram.com/astronaomical/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="*" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
                        <a href="*" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="func">
                <div className="work">
                    <h3><FaBriefcase />Experience</h3>
                    <ul>
                        <li><span>Create web Shop online -<br />Web Design</span><small>Huydev</small></li>
                        <li><span>Web Quiz</span></li>
                        <li><span>Create web shop-onlie used node.js vs express</span></li>
                    </ul>
                </div>
                <div className="edu">
                    <h3><FaGraduationCap />Education</h3>
                    <ul>
                        <li>FPT UNIVERCITY</li>
                    </ul>
                </div>
                <div className="skills-prog">
                    <h3><FaCode />Programming Skills</h3>
                    <ul>
                        {['HTML5', 'CSS3 & SCSS', 'JavaScript', 'jQuery', 'JSON', 'MySQL'].map((skill, index) => (
                            <li key={index} data-percent={[70, 90, 60, 50, 55, 40][index]}>
                                <span>{skill}</span>
                                <div className="skills-bar">
                                    <div className="bar" style={{ width: `${[70, 75, 60, 50, 40, 55, 40][index]}%` }}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="skills-soft">
                    <h3><FaBezierCurve />Software Skills</h3>
                    <ul>
                        {['Communicate', 'InDesign', 'Analysis'].map((skill, index) => (
                            <li key={index} data-percent={[70, 75, 85, 65][index]}>
                                <svg viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45"></circle>
                                    <circle className="cbar" cx="50" cy="50" r="45" style={{ strokeDashoffset: `${(100 - [90, 75, 85, 65][index]) * 2.83}` }}></circle>
                                </svg>
                                <span>{skill}</span><small></small>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="interests">
                    <h3><FaStar />Interests</h3>
                    <div className="interests-items">
                        {[
                            { icon: FaPalette, text: "Art" },
                            { icon: FaBook, text: "Books" },
                            { icon: FaFilm, text: "Movies" },
                            { icon: FaHeadphones, text: "Music" },
                            { icon: FaGamepad, text: "Games" }
                        ].map((interest, index) => (
                            <div key={index}>
                                <interest.icon />
                                <span>{interest.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
