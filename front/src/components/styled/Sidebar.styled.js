import styled from "styled-components";

export const StyledSidebar = styled.ul`
    border-left: 2px solid white;
    heigh: 100%;
    width: 300px;
    list-style: none;
    background-color: #171717e8;

    .sidebarGroupHeader{
        transition: .2s;
        &:hover{
            background-color: #3c3c3c;
        }
        

    }
    

    li{
        padding: 8px;
        color: gainsboro;
        Border-bottom: 1px solid gainsboro;
        overflow: hidden;
        
    }
    



    .sidebarOptionsList{
        margin-top: 8px;
        height: 90px;
        display: none;

    }
    .sidebarOptionsList.showStudentsList, .sidebarOptionsList.showCandidatesList{
        display: list-item;
    }

    .sidebarOption{
        transition: .2s;
        &:hover{
            background-color: #3c3c3c;
        }
    }

`