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


            {/* Main search option */}
            <div className="searchOptionsDiv">
                <label for="searchOptions">Pesquisar por:</label>
                <select  name="searchOptions" id="searchOptions" onChange={searchParameters}>
                    <optgroup label="attribute">
                        <option value="language">Linguagem</option>
                        <option value="dev">Tipo de dev</option>
                        <option value="studentOrCandidate">Aluno/Candidato</option>
                        <option value="email">E-mail</option>
                        <option value="name">Nome</option>
                        <option value="telephone">Telefone</option>
                    </optgroup>
                </select>
            </div>


            {/* Search by stack */}
            <select  name="devSelectGroup" id="devSelectGroup" className="advancedSearchOption">
                <optgroup label="Desenvolvedor" >
                    <option value="devDefault">Selecione</option>
                    <option value="volvo">Front-end</option>
                    <option value="saab">Back-end</option>
                    <option value="saab">Full-stack</option>
                </optgroup>
            </select>

            {/* Search by programming language */}
            <select  name="languageSelectGroup" id="languageSelectGroup" className="advancedSearchOption">
                <optgroup label="linguagem">
                    <option value="languageDefault">Selecione</option>
                    <option value="volvo">Javascript</option>
                    <option value="saab">PHP</option>
                    <option value="saab">Java</option>
                    <option value="saab">Phyton</option>
                    <option value="saab">C#</option>
                </optgroup>
            </select>

            {/* Search by type of user */}
            <select name="studentOrCandidateSelectGroup" id="studentOrCandidateSelectGroup" className="advancedSearchOption">
                <optgroup label="Aluno/Candidato">
                    <option value="userDefault">Selecione</option>
                    <option value="student">Aluno</option>
                    <option value="candidate">Candidato</option>

                </optgroup>

            </select>

            {/* Search by e-mail */}
            <div id="emailSelectGroup" className="advancedSearchOption">
                <input type="e-mail"></input>
                <input type="button" value="Pesquisar"></input>
            </div>

            {/* Search by name */}
            <div id="nameSelectGroup" className="advancedSearchOption">
                <input type="name"></input>
                <input type="button" value="Pesquisar"></input>
            </div>

            {/* Search by telephone */}
            <div id="telephoneSelectGroup" className="advancedSearchOption">
                <input type="tel"></input>
                <input type="button" value="Pesquisar"></input>
            </div>



        </StyledHeader>
    )
}

export default Header