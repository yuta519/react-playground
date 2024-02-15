import { faker } from '@faker-js/faker';

import { User } from '../types'

export const useDummyData = () => {
  function createRandomUser(): User {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

  function createUsers(nums: number) {
    return [...Array(nums)].map((_) => (createRandomUser()));
  }


  return { createUsers };
}
