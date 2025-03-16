# FinVision - Financial Trading Dashboard

FinVision is a modern financial trading dashboard built with Next.js, React, and Tremor UI. It provides a comprehensive platform for traders and investors to monitor markets, manage portfolios, execute trades, and receive AI-powered trading signals.

![FinVision Dashboard](https://placehold.co/1200x630/png?text=FinVision+Dashboard)

## Features

- **User Authentication**: Secure login and registration system
- **Dashboard Overview**: Quick view of portfolio performance, market indices, and key metrics
- **Portfolio Management**: Track investments, asset allocation, and performance metrics
- **Trading Platform**: Execute trades with real-time market data and position management
- **AI Trading Signals**: Receive AI-powered trading recommendations with confidence scores
- **Market Data**: Monitor indices, sectors, top movers, economic calendar, and global markets
- **Financial News**: Stay updated with the latest market news with filtering capabilities
- **User Profile**: Manage personal information and account settings
- **Dark Mode Support**: Toggle between light and dark themes for comfortable viewing

## Pages

### Authentication
- **Login**: Email/password authentication with "Remember me" option
- **Registration**: New user signup with form validation

### Dashboard
- **Home**: Overview of portfolio, market indices, recent trades, and AI signals
- **Portfolio**: Detailed view of holdings, asset allocation, transactions, and performance metrics
- **Trading**: Order entry form, position management, and real-time charts
- **AI Signals**: AI-generated trading recommendations with reasoning and confidence scores
- **Market Data**: Comprehensive market information including indices, sectors, and economic data
- **News**: Financial news feed with filtering by category, source, sentiment, and impact
- **Profile**: User profile management with activity tracking and notification history
- **Settings**: Application preferences, notification settings, API connections, and security options

## Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **UI Library**: React 18
- **Component Library**: Tremor UI
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Charts**: TradingView Widget integration

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Zweiblum66/finvision.git
   cd finvision
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
finvision/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── dashboard/
│   │   │   ├── ai-signals/
│   │   │   ├── market-data/
│   │   │   ├── news/
│   │   │   ├── portfolio/
│   │   │   ├── profile/
│   │   │   ├── settings/
│   │   │   ├── trading/
│   │   │   └── layout.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── charts/
│   │   │   └── TradingViewWidget.tsx
│   │   └── ui/
│   │       └── Sidebar.tsx
├── public/
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## Customization

### Theme

The application supports both light and dark modes. The theme can be toggled using the switch in the sidebar.

### API Connections

To connect to real trading APIs and market data providers:

1. Navigate to the Settings page
2. Go to the "API Connections" tab
3. Enter your API credentials for your broker and data provider

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Vercel

The easiest way to deploy the application is to use the [Vercel Platform](https://vercel.com).

```bash
npm install -g vercel
vercel
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tremor UI](https://www.tremor.so/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TradingView](https://www.tradingview.com/)
- [React Icons](https://react-icons.github.io/react-icons/)