import styled from "styled-components"
// import "../CSS/Name.css"
// import Typical from "react-typical"



function Name() {

    return (
        <DIV>
            <div class="detel">

                {/* <Typical steps={['I,M Bharat Sharma',8000,'A Full Stack Developer',2000]} loop={Infinity} wrapper="h1"/> */}
                <h1>I'M <span  id="user-detail-name"> Bharat Sharma</span></h1>

                <p id="user-detail-intro">This is my official Portfolio website to showcase my
                    all works related to <br /> web development and ui design. </p>
                <button id="resume-button-1">Resume</button>
            </div>
        </DIV>
    )

}



const DIV = styled.div`
    .detel{
    /* margin-left: 8%; */
    margin-top: 5%;
    padding-top: 5%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

button{
    font-size: 25px;
    padding: 15px 20px;
    font-weight: 600;
    color: white;
    background-color: #FBC02D;
    border: none;
}

.detel p{
    font-size: 18px;
    font-weight: 500;
}

.detel h1{
    font-size: 70px;
    color: #212121;
    margin-bottom: 20px;
}

span{
    color: #FBC02D;
    
}

.detel p{
    color: #555;
    line-height: 22px;
}

.detel a{
    background: #212121;
    padding: 10px 18px;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    display: inline-block;
    margin: 30px 0;
    border-radius: 5px;
}
`

export default Name