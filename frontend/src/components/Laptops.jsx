import { Link } from "react-router-dom"
import styles from "./Laptops.module.css";
import youtube from '../assets/youtube.png'
import whatsapp from '../assets/whatsapp (1).png'
import facebook from '../assets/facebook (2).png'
import chevrondown from '../assets/chevron-down.png'
import laptopcard from '../assets/laptopcard.png'

function Laptops() {
    return (
        <div>
            {/* start header  */}
            <div className={styles.header} id="header">
                <div className={styles.container}>
                    <a href="#" className={styles.logo}>RAQMIYA</a>
                    <ul className={styles.mainNav}>
                        <li><a href="#Homepage">Home</a></li>
                        <li><a href="#Landline">Products</a></li>
                        <li><a href="#Internet">About</a></li>
                        <li><a href="#Internet">Feedback</a></li>
                    </ul>
                    <a href="#" className={styles.contact}>Contact</a>
                </div>
            </div>
            {/* end header  */}
            {/* start Laptops */}
            <div className={styles.laptops}>
                <div className={styles.container}>
                    <div className={styles.path}>
                        <p>Home/Products<span>/Laptops</span></p>
                        <div className={styles.sort}>
                            <p>Sort by Latest</p>
                            <img src={chevrondown} alt="" />
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div>
                                <img src={laptopcard} alt="" />
                                <p className={styles.discription}>LAPTOP DELL VOSTRO 3520 I5 1235U 8GB</p>
                                <div className={styles.buy}>
                                    <p className={styles.buynow}>BUY NOW</p>
                                    <p className={styles.price}>110 000,00 DA</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={laptopcard} alt="" />
                                <p className={styles.discription}>LAPTOP DELL VOSTRO 3520 I5 1235U 8GB</p>
                                <div className={styles.buy}>
                                    <p className={styles.buynow}>BUY NOW</p>
                                    <p className={styles.price}>110 000,00 DA</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={laptopcard} alt="" />
                                <p className={styles.discription}>LAPTOP DELL VOSTRO 3520 I5 1235U 8GB</p>
                                <div className={styles.buy}>
                                    <p className={styles.buynow}>BUY NOW</p>
                                    <p className={styles.price}>110 000,00 DA</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={laptopcard} alt="" />
                                <p className={styles.discription}>LAPTOP DELL VOSTRO 3520 I5 1235U 8GB</p>
                                <div className={styles.buy}>
                                    <p className={styles.buynow}>BUY NOW</p>
                                    <p className={styles.price}>110 000,00 DA</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={laptopcard} alt="" />
                                <p className={styles.discription}>LAPTOP DELL VOSTRO 3520 I5 1235U 8GB</p>
                                <div className={styles.buy}>
                                    <p className={styles.buynow}>BUY NOW</p>
                                    <p className={styles.price}>110 000,00 DA</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={laptopcard} alt="" />
                                <p className={styles.discription}>LAPTOP DELL VOSTRO 3520 I5 1235U 8GB</p>
                                <div className={styles.buy}>
                                    <p className={styles.buynow}>BUY NOW</p>
                                    <p className={styles.price}>110 000,00 DA</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.one}>
                        <p>1</p>
                    </div>
                </div>
            </div>
            {/* end Laptops */}
            {/* start footer  */}
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.container2}>
                        <div className={styles.part1}>
                            <p className={styles.title1}>RAQMIYA</p>
                            <p className={styles.paragraph1}>Raqmiya Store is a modern hardware and informatics shop that offers everything you need. At Raqmiya, you’ll always find high-quality products at the most suitable prices.</p>
                        </div>
                        <div className={styles.part2}>
                            <p className={styles.title2}>Discover More</p>
                            <ul>
                                <li>Home Page</li>
                                <li>Products</li>
                                <li>About Us</li>
                                <li>Feedback</li>
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

export default Laptops;