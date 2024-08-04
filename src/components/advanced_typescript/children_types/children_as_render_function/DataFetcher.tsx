'use client';

import { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

interface DataFetcherProps {
  endpoint: string;
  children: (data: any, isLoading: boolean, error: Error | null) => ReactNode;
}

const DataFetcher = ({ endpoint, children }: DataFetcherProps) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return <>{children(data, isLoading, error)}</>;
};

export default DataFetcher;
