import * as React from 'react';
import { ContainerNumbers, ContainerPerson } from '../../styles/stylePhonebook';

const NumbersPhonebook = ({ persons }) => {
    const renderPersons: any = persons.map((data, index) => {
        return (
            <ContainerPerson key={index} >
                {data.name} {data.phone}
            </ContainerPerson>
        )
    }) 

    return (
        <ContainerNumbers>
            {renderPersons}
        </ContainerNumbers>
    )
}

export default NumbersPhonebook;