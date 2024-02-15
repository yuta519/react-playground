import { User } from "../types";

export default function Users({users}: {users: User[]}) {
  return (
    <>
      {users.map((user) => (
        <ul key={user.userId}>
          <div>{user.username}</div>
          <li>{user.email}</li>
          <li>{user.birthdate.toLocaleDateString()}</li>
          <li>{user.registeredAt.toLocaleDateString()}</li>
          <img src={user.avatar} width="200" height="200" />
        </ul>
      ))}
    </>
  )
}