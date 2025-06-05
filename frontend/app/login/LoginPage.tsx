'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginBackground from './LoginBackground';

export default function LoginPage() {
    const [companyName, setCompanyName] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const company = urlParams.get('company');

        if (company) {
            setCompanyName(company);
            setShowWelcome(true);
        }
    }, []);

    const handleSocialLogin = (provider: string) => {
        // Simulate login
        setTimeout(() => {
            const params = new URLSearchParams();
            if (companyName) {
                params.set('company', companyName);
            }
            router.push(`/dashboard?${params.toString()}`);
        }, 1000);
    };

    return (
        <div
            className="min-h-screen bg-black text-white flex relative overflow-hidden"
            data-oid="ciruox:"
        >
            {/* Animated Background */}
            <LoginBackground data-oid="le.zpnx" />

            {/* Left Side - Login Section */}
            <div
                className="w-full md:w-2/5 flex flex-col justify-center px-6 md:px-12 relative z-10"
                data-oid="4tkxmpn"
            >
                <div className="max-w-sm mx-auto w-full" data-oid="s2a2fr5">
                    {/* Logo */}
                    <div className="mb-12" data-oid="2v02y-n">
                        <h1 className="text-4xl font-bold text-white mb-3" data-oid="z-0m1bh">
                            Flio
                        </h1>
                        <p className="text-gray-400 text-sm" data-oid="yog2qms">
                            Seungshin Kim, Backend Developer Portfolio
                        </p>
                    </div>

                    {/* Welcome Message */}
                    <div className="mb-8" data-oid=".-h2rxz">
                        <h2 className="text-2xl font-bold text-white mb-4" data-oid="s7ib9qp">
                            안녕하세요, 백엔드 개발자 김승신입니다.
                        </h2>
                        <p
                            className="text-gray-300 text-sm leading-relaxed mb-8"
                            data-oid="fso21:i"
                        >
                            고유한 데이터 세트를 생성하고 있습니다. <br data-oid="i313x43" />
                            기능 확인을 위해 사용자 등록을 꼭 부탁드립니다.
                        </p>
                    </div>

                    {/* Login Buttons */}
                    <div className="space-y-3" data-oid="yj6dq7t">
                        <button
                            onClick={() => handleSocialLogin('github')}
                            className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-all duration-200 border border-gray-700 hover:border-gray-600"
                            data-oid="_t7rl.t"
                        >
                            <span data-oid="8:q07g:">⚫</span>
                            GitHub로 로그인
                        </button>

                        <button
                            onClick={() => handleSocialLogin('kakao')}
                            className="w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-4 rounded-lg transition-all duration-200"
                            data-oid="f6nt5_6"
                        >
                            <span data-oid="24y2qk1">🟡</span>
                            Kakao로 로그인
                        </button>

                        <button
                            onClick={() => handleSocialLogin('naver')}
                            className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-all duration-200"
                            data-oid="cw1ut6o"
                        >
                            <span data-oid="j-27ubq">🟢</span>
                            Naver로 로그인
                        </button>

                        <button
                            onClick={() => handleSocialLogin('passkey')}
                            className="w-full flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-all duration-200 border border-gray-600 hover:border-gray-500"
                            data-oid="n41oost"
                        >
                            <span data-oid="cbkic2k">🔑</span>
                            Passkey로 로그인
                        </button>
                    </div>

                    {/* Privacy Notice */}
                    <div className="mt-8 text-xs text-gray-500 leading-relaxed" data-oid="ei3zixe">
                        모든 고유 정보는 최소한의 기간 이후 완전히 삭제됩니다.
                    </div>
                </div>
            </div>

            {/* Right Side - Visual Section */}
            <div
                className="hidden md:flex w-3/5 relative z-10 items-center justify-center"
                data-oid="60sw.4g"
            >
                {/* Floating geometric elements */}
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    data-oid="rbrmzn0"
                >
                    {/* Large circle */}
                    <div
                        className="absolute w-32 h-32 border border-white/10 rounded-full animate-spin"
                        style={{ animationDuration: '20s' }}
                        data-oid="8:z:dae"
                    ></div>

                    {/* Medium circle */}
                    <div
                        className="absolute w-48 h-48 border border-red-500/20 rounded-full animate-spin"
                        style={{ animationDuration: '15s', animationDirection: 'reverse' }}
                        data-oid=":g.e1vf"
                    ></div>

                    {/* Small dots */}
                    <div
                        className="absolute w-2 h-2 bg-red-400/60 rounded-full animate-pulse"
                        style={{ top: '30%', left: '40%' }}
                        data-oid="dgpee2e"
                    ></div>
                    <div
                        className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
                        style={{ top: '60%', right: '35%', animationDelay: '1s' }}
                        data-oid="i0nhedx"
                    ></div>
                    <div
                        className="absolute w-1.5 h-1.5 bg-red-300/50 rounded-full animate-pulse"
                        style={{ bottom: '40%', left: '30%', animationDelay: '2s' }}
                        data-oid="9kpcckq"
                    ></div>

                    {/* Central element */}
                    <div
                        className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg backdrop-blur-sm border border-red-500/30 flex items-center justify-center"
                        data-oid="2u2egy4"
                    >
                        <div
                            className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded opacity-80"
                            data-oid="aingber"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
