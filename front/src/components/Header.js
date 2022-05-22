import { StyledHeader } from "./styled/Header.styled"

function Header(){
    return(

        <StyledHeader>
            <h2>Gestão de usuários</h2>

            <input type="radio" name="opc"
            id="findOpc" defaultChecked></input>
            <label className="userControlLabel" htmlFor="findOpc">Pesquisar</label>

            <input type="radio" name="opc"
            id="registerOpc"></input>
            <label className="userControlLabel"htmlFor="registerOpc">Cadastro</label>

        </StyledHeader>
    )
}

export default Header