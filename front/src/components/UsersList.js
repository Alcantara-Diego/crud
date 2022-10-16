import { useEffect, useState } from "react";
import { StyledUsersList } from './styled/UsersList.styled'

function UsersList(){

    let [dbRequest, setDbRequest] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3001/api").then(response => response.json()).then(data => {
            console.log("resposta do useffect")
            console.log(data);
            setDbRequest(data);
        })

    }, [])


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

            {dbRequest && dbRequest.map((obj) => {

                return(
                    <tr>
                        <td>{obj.nome}</td>
                        <td>{obj.linguagem}</td>
                        <td>{obj.stack}</td>
                        <td>{obj.tipodeusuario}</td>
                        <td>
                            <button className="userInfoBtn">
                            <i className="fa-solid fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                )}
            )}
            

        </StyledUsersList>

    )
}

export default UsersList;