import styles from './LoadSpinner.module.scss'

const LoadSpinner = () => {
  return (
    <div className={styles['load-spinner']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default LoadSpinner
