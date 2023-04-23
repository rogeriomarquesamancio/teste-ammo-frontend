import { IFoundItemsCountViewProps } from './FoundItemsCount.interface';
import FoundItemsCountView from './FoundItemsCount.view';

// Texto/header para visualizar a quantidade de itens encontrados
function FoundItemsCount(props: IFoundItemsCountViewProps) {
    const { totalItens } = props
    return (
        <FoundItemsCountView
            totalItens={totalItens}
        />
    )
}

export default FoundItemsCount;