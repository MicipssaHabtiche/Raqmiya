import styles from "./LandingPage.module.css";
import element1 from '../assets/element1.png'
import element2 from '../assets/element2.png'
import element3 from '../assets/element3.png'
import element4 from '../assets/element4.png'
import element5 from '../assets/element5.png'
import element6 from '../assets/element6.png'
import aboutusimg from '../assets/aboutus.png'
import feedbackcard from '../assets/feedbackcard.png'
import feedbackcard2 from '../assets/feedbackcard2.png'
import youtube from '../assets/youtube.png'
import whatsapp from '../assets/whatsapp (1).png'
import facebook from '../assets/facebook (2).png'
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div>
            {/* start header  */}
            <div className={styles.header} id="header">
                <div className={styles.container}>
                    <a href="#" className={styles.logo}>RAQMIYA</a>
                    <ul className={styles.mainNav}>
                        <li><a href="#Homepage">Home</a></li>
                        <li><a href="#product">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#Feedback">Feedback</a></li>
                    </ul>
                    <a href="#" className={styles.contact}>Contact</a>
                </div>
            </div>
            {/* end header  */}
            {/* start Landing  */}
            <div className={styles.landing} id="home">
                <div className={styles.container}>
                    <p className={styles.p1}>Tech Made Simple With</p>
                    <h2>RAQMIYA Store</h2>
                    <p>Raqmiya Store is a modern hardware and informatics shop that offers everything you need; from PCs and computer units to keyboards, disks, and mice. At Raqmiya, you’ll always find high-quality products at the most suitable prices.</p>
                    <div className={styles.buydiscover}>
                        <a href="#product" className={styles.buy}>Buy Now!</a>
                        <a href="#discovermore" className={styles.discover}>Discover More</a>
                    </div>
                </div>
            </div>
            {/* end landing */}
            {/* start pruducts  */}
            <div className={styles.products} id="product">
                <div className={styles.container}>
                    <div className={styles.paragraphselements}>
                        <p className={styles.statement1}>Products</p>
                        <p className={styles.statement2}>Everything You Need to Power Your Setup
                        </p>
                        {/* <p className={styles.statement3}>Setup</p> */}
                        {/* <div className={styles.elements}>
                            <div className={styles.element1}>
                                <img src={element1} alt="" />
                            </div>
                            <div className={styles.element2}>
                                <img src={element2} alt="" />
                            </div>
                            <div className={styles.element3}>
                                <img src={element3} alt="" />
                            </div>
                            <div className={styles.element4}>
                                <img src={element4} alt="" />
                            </div>
                            <div className={styles.element5}>
                                <img src={element5} alt="" />
                            </div>
                            <div className={styles.element6}>
                                <img src={element6} alt="" />
                            </div>
                        </div> */}
                        <div className={styles.elements}>
                            <Link to='/Headphones'>
                                <div className={styles.card}>
                                    <img src={element1} alt="" />
                                    <div className={styles.overlay}>
                                        <h3>Headsets</h3>
                                        <p>Enjoy crystal, clear sound and long-lasting comfort.</p>
                                        <span className={styles.more}>See More →</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Powersuplies">
                                <div className={styles.card}>
                                    <img src={element2} alt="" />
                                    <div className={styles.overlay}>
                                        <h3>Power suplies</h3>
                                        <p>Power and performance to handle all your computing tasks efficiently.</p>
                                        <span className={styles.more}>See More →</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Chairs">
                                <div className={styles.card}>
                                    <img src={element3} alt="" />
                                    <div className={styles.overlay}>
                                        <h3>Office Chairs</h3>
                                        <p>Optimal comfort for working or gaming for hours without fatigue.</p>
                                        <span className={styles.more}>See More →</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Accessories">
                                <div className={styles.card}>
                                    <img src={element4} alt="" />
                                    <div className={styles.overlay}>
                                        <h3>Accessories</h3>
                                        <p>Fast and stable connection for all your devices at home or office.</p>
                                        <span className={styles.more}>See More →</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Laptops">
                                <div className={styles.card}>
                                    <img src={element5} alt="" />
                                    <div className={styles.overlay}>
                                        <h3>Laptops</h3>
                                        <p>Mobility and power combined to work and play anywhere.</p>
                                        <span className={styles.more}>See More →</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/Fans">
                                <div className={styles.card}>
                                    <img src={element6} alt="" />
                                    <div className={styles.overlay}>
                                        <h3>Computer Fan</h3>
                                        <p>Efficient cooling to keep your system performing at its best.</p>
                                        <span className={styles.more}>See More →</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
            {/* end pruducts  */}
            {/* start about us  */}
            <div className={styles.aboutus} id="about">
                <div className={styles.container}>
                    <div className={styles.titles}>
                        <p className={styles.title1}>About Us</p>
                        <p className={styles.title2}>Welcome To RAQMIYA Store</p>

                    </div>
                    <div className={styles.introduction}>
                        <div className={styles.paragraphe}>
                            <p className={styles.paragraphe1}>At Raqmiya Store, we’re passionate about technology and innovation. Our mission is to make high quality hardware accessible to everyone. We offer a wide range of products, including PCs, components, peripherals, and accessories, all carefully selected for their performance, reliability, and price</p>
                            <a href="#product"> <p className={styles.seeproducts} >See Products →</p> </a>
                        </div>
                        <div> <img src={aboutusimg} alt="" /></div>
                    </div>
                </div>
            </div>
            {/* end about us  */}
            {/* start feedback  */}
            <div className={styles.feedback} id="Feedback">
                <div className={styles.container}>
                    <div className={styles.intro}>
                        <p className={styles.intro1}>Feedback</p>
                        <p className={styles.intro2}>Hear From Tech Lovers Like You</p>
                        <p className={styles.intro3}>We value your feedback. See what our customers say or share your own experience <span>— click here</span> to leave a review</p>
                    </div>
                    <div className={styles.feedbackcard}>
                        <div className={styles.feedbackcontainer}>
                            <div className={styles.titlename}>
                                <div><img src={feedbackcard} alt="" /></div>
                                <div className={styles.name}>Yasmine Roukas</div>
                            </div>
                            <p>"Raqmiya Store made building my custom PC a breeze. The website is easy to navigate, the product descriptions are clear, and I felt confident about my choices."</p>
                        </div>
                        <div className={styles.feedbackcontainer}>
                            <div className={styles.titlename}>
                                <div><img src={feedbackcard2} alt="" /></div>
                                <div className={styles.name}>Yasmine Roukas</div>
                            </div>
                            <p>“I recently bought a full gaming setup from Raqmiya Store and I couldn’t be happier. The products arrived quickly, were easy to set up, and the quality exceeded my expectations.”</p>
                        </div>
                        <div className={styles.feedbackcontainer}>
                            <div className={styles.titlename}>
                                <div><img src={feedbackcard} alt="" /></div>
                                <div className={styles.name}>Yasmine Roukas</div>
                            </div>
                            <p>"Raqmiya Store made building my custom PC a breeze. The website is easy to navigate, the product descriptions are clear, and I felt confident about my choices."</p>
                        </div>
                        <div className={styles.feedbackcontainer}>
                            <div className={styles.titlename}>
                                <div><img src={feedbackcard2} alt="" /></div>
                                <div className={styles.name}>Yasmine Roukas</div>
                            </div>
                            <p>“I recently bought a full gaming setup from Raqmiya Store and I couldn’t be happier. The products arrived quickly, were easy to set up, and the quality exceeded my expectations.”</p>
                        </div>
                        <div className={styles.feedbackcontainer}>
                            <div className={styles.titlename}>
                                <div><img src={feedbackcard} alt="" /></div>
                                <div className={styles.name}>Yasmine Roukas</div>
                            </div>
                            <p>"Raqmiya Store made building my custom PC a breeze. The website is easy to navigate, the product descriptions are clear, and I felt confident about my choices."</p>
                        </div>
                        <div className={styles.feedbackcontainer}>
                            <div className={styles.titlename}>
                                <div><img src={feedbackcard2} alt="" /></div>
                                <div className={styles.name}>Yasmine Roukas</div>
                            </div>
                            <p>“I recently bought a full gaming setup from Raqmiya Store and I couldn’t be happier. The products arrived quickly, were easy to set up, and the quality exceeded my expectations.”</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end feedback  */}
            {/* start footer  */}
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.container2}>
                        <div className={styles.part1}>
                            <p className={styles.title1}>RAQMIYA</p>
                            <p className={styles.paragraph1}>Raqmiya Store is a modern hardware and informatics shop that offers everything you need. At Raqmiya, you’ll always find high-quality products at the most suitable prices.</p>
                        </div>
                        <div className={styles.part2}>
                            <p className={styles.title2} id="discovermore">Discover More</p>
                            <ul>
                                <a href="#home"><li>Home Page</li></a>
                                <a href="#product"><li>Products</li></a>
                                <a href="#about"><li>About Us</li></a>
                                <a href="#Feedback"><li>Feedback</li></a>
                            </ul>
                        </div>
                        <div className={styles.part3}>
                            <p className={styles.title3}>Buy Now</p>
                            <p className={styles.paragraph3}>Explore reliable hardware at the right price.<span>Order now</span> and experience the Raqmiya difference!</p>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.underfooter}>
                        <div className={styles.rights}>All rights are reserved @ RAQMIYA Store</div>
                        <div className={styles.designername}>Designed By Roukas Yasmine</div>
                        <div className={styles.socialmedia}>
                            <img src={youtube} alt="" />
                            <img src={whatsapp} alt="" />
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* end footer  */}
        </div>
    );
}

export default LandingPage;