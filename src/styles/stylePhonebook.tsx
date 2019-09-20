import styled, { createGlobalStyle } from 'styled-components';

const GlobalContainer = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
    }
`;

const ContainerBody = styled.div`
    padding: 10px;
`;

const ContainerHeader = styled.div`

`;

const ContainerForm = styled.div`

`;

const ContainerInput = styled.div`
    padding: 10px;
`;

const ContainerButton = styled.div`

`;

const ContainerNumbers = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContainerSearch = styled.div`
    
`;

const ContainerPerson = styled.div`

`;

export {
    GlobalContainer,
    ContainerBody,
    ContainerHeader,
    ContainerForm,
    ContainerInput,
    ContainerButton,
    ContainerNumbers,
    ContainerSearch,
    ContainerPerson
}