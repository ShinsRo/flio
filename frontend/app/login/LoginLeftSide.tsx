'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginLeftSide() {
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
            className="w-full md:w-2/5 flex flex-col justify-center px-6 md:px-12 relative z-10"
            data-oid="cp6xl.r"
        >
            <div className="max-w-sm mx-auto w-full" data-oid="fqe4k7j">
                {/* Logo */}
                <div className="mb-12" data-oid="..ktpnq">
                    <h1 className="text-4xl font-bold text-white mb-3" data-oid="b963v52">
                        Flio
                    </h1>
                    <p className="text-gray-400 text-sm" data-oid="-ee5l7x">
                        Developer Portfolio Platform
                    </p>
                </div>

                {/* Welcome Message */}
                <div className="mb-8" data-oid="by6pl__">
                    <h2 className="text-2xl font-bold text-white mb-4" data-oid="vudj1o6">
                        {showWelcome && companyName
                            ? `${companyName} 면접관님 안녕하세요.`
                            : '면접관님 안녕하세요.'}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8" data-oid="9wc1pjj">
                        시연 기능은 제한적으로 공개하고 있습니다. 기능 확인을 위해서 사용자 등록을
                        부탁드립니다.
                    </p>
                </div>

                {/* Login Buttons */}
                <div className="space-y-3" data-oid="77yn5nt">
                    <button
                        onClick={() => handleSocialLogin('github')}
                        className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-all duration-200 border border-gray-700 hover:border-gray-600"
                        data-oid="e7o:._5"
                    >
                        <span data-oid="1stzd_u">⚫</span>
                        GitHub로 로그인
                    </button>

                    <button
                        onClick={() => handleSocialLogin('kakao')}
                        className="w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-4 rounded-lg transition-all duration-200"
                        data-oid=".sw.gdp"
                    >
                        <span data-oid="z_h5p6g">🟡</span>
                        Kakao로 로그인
                    </button>

                    <button
                        onClick={() => handleSocialLogin('naver')}
                        className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-all duration-200"
                        data-oid="4b7g34z"
                    >
                        <span data-oid="eydbhdz">🟢</span>
                        Naver로 로그인
                    </button>

                    <button
                        onClick={() => handleSocialLogin('passkey')}
                        className="w-full flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-all duration-200 border border-gray-600 hover:border-gray-500"
                        data-oid="sog87hm"
                    >
                        <span data-oid="qssm2rv">🔑</span>
                        Passkey로 로그인
                    </button>
                </div>

                {/* Privacy Notice */}
                <div className="mt-8 text-xs text-gray-500 leading-relaxed" data-oid="8nvhjmz">
                    서버 리소스를 보호하기 위해 가입을 받으며,
                    <br data-oid="7_9ue.b" />
                    최소한의 기간 이후 데이터는 완전히 삭제됩니다.
                </div>
            </div>
        </div>
    );
}
