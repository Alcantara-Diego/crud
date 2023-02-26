import styled from "styled-components";

export const StyledSidebar = styled.ul`
    border-left: 1px solid white;
    heigh: 100%;
    width: 300px;
    list-style: none;
    background-color: #171717e8;

    .sidebarHeader{

        padding: 16px 8px;
        background-image: linear-gradient(to top,#2b2b2b,#545454);
        border-bottom: 2px solid gainsboro;

        .sidebarHeaderContent{
            display: flex;
            flex-direction: row;
            align-items: center;

            i{
                margin-right: 7px;
            }
        }
        p{
            font-size: 0.8rem;
        }
    }

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