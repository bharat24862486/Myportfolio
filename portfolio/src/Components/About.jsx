import styled from "styled-components"

function About(){

    return(
        <DIV>
            <div className="main" id="about" class="about section">
            <h1>About me</h1>

            <div className="Flex">
                <img src="https://img.freepik.com/premium-vector/boy-coding-with-pad-illustration_418302-2380.jpg?w=2000" alt="" />
                <div>
                    <p>I am Full Stack Developer with a passion for building beautiful and user-friendly websites. I have great understanding of both front-end and back-end, and I am exicited for put mu skills to use in a professional. I like travelling and learning new things, and I am confident that I can be a valuable asset for your organization. </p>
                </div>
            </div>

        </div>
        </DIV>
    )

}

export default About

const DIV = styled.div`
    .main{
    margin-top: 20%;
    text-align: center;
    background-color: #FBC02D;
    height: 400px;
    padding: 2% 0px;
    color: white;
}
h1{
    font-size: 40px;
}
.Flex{
    display: flex;
    justify-content: center;
    /* border: 1px solid black; */
    
    align-items: center;
    margin-top: 5%;
    
}
.Flex img{
    border-radius: 50%;
    width: 15%;
    /* margin-left: 2%; */
    margin-right: 2%;
    /* background-color: #FBC02D; */
}
.Flex div{
    text-align: left;
    background-color: white;
    color: black;
    /* border: 1px solid black; */
    /* margin: 0px 80px; */
    margin-left: 2%;
    border-radius: 10px;
    padding: 2%;
    width: 40%;
    /* margin-top: 5%; */
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    font-weight: 500;
    /* height: 150px; */
}




@media screen  and (max-width:815px){
    .main{
        height:530px;
    }
    .Flex{
        flex-direction:column;
        justify-content:space-around;
        /* align-items: */
    }
    .Flex div{
        margin-top:4%;
        width: 80%;

    }
}
`