import styled from "styled-components";

export const StyledUsersList = styled.table`
    width: 100%;
    padding: 10px;
  
    
    background-color: white;
    border: 1px solid #80808080;

    margin: 10px auto;
    tr{
        text-align: center;
        background-color: #d8d8d8;
    }
    tr:nth-child(even){
        background-color: #ebebeb;
    }
    tr td, tr th{
        padding: 10px;
    }

    td .userInfoBtn{
        padding: 5px;
        color: white;
        background-color: blue;
        font-size: 1.1rem;
        border: 2px solid black;
        border-radius: 5px;
        cursor: pointer;
    }
    
`