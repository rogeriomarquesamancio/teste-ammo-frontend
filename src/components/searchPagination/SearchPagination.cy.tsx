import { GlobalContext } from '../../providers/global/GlobalProvider';
import SearchPagination from './SearchPagination'
import React, { useContext } from 'react';

describe('<SearchPagination />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		/*  cy.stub(useContext,'search').withArgs(GlobalContext).returns({
	 
		 }) */
		cy.mount(<SearchPagination
			titleValue={'Teste'}
			itensPerPage={1}
			onChange={() => console.log("change")}
			totalItens={1}
			currentPage={1}
		/>)
	})
	it('null', () => {
		// see: https://on.cypress.io/mounting-react
		/*  cy.stub(useContext,'search').withArgs(GlobalContext).returns({
	 
		 }) */
		cy.mount(<SearchPagination
			titleValue={null}
			itensPerPage={null}
			onChange={null}
			totalItens={null}
			currentPage={null}
		/>)
	})
})