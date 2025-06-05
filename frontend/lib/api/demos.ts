import { apiClient } from './client';
import { GameApiDemo, BatchSystemDemo, OAuthDemo, GameItem } from './types';

export const demosApi = {
    // 게임 API 데모 데이터
    gameApi: {
        async getDemoData(): Promise<GameApiDemo> {
            return apiClient.get<GameApiDemo>('/demos/game-api');
        },

        async getItems(page = 1, limit = 10): Promise<{ items: GameItem[]; total: number }> {
            return apiClient.get(`/demos/game-api/items?page=${page}&limit=${limit}`);
        },

        async createItem(item: Omit<GameItem, 'id'>): Promise<GameItem> {
            return apiClient.post<GameItem>('/demos/game-api/items', item);
        },

        async updateItem(id: number, item: Partial<GameItem>): Promise<GameItem> {
            return apiClient.put<GameItem>(`/demos/game-api/items/${id}`, item);
        },

        async deleteItem(id: number): Promise<void> {
            return apiClient.delete(`/demos/game-api/items/${id}`);
        },
    },

    // 배치 시스템 데모 데이터
    batchSystem: {
        async getDemoData(): Promise<BatchSystemDemo> {
            return apiClient.get<BatchSystemDemo>('/demos/batch-system');
        },

        async triggerJob(jobId: string): Promise<void> {
            return apiClient.post(`/demos/batch-system/jobs/${jobId}/trigger`);
        },

        async getJobLogs(jobId: string): Promise<string[]> {
            return apiClient.get(`/demos/batch-system/jobs/${jobId}/logs`);
        },

        async simulateFailover(): Promise<void> {
            return apiClient.post('/demos/batch-system/simulate-failover');
        },
    },

    // OAuth 시스템 데모 데이터
    oauthSystem: {
        async getDemoData(): Promise<OAuthDemo> {
            return apiClient.get<OAuthDemo>('/demos/oauth-system');
        },

        async simulateLogin(flow: string): Promise<{ steps: string[]; tokens: any }> {
            return apiClient.post(`/demos/oauth-system/simulate-login`, { flow });
        },

        async getUserSessions(): Promise<any[]> {
            return apiClient.get('/demos/oauth-system/sessions');
        },

        async revokeSession(sessionId: string): Promise<void> {
            return apiClient.delete(`/demos/oauth-system/sessions/${sessionId}`);
        },
    },
};
