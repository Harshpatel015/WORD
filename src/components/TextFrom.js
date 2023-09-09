
//rfc is use for creating a react function base component

import React, { useState } from 'react'

export default function TextFrom(props) {

    //stat  // useState is a huk
    const [text,setText] = useState("Enter the text");

    
    //button click event

    //upper case

    

    const uppercase =()=>{
        let char = typeof(text);
        console.log(char);
        let n = "string";
        //let newText = text.toUpperCase();



        if(n!==char){                                         //this logic not working bec text box take all the vlue as a string 
            setText("Please Enter Word Not A Number")
        }else if(text===text.toUpperCase()){
            setText("The Given Text Is Already In UpperCase");
        }else if(text==="Enter the text"){
            setText("Please enter any text");
        }else if(text ==="Please enter any text") {
            setText("Please enter any text");
        }else if(text==="The Given Text Is Already In UpperCase") {
            setText("Please enter any text");
        }else if(text==="The Given Text Is Already In Lower Case") {
            setText("Please enter any text");
        }else{
            setText(text.toUpperCase());
        }
    }

    //lower case

    const lowercase = () =>{
        console.log('LowerCase was clicked');
        let newText1 = text.toLowerCase();
   
        
        if(text===text.toLowerCase()){
            setText("The Given Text Is Already In Lower Case");
        }else if(text==="Enter the text"){
            setText("Please enter any text");
        }else if(text==="Please enter any text") {
            setText("Please enter any text");
        }else if(text==="The Given Text Is Already In Lower Case") {
            setText("Please enter any text");
        }else if(text==="The Given Text Is Already In UpperCase") {
            setText("Please enter any text");
        }else{
            setText(newText1);
        }
    }



    //reverse

    //revers for multiple word
    const rev = text.split(" ").reverse().join(" ");
    
    
    //reverse for single word

     //total length

     const TextLength = text.length; //length

     const TWord = text.split(" ");
     const TextWord = TWord.length;

    const rever = text.split("").reverse().join("");

    function reverse1(){
        
        if(text==="Enter the text"){
            setText("Please enter any text");
        }else if(text==="Please enter any text") {
            setText("Please enter any text");
        }else if(text==="The Given Text Is Already In Lower Case") {
            setText("Please enter any text");
        }else if(text==="The Given Text Is Already In UpperCase") {
            setText("Please enter any text");
        }else if(TextWord===1){
            setText(rever);
        }else{
            setText(rev)
        }
    }


    //resert

    function reset(){
        setText("Enter the text")
    }



    //onchange

    const handleOnChange = (event) => {
        console.log("change");
        setText(event.target.value)
       }

       
       
       //total length

      // const TextLength = text.length; //length

      // const TWord = text.split(" ");
      // const TextWord = TWord.length;


    function size() {

    if(text==="Enter the text"){
        return 0;
    }else if(text==="Please enter any text") {
        return 0;
    }else if(text==="The Given Text Is Already In Lower Case") {
        return 0;
    }else if(text==="The Given Text Is Already In UpperCase") {
        return 0;
    }else{
        return (TextLength);
    }
}

        // total word

        function word() {

            if(text==="Enter the text"){
                return 0;
            }else if(text==="Please enter any text") {
                return 0;
            }else if(text==="The Given Text Is Already In Lower Case") {
                return 0;
            }else if(text==="The Given Text Is Already In UpperCase") {
                return 0;
            }else{
                return (TextWord);
            }
        }


        //preview

        function display() {

            if(text==="Enter the text"){
                return ;
            }else if(text==="Please enter any text") {
                return ;
            }else if(text==="The Given Text Is Already In Lower Case") {
                return ;
            }else if(text==="The Given Text Is Already In UpperCase") {
                return ;
            }else{
                return (text);
            }
        }


        //copy


return (
<div>
    <div className='container' style={{color:props.theam === "light"?"#434343":"#E4E4E4"}}>
            <span class="badge text-bg-danger"><h3>Type Any Thing</h3></span>
            <div className= "container mb-3">
                <label htmlFor="myText" className="form-label ">{props.textarea}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8" style={{color:props.theam === "light"?"#E4E4E4":"#434343",backgroundColor:props.theam ===  "light"?"#434343":"#E4E4E4"}}></textarea>
            </div>
        <div className='container my-3'>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-success mx-1" onClick={uppercase}>{props.button1}</button>
                <button type="button" className="btn btn-success mx-1" onClick={lowercase}>{props.button2}</button>
            </div>
        </div>

        <div className='container my-3'>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-success mx-1" onClick={reverse1}>{props.button3}</button>
                <button type="button" class="btn btn-success mx-1" onClick={reset}>{props.button4}</button>
            </div>
        </div>

    </div>

        <div className='container my-5' style={{color:props.theam === "light"?"black":"#E4E4E4"}}>
            <h3>Your Text Summery</h3>
            Total word is {word()}<br></br>
            Total Character is {size()}<br></br>
            Max Required time is {size() * 0.008} Minutes
        </div>

        <center>
        <div className="card text-bg-primary mb-3" style={{maxWidth:"50rem"}}>
            <div className="card-header text-bg-primary"><h3>{props.header_box}</h3></div>
            <div className="card-body">
                <p className="card-text">{display()}</p>
            </div>
        </div>
        </center>
</div>
  )
}
