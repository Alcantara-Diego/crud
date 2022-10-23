import { StyledSidebar } from "./styled/Sidebar.styled"


function Sidebar(){

    function showHideSections(sectionId){
        document.getElementById(sectionId). classList.toggle("showSection");

    }

    return (
        <StyledSidebar>

            <li className="sidebarGroup">

                <div className="sidebarGroupHeader">
                    <i class="fa-sharp fa-solid fa-magnifying-glass"></i> Pesquisar usuário
                </div>

            </li>

            <li className="sidebarGroup" onClick={(() => showHideSections("newUserSection"))}>

                <div className="sidebarGroupHeader">
                    <i className="fa-solid fa-plus"></i> Novo usuário
                </div>

            </li>

            <li className="sidebarGroup">

                <div className="sidebarGroupHeader">
                    <i className="fa-solid fa-user-graduate"></i> Ver alunos
                </div>

            </li>

            <li className="sidebarGroup">

                <div className="sidebarGroupHeader">
                    <i className="fa-solid fa-user-group"></i> Ver candidatos
                </div>

            </li>

        </StyledSidebar>
    )
}

export default Sidebar