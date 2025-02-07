import axios from "axios"
import "dotenv"
export const getAvailableCountriesService = async () => {
  const response = await axios.get(
    `${process.env.DATE_NAGER_API}/AvailableCountries`
  )
  return response.data
}
