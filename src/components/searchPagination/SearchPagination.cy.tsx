import SearchPagination from './SearchPagination'

describe('<SearchPagination />', () => {
	it('renders', () => {
		cy.mount(<SearchPagination
			itensPerPage={10}
			onChange={() => console.log('Change Pagination')}
			totalItens={200}
			currentPage={1}
		/>)
	})
})