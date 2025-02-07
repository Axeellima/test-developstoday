"use client"

import { Button, Flex, Grid, Input } from "@chakra-ui/react"
import { useState } from "react"
import Link from "next/link"

interface Country {
  countryCode: string
  name: string
}

interface CountryFilterProps {
  countries: Country[]
}

export default function CountryFilter({ countries }: CountryFilterProps) {
  const [filter, setFilter] = useState("")

  const [filteredCountries, setFilteredCountries] = useState(countries)

  const handleFilter = () => {
    const filtered = countries.filter((country: Country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredCountries(filtered)
  }

  return (
    <Grid paddingX={"10%"} paddingY={3} paddingBottom={10} w="100vw">
      <Flex justifyContent={"center"}>
        <Input
          value={filter}
          width={"60%"}
          color={"blackAlpha.800"}
          _placeholder={{ color: "blackAlpha.600" }}
          _focus={{ borderColor: "teal.500" }}
          borderColor={"#e9e9e9"}
          borderRadius={8}
          paddingX={5}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter countries"
          mb={4}
        />
        <Button
          width={"20%"}
          borderRadius={8}
          onClick={handleFilter}
          backgroundColor="teal.500"
          color={"whiteAlpha.900"}
          variant="solid"
          ml={2}
        >
          Filter
        </Button>
      </Flex>
      <Flex
        gap={2}
        wrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {filteredCountries.map((country: Country) => {
          const firstLetter = country.countryCode.charAt(0)
          const color = getRainbowColor(firstLetter)

          return (
            <Link
              key={country.countryCode}
              href={`/country/${country.countryCode}`}
            >
              <Button
                width={200}
                color={"blackAlpha.800"}
                variant={"outline"}
                _hover={{
                  bg: color,
                  borderColor: color,
                  color: "whiteAlpha.900",
                }}
              >
                {country.name}
              </Button>
            </Link>
          )
        })}
      </Flex>
    </Grid>
  )
}
const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
]

function getRainbowColor(letter: string): string {
  const letterCode = letter.toLowerCase().charCodeAt(0) - 97
  return rainbowColors[letterCode % rainbowColors.length]
}
