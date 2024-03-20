import Landing from "../LandingPage/Landing"
import Im from "../../../assets/Event.jpg";
function Event1() {
    return (
        <div className="flex bg-black border h-[100vh] pt-20 justify-center items-center overflow-hidden">
            <div className="w-[60%]">
          <Landing></Landing>
            </div>
          <div className="w-40% flex justify-center items-center">
            <img className="w-[80%] p-4" src={Im} alt="" />
          </div>
        </div>
    );
}

export default Event1;