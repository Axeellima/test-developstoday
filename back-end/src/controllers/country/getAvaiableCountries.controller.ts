import { getAvailableCountriesService } from "../../services/getAvaiableCountries.service"
import { Request, Response } from "express"

const getAvailableCountriesController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    let countries = await getAvailableCountriesService()

    return res.send(countries)
  } catch (e) {
    return res.status(500).json({ error: "Error fetching countries" })
  }
}
export default getAvailableCountriesController
