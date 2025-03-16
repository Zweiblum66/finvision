"use client";

import { useState } from "react";
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric, Flex, Badge, Grid, Col, AreaChart, BarChart, LineChart, DonutChart, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button, Select, SelectItem, TextInput } from "@tremor/react";
import { FaChartLine, FaChartBar, FaChartPie, FaGlobe, FaSearch, FaFilter, FaArrowUp, FaArrowDown, FaExchangeAlt, FaInfoCircle, FaExternalLinkAlt, FaCalendarAlt, FaIndustry, FaBuilding } from "react-icons/fa";
import TradingViewWidget from "@/components/charts/TradingViewWidget";

// Mock data
const marketIndices = [
  { name: "S&P 500", symbol: "SPX", value: 5420.75, change: 0.85, prevClose: 5375.20 },
  { name: "Nasdaq Composite", symbol: "IXIC", value: 17850.30, change: 1.25, prevClose: 17630.15 },
  { name: "Dow Jones Industrial Average", symbol: "DJI", value: 42150.45, change: 0.45, prevClose: 41960.80 },
  { name: "Russell 2000", symbol: "RUT", value: 2180.60, change: -0.35, prevClose: 2188.25 },
  { name: "VIX", symbol: "VIX", value: 15.25, change: -2.50, prevClose: 15.64 },
];

const sectorPerformance = [
  { name: "Technology", value: 1.85 },
  { name: "Healthcare", value: 0.75 },
  { name: "Financials", value: 0.45 },
  { name: "Consumer Discretionary", value: 1.25 },
  { name: "Communication Services", value: 0.95 },
  { name: "Industrials", value: 0.35 },
  { name: "Energy", value: -0.65 },
  { name: "Materials", value: -0.25 },
  { name: "Utilities", value: -0.45 },
  { name: "Real Estate", value: -0.15 },
  { name: "Consumer Staples", value: 0.15 },
];

const topGainers = [
  { symbol: "NVDA", name: "NVIDIA Corporation", price: 112.80, change: 3.45, changePercent: 3.15, volume: "45.2M" },
  { symbol: "AAPL", name: "Apple Inc.", price: 185.75, change: 3.25, changePercent: 1.78, volume: "62.8M" },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 415.30, change: 5.05, changePercent: 1.23, volume: "28.5M" },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.45, change: 1.25, changePercent: 0.71, volume: "35.1M" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 152.20, change: 0.80, changePercent: 0.53, volume: "22.7M" },
];

const topLosers = [
  { symbol: "XOM", name: "Exxon Mobil Corporation", price: 112.40, change: -2.35, changePercent: -2.05, volume: "18.3M" },
  { symbol: "CVX", name: "Chevron Corporation", price: 155.60, change: -2.80, changePercent: -1.77, volume: "12.5M" },
  { symbol: "PFE", name: "Pfizer Inc.", price: 28.75, change: -0.45, changePercent: -1.54, volume: "25.6M" },
  { symbol: "KO", name: "The Coca-Cola Company", price: 62.30, change: -0.85, changePercent: -1.35, volume: "15.2M" },
  { symbol: "WMT", name: "Walmart Inc.", price: 68.45, change: -0.75, changePercent: -1.08, volume: "10.8M" },
];

const economicCalendar = [
  { 
    date: "2025-06-16", 
    time: "08:30 AM", 
    event: "Retail Sales", 
    actual: "0.4%", 
    forecast: "0.3%", 
    previous: "0.2%", 
    impact: "High" 
  },
  { 
    date: "2025-06-16", 
    time: "10:00 AM", 
    event: "Consumer Confidence", 
    actual: "102.5", 
    forecast: "101.8", 
    previous: "101.2", 
    impact: "Medium" 
  },
  { 
    date: "2025-06-17", 
    time: "08:30 AM", 
    event: "Housing Starts", 
    actual: "Pending", 
    forecast: "1.45M", 
    previous: "1.42M", 
    impact: "Medium" 
  },
  { 
    date: "2025-06-18", 
    time: "02:00 PM", 
    event: "FOMC Statement", 
    actual: "Pending", 
    forecast: "No Change", 
    previous: "No Change", 
    impact: "High" 
  },
  { 
    date: "2025-06-19", 
    time: "08:30 AM", 
    event: "Initial Jobless Claims", 
    actual: "Pending", 
    forecast: "235K", 
    previous: "240K", 
    impact: "Medium" 
  },
];

const commodities = [
  { name: "Crude Oil (WTI)", symbol: "CL", price: 82.45, change: -1.25, changePercent: -1.49 },
  { name: "Gold", symbol: "GC", price: 2350.80, change: 15.40, changePercent: 0.66 },
  { name: "Silver", symbol: "SI", price: 31.25, change: 0.45, changePercent: 1.46 },
  { name: "Natural Gas", symbol: "NG", price: 2.85, change: 0.08, changePercent: 2.89 },
  { name: "Copper", symbol: "HG", price: 4.25, change: -0.05, changePercent: -1.16 },
];

const currencies = [
  { pair: "EUR/USD", price: 1.0845, change: 0.0025, changePercent: 0.23 },
  { pair: "USD/JPY", price: 151.25, change: -0.35, changePercent: -0.23 },
  { pair: "GBP/USD", price: 1.2725, change: 0.0045, changePercent: 0.35 },
  { pair: "USD/CAD", price: 1.3645, change: -0.0015, changePercent: -0.11 },
  { pair: "USD/CHF", price: 0.9025, change: -0.0035, changePercent: -0.39 },
];

const historicalData = [
  { date: "Jan 2025", "S&P 500": 5100, "Nasdaq": 16800, "Dow Jones": 40200 },
  { date: "Feb 2025", "S&P 500": 5150, "Nasdaq": 17000, "Dow Jones": 40500 },
  { date: "Mar 2025", "S&P 500": 5200, "Nasdaq": 17200, "Dow Jones": 40800 },
  { date: "Apr 2025", "S&P 500": 5250, "Nasdaq": 17400, "Dow Jones": 41200 },
  { date: "May 2025", "S&P 500": 5350, "Nasdaq": 17600, "Dow Jones": 41800 },
  { date: "Jun 2025", "S&P 500": 5420, "Nasdaq": 17850, "Dow Jones": 42150 },
];

export default function MarketDataPage() {
  const [selectedTab, setSelectedTab] = useState("0");
  const [selectedSymbol, setSelectedSymbol] = useState("SPY");
  const [timeframe, setTimeframe] = useState("1D");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value / 100);
  };

  return (
    <div className="space-y-6">
      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card decoration="top" decorationColor="blue">
          <Flex justifyContent="between" alignItems="center">
            <Title>S&P 500</Title>
            <FaChartLine className="text-blue-500" />
          </Flex>
          <Metric>{marketIndices[0].value.toFixed(2)}</Metric>
          <Flex className="mt-2">
            <Text>+{marketIndices[0].change.toFixed(2)}</Text>
            <Badge color="green" icon={FaArrowUp}>+{marketIndices[0].change.toFixed(2)}%</Badge>
          </Flex>
        </Card>
        
        <Card decoration="top" decorationColor="indigo">
          <Flex justifyContent="between" alignItems="center">
            <Title>Nasdaq</Title>
            <FaChartLine className="text-indigo-500" />
          </Flex>
          <Metric>{marketIndices[1].value.toFixed(2)}</Metric>
          <Flex className="mt-2">
            <Text>+{marketIndices[1].change.toFixed(2)}</Text>
            <Badge color="green" icon={FaArrowUp}>+{marketIndices[1].change.toFixed(2)}%</Badge>
          </Flex>
        </Card>
        
        <Card decoration="top" decorationColor="cyan">
          <Flex justifyContent="between" alignItems="center">
            <Title>Dow Jones</Title>
            <FaChartLine className="text-cyan-500" />
          </Flex>
          <Metric>{marketIndices[2].value.toFixed(2)}</Metric>
          <Flex className="mt-2">
            <Text>+{marketIndices[2].change.toFixed(2)}</Text>
            <Badge color="green" icon={FaArrowUp}>+{marketIndices[2].change.toFixed(2)}%</Badge>
          </Flex>
        </Card>
      </div>

      {/* Market Chart */}
      <Card>
        <Flex justifyContent="between" alignItems="center">
          <div>
            <Title>Market Chart</Title>
            <Text>Real-time price data</Text>
          </div>
          <div className="flex gap-4">
            <Select 
              value={selectedSymbol} 
              onValueChange={setSelectedSymbol}
              className="w-40"
            >
              <SelectItem value="SPY">S&P 500 (SPY)</SelectItem>
              <SelectItem value="QQQ">Nasdaq (QQQ)</SelectItem>
              <SelectItem value="DIA">Dow Jones (DIA)</SelectItem>
              <SelectItem value="IWM">Russell 2000 (IWM)</SelectItem>
              <SelectItem value="VIX">VIX</SelectItem>
            </Select>
            <Select 
              value={timeframe} 
              onValueChange={setTimeframe}
              className="w-28"
            >
              <SelectItem value="1D">1 Day</SelectItem>
              <SelectItem value="1W">1 Week</SelectItem>
              <SelectItem value="1M">1 Month</SelectItem>
              <SelectItem value="3M">3 Months</SelectItem>
              <SelectItem value="1Y">1 Year</SelectItem>
              <SelectItem value="5Y">5 Years</SelectItem>
            </Select>
          </div>
        </Flex>
        <div className="mt-4 h-[400px]">
          <TradingViewWidget 
            symbol={selectedSymbol} 
            interval={timeframe}
            theme="dark"
            width="100%"
            height="100%"
          />
        </div>
      </Card>

      {/* Market Data Tabs */}
      <Card>
        <TabGroup index={parseInt(selectedTab)} onIndexChange={(index) => setSelectedTab(index.toString())}>
          <TabList>
            <Tab icon={FaChartLine}>Indices</Tab>
            <Tab icon={FaIndustry}>Sectors</Tab>
            <Tab icon={FaArrowUp}>Top Movers</Tab>
            <Tab icon={FaCalendarAlt}>Economic Calendar</Tab>
            <Tab icon={FaGlobe}>Global Markets</Tab>
          </TabList>
          <TabPanels>
            {/* Indices Tab */}
            <TabPanel>
              <div className="mt-4">
                <Title>Market Indices</Title>
                <Text>Current market performance</Text>
                <Table className="mt-4">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Index</TableHeaderCell>
                      <TableHeaderCell>Symbol</TableHeaderCell>
                      <TableHeaderCell>Price</TableHeaderCell>
                      <TableHeaderCell>Change</TableHeaderCell>
                      <TableHeaderCell>% Change</TableHeaderCell>
                      <TableHeaderCell>Previous Close</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {marketIndices.map((index, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{index.name}</TableCell>
                        <TableCell>{index.symbol}</TableCell>
                        <TableCell>{index.value.toFixed(2)}</TableCell>
                        <TableCell className={index.change >= 0 ? "text-green-500" : "text-red-500"}>
                          {index.change >= 0 ? "+" : ""}{index.change.toFixed(2)}
                        </TableCell>
                        <TableCell className={index.change >= 0 ? "text-green-500" : "text-red-500"}>
                          {index.change >= 0 ? "+" : ""}{index.change.toFixed(2)}%
                        </TableCell>
                        <TableCell>{index.prevClose.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="mt-6">
                  <Title>Historical Performance</Title>
                  <Text>6-month trend for major indices</Text>
                  <LineChart
                    className="mt-4 h-80"
                    data={historicalData}
                    index="date"
                    categories={["S&P 500", "Nasdaq", "Dow Jones"]}
                    colors={["blue", "indigo", "cyan"]}
                    valueFormatter={(number) => number.toString()}
                    showLegend
                    showGridLines
                  />
                </div>
              </div>
            </TabPanel>
            
            {/* Sectors Tab */}
            <TabPanel>
              <div className="mt-4">
                <Title>Sector Performance</Title>
                <Text>Today's sector performance</Text>
                <BarChart
                  className="mt-4 h-80"
                  data={sectorPerformance}
                  index="name"
                  categories={["value"]}
                  colors={["blue"]}
                  valueFormatter={(number) => `${number.toFixed(2)}%`}
                  showLegend={false}
                  showGridLines
                  layout="vertical"
                  stack={false}
                />
                
                <div className="mt-6">
                  <Title>Sector Allocation</Title>
                  <Text>S&P 500 sector weightings</Text>
                  <DonutChart
                    className="mt-4 h-80"
                    data={[
                      { name: "Technology", value: 28.5 },
                      { name: "Healthcare", value: 13.2 },
                      { name: "Financials", value: 12.8 },
                      { name: "Consumer Discretionary", value: 10.5 },
                      { name: "Communication Services", value: 8.7 },
                      { name: "Industrials", value: 8.3 },
                      { name: "Consumer Staples", value: 6.5 },
                      { name: "Energy", value: 4.2 },
                      { name: "Utilities", value: 2.8 },
                      { name: "Real Estate", value: 2.5 },
                      { name: "Materials", value: 2.0 },
                    ]}
                    category="value"
                    index="name"
                    valueFormatter={(number) => `${number}%`}
                    showLabel
                  />
                </div>
              </div>
            </TabPanel>
            
            {/* Top Movers Tab */}
            <TabPanel>
              <div className="mt-4">
                <Grid numItemsMd={2} className="gap-6">
                  <Col>
                    <Title>Top Gainers</Title>
                    <Text>Stocks with the largest percentage gains today</Text>
                    <Table className="mt-4">
                      <TableHead>
                        <TableRow>
                          <TableHeaderCell>Symbol</TableHeaderCell>
                          <TableHeaderCell>Name</TableHeaderCell>
                          <TableHeaderCell>Price</TableHeaderCell>
                          <TableHeaderCell>Change</TableHeaderCell>
                          <TableHeaderCell>% Change</TableHeaderCell>
                          <TableHeaderCell>Volume</TableHeaderCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {topGainers.map((stock, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{stock.symbol}</TableCell>
                            <TableCell>{stock.name}</TableCell>
                            <TableCell>{formatCurrency(stock.price)}</TableCell>
                            <TableCell className="text-green-500">
                              +{stock.change.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-green-500">
                              +{stock.changePercent.toFixed(2)}%
                            </TableCell>
                            <TableCell>{stock.volume}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Col>
                  
                  <Col>
                    <Title>Top Losers</Title>
                    <Text>Stocks with the largest percentage losses today</Text>
                    <Table className="mt-4">
                      <TableHead>
                        <TableRow>
                          <TableHeaderCell>Symbol</TableHeaderCell>
                          <TableHeaderCell>Name</TableHeaderCell>
                          <TableHeaderCell>Price</TableHeaderCell>
                          <TableHeaderCell>Change</TableHeaderCell>
                          <TableHeaderCell>% Change</TableHeaderCell>
                          <TableHeaderCell>Volume</TableHeaderCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {topLosers.map((stock, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{stock.symbol}</TableCell>
                            <TableCell>{stock.name}</TableCell>
                            <TableCell>{formatCurrency(stock.price)}</TableCell>
                            <TableCell className="text-red-500">
                              {stock.change.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-red-500">
                              {stock.changePercent.toFixed(2)}%
                            </TableCell>
                            <TableCell>{stock.volume}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Col>
                </Grid>
              </div>
            </TabPanel>
            
            {/* Economic Calendar Tab */}
            <TabPanel>
              <div className="mt-4">
                <Title>Economic Calendar</Title>
                <Text>Upcoming and recent economic events</Text>
                <Table className="mt-4">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Date</TableHeaderCell>
                      <TableHeaderCell>Time</TableHeaderCell>
                      <TableHeaderCell>Event</TableHeaderCell>
                      <TableHeaderCell>Actual</TableHeaderCell>
                      <TableHeaderCell>Forecast</TableHeaderCell>
                      <TableHeaderCell>Previous</TableHeaderCell>
                      <TableHeaderCell>Impact</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {economicCalendar.map((event, i) => (
                      <TableRow key={i}>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.time}</TableCell>
                        <TableCell className="font-medium">{event.event}</TableCell>
                        <TableCell className={
                          event.actual === "Pending" ? "text-gray-500" :
                          event.actual > event.forecast ? "text-green-500" :
                          event.actual < event.forecast ? "text-red-500" : ""
                        }>
                          {event.actual}
                        </TableCell>
                        <TableCell>{event.forecast}</TableCell>
                        <TableCell>{event.previous}</TableCell>
                        <TableCell>
                          <Badge 
                            color={
                              event.impact === "High" ? "red" :
                              event.impact === "Medium" ? "yellow" : "gray"
                            }
                          >
                            {event.impact}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabPanel>
            
            {/* Global Markets Tab */}
            <TabPanel>
              <div className="mt-4">
                <Grid numItemsMd={2} className="gap-6">
                  <Col>
                    <Title>Commodities</Title>
                    <Text>Current commodity prices</Text>
                    <Table className="mt-4">
                      <TableHead>
                        <TableRow>
                          <TableHeaderCell>Name</TableHeaderCell>
                          <TableHeaderCell>Symbol</TableHeaderCell>
                          <TableHeaderCell>Price</TableHeaderCell>
                          <TableHeaderCell>Change</TableHeaderCell>
                          <TableHeaderCell>% Change</TableHeaderCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {commodities.map((commodity, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{commodity.name}</TableCell>
                            <TableCell>{commodity.symbol}</TableCell>
                            <TableCell>{commodity.price.toFixed(2)}</TableCell>
                            <TableCell className={commodity.change >= 0 ? "text-green-500" : "text-red-500"}>
                              {commodity.change >= 0 ? "+" : ""}{commodity.change.toFixed(2)}
                            </TableCell>
                            <TableCell className={commodity.changePercent >= 0 ? "text-green-500" : "text-red-500"}>
                              {commodity.changePercent >= 0 ? "+" : ""}{commodity.changePercent.toFixed(2)}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Col>
                  
                  <Col>
                    <Title>Forex</Title>
                    <Text>Major currency pairs</Text>
                    <Table className="mt-4">
                      <TableHead>
                        <TableRow>
                          <TableHeaderCell>Pair</TableHeaderCell>
                          <TableHeaderCell>Price</TableHeaderCell>
                          <TableHeaderCell>Change</TableHeaderCell>
                          <TableHeaderCell>% Change</TableHeaderCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {currencies.map((currency, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{currency.pair}</TableCell>
                            <TableCell>{currency.price.toFixed(4)}</TableCell>
                            <TableCell className={currency.change >= 0 ? "text-green-500" : "text-red-500"}>
                              {currency.change >= 0 ? "+" : ""}{currency.change.toFixed(4)}
                            </TableCell>
                            <TableCell className={currency.changePercent >= 0 ? "text-green-500" : "text-red-500"}>
                              {currency.changePercent >= 0 ? "+" : ""}{currency.changePercent.toFixed(2)}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Col>
                </Grid>
                
                <div className="mt-6">
                  <Title>Global Indices</Title>
                  <Text>Major international market indices</Text>
                  <Table className="mt-4">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Index</TableHeaderCell>
                        <TableHeaderCell>Region</TableHeaderCell>
                        <TableHeaderCell>Price</TableHeaderCell>
                        <TableHeaderCell>Change</TableHeaderCell>
                        <TableHeaderCell>% Change</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">FTSE 100</TableCell>
                        <TableCell>UK</TableCell>
                        <TableCell>8,125.40</TableCell>
                        <TableCell className="text-green-500">+35.20</TableCell>
                        <TableCell className="text-green-500">+0.43%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">DAX</TableCell>
                        <TableCell>Germany</TableCell>
                        <TableCell>18,450.75</TableCell>
                        <TableCell className="text-green-500">+125.30</TableCell>
                        <TableCell className="text-green-500">+0.68%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Nikkei 225</TableCell>
                        <TableCell>Japan</TableCell>
                        <TableCell>38,750.60</TableCell>
                        <TableCell className="text-red-500">-125.40</TableCell>
                        <TableCell className="text-red-500">-0.32%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Hang Seng</TableCell>
                        <TableCell>Hong Kong</TableCell>
                        <TableCell>18,250.30</TableCell>
                        <TableCell className="text-green-500">+150.25</TableCell>
                        <TableCell className="text-green-500">+0.83%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Shanghai Composite</TableCell>
                        <TableCell>China</TableCell>
                        <TableCell>3,125.45</TableCell>
                        <TableCell className="text-red-500">-15.30</TableCell>
                        <TableCell className="text-red-500">-0.49%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}