'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface DashboardErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function DashboardErrorPage({ error, reset }: DashboardErrorPageProps) {
    useEffect(() => {
        console.error('Dashboard error:', error);
    }, [error]);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
            data-oid="5vwumqn"
        >
            {/* 헤더 유지 */}
            <header
                className="border-b border-gray-800/50 backdrop-blur-sm bg-black/20 px-6 py-4"
                data-oid="24y7y86"
            >
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="ydmwqtq"
                >
                    <h1
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        data-oid="xrkkk6-"
                    >
                        Flio Dashboard
                    </h1>
                    <Link
                        href="/"
                        className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
                        data-oid="8d3e-_9"
                    >
                        홈으로
                    </Link>
                </div>
            </header>

            {/* 에러 내용 */}
            <div
                className="flex items-center justify-center min-h-[calc(100vh-80px)]"
                data-oid="2-.y53h"
            >
                <div className="text-center max-w-md mx-auto px-6" data-oid="m705627">
                    <div className="mb-8" data-oid="s765q1m">
                        <div
                            className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6"
                            data-oid=":lcckx5"
                        >
                            <svg
                                className="w-10 h-10 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="gyz2cvb"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    data-oid="kaq7.am"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="mb-8" data-oid="4zvhmaf">
                        <h2 className="text-2xl font-bold mb-4" data-oid="o8tf4nb">
                            대시보드 로딩 실패
                        </h2>
                        <p className="text-gray-400 leading-relaxed" data-oid="xdl8tw:">
                            대시보드를 불러오는 중 문제가 발생했습니다.
                            <br data-oid="cz:xq-l" />
                            네트워크 연결을 확인하고 다시 시도해주세요.
                        </p>
                    </div>

                    <div className="space-y-4" data-oid="lon9eiv">
                        <button
                            onClick={reset}
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                            data-oid="1sjhbch"
                        >
                            다시 시도
                        </button>

                        <Link
                            href="/"
                            className="block w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-6 rounded-lg transition-colors font-medium text-center"
                            data-oid="x3qbls5"
                        >
                            로그인 페이지로
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
