import getAvailableCountriesController from "../controllers/country/getAvaiableCountries.controller"
import getCountryInfoController from "../controllers/country/getCountryInfo.controller"
import { Router } from "express"

const countriesRouter = Router()

countriesRouter.get("/countries", getAvailableCountriesController)
countriesRouter.get("/country/:countryCode", getCountryInfoController)

export default countriesRouter
