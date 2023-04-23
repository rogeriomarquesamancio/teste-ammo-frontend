import { useEffect, useState } from 'react';
import ProductCardView from './ProductCard.view';
import { IProductCardPropsInterface } from './ProductCard.interface';

function ProductCard(props: IProductCardPropsInterface) {
    const { product } = props;
    const notFoundImage = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg' // Imagem padrão caso o produto não tenha
    const [src, setSrc] = useState<string>(product.images[0].src || notFoundImage); // Imagem a ser mostrada

    useEffect(() => {
        return () => {
            setSrc(product.images[0].src) // Limpar imagem ao terminar renderização do componente
        };
    }, []);

    // Alterar imagem a ser mostrada
    function changeSrc(value?: string) {
        setSrc(value || '')
    }

    // Formatação valor do produto
    function formatCurrency(value: number | string) {
        if (!value) return 0;

        let valueFormated = value.toLocaleString('pt-br', {
            style: 'decimal',
            currency: 'BRL',
        })
        return valueFormated
    }

    return (
        <ProductCardView
            changeSrc={changeSrc}
            src={src}
            product={product}
            firstImage={product?.images[0]?.src || notFoundImage}
            secondImage={product?.images[1]?.src}
            formatedOriginalPrice={formatCurrency(product?.originalPrice)}
            formatedPrice={formatCurrency(product?.promotionalPrice ? product.promotionalPrice : product.originalPrice)}
        />
    )
}

export default ProductCard;