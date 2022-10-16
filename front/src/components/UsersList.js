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

    }, []);


    function showAllInfo(obj){
        console.log(obj);
        const allUserData = document.getElementsByClassName("userInfoData");


        allUserData[0].innerHTML = obj.nome;
        allUserData[1].innerHTML = obj.tipodeusuario;
        allUserData[2].innerHTML = obj.linguagem;
        allUserData[3].innerHTML = obj.stack;
        allUserData[4].innerHTML = obj.email;
        allUserData[5].innerHTML = obj.telefone;




        toggleAllUserInfoVisibility();
    }

    function toggleAllUserInfoVisibility(){
        document.getElementById("userAllInfoSection").classList.toggle("show");
    }


    return (
        <StyledUsersList>

            <section id="userAllInfoSection">

                <button id="closeAllInfoSectionBtn" onClick={toggleAllUserInfoVisibility}><i className="fa fa-close"></i></button>

                <h1 className="userInfoData">Nome do usuário</h1>

                <div className="contentRow">
                    <div className="userInfoDiv">Tipo
                    <p className="userInfoData">Candidato</p>
                    </div>
                    <div className="userInfoDiv">Linguagem
                    <p className="userInfoData">Javascript</p>
                    </div>
                    <div className="userInfoDiv">Desenvolvedor
                    <p className="userInfoData">fullStack</p>
                    </div>
                </div>


                <div className="contentRow">
                    <div className="userInfoDiv">E-mail
                    <p className="userInfoData">Email@email.com.br</p>
                    </div>
                    
                    <div className="userInfoDiv">Telefone
                    <p className="userInfoData">11 99999-9999</p>
                    </div>
                </div>

            </section>
            
            <tr>
                <th>Nome</th>
                <th>Linguagem</th>
                <th>Desenvolvedor</th>
                <th>Tipo</th>
                <th></th>
            </tr>

            {/* <tr>
                
                <td>Diego Alcântara</td>
                <td>Javascript</td>
                <td>Front-end</td>
                <td>Aluno</td>
                <td><button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                    <i className="fa-solid fa-eye"></i>
                    </button>
                </td>
            </tr> */}

            {/* <tr>
                <td>Dev 2</td>
                <td>PHP</td>
                <td>Full-stack</td>
                <td>Candidato</td>
                <td>
                    <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                    <i className="fa-solid fa-eye"></i>
                    </button>
                </td>
            </tr> */}

            {/* <tr>
                <td>Dev 3</td>
                <td>Java</td>
                <td>Back-end</td>
                <td>Candidato</td>
                <td>
                    <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                    <i className="fa-solid fa-eye"></i>
                    </button>
                </td>
            </tr> */}

            {dbRequest && dbRequest.map((obj) => {

                return(
                    <tr>
                        <td>{obj.nome}</td>
                        <td>{obj.linguagem}</td>
                        <td>{obj.stack}</td>
                        <td>{obj.tipodeusuario}</td>
                        <td>
                            <button className="userInfoBtn" onClick={() => {showAllInfo(obj)}}>
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