import React from "react";
function Alert(props){
    return(
        <div>
               <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.type}</strong> {props.message}
               
            </div>
        </div>
    )
}


export default Alert;