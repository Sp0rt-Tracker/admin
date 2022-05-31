import { FC } from 'react'
import style from './style.module.scss'
import Props from './Interface'
import User from '../../molecules/User'

const Users: FC<Props> = ({ users }) => {
  return (
    <div className={style.container}>
      {users.map((user) => (
        <User id={user.id} name={user.name} email={user.email} key={user.id} />
      ))}
    </div>
  )
}

export default Users
