// reference: Intermediate Question 10 https://codeinterview.io/blog/reactjs-coding-interview-questions/
// Develop a paginated list view that shows items fetched from an API or a mock dataset. Implement a pagination system through which users can navigate between pages. Also, display the number of items per page. Use React state, components and hooks to manage the data and user interactions.
import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';

import { useDummyData } from '../hooks/useDummyData';
import { User } from '../types';

type State = {
  users: User[];
  page: number;
}

const PER_PAGE = 10;

export default function PaginatedList() {
  const { createUsers } = useDummyData();
  const [state, setState] = useState<State>({ users: [], page: 1 });

  useEffect(()=>{
    setState((prev) => ({
      ...prev,
      users: createUsers(100),
    }))
  }, []);

  const pages = useMemo(() => {
    if (state.page === 1) return [1, 2, 3];
    if (Math.ceil(state.users.length/PER_PAGE) === state.page)
      return [state.page-2, state.page-1, state.page];
    return [state.page-1, state.page, state.page+1];
  }, [state])

  const paginatedUsers = useMemo(() => {
    return state.users.slice((state.page-1)*PER_PAGE, state.page*PER_PAGE)
  }, [state])

  const handleChangePage = useCallback((e: MouseEvent) => {
    const button = (e.target) as HTMLButtonElement
    setState((prev) => ({
      ...prev,
      page: Number(button.value)
    }))
  }, [setState, state.page]);

  return (
    <>
      <h2>Paginated List</h2>
      {paginatedUsers.map((user) => (
        <ul key={user.userId}>
          <div>{user.username}</div>
          <li>{user.email}</li>
          <li>{user.birthdate.toLocaleDateString()}</li>
          <li>{user.registeredAt.toLocaleDateString()}</li>
          <img src={user.avatar} width="200" height="200" />
        </ul>
      ))}
      {pages.map((page) => (
        <button key={page} value={page} onClick={handleChangePage}>
          {page}
        </button>
      ))}
    </>
  );
}