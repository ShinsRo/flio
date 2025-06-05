'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FeatureCard from '../../components/FeatureCard';
import FeatureModal from '../../components/FeatureModal';

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
    status: string;
    category: string;
    tech: string[];
    demo: string | null;
    github: string | null;
}

export default function DashboardPage() {
    const [companyName, setCompanyName] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const company = urlParams.get('company');

        if (company) {
            setCompanyName(company);
            setShowWelcome(true);
        }
    }, []);

    const features: Feature[] = [
        {
            id: 1,
            title: '게임 아이템 거래소 API',
            description: 'CRUD 기반 아이템 거래소 조회 및 등록 시스템',
            icon: '🎮',
            status: '완료',
            category: 'Backend',
            tech: ['Spring Boot', 'JPA', 'MySQL', 'Redis'],
            demo: '/demo/game-api',
            github: 'https://github.com/example/game-api',
        },
        {
            id: 2,
            title: 'Keycloak OAuth2 아키텍처',
            description: '보안 인증 시스템 구축 및 통합',
            icon: '🔐',
            status: '완료',
            category: 'Security',
            tech: ['Keycloak', 'OAuth2', 'JWT', 'Spring Security'],
            demo: '/demo/oauth-system',
            github: 'https://github.com/example/oauth-system',
        },
        {
            id: 3,
            title: '배치 어플리케이션 이중화',
            description: '고가용성을 위한 배치 시스템 아키텍처 설계',
            icon: '⚡',
            status: '완료',
            category: 'Infrastructure',
            tech: ['Spring Batch', 'Quartz', 'Docker', 'Kubernetes'],
            demo: '/demo/batch-system',
            github: 'https://github.com/example/batch-system',
        },
        {
            id: 4,
            title: '실시간 모니터링',
            description: 'TBD',
            icon: '📊',
            status: 'TBD',
            category: 'Monitoring',
            tech: ['TBD', 'TBD', 'TBD', 'TBD'],
            demo: null,
            github: null,
        },
        {
            id: 5,
            title: 'TBD',
            description: 'TBD',
            icon: '🏗️',
            status: 'TBD',
            category: 'Architecture',
            tech: ['TBD', 'TBD', 'TBD', 'TBD'],
            demo: null,
            github: null,
        },
        {
            id: 6,
            title: 'TBD',
            description: 'TBD',
            icon: '🚀',
            status: 'TBD',
            category: 'DevOps',
            tech: ['TBD', 'TBD', 'TBD', 'TBD'],
            demo: null,
            github: null,
        },
    ];

    const categories = [
        'All',
        'Backend',
        'Infrastructure',
        'Security',
        'Architecture',
        'Monitoring',
        'DevOps',
    ];

    const filteredFeatures =
        selectedCategory === 'All'
            ? features
            : features.filter((feature) => feature.category === selectedCategory);

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
            data-oid="bbwo0e3"
        >
            {/* Header */}
            <header
                className="border-b border-gray-800/50 backdrop-blur-sm bg-black/20 px-6 py-4 sticky top-0 z-50"
                data-oid="sfbded7"
            >
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="2ev.2d3"
                >
                    <div className="flex items-center gap-4" data-oid="p17yfjg">
                        <h1
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                            data-oid="1s3zbec"
                        >
                            Flio Dashboard
                        </h1>
                        {showWelcome && companyName && (
                            <span
                                className="text-sm text-gray-400 border-l border-gray-600 pl-4"
                                data-oid="bpy4b8d"
                            >
                                {companyName} 면접관님 환영합니다
                            </span>
                        )}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
                        data-oid="hc43jkq"
                    >
                        로그아웃
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative px-6 py-12 overflow-hidden" data-oid="zxex4nc">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
                    data-oid="3w2hyst"
                ></div>
                <div className="max-w-7xl mx-auto relative z-10" data-oid="es1ewt.">
                    <div className="text-center mb-12" data-oid="rjqpbz_">
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                            data-oid="5w7u4d."
                        >
                            기술 포트폴리오
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto" data-oid="fi3m6g.">
                            실제 구현된 기능들을 살펴보고 상세한 기술 스택과 아키텍처를 확인해보세요
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12" data-oid="1osfoew">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedCategory === category
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                data-oid="yxhu5bq"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <main className="max-w-7xl mx-auto px-6 pb-12" data-oid="ln7kajv">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid="cnw_ykk"
                >
                    {filteredFeatures.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            onClick={setSelectedFeature}
                            data-oid="den1bgz"
                        />
                    ))}
                </div>

                {/* Architecture Overview */}
                <section
                    className="mt-16 bg-gradient-to-r from-gray-800/30 to-gray-700/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                    data-oid="vurk95z"
                >
                    <h3
                        className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                        data-oid="v3494pp"
                    >
                        시스템 아키텍처 개요
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="n7mjt-c">
                        <div className="text-center group" data-oid="wu1qx3q">
                            <div
                                className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform"
                                data-oid="2aq51cd"
                            >
                                🏗️
                            </div>
                            <h4 className="font-bold mb-3 text-lg" data-oid="rlv5rdr">
                                마이크로서비스
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed" data-oid="sbh_m2t">
                                독립적인 서비스 단위로 분리된 확장 가능한 아키텍처
                            </p>
                        </div>
                        <div className="text-center group" data-oid="4ot53rx">
                            <div
                                className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform"
                                data-oid="tv1201."
                            >
                                🔄
                            </div>
                            <h4 className="font-bold mb-3 text-lg" data-oid="_org:kt">
                                이중화 시스템
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed" data-oid="zg7bzg1">
                                고가용성을 위한 배치 시스템 이중화 및 장애 복구
                            </p>
                        </div>
                        <div className="text-center group" data-oid="zo..qld">
                            <div
                                className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform"
                                data-oid="fysbl30"
                            >
                                🛡️
                            </div>
                            <h4 className="font-bold mb-3 text-lg" data-oid="7_c8r7a">
                                보안 인증
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed" data-oid="q9cpn2v">
                                Keycloak 기반 OAuth2 인증 및 권한 관리 시스템
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Feature Detail Modal */}
            <FeatureModal
                feature={selectedFeature}
                onClose={() => setSelectedFeature(null)}
                data-oid="sg:9qmu"
            />
        </div>
    );
}
