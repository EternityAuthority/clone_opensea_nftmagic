import React, { useState } from "react"
import Box from '@mui/material/Box';
import { Col, Row } from "reactstrap";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled, useTheme, alpha } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography, FormControl, InputLabel, Select, MenuItem, ToggleButtonGroup, ToggleButton } from "@mui/material";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '30vw',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '30vw',
    [theme.breakpoints.up('md')]: {
      // width: '20ch',
    },
  },
}));

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const data = [
  { id: "1", src: "assets/template/11.png", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
  { id: "1", src: "assets/template/12.jpg", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
  { id: "1", src: "assets/template/13.jpg", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
  { id: "1", src: "assets/template/14.png", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
  { id: "1", src: "assets/template/15.jpg", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
  { id: "1", src: "assets/template/16.png", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
  { id: "1", src: "assets/template/17.jpg", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
  { id: "1", src: "assets/template/18.png", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
  { id: "1", src: "assets/template/19.jpg", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
  { id: "1", src: "assets/template/20.png", img: "assets/images/author/author-1.jpg", title: "Abstraction" },
]

const Collection = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [age, setAge] = useState('10');
  const [alignment, setAlignment] = useState('left');
  const [expanded, setexpanded] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Box id="wrapper" >
      <Box className="no-bottom no-top" id="content">
        <Box id="top"></Box>
        <Box id="profile_banner" style={{ background: "url(assets/template/1.jpg)" }}>
          <Typography className="explore-header">All NFTS</Typography>
        </Box>
        <Box aria-label="section" className="d_coll">
          <Box className="container" style={{ minWidth: "100vw" }}>
            <Box className="row">
              <Box className="col-md-12" style={{ padding: "0px", margin: "0px" }} >
                <Divider />
                <Box sx={{ display: 'flex', position: "relative" }}>
                  <AppBar open={open} className="appbar">
                    <Toolbar>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <Drawer
                    sx={{
                      width: drawerWidth,
                      flexShrink: 0,
                      '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                      },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    style={{ position: "relative" }}
                    className="appbar"
                  >
                    <DrawerHeader className="drawerHeader">
                      <Typography style={{ position: "absolute", left: "15px" }}><FilterListIcon />&nbsp;&nbsp;Filter</Typography>
                      <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                      </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <Box>
                      <Accordion expanded={expanded}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon onClick={() => setexpanded(expanded ? false : true)} />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Status</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className="activity-filter">
                            <li className="filter_by_sales"><i className="fa fa-shopping-basket"></i>Sales</li>
                            <li className="filter_by_likes"><i className="fa fa-heart"></i>Likes</li>
                            <li className="filter_by_offers"><i className="fa fa-gavel"></i>Offers</li>
                            <li className="filter_by_followings"><i className="fa fa-check"></i>Followings</li>
                          </ul>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography>Price</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3a-content"
                          id="panel3a-header"
                        >
                          <Typography>Chains</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </Drawer>
                  <Main open={open}>
                    <Row style={{ width: "100%", alignItems: "center", marginBottom: "20px" }}>
                      <Col md={3} className="header-col">
                        <Search className='draw-header'>
                          <SearchIconWrapper>
                            <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                            placeholder="Search Collections ..."
                            inputProps={{ 'aria-label': 'search' }}
                          />
                        </Search>
                      </Col>
                      <Col md={3} className="header-col">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Items</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Single items</MenuItem>
                            <MenuItem value={20}>All items</MenuItem>
                            <MenuItem value={30}>Bundles</MenuItem>
                          </Select>
                        </FormControl>
                      </Col>
                      <Col md={3} className="header-col">
                        <FormControl style={{ margin: "0px 20px" }} fullWidth>
                          <InputLabel id="sort">Sort</InputLabel>
                          <Select
                            labelId="sort"
                            id="sort"
                            // value={age}
                            label="Sort"
                            value="sold"
                          // onChange={handleChange}
                          >
                            <MenuItem value="sold">Recently Sold</MenuItem>
                            <MenuItem value="oldest">Oldest</MenuItem>
                            <MenuItem value="lastest">Lastest</MenuItem>
                          </Select>
                        </FormControl>
                      </Col>
                      <Col md={3} className="header-col" style={{ justifyContent: "flex-end" }}>
                        <ToggleButtonGroup
                          orientation="horizontal"
                          value={alignment}
                          exclusive
                          onChange={handleAlignment}
                          aria-label="text alignment"
                        >
                          <ToggleButton value="left" aria-label="left aligned">
                            <ViewListIcon />
                          </ToggleButton>
                          <ToggleButton value="center" aria-label="centered">
                            <ViewModuleIcon />
                          </ToggleButton>
                          <ToggleButton value="right" aria-label="right aligned">
                            <ViewQuiltIcon />
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Col>
                    </Row>
                    <Divider />
                    <Row className="tool-box">
                      {
                        data ? data.map((item, key) => {
                          return (
                            <Box className="d-item col-lg-2 col-md-12 col-sm-12 col-xs-12" key={key}>
                              <Box className="nft__item">
                                <Box className="nft__item_wrap">
                                  <Box className="nft__item_extra">
                                    <Box className="nft__item_buttons">
                                      <button >Buy Now</button>
                                    </Box>
                                  </Box>
                                  <a href="/details">
                                    {/* <Box id="rotatecard" className="shadow">
                                      <Box className="front face">
                                        <img src={item.src} className="rotateimg" />
                                      </Box>
                                      <Box className="back face center">
                                        <img src={item.src} className="rotateimg" />
                                      </Box>
                                    </Box> */}
                                    <img src={item.src} className="lazy nft__item_preview" alt="" />
                                  </a>
                                </Box>
                                <Box className="nft__item_info">
                                  <a href="/details">
                                    <h4>Pinky Ocean</h4>
                                  </a>
                                  <Box className="nft__item_price">
                                    0.08 BNB<span>1/20</span>
                                  </Box>
                                  <Box className="nft__item_action">
                                    <a href="#">Buy Now</a>
                                  </Box>
                                  <Box className="nft__item_like">
                                    <i className="fa fa-heart"></i><span>50</span>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          )
                        }) : ""
                      }
                      <Box className="d-item col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <Box className="nft__item">
                          <Box className="nft__item_wrap">
                            <Box className="nft__item_extra">
                              <Box className="nft__item_buttons">
                                <button >Buy Now</button>
                              </Box>
                            </Box>
                            <a href="/details">
                              <Box id="rotatecard" className="shadow">
                                <Box className="front face">
                                  <img src="assets/template/9.jpg" className="rotateimg" />
                                </Box>
                                <Box className="back face center">
                                  <img src="assets/template/13.jpg" className="rotateimg" />
                                </Box>
                              </Box>
                            </a>
                          </Box>
                          <Box className="nft__item_info">
                            <a href="/details">
                              <h4>Pinky Ocean</h4>
                            </a>
                            <Box className="nft__item_price">
                              0.08 BNB<span>1/20</span>
                            </Box>
                            <Box className="nft__item_action">
                              <a href="#">Buy Now</a>
                            </Box>
                            <Box className="nft__item_like">
                              <i className="fa fa-heart"></i><span>50</span>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Row>
                  </Main>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
export default Collection