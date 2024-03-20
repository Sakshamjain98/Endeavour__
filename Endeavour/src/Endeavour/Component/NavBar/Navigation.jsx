import {useEffect, useRef, useState} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import logo from "../../../assets/updatedfinallogo.png"
import logoClose from './ham-c.svg';
import hamLogo from './ham.svg';
import './styles.scss';
// import {MdxContent} from '../Mdx';

const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  }
`;


export default function NAVBAR() {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = () => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);


  return (

      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`} >
      
     
      <div className='logo-div w-40 overflow-hidden'>
        <img src={logo} className="nav-logo" style={{
        }} ></img>
      </div>

        <Wrapper  toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <li>
                <Link to="/" smooth>
                  <span className="links">Home</span>{' '}
                </Link>
              </li>
              
              
              <li>
                <Link to="/about" smooth>
                  <span className="links">Themes </span>{' '}
                </Link>
              </li>
              <li>
                <Link to="/sponser" smooth>
                  <span className="links">Sponsors</span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#judges`} smooth>
                  <span className="links">Judges </span>{' '}
                </Link>
              </li>
              <li>
                <Link to="/Speaker" smooth>
                  <span className="links">Speakers </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#faq`} smooth>
                  <span className="links">FAQ</span>{' '}
                </Link>
              </li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

  
  );
}


