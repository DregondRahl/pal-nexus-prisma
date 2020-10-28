import { PrismaClient, PrismaClientOptions } from '@prisma/client'
import { PrismaDelete, onDeleteArgs } from '@paljs/plugins'
import { PubSub } from 'apollo-server'

class Prisma extends PrismaClient {
  constructor(options?: PrismaClientOptions) {
    super(options)
  }

  async onDelete(args: onDeleteArgs) {
    const prismaDelete = new PrismaDelete(this)
    await prismaDelete.onDelete(args)
  }
}

const prisma = new Prisma({
  log: ['query'],
})

const pubsub = new PubSub()

export interface Context {
  prisma: Prisma
  select: any
  pubsub: PubSub
}

export function createContext(): Context {
  return {
    prisma,
    select: {},
    pubsub,
  }
}
