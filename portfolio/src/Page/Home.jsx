import styled from "styled-components"
import About from "../Components/About"
import Name from "../Components/Name"
import Navbar from "../Components/Navbar"
// import Photo from "../Components/Photo"
import Project from "../Components/Project"
import Skills from "../Components/Skills"
import Tech from "../Components/Tech"
import Photo from "../Components/Photo"


function Home() {


    return (
        <div>

            <Navbar />
            
            <DIVS >
                <div className="FLEX"  id="home">
                
                <Photo />
                <Name />
                </div>
            </DIVS>
            <About />
            <Skills />
            <Tech />
            <Project />
        </div>

    )


}

const DIVS = styled.div`
.FLEX{
    display:flex;
    justify-content:space-around;
    align-items:center;
}
   

    @media screen and (max-width:1092px){
        .FLEX{
            flex-direction:column;
        }
    }
`

export default Home