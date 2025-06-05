'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface DemoErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function DemoErrorPage({ error, reset }: DemoErrorPageProps) {
    useEffect(() => {
        console.error('Demo error:', error);
    }, [error]);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
            data-oid="9sv1z1f"
        >
            {/* 헤더 */}
            <header
                className="border-b border-gray-800/50 backdrop-blur-sm bg-black/20 px-6 py-4"
                data-oid="yu:2mh0"
            >
                <div className="max-w-7xl mx-auto flex items-center gap-4" data-oid="yv3c2gd">
                    <Link
                        href="/dashboard"
                        className="text-gray-400 hover:text-white transition-colors"
                        data-oid="wwnmb1b"
                    >
                        ← 대시보드로
                    </Link>
                    <div data-oid="4hp330f">
                        <h1 className="text-xl font-bold" data-oid="epqfjat">
                            데모 페이지
                        </h1>
                        <p className="text-sm text-gray-400" data-oid="eq4vclm">
                            오류가 발생했습니다
                        </p>
                    </div>
                </div>
            </header>

            {/* 에러 내용 */}
            <div
                className="flex items-center justify-center min-h-[calc(100vh-80px)]"
                data-oid="i.fxhv-"
            >
                <div className="text-center max-w-md mx-auto px-6" data-oid="p2v57d-">
                    <div className="mb-8" data-oid="7_09.wp">
                        <div
                            className="w-20 h-20 mx-auto bg-yellow-500/20 rounded-full flex items-center justify-center mb-6"
                            data-oid="twnfvng"
                        >
                            <svg
                                className="w-10 h-10 text-yellow-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="vlfhr90"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                    data-oid="sx4knbw"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="mb-8" data-oid="7mn-mfy">
                        <h2 className="text-2xl font-bold mb-4" data-oid="pha6obl">
                            데모 로딩 실패
                        </h2>
                        <p className="text-gray-400 leading-relaxed" data-oid="-u29x6y">
                            데모 데이터를 불러오는 중 문제가 발생했습니다.
                            <br data-oid="t9_zm-d" />
                            서버 연결 상태를 확인하고 다시 시도해주세요.
                        </p>
                    </div>

                    <div className="space-y-4" data-oid="35-grkr">
                        <button
                            onClick={reset}
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                            data-oid="iixdobz"
                        >
                            데모 다시 로드
                        </button>

                        <Link
                            href="/dashboard"
                            className="block w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-6 rounded-lg transition-colors font-medium text-center"
                            data-oid="c7bg2pd"
                        >
                            대시보드로 돌아가기
                        </Link>

                        <Link
                            href="/"
                            className="block w-full text-gray-400 hover:text-white py-2 transition-colors text-sm"
                            data-oid="a51:3fv"
                        >
                            홈으로 이동
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
