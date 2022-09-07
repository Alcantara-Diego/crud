import { StyledUsersList } from './styled/UsersList.styled'

function UsersList(){
    return (
        <StyledUsersList>
            
            <tr>
                <th>Nome</th>
                <th>Linguagem</th>
                <th>Desenvolvedor</th>
                <th>Tipo</th>
                <th></th>
            </tr>
            <tr>
                
                <td>Diego Alcântara</td>
                <td>Javascript</td>
                <td>Front-end</td>
                <td>Aluno</td>
                <td><button className="userInfoBtn">
                    <i className="fa-solid fa-eye"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Dev 2</td>
                <td>PHP</td>
                <td>Full-stack</td>
                <td>Candidato</td>
                <td>
                    <button className="userInfoBtn">
                    <i className="fa-solid fa-eye"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Dev 3</td>
                <td>Java</td>
                <td>Back-end</td>
                <td>Candidato</td>
                <td>
                    <button className="userInfoBtn">
                    <i className="fa-solid fa-eye"></i>
                    </button>
                </td>
            </tr>
            

        </StyledUsersList>

    )
}

export default UsersList;