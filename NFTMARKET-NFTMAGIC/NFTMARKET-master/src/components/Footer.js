import * as React from 'react';
import Box from '@mui/material/Box';
import { Col, Row } from 'reactstrap';

export default function Footer() {

    return (
        <footer className="footer">
            <Box className="container">
                <Box className="row">
                    <Box className="col-md-5 col-sm-6 col-xs-1">
                        <Box className="widget">
                            <Box style={{ display: "flex", alignItems: 'center' }}>
                                <img src="assets/images/design/nftwebsitelogo.png" className='img-h100'></img>
                                <h2>NFTS MAGICS</h2>
                            </Box>
                            <h3 style={{ color: "white" }}>The most magical digital market for non-fungible tokens (NFT).<br /> Create or buy or give away unique digital items.</h3>
                        </Box>
                    </Box>
                    <Box className="col-md-3 col-sm-6 col-xs-1">
                        <Box className="widget">
                            <img src="assets/images/design/cards.png" style={{ height: "300px" }}></img>
                        </Box>
                    </Box>
                    <Box className="col-md-4 col-sm-6 col-xs-1">
                        <Box className="widget">
                            <Row>
                                <Col md={12} xs={12} className='footer-help'>
                                    <a className='flex-just' href='affiliate'>
                                        <img src="assets/images/design/money-bag.png" className='img-h100'></img>
                                        <h3 className='margin0'>Be Affiliate</h3>
                                    </a>
                                </Col>
                                <Col md={12} xs={12} className='footer-help'>
                                    <a className='flex-just' href='aboutus'>
                                        <img src="assets/images/design/about.png" style={{ height: "70px", margin: "10px" }}></img>
                                        <h3 className='margin0'>About Us</h3>
                                    </a>
                                </Col>
                                <Col md={12} xs={12} className='footer-help'>
                                    <a className='flex-just' href='/support'>
                                        <img src="assets/images/design/help-logo-middle-footer.png" style={{ height: "80px", margin: "10px" }}></img>
                                        <h3 className='margin0'>Help Center</h3>
                                    </a>
                                </Col>
                            </Row>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="subfooter">
                <Box className="container">
                    <Box className="row">
                        <Box className="col-md-12">
                            <Box className="de-flex" style={{ display: "flex", alignItems: "center" }}>
                                <Box className="de-flex-col">
                                    <a href="/home">
                                        <img alt="" className="f-logo logo-50" src="assets/images/design/logo-nfts-magics-web.png" />
                                    </a>
                                    <h6>2022 Ith projects, Inc</h6>
                                </Box>
                                <Box className="de-flex-col">
                                    <h6><a href='assets/pdf/nftsmagics-privacy-policy.pdf' target="_blank" rel='noreferrer'>Privacy Policy</a></h6>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h6>Terms of Service</h6>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </footer>
    );
}
