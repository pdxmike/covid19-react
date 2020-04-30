import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)  // destructuring data out of the full response because it has my meat and potatoes

    const modifiedData = {
      confirmed:  confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate,
    }

    return modifiedData;
  } catch (error) {

  }
}