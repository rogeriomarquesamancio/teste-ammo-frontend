import ProductCard from './ProductCard'

describe('<ProductCard />', () => {
	it('renders', () => {
		cy.mount(<ProductCard
			product={{
				idProduct: 3,
				name: "Kit Cama Acetinado La Vie",
				description: "Para uma cama completa e impecável.",
				originalPrice: 2690,
				promotionalPrice: 1990,
				idCategory: 1,
				images: [
					{
						"idImage": 8,
						"idProduct": 3,
						"src": "https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/semi-environment/kcnbhlvip22ada-1536px-1644518320335-1649775594961-1665772148530.jpg"
					},
					{
						"idImage": 9,
						"idProduct": 3,
						"src": "https://images-prod.mmartan.com.br/1536x1536/jpg/products/photos/still/kcnbhlvip22adv-1632177361355-1644509578231-1649775615250-1665772154201.jpg"
					}
				],
				category: {
					"idCategory": 1,
					"name": "Cama"
				}
			}}
		/>)
	})
})