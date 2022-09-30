import { StyledHeader } from "./styled/Header.styled"

function Header(){

    function hideEveryList(){

        const advancedSearchOptions = document.getElementsByClassName("advancedSearchOption");

        for( let i=0; i < advancedSearchOptions.length; i++){
            advancedSearchOptions[i].classList.remove(("showAdvancedSearchOption"));
        }
    }
    

    function searchParameters(){
        const optionsList = document.getElementById("searchOptions");

        // Get the selected value from the list of options.
        const selectedOption = document.getElementById(`${optionsList.value}SelectGroup`);

        // Hide every list before showing the selected one in order to avoid bugs.
        hideEveryList();


        //Show the selected list
        selectedOption.classList.add("showAdvancedSearchOption");
    }

    return(

        <StyledHeader>
            <h2>Gestão de usuários</h2>


            {/* <div className="student/candidateDiv">
                <input type="radio" name="student/candidate" defaultChecked></input><label for="student">Aluno</label>
                <input type="radio" name="student/candidate"></input><label for="candidate">Candidato</label>
            </div> */}


            <label for="searchOptions">Pesquisar por:</label>
            <select  name="searchOptions" id="searchOptions" onChange={searchParameters}>
                <optgroup label="attribute">
                    <option value="lenguage">Linguagem</option>
                    <option value="dev">Tipo de dev</option>
                    <option value="studentOrCandidate">Aluno/Candidato</option>
                    <option value="email">E-mail</option>
                    <option value="name">Nome</option>
                    <option value="telephone">Telefone</option>
                </optgroup>
            </select>


            <select  name="devSelectGroup" id="devSelectGroup" className="advancedSearchOption">
                <optgroup label="Desenvolvedor" >
                    <option value="volvo">Front-end</option>
                    <option value="saab">Back-end</option>
                    <option value="saab">Full-stack</option>
                </optgroup>
            </select>

            <select  name="lenguageSelectGroup" id="lenguageSelectGroup" className="advancedSearchOption">
                <optgroup label="linguagem">
                    <option value="volvo">Javascript</option>
                    <option value="saab">PHP</option>
                    <option value="saab">Java</option>
                    <option value="saab">Phyton</option>
                    <option value="saab">C#</option>
                </optgroup>
            </select>

            <select name="studentOrCandidateSelectGroup" id="studentOrCandidateSelectGroup" className="advancedSearchOption">
                <optgroup label="Aluno/Candidato">
                    <option value="student">Aluno</option>
                    <option value="candidate">Candidato</option>

                </optgroup>

            </select>

            <input type="button" value="Pesquisar"></input>



        </StyledHeader>
    )
}

export default Header