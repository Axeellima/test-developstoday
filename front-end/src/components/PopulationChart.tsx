"use client"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import { Box } from "@chakra-ui/react"

interface PopulationChartProps {
  populationCounts: { year: number; value: number }[]
}

export default function PopulationChart({
  populationCounts,
}: PopulationChartProps) {
  return (
    <Box
      mt={6}
      ml={"-6"}
      w="80%"
      maxW="800px"
      h={{ base: "200px", md: "300px" }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={populationCounts}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatPopulation} />
          <Tooltip formatter={formatPopulation} />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}
function formatPopulation(value: number): string {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`
  }
  return value.toString()
}
