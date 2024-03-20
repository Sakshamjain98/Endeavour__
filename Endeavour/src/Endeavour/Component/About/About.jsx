

// import Im from "../../../assets/White-paper-texture-for-Projects.jpg"
import PastWinner from "../PastWinner/PastWinner";
function About() {
    return (
        <div className="flex flex-col md:flex-row p-4 mb-0 justify-center items-start overflow-hidden "
      
        >
             
            {/* Your component content goes here */}
            <div className="w-full md:w-[50%] mt-24 ml-8 overflow-hidden">
                <h2 className="font-bold text-3xl md:text-5xl mb-8 font-serif">About The Event</h2>
                <p className="font-sans text-sm md:text-base">The Institute Innovation Council is back with IIT Dharwad’s entrepreneurial fest “E-Summit 2023” after the success of its predecessor. This time, you will get to hear from established individuals regarding their take on varying aspects of entrepreneurship and success along with students being given a chance to enhance their creative bug and hone their skills in the Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit debitis quidem nostrum repellat rem soluta a veniam, unde at iure accusamus vel aut optio, animi eos rerum. Modi, dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet cumque qui? Rerum cupiditate esse aut cum error neque. Repellat culpa ut ad cum repellendus nisi minus eveniet quae expedita.</p>
            </div>
            <div className="w-full md:w-[50%] ">
                {/* <h2 className="font-bold text-3xl md:text-5xl mb-2">When</h2>
                <h3 className="font-serif text-sm md:text-base">SATURDAY TO SUNDAY</h3>
                <h3 className="font-serif text-sm md:text-base mb-8">2ND TO 3RD SEPTEMBER 2023</h3>
                <h2 className="font-bold text-3xl md:text-5xl mb-2">Note:</h2>
                <h3 className="font-serif text-sm md:text-base">All available passes for the event have been distributed, and no further passes will be issued from this point onward.</h3> */}
                <PastWinner/>
            </div>
        </div>
    );
}

export default About;
