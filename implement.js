import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import App from './App';
import './App.css';
import Header from './header';
import Main from './main';
import Fotter from './fotter';
import Home from './home';
import Reviews from './reviews';
import Giftcard from './giftcard';
import Loyaltypoints from './loyaltypoints';
import Membership from './membership';
import Mybooking from './mybooking';
import a from './data.js';

function Implement(){
    return(

    

  <Routes>
  <Route path="/home" Component={Home}/>
  <Route path="/reviews" Component={Reviews}/>
  <Route path="/memberships" Component={Membership}/>
  <Route path="/giftcard" Component={Giftcard}/>
  <Route path="/mybookings" Component={Mybooking}/>
  <Route path="/loyality-points" Component={Loyaltypoints}/>

    


  
  </Routes>
    )}

export default Implement