import { useContext, useEffect } from 'react';
import { Row, AutoComplete, Input, Space, } from 'antd';
import { ContainerHeader, ImageContainer, InputSearchContainer, Image } from './MainHeader.style'
import { useState } from 'react';
import { GlobalContext } from '../../../../providers/global/GlobalProvider';
import { useDoRequest, useLocalStorage } from '../../../../hooks';
import { ICategoryDTO, ISearchCategoryInput } from '../../../../module/api/endpoints/category/Category.interface';
import { SearchOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';

function MainHeader() {


    const [inputValue, setInputValue] = useState<string>('');
    const [filteredList, setFilteredList] = useState<any>([]);
    const [categoryList, setCategoryList] = useState<any>([]);
    const { setSearch } = useContext(GlobalContext);
    const [isMounted, setIsMounted] = useState(false);
    const categoryListStorage = useLocalStorage<ICategoryDTO[] | []>('categoryList');

    function onSearch(value: string, isSelect: boolean) {
        setInputValue(value)
        let aux = value?.length ? categoryList.filter((category: ICategoryDTO) => category.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            .map((category: ICategoryDTO) => ({ value: category.name })) : [];
        setFilteredList(aux)

        if (!isSelect) return;
        redirectPage(value)
    }

    const searchCategory = useDoRequest((api) => api.Category.SearchCategory);

    function getCategorylist() {
        let dto: ISearchCategoryInput = {
            term: "",
        }
        searchCategory.doRequest(dto).then((response) => {
            categoryListStorage.setValue(response.data || []);
            setCategoryList(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!inputValue) return;
        redirectPage(inputValue)
    };


    const redirectPage = (value: string) => {
        window.location.href = `/search?product=${value}`;
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const setInfo = () => {
        let filter = window.location.search
        let auxString = filter.split('=')[1]
        setSearch(auxString ? decodeURI(auxString) : '');
        setInputValue(auxString ? decodeURI(auxString) : '')
    };

    const redirectLogo = () => {
        window.location.href = `/home`;
    };

    useEffect(() => {
        if (isMounted) {
            setInfo();
            let listCategory = categoryListStorage.value
            if (listCategory?.length) {
                setCategoryList(listCategory || [])
                return;
            }
            getCategorylist();
        }
    }, [isMounted]);

    return (
        <ContainerHeader>
            <Row>
                <ImageContainer span={18} xs={24} md={12} lg={18}>
                    <Image
                        onClick={() => redirectLogo()}
                        src="https://img.catalogos365.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://ofertas-chile.s3.us-west-2.amazonaws.com/Mmartan_db548a7863.png"
                        preview={false}
                    />
                </ImageContainer>
                <InputSearchContainer span={6} md={12} xs={24} lg={6}>
                    <form onSubmit={handleSubmit}>
                        <Space.Compact style={{ width: '100%' }}>
                            <AutoComplete
                                style={{ width: '100%', borderRadius: '50px' }}
                                value={inputValue}
                                allowClear={true}
                                suffixIcon={<Icon type='search' />}
                                options={filteredList}
                                onChange={(e: any) => { onSearch(e, false); }}
                                onSelect={(e: any) => { onSearch(e, true); }}
                                showSearch={true}
                                onKeyDown={(e: any) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit(e);
                                    }
                                }}
                            >
                                <Input
                                    autoFocus
                                    style={{ borderRadius: '50px' }}
                                    prefix={
                                        <SearchOutlined type='search'
                                            style={{ marginRight: 10 }}
                                        />}
                                    placeholder={'Buscar produtos'}
                                />
                            </AutoComplete>
                        </Space.Compact>
                    </form>
                </InputSearchContainer>
            </Row>
        </ContainerHeader >
    );
}

export default MainHeader;
