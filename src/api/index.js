import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url)  // destructuring data out of the full response because it has my meat and potatoes

    const modifiedData = {
      confirmed:  data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    }

    return modifiedData;
  } catch (error) {

  }
}