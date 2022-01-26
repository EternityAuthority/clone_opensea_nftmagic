import React from "react";
import { Box } from "@mui/system";
import { Col, Container, Row } from "reactstrap";

const About = () => {
    return (
        <Box className="no-bottom no-top" id="content">
            <Box className="container">
                <Box className="row">
                    <Box className="col-md-12 paddingtop11 ranking" >
                        <h2>How be affiliate?</h2>
                    </Box>
                    <Container >
                        <Row md={12} className="justifycontent-center">
                            <Col xs={12} md={3} className="displayflex">
                                <Box className="affiliate-box">
                                    <img src="assets/images/affiliate/blue-square.png"></img>
                                    <Box className="icon-img">
                                        <Row md={12}>
                                            <Col md={12} style={{ height: "150px" }}>
                                                <img src="assets/images/affiliate/square-with-wallet.png" ></img>
                                            </Col>
                                            <Col md={12}>
                                                <h3>CONNECT WALLET</h3>
                                            </Col>
                                        </Row>
                                    </Box>
                                </Box>
                            </Col>
                            <Col xs={12} md={1} className="displayflex">
                                <img src="assets/images/affiliate/right-arrow-be-affiliate.png"></img>
                            </Col>
                            <Col xs={12} md={3} className="displayflex">
                                <Box className="affiliate-box">
                                    <img src="assets/images/affiliate/blue-square.png"></img>
                                    <Box className="icon-img">
                                        <Row md={12}>
                                            <Col md={12} style={{ height: "150px" }}>
                                                <img src="assets/images/affiliate/affiliate-icon.png" ></img>
                                            </Col>
                                            <Col md={12}>
                                                <h3>CLICK ON AFFILIATE</h3>
                                            </Col>
                                        </Row>
                                    </Box>
                                </Box>
                            </Col>
                            <Col xs={12} md={1} className="displayflex">
                                <img src="assets/images/affiliate/right-arrow-be-affiliate.png"></img>
                            </Col>
                            <Col xs={12} md={3} className="displayflex">
                                <Box className="affiliate-box">
                                    <img src="assets/images/affiliate/blue-square.png"></img>
                                    <Box className="icon-img">
                                        <Row md={12}>
                                            <Col md={12} style={{ height: "150px" }}>
                                                <img src="assets/images/affiliate/copy-your-unique-link-icon.png" ></img>
                                            </Col>
                                            <Col md={12}>
                                                <h3>COPY YOUR UNIQUE LINK</h3>
                                            </Col>
                                        </Row>
                                    </Box>
                                </Box>
                            </Col>
                        </Row>
                        <Row md={12} className="justifycontent-center" >
                            <Col md={9} xs={12} className="displayflex">
                                <Box className="referral-box">
                                    <Box className="referral-header">
                                        <h2 className="textalign-center" style={{ color: "white" }}>YOUR REFERRAL URL</h2>
                                    </Box>
                                    <Box className="referral-content">
                                        <input type="text" className="form-control" value="https://nftsmagics.com/?r=32699037" disabled />&nbsp;&nbsp;&nbsp;
                                        <img src="assets/images/affiliate/button-copy-link.png" title="copy"></img>
                                    </Box>
                                </Box>
                            </Col>
                        </Row>

                        <Row md={12} className="justifycontent-center paddingtop30" >
                            <Col md={9} xs={12} className="displayflex justifycontent-center">
                                <h2 className="textalign-center">What to do with your link?</h2>
                            </Col>
                        </Row>

                        <Row md={12} className="justifycontent-center">
                            <Col xs={12} md={3} className="displayflex">
                                <Box className="affiliate-box">
                                    <img src="assets/images/affiliate/blue-square.png"></img>
                                    <Box className="icon-img">
                                        <Row md={12}>
                                            <Col md={12} style={{ height: "150px" }}>
                                                <img src="assets/images/affiliate/share-it-icon.png" ></img>
                                            </Col>
                                            <Col md={12}>
                                                <h3>SHARE IT</h3>
                                            </Col>
                                        </Row>
                                    </Box>
                                </Box>
                            </Col>
                            <Col xs={12} md={1} className="displayflex">
                                <img src="assets/images/affiliate/right-arrow-be-affiliate.png"></img>
                            </Col>
                            <Col xs={12} md={3} className="displayflex">
                                <Box className="affiliate-box">
                                    <img src="assets/images/affiliate/blue-square.png"></img>
                                    <Box className="icon-img">
                                        <Row md={12}>
                                            <Col md={12} style={{ height: "150px" }}>
                                                <img src="assets/images/affiliate/guest-icon.png" ></img>
                                            </Col>
                                            <Col md={12}>
                                                <h3>YOU GET GUESTS</h3>
                                            </Col>
                                        </Row>
                                    </Box>
                                </Box>
                            </Col>
                            <Col xs={12} md={1} className="displayflex">
                                <img src="assets/images/affiliate/right-arrow-be-affiliate.png"></img>
                            </Col>
                            <Col xs={12} md={3} className="displayflex">
                                <Box className="affiliate-box">
                                    <img src="assets/images/affiliate/blue-square.png"></img>
                                    <Box className="icon-img">
                                        <Row md={12}>
                                            <Col md={12} style={{ height: "150px" }}>
                                                <img src="assets/images/affiliate/shopping-cart.png" ></img>
                                            </Col>
                                            <Col md={12}>
                                                <h3>THEY BUY AND YOU SELL</h3>
                                            </Col>
                                        </Row>
                                    </Box>
                                </Box>
                            </Col>
                        </Row>
                        <Row md={12} className="justifycontent-center paddingtop30" >
                            <Col md={11} xs={12} className="displayflex" style={{ justifyContent: "space-between" }}>
                                <img src="assets/images/affiliate/revaluable-rewards.png" style={{ width: "30%" }}></img>
                                <img src="assets/images/affiliate/join-now-button.png" style={{ width: "30%" }}></img>
                            </Col>
                        </Row>
                    </Container>
                </Box>
            </Box>
        </Box >
    )
}
export default About