"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-red-600 dark:text-red-400 text-6xl" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        {error.digest && (
          <div className="mb-8 p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Error ID: {error.digest}
            </p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <FaRedo /> Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2"
          >
            <FaHome /> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}