"use client";

import { useState } from "react";
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric, Flex, Badge, Grid, Col, AreaChart, DonutChart, BarList, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button, Select, SelectItem } from "@tremor/react";
import { FaChartPie, FaChartLine, FaHistory, FaArrowUp, FaArrowDown, FaExchangeAlt, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";

// Mock data
const portfolioValue = [
  {
    date: "Jan 2025",
    "Portfolio Value": 25000,
  },
  {
    date: "Feb 2025",
    "Portfolio Value": 27500,
  },
  {
    date: "Mar 2025",
    "Portfolio Value": 26800,
  },
  {
    date: "Apr 2025",
    "Portfolio Value": 29200,
  },
  {
    date: "May 2025",
    "Portfolio Value": 31500,
  },
  {
    date: "Jun 2025",
    "Portfolio Value": 34800,
  },
];

const assetAllocation = [
  { name: "Stocks", value: 65 },
  { name: "Bonds", value: 15 },
  { name: "Cash", value: 10 },
  { name: "Crypto", value: 5 },
  { name: "Commodities", value: 5 },
];

const sectorAllocation = [
  { name: "Technology", value: 35 },
  { name: "Healthcare", value: 20 },
  { name: "Financials", value: 15 },
  { name: "Consumer Discretionary", value: 10 },
  { name: "Communication Services", value: 10 },
  { name: "Other", value: 10 },
];

const holdings = [
  { 
    id: "1", 
    symbol: "AAPL", 
    name: "Apple Inc.", 
    sector: "Technology",
    quantity: 10, 
    avgPrice: 182.50, 
    currentPrice: 185.75, 
    value: 1857.50,
    pnl: 32.50, 
    pnlPercent: 1.78, 
    weight: 5.34
  },
  { 
    id: "2", 
    symbol: "MSFT", 
    name: "Microsoft Corp.", 
    sector: "Technology",
    quantity: 5, 
    avgPrice: 410.25, 
    currentPrice: 415.30, 
    value: 2076.50,
    pnl: 25.25, 
    pnlPercent: 1.23, 
    weight: 5.97
  },
  { 
    id: "3", 
    symbol: "GOOGL", 
    name: "Alphabet Inc.", 
    sector: "Communication Services",
    quantity: 8, 
    avgPrice: 155.40, 
    currentPrice: 152.20, 
    value: 1217.60,
    pnl: -25.60, 
    pnlPercent: -2.06, 
    weight: 3.50
  },
  { 
    id: "4", 
    symbol: "AMZN", 
    name: "Amazon.com Inc.", 
    sector: "Consumer Discretionary",
    quantity: 12, 
    avgPrice: 175.30, 
    currentPrice: 178.45, 
    value: 2141.40,
    pnl: 37.80, 
    pnlPercent: 1.80, 
    weight: 6.15
  },
  { 
    id: "5", 
    symbol: "JNJ", 
    name: "Johnson & Johnson", 
    sector: "Healthcare",
    quantity: 15, 
    avgPrice: 155.20, 
    currentPrice: 158.75, 
    value: 2381.25,
    pnl: 53.25, 
    pnlPercent: 2.29, 
    weight: 6.84
  },
  { 
    id: "6", 
    symbol: "JPM", 
    name: "JPMorgan Chase & Co.", 
    sector: "Financials",
    quantity: 20, 
    avgPrice: 145.80, 
    currentPrice: 148.25, 
    value: 2965.00,
    pnl: 49.00, 
    pnlPercent: 1.68, 
    weight: 8.52
  },
];

const transactions = [
  { 
    id: "1", 
    date: "2025-06-15", 
    symbol: "AAPL", 
    type: "Buy", 
    quantity: 5, 
    price: 182.50, 
    total: 912.50 
  },
  { 
    id: "2", 
    date: "2025-06-10", 
    symbol: "MSFT", 
    type: "Buy", 
    quantity: 2, 
    price: 410.25, 
    total: 820.50 
  },
  { 
    id: "3", 
    date: "2025-06-05", 
    symbol: "GOOGL", 
    type: "Buy", 
    quantity: 3, 
    price: 155.40, 
    total: 466.20 
  },
  { 
    id: "4", 
    date: "2025-05-28", 
    symbol: "TSLA", 
    type: "Sell", 
    quantity: 2, 
    price: 175.30, 
    total: 350.60 
  },
  { 
    id: "5", 
    date: "2025-05-20", 
    symbol: "AMZN", 
    type: "Buy", 
    quantity: 4, 
    price: 172.45, 
    total: 689.80 
  },
];

const performanceMetrics = [
  { metric: "Total Return", value: "39.2%", period: "YTD" },
  { metric: "Annualized Return", value: "15.8%", period: "3Y" },
  { metric: "Sharpe Ratio", value: "1.45", period: "3Y" },
  { metric: "Volatility", value: "12.3%", period: "1Y" },
  { metric: "Max Drawdown", value: "-8.5%", period: "1Y" },
  { metric: "Alpha", value: "2.8%", period: "3Y" },
  { metric: "Beta", value: "0.92", period: "3Y" },
  { metric: "Dividend Yield", value: "1.8%", period: "TTM" },
];

export default function PortfolioPage() {
  const [selectedTab, setSelectedTab] = useState("0");
  const [timeframe, setTimeframe] = useState("6M");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value / 100);
  };

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card decoration="top" decorationColor="blue">
          <Flex justifyContent="between" alignItems="center">
            <Title>Total Value</Title>
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
            <Title>Holdings</Title>
            <FaChartPie className="text-indigo-500" />
          </Flex>
          <Metric>15</Metric>
          <Flex className="mt-2">
            <Text>Across 6 sectors</Text>
            <Badge color="blue">Diversified</Badge>
          </Flex>
        </Card>
      </div>

      {/* Portfolio Performance Chart */}
      <Card>
        <Flex justifyContent="between" alignItems="center">
          <div>
            <Title>Portfolio Performance</Title>
            <Text>Historical value over time</Text>
          </div>
          <Select 
            value={timeframe} 
            onValueChange={setTimeframe}
            className="w-28"
          >
            <SelectItem value="1M">1 Month</SelectItem>
            <SelectItem value="3M">3 Months</SelectItem>
            <SelectItem value="6M">6 Months</SelectItem>
            <SelectItem value="1Y">1 Year</SelectItem>
            <SelectItem value="YTD">Year to Date</SelectItem>
            <SelectItem value="ALL">All Time</SelectItem>
          </Select>
        </Flex>
        <AreaChart
          className="mt-4 h-80"
          data={portfolioValue}
          index="date"
          categories={["Portfolio Value"]}
          colors={["blue"]}
          valueFormatter={(number) => formatCurrency(number)}
          showLegend={false}
          showGridLines={true}
          curveType="monotone"
        />
      </Card>

      {/* Portfolio Analysis Tabs */}
      <Card>
        <TabGroup index={parseInt(selectedTab)} onIndexChange={(index) => setSelectedTab(index.toString())}>
          <TabList>
            <Tab icon={FaChartPie}>Allocation</Tab>
            <Tab icon={FaChartLine}>Holdings</Tab>
            <Tab icon={FaHistory}>Transactions</Tab>
            <Tab icon={FaInfoCircle}>Performance</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="mt-4">
                <Grid numItemsMd={2} numItemsLg={2} className="gap-6">
                  <Col>
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
                  </Col>
                  <Col>
                    <Title>Sector Allocation</Title>
                    <Text>Distribution by sector</Text>
                    <DonutChart
                      className="mt-4 h-60"
                      data={sectorAllocation}
                      category="value"
                      index="name"
                      colors={["emerald", "green", "lime", "amber", "orange", "rose"]}
                      valueFormatter={(number) => `${number}%`}
                      showLabel
                    />
                  </Col>
                </Grid>
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4">
                <Title>Current Holdings</Title>
                <Text>Your investment positions</Text>
                <Table className="mt-4">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Symbol</TableHeaderCell>
                      <TableHeaderCell>Name</TableHeaderCell>
                      <TableHeaderCell>Sector</TableHeaderCell>
                      <TableHeaderCell>Quantity</TableHeaderCell>
                      <TableHeaderCell>Avg Price</TableHeaderCell>
                      <TableHeaderCell>Current Price</TableHeaderCell>
                      <TableHeaderCell>Value</TableHeaderCell>
                      <TableHeaderCell>P&L</TableHeaderCell>
                      <TableHeaderCell>P&L %</TableHeaderCell>
                      <TableHeaderCell>Weight</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {holdings.map((holding) => (
                      <TableRow key={holding.id}>
                        <TableCell className="font-medium">{holding.symbol}</TableCell>
                        <TableCell>{holding.name}</TableCell>
                        <TableCell>{holding.sector}</TableCell>
                        <TableCell>{holding.quantity}</TableCell>
                        <TableCell>{formatCurrency(holding.avgPrice)}</TableCell>
                        <TableCell>{formatCurrency(holding.currentPrice)}</TableCell>
                        <TableCell>{formatCurrency(holding.value)}</TableCell>
                        <TableCell className={holding.pnl >= 0 ? "text-green-500" : "text-red-500"}>
                          {formatCurrency(holding.pnl)}
                        </TableCell>
                        <TableCell className={holding.pnlPercent >= 0 ? "text-green-500" : "text-red-500"}>
                          {formatPercent(holding.pnlPercent)}
                        </TableCell>
                        <TableCell>{formatPercent(holding.weight)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4">
                <Title>Recent Transactions</Title>
                <Text>Your trading activity</Text>
                <Table className="mt-4">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Date</TableHeaderCell>
                      <TableHeaderCell>Symbol</TableHeaderCell>
                      <TableHeaderCell>Type</TableHeaderCell>
                      <TableHeaderCell>Quantity</TableHeaderCell>
                      <TableHeaderCell>Price</TableHeaderCell>
                      <TableHeaderCell>Total</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell className="font-medium">{transaction.symbol}</TableCell>
                        <TableCell className={transaction.type === "Buy" ? "text-green-500" : "text-red-500"}>
                          {transaction.type}
                        </TableCell>
                        <TableCell>{transaction.quantity}</TableCell>
                        <TableCell>{formatCurrency(transaction.price)}</TableCell>
                        <TableCell>{formatCurrency(transaction.total)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Flex justifyContent="center" className="mt-4">
                  <Button size="xs" variant="secondary" icon={FaCalendarAlt}>
                    View All Transactions
                  </Button>
                </Flex>
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4">
                <Title>Performance Metrics</Title>
                <Text>Key portfolio statistics</Text>
                <Grid numItemsMd={2} numItemsLg={4} className="gap-6 mt-4">
                  {performanceMetrics.map((metric, index) => (
                    <Card key={index} className="space-y-2">
                      <Text>{metric.metric}</Text>
                      <Metric className={metric.metric.includes("Drawdown") ? "text-red-500" : "text-blue-500"}>
                        {metric.value}
                      </Metric>
                      <Text className="text-xs text-muted-foreground">{metric.period}</Text>
                    </Card>
                  ))}
                </Grid>
                
                <div className="mt-6">
                  <Title>Top Contributors</Title>
                  <Text>Assets with highest contribution to performance</Text>
                  <BarList
                    data={[
                      { name: "MSFT - Microsoft Corp.", value: 3.2 },
                      { name: "AAPL - Apple Inc.", value: 2.8 },
                      { name: "AMZN - Amazon.com Inc.", value: 2.5 },
                      { name: "JPM - JPMorgan Chase & Co.", value: 1.9 },
                      { name: "JNJ - Johnson & Johnson", value: 1.7 },
                    ]}
                    className="mt-4"
                    valueFormatter={(number) => `+${number}%`}
                    color="green"
                  />
                </div>
                
                <div className="mt-6">
                  <Title>Bottom Contributors</Title>
                  <Text>Assets with lowest contribution to performance</Text>
                  <BarList
                    data={[
                      { name: "GOOGL - Alphabet Inc.", value: -1.2 },
                      { name: "NFLX - Netflix Inc.", value: -0.8 },
                      { name: "TSLA - Tesla Inc.", value: -0.6 },
                      { name: "PFE - Pfizer Inc.", value: -0.4 },
                      { name: "KO - Coca-Cola Co.", value: -0.2 },
                    ]}
                    className="mt-4"
                    valueFormatter={(number) => `${number}%`}
                    color="red"
                  />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}