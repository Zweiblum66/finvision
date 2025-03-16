"use client";

import { useState } from "react";
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric, Flex, Badge, Grid, Col, TextInput, Select, SelectItem, Button, AreaChart } from "@tremor/react";
import { FaUser, FaChartLine, FaCog, FaHistory, FaBell, FaShieldAlt, FaUserEdit, FaKey, FaCamera, FaCalendarAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding, FaGlobe, FaCheck, FaExclamationTriangle } from "react-icons/fa";

// Mock data
const userActivity = [
  {
    date: "Jan 2025",
    "Logins": 15,
    "Trades": 8,
  },
  {
    date: "Feb 2025",
    "Logins": 18,
    "Trades": 12,
  },
  {
    date: "Mar 2025",
    "Logins": 14,
    "Trades": 10,
  },
  {
    date: "Apr 2025",
    "Logins": 20,
    "Trades": 15,
  },
  {
    date: "May 2025",
    "Logins": 25,
    "Trades": 18,
  },
  {
    date: "Jun 2025",
    "Logins": 22,
    "Trades": 14,
  },
];

const loginHistory = [
  { date: "2025-06-15 14:30", device: "Chrome / Windows", location: "New York, USA", status: "Success", ip: "192.168.1.1" },
  { date: "2025-06-14 09:15", device: "Safari / macOS", location: "New York, USA", status: "Success", ip: "192.168.1.1" },
  { date: "2025-06-10 18:45", device: "Firefox / Linux", location: "Chicago, USA", status: "Failed", ip: "192.168.2.3" },
  { date: "2025-06-08 11:20", device: "Chrome / Android", location: "New York, USA", status: "Success", ip: "192.168.1.1" },
  { date: "2025-06-05 16:35", device: "Safari / iOS", location: "Boston, USA", status: "Success", ip: "192.168.3.4" },
];

const notificationHistory = [
  { 
    id: "1", 
    type: "Trade Execution", 
    message: "Buy order for 10 shares of AAPL executed at $182.50", 
    date: "2025-06-15 14:30", 
    read: true 
  },
  { 
    id: "2", 
    type: "AI Signal", 
    message: "New buy signal for MSFT with 78% confidence", 
    date: "2025-06-12 10:15", 
    read: true 
  },
  { 
    id: "3", 
    type: "Market News", 
    message: "Federal Reserve signals potential rate cut in September", 
    date: "2025-06-10 09:30", 
    read: false 
  },
  { 
    id: "4", 
    type: "Security Alert", 
    message: "New login detected from Chicago, USA", 
    date: "2025-06-10 18:45", 
    read: true 
  },
  { 
    id: "5", 
    type: "Portfolio Update", 
    message: "Your portfolio value increased by 1.5% today", 
    date: "2025-06-08 16:00", 
    read: false 
  },
];

export default function ProfilePage() {
  // Profile State
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [address, setAddress] = useState("123 Wall Street");
  const [city, setCity] = useState("New York");
  const [state, setState] = useState("NY");
  const [zipCode, setZipCode] = useState("10005");
  const [country, setCountry] = useState("United States");
  const [occupation, setOccupation] = useState("Financial Analyst");
  const [company, setCompany] = useState("Global Investments Inc.");
  const [website, setWebsite] = useState("https://johndoe.com");
  const [bio, setBio] = useState("Experienced financial analyst with a passion for market analysis and algorithmic trading.");
  
  // Password State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Handle form submissions
  const handleSaveProfile = () => {
    console.log("Saving profile...");
    // In a real app, this would send the data to an API
    alert("Profile saved successfully!");
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
  
  const handleUploadPhoto = () => {
    console.log("Uploading photo...");
    // In a real app, this would open a file picker and upload the selected image
    alert("This would open a file picker in a real application.");
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <Flex justifyContent="between" alignItems="center">
          <div>
            <Title>User Profile</Title>
            <Text>Manage your personal information and account settings</Text>
          </div>
          <Badge icon={FaUser} color="blue">
            Member since 2025
          </Badge>
        </Flex>
      </Card>
      
      {/* Profile Content */}
      <Grid numItemsMd={12} className="gap-6">
        {/* Profile Sidebar */}
        <Col numColSpanMd={4}>
          <Card className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4 relative">
                <FaUser className="text-gray-400 dark:text-gray-500 text-5xl" />
                <button 
                  className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full"
                  onClick={handleUploadPhoto}
                >
                  <FaCamera />
                </button>
              </div>
              <Title>{firstName} {lastName}</Title>
              <Text className="text-center mt-1">{occupation}</Text>
              <Text className="text-center text-muted-foreground">{company}</Text>
              
              <div className="w-full mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-500" />
                  <Text>{email}</Text>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-gray-500" />
                  <Text>{phone}</Text>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <Text>{city}, {state}, {country}</Text>
                </div>
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-gray-500" />
                  <Text>{company}</Text>
                </div>
                {website && (
                  <div className="flex items-center gap-2">
                    <FaGlobe className="text-gray-500" />
                    <Text>{website}</Text>
                  </div>
                )}
              </div>
              
              <div className="w-full mt-6">
                <Text className="font-medium">Bio</Text>
                <Text className="mt-1 text-muted-foreground">{bio}</Text>
              </div>
              
              <Button 
                color="blue" 
                icon={FaUserEdit}
                className="w-full mt-6"
                onClick={() => document.getElementById("edit-profile-tab")?.click()}
              >
                Edit Profile
              </Button>
            </div>
          </Card>
          
          <Card className="mt-6">
            <Title>Account Statistics</Title>
            <div className="mt-4 space-y-4">
              <div>
                <Text>Account Status</Text>
                <Badge color="green" icon={FaCheck} className="mt-1">Active</Badge>
              </div>
              <div>
                <Text>Member Since</Text>
                <Text className="mt-1">January 15, 2025</Text>
              </div>
              <div>
                <Text>Last Login</Text>
                <Text className="mt-1">June 15, 2025 14:30</Text>
              </div>
              <div>
                <Text>Total Trades</Text>
                <Text className="mt-1">78</Text>
              </div>
              <div>
                <Text>Portfolio Performance</Text>
                <Badge color="green" icon={FaChartLine} className="mt-1">+39.2% YTD</Badge>
              </div>
            </div>
          </Card>
        </Col>
        
        {/* Profile Tabs */}
        <Col numColSpanMd={8}>
          <Card>
            <TabGroup>
              <TabList>
                <Tab id="edit-profile-tab" icon={FaUserEdit}>Edit Profile</Tab>
                <Tab icon={FaKey}>Security</Tab>
                <Tab icon={FaHistory}>Activity</Tab>
                <Tab icon={FaBell}>Notifications</Tab>
              </TabList>
              <TabPanels>
                {/* Edit Profile Tab */}
                <TabPanel>
                  <div className="mt-4 space-y-6">
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
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Title className="text-lg">Address</Title>
                      <div className="mt-4 space-y-4">
                        <div>
                          <Text>Street Address</Text>
                          <TextInput
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter your street address"
                            className="mt-1"
                          />
                        </div>
                        
                        <Grid numItemsMd={3} className="gap-4">
                          <div>
                            <Text>City</Text>
                            <TextInput
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="Enter your city"
                              className="mt-1"
                            />
                          </div>
                          
                          <div>
                            <Text>State/Province</Text>
                            <TextInput
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              placeholder="Enter your state"
                              className="mt-1"
                            />
                          </div>
                          
                          <div>
                            <Text>ZIP/Postal Code</Text>
                            <TextInput
                              value={zipCode}
                              onChange={(e) => setZipCode(e.target.value)}
                              placeholder="Enter your ZIP code"
                              className="mt-1"
                            />
                          </div>
                        </Grid>
                        
                        <div>
                          <Text>Country</Text>
                          <Select
                            value={country}
                            onValueChange={setCountry}
                            className="mt-1"
                          >
                            <SelectItem value="United States">United States</SelectItem>
                            <SelectItem value="Canada">Canada</SelectItem>
                            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                            <SelectItem value="Australia">Australia</SelectItem>
                            <SelectItem value="Germany">Germany</SelectItem>
                            <SelectItem value="France">France</SelectItem>
                            <SelectItem value="Japan">Japan</SelectItem>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Title className="text-lg">Professional Information</Title>
                      <div className="mt-4 space-y-4">
                        <div>
                          <Text>Occupation</Text>
                          <TextInput
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            placeholder="Enter your occupation"
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Text>Company</Text>
                          <TextInput
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Enter your company"
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Text>Website</Text>
                          <TextInput
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            placeholder="Enter your website"
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Text>Bio</Text>
                          <TextInput
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Enter a short bio"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      color="blue" 
                      onClick={handleSaveProfile}
                      className="mt-4"
                    >
                      Save Profile
                    </Button>
                  </div>
                </TabPanel>
                
                {/* Security Tab */}
                <TabPanel>
                  <div className="mt-4 space-y-6">
                    <div>
                      <Title className="text-lg">Change Password</Title>
                      <div className="mt-4 space-y-4">
                        <div>
                          <Text>Current Password</Text>
                          <TextInput
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Enter your current password"
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Text>New Password</Text>
                          <TextInput
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter your new password"
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Text>Confirm New Password</Text>
                          <TextInput
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your new password"
                            className="mt-1"
                          />
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
                      <Title className="text-lg">Two-Factor Authentication</Title>
                      <Text className="mt-2">Add an extra layer of security to your account</Text>
                      
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                        <Flex justifyContent="between" alignItems="center">
                          <div>
                            <Text className="font-medium">Two-Factor Authentication is disabled</Text>
                            <Text className="text-sm mt-1">Enable 2FA to secure your account</Text>
                          </div>
                          <Button 
                            size="sm" 
                            color="blue"
                          >
                            Enable 2FA
                          </Button>
                        </Flex>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Title className="text-lg">Login History</Title>
                      <Text className="mt-2">Recent login activity on your account</Text>
                      
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
                                  <Text className="text-sm">•</Text>
                                  <Text className="text-sm">IP: {login.ip}</Text>
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
                    </div>
                  </div>
                </TabPanel>
                
                {/* Activity Tab */}
                <TabPanel>
                  <div className="mt-4 space-y-6">
                    <div>
                      <Title className="text-lg">Account Activity</Title>
                      <Text className="mt-2">Your login and trading activity over time</Text>
                      
                      <AreaChart
                        className="mt-4 h-80"
                        data={userActivity}
                        index="date"
                        categories={["Logins", "Trades"]}
                        colors={["blue", "green"]}
                        showLegend={true}
                        showGridLines={true}
                        curveType="monotone"
                      />
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Title className="text-lg">Recent Activity</Title>
                      <Text className="mt-2">Your recent actions on the platform</Text>
                      
                      <div className="mt-4 space-y-3">
                        <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Flex alignItems="center" className="gap-2">
                            <FaChartLine className="text-green-500" />
                            <div>
                              <Text className="font-medium">Trade Executed</Text>
                              <Text className="text-sm">Bought 10 shares of AAPL at $182.50</Text>
                            </div>
                          </Flex>
                          <Text className="text-sm text-muted-foreground mt-2">June 15, 2025 14:30</Text>
                        </div>
                        
                        <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Flex alignItems="center" className="gap-2">
                            <FaCog className="text-blue-500" />
                            <div>
                              <Text className="font-medium">Settings Updated</Text>
                              <Text className="text-sm">Changed notification preferences</Text>
                            </div>
                          </Flex>
                          <Text className="text-sm text-muted-foreground mt-2">June 14, 2025 11:15</Text>
                        </div>
                        
                        <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Flex alignItems="center" className="gap-2">
                            <FaUser className="text-indigo-500" />
                            <div>
                              <Text className="font-medium">Profile Updated</Text>
                              <Text className="text-sm">Updated personal information</Text>
                            </div>
                          </Flex>
                          <Text className="text-sm text-muted-foreground mt-2">June 12, 2025 09:45</Text>
                        </div>
                        
                        <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Flex alignItems="center" className="gap-2">
                            <FaChartLine className="text-red-500" />
                            <div>
                              <Text className="font-medium">Trade Executed</Text>
                              <Text className="text-sm">Sold 5 shares of TSLA at $175.30</Text>
                            </div>
                          </Flex>
                          <Text className="text-sm text-muted-foreground mt-2">June 10, 2025 15:20</Text>
                        </div>
                        
                        <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Flex alignItems="center" className="gap-2">
                            <FaShieldAlt className="text-yellow-500" />
                            <div>
                              <Text className="font-medium">Password Changed</Text>
                              <Text className="text-sm">Updated account password</Text>
                            </div>
                          </Flex>
                          <Text className="text-sm text-muted-foreground mt-2">June 8, 2025 10:30</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                
                {/* Notifications Tab */}
                <TabPanel>
                  <div className="mt-4 space-y-6">
                    <div>
                      <Title className="text-lg">Notification History</Title>
                      <Text className="mt-2">Recent notifications you've received</Text>
                      
                      <div className="mt-4 space-y-3">
                        {notificationHistory.map((notification) => (
                          <div 
                            key={notification.id} 
                            className={`p-3 border rounded-lg ${
                              notification.read 
                                ? "border-gray-200 dark:border-gray-700" 
                                : "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20"
                            }`}
                          >
                            <Flex justifyContent="between" alignItems="start">
                              <div>
                                <Flex alignItems="center" className="gap-2">
                                  <Text className="font-medium">{notification.type}</Text>
                                  {!notification.read && (
                                    <Badge color="blue">New</Badge>
                                  )}
                                </Flex>
                                <Text className="mt-1">{notification.message}</Text>
                              </div>
                              <Text className="text-sm text-muted-foreground">{notification.date}</Text>
                            </Flex>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Title className="text-lg">Notification Preferences</Title>
                      <Text className="mt-2">Manage how you receive notifications</Text>
                      
                      <div className="mt-4 space-y-4">
                        <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Text className="font-medium">Trade Execution</Text>
                          <Text className="text-sm mt-1">Notifications for completed trades</Text>
                          <Flex className="mt-2 gap-2">
                            <Badge color="green">Email</Badge>
                            <Badge color="green">Push</Badge>
                            <Badge color="gray">SMS</Badge>
                          </Flex>
                        </div>
                        
                        <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Text className="font-medium">AI Trading Signals</Text>
                          <Text className="text-sm mt-1">Notifications for new AI trading recommendations</Text>
                          <Flex className="mt-2 gap-2">
                            <Badge color="green">Email</Badge>
                            <Badge color="green">Push</Badge>
                            <Badge color="gray">SMS</Badge>
                          </Flex>
                        </div>
                        
                        <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Text className="font-medium">Market News</Text>
                          <Text className="text-sm mt-1">Notifications for important market news</Text>
                          <Flex className="mt-2 gap-2">
                            <Badge color="gray">Email</Badge>
                            <Badge color="gray">Push</Badge>
                            <Badge color="gray">SMS</Badge>
                          </Flex>
                        </div>
                        
                        <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Text className="font-medium">Security Alerts</Text>
                          <Text className="text-sm mt-1">Notifications for account security events</Text>
                          <Flex className="mt-2 gap-2">
                            <Badge color="green">Email</Badge>
                            <Badge color="green">Push</Badge>
                            <Badge color="green">SMS</Badge>
                          </Flex>
                        </div>
                      </div>
                      
                      <Button 
                        color="blue" 
                        className="mt-4"
                        onClick={() => window.location.href = "/dashboard/settings"}
                      >
                        Manage Notification Settings
                      </Button>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </Card>
        </Col>
      </Grid>
    </div>
  );
}