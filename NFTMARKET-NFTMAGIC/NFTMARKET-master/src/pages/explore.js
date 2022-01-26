import React from "react"
import Box from '@mui/material/Box';
import { Col, Row } from "reactstrap";

const Explore = () => {

  const data = [
    { id: "1", src: "https://lh3.googleusercontent.com/rF9tBJTKW2sdoP0DyUYC5BNEe27kqucHONDGksePtRT4PqeeKh_A398W9Q9M1HXrIo3XK4315EtZ9EFquL1GXs96VveaOXF9-GggBPQ=h200", img: "assets/images/author/author-1.jpg", title: "Abstraction", description: "Sporting brands look after some of the most valuable intellectual property on the planet, and companies like Sorare are selling it in the form of digital trading cards right here on our" },
    { id: "1", src: "https://storage.googleapis.com/opensea-static/featured-images/stryking-featured.png", img: "assets/images/author/author-1.jpg", title: "Abstraction", description: "Sporting brands look after some of the most valuable intellectual property on the planet, and companies like Sorare are selling it in the form of digital trading cards right here on our" },
    { id: "1", src: "https://lh3.googleusercontent.com/_AGh4KyOSQhYD7ui5EoSZTz8nKs9GZT4srFHIwvxaLXvmy5arc6nYGEyVYqjM0voBYyMdjAbrH5KOEGqHYc-_dMOM6U8Tr3boe-lLQ=h200", img: "assets/images/author/author-1.jpg", title: "Abstraction", description: "Sporting brands look after some of the most valuable intellectual property on the planet, and companies like Sorare are selling it in the form of digital trading cards right here on our" },
    { id: "1", src: "https://lh3.googleusercontent.com/9ytXHWFra_26YjzafdoK2g3VNCqL1e2aovWCDulb7NxkGDc22s9teS0AnSJsXWKtPGBtLaZXa-LWKwIYLK61sJ4a8e4A0OhExxd3tg=h200", img: "assets/images/author/author-1.jpg", title: "Abstraction", description: "Sporting brands look after some of the most valuable intellectual property on the planet, and companies like Sorare are selling it in the form of digital trading cards right here on our" },
    { id: "1", src: "https://lh3.googleusercontent.com/GkfeK6hFSVLcsZpkGJRkIZCaciC_XnxuaffbImtRX1jgTwCOPDWTNyjqOArsrUbuEWioc2rL4720rui_rmRWXehmBKnaYHqskdfsZQ=h200", img: "assets/images/author/author-1.jpg", title: "Abstraction", description: "Sporting brands look after some of the most valuable intellectual property on the planet, and companies like Sorare are selling it in the form of digital trading cards right here on our" },
    { id: "1", src: "https://lh3.googleusercontent.com/GkfeK6hFSVLcsZpkGJRkIZCaciC_XnxuaffbImtRX1jgTwCOPDWTNyjqOArsrUbuEWioc2rL4720rui_rmRWXehmBKnaYHqskdfsZQ=h200", img: "assets/images/author/author-1.jpg", title: "Abstraction", description: "Sporting brands look after some of the most valuable intellectual property on the planet, and companies like Sorare are selling it in the form of digital trading cards right here on our" },
  ]
  return (
    <Box id="wrapper" >
      <Box className="no-bottom no-top" id="content">
        <Box id="top"></Box>
        <Box id="profile_banner" aria-label="section" className="text-light" style={{ background: "url(assets/images/bar.png)" }}>
        </Box>
        <Box aria-label="section" className="d_coll no-top">
          <Box className="container" style={{ maxWidth: "100vw" }}>
            <Box className="row">
              <Box className="col-md-12 explore-header-text">
                <h2>Explore Sports</h2>
              </Box>
              <Box className="col-md-12">
                <Box className="de_tab tab_simple">
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ maxWidth: "800px", textAlign: "center", color: "rgb(112, 122, 131)" }}>Sporting brands look after some of the most valuable intellectual property on the planet, and companies like Sorare are selling it in the form of digital trading cards right here on our marketplace. We&apos;ve also got Formula 1 NFTs from Animoca Brands and anticipate a surge of interest from global sports teams looking to tokenize and distribute their collectibles over the coming years. Browse, buy, and sell non-fungible tokens from the worlds of golf, football, racing, and more.</p>
                  </Box>
                  <hr />
                  <Box lassName="de_tab_content">
                    <Box className="container" style={{ maxWidth: "100vw" }}>
                      <Box className="row">
                        <Box className="text-center">
                          <h3>Trending collections in Sports</h3>
                          <Box className="small-border bg-color-2"></Box>
                        </Box>
                        <Box className="wow fadeIn" style={{ paddingLeft: "20px" }}>
                          <Row>
                            {
                              data ? data.map((item, key) => {
                                return (
                                  <Col md={3} key={key} style={{ paddingBottom: '100px' }}>
                                    <Box className="nft_coll" style={{ padding: "10px" }}>
                                      <Box className="nft_wrap">
                                        <a href="/collection"><img src={item.src} className="lazy img-fluid" style={{ height: "222px", width: "100%" }} alt="" /></a>
                                      </Box>
                                      <Box className="nft_coll_pp">
                                        <a href="/collection"><img className="lazy pp-coll" src={item.img} alt="" /></a>
                                        <i className="fa fa-check"></i>
                                      </Box>
                                      <Box className="nft_coll_info">
                                        <a href="/collection"><h4>{item.title}</h4></a>
                                        <span>{item.description}</span>
                                      </Box>
                                    </Box>
                                  </Col>
                                )
                              }) : ""
                            }
                          </Row>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
export default Explore