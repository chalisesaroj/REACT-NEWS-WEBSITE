import React, { useState, useEffect } from "react";
import Volume from "./volume";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "./alert";
function ScripSearch() {
    const [btnText, setBtnText] = useState("Enable light mode")
    const toggleBackground = (previousBackground) => {
        setStyle({
            color: mystyle.color === "black" ? "white" : "black",
            backgroundColor: mystyle.backgroundColor === "black" ? "white" : "black"
        });
        setBtnText(btnText === "Enable black mode" ? "Enable light mode" : "Enable black mode");
    }
    const [alertmessage,setAlertmessage]=useState("");
    const [mystyle, setStyle] = useState({
        color: "white",
        backgroundColor: "black",
        border: "solid"
    })

    const [value, setValue] = useState("");
    const [number, setNumber] = useState(8);
    const [result, setResult] = useState("");
    const [alert, setAlert] = useState(false);
    const isPalindrome = (str) => {
        // Remove any non-alphanumeric characters and convert to lowercase
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // Reverse the cleaned string
        const reversedStr = cleanedStr.split('').reverse().join('');
        // Check if the reversed string is equal to the original cleaned string
        return cleanedStr === reversedStr;
    };
    useEffect(() => {
      setInterval(()=>{
        document.title="I Love you"
      },1500)
      setInterval(()=>{
        document.title="I cannot live without you"
      },1000)
    }, []);


    useEffect(() => {
        if (isPalindrome(value)) {
            setResult("Palindrome");
        } else {
            setResult("Not Palindrome");
        }
    }, [value]);
    function arraytrial(...nums) {
        console.log(nums);
    }
    return (
        <div>
      {alert &&     <Alert type="Success!!" message={alertmessage}></Alert>}
            <div style={mystyle}>


                <p></p>
                <input value={value} onChange={(e) => {
                    setValue(e.target.value);
                
                }}></input>

                {/* <button onClick={setNumber(number+1)}>Increase</button> */}
                <p>the number of letter entered is {value.length}</p>
                {result}
                <p>{number}</p>
                <button onClick={() => {
                    setNumber(number - 1);
                }}>Decrease</button>

                <button onClick={() => setNumber(number + 1)}>Increase</button>
                <button onClick={() => arraytrial(2, 4, 6, 7)}>arraytrial</button>
                <div className="form-check form-switch">
                    <input className="form-check-input" onChange={()=>{
                        toggleBackground();
                        setAlert(true);
                       setAlertmessage(btnText === "Enable black mode" ? "Black mode enabled" : "Light mode enabled");
                        setTimeout(()=>{
                            setAlert(false)
                        },2000)}} type="checkbox" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
                </div>
            </div>
        </div>


    );
}
export default ScripSearch;