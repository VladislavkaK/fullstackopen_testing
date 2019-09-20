import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderPhonebook, SearchPhonebook, NumbersPhonebook, FormPhonebook } from '../../components';
import { GlobalContainer, ContainerBody } from '../../styles/stylePhonebook';

const Phonebook = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', phone: '040-1234567' },
        { name: 'Ada Lovelace', phone: '39-44-5323523' },
        { name: 'Dan Abramov', phone: '12-43-234345' },
        { name: 'Mary Poppendieck', phone: '39-23-6423122' }
    ]);
    const [newName, setNewName] = useState('');
    const [phone, setPhone] = useState('');
    const [search, setSearch] = useState('');

    const onChangeNewName = (e) => {
        const { value } = e.target;
        setNewName(value);
    }

    const onChangePhone = (e) => {
        const { value } = e.target;
        setPhone(value);
    }

    const onAddNewName = (e) => {
        e.preventDefault();
        setNewName('');
        setPhone('');
        setPersons(persons => {
            const newArr = [
                ...persons,
                { name: newName, phone: phone }
            ];

            const uniquePerson = 
                newArr.map(item => {
                    return item.name;
                }).filter((value, index, self) => {
                    if (self.indexOf(value) !== index) alert(`${newName} is already added to phonebook`)
                    return self.indexOf(value) === index
                });

            const uniquePhone = 
                newArr.map(item => {
                    return item.phone;
                }).filter((value, index, self) => {
                    if (self.indexOf(value) !== index) alert(`${newName} is already added to phonebook`)
                    return self.indexOf(value) === index
                });    

            let result = []    
            for (let i = 0; i < uniquePerson.length; i++) {
                 result.push({name: uniquePerson[i], phone: uniquePhone[i]})
            }  

            return result;
        })
    }  

    const onChangeSearch = (e) => {
        const { value } = e.target;
        setSearch(value);
        
        const newValue = value.toLowerCase();
 
        const filter = persons.filter(person => {
            return person.name.toLowerCase().includes(newValue);
        });

        setPersons(filter);
    }

    const reset = (event) => {
        event.preventDefault();
        setSearch('');
        setPersons([
            { name: 'Arto Hellas', phone: '040-1234567' },
            { name: 'Ada Lovelace', phone: '39-44-5323523' },
            { name: 'Dan Abramov', phone: '12-43-234345' },
            { name: 'Mary Poppendieck', phone: '39-23-6423122' }
        ])
    }

    return (
        <React.Fragment>
            <GlobalContainer />
            <ContainerBody>
                <Link to={{pathname: '/'}} >На главную</Link>

                <HeaderPhonebook title="Phonebook" />
                <SearchPhonebook search={search} onChangeSearch={onChangeSearch} reset={reset} />

                <HeaderPhonebook title="add a new" />
                <FormPhonebook 
                    newName={newName} 
                    phone={phone} 
                    onChangePhone={onChangePhone}
                    onAddNewName={onAddNewName}
                    onChangeNewName={onChangeNewName}  /> 

                <HeaderPhonebook title="Numbers" />
                <NumbersPhonebook persons={persons} /> 

            </ContainerBody>
        </React.Fragment>
    )
} 

export default Phonebook;