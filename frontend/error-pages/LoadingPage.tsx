export default function LoadingPage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center"
            data-oid="1xwtnzo"
        >
            <div className="text-center" data-oid="spslory">
                {/* 로딩 스피너 */}
                <div className="mb-8" data-oid="tlmp5ew">
                    <div className="relative w-16 h-16 mx-auto" data-oid="jef8h9n">
                        {/* 외부 링 */}
                        <div
                            className="absolute inset-0 border-4 border-gray-700 rounded-full"
                            data-oid="vfsjctn"
                        ></div>
                        {/* 회전하는 링 */}
                        <div
                            className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"
                            data-oid="cfl9:4y"
                        ></div>
                        {/* 내부 점 */}
                        <div
                            className="absolute inset-4 bg-blue-500/20 rounded-full animate-pulse"
                            data-oid="hkeqwlu"
                        ></div>
                    </div>
                </div>

                {/* 로딩 텍스트 */}
                <div className="space-y-2" data-oid="r6nyyhx">
                    <h2 className="text-xl font-semibold" data-oid="dxlwv1d">
                        로딩 중...
                    </h2>
                    <p className="text-gray-400 text-sm" data-oid="58x8guv">
                        잠시만 기다려주세요
                    </p>
                </div>

                {/* 로딩 도트 애니메이션 */}
                <div className="mt-6 flex justify-center space-x-2" data-oid="zi0i9l9">
                    <div
                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                        data-oid="7kgpao."
                    ></div>
                    <div
                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                        data-oid="lv5-r-u"
                    ></div>
                    <div
                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                        data-oid="akjao:a"
                    ></div>
                </div>
            </div>
        </div>
    );
}
