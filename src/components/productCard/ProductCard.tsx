import React, { useContext } from 'react';
import { GlobalContext } from '../../providers/global/GlobalProvider';
import { Divider, Row } from 'antd';
import { DivTitle } from './ProductCard.style'

function ProductCard(props: any) {
    const { product } = props
    const { search, setSearch } = useContext(GlobalContext);
    console.log(search)
    return (
        <Row>
            {product.name}
        </Row>
    )
}

export default ProductCard;