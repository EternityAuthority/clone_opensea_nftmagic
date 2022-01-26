import React, { useState } from "react";
import { Box } from "@mui/system";
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TimelineIcon from '@mui/icons-material/Timeline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ViewListIcon from '@mui/icons-material/ViewList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DescriptionIcon from '@mui/icons-material/Description';
import { styled, alpha } from '@mui/material/styles';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Accordion, AccordionDetails, AccordionSummary, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

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

const Details = () => {
  const [expanded, setexpanded] = useState(true);
  const [age, setAge] = useState('10');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box id="wrapper" >
      <Box className="no-top" id="content">
        <Box aria-label="section">
          <Box className="container paddingtop11">
            <Box className="row">

              <Box className="col-md-5 text-center">
                <img src="assets/template/1.jpg" className="img-fluid img-rounded mb-sm-30" alt="" />
                <Accordion expanded={true}>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ display: "flex", alignItems: "center" }}><DescriptionIcon />&nbsp;&nbsp;&nbsp;Description</Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails style={{ padding: "30px" }}>
                    <Typography>This NFT visualizes Auston&apos;s journey thus far, with each ring on the puck representing a different stage of Auston&apos;s story. The outer circle features palm fronds, celebrating his birth in California. The second circle features the desert sun in reference to his childhood in Arizona. The third circle features stars to honor his representation of the United States and the inner circle features snowflakes as a tribute to Toronto.
                      This NFT is a unique piece of memorabilia and is limited to just 34 editions.</Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ display: "flex", alignItems: "center" }}><DescriptionIcon />&nbsp;&nbsp;&nbsp;Details</Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails style={{ padding: "30px" }}>
                  </AccordionDetails>
                </Accordion>
              </Box>

              <Box className="col-md-7">
                <Box className="item_info">
                  <h2>AnimeSailorClub #304</h2>
                  <Box className="item_info_counts">
                    <Box className="item_info_type"><i className="fa fa-image"></i>Art</Box>
                    <Box className="item_info_views"><i className="fa fa-eye"></i>250</Box>
                    <Box className="item_info_like"><i className="fa fa-heart"></i>18</Box>
                  </Box>

                  <Accordion expanded={true}>
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ display: "flex", alignItems: "center" }}><ScheduleIcon />&nbsp;&nbsp;&nbsp;Sale ends April 22, 2022 at 2:42am KST </Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails style={{ padding: "30px" }}>
                      <Box className="de_tab tab_simple">
                        <Box className="spacer-10"></Box>
                        <h4>Current Price</h4>
                        <Box className="nft-item-price"><img src="assets/images/misc/ethereum.svg" alt="" /><span>0.059</span>($253.67)</Box>
                        <a href="/wallet" className="btn-main btn-lg" >
                          <AccountBalanceWalletIcon style={{ color: "white" }} />&nbsp;Buy Now
                        </a>
                        &nbsp;
                        <a href="/wallet" className="btn-main btn-lg btn-light">
                          <LocalOfferIcon />&nbsp;Make Offer
                        </a>
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion expanded={expanded}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon onClick={() => setexpanded(expanded ? false : true)} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ display: "flex", alignItems: "center" }}><TimelineIcon />&nbsp;&nbsp;&nbsp;Price History</Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails style={{ padding: "30px" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Date</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>All Time</MenuItem>
                          <MenuItem value={20}>Last 7 days</MenuItem>
                          <MenuItem value={30}>Last One Month</MenuItem>
                          <MenuItem value={30}>Last One Month</MenuItem>
                        </Select>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ display: "flex", alignItems: "center" }}><ViewListIcon />&nbsp;&nbsp;&nbsp;Listing</Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails style={{ padding: "30px" }}>
                      No yet
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ display: "flex", alignItems: "center" }}><LocalOfferIcon />&nbsp;&nbsp;&nbsp;Offers</Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails style={{ padding: "30px" }}>
                      No yet
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>

              <Divider style={{ margin: "20px 0px" }} />

              <Box className="col-md-12">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ display: "flex", alignItems: "center" }}><DescriptionIcon />&nbsp;&nbsp;&nbsp;Item Activity</Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails style={{ padding: "30px" }}>
                    <Search className='header-search'>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search Collections ..."
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </Search>
                    No yet
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Details