import axios from 'axios';
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

  async function fetchQuoteById(id: number) {
    'use server';

    const controller = new AbortController(); 
    const { data }: { data: {id: number, quote: string, author: string}} = await axios.get(
      `https://dummyjson.com/quotes/${id}`,
      { signal: controller.signal }
    );
    controller.abort()
    return data;
  }


  return { createUsers, fetchQuoteById };
}
