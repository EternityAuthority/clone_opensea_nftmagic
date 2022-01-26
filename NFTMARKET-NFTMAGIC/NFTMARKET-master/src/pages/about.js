import React from "react";
import { Box } from "@mui/system";
import { Col, Row } from "reactstrap";

const About = () => {
    return (
        <Box className="no-bottom no-top" id="content">
            <Box className="container">
                <Box className="row">
                    <Box className="col-md-12 paddingtop11 ranking" >
                        <h2 className="top-nfts">About Us</h2>
                    </Box>
                    <Box className="col-md-12">
                        <Row className="aboutus" xs="auto" >
                            <Col md={12} className="displayflex1" xs="auto">
                                <img className="img-h200" src="assets/images/about/nfts-magics-logo.png"></img>
                                <h3>We are an exciting and magical non-fungible token (NFT) market</h3>
                            </Col>
                            <Col md={12} xs="auto">
                                <Row>
                                    <Col md={2} className="displayflex1" style={{ justifyContent: "center" }}>
                                        <img className="img-h200" src="assets/images/about/electric-nft-card.png"></img>
                                    </Col>
                                    <Col md={8}>
                                        <Col md={12} className="displayflex1">
                                            <img className="img-h50" src="assets/images/about/magics-paintbrush-nft.png"></img>
                                            <h4>Create or design your digital art.</h4>&nbsp;
                                            <h4 className="red-font">Express yourself!</h4>
                                        </Col>
                                        <Col md={12} className="displayflex1">
                                            <img className="img-h50" src="assets/images/about/give-as-gift.png"></img>
                                            <h4>Give as a gift beautiful dedications</h4>&nbsp;
                                            <h4 className="red-font">And win for it!</h4>
                                        </Col>
                                        <Col md={12} className="displayflex1">
                                            <img className="img-h50" src="assets/images/about/trading-logo.png"></img>
                                            <h4>Buy and sell NFTS easily with low fees.</h4>&nbsp;
                                            <h4 className="red-font">And earn money!</h4>
                                        </Col>
                                        <Col md={12} className="displayflex1">
                                            <img className="img-h50" src="assets/images/about/ball-ayra-ithd.png"></img>
                                            <h4>Using AYRA or ITHD tokens you have a</h4>&nbsp;
                                            <h4 className="red-font">50% discount on fees.</h4>
                                        </Col>
                                        <Col md={12} className="displayflex1">
                                            <img className="img-h50" src="assets/images/about/distributed-rewards.png"></img>
                                            <h4>Rewards distributed among all active buyers </h4>&nbsp;
                                            <h4 className="red-font">in the last 60 days.</h4>
                                        </Col>
                                        <Col md={12} className="displayflex1">
                                            <img className="img-h50" src="assets/images/about/royalties-logo.png"></img>
                                            <h4>When someone sells your NFT , you will recive a</h4>&nbsp;
                                            <h4 className="red-font">royalty compensation.</h4>
                                        </Col>
                                        <Col md={12} className="displayflex1">
                                            <img className="img-h50" src="assets/images/about/affiliate-icon.png"></img>
                                            <h4>Earn 20% on AYRA and ITHD when your guests buy using your</h4>&nbsp;
                                            <h4 className="red-font">referral link</h4>
                                        </Col>
                                    </Col>
                                    <Col md={2} className="displayflex1">
                                        <img src="assets/images/about/cards.png"></img>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} className="displayflex1 center paddingtop30" xs="auto">
                                <h2 className="textalign-center">Who&apos;s behind?</h2>
                            </Col>
                            <Col md={12} className="displayflex1" xs="auto">
                                <Col md={2}>
                                    <img className="img-h200" src="assets/images/about/ithprojects-ayra.jpg"></img>
                                </Col>
                                <Col md={10} className="displayflex1">
                                    <Row>
                                        <Col md={12} className="displayflex1">
                                            <h3>We are ITH Projects, true blockchain enthusiasts.</h3>
                                        </Col>
                                        <Col md={12} className="displayflex1">
                                            <h3>We create countless projects. Stay in touch with us.</h3>
                                            <img className="logo-50" src="assets/images/about/telegram-logo.png"></img>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                            <Col md={12} className="displayflex1" xs="auto">
                                <Col md={3}>
                                    <img className="img-h200" src="assets/images/about/ARSENE-LUPI.png"></img>
                                    <h3>Arsene Lupi</h3>
                                </Col>
                                <Col md={3}>
                                    <img className="img-h200" src="assets/images/about/YOUS-CHIBIUSA.png"></img>
                                    <h3>Yous Chibiusa</h3>
                                </Col>
                                <Col md={6} className="about-text" >
                                    <h3>Society is undergoing a radical change from a traditional centralized economy to a much fairer decentralized system.<br></br>
                                        We want to go even frther.That is why we create projects that bring human emotions to the blockchain. <br></br>
                                        With this magical NFT market you will be able to immortality your feelings , poetry, dedications or your art.<br></br>
                                        You will be able to leave a mark.</h3>
                                </Col>
                            </Col>
                            <Col md={12} className="displayflex1" style={{ paddingBottom: "100px" }} xs="auto">
                                <Col md={6}>
                                    <img src="assets/images/about/super-hero-community.png" style={{ width: "80%" }}></img>
                                </Col>
                                <Col md={6} className="displayflex1">
                                    <Row>
                                        <Col md={12} className="about-text">
                                            <h3>Let&apos;s make a vibrant community of superheroes.</h3>
                                        </Col>
                                        <Col md={12} style={{ textAlign: "initial" }}>
                                            <h2>Discover your future with us!</h2>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default About