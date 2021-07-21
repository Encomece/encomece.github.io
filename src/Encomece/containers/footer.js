import React from 'react'
import Footer from '../components/footer/index.js'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Encomece</Footer.Title>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Affilites</Footer.Link>
                    <Footer.Link href="#">Open Encomece</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                    <Footer.Link href="#">News</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Connect</Footer.Title>
                    <Footer.Link href="#">Blog</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                    <Footer.Link href="#">Help center</Footer.Link>
                    <Footer.Link href="#">Media kit</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Legal</Footer.Title>
                    <Footer.Link href="#">Terms of Services & Honor code</Footer.Link>
                    <Footer.Link href="#">Privacy policy</Footer.Link>
                    <Footer.Link href="#">Accessiblity policy</Footer.Link>
                    <Footer.Link href="#">Trademark policy</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}