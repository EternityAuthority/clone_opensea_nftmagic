import { Box } from "@mui/system";
import { Col, Row } from "reactstrap";
import React, { useState } from "react";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Ranking = () => {
  const [date, setdate] = useState('24');
  const [categories, setcategories] = useState('all');
  const [chain, setchain] = useState('allchains');

  const changecategories = (event) => {
    setcategories(event.target.value);
  };
  const changedate = (event) => {
    setdate(event.target.value);
  };
  const changechain = (event) => {
    setchain(event.target.value);
  };

  return (
    <Box className="no-bottom no-top" id="content">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12 paddingtop11 ranking" >
            <h2 className="top-nfts">Top NFTs</h2>
          </Box>
          <Col md={12}>
            <p className="top-open">The top NFTs on OpenSea, ranked by volume, floor price and other statistics.</p>
          </Col>
          <Row style={{ padding: "2% 15%" }}>
            <Col md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={date}
                  label="Date"
                  onChange={changedate}
                >
                  <MenuItem value={24}>Last 24 hours</MenuItem>
                  <MenuItem value={7}>Last 7 days</MenuItem>
                  <MenuItem value={30}>Last 30 days</MenuItem>
                  <MenuItem value={365}>All time</MenuItem>
                </Select>
              </FormControl>
            </Col>

            <Col md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categories}
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
            </Col>
            <Col md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Chain</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={chain}
                  label="Chain"
                  onChange={changechain}
                >
                  <MenuItem value="allchains"><InsertLinkIcon />&nbsp;&nbsp;All Chains</MenuItem>
                  <MenuItem value="eht"><img src="assets/images/icon/ethereum.png" style={{ height: "24px", borderRadius: "12px" }}></img>&nbsp;&nbsp;Ethereum</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Col md={12} style={{ padding: "100px 0px" }}>
            <table className="table de-table table-rank">
              <thead>
                <tr>
                  <th scope="col">Collection</th>
                  <th scope="col">Volume</th>
                  <th scope="col">24h %</th>
                  <th scope="col">7d %</th>
                  <th scope="col">Floor Price</th>
                  <th scope="col">Owners</th>
                  <th scope="col">Assets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-1.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    Abstraction</th>
                  <td>15,225.87</td>
                  <td className="d-plus">+87.54%</td>
                  <td className="d-plus">+309.49%</td>
                  <td>5.9</td>
                  <td>2.8k</td>
                  <td>58.5k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-2.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    Sketchify</th>
                  <td>14,304.78</td>
                  <td className="d-plus">+35.11%</td>
                  <td className="d-plus">+239.83%</td>
                  <td>2.9</td>
                  <td>2.3k</td>
                  <td>28.4k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-3.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    Cartoonism</th>
                  <td>13,705.58</td>
                  <td className="d-min">-33.56%</td>
                  <td className="d-plus">+307.97%</td>
                  <td>4.5</td>
                  <td>2.2k</td>
                  <td>48.8k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-4.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    Papercut</th>
                  <td>12,516.75</td>
                  <td className="d-plus">+23.45%</td>
                  <td className="d-plus">+171.25%</td>
                  <td>6.3</td>
                  <td>5.3k</td>
                  <td>54.2k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-5.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    Virtuland</th>
                  <td>11,586.26</td>
                  <td className="d-plus">+80.91%</td>
                  <td className="d-plus">+241.18%</td>
                  <td>2.2</td>
                  <td>1.8k</td>
                  <td>23.9k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-6.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    CoolThings</th>
                  <td>10,645.96</td>
                  <td className="d-plus">+51.99%</td>
                  <td className="d-min">-29.82%</td>
                  <td>6.6</td>
                  <td>1.8k</td>
                  <td>23.6k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-7.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    DigiPunks</th>
                  <td>9,219.13</td>
                  <td className="d-plus">+42.24%</td>
                  <td className="d-plus">+95.45%</td>
                  <td>1.2</td>
                  <td>3.8k</td>
                  <td>58.4k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-8.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    RockToonz</th>
                  <td>8,436.15</td>
                  <td className="d-plus">+61.31%</td>
                  <td className="d-plus">+347.19%</td>
                  <td>2.4</td>
                  <td>1.4k</td>
                  <td>63.3k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-9.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    BeeFriends</th>
                  <td>7,505.16</td>
                  <td className="d-plus">+64.46%</td>
                  <td className="d-plus">+240.94%</td>
                  <td>2.3</td>
                  <td>5.2k</td>
                  <td>70.3k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-10.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    Patternlicious</th>
                  <td>6,593.91</td>
                  <td className="d-min">-33.78%</td>
                  <td className="d-plus">+82.32%</td>
                  <td>4.5</td>
                  <td>6.5k</td>
                  <td>53.3k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-11.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    FlyingFox</th>
                  <td>5,605.97</td>
                  <td className="d-plus">+48.67%</td>
                  <td className="d-plus">+101.33%</td>
                  <td>4.6</td>
                  <td>5.1k</td>
                  <td>36.2k</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="coll_list_pp">
                      <img className="lazy" src="assets/images/author/author-12.jpg" alt="" />
                      <i className="fa fa-check"></i>
                    </div>
                    Autoglyphs</th>
                  <td>4,904.27</td>
                  <td className="d-plus">+86.15%</td>
                  <td className="d-plus">+391.49%</td>
                  <td>4.5</td>
                  <td>6.2k</td>
                  <td>21.1k</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Box>
      </Box>
    </Box>
  )
}
export default Ranking