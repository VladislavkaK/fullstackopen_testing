import * as React from 'react';
import { ContainerHeader } from '../../styles/stylePhonebook';

const HeaderPhonebook = ({ title }) => {
    return (
        <ContainerHeader>
            <h2>{title}</h2>
        </ContainerHeader>
    )
}

export default HeaderPhonebook;