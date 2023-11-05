'use client'; // Error components must be Client Components

import ErrorUI from '@/components/ErrorUI';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error);
  }, [error]);

  return <ErrorUI reset={reset} />;
}
