'use client';

import { useState, useEffect } from 'react';
import { demosApi } from '../api/demos';

type DemoType = 'game-api' | 'batch-system' | 'oauth-system';

export function useDemoData<T>(demoType: DemoType) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchDemoData();
    }, [demoType]);

    const fetchDemoData = async () => {
        try {
            setLoading(true);
            setError(null);

            let response;
            switch (demoType) {
                case 'game-api':
                    response = await demosApi.gameApi.getDemoData();
                    break;
                case 'batch-system':
                    response = await demosApi.batchSystem.getDemoData();
                    break;
                case 'oauth-system':
                    response = await demosApi.oauthSystem.getDemoData();
                    break;
                default:
                    throw new Error(`Unknown demo type: ${demoType}`);
            }

            setData(response as T);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch demo data');
        } finally {
            setLoading(false);
        }
    };

    const refetch = () => {
        fetchDemoData();
    };

    return {
        data,
        loading,
        error,
        refetch,
    };
}
