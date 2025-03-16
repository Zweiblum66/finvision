"use client";

import { useState } from "react";
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric, Flex, Badge, Grid, Col, AreaChart, BarList, DonutChart, LineChart, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from "@tremor/react";
import { FaChartLine, FaChartPie, FaNewspaper, FaRobot, FaExchangeAlt, FaArrowUp, FaArrowDown, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

// Mock data
const portfolioPerformance = [
  {
    date: "Jan 2025",
    "Portfolio": 25000,
    "S&P 500": 24500,
  },
  {
    date: "Feb 2025",
    "Portfolio": 27500,
    "S&P 500": 26000,
  },
  {
    date: "Mar 2025",
    "Portfolio": 26800,
    "S&P 500": 25800,
  },
  {
    date: "Apr 2025",
    "Portfolio": 29200,
    "S&P 500": 27500,
  },
  {
    date: "May 2025",
    "Portfolio": 31500,
    "S&P 500": 28800,
  },
  {
    date: "Jun 2025",
    "Portfolio": 34800,
    "S&P 500": 30200,
  },
];

const topHoldings = [
  { name: "AAPL - Apple Inc.", value: 5.34 },
  { name: "MSFT - Microsoft Corp.", value: 5.97 },
  { name: "AMZN - Amazon.com Inc.", value: 6.15 },
  { name: "JNJ - Johnson & Johnson", value: 6.84 },
  { name: "JPM - JPMorgan Chase & Co.", value: 8.52 },
];

const assetAllocation = [
  { name: "Stocks", value: 65 },
  { name: "Bonds", value: 15 },
  { name: "Cash", value: 10 },
  { name: "Crypto", value: 5 },
  { name: "Commodities", value: 5 },
];

const marketIndices = [
  { name: "S&P 500", value: 5420.75, change: 0.85 },
  { name: "Nasdaq", value: 17850.30, change: 1.25 },
  { name: "Dow Jones", value: 42150.45, change: 0.45 },
  { name: "Russell 2000", value: 2180.60, change: -0.35 },
  { name: "VIX", value: 15.25, change: -2.50 },
];

const recentTrades = [
  { 
    id: "1", 
    date: "2025-06-15 14:30", 
    symbol: "AAPL", 
    type: "Buy", 
    quantity: 10, 
    price: 182.50, 
    status: "Filled", 
    total: 1825.00 
  },
  { 
    id: "2", 
    date: "2025-06-14 10:15", 
    symbol: "MSFT", 
    type: "Buy", 
    quantity: 5, 
    price: 410.25, 
    status: "Filled", 
    total: 2051.25 
  },
  { 
    id: "3", 
    date: "2025-06-12 11:45", 
    symbol: "GOOGL", 
    type: "Buy", 
    quantity: 8, 
    price: 155.40, 
    status: "Filled", 
    total: 1243.20 
  },
];

const latestSignals = [
  { 
    asset: "AAPL", 
    signal: "Buy", 
    price: "$182.50", 
    confidence: 85,
    date: "2025-06-15"
  },
  { 
    asset: "MSFT", 
    signal: "Buy", 
    price: "$415.30", 
    confidence: 78,
    date: "2025-06-12"
  },
  { 
    asset: "META", 
    signal: "Sell", 
    price: "$485.40", 
    confidence: 68,
    date: "2025-06-05"
  },
];

const topNews = [
  {
    id: "1",
    title: "Federal Reserve Signals Potential Rate Cut in September",
    source: "Financial Times",
    category: "Economy",
    date: "2025-06-15",
    impact: "High"
  },
  {
    id: "2",
    title: "Apple Unveils New AI Features for iPhone 17 Pro",
    source: "TechCrunch",
    category: "Technology",
    date: "2025-06-14",
    impact: "Medium"
  },
  {
    id: "3",
    title: "Oil Prices Surge Amid Middle East Tensions",
    source: "Bloomberg",
    category: "Commodities",
    date: "2025-06-13",
    impact: "High"
  },
];

export default function DashboardPage() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value / 100);
  };

  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card decoration="top" decorationColor="blue">
          <Flex justifyContent="between" alignItems="center">
            <Title>Portfolio Value</Title>
            <FaChartLine className="text-blue-500" />
          </Flex>
          <Metric>{formatCurrency(34800)}</Metric>
          <Flex className="mt-2">
            <Text>+$9,800</Text>
            <Badge color="green" icon={FaArrowUp}>+39.2%</Badge>
          </Flex>
        </Card>
        
        <Card decoration="top" decorationColor="green">
          <Flex justifyContent="between" alignItems="center">
            <Title>Today's Change</Title>
            <FaExchangeAlt className="text-green-500" />
          </Flex>
          <Metric>+{formatCurrency(450)}</Metric>
          <Flex className="mt-2">
            <Text>Since previous close</Text>
            <Badge color="green" icon={FaArrowUp}>+1.31%</Badge>
          </Flex>
        </Card>
        
        <Card decoration="top" decorationColor="indigo">
          <Flex justifyContent="between" alignItems="center">
            <Title>AI Signal Strength</Title>
            <FaRobot className="text-indigo-500" />
          </Flex>
          <Metric>72%</Metric>
          <Text>Overall market bullish sentiment</Text>
        </Card>
      </div>

      {/* Portfolio Performance Chart */}
      <Card>
        <Title>Portfolio Performance</Title>
        <Text>Comparison with S&P 500 benchmark</Text>
        <AreaChart
          className="mt-4 h-80"
          data={portfolioPerformance}
          index="date"
          categories={["Portfolio", "S&P 500"]}
          colors={["blue", "gray"]}
          valueFormatter={(number) => formatCurrency(number)}
          showLegend={true}
          showGridLines={true}
          curveType="monotone"
        />
      </Card>

      {/* Dashboard Widgets */}
      <Grid numItemsMd={6} className="gap-6">
        <Col numColSpanMd={3}>
          <Card>
            <Title>Top Holdings</Title>
            <Text>Percentage of portfolio</Text>
            <BarList
              data={topHoldings}
              className="mt-4"
              valueFormatter={(number) => `${number}%`}
              color="blue"
            />
            <div className="mt-4">
              <Link href="/dashboard/portfolio">
                <Button variant="light" color="blue" icon={FaExternalLinkAlt}>
                  View All Holdings
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
        
        <Col numColSpanMd={3}>
          <Card>
            <Title>Asset Allocation</Title>
            <Text>Distribution by asset class</Text>
            <DonutChart
              className="mt-4 h-60"
              data={assetAllocation}
              category="value"
              index="name"
              colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
              valueFormatter={(number) => `${number}%`}
              showLabel
            />
          </Card>
        </Col>
        
        <Col numColSpanMd={3}>
          <Card>
            <Title>Market Indices</Title>
            <Text>Current market performance</Text>
            <Table className="mt-4">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Index</TableHeaderCell>
                  <TableHeaderCell>Value</TableHeaderCell>
                  <TableHeaderCell>Change</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {marketIndices.map((index, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{index.name}</TableCell>
                    <TableCell>{formatCurrency(index.value)}</TableCell>
                    <TableCell className={index.change >= 0 ? "text-green-500" : "text-red-500"}>
                      {index.change >= 0 ? "+" : ""}{index.change}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Col>
        
        <Col numColSpanMd={3}>
          <Card>
            <Title>Recent Trades</Title>
            <Text>Your latest transactions</Text>
            <Table className="mt-4">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Date</TableHeaderCell>
                  <TableHeaderCell>Symbol</TableHeaderCell>
                  <TableHeaderCell>Type</TableHeaderCell>
                  <TableHeaderCell>Total</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentTrades.map((trade) => (
                  <TableRow key={trade.id}>
                    <TableCell>{trade.date.split(" ")[0]}</TableCell>
                    <TableCell className="font-medium">{trade.symbol}</TableCell>
                    <TableCell className={trade.type === "Buy" ? "text-green-500" : "text-red-500"}>
                      {trade.type}
                    </TableCell>
                    <TableCell>{formatCurrency(trade.total)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4">
              <Link href="/dashboard/trading">
                <Button variant="light" color="blue" icon={FaExternalLinkAlt}>
                  View All Trades
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
        
        <Col numColSpanMd={3}>
          <Card>
            <Title>Latest AI Signals</Title>
            <Text>Trading recommendations</Text>
            <div className="mt-4 space-y-4">
              {latestSignals.map((signal, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <Flex justifyContent="between" alignItems="center">
                    <div>
                      <Flex alignItems="center" className="gap-2">
                        <Text className="font-medium">{signal.asset}</Text>
                        <Badge
                          color={signal.signal === "Buy" ? "green" : "red"}
                          icon={signal.signal === "Buy" ? FaArrowUp : FaArrowDown}
                        >
                          {signal.signal}
                        </Badge>
                      </Flex>
                      <Text className="text-sm">{signal.price} • {signal.date}</Text>
                    </div>
                    <Badge color="blue">{signal.confidence}%</Badge>
                  </Flex>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/dashboard/ai-signals">
                <Button variant="light" color="blue" icon={FaExternalLinkAlt}>
                  View All Signals
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
        
        <Col numColSpanMd={3}>
          <Card>
            <Title>Market News</Title>
            <Text>Latest financial headlines</Text>
            <div className="mt-4 space-y-4">
              {topNews.map((news) => (
                <div key={news.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <Text className="font-medium">{news.title}</Text>
                  <Flex className="mt-1 gap-2">
                    <Text className="text-sm">{news.source}</Text>
                    <Text className="text-sm">•</Text>
                    <Text className="text-sm">{news.date}</Text>
                  </Flex>
                  <Flex className="mt-2 gap-2">
                    <Badge color="blue">{news.category}</Badge>
                    <Badge 
                      color={news.impact === "High" ? "red" : "yellow"}
                      icon={FaExclamationTriangle}
                    >
                      {news.impact} Impact
                    </Badge>
                  </Flex>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/dashboard/news">
                <Button variant="light" color="blue" icon={FaExternalLinkAlt}>
                  View All News
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Grid>
    </div>
  );
}