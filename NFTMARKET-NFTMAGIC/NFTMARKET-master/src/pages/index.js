import React, { useState } from "react"
import Box from '@mui/material/Box';
import { Col, Row } from "reactstrap";
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography, Badge, Select, FormControl, MenuItem } from "@mui/material";
import { useHistory } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const TopCollections = [
  { id: 1, img: "assets/template/1.jpg", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 2, img: "assets/template/2.png", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 3, img: "assets/template/3.jpg", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 4, img: "assets/template/4.jpg", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 5, img: "assets/template/5.jpg", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 6, img: "assets/template/6.png", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 7, img: "assets/template/7.jpg", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 8, img: "assets/template/8.png", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 9, img: "assets/template/9.jpg", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 10, img: "assets/template/10.jpg", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 11, img: "assets/template/11.png", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
  { id: 12, img: "assets/template/12.jpg", name: "Monica Lucas", price: "3.2ETH", progress: " +41.09%" },
]
const Drops = [
  { id: 1, img: "assets/template/5.jpg", title: "Lizard", details: " Lizards are a widespread group of squamate reptiles" },
  { id: 2, img: "assets/template/23.jpg", title: "Lizard", details: " Lizards are a widespread group of squamate reptiles" },
  { id: 3, img: "assets/template/25.jpg", title: "Lizard", details: " Lizards are a widespread group of squamate reptiles" },
  { id: 4, img: "assets/template/40.jpg", title: "Lizard", details: " Lizards are a widespread group of squamate reptiles" },
  { id: 5, img: "assets/template/55.jpg", title: "Lizard", details: " Lizards are a widespread group of squamate reptiles" },
]
// const TopNFTs = [
//   { id: 1, img: "assets/template/9.jpg", title: "Gradient Boxes", price: "2.59 ETH" },
//   { id: 2, img: "assets/template/9.jpg", title: "Gradient Boxes", price: "2.59 ETH" },
//   { id: 3, img: "assets/template/9.jpg", title: "Gradient Boxes", price: "2.59 ETH" },
// ]
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Home = () => {
  const history = useHistory();
  const [date, setdate] = useState('24');
  const [categories, setcategories] = useState('all');

  const gocreate = () => {
    history.push('/createoption')
  }
  const goexplore = () => {
    history.push('/collection')
  }
  const gobuy = () => {
    history.push('/details')
  }
  const goranking = () => {
    history.push('/ranking')
  }
  const changedate = (event) => {
    setdate(event.target.value);
  };
  const changecategories = (event) => {
    setcategories(event.target.value);
  };
  return (
    <div id="wrapper" >
      <Box className="no-bottom no-top" id="content">
        <Box id="top"></Box>
        <Box id="section-hero" aria-label="section" className="no-top no-bottom vh-100">
          <Box className="no-top no-bottom vh-100" id="header-background" style={{ background: "url(assets/template/9.jpg) center", backgroundSize: "cover" }}>
          </Box>
          <Box className="v-center">
            <Box className="container">
              <Box className="row " style={{ paddingTop: "200px", alignItems: "start" }}>
                <Box className="col-md-6">
                  <h1 className="wow fadeInUp">Create, sell or give away magical Nfts</h1>
                  <p className="wow fadeInUp lead" >
                    7% of each NFT sale is shared among all active buyers in the last 60 days. We also allow you to set up to 10% royalty on your NFTS for life.<br /> And we only charge 1% of each transaction!<br /> And If you use AYRA or ITHD, FEE will be 50% off!</p>
                  <Box className="spacer-10"></Box>
                  <Button variant="contained" className="wow fadeInUp" onClick={() => goexplore()} >Explore</Button>
                  <Button variant="outlined" className="wow fadeInUp" style={{ marginLeft: "30px" }} onClick={() => gocreate()}>Create</Button>
                  <Box className="mb-sm-30"></Box>
                </Box>

                <Box className="col-md-6 wow fadeInDown" style={{ display: "flex", justifyContent: "center" }} >
                  <Card className="card" style={{ padding: "5%", maxWidth: "100%", width: "100%" }} onClick={() => gobuy()}>
                    <CardActionArea>

                      <CardMedia style={{ height: "400px" }}>
                        <Box id="rotatecard" className="shadow">
                          <Box className="front face">
                            <img src="assets/template/9.jpg" className="rotateimg" />
                          </Box>
                          <Box className="back face center">
                            <img src="assets/template/13.jpg" className="rotateimg" />
                          </Box>
                        </Box>
                      </CardMedia>

                      <CardContent>

                        <Box className="avatar">
                          <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={
                              <SmallAvatar alt="Remy Sharp" src="assets/template/9.jpg" />
                            }
                          >
                            <Avatar alt="Travis Howard" src="assets/template/9.jpg" />
                          </Badge>
                          <Typography className="avatar-name">&nbsp;&nbsp;TopNFT</Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>

        <Box id="section-items" >
          <Box className="container">
            <Box className="row">
              <Box className="col-lg-12">
                <Box className="text-center">
                  <h2>Bewitching NFTS</h2>
                  <Box className="small-border bg-color-2"></Box>
                </Box>
              </Box>
              <Box id="items-carousel" className="owl-carousel wow fadeIn">
                {
                  Drops ? Drops.map((item, key) => {
                    return (
                      <Box key={key}>
                        <Card className="card">
                          <CardMedia component="img" alt="green iguana" height="400" image={item.img} />
                          <CardContent style={{ textAlign: "center" }}>
                            <Typography gutterBottom variant="h5" component="Box">
                              {item.title}
                            </Typography>
                            <Typography variant="body2" style={{ textAlign: "center" }}>
                              {item.details}
                            </Typography>
                          </CardContent>
                          <CardActions style={{ justifyContent: "center", display: "flex" }}>
                            <Button size="small">Live</Button>
                          </CardActions>
                        </Card>
                      </Box>
                    )
                  }) : ""
                }
              </Box>
            </Box>
          </Box>

          <Box id="section-popular" className="pb-5 paddingtop10">
            <Box className="container">
              <Box className="row">
                <Box className="col-lg-12">
                  <Box className="text-center">
                    <h2>Top NFTS</h2>
                    <FormControl >
                      {/* <InputLabel id="demo-simple-select-label">Date</InputLabel> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={date}
                        label="Date"
                        className="border-select"
                        onChange={changedate}
                      >
                        <MenuItem value={24}>Last 24 hours</MenuItem>
                        <MenuItem value={7}>Last 7 days</MenuItem>
                        <MenuItem value={30}>Last 30 days</MenuItem>
                        <MenuItem value={365}>All Time</MenuItem>
                      </Select>
                    </FormControl>
                    <Box className="small-border bg-color-2"></Box>
                  </Box>
                </Box>
                <Box className="col-md-12 wow fadeIn">
                  <Row>
                    {
                      TopCollections ? TopCollections.map((item, key) => {
                        return (
                          <Col md={3} className="top-collection" key={key}>
                            <Box className="collection-Box">
                              <h3 className="textalign">{item.id}&nbsp;</h3>
                              <Box className="author_list_pp">
                                <a href="/">
                                  <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                  >
                                    <Avatar alt="Remy Sharp" src={item.img} />
                                  </StyledBadge>
                                  {/* <img className="lazy pp-author" src={item.img} alt="" /> */}
                                </a>
                              </Box>
                              <Box className="author_list_info">
                                <a href="/">{item.name}</a>
                                <span>{item.price}</span>
                              </Box>
                            </Box>
                            <h5 className="textalign">
                              {item.progress}
                            </h5>
                          </Col>
                        )
                      }) : ""
                    }
                    <Col md={12} className="go-button">
                      <Button variant="outlined" onClick={() => goranking()} endIcon={<SendIcon />}>Go Ranking</Button>
                    </Col>
                  </Row>
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>

        <Box id="trending" className="paddingtop10">
          <Box className="container">
            <Box className="row">
              <Box className="text-center">
                <h2>Trending in</h2>
                <FormControl>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categories}
                    className="border-select"
                    label="Categories"
                    onChange={changecategories}
                  >
                    <MenuItem value="all"><img src='assets/images/design/all-nfts-icon.png' />All NFTS</MenuItem>
                    <MenuItem value="new"><img src='assets/images/design/new-icon.png' />New</MenuItem>
                    <MenuItem value="bithday"><img src='assets/images/design/birthday-logo.png' />Birthday Greetings</MenuItem>
                    <MenuItem value="love"><img src='assets/images/design/love-icon.png'></img>Dedication of Love</MenuItem>
                    <MenuItem value="domain"><img src='assets/images/design/familyicon.png'></img>Family or Friendship</MenuItem>
                    <MenuItem value="virtual"><img src='assets/images/design/wedding-logo.png'></img>Wedding Invitations</MenuItem>
                    <MenuItem value="trending"><img src='assets/images/design/ring-logo.png'></img>Anniversary Gift</MenuItem>
                    <MenuItem value="sports"><img src='assets/images/design/religious-logo.png'></img>Religious Congratulations</MenuItem>
                    <MenuItem value="utility"><img src='assets/images/design/personal-development.png'></img>Personal Development</MenuItem>
                    <MenuItem value="utility"><img src='assets/images/design/studies-job-success.png'></img>Studies or job Success</MenuItem>
                    <MenuItem value="utility"><img src='assets/images/design/baby-logo.greeting.be-mum-or-dad.png'></img>Happy to give birth baby</MenuItem>
                    <MenuItem value="utility"><img src='assets/images/design/divorce-logo.png'></img>Divorces</MenuItem>
                    <MenuItem value="utility"><img src='assets/images/design/laughing-logo.png'></img>Laughing and Memes</MenuItem>
                    <MenuItem value="utility"><img src='assets/images/design/poetry-logo.png'></img>Poetry</MenuItem>
                    <MenuItem value="utility"><img src='assets/images/design/party-invitation.png'></img>Party Invitations</MenuItem>
                    <MenuItem value="utility"><img src='assets/images/design/free-art-to-seel-or-reward.png'></img>Free Art</MenuItem>
                  </Select>
                </FormControl>
                <Box className="small-border bg-color-2"></Box>
              </Box>
              <Box id="collection-carousel-5-cols" className="owl-carousel wow fadeIn">
                {
                  TopCollections ? TopCollections.map((item, key) => {
                    return (
                      <Box className="nft_coll" key={key}>
                        <Box className="nft_wrap">
                          <a href="/collection"><img src={item.img} style={{ height: "150px" }} className="lazy img-fluid" alt="" /></a>
                        </Box>
                        <Box className="nft_coll_pp">
                          <a href="/collection"><img className="lazy pp-coll" style={{ height: "50px" }} src={item.img} alt="" /></a>
                          <i className="fa fa-check"></i>
                        </Box>
                        <Box className="nft_coll_info">
                          <a href="/collection"><h4>Abstraction</h4></a>
                          <span>ERC-192</span>
                        </Box>
                      </Box>

                    )
                  }) : ""
                }
              </Box>
            </Box>
          </Box>
        </Box>

        <Box id="section-intro" className="paddingtop10">
          <Box className="container">
            <Box className="row">
              <Box className="col-lg-4 col-md-6 mb-sm-30">
                <Box className="feature-box f-boxed style-3">
                  <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i>
                  <Box className="text">
                    <h4 className="wow fadeInUp">Set up your wallet</h4>
                    <p className="wow fadeInUp" data-wow-delay=".25s">Add the Binance Smart Chain network to the compatible wallet you are going to use. Add ITHD and Ayra Bsc as custom tokens. Load your wallet with BNB.</p>
                  </Box>
                  <i className="wm icon_wallet"></i>
                </Box>
              </Box>
              <Box className="col-lg-4 col-md-6 mb-sm-30">
                <Box className="feature-box f-boxed style-3">
                  <i className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt"></i>&nbsp;
                  <i className="wow fadeInUp bg-color-2 i-boxed icon_pencil-edit"></i>
                  <Box className="text">
                    <h4 className="wow fadeInUp">Add or design your NFT&apos;s</h4>
                    <p className="wow fadeInUp" data-wow-delay=".25s">
                      Tap Create in the menu. Choose to upload your own photo or make your own design online with our editor. You can use our templates. Express your magic!</p>
                  </Box>
                  <i className="wm icon_cloud-upload_alt"></i>
                </Box>
              </Box>
              <Box className="col-lg-4 col-md-6 mb-sm-30">
                <Box className="feature-box f-boxed style-3">
                  <i className="wow fadeInUp bg-color-2 i-boxed icon_tags_alt"></i>&nbsp;
                  <i className="wow fadeInUp bg-color-2 i-boxed icon_gift_alt"></i>
                  <Box className="text">
                    <h4 className="wow fadeInUp">Sell or Give away your NFT&apos;s</h4>
                    <p className="wow fadeInUp" data-wow-delay=".25s">You can sell at a fixed price or auction. But you can also give NFTS to whoever you want and when they sell those NFTS earn commissions.</p>
                  </Box>
                  <i className="wm icon_tags_alt"></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box id="section-category" className="paddingtop10" style={{ paddingBottom: "100px" }}>
          <Box className="container">
            <Box className="row">
              <Box className="col-lg-12">
                <Box className="text-center">
                  <h2>Browse by category</h2>
                  <Box className="small-border bg-color-2"></Box>
                </Box>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".1s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/birthday-logo.png'></img>
                  <span>Birthday Greetings</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/love-icon.png'></img>
                  <span>Dedication of Love</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".3s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/familyicon.png'></img>
                  <span>Family or Friendship</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/wedding-logo.png'></img>
                  <span>Wedding Invitations</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".5s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/ring-logo.png'></img>
                  <span>Anniversary Gift</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/religious-logo.png'></img>
                  <span>Religious Congratulations</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay=".7s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/personal-development.png'></img>
                  <span>Personal Development</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay=".8s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/studies-job-success.png'></img>
                  <span>Studies or job Success</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay=".9s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/baby-logo.greeting.be-mum-or-dad.png'></img>
                  <span>Happy to give birth baby</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay="1s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/divorce-logo.png'></img>
                  <span>Divorces</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay="1.1s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/laughing-logo.png'></img>
                  <span>Laughing and Memes</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay="1.2s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/party-invitation.png'></img>
                  <span>Party Invitations</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay="1.3s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/all-nfts-icon.png'></img>
                  <span>All NFTS</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay="1.4s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/new-icon.png'></img>
                  <span>New</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay="1.45s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/fireworks-logo.png'></img>
                  <span>New Year</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay="1.5s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/poetry-logo.png'></img>
                  <span>Poetry</span>
                </a>
              </Box>
              <Box className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight padding10" data-wow-delay="1.6s">
                <a href='/collection' className="icon-box style-2 rounded">
                  <img src='assets/images/design/party-invitation.png'></img>
                  <span>Party Invitations</span>
                </a>
              </Box>

            </Box>
          </Box>
        </Box>

        <Box id="meetus" className="paddingtop10">
          <Box className="container">
            <Box className="row">
              <Box className="col-lg-12">
                <Box className="text-center">
                  <h2>Meet US</h2>
                  <Box className="small-border bg-color-2"></Box>
                </Box>
              </Box>
              <Box className="col-md-12 col-sm-12 col-12 wow fadeInUp">
                <Row>
                  <Col md={6} xs={6}>
                    <Box className="meetus-telegram"></Box>
                    <a href="https://t.me/ayratoken" target="_blank" className="meetus-a" rel="noreferrer">
                      <img src="assets/images/design/telegram-logo.png" className="meetus-img"></img>
                    </a>
                  </Col>
                  <a href="https://twitter.com/ITHPROJECTS" target="_blank" className="meetus-a" rel="noreferrer">
                    <img src="assets/images/design/twitter-logo.png" className="meetus-twitter"></img>
                  </a>
                  <Col md={6} xs={6} className="instagram">
                    <Box className="meetus-instagram"></Box>
                    <a href=" https://www.instagram.com/_i_t_h_projects" className="meetus-a right" target="_blank" rel="noreferrer">
                      <img src="assets/images/design/instagram-logo.png" className="meetus-img"></img>
                    </a>
                  </Col>
                </Row>
                <Row className="padding-meetus" style={{ position: "relative" }}>
                  <Col md={6} xs={6}>
                    <Box className="meetus-ayra"></Box>
                    <a href="http://www.ayraswap.com" target="_blank" className="meetus-a" rel="noreferrer" >
                      <img src="assets/images/design/ayra-de-oro.png" className="meetus-img"></img><br /><h3 style={{ left: "8%", position: 'relative' }}>AYRASWAP</h3>
                    </a>
                  </Col>
                  <a href="http://www.ayramask.com" target="_blank" className="meetus-a" rel="noreferrer">
                    <Col>
                      <img src="assets/images/design/ayramask-logopng.png" className="meetus-ayramask"></img><br /><h3 style={{ position: "absolute", left: "45%" }} >AYRAMASK</h3>
                    </Col>
                  </a>
                  <Col md={6} xs={6} className="instagram">
                    <Box className="meetus-ayra-ecosystem"></Box>
                    <a href="http://www.ayraecosystem.com" target="_blank" className="meetus-a right" rel="noreferrer">
                      <img src="assets/images/design/ayra-ecosystem-logo.png" className="meetus-img"></img>
                      <br /><h3 style={{ position: "absolute", right: "7%", bottom: "9%" }}>A.ECOSYSTEM</h3>
                    </a>
                  </Col>
                </Row>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <a href="#" id="back-to-top"></a>
    </div >
  )
}
export default Home