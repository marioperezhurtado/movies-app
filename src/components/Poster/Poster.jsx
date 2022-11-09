import { useState } from 'react'
import usePoster from '../../hooks/usePoster'

import styles from './Poster.module.scss'

const Poster = ({ path }) => {
  const [isLoading, setLoading] = useState(true)

  const endLoadHandler = () => setLoading(false)

  const src = usePoster(path)

  return (
    <div className={styles['poster']}>
      <div className={isLoading ? styles['loading'] : ''}>
        <img src={src} alt="Poster" onLoad={endLoadHandler}></img>
      </div>
    </div>
  )
}

export default Poster
