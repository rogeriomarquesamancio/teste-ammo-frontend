import { useContext, useEffect, useState } from 'react';
import { Row, message } from 'antd';

import { useDoRequest, useLocalStorage } from '../../../../hooks';
import { GlobalContext } from '../../../../providers/global/GlobalProvider';
import InputSearchProduct from '../../../../components/inputSearchProduct/InputSearchProduct';
import { ICategoryDTO, ISearchCategoryInput } from '../../../../module/api/endpoints/category/Category.interface';

import { ContainerHeader, ImageContainer, InputSearchContainer, Image } from './MainHeader.style'

function MainHeader() {
    const [inputValue, setInputValue] = useState<string>(''); // Variável local para armazenar informação do input
    const [filteredList, setFilteredList] = useState<{ value: string }[]>([]); // Váriavel para armazenar lista de categorias de acordo com input
    const [categoryList, setCategoryList] = useState<ICategoryDTO[]>([]); // Variável local para armazenar lista de categorias de produto
    const [isMounted, setIsMounted] = useState(false); // Variável para verificar o status atual da página

    const searchCategory = useDoRequest((api) => api.Category.SearchCategory); // API Buscar categoria

    const { setSearchText } = useContext(GlobalContext); // Context do contéudo da busca
    const categoryListStorage = useLocalStorage<ICategoryDTO[] | []>('categoryList'); // Local storage de categorias

    // UseEffect para verificar status da página
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // UseEffect para salvar localmente as categorias do local storage
    useEffect(() => {
        if (isMounted) {
            setInputInfo();
            let listCategory = categoryListStorage.value;

            if (listCategory?.length) {
                setCategoryList(listCategory || [])
                return;
            }
            getCategorylist();
        }
    }, [isMounted]);

    // Busca ao selecionar/digitar no input
    function onSearch(value: string, isSelect: boolean) {
        let auxListCategory = value?.length ? categoryList.filter((category: ICategoryDTO) => category.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            .map((category: ICategoryDTO) => ({ value: category.name })) : [];

        setFilteredList(auxListCategory)
        setInputValue(value)

        if (!isSelect) return;
        redirectPage(value)
    }

    // API para buscar lista de categorias
    function getCategorylist() {
        let dto: ISearchCategoryInput = {
            term: "",
        }

        searchCategory.doRequest(dto).then((response) => {
            if (response?.data) {
                categoryListStorage.setValue(response.data || []);
                setCategoryList(response.data)
            }
        }).catch(() => {
            message.error('Ocorreu um erro ao buscar categorias!');
        })
    }

    // Realizar busca do input
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!inputValue) return;
        redirectPage(inputValue)
    };

    // Redirecionamento
    const redirectPage = (value: string) => {
        window.location.href = `/search?product=${value}`;
    };

    // Obter string de busca pela URL
    const setInputInfo = () => {
        let paramsURL = window.location.search
        let auxString = paramsURL.split('=')[1] || ''
        setSearchText(auxString ? decodeURI(auxString) : '');
        setInputValue(auxString ? decodeURI(auxString) : '')
    };

    return (
        <ContainerHeader>
            <Row>
                <ImageContainer span={18} xs={24} md={12} lg={18}>
                    <Image
                        onClick={() => window.location.href = `/home`}
                        src="https://img.catalogos365.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://ofertas-chile.s3.us-west-2.amazonaws.com/Mmartan_db548a7863.png"
                        preview={false}
                    />
                </ImageContainer>
                <InputSearchContainer span={6} md={12} xs={24} lg={6}>
                    <InputSearchProduct
                        handleSubmit={handleSubmit}
                        inputValue={inputValue}
                        filteredList={filteredList}
                        onSearch={onSearch}
                    />
                </InputSearchContainer>
            </Row>
        </ContainerHeader >
    );
}

export default MainHeader;
