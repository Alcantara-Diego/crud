import { StyledFormCreateUser } from "./styled/FormCreateUser.styled"

function FormCreateUser(){

    return(

        <StyledFormCreateUser id="createUserForm">
            
            <p>Nome:</p>
            <input type="name"></input>

            <p>Telefone:</p>
            <input type="number"></input>
    
            <p>Email:</p>
            <input type="email"></input>
            <br></br>
        
            <button type="submit">Salvar</button>
        </StyledFormCreateUser>
    )
}

export default FormCreateUser