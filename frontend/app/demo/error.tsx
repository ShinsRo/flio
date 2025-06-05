'use client';

import DemoErrorPage from '../../error-pages/DemoErrorPage';

interface DemoErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function DemoError({ error, reset }: DemoErrorProps) {
    return <DemoErrorPage error={error} reset={reset} data-oid="g6dagwx" />;
}
