import { apiClient } from './client';
import { LoginRequest, LoginResponse, User } from './types';

export const authApi = {
    // 소셜 로그인
    async login(request: LoginRequest): Promise<LoginResponse> {
        const response = await apiClient.post<LoginResponse>('/auth/login', request);

        // 토큰 저장
        apiClient.setToken(response.token);

        return response;
    },

    // 로그아웃
    async logout(): Promise<void> {
        try {
            await apiClient.post('/auth/logout');
        } finally {
            // 항상 로컬 토큰 제거
            apiClient.clearToken();
        }
    },

    // 현재 사용자 정보 조회
    async getCurrentUser(): Promise<User> {
        return apiClient.get<User>('/auth/me');
    },

    // 토큰 갱신
    async refreshToken(): Promise<LoginResponse> {
        const response = await apiClient.post<LoginResponse>('/auth/refresh');
        apiClient.setToken(response.token);
        return response;
    },

    // 토큰 유효성 검사
    async validateToken(): Promise<boolean> {
        try {
            await this.getCurrentUser();
            return true;
        } catch {
            return false;
        }
    },
};
