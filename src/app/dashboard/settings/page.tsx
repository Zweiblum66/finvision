"use client";

import { useState } from "react";
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Flex, Badge, Grid, Col, TextInput, Select, SelectItem, Button, Switch } from "@tremor/react";
import { FaCog, FaBell, FaKey, FaUser, FaShieldAlt, FaTrash, FaExclamationTriangle, FaCheck, FaEye, FaEyeSlash, FaExchangeAlt, FaGlobe, FaMoon, FaSun, FaLock, FaHistory, FaSignOutAlt, FaUserShield } from "react-icons/fa";

export default function SettingsPage() {
  // General Settings State
  const [darkMode, setDarkMode] = useState(true);
  const [autoTrade, setAutoTrade] = useState(false);
  const [confirmTrades, setConfirmTrades] = useState(true);
  
  // Notification Settings State
  const [tradeNotifications, setTradeNotifications] = useState(true);
  const [signalNotifications, setSignalNotifications] = useState(true);
  const [newsNotifications, setNewsNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  
  // API Connection Settings State
  const [brokerApiKey, setBrokerApiKey] = useState("");
  const [brokerApiSecret, setBrokerApiSecret] = useState("");
  const [brokerName, setBrokerName] = useState("alpaca");
  const [dataProviderApiKey, setDataProviderApiKey] = useState("");
  const [dataProviderName, setDataProviderName] = useState("alphavantage");
  
  // Account Settings State
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Security Settings State
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState("30");
  
  // Login History Mock Data
  const loginHistory = [
    { date: "2025-06-15 14:30", device: "Chrome / Windows", location: "New York, USA", status: "Success" },
    { date: "2025-06-14 09:15", device: "Safari / macOS", location: "New York, USA", status: "Success" },
    { date: "2025-06-10 18:45", device: "Firefox / Linux", location: "Chicago, USA", status: "Failed" },
    { date: "2025-06-08 11:20", device: "Chrome / Android", location: "New York, USA", status: "Success" },
  ];
  
  // Handle form submissions
  const handleSaveGeneralSettings = () => {
    console.log("Saving general settings...");
    // In a real app, this would send the data to an API
    alert("General settings saved successfully!");
  };
  
  const handleSaveNotificationSettings = () => {
    console.log("Saving notification settings...");
    // In a real app, this would send the data to an API
    alert("Notification settings saved successfully!");
  };
  
  const handleSaveApiSettings = () => {
    console.log("Saving API connection settings...");
    // In a real app, this would send the data to an API
    alert("API connection settings saved successfully!");
  };
  
  const handleSaveAccountSettings = () => {
    console.log("Saving account settings...");
    // In a real app, this would send the data to an API
    alert("Account settings saved successfully!");
  };
  
  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    
    console.log("Changing password...");
    // In a real app, this would send the data to an API
    alert("Password changed successfully!");
    
    // Reset password fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  
  const handleSaveSecuritySettings = () => {
    console.log("Saving security settings...");
    // In a real app, this would send the data to an API
    alert("Security settings saved successfully!");
  };
  
  const handleDeleteAccount = () => {
    const confirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmed) {
      console.log("Deleting account...");
      // In a real app, this would send the data to an API
      alert("Account deletion request submitted. You will receive an email with further instructions.");
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <Title>Settings</Title>
        <Text>Manage your account preferences and configurations</Text>
        
        <TabGroup className="mt-6">
          <TabList>
            <Tab icon={FaCog}>General</Tab>
            <Tab icon={FaBell}>Notifications</Tab>
            <Tab icon={FaExchangeAlt}>API Connections</Tab>
            <Tab icon={FaUser}>Account</Tab>
            <Tab icon={FaShieldAlt}>Security</Tab>
          </TabList>
          <TabPanels>
            {/* General Settings */}
            <TabPanel>
              <div className="mt-6 space-y-6">
                <div>
                  <Title className="text-lg">Appearance</Title>
                  <div className="mt-2 space-y-4">
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>Dark Mode</Text>
                        <Text className="text-sm text-muted-foreground">Enable dark mode for the application</Text>
                      </div>
                      <Switch 
                        checked={darkMode} 
                        onChange={() => setDarkMode(!darkMode)}
                        color="blue"
                      />
                    </Flex>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Title className="text-lg">Trading Preferences</Title>
                  <div className="mt-2 space-y-4">
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>Automated Trading</Text>
                        <Text className="text-sm text-muted-foreground">Allow AI signals to automatically execute trades</Text>
                      </div>
                      <Switch 
                        checked={autoTrade} 
                        onChange={() => setAutoTrade(!autoTrade)}
                        color="blue"
                      />
                    </Flex>
                    
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>Trade Confirmation</Text>
                        <Text className="text-sm text-muted-foreground">Require confirmation before executing trades</Text>
                      </div>
                      <Switch 
                        checked={confirmTrades} 
                        onChange={() => setConfirmTrades(!confirmTrades)}
                        color="blue"
                      />
                    </Flex>
                  </div>
                </div>
                
                <Button 
                  color="blue" 
                  onClick={handleSaveGeneralSettings}
                  className="mt-4"
                >
                  Save Changes
                </Button>
              </div>
            </TabPanel>
            
            {/* Notification Settings */}
            <TabPanel>
              <div className="mt-6 space-y-6">
                <div>
                  <Title className="text-lg">Notification Types</Title>
                  <div className="mt-2 space-y-4">
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>Trade Execution</Text>
                        <Text className="text-sm text-muted-foreground">Notifications for completed trades</Text>
                      </div>
                      <Switch 
                        checked={tradeNotifications} 
                        onChange={() => setTradeNotifications(!tradeNotifications)}
                        color="blue"
                      />
                    </Flex>
                    
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>AI Trading Signals</Text>
                        <Text className="text-sm text-muted-foreground">Notifications for new AI trading recommendations</Text>
                      </div>
                      <Switch 
                        checked={signalNotifications} 
                        onChange={() => setSignalNotifications(!signalNotifications)}
                        color="blue"
                      />
                    </Flex>
                    
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>Market News</Text>
                        <Text className="text-sm text-muted-foreground">Notifications for important market news</Text>
                      </div>
                      <Switch 
                        checked={newsNotifications} 
                        onChange={() => setNewsNotifications(!newsNotifications)}
                        color="blue"
                      />
                    </Flex>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Title className="text-lg">Delivery Methods</Title>
                  <div className="mt-2 space-y-4">
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>Email Notifications</Text>
                        <Text className="text-sm text-muted-foreground">Receive notifications via email</Text>
                      </div>
                      <Switch 
                        checked={emailNotifications} 
                        onChange={() => setEmailNotifications(!emailNotifications)}
                        color="blue"
                      />
                    </Flex>
                    
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>Push Notifications</Text>
                        <Text className="text-sm text-muted-foreground">Receive notifications in your browser</Text>
                      </div>
                      <Switch 
                        checked={pushNotifications} 
                        onChange={() => setPushNotifications(!pushNotifications)}
                        color="blue"
                      />
                    </Flex>
                    
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>SMS Notifications</Text>
                        <Text className="text-sm text-muted-foreground">Receive notifications via text message</Text>
                      </div>
                      <Switch 
                        checked={smsNotifications} 
                        onChange={() => setSmsNotifications(!smsNotifications)}
                        color="blue"
                      />
                    </Flex>
                  </div>
                </div>
                
                <Button 
                  color="blue" 
                  onClick={handleSaveNotificationSettings}
                  className="mt-4"
                >
                  Save Changes
                </Button>
              </div>
            </TabPanel>
            
            {/* API Connections */}
            <TabPanel>
              <div className="mt-6 space-y-6">
                <div>
                  <Title className="text-lg">Broker Integration</Title>
                  <Text className="text-sm text-muted-foreground">Connect your brokerage account to enable trading</Text>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <Text>Broker</Text>
                      <Select 
                        value={brokerName} 
                        onValueChange={setBrokerName}
                        className="mt-1"
                      >
                        <SelectItem value="alpaca">Alpaca</SelectItem>
                        <SelectItem value="interactive_brokers">Interactive Brokers</SelectItem>
                        <SelectItem value="td_ameritrade">TD Ameritrade</SelectItem>
                        <SelectItem value="robinhood">Robinhood</SelectItem>
                        <SelectItem value="etrade">E*TRADE</SelectItem>
                      </Select>
                    </div>
                    
                    <div>
                      <Text>API Key</Text>
                      <TextInput
                        value={brokerApiKey}
                        onChange={(e) => setBrokerApiKey(e.target.value)}
                        placeholder="Enter your broker API key"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Text>API Secret</Text>
                      <TextInput
                        type="password"
                        value={brokerApiSecret}
                        onChange={(e) => setBrokerApiSecret(e.target.value)}
                        placeholder="Enter your broker API secret"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Title className="text-lg">Market Data Provider</Title>
                  <Text className="text-sm text-muted-foreground">Connect to a market data provider for real-time data</Text>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <Text>Provider</Text>
                      <Select 
                        value={dataProviderName} 
                        onValueChange={setDataProviderName}
                        className="mt-1"
                      >
                        <SelectItem value="alphavantage">Alpha Vantage</SelectItem>
                        <SelectItem value="iex">IEX Cloud</SelectItem>
                        <SelectItem value="polygon">Polygon.io</SelectItem>
                        <SelectItem value="finnhub">Finnhub</SelectItem>
                        <SelectItem value="tiingo">Tiingo</SelectItem>
                      </Select>
                    </div>
                    
                    <div>
                      <Text>API Key</Text>
                      <TextInput
                        value={dataProviderApiKey}
                        onChange={(e) => setDataProviderApiKey(e.target.value)}
                        placeholder="Enter your data provider API key"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  color="blue" 
                  onClick={handleSaveApiSettings}
                  className="mt-4"
                >
                  Save Connections
                </Button>
              </div>
            </TabPanel>
            
            {/* Account Settings */}
            <TabPanel>
              <div className="mt-6 space-y-6">
                <div>
                  <Title className="text-lg">Personal Information</Title>
                  <div className="mt-4 space-y-4">
                    <Grid numItemsMd={2} className="gap-4">
                      <div>
                        <Text>First Name</Text>
                        <TextInput
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Enter your first name"
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Text>Last Name</Text>
                        <TextInput
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Enter your last name"
                          className="mt-1"
                        />
                      </div>
                    </Grid>
                    
                    <div>
                      <Text>Email Address</Text>
                      <TextInput
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Text>Phone Number</Text>
                      <TextInput
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    color="blue" 
                    onClick={handleSaveAccountSettings}
                    className="mt-4"
                  >
                    Save Information
                  </Button>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Title className="text-lg">Change Password</Title>
                  <div className="mt-4 space-y-4">
                    <div>
                      <Text>Current Password</Text>
                      <div className="relative">
                        <TextInput
                          type={showCurrentPassword ? "text" : "password"}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="Enter your current password"
                          className="mt-1 pr-10"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-1"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        >
                          {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <Text>New Password</Text>
                      <div className="relative">
                        <TextInput
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter your new password"
                          className="mt-1 pr-10"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-1"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <Text>Confirm New Password</Text>
                      <div className="relative">
                        <TextInput
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm your new password"
                          className="mt-1 pr-10"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-1"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    color="blue" 
                    onClick={handleChangePassword}
                    className="mt-4"
                  >
                    Change Password
                  </Button>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Title className="text-lg">Danger Zone</Title>
                  <Text className="text-sm text-muted-foreground mt-2">Permanently delete your account and all associated data</Text>
                  
                  <Button 
                    color="red" 
                    variant="secondary"
                    icon={FaTrash}
                    onClick={handleDeleteAccount}
                    className="mt-4"
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </TabPanel>
            
            {/* Security Settings */}
            <TabPanel>
              <div className="mt-6 space-y-6">
                <div>
                  <Title className="text-lg">Two-Factor Authentication</Title>
                  <div className="mt-2 space-y-4">
                    <Flex justifyContent="between" alignItems="center">
                      <div>
                        <Text>Enable 2FA</Text>
                        <Text className="text-sm text-muted-foreground">Add an extra layer of security to your account</Text>
                      </div>
                      <Switch 
                        checked={twoFactorEnabled} 
                        onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                        color="blue"
                      />
                    </Flex>
                    
                    {twoFactorEnabled && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                        <Text className="font-medium">Two-Factor Authentication is enabled</Text>
                        <Text className="text-sm mt-1">Your account is protected with an additional layer of security.</Text>
                        <Button 
                          size="xs" 
                          variant="secondary" 
                          color="blue"
                          className="mt-2"
                        >
                          Reconfigure 2FA
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Title className="text-lg">Session Settings</Title>
                  <div className="mt-2 space-y-4">
                    <div>
                      <Text>Session Timeout</Text>
                      <Text className="text-sm text-muted-foreground">Automatically log out after a period of inactivity</Text>
                      <Select 
                        value={sessionTimeout} 
                        onValueChange={setSessionTimeout}
                        className="mt-2"
                      >
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Title className="text-lg">Login History</Title>
                  <Text className="text-sm text-muted-foreground">Recent login activity on your account</Text>
                  
                  <div className="mt-4 space-y-3">
                    {loginHistory.map((login, index) => (
                      <div key={index} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <Flex justifyContent="between" alignItems="center">
                          <div>
                            <Text className="font-medium">{login.date}</Text>
                            <Flex className="mt-1 gap-2">
                              <Text className="text-sm">{login.device}</Text>
                              <Text className="text-sm">•</Text>
                              <Text className="text-sm">{login.location}</Text>
                            </Flex>
                          </div>
                          <Badge 
                            color={login.status === "Success" ? "green" : "red"}
                            icon={login.status === "Success" ? FaCheck : FaExclamationTriangle}
                          >
                            {login.status}
                          </Badge>
                        </Flex>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    color="gray"
                    icon={FaHistory}
                    className="mt-4"
                  >
                    View Full Login History
                  </Button>
                </div>
                
                <Button 
                  color="blue" 
                  onClick={handleSaveSecuritySettings}
                  className="mt-4"
                >
                  Save Security Settings
                </Button>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}