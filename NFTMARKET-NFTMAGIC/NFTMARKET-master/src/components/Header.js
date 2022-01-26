import Switch from './switch';
import Box from '@mui/material/Box';
import { Row, Col } from "reactstrap";
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import StarsIcon from '@mui/icons-material/Stars';
import ReplayIcon from '@mui/icons-material/Replay';
import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { Drawer, Divider, Typography, Alert, Menu, MenuItem } from "@mui/material";

import Config from "../config/app"
import Web3 from "web3";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
import { URI_AVAILABLE, UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from "@web3-react/injected-connector";

// Import Material UI Components
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
// Import Assets
// import useStyles from "../assets/constants/styles";
import { Wallets, ConnectedWallet } from "../assets/constants/wallets";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { walletconnect } from "../assets/constants/connectors";
import { useEagerConnect, useInactiveListener } from "../hooks";
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import LowPriorityRoundedIcon from '@mui/icons-material/LowPriorityRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useHistory } from 'react-router-dom';
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

const Header = () => {
    const [anchor, setanchor] = useState(false)
    const [BNBValue, setBNBValue] = useState(0);
    const [AYRAValue, setAYRAValue] = useState(0);
    const [ITHDValue, setITHDValue] = useState(0);
    const triedEager = useEagerConnect();
    // eslint-disable-next-line
    const { activate, active, account, deactivate, connector, error, setError, library } = useWeb3React();
    const [activatingConnector, setActivatingConnector] = useState(false);
    // eslint-disable-next-line
    const [isSelectingWallet, setIsSelectingWallet] = useState(true);
    const cWallet = ConnectedWallet();

    // ** Effects
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);
    // log the walletconnect URI
    useEffect(() => {
        const logURI = (uri) => {
            console.log("WalletConnect URI", uri);
        };
        walletconnect.on(URI_AVAILABLE, logURI);

        return () => {
            walletconnect.off(URI_AVAILABLE, logURI);
        };
    }, []);
    useInactiveListener(!triedEager);
    // ** Actions
    const onConnectWallet = async (item) => {
        console.log(item)
        setActivatingConnector(item.connector);
        setIsSelectingWallet(false);
        sessionStorage.close = false;
        await activate(item.connector);
    };
    const onDeactiveWallet = () => {
        setIsSelectingWallet(true);
        sessionStorage.close = "true";
        deactivate(true);
    };
    const retryConnect = async (activating) => {
        setError(null);
        if (window.ethereum) {
            await window.ethereum
                .request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0x38",
                            chainName: "Binance Main Network",
                            rpcUrls: [
                                "https://bsc-dataseed.binance.org/"
                            ],
                            nativeCurrency: {
                                name: "BNB",
                                symbol: "BNB",
                                decimals: 18,
                            },
                            blockExplorerUrls: [
                                "https://bscscan.com/"
                            ],
                        },
                    ],
                })
                .then(() => {
                    alert(
                        "You have successfully changed to Binance Main Network.",
                        "info"
                    );
                })
                .catch((error) => {
                    alert(error.toString(), "error");
                });
        }

        onConnectWallet(activating);
    };
    // const changeWallet = (error) => {
    //     if (!error) {
    //         return true;
    //     } else {
    //         setError(null);
    //         setIsSelectingWallet(true);
    //     }
    // }

    const getErrorMessage = (error) => {
        if (error instanceof NoEthereumProviderError) {
            return "Install MetaMask on desktop or visit from a dApp browser on mobile.";
        } else if (error instanceof UnsupportedChainIdError) {
            return "You're connected to an unsupported network.";
        } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect ||
            error instanceof UserRejectedRequestErrorFrame
        ) {
            return "Please authorize this website to access your Binance account.";
        } else {
            console.error(error);
            return "An unknown error occurred. Check the console for more details.";
        }
    };

    const fromWei = useCallback((web3, val) => {
        if (val) {
            val = val.toString();
            return web3.utils.fromWei(val);
        } else {
            return "0"
        }
    }, []);

    const valueload = async () => {
        const web3 = new Web3(library.provider);
        const ContractITHD = new web3.eth.Contract(
            Config.Token.ITHD.abi,
            Config.Token.ITHD.address
        )
        const ContractAYRA = new web3.eth.Contract(
            Config.Token.AYRA.abi,
            Config.Token.AYRA.address
        )
        const bnbValue = await web3.eth.getBalance(account);
        const ithdValue = await ContractITHD.methods.balanceOf(account).call()
        const ayraValue = await ContractAYRA.methods.balanceOf(account).call()
        console.log(ayraValue)
        console.log(ithdValue)
        console.log(bnbValue)
        setBNBValue(fromWei(web3, bnbValue))
        setAYRAValue(fromWei(web3, ayraValue))
        setITHDValue(fromWei(web3, ithdValue))
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [toggle, settoggle] = React.useState(false);
    const open = Boolean(anchorEl);
    const history = useHistory();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const togglemenu = () => {
        const header = document.getElementsByTagName('header');
        if (toggle) {
            header[0].classList.remove("toggle")
            settoggle(false)
        } else {
            header[0].classList.add("toggle")
            settoggle(true)
        }
    }

    const goCollection = () => {
        setAnchorEl(false);
        history.push('/collection')
    }

    useEffect(() => {
        if (active) {
            valueload();
        }
    }, [active])
    return (
        <header className="transparent header-light scroll-light">
            <Box className="container header">
                <Box className="row">
                    <Box className="col-md-12">
                        <Box className="de-flex sm-pt10">
                            <Box className="de-flex-col">
                                <Box className="de-flex-col">
                                    <Box id="logo">
                                        <a href="home">
                                            <img alt="" className="logo" src="assets/images/design/logo-nfts-magics-web.png" />
                                            <img alt="" className="logo-2" src="assets/images/design/logo-nfts-magics-web.png" />
                                        </a>
                                    </Box>
                                </Box>

                                <Search className='header-search'>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search NFT and Accounts ..."
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </Box>
                            <Box className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                        <a href="/" ><img src='assets/images/design/home-button-menu.png' style={{ height: "30px" }}></img></a>
                                    </li>
                                    <li>
                                        <a href="/affiliate" ><img src='assets/images/design/affiliate-icon.png' style={{ height: "30px" }}></img></a>
                                    </li>
                                    <li>
                                        <a onClick={handleClick} className='header-text'>Explore<span></span></a>
                                        {/* <a href="" className='header-text'>Explore<span></span></a> */}
                                        {/* <ul style={{ overflow: "auto", height: "600px" }}>
                                            <li><a href="/collection" ><img src='assets/images/design/all-nfts-icon.png' />All NFTS</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/new-icon.png' />New</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/fireworks-logo.png' />New Year</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/free-art-to-seel-or-reward.png'></img>Free Art</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/birthday-logo.png'></img>Birthday Greetings</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/love-icon.png'></img>Dedication of Love</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/familyicon.png'></img>Family or Friendship</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/wedding-logo.png'></img>Wedding Invitations</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/ring-logo.png'></img>Anniversary Gift</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/religious-logo.png'></img>Religious Congratulations</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/personal-development.png'></img>Personal Development</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/studies-job-success.png'></img>Studies or job Success</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/baby-logo.greeting.be-mum-or-dad.png'></img>Happy to give birth baby</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/divorce-logo.png'></img>Divorces</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/laughing-logo.png'></img>Laughing and Memes</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/poetry-logo.png'></img>Poetry</a></li>
                                            <li><a href="/collection" ><img src='assets/images/design/party-invitation.png'></img>Party Invitations</a></li>
                                        </ul> */}
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/all-nfts-icon.png' />&nbsp;All NFTS</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/new-icon.png' />&nbsp;New</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/fireworks-logo.png' />&nbsp;New Year</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/free-art-to-seel-or-reward.png'></img>&nbsp;Free Art</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/birthday-logo.png'></img>&nbsp;Birthday Greetings</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/love-icon.png'></img>&nbsp;Dedication of Love</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/familyicon.png'></img>&nbsp;Family or Friendship</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/wedding-logo.png'></img>&nbsp;Wedding Invitations</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/ring-logo.png'></img>&nbsp;Anniversary Gift</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/religious-logo.png'></img>&nbsp;Religious Congratulations</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/personal-development.png'></img>&nbsp;Personal Development</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/studies-job-success.png'></img>&nbsp;Studies or job Success</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/baby-logo.greeting.be-mum-or-dad.png'></img>&nbsp;Happy to give birth baby</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/divorce-logo.png'></img>&nbsp;Divorces</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/laughing-logo.png'></img>&nbsp;Laughing and Memes</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/poetry-logo.png'></img>&nbsp;Poetry</MenuItem>
                                            <MenuItem onClick={() => goCollection()}><img src='assets/images/design/party-invitation.png'></img>&nbsp;Party Invitations</MenuItem>
                                        </Menu>
                                    </li>
                                    <li>
                                        <a href="#" className='header-text'>Stats<span></span></a>
                                        <ul>
                                            <li><a href="activity"><LocalActivityIcon />&nbsp;Activity</a></li>
                                            <li><a href="ranking"><StarsIcon />&nbsp;Ranking</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/createoption" className='header-text'>Create<span></span></a>
                                    </li>
                                    <li>
                                        <a href="#" className='header-text'><img style={{ height: "30px" }} src='assets/images/design/user-icon.png'></img><span></span></a>
                                        <ul>
                                            <li><a href="/profile"><PermIdentityIcon />&nbsp;My Profile</a></li>
                                            <li><a href="/support"><ContactSupportIcon />&nbsp;Support</a></li>
                                            <li><a href="/contactus"><ConnectWithoutContactIcon />&nbsp;Contact Us</a></li>
                                            <li><a href="/gift"><i className='icon_gift_alt'></i>&nbsp;&nbsp;&nbsp;My Gift</a></li>
                                            <li><a href="/"><Logout />&nbsp;Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <Box className='header-account'>
                                    <MenuIcon className="response-menu" onClick={() => togglemenu()} />
                                    <img style={{ height: "30px" }} src='assets/images/design/wallet-icon.png' onClick={() => setanchor(anchor ? false : true)} className='connectwallet'></img>
                                    {/* <AccountBalanceWalletIcon onClick={() => setanchor(anchor ? false : true)} className='connectwallet' /> */}
                                    <Drawer
                                        anchor="right"
                                        open={anchor}
                                        onClose={() => setanchor(false)}
                                    >
                                        <Box
                                            sx={{ width: 400 }}
                                            role="presentation"
                                        >
                                            <Box className="mywallet">
                                                <Typography className="wallettext" style={{ fontWeight: "bold" }}>Wallet Connect</Typography><br />
                                                <Divider />
                                                {
                                                    error ?
                                                        <Alert
                                                            severity="error"
                                                            action={
                                                                <ReplayIcon onClick={() => retryConnect(Wallets[0])} />
                                                            }
                                                        >
                                                            {getErrorMessage(error)}
                                                        </Alert> : ""
                                                }
                                                {
                                                    active ?
                                                        <List>
                                                            <ListItem className="item">
                                                                <ListItemIcon className="symbol">
                                                                    <img src={cWallet.logo} alt={cWallet.name} />
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    className="description"
                                                                    primary={`Connected to ${cWallet.name}`}
                                                                />
                                                                <ListItemSecondaryAction className="action">
                                                                    <Tooltip arrow title="Disconnect wallet">
                                                                        <IconButton size="small" onClick={onDeactiveWallet}>
                                                                            <LowPriorityRoundedIcon />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </ListItemSecondaryAction>
                                                            </ListItem>
                                                            <ListItem className="item">
                                                                <ListItemIcon className="symbol">
                                                                    <AccountBalanceWalletRoundedIcon />
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    className="description"
                                                                    primary={`${account.substring(0, 8)} ... ${account.substring(account.length - 4)}`}
                                                                />
                                                                <ListItemSecondaryAction className="action">
                                                                    <Link
                                                                        href={`https://bscscan.com/address/${account}`}
                                                                        target="_blank"
                                                                        underline="none"
                                                                    >
                                                                        <Tooltip arrow title="View on explorer">
                                                                            <IconButton size="small">
                                                                                <LaunchRoundedIcon />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    </Link>
                                                                    <CopyToClipboard
                                                                        text={account}
                                                                    >
                                                                        <Tooltip arrow title="Copy address">
                                                                            <IconButton size="small">
                                                                                <AssignmentTurnedInRoundedIcon />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    </CopyToClipboard>
                                                                </ListItemSecondaryAction>
                                                            </ListItem>
                                                            <Divider />
                                                            <Typography className="wallettext" style={{ fontWeight: "bold" }}>Wallet Amount</Typography><br />
                                                            <Box className="tokenbox">
                                                                <Box className="token"><img src="assets/images/design/ayra.png" className="tokenimg" ></img><span>{AYRAValue} &nbsp;AYRA</span></Box>
                                                                <Divider />
                                                                <Box className="token"><img src="assets/images/design/bnb.png" className="tokenimg" ></img><span>{BNBValue} &nbsp; BNB</span></Box>
                                                                <Divider />
                                                                <Box className="token"><img src="assets/images/design/ithd.png" className="tokenimg" ></img><span>{ITHDValue} &nbsp;ITHD</span></Box>
                                                            </Box>
                                                        </List>
                                                        :
                                                        <Row style={{ justifyContent: "center", padding: '20px 10px' }}>
                                                            <Box className="col-lg-12 mb20">
                                                                <a className="wallet-box-url">
                                                                    <span className="box-url-label">Main</span>
                                                                    <img src="assets/images/design/ayramask-logo.png" style={{ height: "37px" }} alt="" className="wallet-icon" />&nbsp;
                                                                    <h4>Ayramask</h4>
                                                                </a>
                                                            </Box>
                                                            <Box className="col-lg-12 mb20">
                                                                <a className="wallet-box-url" onClick={() => onConnectWallet(Wallets[0])}>
                                                                    <span className="box-url-label">Popular</span>
                                                                    <img src="assets/images/wallet/1.png" alt="" className="wallet-icon" />&nbsp;
                                                                    <h4>Metamask</h4>
                                                                </a>
                                                            </Box>
                                                            <Box className="col-lg-12 mb20">
                                                                <a className="wallet-box-url" onClick={() => onConnectWallet(Wallets[0])}>
                                                                    <span className="box-url-label">Popular</span>
                                                                    <img src="assets/images/wallet/10.png" alt="" className="wallet-icon" />&nbsp;
                                                                    <h4>Binance</h4>
                                                                </a>
                                                            </Box>
                                                            <Box className="col-lg-12 mb20">
                                                                <a className="wallet-box-url" onClick={() => onConnectWallet(Wallets[1])}>
                                                                    <img src="assets/images/wallet/5.png" alt="" className="wallet-icon" />&nbsp;
                                                                    <h4>CoinBase</h4>
                                                                </a>
                                                            </Box>
                                                            <Box className="col-lg-12 mb20">
                                                                <a className="wallet-box-url" onClick={() => onConnectWallet(Wallets[1])}>
                                                                    <img src="assets/images/design/waletconnect-logo.png" alt="" className="wallet-icon" />&nbsp;
                                                                    <h4>WalletConnect</h4>
                                                                </a>
                                                            </Box>
                                                            <Box className="col-lg-12 mb20">
                                                                <a className="wallet-box-url">
                                                                    <span className="box-url-label">Only Mobile</span>
                                                                    <img src="assets/images/design/TWT.png" alt="" className="wallet-icon" />&nbsp;
                                                                    <h4>Trust</h4>
                                                                </a>
                                                            </Box>
                                                        </Row>
                                                }
                                            </Box>
                                        </Box>
                                    </Drawer>
                                    <Switch />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Box className="col-md-12 tokenamount">
                <Row style={{ height: "100%!important" }}>
                    <Col md={4} xs={12} className="tokens" style={{ justifyContent: "right" }}>
                        <Box>
                            <a href="https://www.ayratokens.com/" target="_blank" rel="noreferrer" className='pink-color'>
                                <img src="assets/images/design/ayra.png" className="tokenimg-header" ></img> AYRA BSC
                                <Tooltip title="For more information about this token, you can see in https://www.ayratokens.com or Please click now.">
                                    <IconButton>
                                        <HelpOutlineIcon className='pink-color' />
                                    </IconButton>
                                </Tooltip>
                                <span className="token-amount">{AYRAValue}</span>
                            </a>
                        </Box>
                    </Col>
                    <Col md={4} xs={12} className="tokens" style={{ padding: "0px" }}>
                        <Box>
                            <a href="https://www.ithdiamond.tk" target="_blank" rel="noreferrer" className='pink-color'>
                                <img src="assets/images/design/ithd.png" style={{ height: "50px" }} className="tokenimg-header" ></img>ITHD
                                <Tooltip title="For more information about this token, you can see in https://www.ithdiamond.tk or Please click now.">
                                    <IconButton>
                                        <HelpOutlineIcon className='pink-color' />
                                    </IconButton>
                                </Tooltip>
                                <span className="token-amount">{ITHDValue}</span>
                            </a>
                        </Box>
                    </Col>
                    <Col md={4} xs={12} className="tokens" style={{ justifyContent: "left" }}>
                        <Box >
                            <a href="https://bit.ly/32p4ma4" target="_blank" rel="noreferrer" className='pink-color'>
                                <img src="assets/images/design/bnb.png" className="tokenimg-header" ></img>BNB
                                <Tooltip title="For more information about this token, you can see in https://bit.ly or Please click now.">
                                    <IconButton>
                                        <HelpOutlineIcon className='pink-color' />
                                    </IconButton>
                                </Tooltip>
                                <span className="token-amount">{BNBValue}</span>
                            </a>
                        </Box>
                    </Col>
                </Row>
            </Box>
        </header>
    )
}

export default Header