import styled from "styled-components"

import bharat from "../Images/Screenshot (259).png"

function Photo(){

    return (
       <DIV>
         <div className="Images">
            
            <img src={bharat} alt="" className="boy" class="home-img"/>
        </div>
       </DIV>
    )

}

export default Photo

const DIV = styled.div`
    .Images{
       
       margin-top:20%;
        /* border:1px solid black; */
    }
    .boy{
        width:100%;
        
        border-radius:0%;
        /* border:1px solid black; */
    }





`