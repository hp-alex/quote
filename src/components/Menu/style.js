import styled from 'styled-components'

export const MenuView = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100%;
  width: ${({active})=>active?'15%':'0%'};
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  background-color: rgba(150,150,150,0.2);

  @media (max-width: 480px) {
      width: ${({active})=>active? '100%': '0%'};
      background-color: rgba(150,150,150,0.9);
  };
  @media only screen and (min-width: 481px) and (max-width: 768px) {
      width: ${({active})=>active? '30%': '0%'};
      background-color: rgba(150,150,150,0.9);
  };
`;
export const Button = styled.button`
    background-color: transparent;
    color: white;
    text-align: left;
    border: none;
    padding: 0px 10px;
    :hover{
        background-color: rgba(150,150,150,0.5);
        font-size: 16px;
    }
    @media (max-width: 480px) {
        text-align: center;
        font-size: 25px;
        :hover {
            font-size: 25px;
        }
    }
`;
export const TopMenu = styled.div``;
export const FooterMenu = styled.div``;
export const CenterMenu = styled.div`
    height: 70vh;
    display: grid;
    grid-template-rows: repeat(7,1fr);

`;
export const MenuItems = styled.div`
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    height: 100%;
    box-sizing: border-box;  
`;
export const MenuAction = styled.button`
    height: 100%;
    outline: none;
    background-color: transparent;
    border: none;
    color: white;
    :hover{
        background-color: rgba(150,150,150,0.5);
    }
`;
