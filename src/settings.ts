export const MaxSessionAge = 60 * 60 * 24 * 10
export const isAllowedToSignIn = (email: string|null|undefined) => {
  if (!email) return false
  return ['my999n@gmail.com', 'talay@10ninox.com'].includes(email)
}
