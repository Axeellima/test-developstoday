import { Request, Response } from "express"
import { getCountryInfoService } from "../../services/getCountryInfo.service"

const getCountryInfoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { countryCode } = req.params
    let country = await getCountryInfoService({ countryCode })

    return res.json(country)
  } catch (e) {
    return res.status(500).json({ error: "Error fetching country details" })
  }
}
export default getCountryInfoController
