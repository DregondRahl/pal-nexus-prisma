import { objectType } from '@nexus/schema'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.boolean('published', { nullable: false })
    t.string('title', { nullable: false })
    t.string('content', { nullable: true })
    t.field('author', {
      nullable: true,
      type: 'User',
      resolve(parent: any) {
        return parent['author']
      },
    })
    t.string('authorId', { nullable: true })
  },
})
