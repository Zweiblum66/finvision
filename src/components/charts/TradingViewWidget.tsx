"use client";

import { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
  interval?: string;
  theme?: 'light' | 'dark';
  width?: string | number;
  height?: string | number;
}

export default function TradingViewWidget({
  symbol = 'AAPL',
  interval = '1D',
  theme = 'dark',
  width = '100%',
  height = '100%'
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing script
    const existingScript = document.getElementById('tradingview-widget-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Create a new script element
    const script = document.createElement('script');
    script.id = 'tradingview-widget-script';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined' && containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `NASDAQ:${symbol}`,
          interval,
          timezone: 'Etc/UTC',
          theme,
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: false,
          studies: ['RSI@tv-basicstudies', 'MAExp@tv-basicstudies', 'MACD@tv-basicstudies'],
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650',
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      // Clean up
      if (script) {
        script.remove();
      }
    };
  }, [symbol, interval, theme]);

  return (
    <div 
      id={`tradingview-widget-${symbol}`} 
      ref={containerRef} 
      style={{ 
        width, 
        height,
        minHeight: '400px'
      }}
    />
  );
}

// Add TradingView types to the global Window interface
declare global {
  interface Window {
    TradingView: {
      widget: any;
    };
  }
}