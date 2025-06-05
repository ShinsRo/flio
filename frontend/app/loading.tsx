export default function Loading() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center"
            data-oid="nm2i711"
        >
            <div className="text-center" data-oid="j_179ut">
                {/* 로딩 스피너 */}
                <div className="mb-8" data-oid="x2x:r0z">
                    <div className="relative w-16 h-16 mx-auto" data-oid="1xiagsv">
                        {/* 외부 링 */}
                        <div
                            className="absolute inset-0 border-4 border-gray-700 rounded-full"
                            data-oid="hcrnxl7"
                        ></div>
                        {/* 회전하는 링 */}
                        <div
                            className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"
                            data-oid="pdxqr9k"
                        ></div>
                        {/* 내부 점 */}
                        <div
                            className="absolute inset-4 bg-blue-500/20 rounded-full animate-pulse"
                            data-oid="880o56e"
                        ></div>
                    </div>
                </div>

                {/* 로딩 텍스트 */}
                <div className="space-y-2" data-oid="qe26ijn">
                    <h2 className="text-xl font-semibold" data-oid="w6wiy75">
                        로딩 중...
                    </h2>
                    <p className="text-gray-400 text-sm" data-oid="b7s-k7s">
                        잠시만 기다려주세요
                    </p>
                </div>

                {/* 로딩 도트 애니메이션 */}
                <div className="mt-6 flex justify-center space-x-2" data-oid="1cy:kgy">
                    <div
                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                        data-oid="2ic-w_v"
                    ></div>
                    <div
                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                        data-oid="l7ijoc5"
                    ></div>
                    <div
                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                        data-oid="03_.fdp"
                    ></div>
                </div>
            </div>
        </div>
    );
}
