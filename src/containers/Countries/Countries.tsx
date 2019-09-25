import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { 
    ContainerCountries, 
    ContainerMain,
    ContainerFilterCountries,
} from '../../styles/styleCountries';
import { GlobalContainer } from '../../styles/styleGlobal';
import { Input, Toggle, ContentCountry } from '../../components';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18n from '../../translation/i18n';
import useDarkMode from '../../utils/use-dark-mode';
import useColorMode from '../../utils/console-color';

import './styles/index.scss';

const Countries = ({ t }) => {
    const [value, setValue] = useState('');
    const [dataCountries, setDataCountries] = useState([]);
    const [newdataCountries, setnewDataCountries] = useState([]);
    const [description, setDescription] = useState(false);
    const [darkMode, setDarkMode] = useDarkMode();
    const colorMode = useColorMode();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

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

    // https://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/
    let f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];

    const loop = () => {
        document.title = f[Math.floor((Date.now()/100)%f.length)];

        setTimeout(loop, 50);
    } 

    // colorMode.stream('test', 'HoWWWWWWWWWWWWWWWWWlllllllllllllllll', 'warn', {color: '#999', background: '#000'});
    // colorMode.stream('newtest', 'fds', 'info', {color: 'orange', background: 'beige'});
    colorMode.stream('Данные стран', dataCountries, 'info', {color: 'blue', background: 'beige'});

    return (
        <ContainerCountries>
            <GlobalContainer />
            <div className="header" >
                <div className="navbar">
                    <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
                <Link to={{pathname: '/'}} >{t('На главную')}</Link>
                <div className="dropdown">
                    <span>{t('Изменить язык')}</span>
                    <div className="dropdown-content">
                        <button onClick={() => changeLanguage('ru')}>Russian</button>
                        <button onClick={() => changeLanguage('en')}>English</button>
                    </div>
                </div>
            </div>
            <ContainerMain>
                {t('Поиск страны')}: <Input type="text" value={value} onChange={onSearchCountries} />
                <ContainerFilterCountries>
                    {loop()}
                    <ContentCountry
                        newdataCountries={newdataCountries}
                        description={description}
                        value={value}
                        />
                </ContainerFilterCountries>
            </ContainerMain>
        </ContainerCountries>
    )
}

export default withTranslation()(Countries);