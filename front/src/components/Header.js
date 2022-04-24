import { StyledHeader } from "./styled/Header.styled"

function Header(){
    return(

        <StyledHeader>
            <h2>Registro de usuário</h2>

            <input type="radio" name="opc"
            id="registerOpc" defaultChecked></input>
            <label htmlFor="registerOpc">Cadastro</label>
        </StyledHeader>
    )
}

export default Header