import Header from './Header';
import UsersList from './UsersList';

import { StyledSearchUserSection } from './styled/SearchUserSection.styled';

export default function CreateUserSection(){
    return(
        <StyledSearchUserSection>
            <Header/>
            <UsersList/>
            
        </StyledSearchUserSection>
    )
}