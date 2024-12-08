import type { Access } from 'payload'

export const isSelf: Access = ({ req, data }) => {
  if (!req?.user) return false
    return {
        id: {
          equals: req.user.id
      }
  }
}