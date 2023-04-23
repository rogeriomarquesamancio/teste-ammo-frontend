import styled from 'styled-components';
import { AutoComplete, Input, Space } from 'antd';

const InputStyled = styled(Input)(({
    borderRadius: '50px',
    '.icon-search': {
        marginRight: '10'
    },
}));

const AutoCompleteStyled = styled(AutoComplete)(({
    width: '100%',
    borderRadius: '50px'
}));

const SpaceStyled = styled(Space.Compact)(({
    width: '100%'
}));

export {
    InputStyled,
    AutoCompleteStyled,
    SpaceStyled
};