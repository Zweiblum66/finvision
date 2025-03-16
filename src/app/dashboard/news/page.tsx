"use client";

import { useState } from "react";
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Flex, Badge, Grid, Col, Select, SelectItem, TextInput, Button } from "@tremor/react";
import { FaNewspaper, FaSearch, FaFilter, FaGlobe, FaChartLine, FaIndustry, FaBuilding, FaCalendarAlt, FaExternalLinkAlt, FaBookmark, FaShare, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

// Mock data for news articles
const newsArticles = [
  {
    id: "1",
    title: "Federal Reserve Signals Potential Rate Cut in September",
    summary: "The Federal Reserve has indicated it may begin cutting interest rates as early as September, citing improving inflation data and concerns about labor market cooling.",
    source: "Financial Times",
    category: "Economy",
    sentiment: "Neutral",
    date: "2025-06-15",
    url: "#",
    image: "https://placehold.co/600x400/png",
    tickers: ["SPY", "QQQ", "DIA"],
    impact: "High"
  },
  {
    id: "2",
    title: "Apple Unveils New AI Features for iPhone 17 Pro",
    summary: "Apple Inc. announced a suite of new artificial intelligence features for its upcoming iPhone 17 Pro, including enhanced voice recognition, predictive text, and image generation capabilities.",
    source: "TechCrunch",
    category: "Technology",
    sentiment: "Positive",
    date: "2025-06-14",
    url: "#",
    image: "https://placehold.co/600x400/png",
    tickers: ["AAPL", "MSFT", "GOOGL"],
    impact: "Medium"
  },
  {
    id: "3",
    title: "Oil Prices Surge Amid Middle East Tensions",
    summary: "Crude oil prices jumped 5% on Monday as geopolitical tensions in the Middle East escalated, raising concerns about potential supply disruptions from the region.",
    source: "Bloomberg",
    category: "Commodities",
    sentiment: "Negative",
    date: "2025-06-13",
    url: "#",
    image: "https://placehold.co/600x400/png",
    tickers: ["USO", "XLE", "CVX", "XOM"],
    impact: "High"
  },
  {
    id: "4",
    title: "Microsoft's Cloud Revenue Exceeds Expectations in Q2",
    summary: "Microsoft reported better-than-expected quarterly results, with Azure cloud services revenue growing 35% year-over-year, surpassing analyst estimates of 30%.",
    source: "CNBC",
    category: "Earnings",
    sentiment: "Positive",
    date: "2025-06-12",
    url: "#",
    image: "https://placehold.co/600x400/png",
    tickers: ["MSFT", "AMZN", "GOOGL"],
    impact: "Medium"
  },
  {
    id: "5",
    title: "Tesla Breaks Ground on New Gigafactory in India",
    summary: "Tesla has begun construction on its new manufacturing facility in India, marking a significant expansion into one of the world's fastest-growing electric vehicle markets.",
    source: "Reuters",
    category: "Manufacturing",
    sentiment: "Positive",
    date: "2025-06-11",
    url: "#",
    image: "https://placehold.co/600x400/png",
    tickers: ["TSLA"],
    impact: "Medium"
  },
  {
    id: "6",
    title: "Inflation Data Shows Continued Moderation in May",
    summary: "The Consumer Price Index rose 2.3% year-over-year in May, down from 2.5% in April, suggesting inflation continues to moderate toward the Federal Reserve's 2% target.",
    source: "Wall Street Journal",
    category: "Economy",
    sentiment: "Positive",
    date: "2025-06-10",
    url: "#",
    image: "https://placehold.co/600x400/png",
    tickers: ["SPY", "TLT", "GLD"],
    impact: "High"
  },
  {
    id: "7",
    title: "Amazon Acquires AI Startup for $2.5 Billion",
    summary: "Amazon announced the acquisition of a leading artificial intelligence startup specializing in natural language processing for $2.5 billion, its largest AI acquisition to date.",
    source: "TechCrunch",
    category: "Technology",
    sentiment: "Positive",
    date: "2025-06-09",
    url: "#",
    image: "https://placehold.co/600x400/png",
    tickers: ["AMZN", "MSFT", "GOOGL"],
    impact: "Medium"
  },
  {
    id: "8",
    title: "Banking Sector Faces New Regulatory Challenges",
    summary: "Global banking regulators have proposed stricter capital requirements that could impact profitability for major financial institutions over the next five years.",
    source: "Financial Times",
    category: "Finance",
    sentiment: "Negative",
    date: "2025-06-08",
    url: "#",
    image: "https://placehold.co/600x400/png",
    tickers: ["JPM", "BAC", "GS", "MS"],
    impact: "Medium"
  },
];

// Categories for filtering
const categories = [
  "All",
  "Economy",
  "Technology",
  "Finance",
  "Commodities",
  "Earnings",
  "Manufacturing",
  "Cryptocurrency",
  "Real Estate",
  "Healthcare",
];

// Sources for filtering
const sources = [
  "All",
  "Bloomberg",
  "CNBC",
  "Financial Times",
  "Reuters",
  "TechCrunch",
  "Wall Street Journal",
  "MarketWatch",
  "Barron's",
  "The Economist",
];

export default function NewsPage() {
  const [selectedTab, setSelectedTab] = useState("0");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSource, setSelectedSource] = useState("All");
  const [selectedSentiment, setSelectedSentiment] = useState("All");
  const [selectedImpact, setSelectedImpact] = useState("All");

  // Filter news articles based on search query and filters
  const filteredArticles = newsArticles.filter((article) => {
    // Search query filter
    if (searchQuery && !article.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !article.summary.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== "All" && article.category !== selectedCategory) {
      return false;
    }
    
    // Source filter
    if (selectedSource !== "All" && article.source !== selectedSource) {
      return false;
    }
    
    // Sentiment filter
    if (selectedSentiment !== "All" && article.sentiment !== selectedSentiment) {
      return false;
    }
    
    // Impact filter
    if (selectedImpact !== "All" && article.impact !== selectedImpact) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="space-y-6">
      {/* News Header */}
      <Card>
        <Flex justifyContent="between" alignItems="center">
          <div>
            <Title>Financial News</Title>
            <Text>Stay updated with the latest market news and analysis</Text>
          </div>
          <Badge icon={FaNewspaper} color="blue">
            {newsArticles.length} Articles
          </Badge>
        </Flex>
        
        {/* Search and Filters */}
        <div className="mt-4">
          <Grid numItemsMd={6} className="gap-4">
            <Col numColSpanMd={2}>
              <TextInput
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={FaSearch}
              />
            </Col>
            <Col>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                icon={FaFilter}
              >
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </Select>
            </Col>
            <Col>
              <Select
                value={selectedSource}
                onValueChange={setSelectedSource}
                icon={FaGlobe}
              >
                {sources.map((source) => (
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>
                ))}
              </Select>
            </Col>
            <Col>
              <Select
                value={selectedSentiment}
                onValueChange={setSelectedSentiment}
                icon={FaChartLine}
              >
                <SelectItem value="All">All Sentiment</SelectItem>
                <SelectItem value="Positive">Positive</SelectItem>
                <SelectItem value="Neutral">Neutral</SelectItem>
                <SelectItem value="Negative">Negative</SelectItem>
              </Select>
            </Col>
            <Col>
              <Select
                value={selectedImpact}
                onValueChange={setSelectedImpact}
                icon={FaIndustry}
              >
                <SelectItem value="All">All Impact</SelectItem>
                <SelectItem value="High">High Impact</SelectItem>
                <SelectItem value="Medium">Medium Impact</SelectItem>
                <SelectItem value="Low">Low Impact</SelectItem>
              </Select>
            </Col>
          </Grid>
        </div>
      </Card>

      {/* News Categories */}
      <Card>
        <TabGroup index={parseInt(selectedTab)} onIndexChange={(index) => setSelectedTab(index.toString())}>
          <TabList>
            <Tab>All News</Tab>
            <Tab>Market</Tab>
            <Tab>Economy</Tab>
            <Tab>Technology</Tab>
            <Tab>Earnings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="mt-4 space-y-6">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <NewsArticleCard key={article.id} article={article} />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Text>No articles found matching your filters.</Text>
                    <Button
                      variant="secondary"
                      className="mt-2"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                        setSelectedSource("All");
                        setSelectedSentiment("All");
                        setSelectedImpact("All");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4 space-y-6">
                {filteredArticles
                  .filter(article => ["Economy", "Finance", "Commodities"].includes(article.category))
                  .map((article) => (
                    <NewsArticleCard key={article.id} article={article} />
                  ))}
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4 space-y-6">
                {filteredArticles
                  .filter(article => article.category === "Economy")
                  .map((article) => (
                    <NewsArticleCard key={article.id} article={article} />
                  ))}
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4 space-y-6">
                {filteredArticles
                  .filter(article => article.category === "Technology")
                  .map((article) => (
                    <NewsArticleCard key={article.id} article={article} />
                  ))}
              </div>
            </TabPanel>
            
            <TabPanel>
              <div className="mt-4 space-y-6">
                {filteredArticles
                  .filter(article => article.category === "Earnings")
                  .map((article) => (
                    <NewsArticleCard key={article.id} article={article} />
                  ))}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}

// News Article Card Component
function NewsArticleCard({ article }: { article: any }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 h-48 md:h-full">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-3 p-4">
          <div className="flex flex-col h-full">
            <div>
              <Flex justifyContent="between" alignItems="start">
                <div>
                  <Title className="text-xl">{article.title}</Title>
                  <Flex className="mt-1 gap-2">
                    <Badge icon={FaBuilding} color="gray">{article.source}</Badge>
                    <Badge icon={FaFilter} color="blue">{article.category}</Badge>
                    <Badge 
                      icon={FaChartLine} 
                      color={
                        article.sentiment === "Positive" ? "green" : 
                        article.sentiment === "Negative" ? "red" : "gray"
                      }
                    >
                      {article.sentiment}
                    </Badge>
                    <Badge 
                      icon={FaIndustry} 
                      color={
                        article.impact === "High" ? "red" : 
                        article.impact === "Medium" ? "yellow" : "gray"
                      }
                    >
                      {article.impact} Impact
                    </Badge>
                  </Flex>
                </div>
                <Badge icon={FaCalendarAlt} color="gray">{article.date}</Badge>
              </Flex>
              
              <Text className="mt-3">{article.summary}</Text>
              
              {article.tickers.length > 0 && (
                <div className="mt-3">
                  <Text className="font-medium">Related Tickers:</Text>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {article.tickers.map((ticker: string) => (
                      <Badge key={ticker} color="blue">
                        {ticker}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Flex justifyContent="between" className="mt-4">
              <Flex className="gap-2">
                <Button size="xs" variant="secondary" icon={FaThumbsUp}>Useful</Button>
                <Button size="xs" variant="secondary" icon={FaThumbsDown}>Not Useful</Button>
              </Flex>
              <Flex className="gap-2">
                <Button size="xs" variant="secondary" icon={FaBookmark}>Save</Button>
                <Button size="xs" variant="secondary" icon={FaShare}>Share</Button>
                <Button size="xs" color="blue" icon={FaExternalLinkAlt}>Read More</Button>
              </Flex>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
}