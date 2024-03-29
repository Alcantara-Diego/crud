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

        
    }

    async function printInfo(){

        let response = await fetch("http://localhost:3001/api");

        let getContent = await response.json()

        console.log(getContent);
    }

    


    return(

        <StyledHeader>
        <h2>Gestão de usuários</h2>


            {/* Main search option */}
            <div className="searchOptionsDiv">
                <label for="searchOptions">Pesquisar por:</label>
                <select  name="searchOptions" id="searchOptions" onChange={searchParameters}>
                    <optgroup label="attribute">
                    <option value="vazio">Selecione</option>
                        <option value="linguagem">Linguagem</option>
                        <option value="stack">Tipo de dev</option>
                        <option value="usuario">Aluno/Candidato</option>
                        <option value="email">E-mail</option>
                        <option value="nome">Nome</option>
                        <option value="telefone">Telefone</option>
                    </optgroup>
                </select>
            </div>


            {/* Search by stack */}
            <form action="/search" method="GET" id="stackForm" className="advancedSearchOption">
                <select  name="stack" >
                    <optgroup label="Desenvolvedor" >
                        <option value="vazio">Selecione</option>
                        <option value="frontEnd">Front-end</option>
                        <option value="backEnd">Back-end</option>
                        <option value="fullStack">Full-stack</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar" onClick={printInfo}></input>
            </form>

            {/* Search by programming language */}
            <form action="/search" method="GET" id="linguagemForm" className="advancedSearchOption">
                <select  name="linguagem">
                    <optgroup label="linguagem">
                        <option value="vazio">Selecione</option>
                        <option value="javascript">Javascript</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="phyton">Phyton</option>
                        <option value="c#">C#</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar" onClick={printInfo}></input>
            </form>

            {/* Search by type of user */}
            <form action="/search" method="GET" id="usuarioForm" className="advancedSearchOption">
                <select name="usuario">
                    <optgroup label="Aluno/Candidato">
                        <option value="vazio">Selecione</option>
                        <option value="aluno">Aluno</option>
                        <option value="candidato">Candidato</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* Search by e-mail */}
            <form action="/search" method="GET" id="emailForm" className="advancedSearchOption">
                <input type="e-mail" name="email"></input>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* Search by name */}
            <form action="/search" method="GET" id="nomeForm" className="advancedSearchOption">
                <input type="name" name="nome"></input>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* Search by telephone */}
            <form action="/search" method="GET" id="telefoneForm" className="advancedSearchOption">
                <input type="tel" name="telefone"></input>
                <input type="submit" value="Pesquisar"></input>
            </form>



        </StyledHeader>
    )
}

export default Header