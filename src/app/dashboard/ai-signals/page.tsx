"use client";

import { useState } from "react";
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric, Flex, Badge, ProgressBar, BarList, Grid, Col, LineChart, DonutChart, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from "@tremor/react";
import { FaRobot, FaChartLine, FaNewspaper, FaLightbulb, FaExclamationTriangle, FaCheckCircle, FaArrowUp, FaArrowDown } from "react-icons/fa";

// Mock data
const signalStrengthData = [
  { name: "AAPL", value: 85 },
  { name: "MSFT", value: 78 },
  { name: "GOOGL", value: 72 },
  { name: "AMZN", value: 68 },
  { name: "TSLA", value: 45 },
  { name: "META", value: 82 },
];

const sentimentData = [
  { name: "Positive", value: 65 },
  { name: "Neutral", value: 25 },
  { name: "Negative", value: 10 },
];

const patternData = [
  {
    date: "2025-01",
    "Bullish Patterns": 12,
    "Bearish Patterns": 5,
    "Neutral Patterns": 8,
  },
  {
    date: "2025-02",
    "Bullish Patterns": 15,
    "Bearish Patterns": 6,
    "Neutral Patterns": 7,
  },
  {
    date: "2025-03",
    "Bullish Patterns": 18,
    "Bearish Patterns": 8,
    "Neutral Patterns": 5,
  },
  {
    date: "2025-04",
    "Bullish Patterns": 14,
    "Bearish Patterns": 10,
    "Neutral Patterns": 6,
  },
  {
    date: "2025-05",
    "Bullish Patterns": 12,
    "Bearish Patterns": 12,
    "Neutral Patterns": 8,
  },
  {
    date: "2025-06",
    "Bullish Patterns": 16,
    "Bearish Patterns": 8,
    "Neutral Patterns": 7,
  },
];

const signalHistoryData = [
  { 
    asset: "AAPL", 
    signal: "Buy", 
    price: "$182.50", 
    target: "$195.00", 
    stopLoss: "$175.00", 
    date: "2025-06-15", 
    status: "Active",
    confidence: 85,
  },
  { 
    asset: "MSFT", 
    signal: "Buy", 
    price: "$415.30", 
    target: "$440.00", 
    stopLoss: "$400.00", 
    date: "2025-06-12", 
    status: "Successful",
    confidence: 78,
  },
  { 
    asset: "GOOGL", 
    signal: "Sell", 
    price: "$152.20", 
    target: "$140.00", 
    stopLoss: "$158.00", 
    date: "2025-06-10", 
    status: "Failed",
    confidence: 65,
  },
  { 
    asset: "TSLA", 
    signal: "Buy", 
    price: "$175.30", 
    target: "$190.00", 
    stopLoss: "$165.00", 
    date: "2025-06-08", 
    status: "Successful",
    confidence: 72,
  },
  { 
    asset: "META", 
    signal: "Sell", 
    price: "$485.40", 
    target: "$460.00", 
    stopLoss: "$500.00", 
    date: "2025-06-05", 
    status: "Active",
    confidence: 68,
  },
];

const latestSignalsData = [
  { 
    asset: "AAPL", 
    name: "Apple Inc.",
    signal: "Buy", 
    price: "$182.50", 
    target: "$195.00", 
    stopLoss: "$175.00", 
    confidence: 85,
    reasoning: "Strong earnings forecast, positive technical indicators, and increased institutional buying."
  },
  { 
    asset: "MSFT", 
    name: "Microsoft Corp.",
    signal: "Buy", 
    price: "$415.30", 
    target: "$440.00", 
    stopLoss: "$400.00", 
    confidence: 78,
    reasoning: "Cloud business growth, positive AI developments, and favorable market sentiment."
  },
  { 
    asset: "META", 
    name: "Meta Platforms Inc.",
    signal: "Sell", 
    price: "$485.40", 
    target: "$460.00", 
    stopLoss: "$500.00", 
    confidence: 68,
    reasoning: "Regulatory concerns, increased competition, and potential revenue slowdown."
  },
];

export default function AISignalsPage() {
  const [selectedTab, setSelectedTab] = useState("0");

  return (
    <div className="space-y-6">
      {/* AI Signal Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card decoration="top" decorationColor="blue">
          <Flex justifyContent="between" alignItems="center">
            <Title>AI Signal Strength</Title>
            <FaRobot className="text-blue-500" />
          </Flex>
          <Metric>72%</Metric>
          <Text>Overall market bullish sentiment</Text>
          <ProgressBar value={72} color="blue" className="mt-3" />
        </Card>
        
        <Card decoration="top" decorationColor="green">
          <Flex justifyContent="between" alignItems="center">
            <Title>Pattern Recognition</Title>
            <FaChartLine className="text-green-500" />
          </Flex>
          <Metric>18</Metric>
          <Text>Bullish patterns detected this month</Text>
          <ProgressBar value={65} color="green" className="mt-3" />
        </Card>
        
        <Card decoration="top" decorationColor="indigo">
          <Flex justifyContent="between" alignItems="center">
            <Title>News Sentiment</Title>
            <FaNewspaper className="text-indigo-500" />
          </Flex>
          <Metric>Positive</Metric>
          <Text>Based on 250 recent news articles</Text>
          <ProgressBar value={65} color="indigo" className="mt-3" />
        </Card>
      </div>

      {/* Latest Trading Signals */}
      <Card>
        <Title>Latest Trading Signals</Title>
        <Text className="mt-2">AI-generated trading recommendations based on market analysis</Text>
        
        <div className="mt-6 space-y-6">
          {latestSignalsData.map((signal, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <Flex justifyContent="between" alignItems="start">
                <div>
                  <Flex alignItems="center" className="gap-2">
                    <Title>{signal.asset}</Title>
                    <Text>{signal.name}</Text>
                    <Badge
                      color={signal.signal === "Buy" ? "green" : "red"}
                      icon={signal.signal === "Buy" ? FaArrowUp : FaArrowDown}
                    >
                      {signal.signal}
                    </Badge>
                  </Flex>
                  <Text className="mt-2">Current Price: {signal.price}</Text>
                  <Flex className="mt-1 gap-4">
                    <Text>Target: <span className="font-medium text-green-500">{signal.target}</span></Text>
                    <Text>Stop Loss: <span className="font-medium text-red-500">{signal.stopLoss}</span></Text>
                  </Flex>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">
                    <FaLightbulb className="text-blue-500" />
                    <span>{signal.confidence}% Confidence</span>
                  </div>
                </div>
              </Flex>
              <div className="mt-4">
                <Text className="font-medium">AI Reasoning:</Text>
                <Text className="text-muted-foreground">{signal.reasoning}</Text>
              </div>
              <Flex justifyContent="end" className="mt-4">
                <Button size="xs" variant="secondary" color="gray">Ignore</Button>
                <Button size="xs" color="blue" className="ml-2">Execute Trade</Button>
              </Flex>
            </div>
          ))}
        </div>
      </Card>

      {/* Analysis Tabs */}
      <Card>
        <TabGroup index={parseInt(selectedTab)} onIndexChange={(index) => setSelectedTab(index.toString())}>
          <TabList>
            <Tab>Signal Strength</Tab>
            <Tab>Sentiment Analysis</Tab>
            <Tab>Pattern Recognition</Tab>
            <Tab>Signal History</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="mt-4">
                <Text>Top assets by AI signal strength</Text>
                <BarList
                  data={signalStrengthData}
                  className="mt-4"
                  valueFormatter={(number: number) => `${number}%`}
                  color="blue"
                />
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4">
                <Grid numItemsMd={2} numItemsLg={2} className="gap-6">
                  <Col>
                    <Text>Market sentiment distribution</Text>
                    <DonutChart
                      className="mt-4 h-60"
                      data={sentimentData}
                      category="value"
                      index="name"
                      colors={["green", "blue", "red"]}
                      valueFormatter={(number) => `${number}%`}
                      showLabel
                    />
                  </Col>
                  <Col>
                    <Text>Sentiment analysis is based on:</Text>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-2">
                        <FaNewspaper className="text-blue-500" />
                        <div>
                          <Text className="font-medium">News Articles</Text>
                          <Text className="text-sm text-muted-foreground">Analysis of 250+ financial news sources</Text>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaChartLine className="text-green-500" />
                        <div>
                          <Text className="font-medium">Technical Indicators</Text>
                          <Text className="text-sm text-muted-foreground">Evaluation of 45 technical indicators</Text>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRobot className="text-indigo-500" />
                        <div>
                          <Text className="font-medium">AI Pattern Recognition</Text>
                          <Text className="text-sm text-muted-foreground">Machine learning models trained on historical data</Text>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Grid>
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4">
                <Text>Market patterns detected over time</Text>
                <LineChart
                  className="mt-4 h-80"
                  data={patternData}
                  index="date"
                  categories={["Bullish Patterns", "Bearish Patterns", "Neutral Patterns"]}
                  colors={["green", "red", "blue"]}
                  valueFormatter={(number) => number.toString()}
                  showLegend
                  showGridLines
                />
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4">
                <Text>Historical trading signals and performance</Text>
                <Table className="mt-4">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Asset</TableHeaderCell>
                      <TableHeaderCell>Signal</TableHeaderCell>
                      <TableHeaderCell>Entry Price</TableHeaderCell>
                      <TableHeaderCell>Target</TableHeaderCell>
                      <TableHeaderCell>Stop Loss</TableHeaderCell>
                      <TableHeaderCell>Date</TableHeaderCell>
                      <TableHeaderCell>Confidence</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {signalHistoryData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.asset}</TableCell>
                        <TableCell className={item.signal === "Buy" ? "text-green-500" : "text-red-500"}>
                          {item.signal}
                        </TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.target}</TableCell>
                        <TableCell>{item.stopLoss}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>
                          <Badge color={item.confidence >= 75 ? "blue" : item.confidence >= 60 ? "yellow" : "gray"}>
                            {item.confidence}%
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {item.status === "Active" ? (
                            <Badge icon={FaExclamationTriangle} color="yellow">Active</Badge>
                          ) : item.status === "Successful" ? (
                            <Badge icon={FaCheckCircle} color="green">Successful</Badge>
                          ) : (
                            <Badge icon={FaExclamationTriangle} color="red">Failed</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}