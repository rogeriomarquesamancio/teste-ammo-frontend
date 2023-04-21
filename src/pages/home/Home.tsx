import { useEffect, useState } from 'react';
import HomeView from './Home.view';
import { useDoRequest } from '../../hooks';
import { ISearchProductInput } from '../../module/api/endpoints/product/Product.interface';

function Home() {

    const addPlayerRequest = useDoRequest((api) => api.Product.SearchProduct);


    function teste() {
        let dto: ISearchProductInput = {
            term: "",
            page: 1,
            itens: 10,
        }
        addPlayerRequest.doRequest(dto).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
        })
    }

    useEffect(() => {
        teste()
    }, []);

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
