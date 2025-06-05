'use client';

import DashboardErrorPage from '../../error-pages/DashboardErrorPage';

interface DashboardErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function DashboardError({ error, reset }: DashboardErrorProps) {
    return <DashboardErrorPage error={error} reset={reset} data-oid="9ddps3i" />;
}
