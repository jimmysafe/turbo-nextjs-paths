import type { Access } from 'payload'

export const isAdmin: Access = ({ req, data }) => {
  if (!req?.user) return false
  return Boolean(req.user.roles?.includes('admin'))
}