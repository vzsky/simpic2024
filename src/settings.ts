export const MaxSessionAge = 60 * 60 * 24 * 10
export const debouncedTime = 500
export const REGISTRATION_CLOSED = true
// export const isAllowedToSignIn = (email: string|null|undefined) => {
//   if (!email) return false
//   return [
//     'my999n@gmail.com',
//     'talay@10ninox.com',
//     'khemjirath.hen@student.mahidol.edu',
//     'gittitee.cho@student.mahidol.edu',
//     'chanachai.loh@student.mahidol.edu',
//     'thanita.chn@student.mahidol.edu',
//     'siriwut.sir@student.mahidol.edu'
//   ].includes(email)
// }
export const isAllowedToSignIn = (_: any) => true

export const maxUploadFileSize = 500000
export const textMaxUploadFileSize = "500 kB"
