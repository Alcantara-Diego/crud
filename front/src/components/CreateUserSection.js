import Header from './Header';
import FormCreateUser from './FormCreateUser';

import { StyledCreateUserSection } from './styled/CreateUserSection.styled';

export default function CreateUserSection(){
    return(
        <StyledCreateUserSection>
            <Header/>
            <FormCreateUser/>
        </StyledCreateUserSection>
    )
}