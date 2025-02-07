import { VStack } from "@chakra-ui/react"
import api from "@/lib/api"
import CountryFilter from "@/components/CountryFilter"

export default async function Home() {
  const { data: countries } = await api.get("countries")
  return (
    <VStack p={5}>
      <CountryFilter countries={countries} />
    </VStack>
  )
}
