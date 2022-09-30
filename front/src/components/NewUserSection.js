import { StyledNewUserSection } from './styled/NewUserSection.styled';

export default function NewUserSection (){

    return (
        <StyledNewUserSection>
            <h2>Novo usuário</h2>

            <form action="">

                <div className="student/candidateDiv">
                    <input type="radio" name="student/candidate" id="newStudent" defaultChecked></input><label for="newStudent">Aluno</label>
                    <input type="radio" name="student/candidate" id="newCandidate"></input><label for="newCandidate">Candidato</label>
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
                            <option value="newFront">Front-end</option>
                            <option value="newBack">Back-end</option>
                            <option value="newFull">Full-stack</option>
                        </optgroup>
                    </select>

                    <select  name="newLanguage" id="Newlanguage">
                        <optgroup label="linguagem">
                            <option value="newJavascript">Javascript</option>
                            <option value="newPHP">PHP</option>
                            <option value="newJava">Java</option>
                            <option value="newPhyton">Phyton</option>
                            <option value="newC">C#</option>
                        </optgroup>
                    </select>
                    
                </div>

                <input type="submit" value="Salvar"></input>
            </form>



        </StyledNewUserSection>
        
    )
}