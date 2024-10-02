import Cards from './components/cards/cards'
import Chart from './components/charts/chart'
import CountryPicker from './components/countryPicker/CountryPicker'
import styles from './App.module.css'
import { useEffect, useState } from 'react'

export type covidData = {
  positive:number,
  negative: number,
  death: number,
  lastModified:string 
}

function App() {

  const [covidData, setCovidData] = useState<covidData[]>([])

  const fetchdata = async()=>{
    try{
        const response = await fetch('https://api.covidtracking.com/v1/us/daily.json');
        const result:covidData[] = await response.json()
        if (result) {
          const selectedData = result.map(({positive, negative, death, lastModified}) => ({positive, negative, death, lastModified}))
          setCovidData(selectedData)
          console.log(result)            
        }else{
          setCovidData([])
        }
    }catch(error){
        console.error('new error:', error)
    }
  }
  useEffect(() => {
    fetchdata()
  },[])

  return (
    <div className={styles.container}>
      <Cards data={covidData}></Cards>
      <Chart></Chart>
      <CountryPicker></CountryPicker>
    </div>
  )
}

export default App
