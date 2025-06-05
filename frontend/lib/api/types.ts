// API 응답 타입 정의

export interface User {
    id: string;
    email: string;
    name: string;
    provider: 'github' | 'kakao' | 'naver' | 'passkey';
    company?: string;
    createdAt: string;
}

export interface LoginRequest {
    provider: string;
    code?: string;
    company?: string;
}

export interface LoginResponse {
    user: User;
    token: string;
    expiresIn: number;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
    status: 'completed' | 'in_progress' | 'planned';
    category: string;
    tech: string[];
    demoUrl?: string;
    githubUrl?: string;
    createdAt: string;
    updatedAt: string;
}

export interface FeaturesResponse {
    features: Feature[];
    total: number;
}

// 데모별 특화 타입들
export interface GameApiDemo {
    items: GameItem[];
    stats: {
        totalItems: number;
        totalTransactions: number;
        activeUsers: number;
    };
}

export interface GameItem {
    id: number;
    name: string;
    type: string;
    price: number;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
    description: string;
    imageUrl?: string;
}

export interface BatchSystemDemo {
    jobs: BatchJob[];
    systemStatus: {
        activeServer: string;
        standbyServer: string;
        dbConnection: 'healthy' | 'warning' | 'error';
    };
}

export interface BatchJob {
    id: string;
    name: string;
    status: 'running' | 'completed' | 'failed' | 'pending';
    lastRun: string;
    duration: string;
    nextRun?: string;
}

export interface OAuthDemo {
    flows: OAuthFlow[];
    userRoles: UserRole[];
    sessions: SessionInfo[];
}

export interface OAuthFlow {
    name: string;
    description: string;
    security: 'high' | 'medium' | 'low';
    steps: string[];
}

export interface UserRole {
    role: string;
    permissions: string[];
    userCount: number;
}

export interface SessionInfo {
    activeSessions: number;
    averageSessionTime: string;
    tokenExpiry: string;
    refreshTokenExpiry: string;
}

// API 에러 타입
export interface ApiError {
    message: string;
    code: string;
    details?: any;
}
