'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginPage from './login/LoginPage';

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        // URL 파라미터로 logged=true가 있으면 대시보드로 리다이렉트
        const urlParams = new URLSearchParams(window.location.search);
        const logged = urlParams.get('logged');

        if (logged === 'true') {
            const company = urlParams.get('company');
            const params = new URLSearchParams();
            if (company) {
                params.set('company', company);
            }
            router.push(`/dashboard?${params.toString()}`);
        }
    }, [router]);

    return <LoginPage data-oid="_l6yu:v" />;
}
