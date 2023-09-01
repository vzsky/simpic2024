import { ITeam } from "../database/team.model"
import { UserInfo } from "../database/userinfo"

export const name = (user: UserInfo): string|undefined => {
  if (user.fname && user.lname) return `${user.fname[0]}. ${user.lname}`
  if (user.lname) return user.lname
  if (user.fname) return user.fname
  if (user.nname) return user.nname
}

export const teamName = (team: ITeam): string => {
  if (team.contestant1) {
    let n = name(team.contestant1)
    if (n) return n
  }
  return "not initialized"
}
