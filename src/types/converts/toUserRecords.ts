import { User } from "../api/User"
import { UserRecord } from "../view/UserRecord"

export const toUserRecords = (users: User[]): UserRecord[] => {
  const result = users.map( (user: User) => {
    const userRecord = new UserRecord();
    userRecord.id = user.id.toString();
    userRecord.mailAddress = user.mail;
    userRecord.age = user.age;
    userRecord.gender = user.gender;
    userRecord.job.push(user.job);
    userRecord.hobby = user.interests;

    return userRecord;
  })

  return result;
}