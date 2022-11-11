import { useState } from 'react'
import usePoster from '../../hooks/usePoster'

import styles from './Poster.module.scss'

const Poster = ({ size, path, placeholder }) => {
  const [isLoading, setLoading] = useState(true)

  const placeholderItem = placeholder ? placeholder : ''

  const endLoadHandler = () => setLoading(false)

  const src = usePoster({ size, path })

  return (
    <>
      <div className={styles['poster']}>
        <div className={isLoading ? styles['loading'] : ''}>
          <img src={src} alt="Poster" onLoad={endLoadHandler}></img>
        </div>
      </div>
      {isLoading && placeholderItem}
    </>
  )
}

export default Poster
