import styled from "styled-components"
// import "../CSS/Skills.css"

function Skills() {

    return (
        <DIV>
            <div className="Skill_main"  id="skills">
                <h1>Skills</h1>
                <div className="Skill_grid">
                    <div class="skills-card">
                        <div class="skills-card-img" className="Img_div"><img src="https://i.ibb.co/VDq2CpQ/icons8-html-5-100-1.png" alt="" /> <p>Front End</p></div>

                        <ul class="skills-card-name">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Redux</li>
                        </ul>
                    </div>

                    <div class="skills-card">
                        <div class="skills-card-img" className="Img_div"><img src="https://i.ibb.co/mvGn5yx/icons8-hypertext-markup-language-programming-for-web-pages-and-application-100.png" alt="" /><p>Back End</p></div>

                        <ul class="skills-card-name">
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>MongoDB</li>
                            <li>restful APIs</li>
                            <li>NPM</li>
                        </ul>
                    </div>

                    <div class="skills-card">
                        <div class="skills-card-img" className="Img_div"><img src="https://i.ibb.co/VxgWdSH/icons8-flow-chart-100.png" alt="" /><p>DSA</p></div>

                        <ul class="skills-card-name">
                            <li>Strings</li>
                            <li>Arrays</li>
                            <li>Two Pointer</li>
                            <li>Linked List</li>
                            <li>Stack & Queue</li>
                        </ul>
                    </div>

                    <div class="skills-card">
                        <div class="skills-card-img" className="Img_div"><img src="https://i.ibb.co/nknx3qv/icons8-view-more-100.png" alt="" /><p>Other</p></div>

                        <ul class="skills-card-name">
                            <li>GIT</li>
                            <li>Github</li>
                            <li>Netlify</li>
                            <li>AWS</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                </div>
            </div>
        </DIV>
    )

}

export default Skills

const DIV = styled.div`
    .Skill_grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 4%;

}
.Skill_grid div{
    /* border: 1px solid black; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.Skill_grid img{
    display: block;
    margin: auto;
    margin-left: 50%;
    background-color: #FBC02D;
    width: 10%;
    margin-bottom: 0px;
    padding-bottom: 0px;
    /* border: 1px solid black; */
}
.Skill_main{
    /* border: 1px solid black; */
    margin: 4% 18%;
    
    
}
.Skill_main h1{
    text-align: center;
}
.Skill_grid ul{
    list-style: none;
    font-size: 18px;
    height: 210px;
    font-weight: 500;
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.Img_div{
    background-color: #FBC02D;
    padding: 1%;
}
.Img_div p{
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-top: 0px;
    padding-top: 0px;
    /* border: 1px solid black; */
    /* margin-left: 45%; */
    text-align: center;
    margin-left: 10%;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

@media screen and (max-width:815px) {
    .Skill_grid{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 4%;

    }
}
`