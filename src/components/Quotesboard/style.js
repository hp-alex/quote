import styled from 'styled-components'
export const WhiteBoard = styled.div`
    min-height: 300px;
    padding: 10px 10px;
    max-width: 40%;
    background-color: rgba(100,100,100,0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;    
    border-radius: 20px;
    @media (max-width: 480px){
        width: 100%;
        height: 50%;
    };
    @media (max-width: 370px){
        width: 100%;
        height: 100%;
    };
    @media (min-width: 481px) and (max-width: 768px){
        width: 70%;
        height: 50%;
    };
    @media (min-width: 769px) and (max-width: 992px){
        width: 40%;
        height: 40%;
    }
`;
export const QuoteSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    background-color: transparent;
    border-radius: 20px;
    @media (max-width: 480){
        width: 70%;
    }

`;
export const Wrapper = styled.div`
         border-left: 2px dashed white;
         border-bottom: 2px dashed white;
         width: 80%;
         height: 200px;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 0px 20px;
         color: white;
         overflow: auto;
         text-indent: 10px;
         text-align: justify;
         ::-webkit-scrollbar {
            width: 5px;
            background-color: transparent;
            
        }
        ::-webkit-scrollbar-thumb {
            
           background-color: white;
            
        }
       
`;
export const AuthorSpace = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0px 20px;
    color: white;
    font-style: italic;
    font-weight: 500;
    @media (max-width: 480px){
        padding: 0px 0px;
    };
    @media (max-width: 370px){
        padding: 0px 0px;
        overflow: auto;
    };

`;