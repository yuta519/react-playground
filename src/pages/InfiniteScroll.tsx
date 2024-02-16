import { useEffect, useRef, useState } from 'react'
// import 'bulma/css/bulma.css'

type UserType = {
  id: number,
  name: string,
  email: string,
  gender: "male" | "female" | "unknown",
  status: "active" | "inactive"
};

const sleep = (sec: number) => new Promise(resolve => setTimeout(resolve, sec * 1000));

const App = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const observerTarget = useRef(null);

  const loadUser = async (page: number) => {
    const URL = `https://gorest.co.in/public/v2/users?&page=${page}`;

    await sleep(0.5)
    const response = await fetch(URL);
    const usersData: UserType[] = await response.json();
    const count = usersData.length;

    console.log(`GET ${URL}  count=${count}`);
    setUsers([...users, ...usersData]);
    setHasMore(count > 0);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(    
      entries => {                                
        if (entries[0].isIntersecting) {          
          if (hasMore) {
            setPage(p => p + 1);
           }
        }
      },
      { threshold: 1.0 }                            
    );

    if (observerTarget.current) {              
      observer.observe(observerTarget.current);
    }
    return () => {                               
      if (observerTarget.current) { 
        observer.unobserve(observerTarget.current);
      }
    };
  }, [hasMore, observerTarget]);


  useEffect(() => {
    if (page > 0) {
      loadUser(page);
    }
  }, [page]);

  return (
    <div className="container mt-4 p-4"
         style={ {height:400, width: "50%",overflow: "auto"} }>
      <ul className="list">                      
      {users.map((user, ix) =>
        <li className="list-item p-2"
            style={ {borderBottom: "solid 1px #ccc"} } key={ix}>
          {user.name}
        </li>
      )}
      </ul>
      <div ref={observerTarget}>                  
        {hasMore &&
         <progress key={0} className="progress is-success is-radiusless" />}
      </div>
    </div>
  );
}
export default App