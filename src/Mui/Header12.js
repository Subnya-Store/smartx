import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Loginpage from "./Components/Loginpage";
import Modal from "react-modal";
import SignUp from "../components/SignUp";
import authActions from '../../redux/actions/auth'
import SignupPage from "./Components/SignupPage";
// import Loginpage from "./Components/Loginpage";
const { fetchGet } = authActions;


const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header12({toast}) {

  // useEffect(()=>{
  //   fetchGet('/admin')
  //   .then(x=> console.log(x))
  //   .catch(err=> console.log(err))
  // },[])

  const [anchorElNav, setAnchorElNav] = React.useState("");
  const [anchorElUser, setAnchorElUser] = React.useState("");

  const handleOpenNavMenu = () => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = () => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [state, setState] = useState(1)
  // console.log(state,'<===========')
  return (
    <div className={`bg-black ${modalIsOpen == true ? 'hidden' : ''} bg-opacity-70  w-[100%] pr-5 -mb-10 z-10 fixed flex justify-between`}>

      {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <img className="h-20 w-24" src="images/smart(1).png" alt="/" />
      </Typography>
     
      {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          height: "30px"
        }}
      >
        <img className="" src="images/smart(1).png" alt="/" />
      </Typography>

      <div className="flex text-texting ">
        <button onClick={openModal}>Login</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Login"
        className={
          " sm:mx-[20%] mx-2 sm:my-[10%] my-5 sm:h-[70%] h-[85%] rounded-3xl bg-purple-50 py-10 shadow-2xl"
        }
      >
       
        {state == 1 ? <Loginpage setState={setState} toast={toast}  /> : <SignupPage setState={setState} toast={toast} />}
      </Modal>
    </div>
  );
}
export default Header12;
