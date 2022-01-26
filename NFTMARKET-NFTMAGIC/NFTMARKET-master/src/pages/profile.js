import React, { useState } from "react";
import { Box } from "@mui/system";
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Button, Tab } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
const Profile = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="no-bottom no-top" id="content">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12 paddingtop10 ranking" >
            <h2 className="top-nfts">Profile Settings</h2>
          </Box>
          <Box className="col-md-12" style={{ padding: "50px 0px" }}>
            <Box className="row">
              <Box className="col-lg-8 offset-lg-2">


                <Box>
                  <Box className="de_tab tab_simple">
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                          <Tab icon={<AccountCircleIcon />} value="1" />
                          <Tab icon={<CircleNotificationsIcon />} value="2" />
                          <Tab icon={<LocalOfferRoundedIcon />} value="3" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <Box className="row wow fadeIn">
                          <Box className="col-lg-8 mb-sm-20">
                            <Box className="field-set">
                              <h5>Username</h5>
                              <input type="text" name="username" id="username" className="form-control" placeholder="Enter username" />

                              <Box className="spacer-20"></Box>

                              <h5>Custom URL</h5>
                              <input type="text" name="custom_url" id="custom_url" className="form-control" placeholder="Enter your custom URL" />

                              <Box className="spacer-20"></Box>

                              <h5>Bio</h5>
                              <textarea name="bio" id="bio" className="form-control" placeholder="Tell the world who you are!" ></textarea>

                              <Box className="spacer-20"></Box>

                              <h5>Email Address*</h5>
                              <input type="text" name="email_address" id="email_address" className="form-control" placeholder="Enter email" />

                              <Box className="spacer-20"></Box>

                              <h5><i className="fa fa-link"></i> Your site</h5>
                              <input type="text" name="your_site" id="your_site" className="form-control" placeholder="Enter Website URL" />

                              <Box className="spacer-20"></Box>

                              <h5><i className="fa fa-twitter"></i> Twitter username</h5>
                              <input type="text" name="twitter_usernam" id="twitter_usernam" className="form-control" placeholder="Enter Twitter username" />

                              <Box className="spacer-20"></Box>

                              <h5><i className="fa fa-instagram"></i> Instagram username</h5>
                              <input type="text" name="instagram_username" id="instagram_username" className="form-control" placeholder="Enter Instagram username" />

                            </Box>
                          </Box>

                          <Box id="sidebar" className="col-lg-4">
                            <h5>Profile image <i className="fa fa-info-circle id-color-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Recommend 400 x 400. Max size: 50MB. Click the image to upload."></i></h5>

                            <img src="assets/images/author_single/author_thumbnail.jpg" id="click_profile_img" className="d-profile-img-edit img-fluid" alt="" />
                            <input type="file" id="upload_profile_img" />

                            <Box className="spacer-30"></Box>

                            <h5>Profile banner <i className="fa fa-info-circle id-color-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Recommend 1500 x 500. Max size: 50MB. Click the image to upload."></i></h5>
                            <img src="assets/images/author_single/author_banner.jpg" id="click_banner_img" className="d-banner-img-edit img-fluid" alt="" />
                            <input type="file" id="upload_banner_img" />

                          </Box>
                        </Box>
                      </TabPanel>
                      <TabPanel value="2">
                        <Box className="row wow fadeIn">
                          <Box className="col-md-6 mb-sm-20">
                            <Box className="switch-with-title s2">
                              <h5>Item Sold</h5>
                              <Box className="de-switch">
                                <input type="checkbox" id="notif-item-sold" className="checkbox" />
                                <label htmlFor="notif-item-sold"></label>
                              </Box>
                              <Box className="clearfix"></Box>
                              <p className="p-info">When someone purhased your item.</p>
                            </Box>

                            <Box className="spacer-20"></Box>

                            <Box className="switch-with-title s2">
                              <h5>Bid Activity</h5>
                              <Box className="de-switch">
                                <input type="checkbox" id="notif-bid-activity" className="checkbox" />
                                <label htmlFor="notif-bid-activity"></label>
                              </Box>
                              <Box className="clearfix"></Box>
                              <p className="p-info">When someone purhased your item.</p>
                            </Box>

                            <Box className="spacer-20"></Box>

                            <Box className="switch-with-title s2">
                              <h5>Price Change</h5>
                              <Box className="de-switch">
                                <input type="checkbox" id="notif-price-change" className="checkbox" />
                                <label htmlFor="notif-price-change"></label>
                              </Box>
                              <Box className="clearfix"></Box>
                              <p className="p-info">When an item you made an offer on changes in price.</p>
                            </Box>

                          </Box>

                          <Box className="col-md-6">
                            <Box className="switch-with-title s2">
                              <h5>Auction Expiration</h5>
                              <Box className="de-switch">
                                <input type="checkbox" id="notif-auction-expiration" className="checkbox" />
                                <label htmlFor="notif-auction-expiration"></label>
                              </Box>
                              <Box className="clearfix"></Box>
                              <p className="p-info">When an auction you created ends.</p>
                            </Box>

                            <Box className="spacer-20"></Box>

                            <Box className="switch-with-title s2">
                              <h5>Outbid</h5>
                              <Box className="de-switch">
                                <input type="checkbox" id="notif-outbid" className="checkbox" />
                                <label htmlFor="notif-outbid"></label>
                              </Box>
                              <Box className="clearfix"></Box>
                              <p className="p-info">When an offer you placed is exceeded by another user.</p>
                            </Box>

                            <Box className="spacer-20"></Box>

                            <Box className="switch-with-title s2">
                              <h5>Successful Purchase</h5>
                              <Box className="de-switch">
                                <input type="checkbox" id="notif-successful-purchase" className="checkbox" />
                                <label htmlFor="notif-successful-purchase"></label>
                              </Box>
                              <Box className="clearfix"></Box>
                              <p className="p-info">When you successfully buy an item.</p>
                            </Box>

                          </Box>
                        </Box>
                      </TabPanel>
                      <TabPanel value="3">
                        <Box className="row wow fadeIn">
                          <Box className="col-md-6 mb-sm-30">
                            <h5>Language</h5>
                            <p className="p-info">Select your prefered language.</p>
                            <Box id="select_lang" className="dropdown fullwidth">
                              <a href="#" className="btn-selector">English</a>
                              <ul>
                                <li className="active"><span>English</span></li>
                                <li><span>France</span></li>
                                <li><span>German</span></li>
                                <li><span>Japan</span></li>
                                <li><span>Italy</span></li>
                              </ul>
                            </Box>
                          </Box>

                          <Box className="col-md-6">
                            <h5>Scheme</h5>
                            <p className="p-info">Customize how Gigaland looks for you.</p>
                            <Box id="select_scheme" className="dropdown fullwidth">
                              <a href="#" className="btn-selector">Default scheme</a>
                              <ul>
                                <li className="active"><span>Default scheme</span></li>
                                <li><span>Light scheme</span></li>
                                <li><span>Dark scheme</span></li>
                                <li><span>Grey scheme</span></li>
                                <li><span>Retro scheme</span></li>
                              </ul>
                            </Box>
                          </Box>
                        </Box>
                      </TabPanel>
                    </TabContext>
                  </Box>
                  <Box className="spacer-30"></Box>
                  <Button variant="contained">Update Profile</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Profile