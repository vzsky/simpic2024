export const MaxSessionAge = 60 * 60 * 24 * 10
export const FORM_CLOSED = false
export const debouncedTime = 500
export const isAllowedToSignIn = (email: string|null|undefined) => {
  if (!email) return false
  return [
    'my999n@gmail.com',
    'talay@10ninox.com',
    'khemjirath.hen@student.mahidol.edu',
    'gittitee.cho@student.mahidol.edu',
    'chanachai.loh@student.mahidol.edu',
    'thanita.chn@student.mahidol.edu',
    'siriwut.sir@student.mahidol.edu'
  ].includes(email)
}
