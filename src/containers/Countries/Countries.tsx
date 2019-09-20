import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { 
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
} from '../../styles/styleCountries';
import { GlobalContainer } from '../../styles/styleGlobal';
import { Input } from '../../components';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [value, setValue] = useState('');
    const [dataCountries, setDataCountries] = useState([]);
    const [newdataCountries, setnewDataCountries] = useState([]);
    const [description, setDescription] = useState(false);

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                setDataCountries(response.data);
            })
            .catch(error => {
                return error;
            })
    }, [value])

    const onSearchCountries = (event) => {
        const { value } = event.target;
        const newValue = value.toLowerCase();
        let filterCountries;

        setValue(value);
        
        if (dataCountries !== undefined) {
            filterCountries = dataCountries.filter(country => {
                return country.name.toLowerCase().includes(newValue);
            })
        }
        
        if (filterCountries.length > 10) {
            setDescription(true);
        }

        setnewDataCountries(filterCountries);
        setDescription(!description);
    }

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
        <ContainerCountries>
            <GlobalContainer />
            <Link to={{pathname: '/'}} >На главную</Link>
            <ContainerMain>
                Поиск страны: <Input type="text" value={value} onChange={onSearchCountries} />
                <ContainerFilterCountries>
                    {renderCountries()}
                </ContainerFilterCountries>
            </ContainerMain>
        </ContainerCountries>
    )
}

export default Countries;