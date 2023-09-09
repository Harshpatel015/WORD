import React from 'react'

export default function About1(props) {

    //for dark and light mode

    // const[click,Afterclick] = useState("Dark Mode");

    // const[mystyle,AfterStyle] = useState({

    //     color : "black",
    //     backgroundColor : "white",
    //     padding : "12px",

    // });

    // const Modeon = ()=>{

    //     if(click==="Dark Mode"){
    //         AfterStyle({

    //             color:"white",
    //             backgroundColor: "black",
    //             border:"2px solid white",
    //             padding : "12px",
    //             margin : "5px"
    //         })
    //         Afterclick('Light Mode');
    //     }else{

    //         AfterStyle({
    //             color : "black",
    //             backgroundColor : "white",
    //             padding : "12px",
                
    //         })
    //         Afterclick('Dark Mode')
    //     }

    // }



return (
<>
    <div className="container" >
        <h2 className='my-5 mx-5'style={{color:props.theam === "light"?"#434343":"#E4E4E4"}} >About Us</h2>
            


        <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{color:props.theam === "light"?"blue":"red" , backgroundColor:props.theam === "light"?"white":"black"}}>
                Accordion Item #1
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={{color:props.theam === "light"?"black":"white" , backgroundColor:props.theam === "light"?"#E4E4E4":"#434343"}}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{color:props.theam === "light"?"blue":"red" , backgroundColor:props.theam === "light"?"white":"black"}}>
                Accordion Item #2
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={{color:props.theam === "light"?"black":"white" , backgroundColor:props.theam === "light"?"#E4E4E4":"#434343"}}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"style={{color:props.theam === "light"?"blue":"red" , backgroundColor:props.theam === "light"?"white":"black"}}>
                Accordion Item #3
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={{color:props.theam === "light"?"black":"white" , backgroundColor:props.theam === "light"?"#E4E4E4":"#434343"}}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>

    </div>
</>
  )
}
