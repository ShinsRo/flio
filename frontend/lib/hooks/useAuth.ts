'use client';

import { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { authApi } from '../api/auth';
import { User } from '../api/types';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (provider: string, company?: string) => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const currentUser = await authApi.getCurrentUser();
            setUser(currentUser);
        } catch (error) {
            console.log('Not authenticated');
        } finally {
            setLoading(false);
        }
    };

    const login = async (provider: string, company?: string) => {
        setLoading(true);
        try {
            // 실제로는 OAuth 플로우를 거쳐야 하지만, 데모용으로 간소화
            const response = await authApi.login({ provider, company });
            setUser(response.user);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await authApi.logout();
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}