# FinVision - AI-Powered Financial Trading Platform

FinVision is a comprehensive financial trading platform with AI capabilities, dark mode support, and multi-user management. The application provides real-time market data, AI-powered analysis, and trading functionality.

![FinVision Dashboard](https://via.placeholder.com/800x450.png?text=FinVision+Dashboard)

## Features

- **Dark Mode Dashboard with Widgets**: A fully responsive, customizable dashboard with toggle between light and dark themes for better viewing experience.
- **Real-time Market Data**: Integration with free data providers (Alpha Vantage, Twelve Data, Finnhub) for global market data including indices like DAX, Dow Jones, and NASDAQ.
- **AI-Powered Analysis**: Machine learning models to analyze news sentiment, generate trading signals, and identify market patterns.
- **Trading Functionality**: Both semi-automated (signal generation with human confirmation) and fully automated trading capabilities.
- **Multi-User System**: Secure authentication with password protection and optional multi-factor authentication.
- **Advanced Technical Analysis**: Implementation of technical indicators like RSI, MACD, moving averages for market analysis.

## Technology Stack

- **Frontend**: Next.js with React and TypeScript
- **Styling**: Tailwind CSS with dark mode support
- **UI Components**: Tremor for data visualization and UI components
- **Charts**: Lightweight Charts for financial charting
- **State Management**: Zustand for global state management
- **Data Fetching**: TanStack Query for efficient data fetching and caching
- **Authentication**: JWT-based authentication with secure password hashing

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/finvision.git
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

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
finvision/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── api/         # API routes
│   │   ├── auth/        # Authentication pages
│   │   ├── dashboard/   # Dashboard pages
│   │   └── settings/    # Settings pages
│   ├── components/      # React components
│   │   ├── charts/      # Chart components
│   │   ├── ui/          # UI components
│   │   └── widgets/     # Dashboard widgets
│   ├── lib/             # Utility functions
│   │   ├── api/         # API client functions
│   │   ├── hooks/       # Custom React hooks
│   │   ├── store/       # Zustand store
│   │   └── utils/       # Utility functions
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── tailwind.config.js   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm start` - Starts the production server
- `npm run lint` - Lints the codebase
- `npm run test` - Runs the test suite
- `npm run analyze` - Analyzes the bundle size

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Authentication
JWT_SECRET=your_jwt_secret

# API Keys
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
TWELVE_DATA_API_KEY=your_twelve_data_api_key
FINNHUB_API_KEY=your_finnhub_api_key
```

## Deployment

The application can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or a custom server.

### Deploy to Vercel

The easiest way to deploy the application is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tremor](https://www.tremor.so/)
- [Lightweight Charts](https://github.com/tradingview/lightweight-charts)
- [Zustand](https://github.com/pmndrs/zustand)
- [TanStack Query](https://tanstack.com/query/latest)