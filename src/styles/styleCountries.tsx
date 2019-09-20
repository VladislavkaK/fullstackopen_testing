import styled from 'styled-components';

const ContainerCountries = styled.div`
    padding: 10px;
`;

const ContainerMain = styled.div`
    padding-top: 50px;
`;

const ParagraphDescription = styled.p`
    color: ${props => {
        const { total } = props.theme;

        return total > 10  ? 'red' : 'blue';
    }};
    line-height: 0.5em;
`;

const ContainerFilterCountries = styled.div`

`;

const OneCountry = styled.div`

`;

const ContainerNameCountry = styled.div`

`;

const ContainerInformationCountry = styled.div`

`;

const ContainerLanguagesCountry = styled.div`

`;

const ContainerFlagCountry = styled.div`
    width: 200px;
    height: 200px;
`;

const ContainerFlagCountryImage = styled.img`
    width: 100%;
    height: 100%;
`;

export {
    ContainerCountries,
    ContainerMain,
    ParagraphDescription,
    ContainerFilterCountries,
    OneCountry,
    ContainerNameCountry,
    ContainerInformationCountry,
    ContainerLanguagesCountry,
    ContainerFlagCountry,
    ContainerFlagCountryImage
}