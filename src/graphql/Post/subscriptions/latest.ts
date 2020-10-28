import { subscriptionField } from '@nexus/schema'

export const PostLatestSubscription = subscriptionField('latestPost', {
  type: 'Post',
  subscribe(_root, _args, ctx) {
    return ctx.pubsub.asyncIterator('latestPost')
  },
  resolve(payload) {
    return payload
  },
})
