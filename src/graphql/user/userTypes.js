const type = `#graphql
    type User {
    	   name: String
    	   country: String
    }

    extend type Mutation {
    	   registerUser(name: String): User
    	   loginUser(name: String): User
    	   logOutUser(name: String): User
    }
`

export default type
