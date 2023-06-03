import styles from '../css/header.module.css'
// import 'dotenv'
// const { REACT_VAR } = process.env

const Header = () => {
  return (
    <div className={styles.main}>
      <h2>
        Guitar<span>Helpa</span>
      </h2>
      <h4>{import.meta.env.VITE_VAR}</h4>
    </div>
  )
}
export default Header
