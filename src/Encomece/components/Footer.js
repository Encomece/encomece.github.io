import "../assets/css/style.css"
import React from 'react'




const Footer = () => {
    return (

        <footer className="bg-footer">
            <div className="container gap">
                <div className="row">
                    <div className="col-12 col-md-10">
                        <div className="row">
                            <div className="col-4">
                                <h5>Encomece</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Affilites</a></li>
                                    <li><a href="#">Open Encomece</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h5>Connect</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Help center</a></li>
                                    <li><a href="#">Media kit</a></li>
                                </ul>
                            </div>
                            <div className="col-4 sideline">
                                <h5>Legel</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">Terms of Services & Honor code</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Accessiblity policy</a></li>
                                    <li><a href="#">Trademark policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <ul className="list-unstyled list-social text-center">
                                <li><a className="btn-social-icon pt-1  fb" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="btn-social-icon pr-2 pl-2 insta" href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a className="btn-social-icon pr-2 pl-2 linked" href="#"><i className="fab fa-linkedin"></i></a></li>
                                <li><a className="btn-social-icon pr-2 pl-2 twit" href="#"><i className="fab fa-twitter"></i></a></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
