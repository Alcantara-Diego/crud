import { StyledSidebar } from "./styled/Sidebar.styled"


function Sidebar(){


    

        function toggleList(listType){

            switch (listType) {
                case "students":
                    
                    let studentsOptionsList = document.querySelector("#studentsOptionsList");


                    let showingStudentsList = document.getElementsByClassName("showStudentsList")[0];

                    if(showingStudentsList){
                        studentsOptionsList.classList.remove("showStudentsList");
                    } else {
                        studentsOptionsList.classList.add("showStudentsList");
                    }
                    break;

                case "candidates":
                    
                    let candidatesOptionsList = document.querySelector("#candidatesOptionsList");

                    let showingCandidatesList = document.getElementsByClassName("showCandidatesList")[0];

                    console.log(showingCandidatesList)


                    if(showingCandidatesList){
                        candidatesOptionsList.classList.remove("showCandidatesList");
                    } else {
                        candidatesOptionsList.classList.add("showCandidatesList");
                    }
                    break;

            
                default:
                    break;
            }
            
            

            
        }



    return (
        <StyledSidebar>

            <li className="sidebarGroup">

            <div className="sidebarGroupHeader">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i> Pesquisar
            </div>

            <ul className="sidebarOptionsList">

                <li className="sidebarOption">Novo aluno</li>
                <li className="sidebarOption">Lista de alunos</li>

            </ul>
            </li>

            <li className="sidebarGroup">

                <div id="studentOptionsGroup" className="sidebarGroupHeader" onClick={()=>{toggleList("students")}}>
                    <i className="fa-solid fa-user-graduate"></i> Alunos
                </div>

                <ul id="studentsOptionsList" className="sidebarOptionsList">

                    <li className="sidebarOption">Novo aluno</li>
                    <li className="sidebarOption">Lista de alunos</li>
                
                </ul>
            </li>

            <li className="sidebarGroup">

                <div className="sidebarGroupHeader" onClick={()=>{toggleList("candidates")}}>
                    <i className="fa-solid fa-user-group"></i> Candidatos
                </div>

                <ul id="candidatesOptionsList" className="sidebarOptionsList">

                    <li className="sidebarOption">Novo candidato</li>
                    <li className="sidebarOption">Lista de candidatos</li>
                
                </ul>

            </li>

        </StyledSidebar>
    )
}

export default Sidebar