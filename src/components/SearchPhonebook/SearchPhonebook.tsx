import * as React from 'react';
import { ContainerSearch } from '../../styles/stylePhonebook';
import { Input } from '../../components';

const SearchPhonebook = ({ search, onChangeSearch, reset }) => {
    return (
        <ContainerSearch>
            filter a shown with: <Input type="text" value={search} onChange={(event) => onChangeSearch(event)} />
            <input type="submit" onClick={(e) => reset(e)} value="reset" />
        </ContainerSearch>
    )
}

export default SearchPhonebook;