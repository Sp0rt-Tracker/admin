import { FC } from 'react'
import style from './style.module.scss'
import Users from '../../organisms/Users'

const Main: FC = () => {
  return (
    <section className={style.container}>
      <Users />
    </section>
  )
}

export default Main
