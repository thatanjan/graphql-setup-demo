import userTypes from './user/userTypes'

const initialTypeDefs = `#graphql
	type Query {
		_empty: String
	}

	type Mutation {
		_empty: String
	}
`

const typedefs = [initialTypeDefs, userTypes]

export default typedefs
