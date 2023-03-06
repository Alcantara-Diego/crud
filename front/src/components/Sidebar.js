import { StyledSidebar } from "./styled/Sidebar.styled"


function Sidebar(){

    function showHideSections(sectionId){
        document.getElementById(sectionId).classList.toggle("showSection");

    }

    function getAll(type){
        if(type === "students"){
            
            let form = document.getElementById("getAllStudentsForm");
            form.submit();

           } else if(type === "candidates"){

        let form = document.getElementById("getAllCandidatesForm");
        form.submit();
       }
    }

    return (
        <StyledSidebar>

            <li className="sidebarHeader">

                
                <div class="sidebarHeaderContent">
                    <i className="fa-solid fa-user"></i>
                    <div class="userInfo">
                        <p>Bem-vindo</p>
                        <h4>Usuario123</h4>
                    </div>
                </div>

            </li>
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

                <form action="/search" method="GET" id="getAllStudentsForm">
                    <select name="usuario" className="hide">
                        <option value="aluno">Aluno</option>
                    </select>
                    <div className="sidebarGroupHeader" onClick={(() => getAll("students"))}>
                        <i className="fa-solid fa-user-graduate"></i> Ver alunos
                    </div>
                </form>

            </li>

            <li className="sidebarGroup">

                <form action="/search" method="GET" id="getAllCandidatesForm">

                    <select name="usuario" className="hide">
                        <option value="candidato">Candidato</option>
                    </select>
                    <div className="sidebarGroupHeader" onClick={(() => getAll("candidates"))}>
                        <i className="fa-solid fa-user-group"></i> Ver candidatos
                    </div>
                </form>

            </li>

        </StyledSidebar>
    )
}

export default Sidebar