import styled from "styled-components"
// import "../CSS/Project.css"
import myntra from "../Images/Screenshot (251).png"

function Project(){


    return(
        <DIV id="projects">
            <h1>Projects</h1>
            <div className="Project_grid">
                <div class="project-card">
                    <img src="https://i.ibb.co/2WRt80k/Screenshot-216.png" alt="" />
                    <h2 class="project-title">Survey monkey clone</h2>
                    <p  class="project-description">SurveyMonkey is brought to you by momentive.ai. Shape what's next with AI‑driven insights and experience management solutions built for the pace of modern business.</p>
                    <p  class="project-tech-stack">Tech stack: HTML,CSS,JavaScript</p>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <button class="project-github-link">Git Repo</button>
                        <button class="project-deployed-link">Live Site</button>
                    </div>

                </div>
                <div  class="project-card" >
                    <img src={myntra} alt="" />
                    <h2 class="project-title">Myntra Clone</h2>
                    <p class="project-description">Myntra is a e-commerce India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. </p>
                    <p class="project-tech-stack">Tech stack: HTML,CSS,React,ChakraUi,Redux</p>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <button class="project-github-link">Git Repo</button>
                        <button class="project-deployed-link">Live Site</button>
                    </div>

                </div>
                
            </div>
        </DIV>
    )

} export default Project

const DIV = styled.div`
    .Project_grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    /* grid-template-rows: 800px; */
   
    /* width: 100%; */
    /* border: 1px solid black; */
    gap: 20px 40px;
    text-align: center;
    align-items: center;
    /* padding: 0% 2%; */
    margin: 0px 4%;
    
}
h1{
    text-align:center;
}
.Project_grid > div{
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:500;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100%;
    padding: 5% 0%;
    height:600px;
    display:flex;
    flex-direction:column;
    justify-content:space-between

}



.Project_grid img{
    width: 90%;
    display: block;
    margin: auto;
}
.Project_grid button{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
}
`