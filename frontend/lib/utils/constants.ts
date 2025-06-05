// 상수 정의
export const FEATURE_CATEGORIES = [
    'All',
    'Backend',
    'Infrastructure',
    'Security',
    'Architecture',
    'Monitoring',
    'DevOps',
] as const;

export const FEATURE_STATUS = {
    COMPLETED: 'completed',
    IN_PROGRESS: 'in_progress',
    PLANNED: 'planned',
} as const;

export const OAUTH_PROVIDERS = {
    GITHUB: 'github',
    KAKAO: 'kakao',
    NAVER: 'naver',
    PASSKEY: 'passkey',
} as const;

export const DEMO_ROUTES = {
    GAME_API: '/demo/game-api',
    BATCH_SYSTEM: '/demo/batch-system',
    OAUTH_SYSTEM: '/demo/oauth-system',
} as const;

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        ME: '/auth/me',
        REFRESH: '/auth/refresh',
    },
    FEATURES: '/features',
    DEMOS: {
        GAME_API: '/demos/game-api',
        BATCH_SYSTEM: '/demos/batch-system',
        OAUTH_SYSTEM: '/demos/oauth-system',
    },
} as const;
