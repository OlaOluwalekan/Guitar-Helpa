import { fretNumbers, stringLetters } from '../data'
import styles from '../css/guitar.module.css'

const Guitar = () => {
  return (
    <div className={styles.main}>
      <section>
        {stringLetters.map((string, i) => {
          return <div key={string} style={{ top: `${5 + i * 20}px` }}></div>
        })}
      </section>
      <section>
        {fretNumbers.map((fret) => {
          return <div key={fret} style={{ right: fret * 40 }}></div>
        })}
      </section>
    </div>
  )
}
export default Guitar
