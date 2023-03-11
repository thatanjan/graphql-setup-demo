import merge from 'lodash/merge'

import userResolvers from './user/userResolvers'

const resolvers = merge(userResolvers)

export default resolvers
