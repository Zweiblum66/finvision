import { Card, Title, Text } from "@tremor/react";
import { FaChartLine } from "react-icons/fa";

export default function DashboardLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <FaChartLine className="text-blue-600 dark:text-blue-400 text-6xl animate-pulse" />
        </div>
        <Title className="mb-2">Loading FinVision Dashboard</Title>
        <Text className="text-gray-600 dark:text-gray-300">
          Please wait while we prepare your financial insights...
        </Text>
        
        <div className="mt-8 flex justify-center">
          <div className="relative w-64 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-blue-600 dark:bg-blue-500 rounded-full animate-loading-bar"></div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </Card>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
        
        .animate-loading-bar {
          animation: loadingBar 2s infinite;
        }
      `}</style>
    </div>
  );
}