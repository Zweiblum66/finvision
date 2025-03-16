"use client";

import { useState } from "react";
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric, Flex, Badge, Grid, Col, TextInput, NumberInput, Select, SelectItem, Button, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from "@tremor/react";
import { FaChartLine, FaExchangeAlt, FaHistory, FaCheckCircle, FaExclamationTriangle, FaArrowUp, FaArrowDown, FaInfoCircle } from "react-icons/fa";
import TradingViewWidget from "@/components/charts/TradingViewWidget";

// Mock data
const positions = [
  { 
    id: "1", 
    symbol: "AAPL", 
    name: "Apple Inc.", 
    quantity: 10, 
    entryPrice: 182.50, 
    currentPrice: 185.75, 
    pnl: 32.50, 
    pnlPercent: 1.78, 
    value: 1857.50 
  },
  { 
    id: "2", 
    symbol: "MSFT", 
    name: "Microsoft Corp.", 
    quantity: 5, 
    entryPrice: 410.25, 
    currentPrice: 415.30, 
    pnl: 25.25, 
    pnlPercent: 1.23, 
    value: 2076.50 
  },
  { 
    id: "3", 
    symbol: "GOOGL", 
    name: "Alphabet Inc.", 
    quantity: 8, 
    entryPrice: 155.40, 
    currentPrice: 152.20, 
    pnl: -25.60, 
    pnlPercent: -2.06, 
    value: 1217.60 
  },
];

const orderHistory = [
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
  { 
    id: "4", 
    date: "2025-06-10 09:30", 
    symbol: "TSLA", 
    type: "Sell", 
    quantity: 3, 
    price: 175.30, 
    status: "Filled", 
    total: 525.90 
  },
  { 
    id: "5", 
    date: "2025-06-08 15:20", 
    symbol: "AMZN", 
    type: "Buy", 
    quantity: 2, 
    price: 178.45, 
    status: "Cancelled", 
    total: 356.90 
  },
];

const watchlist = [
  { symbol: "TSLA", name: "Tesla Inc.", price: 175.30, change: -2.15, changePercent: -1.21 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.45, change: 1.25, changePercent: 0.71 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 112.80, change: 3.45, changePercent: 3.15 },
  { symbol: "META", name: "Meta Platforms Inc.", price: 485.40, change: -1.75, changePercent: -0.36 },
];

export default function TradingPage() {
  const [selectedTab, setSelectedTab] = useState("0");
  const [selectedSymbol, setSelectedSymbol] = useState("AAPL");
  const [orderType, setOrderType] = useState("market");
  const [orderSide, setOrderSide] = useState("buy");
  const [quantity, setQuantity] = useState<number | undefined>(undefined);
  const [limitPrice, setLimitPrice] = useState<number | undefined>(undefined);
  const [stopPrice, setStopPrice] = useState<number | undefined>(undefined);

  const handleSubmitOrder = () => {
    // In a real application, this would submit the order to a backend API
    console.log({
      symbol: selectedSymbol,
      type: orderType,
      side: orderSide,
      quantity,
      limitPrice,
      stopPrice,
    });
    
    // Reset form
    setQuantity(undefined);
    setLimitPrice(undefined);
    setStopPrice(undefined);
    
    // Show success notification (in a real app)
    alert(`Order submitted: ${orderSide.toUpperCase()} ${quantity} ${selectedSymbol}`);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value / 100);
  };

  return (
    <div className="space-y-6">
      <Grid numItemsMd={3} className="gap-6">
        <Col numColSpanMd={2}>
          <Card>
            <Flex justifyContent="between" alignItems="center">
              <div>
                <Title>Market Chart</Title>
                <Text>Real-time price data</Text>
              </div>
              <Select 
                value={selectedSymbol} 
                onValueChange={setSelectedSymbol}
                className="w-40"
              >
                <SelectItem value="AAPL">AAPL</SelectItem>
                <SelectItem value="MSFT">MSFT</SelectItem>
                <SelectItem value="GOOGL">GOOGL</SelectItem>
                <SelectItem value="AMZN">AMZN</SelectItem>
                <SelectItem value="TSLA">TSLA</SelectItem>
                <SelectItem value="META">META</SelectItem>
              </Select>
            </Flex>
            <div className="mt-4 h-[400px]">
              <TradingViewWidget 
                symbol={selectedSymbol} 
                interval="1D"
                theme="dark"
                width="100%"
                height="100%"
              />
            </div>
          </Card>
        </Col>
        
        <Col>
          <Card>
            <Title>Order Entry</Title>
            <Text>Place a new trade</Text>
            
            <div className="mt-4 space-y-4">
              <div>
                <Text>Symbol</Text>
                <Select 
                  value={selectedSymbol} 
                  onValueChange={setSelectedSymbol}
                  className="mt-1"
                >
                  <SelectItem value="AAPL">AAPL - Apple Inc.</SelectItem>
                  <SelectItem value="MSFT">MSFT - Microsoft Corp.</SelectItem>
                  <SelectItem value="GOOGL">GOOGL - Alphabet Inc.</SelectItem>
                  <SelectItem value="AMZN">AMZN - Amazon.com Inc.</SelectItem>
                  <SelectItem value="TSLA">TSLA - Tesla Inc.</SelectItem>
                  <SelectItem value="META">META - Meta Platforms Inc.</SelectItem>
                </Select>
              </div>
              
              <div>
                <Text>Order Type</Text>
                <Select 
                  value={orderType} 
                  onValueChange={setOrderType}
                  className="mt-1"
                >
                  <SelectItem value="market">Market</SelectItem>
                  <SelectItem value="limit">Limit</SelectItem>
                  <SelectItem value="stop">Stop</SelectItem>
                  <SelectItem value="stopLimit">Stop Limit</SelectItem>
                </Select>
              </div>
              
              <div>
                <Text>Side</Text>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Button
                    color={orderSide === "buy" ? "green" : "gray"}
                    onClick={() => setOrderSide("buy")}
                    icon={FaArrowUp}
                  >
                    Buy
                  </Button>
                  <Button
                    color={orderSide === "sell" ? "red" : "gray"}
                    onClick={() => setOrderSide("sell")}
                    icon={FaArrowDown}
                  >
                    Sell
                  </Button>
                </div>
              </div>
              
              <div>
                <Text>Quantity</Text>
                <NumberInput
                  value={quantity}
                  onValueChange={setQuantity}
                  min={1}
                  step={1}
                  className="mt-1"
                />
              </div>
              
              {(orderType === "limit" || orderType === "stopLimit") && (
                <div>
                  <Text>Limit Price</Text>
                  <NumberInput
                    value={limitPrice}
                    onValueChange={setLimitPrice}
                    min={0.01}
                    step={0.01}
                    className="mt-1"
                  />
                </div>
              )}
              
              {(orderType === "stop" || orderType === "stopLimit") && (
                <div>
                  <Text>Stop Price</Text>
                  <NumberInput
                    value={stopPrice}
                    onValueChange={setStopPrice}
                    min={0.01}
                    step={0.01}
                    className="mt-1"
                  />
                </div>
              )}
              
              <Button
                color={orderSide === "buy" ? "green" : "red"}
                onClick={handleSubmitOrder}
                disabled={!quantity || (orderType !== "market" && !limitPrice && !stopPrice)}
                className="w-full mt-4"
              >
                {orderSide === "buy" ? "Buy" : "Sell"} {selectedSymbol}
              </Button>
            </div>
          </Card>
        </Col>
      </Grid>
      
      <Card>
        <TabGroup index={parseInt(selectedTab)} onIndexChange={(index) => setSelectedTab(index.toString())}>
          <TabList>
            <Tab icon={FaExchangeAlt}>Open Positions</Tab>
            <Tab icon={FaHistory}>Order History</Tab>
            <Tab icon={FaChartLine}>Watchlist</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="mt-4">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Symbol</TableHeaderCell>
                      <TableHeaderCell>Name</TableHeaderCell>
                      <TableHeaderCell>Quantity</TableHeaderCell>
                      <TableHeaderCell>Entry Price</TableHeaderCell>
                      <TableHeaderCell>Current Price</TableHeaderCell>
                      <TableHeaderCell>P&L</TableHeaderCell>
                      <TableHeaderCell>P&L %</TableHeaderCell>
                      <TableHeaderCell>Value</TableHeaderCell>
                      <TableHeaderCell>Actions</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {positions.map((position) => (
                      <TableRow key={position.id}>
                        <TableCell className="font-medium">{position.symbol}</TableCell>
                        <TableCell>{position.name}</TableCell>
                        <TableCell>{position.quantity}</TableCell>
                        <TableCell>{formatCurrency(position.entryPrice)}</TableCell>
                        <TableCell>{formatCurrency(position.currentPrice)}</TableCell>
                        <TableCell className={position.pnl >= 0 ? "text-green-500" : "text-red-500"}>
                          {formatCurrency(position.pnl)}
                        </TableCell>
                        <TableCell className={position.pnlPercent >= 0 ? "text-green-500" : "text-red-500"}>
                          {formatPercent(position.pnlPercent)}
                        </TableCell>
                        <TableCell>{formatCurrency(position.value)}</TableCell>
                        <TableCell>
                          <Flex justifyContent="start" className="gap-2">
                            <Button size="xs" variant="secondary" color="green">Buy</Button>
                            <Button size="xs" variant="secondary" color="red">Sell</Button>
                          </Flex>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Date</TableHeaderCell>
                      <TableHeaderCell>Symbol</TableHeaderCell>
                      <TableHeaderCell>Type</TableHeaderCell>
                      <TableHeaderCell>Quantity</TableHeaderCell>
                      <TableHeaderCell>Price</TableHeaderCell>
                      <TableHeaderCell>Total</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orderHistory.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="font-medium">{order.symbol}</TableCell>
                        <TableCell className={order.type === "Buy" ? "text-green-500" : "text-red-500"}>
                          {order.type}
                        </TableCell>
                        <TableCell>{order.quantity}</TableCell>
                        <TableCell>{formatCurrency(order.price)}</TableCell>
                        <TableCell>{formatCurrency(order.total)}</TableCell>
                        <TableCell>
                          {order.status === "Filled" ? (
                            <Badge icon={FaCheckCircle} color="green">Filled</Badge>
                          ) : (
                            <Badge icon={FaExclamationTriangle} color="yellow">Cancelled</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Symbol</TableHeaderCell>
                      <TableHeaderCell>Name</TableHeaderCell>
                      <TableHeaderCell>Price</TableHeaderCell>
                      <TableHeaderCell>Change</TableHeaderCell>
                      <TableHeaderCell>Change %</TableHeaderCell>
                      <TableHeaderCell>Actions</TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {watchlist.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.symbol}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{formatCurrency(item.price)}</TableCell>
                        <TableCell className={item.change >= 0 ? "text-green-500" : "text-red-500"}>
                          {item.change >= 0 ? "+" : ""}{formatCurrency(item.change)}
                        </TableCell>
                        <TableCell className={item.changePercent >= 0 ? "text-green-500" : "text-red-500"}>
                          {item.changePercent >= 0 ? "+" : ""}{formatPercent(item.changePercent)}
                        </TableCell>
                        <TableCell>
                          <Flex justifyContent="start" className="gap-2">
                            <Button 
                              size="xs" 
                              variant="secondary" 
                              color="blue"
                              onClick={() => {
                                setSelectedSymbol(item.symbol);
                                setSelectedTab("0"); // Switch to chart tab
                              }}
                            >
                              Chart
                            </Button>
                            <Button 
                              size="xs" 
                              variant="secondary" 
                              color="green"
                              onClick={() => {
                                setSelectedSymbol(item.symbol);
                                setOrderSide("buy");
                              }}
                            >
                              Trade
                            </Button>
                          </Flex>
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