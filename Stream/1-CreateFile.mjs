import fs from 'fs'
import {
  faker
} from '@faker-js/faker'

console.clear()

export function createRandomUser () {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past()
  }
}

// eslint-disable-next-line
let lines = 1e6
const fileName = 'user.csv'

export const users = faker.helpers.multiple(createRandomUser, {
  count: lines + 1
})

const file = fs.createWriteStream(`./../${fileName}`, {
  highWaterMark: 100 * 1024 * 1024
})

for (let row = 0; row <= lines; row++) {
  console.log(`${row}\n`)
  file.write(row + '=>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n')
  // file.write(
  //   `row: ${row}
  //    Id: ${users[row].userId}
  //    Name: ${users[row].username}
  //    Email: ${users[row].email}
  //    Avatar: ${users[row].avatar}
  //    Password: ${users[row].password}
  //    Birthdate: ${users[row].birthdate}
  //    RegisteredAt: ${users[row].registeredAt}\n`
  // )
}
console.log('Create File has Finished')
