import { mutationField, arg } from '@nexus/schema'

export const PostCreateDraftMutation = mutationField('createDraft', {
  type: 'Post',
  nullable: false,
  args: {
    data: arg({
      type: 'PostCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select, pubsub }) {
    const newDraft = prisma.post.create({
      data,
      ...select,
    })
    pubsub.publish('latestPost', newDraft)
    return newDraft
  },
})
