import { covidData } from "../../App"
import styles from './cards.module.css'

type dataObject={
    data:covidData
}

const Cards = ({data}:dataObject) => {
  return (
    <div className={styles.container}>
        <div>
            <div>
                <p>positive: {data.positive}</p>
                <p>negative: {data.negative}</p>
                <p>death: {data.death}</p>
                <p>date: {data.lastModified}</p>
            </div>
        </div>
    </div>
  )
}

export default Cards