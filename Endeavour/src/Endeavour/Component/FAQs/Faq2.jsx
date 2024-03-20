import Faq from "./Faq.jsx"
import Lottie from 'react-lottie';
// import Im from "../../../assets/updatedfinallogo.png"
import Lotti from "./Animation - 1710829842814.json"
function Faq2() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-10 pb-4">
            <div className="md:w-[70%]">
           <Faq/>
            </div>
            <div className="md:w-[50%]">
                {/* <img src={Im} alt="" className="w-[90%] "  /> */}
                <Lottie options={{ animationData: Lotti }} background="transparent"  speed={2}  style={{width: "120%", height: "100%", marginTop:"10px"}}  loop autoplay></Lottie>
            </div>
           
        </div>
    );
}

export default Faq2;