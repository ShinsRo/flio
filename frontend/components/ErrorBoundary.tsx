'use client';

import React, { Component, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div
                    className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center"
                    data-oid="tx:ug2j"
                >
                    <div className="text-center max-w-md mx-auto px-6" data-oid="b:ft60_">
                        <div className="mb-8" data-oid="vd_az67">
                            <div
                                className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6"
                                data-oid="mk6v14o"
                            >
                                <svg
                                    className="w-10 h-10 text-red-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="0:.xocw"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="wtlzv53"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="mb-8" data-oid="qrlc0ib">
                            <h2 className="text-2xl font-bold mb-4" data-oid="4b48ezi">
                                컴포넌트 오류
                            </h2>
                            <p className="text-gray-400 leading-relaxed" data-oid="o2q40:7">
                                컴포넌트를 렌더링하는 중 오류가 발생했습니다.
                                <br data-oid="cf5238l" />
                                페이지를 새로고침해주세요.
                            </p>
                        </div>

                        <div className="space-y-4" data-oid="_5n6790">
                            <button
                                onClick={() => window.location.reload()}
                                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                                data-oid="j-3o.wv"
                            >
                                페이지 새로고침
                            </button>

                            <button
                                onClick={() => this.setState({ hasError: false })}
                                className="block w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-6 rounded-lg transition-colors font-medium"
                                data-oid="h98sa5a"
                            >
                                다시 시도
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
