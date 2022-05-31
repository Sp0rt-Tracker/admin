import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../hooks/redux'
import { fetchUsers } from '../../../store/actions/users'
import Users from './component'

const UsersContainer = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { users } = useAppSelector((state) => state.userReducer)
  return <Users users={users} />
}

export const container = UsersContainer
