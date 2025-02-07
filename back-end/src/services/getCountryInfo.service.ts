import axios from "axios"

export const getCountryInfoService = async ({
  countryCode,
}: {
  countryCode: string
}) => {
  const borderResponse = await axios.get(
    `${process.env.DATE_NAGER_API}/CountryInfo/${countryCode}`
  )

  let countryName = borderResponse.data.commonName

  const populationResponse = await axios.post(
    `${process.env.COUNTRIES_NOW_API}/population`,
    {
      country: countryName,
    }
  )

  const flagResponse = await axios.post(
    `${process.env.COUNTRIES_NOW_API}/flag/images`,
    {
      country: countryName,
    }
  )

  return {
    borders: borderResponse.data.borders,
    population: populationResponse.data.data,
    flag: flagResponse.data.data.flag,
  }
}
