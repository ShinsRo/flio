'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center"
            data-oid="rynpyvn"
        >
            <div className="text-center max-w-md mx-auto px-6" data-oid="omo4jm0">
                {/* 404 애니메이션 */}
                <div className="mb-8" data-oid="ay_ub5n">
                    <div className="relative" data-oid=".ha5aml">
                        <h1
                            className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 animate-pulse"
                            data-oid="kjerr1a"
                        >
                            404
                        </h1>
                        <div
                            className="absolute inset-0 text-9xl font-bold text-red-500/20 blur-sm animate-pulse"
                            data-oid="_pqqyy3"
                        >
                            404
                        </div>
                    </div>
                </div>

                {/* 에러 메시지 */}
                <div className="mb-8" data-oid="t56j_x6">
                    <h2 className="text-2xl font-bold mb-4" data-oid="a-qr3qd">
                        페이지를 찾을 수 없습니다
                    </h2>
                    <p className="text-gray-400 leading-relaxed" data-oid="0.x_fpu">
                        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
                        <br data-oid="2gglu3a" />
                        URL을 다시 확인해주세요.
                    </p>
                </div>

                {/* 액션 버튼들 */}
                <div className="space-y-4" data-oid="y5mx_au">
                    <Link
                        href="/dashboard"
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                        data-oid="-_ur1d6"
                    >
                        대시보드로 이동
                    </Link>

                    <button
                        onClick={() => router.back()}
                        className="block w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-6 rounded-lg transition-colors font-medium"
                        data-oid="7vlnwgd"
                    >
                        이전 페이지로
                    </button>

                    <Link
                        href="/"
                        className="block w-full text-gray-400 hover:text-white py-2 transition-colors text-sm"
                        data-oid="bs0:86d"
                    >
                        홈으로 이동
                    </Link>
                </div>

                {/* 장식 요소 */}
                <div
                    className="mt-12 flex justify-center space-x-4 text-gray-600"
                    data-oid="s5jhogr"
                >
                    <div
                        className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
                        data-oid="tlzhfb1"
                    ></div>
                    <div
                        className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                        data-oid="v_x72nr"
                    ></div>
                    <div
                        className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                        data-oid="mdkfa7v"
                    ></div>
                </div>
            </div>
        </div>
    );
}
