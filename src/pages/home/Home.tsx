import React, { useState } from 'react';
import { Col, Row } from 'antd';
import HomeView from './Home.view';

function Home() {

    const [listProduct, setListProduct] = useState<any>([{
        name: 'Kit Cama Acetinado Deluxe Essenza',
        description: 'Conforto e sofisticação para compor seu enxoval de quarto. Sinônimo de charme e elegância, o Kit Cama Essenza é composto por colcha e porta-travesseiro com acabamento scallop e detalhes florais bordados, que também estão presentes no lençol superior e fronha.',
        promotionalPrice: '2590,00',
        originalPrice: '3000,00',
        images: [{
            src: "https://images-prod.mmartan.com.br/96x96/png/products/photos/semi-environment/_mg_2121_kqn3seszo21iv_mutbedayo18ow_quadptroo21az_quadmespo21az--1654703046079png-1665771998948.png"
        },
        {
            src: "https://images-prod.mmartan.com.br/96x96/png/products/photos/details/_mg_2119_kqn3seszo21iv_mutbedayo18ow_quadptroo21az_quadmespo21az-1654703346311.png"
        },
        {
            src: "https://images-prod.mmartan.com.br/96x96/png/products/photos/details/_mg_2123_kqn3seszo21iv_mutbedayo18ow_quadptroo21az_quadmespo21az-1654703112771.png"
        },
        {
            src: "https://images-prod.mmartan.com.br/96x96/png/products/photos/details/_mg_2123_kqn3seszo21iv_mutbedayo18ow_quadptroo21az_quadmespo21az-1654703112771.png"
        }],
        category: 'Cama',
    }]);

    return (
        <HomeView
            listProduct={listProduct}
        />
    )
}

export default Home;
