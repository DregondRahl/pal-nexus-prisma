import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('email', { nullable: false })
    t.string('name', { nullable: true })
    t.int('countPosts', { nullable: false })
    t.field('posts', {
      nullable: false,
      list: [true],
      type: 'Post',
      args: {
        where: 'PostWhereInput',
        orderBy: 'PostOrderByInput',
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PostDistinctFieldEnum',
      },
      resolve(parent: any) {
        return parent['posts']
      },
    })
  },
})
