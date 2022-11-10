import styles from './CastItem.module.scss'

import Poster from '../Poster/Poster'

const CastItem = ({ actor }) => {
  const { name, character, profile_path } = actor
  return (
    <div className={styles['cast-item']}>
      <Poster size="profile" path={profile_path}></Poster>
      <h4>{name}</h4>
      <p>{character}</p>
    </div>
  )
}

export default CastItem
