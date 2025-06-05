'use client';

import { useState, useEffect } from 'react';
import { featuresApi } from '../api/features';
import { Feature } from '../api/types';

export function useFeatures(category?: string) {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchFeatures();
    }, [category]);

    const fetchFeatures = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await featuresApi.getFeatures(category);
            setFeatures(response.features);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch features');
        } finally {
            setLoading(false);
        }
    };

    const refetch = () => {
        fetchFeatures();
    };

    return {
        features,
        loading,
        error,
        refetch,
    };
}
