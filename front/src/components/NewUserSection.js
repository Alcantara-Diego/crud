import { StyledNewUserSection } from './styled/NewUserSection.styled';

export default function NewUserSection (){

    return (
        <StyledNewUserSection>
            <h2>Novo usuário</h2>

            <form action="/add" method="POST">

                <div className="studentOrCandidateDiv">
                    <input type="radio" name="studentOrCandidate" id="newStudent" value="Aluno"></input><label for="Aluno">Aluno</label>

                    <input type="radio" name="studentOrCandidate" id="newCandidate" value="Candidato" defaultChecked></input><label for="Candidato">Candidato</label>
                </div>

                <label for="newName">Nome</label>
                <input name="newName" type="name"></input>
                <label for="newEmail">E-mail</label>
                <input name="newEmail" type="e-mail"></input>
                <label for="newTelephone">Telefone</label>
                <input name="newTelephone" type="number"></input>


                <div className="selections">

                    <select  name="newStack" id="newStack">
                        <optgroup label="Desenvolvedor" >
                            <option value="FrontEnd">Front-end</option>
                            <option value="BackEnd">Back-end</option>
                            <option value="FullStack">Full-stack</option>
                        </optgroup>
                    </select>

                    <select  name="newLanguage" id="Newlanguage">
                        <optgroup label="linguagem">
                            <option value="Javascript">Javascript</option>
                            <option value="PHP">PHP</option>
                            <option value="Java">Java</option>
                            <option value="Phyton">Phyton</option>
                            <option value="C#">C#</option>
                        </optgroup>
                    </select>
                    
                </div>

                <input type="submit" value="Salvar"></input>
            </form>



        </StyledNewUserSection>
        
    )
}