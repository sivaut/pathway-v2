import logo from './logo.svg';
import './App.css';

import { Amplify , Auth, Hub} from 'aws-amplify';

import { Image } from '@aws-amplify/ui-react';
import { Menu, MenuItem, MenuButton } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';

import { NavBar ,PwPWRegisterTileCollection,PwPublicPWPeekTileCollection,MakeNewPathway,PwSideBar,PwTopBar } from './ui-components';

import { useState } from 'react'

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [userName, setUserName] = useState("-")

  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()
  
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  {/* Listener for sign in activity events */}
  const listener = (data) => {

    switch (data.payload.event) {
      case 'signIn':
        setUserLoggedIn(true);
        setShowSignInModal(false);
        fUserName();
        break;
      case 'signUp':
        break;
      case 'signOut':
        setUserLoggedIn(false);
        setUserName("-");

        break;
      case 'signIn_failure':
        break;
      case 'configured':
        break;
      default:
    }
  }
  Hub.listen('auth', listener);

  {/*Gets the user name for the logged in user*/}
  const fUserName = async  () => {
    
    try {
      if ( Auth.currentUserInfo() === "undefined") {
      }else{
        await Auth.currentUserInfo().then((user) =>setUserName(user.attributes.preferred_username));
      }
      
    } catch {
    }
  }
  
  {/* Signs out the user*/}
  const fSignOut = async () => {
    await Auth.signOut();
    setShowSignInModal(false);
    
  };

  return (
    <>

    <header> 
    <div class="hamburger" style={{paddingBottom:"10px"}} onClick={toggleNav}>&#9776;</div>
      <Image
            alt="Pathways"
            src="./pathways-logo-v01.png"
            width="250px"
            backgroundColor="#aed581"
            marginBottom='0px'
            marginLeft='250px'
          /></header>
      {/* Side Menu */}
      <div style={{ backgroundColor:"#ede7f6", height:'100%', width:'100%'}}>

        <div style={{float:"left"}}>
         <div class={isNavOpen?"nav-open nav": "nav-close nav" }>

          <PwSideBar  height='1050px' width='250px' margin='0px'

            overrides={{
              ctaDiscoverPublic: {
                display:userLoggedIn === true && 'none' , 
                onClick: () => {
                  setShowSignInModal(false);
                }
              }
              ,
              ctaMyPathways: {
                display:userLoggedIn === false && 'none' , 
                onClick: () => {
                  alert(userName);
                }
              }
              ,
              BtnSignIn: {
                display:userLoggedIn === true && 'none' , 
                onClick: () => {
                  setShowSignInModal(true);
                }
              }
              ,
              BtnSignOut: {
                display:userLoggedIn === false && 'none' , 
                onClick: () => {
                  fSignOut()
                }
              }


            }}

          />

        </div>
        </div>

        {/* Dynamic Components */}
        <div style={{float:"left" , marginLeft:"5px"  }} >

        {showSignInModal ? (
          <Authenticator height='100%' width='100%' />
          ) : (  null
        )}

        { !showSignInModal && userLoggedIn ? (
          <PwPWRegisterTileCollection height='100%' width='100%'/>
        ) : ( null
        )}

        { !showSignInModal && !userLoggedIn ? (
          <PwPublicPWPeekTileCollection height='100%' width='100%' />
        ) : ( null
        )}


        </div>

      </div>
    </>
  )
}

export default App;
