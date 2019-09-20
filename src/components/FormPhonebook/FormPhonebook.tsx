import * as React from 'react';
import { ContainerForm, ContainerInput, ContainerButton } from '../../styles/stylePhonebook';
import { Input } from '../../components';

const FormPhonebook = ({
    newName,
    phone,
    onChangePhone,
    onAddNewName,
    onChangeNewName
}) => {
    return (
        <ContainerForm>
            <form>
                <ContainerInput>
                    name: <Input type="text" value={newName} onChange={(event) => onChangeNewName(event)} />
                </ContainerInput>
                <ContainerInput>
                    number: <Input type="text" value={phone} onChange={(event) => onChangePhone(event)} /> 
                </ContainerInput>
                <ContainerButton>
                    <button type="submit" onClick={onAddNewName} >add</button>
                </ContainerButton>
            </form>
        </ContainerForm>
    )
}

export default FormPhonebook;