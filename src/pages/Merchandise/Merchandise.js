// import  Axios from "axios";
import React, { useState } from "react";
import merchandise from "./Merchandise.module.css"

function Merchandise() {
    
    let data={
        name:"",
        rollNo:"",
        phone:"",
        room:"",
        nameOnTshirt:"",
        numberOnTshirt:"",
        shirtSize:"",
        tshirtFormat:""
    }; 
    const handleChange=(e)=>{
        data[e.target.id]=e.target.value
        // console.log(data)
    }
    const handleSubmit=(e)=>{

    }

    const DisplayFirst = () => {
      
        

        return (
            <div className={merchandise.textcontainer}>
                <p className={merchandise.heading}>Barak T-Shirt</p>

                <form
                    className={merchandise.form}
                    method="POST"
                    action=""
                    onSubmit={handleSubmit}
                >
                    <input
                        name="name"
                        className={merchandise.inputbox}
                        type="text"
                        id="name"
                        onChange={(e)=>handleChange(e)}
                        placeholder="name"
                        required
                    ></input>
                    <input
                        name="rollNo"
                        className={merchandise.inputbox}
                        type="number"
                        id="rollNo"
                        onChange={(e)=>handleChange(e)}
                        placeholder="roll number"
                        required
                    ></input>
                    <input
                        name="phone"
                        className={merchandise.inputbox}
                        type="tel"
                        id="phone"
                        onChange={(e)=>handleChange(e)}
                        placeholder="Phone number" 
                        pattern="[0-9]{10}"
                        required
                    ></input>
                    {/* <input 
                        type="text" 
                        className={merchandise.inputbox}
                        id="room" 
                        name="room" 
                        onChange={(e)=>handleChange(e)}
                        required>
                    </input> */}
                    <input
                        name="nameOnTshirt"
                        className={merchandise.inputbox}
                        type="text"
                        id="nameOnTshirt"
                        onChange={(e)=>handleChange(e)}
                        placeholder="Name on T-Shirt"
                        required
                    ></input>
                    <input
                        name="numberOnTshirt"
                        className={merchandise.inputbox}
                        type="text"
                        id="numberOnTshirt"
                        onChange={(e)=>handleChange(e)}
                        placeholder="Number on Tshirt"
                        required
                    ></input>
                    <input
                        name="shirtSize"
                        className={merchandise.inputbox}
                        type="number"
                        id="shirtSize"
                        onChange={(e)=>handleChange(e)}
                        placeholder="Size"
                        min={1}
                        required
                    ></input>
                    {/* <input
                        name="course"
                        className={merchandise.inputbox}
                        type="text"
                        id="course"
                        onChange={(e)=>handleChange(e)}
                        placeholder="course"
                        required
                    ></input> */}
                    <button
                        type="submit"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        );
    };

    // const DisplaySecond = () => {
    //     return (
    //         <>
    //             <p className={merchandise.confirmedup}>Booking confirmed</p>
    //             <p className={merchandise.confirmeddown}>
    //                 Your booking confirmation has been sent to your email.
    //             </p>
    //         </>
    //     );
    // };

    const [display] = useState(DisplayFirst);
    // setdisplay(DisplayFirst); 

    return (
        <div className={merchandise.fullcontainer}>
            <div className={merchandise.leftcontainer}></div>
            <div className={merchandise.rightcontainer}>{display}</div>
        </div>
    );
}

export default Merchandise;