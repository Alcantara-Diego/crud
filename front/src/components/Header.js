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
        const selectedOption = document.getElementById(`${optionsList.value}Form`);

        // Hide every list before showing the selected one in order to avoid bugs.
        hideEveryList();


        //Show the selected list
        selectedOption.classList.add("showAdvancedSearchOption");

        console.log(window.location.search)
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
            <form action="/" method="GET" id="devForm" className="advancedSearchOption">
                <select  name="stack" >
                    <optgroup label="Desenvolvedor" >
                        <option value="devDefault">Selecione</option>
                        <option value="frontEnd">Front-end</option>
                        <option value="backEnd">Back-end</option>
                        <option value="fullStack">Full-stack</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* Search by programming language */}
            <form action="/" method="GET" id="languageForm" className="advancedSearchOption">
                <select  name="language">
                    <optgroup label="linguagem">
                        <option value="languageDefault">Selecione</option>
                        <option value="javascript">Javascript</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="phyton">Phyton</option>
                        <option value="c#">C#</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* Search by type of user */}
            <form action="/" method="GET" id="studentOrCandidateForm" className="advancedSearchOption">
                <select name="usuario">
                    <optgroup label="Aluno/Candidato">
                        <option value="userDefault">Selecione</option>
                        <option value="student">Aluno</option>
                        <option value="candidate">Candidato</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* Search by e-mail */}
            <form action="/" method="GET" id="emailForm" className="advancedSearchOption">
                <input type="e-mail"></input>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* Search by name */}
            <form action="/" method="GET" id="nameForm" className="advancedSearchOption">
                <input type="name"></input>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* Search by telephone */}
            <form action="/" method="GET" id="telephoneForm" className="advancedSearchOption">
                <input type="tel"></input>
                <input type="submit" value="Pesquisar"></input>
            </form>



        </StyledHeader>
    )
}

export default Header