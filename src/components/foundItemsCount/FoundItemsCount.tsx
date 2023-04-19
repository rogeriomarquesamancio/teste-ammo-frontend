import React, { useContext } from 'react';
import { GlobalContext } from '../../providers/global/GlobalProvider';
import { Divider, Row } from 'antd';
import { DivTitle, SpanTitle } from './FoundItemsCount.style'

function FoundItemsCount() {

    const { search, setSearch } = useContext(GlobalContext);
    console.log(search)
    return (
        <DivTitle>
            <SpanTitle>
                {`X PRODUTOS ENCONTRADOS`}
            </SpanTitle>
        </DivTitle>
    )
}

export default FoundItemsCount;