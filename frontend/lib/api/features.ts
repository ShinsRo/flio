import { apiClient } from './client';
import { Feature, FeaturesResponse } from './types';

export const featuresApi = {
    // 모든 피쳐 목록 조회
    async getFeatures(category?: string): Promise<FeaturesResponse> {
        const params = category ? `?category=${encodeURIComponent(category)}` : '';
        return apiClient.get<FeaturesResponse>(`/features${params}`);
    },

    // 특정 피쳐 상세 조회
    async getFeature(id: number): Promise<Feature> {
        return apiClient.get<Feature>(`/features/${id}`);
    },

    // 피쳐 생성 (관리자용)
    async createFeature(
        feature: Omit<Feature, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Feature> {
        return apiClient.post<Feature>('/features', feature);
    },

    // 피쳐 업데이트 (관리자용)
    async updateFeature(id: number, feature: Partial<Feature>): Promise<Feature> {
        return apiClient.put<Feature>(`/features/${id}`, feature);
    },

    // 피쳐 삭제 (관리자용)
    async deleteFeature(id: number): Promise<void> {
        return apiClient.delete(`/features/${id}`);
    },
};
