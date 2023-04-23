import { Text, ContainerImage } from './NotFoundProduct.style'

function NotFoundProduct() {
    return (
        <div>
            <ContainerImage>
                <img src='https://mmartan.com.br/images/notfound/error-page-illustration.png' />
            </ContainerImage>
            <Text>
                {'Nenhum resultado encontrado, por favor tente novamente.'}
            </Text>
        </div>
    )
}

export default NotFoundProduct;