import { StyledSidebar } from "./styled/Sidebar.styled"


function Sidebar(){
    return (
        <StyledSidebar>

            <li className="sidebarGroup">

                <div className="sidebarGroupHeader"><i className="fa-solid fa-user-graduate"></i> Alunos</div>

                <ul className="sidebarOptionsList">
                    <li>Novo aluno</li>
                    <li>Lista de alunos</li>
                
                </ul>
            </li>

            <li className="sidebarGroup">
                <div class="sidebarGroupHeader"><i className="fa-solid fa-user-group"></i> Candidatos</div>

                <ul className="sidebarOptionsList">
                    <li>Novo candidato</li>
                    <li>Lista de candidatos</li>
                
                </ul>

            </li>

        </StyledSidebar>
    )
}

export default Sidebar