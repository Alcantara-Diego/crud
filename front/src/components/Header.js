import { StyledHeader } from "./styled/Header.styled"

function Header(){
    return(

        <StyledHeader>
            <h2>Gestão de usuários</h2>

            <label for="pesquisa">Pesquisar por:</label>
            <select  name="pesquisa" id="pesquisa">
                <optgroup label="Atributo">
                    <option value="volvo">Nome</option>
                    <option value="saab">Telefone</option>
                    <option value="saab">Linguagem</option>
                    <option value="saab">Tipo de dev</option>
                    <option value="saab">Aluno/Candidato</option>
                </optgroup>
            </select>

            <input type="search" placeholder="Pesquisar"></input>

            <select  name="aluno/candidato" id="aluno/candidato">
                <optgroup label="Aluno/Candidato">
                    <option value="volvo">Aluno</option>
                    <option value="saab">Candidato</option>
                </optgroup>
            </select>

            <select  name="desenvolvedor" id="desenvolvedor">
                <optgroup label="Desenvolvedor">
                    <option value="volvo">Front-end</option>
                    <option value="saab">Back-end</option>
                    <option value="saab">Full-stack</option>
                </optgroup>
            </select>

            <select  name="linguagem" id="linguagem">
                <optgroup label="linguagem">
                    <option value="volvo">Javascript</option>
                    <option value="saab">PHP</option>
                    <option value="saab">Java</option>
                    <option value="saab">Phyton</option>
                    <option value="saab">C#</option>
                </optgroup>
            </select>

            <input type="button" value="Pesquisar"></input>



        </StyledHeader>
    )
}

export default Header