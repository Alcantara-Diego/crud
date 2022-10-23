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

    #userAllInfoSection.show{
        top: 50%;
        left: 50%;
    }
    #userAllInfoSection{
        position: absolute;
        top: -110%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: .5s;

        background-color: white;
        border: 2px solid black;
        border-radius: 10px;
        padding: 25px 20px;
        text-align: center;
        z-index: 100;

        #closeAllInfoSectionBtn{
            position: absolute;
            top: 13px;
            right: 18px;

            height: 17px;
            width: 17px;
            font-size: 1.2rem;

            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            background: none;
            border: none;
            color:grey;

            cursor:pointer;
        }

        .contentRow{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .userInfoDiv{
                margin: 10px;
            }
        }
        .userInfoData{
            font-weight: bold;
        }

        h1{
            margin-bottom: 10px;
            font-size: 1.4rem
        }
    }
    
`