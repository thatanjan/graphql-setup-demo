export const registerUser = (_, { name }) => {
	// action
	return { name }
}

export const loginUser = (_, { name }) => {
	// action
	return { name }
}

export const logOutUser = (_, { name }) => {
	// action
	return { name }
}

const resolvers = {
	Mutation: { registerUser, loginUser, logOutUser },
}

export default resolvers
