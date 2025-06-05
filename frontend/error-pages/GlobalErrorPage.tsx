'use client';

import { useEffect } from 'react';

interface GlobalErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalErrorPage({ error, reset }: GlobalErrorPageProps) {
    useEffect(() => {
        // 에러 로깅 (실제 환경에서는 에러 추적 서비스로 전송)
        console.error('Application error:', error);
    }, [error]);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center"
            data-oid="jf8:-0o"
        >
            <div className="text-center max-w-md mx-auto px-6" data-oid="f8ddhyl">
                {/* 에러 아이콘 */}
                <div className="mb-8" data-oid="kmrd.z:">
                    <div
                        className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6"
                        data-oid="6xl5eon"
                    >
                        <svg
                            className="w-12 h-12 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="2.cy83l"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                data-oid="klzpbgt"
                            />
                        </svg>
                    </div>
                </div>

                {/* 에러 메시지 */}
                <div className="mb-8" data-oid="y1.aiah">
                    <h2 className="text-2xl font-bold mb-4" data-oid="_l___ux">
                        문제가 발생했습니다
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-4" data-oid="zuo94nu">
                        예상치 못한 오류가 발생했습니다.
                        <br data-oid="uk-846w" />
                        잠시 후 다시 시도해주세요.
                    </p>

                    {/* 개발 환경에서만 에러 상세 정보 표시 */}
                    {process.env.NODE_ENV === 'development' && (
                        <details className="mt-4 text-left" data-oid="g6gh:zf">
                            <summary
                                className="cursor-pointer text-sm text-gray-500 hover:text-gray-400"
                                data-oid="vxs4en7"
                            >
                                에러 상세 정보
                            </summary>
                            <pre
                                className="mt-2 p-3 bg-gray-800 rounded text-xs text-red-400 overflow-auto"
                                data-oid="w87o_g7"
                            >
                                {error.message}
                                {error.digest && `\nDigest: ${error.digest}`}
                            </pre>
                        </details>
                    )}
                </div>

                {/* 액션 버튼들 */}
                <div className="space-y-4" data-oid="6_a9xl6">
                    <button
                        onClick={reset}
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                        data-oid="-j5pzt7"
                    >
                        다시 시도
                    </button>

                    <button
                        onClick={() => (window.location.href = '/dashboard')}
                        className="block w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-6 rounded-lg transition-colors font-medium"
                        data-oid="i8xclys"
                    >
                        대시보드로 이동
                    </button>

                    <button
                        onClick={() => (window.location.href = '/')}
                        className="block w-full text-gray-400 hover:text-white py-2 transition-colors text-sm"
                        data-oid="g_oz.be"
                    >
                        홈으로 이동
                    </button>
                </div>
            </div>
        </div>
    );
}
