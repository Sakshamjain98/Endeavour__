// import { ReactTyped } from "react-typed";
import "./styles.css";
import {HashLink as Link} from 'react-router-hash-link';
// const TOP_SECTION = {
//     TITLE: 'Join Endeavour24',
//     Typed_effect: ['24-Hour of Innovation', 'Win awesome prizes'],
//     SHORT_DESCRIPTION:
//       'Unleash your creativity for 24-Hour! Join us on May 5th for a nationwide E-Summit alongside hundreds of other student innovators. Build, learn, and connect - are you in?',
//     IMG_SRC: "https://s3.ap-south-1.amazonaws.com/innohacks3.0/Innohacks+3.0+Logo.png",
//     DISCORD_LINK: '',
//     JUDGES_FORM_LINK:
//       '#',
//     HACKERS_REGISTRATION_FORM_LINK:
//       '#'
//   };


// const MytypedComponent = () => {
//     return (
//         <div className="typing-div">
//           <h1>
//             <ReactTyped strings={TOP_SECTION.Typed_effect} typeSpeed={80} loop  className="text-white text-4xl "/>
//           </h1>
//         </div>
//       );
// }

const About = () => {
  const titleStyle = {
    background: "linear-gradient(to right, #26feeb, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="AboutMe mb-16 mx-0" >
      <h2 className=" ha mb-16  ">
        {/* <span 
        style={{ fontSize: "3rem" ,
        color: "white"
    }} className="pb-0 mb-2 font-serif my-9">Embrace the challenge</span> */}
        <br />{" "}
        <h1 className="mb-8">

        <span style={titleStyle} className="innohacks-text text-[5rem] pt-20 pb-4 mb-3">Endeavour 24</span>
        </h1>
        <h2>

        <span className="mt-10 leading-6 font-serif mr-20 text-wrap" style={{ fontSize: "1.2rem",
    color:"white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, id hic voluptates similique, veniam consequatur autem rem commodi at rerum sunt cum. Laboriosam qui mollitia quia temporibus modi? Exercitationem, in!</span>
    </h2>
      </h2>
      {/* <h6 className="mt-10" style={{ fontSize: "1.9rem",
    color:"white" }}>Hack n`` Innovate</h6>
      <MytypedComponent /> */}  
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo  text-xl  bg-black"
    
    >
      <About />
      {/* <p className="text-white font-sans mt-0 text-xl"> {TOP_SECTION.SHORT_DESCRIPTION}</p> */}
      <div className="buttom-group flex justify-center items-center ">
        {/* <div className="join_dis ">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://discord.gg/qNmEeAsuqQ"
          >
            
            {/* <button className="join_disco w-48 h-12 shadow-blue-200 shadow-md text-white md:ml-5"
            style={{ display: "flex", justifyContent: "center" }}>
      <i className="fab fa-2x fa-discord" style={{
        color: "white"
      }}></i>
      &nbsp;&nbsp;Join Discord
      <div className="overlay">
        <div className="overlay-text">Now</div>
      </div>
    </button> */}
          {/* </a>
        </div> */} 
<Link to="/register">

        <a href="https://forms.gle/LabTKRJEHvyZuXd78">
          {" "}
          <button className="register  w-48 h-12 shadow-blue-200 shadow-md text-white inline-block md:ml-20">
      {/* <i className=""></i> */}
      Register 
      <div className="overlay">
        <div className="overlay-text">Now</div>
      </div>
    </button>
        
        </a>
</Link>
<Link to="/payment">

        <a href="">
          {" "}
          <button className="register  w-48 h-12 shadow-blue-200 shadow-md text-white inline-block md:ml-20">
      {/* <i className=""></i> */}
      Pay 
      <div className="overlay">
        <div className="overlay-text">Now</div>
      </div>
    </button>
        
        </a>
</Link>
      </div>
      </div>
    
  );
};

export default  Myinfo ;
