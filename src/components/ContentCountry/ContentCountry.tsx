import * as React from 'react';
import { 
    ParagraphDescription,
    OneCountry,
    ContainerNameCountry,
    ContainerInformationCountry,
    ContainerLanguagesCountry,
    ContainerFlagCountry,
    ContainerFlagCountryImage 
} from '../../styles/styleCountries';

const ContentCountry = ({
    newdataCountries,
    description,
    value
}) => {
    const renderCountries = () => {
        let content = newdataCountries.map((country, index) => {
            return (
                <ParagraphDescription key={index} theme={{ total: newdataCountries.length }} >
                    {country.name}
                </ParagraphDescription>
            )
        })

        if (newdataCountries.length === 1) {
            content = newdataCountries.map((country, index) => {
                return (
                    <OneCountry key={index} >
                        <ContainerNameCountry>
                            <h2>{country.name}</h2>
                        </ContainerNameCountry>
                        <ContainerInformationCountry>
                            <p>Столица: {country.capital}</p>
                            <p>Населенение: {country.population}</p>
                        </ContainerInformationCountry>
                        <ContainerLanguagesCountry>
                            <h2>Языки:</h2>
                            <ul>
                                {country.languages.map((language, index) => {
                                    return (
                                        <li key={index} >{language.name}</li>    
                                    )
                                })}
                            </ul>
                        </ContainerLanguagesCountry>
                        <ContainerFlagCountry>
                            <ContainerFlagCountryImage src={country.flag} />
                        </ContainerFlagCountry>
                    </OneCountry>
                )
            })
        }

        if (newdataCountries.length > 10 && description) {
            return <ParagraphDescription theme={{ total: newdataCountries.length }} >Много совпадений, укажите другой фильтр</ParagraphDescription>;
        }

        return value !== '' ? content : null;
    }

    return (
        <>
            {renderCountries()}
        </>
    )
}

export default ContentCountry;