import Landing from "../LandingPage/Landing"
import Im from "../../../assets/Event.jpg";
import location from "../../../assets/location.gif"
import calendar from "../../../assets/calendar.gif"
import purse from "../../../assets/purse.gif"
import customer from "../../../assets/customer.gif"
function Event1() {
    return (
    <div>
        <div className="flex bg-black border h-[100vh] pt-20 justify-center items-center overflow-hidden">
          <div className="w-40% flex justify-center items-center">
            <img className="w-[80%]  pr-0" src={Im} alt="" />
          </div>
            <div className="w-[60%]">
          <Landing></Landing>
            </div>
        </div>
        <div className="flex justify-center mt-3 h-[80vh] gap-2">
         
          <div>
             <div className="md:flex md:justify-around my-[10px] gap-2 ">
          <div className=" py-[10px] my-[10px]">
            <div className="flex justify-center items-center">
              <img
                src={location}
                alt="location"
                className=" w-[100px] h-[120px]"
              />
              <div className=" mt-[8px] font-serif sm:text-[23px] text-[16px] text-center text-black">
                <span className="font-extrabold text-black">Venue</span> <br />
                 KIET <br />
                Group of Institution, Ghaziabad
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-between  py-[10px]">
            <div className="flex justify-center items-center">
              <img
                src={customer}
                alt="location"
                className=" w-[80px] h-[80px] mt-[20px] mx-[20px]"
              />
              <div className=" mt-[8px] font-serif sm:text-[23px] text-[16px] text-center text-black">
                <span className="font-extrabold text-black">Number Of members in a team</span> <br />
                4th-5th May 2024 <br />
                24hr Hackathon
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-around my-[10px] gap-2 ">
        <div className="md:flex md:justify-between  py-[10px]">
            <div className="flex justify-center items-center">
              <img
                src={calendar}
                alt="location"
                className=" w-[100px] h-[100px] mt-[20px] mx-[10px]"
              />
              <div className=" mt-[8px] font-serif sm:text-[23px] text-[16px] text-center text-black">
                <span className="font-extrabold text-black">Date</span> <br />
                4th-5th May 2024 <br />
                24hr Hackathon
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-between items-center  py-[20px]">
            <div className="flex justify-center items-center">
              <img
                src={purse}
                alt="location"
                className=" w-[100px] h-[100px] mt-[20px] mx-[20px]"
              />
              <div className=" mt-[8px] font-serif sm:text-[23px] text-[16px] text-center text-black">
                <span className="font-extrabold text-black">Fees</span> <br />
                2000 - 3000 rs <br />
              
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

    </div>
    );
}

export default Event1;