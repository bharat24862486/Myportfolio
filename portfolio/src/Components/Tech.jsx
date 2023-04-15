
import styled from "styled-components"


function Tech() {

    return (
        <DIV>
            <div className="Tech_main">

                <div className="slider" >
                    <div className="slider-track">
                        <div className="slide">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide" >
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide" >
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                        </div>
                        <div className="slide" >
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide" >
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide" >
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide" >
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                        </div>
                        <div className="slide" >
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide" >
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </DIV>
    )

}

export default Tech

const DIV = styled.div`
    .slider{
    /* height: 250px; */
    margin: auto;
    
    width: 90%;
    display: grid;
    place-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
    border:1px solid black;
    
}
.slider-track{
    display: flex;
    width: calc(250px * 16);
    animation: scroll 40s linear infinite;

}
 .slide{
    height: 200px;
    width: 250px;
    display: flex;
    align-items: center;
    padding: 15px;
    perspective: 100px;
}
.slider-track img{
    width: 50%;
    transition: transform 1s;
}
.slider-track img:hover{
    transform: translateZ(20px);
}
@keyframes scroll {
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(calc(-250px * 8));
    }
} */
.slider ::before, .slider::after{
    background-color: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    content: '';
    height: 100%;
    
    width: 15%;
    z-index: 2;
}
.slider::before{
    left: 0;
    top: 0;
}
.slider::after{
    
    transform: rotateZ(180deg);
}
.Tech_main{
    text-align: center;
}
.Tech_main h1{
    font-size: 60px;
}

.Tech_P{
    display: flex;
    align-items: center;
    display: block;
}
.Tech_P span{
    color: black;
    text-align: center;

}
`