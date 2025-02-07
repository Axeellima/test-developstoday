import { notFound } from "next/navigation"
import { Box, Heading, Flex, Text, Container } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import PopulationChart from "@/components/PopulationChart"
import api from "@/lib/api"

interface CountryInfo {
  name: string
  flag: string
  borders: BorderCountries[]
  population: {
    country: string
    populationCounts: { year: number; value: number }[]
  }
}

interface BorderCountries {
  commonName: string
  officialName: string
  countryCode: string
  region: string
}

export default async function Page({ params }: { params: { code: string } }) {
  const { data: country } = await api.get<CountryInfo>(
    `/country/${params.code}`
  )
  if (!country) return notFound()
  console.log(country)

  return (
    <Container h={"80vh"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={"100%"}
      >
        <Heading color={"blackAlpha.800"} size="lg">
          {country.population.country}
        </Heading>
        <Image
          src={country.flag}
          alt={country.population.country}
          width={150}
          height={100}
        />

        <Heading color={"blackAlpha.800"} size="md" mt={4}>
          Border Countries
        </Heading>
        <Flex gap={2}>
          {country.borders.map((border: BorderCountries, index: number) => (
            <Link href={`/country/${border.countryCode}`}>
              <Text color="teal.500" _hover={{ textDecoration: "underline" }}>
                {border.commonName}
              </Text>
            </Link>
          ))}
        </Flex>

        <Heading size="md" mt={6}>
          Population Over Time
        </Heading>
        <PopulationChart
          populationCounts={country.population.populationCounts}
        />
      </Box>
    </Container>
  )
}
