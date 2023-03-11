import merge from 'lodash/merge'

import authenticateUser from './authenticateUser'

const userResolvers = merge(authenticateUser)

export default userResolvers
