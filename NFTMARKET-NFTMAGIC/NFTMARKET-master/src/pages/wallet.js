import { Box } from "@mui/system";
import React from "react";

const Wallet = () => {

  return (
    <Box className="no-bottom no-top" id="content">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12 paddingtop10 ranking" >
            <h2 className="top-nfts">Connect Wallet</h2>
          </Box>
          <Box className="col-md-12">
            <Box className="row">
              <Box className="col-lg-3 mb30">
                <a className="box-url">
                  <span className="box-url-label">Most Popular</span>
                  <img src="assets/images/wallet/1.png" alt="" className="mb20" />
                  <h4>Metamask</h4>
                  <p>Start exploring blockchain applications in seconds.Trusted by over 1 million users.</p>
                </a>
              </Box>

              <Box className="col-lg-3 mb30">
                <a className="box-url">
                  <img src="assets/images/wallet/2.png" alt="" className="mb20" />
                  <h4>Bitski</h4>
                  <p>Bitski connects communities, creators and brands through unique, ownable digital content.</p>
                </a>
              </Box>

              <Box className="col-lg-3 mb30">
                <a className="box-url">
                  <img src="assets/images/wallet/3.png" alt="" className="mb20" />
                  <h4>Fortmatic</h4>
                  <p>Let users access your Ethereum app from anywhere. No more browser extensions.</p>
                </a>
              </Box>

              <Box className="col-lg-3 mb30">
                <a className="box-url">
                  <img src="assets/images/wallet/4.png" alt="" className="mb20" />
                  <h4>WalletConnect</h4>
                  <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
                </a>
              </Box>

              <Box className="col-lg-3 mb30">
                <a className="box-url">
                  <img src="assets/images/wallet/5.png" alt="" className="mb20" />
                  <h4>Coinbase Wallet</h4>
                  <p>The easiest and most secure crypto wallet. ... No Coinbase account required.
                  </p>
                </a>
              </Box>

              <Box className="col-lg-3 mb30">
                <a className="box-url">
                  <img src="assets/images/wallet/6.png" alt="" className="mb20" />
                  <h4>Arkane</h4>
                  <p>Make it easy to create blockchain applications with secure wallets solutions.</p>
                </a>
              </Box>

              <Box className="col-lg-3 mb30">
                <a className="box-url">
                  <img src="assets/images/wallet/7.png" alt="" className="mb20" />
                  <h4>Authereum</h4>
                  <p>Your wallet where you want it. Log into your favorite dapps with Authereum.</p>
                </a>
              </Box>

              <Box className="col-lg-3 mb30">
                <a className="box-url">
                  <span className="box-url-label">Most Simple</span>
                  <img src="assets/images/wallet/8.png" alt="" className="mb20" />
                  <h4>Torus</h4>
                  <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Wallet