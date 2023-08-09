import React, { useState, useEffect } from "react";
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import '../css/App.css';
import '../css/navbar.css';
import '../css/footer.css';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import { RestaurantPage } from './screens/RestaurantPage';
import { CommunityPage } from './screens/CommunityPage';
import { OrdersPage } from './screens/OrdersPage';
import { MemberPage } from './screens/MembersPage';
import { HelpPage } from './screens/HelpPage';
import { LoginPage } from './screens/LoginPage';
import { NavbarHome } from './components/header';
import { NavbarRestaurant } from './components/header/restaurant';
import { NavbarOthers } from './components/header/other';
import { HomePage } from './screens/Homepage';
import { Footer } from './components/footer';
import AuthenticationModal from "./components/auth";
import { Member } from "../types/user";
import { serviceApi } from "../lib/config";
import {sweetFailureProvider,  sweetTopSmallSuccessAlert,} from "../lib/sweetAlert";
import { Definer } from "../lib/Definer";
import assert from "assert";
import MemberApiService from "./apiServices/memberApiService";
import "../app/apiServices/verify";


function App() {

   /** INITIALIZATION **/
  const [verifiedMemberData, setVerifiedMemberData] = useState<Member | null>(null);
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    console.log("=== useEFFECT: APP===");
    const memberDataJson: any = localStorage.getItem("member_data")
      ? localStorage.getItem("member_data")
      : null;

    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if (member_data) {
      member_data.mb_image = member_data.mb_image
        ? `${serviceApi}/${member_data.mb_image}`
        : "/auth/default_user.svg";
      setVerifiedMemberData(member_data);
    }
  }, [signUpOpen, loginOpen]);

   /** HANDLERS **/
   const handleSignUpOpen = () => setSignUpOpen(true);
   const handleSignUpClose = () => setSignUpOpen(false);
   const handleLoginOpen = () => setLoginOpen(true);
   const handleLoginClose = () => setLoginOpen(false);

   const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  const handleLogOutRequest = async () => {
    try {
      const memberServiceApi = new MemberApiService();
      await memberServiceApi.logOutRequest();
      await sweetTopSmallSuccessAlert("success", 700, true);
    } catch (err: any) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1);
    }
  };

  return (
    <Router>
      {main_path ==='/' ? 
      <NavbarHome setPath={setPath} 
      handleLoginOpen={handleLoginOpen}
      handleSignUpOpen={handleSignUpOpen}
      anchorEl={anchorEl}
      open={open}
      handleLogOutClick={handleLogOutClick}
      handleCloseLogOut={handleCloseLogOut}
      handleLogOutRequest={handleLogOutRequest}
      verifiedMemberData={verifiedMemberData}
/>
      : main_path.includes ("/restaurant") ? (
      <NavbarRestaurant setPath={setPath} 
      handleLoginOpen={handleLoginOpen}
      handleSignUpOpen={handleSignUpOpen}
      anchorEl={anchorEl}
      open={open}
      handleLogOutClick={handleLogOutClick}
      handleCloseLogOut={handleCloseLogOut}
      handleLogOutRequest={handleLogOutRequest}
      verifiedMemberData={verifiedMemberData}
      />
      ) : ( 
      <NavbarOthers setPath={setPath} 
      handleLoginOpen={handleLoginOpen}
      handleSignUpOpen={handleSignUpOpen}
      anchorEl={anchorEl}
      open={open}
      handleLogOutClick={handleLogOutClick}
      handleCloseLogOut={handleCloseLogOut}
      handleLogOutRequest={handleLogOutRequest}
      verifiedMemberData={verifiedMemberData}
      />
     )}
    <div>
        
        <Switch>
          <Route path="/restaurant">
            <RestaurantPage />
          </Route>
          <Route path="/community">
            <CommunityPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <MemberPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer/>

        <AuthenticationModal
        signUpOpen={signUpOpen}
        handleSignUpOpen={handleSignUpOpen}
        handleSignUpClose={handleSignUpClose}
        loginOpen={loginOpen}
        handleLoginOpen={handleLoginOpen}
        handleLoginClose={handleLoginClose}
      />
       </div>
    </Router>
  
  );
}

export default App;

