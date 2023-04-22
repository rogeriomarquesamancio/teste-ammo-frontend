import React, { useContext } from 'react';
import { GlobalContext } from '../../providers/global/GlobalProvider';
import { Divider, Row } from 'antd';
import { DivTitle, SpanTitle } from './FoundItemsCount.style'

function FoundItemsCount(props: any) {
    const { totalItens } = props
    return (
        <DivTitle>
            <SpanTitle>
                {`${totalItens} produtos encontrados`}
            </SpanTitle>
        </DivTitle>
    )
}

export default FoundItemsCount;