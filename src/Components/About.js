import React, {useState} from "react";

export default function About(props) {

   const[my, setMy]= useState({
    backgroundColor: '#212121',
    color: 'white'
   })

   
   const[btntext, setBtnText]= useState("Enable Light Mode")

   const toggleStyle=()=>{
   if(my.color === "white"){
    setMy({
        backgroundColor: 'white',
        color: 'black'
    })
    
    setBtnText("Enable Dark Mode")
   }
   else{
    setMy({
        backgroundColor: '#212211',
        color: 'white'
    })
    setBtnText("Enable Light Mode")
   }
}


  return (
    <>
      <div className="container my-5" style={my}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                style={my}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={my}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button style={my}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={my}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, labore!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
              style={my}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={my}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, commodi.
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-danger my-3" onClick={toggleStyle} style={my}>{btntext}</button>
      </div>
    </>
  );
}
