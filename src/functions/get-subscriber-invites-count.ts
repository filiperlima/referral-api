import { redis } from '../redis/client'

interface GetSubscriberInvitesCountParams {
  subscriberId: string
}

export async function getSubscriberInviteCount({
  subscriberId,
}: GetSubscriberInvitesCountParams) {
  const count = await redis.zscore('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
