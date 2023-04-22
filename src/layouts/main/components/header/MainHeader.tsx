import { useContext, useEffect } from 'react';
import { Image, Col, Row, AutoComplete, Input, Form, Space } from 'antd';
import { ContainerHeader } from './MainHeader.style'
import { useState } from 'react';
import { GlobalContext } from '../../../../providers/global/GlobalProvider';
import { useDoRequest } from '../../../../hooks';
import { ICategoryDTO, ISearchCategoryInput } from '../../../../module/api/endpoints/category/Category.interface';
import { SearchOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';
import { useNavigate } from 'react-router-dom';

function MainHeader() {


    const [inputValue, setInputValue] = useState<string>('');
    const [filteredList, setFilteredList] = useState<any>([]);
    const { search, setSearch, categoryList, setCategoryList } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [isMounted, setIsMounted] = useState(false);

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
            setCategoryList(response.data)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        redirectPage(inputValue)
    };


    const redirectPage = (value: string) => {
        navigate(`/search?product=${value}`);
        window.location.reload();
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const setInfo = () => {
        let filter = window.location.search
        let auxString = filter.split('=')[1]
        setSearch(decodeURI(auxString));
        setInputValue(decodeURI(auxString))
    };

    useEffect(() => {
        if (isMounted) {
            setInfo();
            getCategorylist();
        }
    }, [isMounted]);

    return (
        <ContainerHeader>
            <Row>
                <Col span={18}>
                    <Image
                        src="https://img.catalogos365.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://ofertas-chile.s3.us-west-2.amazonaws.com/Mmartan_db548a7863.png"
                        width={150}
                        preview={false}
                    />
                </Col>
                <Col span={6}>
                    <Form onSubmitCapture={handleSubmit}>
                        <Space.Compact style={{ width: '100%' }}>
                            <AutoComplete
                                style={{ width: '100%' }}
                                value={inputValue}
                                autoFocus
                                allowClear={true}
                                suffixIcon={<Icon type='search' />}
                                options={filteredList}
                                onChange={(e: any) => { onSearch(e, false); }}
                                onSelect={(e: any) => { onSearch(e, true); }}
                                showSearch={true}
                            >
                                <Input prefix={
                                    <SearchOutlined type='search'
                                        style={{ marginRight: 10 }}
                                    />}
                                    placeholder={'Buscar produtos'}
                                />
                            </AutoComplete>
                        </Space.Compact>
                    </Form>
                </Col>
            </Row>
        </ContainerHeader>
    );
}

export default MainHeader;
