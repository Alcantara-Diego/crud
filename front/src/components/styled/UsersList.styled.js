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
        bottom: 0;
    }
    #userAllInfoSection{
        position: absolute;
        bottom: -100%;
        left 0;
        right: 0;

        width: 100%;
        height: 100%;
        transition: 1.0s;

        background-color: white;
        border: 1px solid #80808080;
        padding: 25px 20px;
        text-align: center;
        z-index: 100;

        #closeAllInfoSectionBtn{
            position: absolute;
            top: 25px;
            right: 28px;

            height: 17px;
            width: 17px;
            font-size: 1.4rem;

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

        .userAllInfoBtn{
            padding: 5px;
            width: 95px;
            color: white;
            border: none;
            font-weight: 500;
            cursor: pointer;
            
        }

        .editInput{
            display: none;
        }
        .confirmCancelBtnDiv{
            display: none;
        }
        #editBtn{
            background-color: #007bff;
        }
        #cancelBtn{
            background-color: #dc3545;
        }
        #saveBtn{
            background-color: #28a745;
        }
    }
    
`