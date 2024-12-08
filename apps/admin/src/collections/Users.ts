import { isAdmin } from '@/access/isAdmin'
import { isSelf } from '@/access/isSelf'
import { clerkClient } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'

async function createClerkUser(payloadUser: any) {
  try {
    const client = await clerkClient()
  
    const user = await client.users.createUser({
      emailAddress: [payloadUser.email],
      password: payloadUser.password,
      skipPasswordChecks: true,
      privateMetadata: {
        payloadKey: payloadUser.apiKey
      },
      publicMetadata: {
        roles: payloadUser.roles
      }
    })
  
    return user.id
  } catch (e: any) {
    console.error(e.errors)
    return null
  }
}

const beforeChangeHook: CollectionBeforeChangeHook = async (args) => {
  console.log(args)
  return 'asd'
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // create a payload user, before create we create a clerk user, after create we update the payload user with clerk id
    read: isSelf,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  auth: {
    useAPIKey: true, 
  },
  hooks: {
    beforeChange: [async (args) => {
      if (args.operation === 'update') return args.data
      const clerkId = await createClerkUser(args.data)
      if(!clerkId) throw new Error('Failed to create clerk user')
      return {
        ...args.data,
        clerkId
      }
    }],
    afterChange: [async (args) => {
      revalidatePath(`/admin/collections/users/1`)
    }]
  },
  fields: [
    {
      name: 'clerkId',
      type: 'text',
      saveToJWT: true,
    },
    {
      name: 'Nome',
      type: 'text',
      saveToJWT: true,
    },
    {
      name: 'roles',
      type: 'select',
      saveToJWT: true,
      defaultValue: 'admin',
      options: [
        { label: 'User', value: 'user' },
        { label: 'Admin', value: 'admin' },
      ],
      required: true
    }
    // Email added by default
    // Add more fields as needed
  ],
}
