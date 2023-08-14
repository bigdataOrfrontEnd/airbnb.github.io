import { styled } from "styled-components";

export const TabsWrapper = styled.div`
display:flex;

.itemm{
    margin: 0 5px;
    border: 1px solid #ddd;
    padding: 10px 20px;
    cursor: pointer;
&:hover{
    /* background-color: #474747; */
}

}
.active{
    background-color: #494949;
}
`;
