'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GameApiDemo() {
    const [selectedTab, setSelectedTab] = useState('overview');

    const apiEndpoints = [
        { method: 'GET', path: '/api/items', description: '모든 아이템 조회' },
        { method: 'GET', path: '/api/items/{id}', description: '특정 아이템 조회' },
        { method: 'POST', path: '/api/items', description: '새 아이템 등록' },
        { method: 'PUT', path: '/api/items/{id}', description: '아이템 정보 수정' },
        { method: 'DELETE', path: '/api/items/{id}', description: '아이템 삭제' },
    ];

    const sampleItems = [
        { id: 1, name: '드래곤 소드', type: '무기', price: 15000, rarity: '레어' },
        { id: 2, name: '마법 방패', type: '방어구', price: 8500, rarity: '일반' },
        { id: 3, name: '체력 포션', type: '소비품', price: 500, rarity: '일반' },
        { id: 4, name: '전설의 반지', type: '액세서리', price: 50000, rarity: '전설' },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
            data-oid="y18swgx"
        >
            {/* Header */}
            <header
                className="border-b border-gray-800/50 backdrop-blur-sm bg-black/20 px-6 py-4"
                data-oid="zi1oe34"
            >
                <div className="max-w-7xl mx-auto flex items-center gap-4" data-oid="2d3848k">
                    <Link
                        href="/?logged=true"
                        className="text-gray-400 hover:text-white transition-colors"
                        data-oid="n0km8dm"
                    >
                        ← 돌아가기
                    </Link>
                    <div className="flex items-center gap-3" data-oid="twuw5xe">
                        <span className="text-3xl" data-oid="el9yycd">
                            🎮
                        </span>
                        <div data-oid="sggsw6o">
                            <h1 className="text-2xl font-bold" data-oid="56fo434">
                                게임 아이템 거래소 API
                            </h1>
                            <p className="text-sm text-gray-400" data-oid="76vl6it">
                                CRUD 기반 아이템 거래소 시스템
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-8" data-oid="8rcw9au">
                {/* Tab Navigation */}
                <div
                    className="flex gap-1 mb-8 bg-gray-800/50 p-1 rounded-lg w-fit"
                    data-oid="dsluhyr"
                >
                    {[
                        { id: 'overview', label: '개요' },
                        { id: 'api', label: 'API 문서' },
                        { id: 'demo', label: '라이브 데모' },
                        { id: 'architecture', label: '아키텍처' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                                selectedTab === tab.id
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                            }`}
                            data-oid="3hf9_9w"
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {selectedTab === 'overview' && (
                    <div className="space-y-8" data-oid="gfm_gyw">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="eriaxxm">
                            <h2 className="text-2xl font-bold mb-4" data-oid="yc6:0:l">
                                프로젝트 개요
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6" data-oid="r8f-2rm">
                                게임 내 아이템을 거래할 수 있는 RESTful API 시스템입니다. Spring
                                Boot와 JPA를 활용하여 CRUD 기능을 구현하였으며, Redis를 통한 캐싱과
                                MySQL을 통한 데이터 영속성을 제공합니다.
                            </p>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="d_gu9dv"
                            >
                                <div data-oid="dt2ym-e">
                                    <h3 className="font-bold mb-3" data-oid="yw4.yvo">
                                        주요 기능
                                    </h3>
                                    <ul className="space-y-2 text-gray-300" data-oid=":welhax">
                                        <li data-oid="n9si7p8">• 아이템 등록/조회/수정/삭제</li>
                                        <li data-oid="vq901ql">• 카테고리별 아이템 필터링</li>
                                        <li data-oid="s:e9b5j">• 가격 범위 검색</li>
                                        <li data-oid="l66-bfu">• 희귀도별 정렬</li>
                                        <li data-oid="-lduaoo">• 실시간 거래 알림</li>
                                    </ul>
                                </div>
                                <div data-oid="c6jf0:0">
                                    <h3 className="font-bold mb-3" data-oid="qvba2ys">
                                        기술 스택
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="zicenn0">
                                        {[
                                            'Spring Boot',
                                            'JPA',
                                            'MySQL',
                                            'Redis',
                                            'Docker',
                                            'Swagger',
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-lg text-sm"
                                                data-oid="214:1_w"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {selectedTab === 'api' && (
                    <div className="space-y-6" data-oid="pfwwg6g">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="wx:kjem">
                            <h2 className="text-2xl font-bold mb-6" data-oid="l5gboy2">
                                API 엔드포인트
                            </h2>
                            <div className="space-y-4" data-oid="3x.4atp">
                                {apiEndpoints.map((endpoint, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-700/50 rounded-lg p-4"
                                        data-oid="yaktdp6"
                                    >
                                        <div
                                            className="flex items-center gap-4 mb-2"
                                            data-oid=":-56g3-"
                                        >
                                            <span
                                                className={`px-3 py-1 rounded text-xs font-bold ${
                                                    endpoint.method === 'GET'
                                                        ? 'bg-green-600'
                                                        : endpoint.method === 'POST'
                                                          ? 'bg-blue-600'
                                                          : endpoint.method === 'PUT'
                                                            ? 'bg-yellow-600'
                                                            : 'bg-red-600'
                                                }`}
                                                data-oid="2ueqgjc"
                                            >
                                                {endpoint.method}
                                            </span>
                                            <code className="text-blue-400" data-oid="fdovw7n">
                                                {endpoint.path}
                                            </code>
                                        </div>
                                        <p className="text-gray-300 text-sm" data-oid="kvu3d8:">
                                            {endpoint.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {selectedTab === 'demo' && (
                    <div className="space-y-6" data-oid="6b_lqtv">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="phmyk13">
                            <h2 className="text-2xl font-bold mb-6" data-oid="4o1kuis">
                                라이브 데모
                            </h2>
                            <div className="bg-gray-900/50 rounded-lg p-6" data-oid="eldnfj3">
                                <h3 className="font-bold mb-4" data-oid="edzm0q9">
                                    아이템 목록
                                </h3>
                                <div className="overflow-x-auto" data-oid="ua--:.d">
                                    <table className="w-full text-left" data-oid="_2ou595">
                                        <thead data-oid="oly2l3_">
                                            <tr
                                                className="border-b border-gray-700"
                                                data-oid="eoo.rry"
                                            >
                                                <th className="pb-3" data-oid="kqmt1q2">
                                                    ID
                                                </th>
                                                <th className="pb-3" data-oid="lt0eupp">
                                                    이름
                                                </th>
                                                <th className="pb-3" data-oid="4.j75aw">
                                                    타입
                                                </th>
                                                <th className="pb-3" data-oid="_gwzpud">
                                                    가격
                                                </th>
                                                <th className="pb-3" data-oid="p90xans">
                                                    희귀도
                                                </th>
                                                <th className="pb-3" data-oid="dow6ia_">
                                                    액션
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody data-oid="2yd9b4e">
                                            {sampleItems.map((item) => (
                                                <tr
                                                    key={item.id}
                                                    className="border-b border-gray-800"
                                                    data-oid="z_r6:mx"
                                                >
                                                    <td className="py-3" data-oid="98oy.ay">
                                                        {item.id}
                                                    </td>
                                                    <td className="py-3" data-oid="rj-onhw">
                                                        {item.name}
                                                    </td>
                                                    <td className="py-3" data-oid="gft6578">
                                                        {item.type}
                                                    </td>
                                                    <td className="py-3" data-oid="q0lh-26">
                                                        {item.price.toLocaleString()}골드
                                                    </td>
                                                    <td className="py-3" data-oid="a8nx-52">
                                                        <span
                                                            className={`px-2 py-1 rounded text-xs ${
                                                                item.rarity === '전설'
                                                                    ? 'bg-purple-600/20 text-purple-400'
                                                                    : item.rarity === '레어'
                                                                      ? 'bg-blue-600/20 text-blue-400'
                                                                      : 'bg-gray-600/20 text-gray-400'
                                                            }`}
                                                            data-oid="i5fwj0s"
                                                        >
                                                            {item.rarity}
                                                        </span>
                                                    </td>
                                                    <td className="py-3" data-oid="rgr2z3.">
                                                        <button
                                                            className="text-blue-400 hover:text-blue-300 text-sm"
                                                            data-oid="5z4_493"
                                                        >
                                                            수정
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {selectedTab === 'architecture' && (
                    <div className="space-y-6" data-oid="ck.hre0">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="ulacd6d">
                            <h2 className="text-2xl font-bold mb-6" data-oid="::bp7w2">
                                시스템 아키텍처
                            </h2>
                            <div className="bg-gray-900/50 rounded-lg p-6" data-oid="fp._qu9">
                                <div className="text-center mb-8" data-oid="nedpves">
                                    <div
                                        className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8"
                                        data-oid="jsybqbu"
                                    >
                                        <pre className="text-sm text-gray-300" data-oid="79_ypkz">
                                            {`┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Client    │───▶│  API Server │───▶│   Database  │
│ (Frontend)  │    │(Spring Boot)│    │   (MySQL)   │
└─────────────┘    └─────────────┘    └─────────────┘
                           │
                           ▼
                   ┌─────────────┐
                   │    Cache    │
                   │   (Redis)   │
                   └─────────────┘`}
                                        </pre>
                                    </div>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                    data-oid="yxd75-."
                                >
                                    <div className="text-center" data-oid=":u3ynog">
                                        <div
                                            className="w-16 h-16 mx-auto bg-blue-600/20 rounded-lg flex items-center justify-center text-2xl mb-3"
                                            data-oid="rj-p57h"
                                        >
                                            🌐
                                        </div>
                                        <h4 className="font-bold mb-2" data-oid="x1ai0rq">
                                            API Layer
                                        </h4>
                                        <p className="text-sm text-gray-400" data-oid="-k0:jeo">
                                            RESTful API 엔드포인트
                                        </p>
                                    </div>
                                    <div className="text-center" data-oid="kb9wxzs">
                                        <div
                                            className="w-16 h-16 mx-auto bg-green-600/20 rounded-lg flex items-center justify-center text-2xl mb-3"
                                            data-oid="yh37l7t"
                                        >
                                            ⚡
                                        </div>
                                        <h4 className="font-bold mb-2" data-oid="jmt12hp">
                                            Cache Layer
                                        </h4>
                                        <p className="text-sm text-gray-400" data-oid="pfu1uq6">
                                            Redis 기반 캐싱
                                        </p>
                                    </div>
                                    <div className="text-center" data-oid="4ce0:bd">
                                        <div
                                            className="w-16 h-16 mx-auto bg-purple-600/20 rounded-lg flex items-center justify-center text-2xl mb-3"
                                            data-oid="5a_x6fq"
                                        >
                                            🗄️
                                        </div>
                                        <h4 className="font-bold mb-2" data-oid="_qhp4:p">
                                            Data Layer
                                        </h4>
                                        <p className="text-sm text-gray-400" data-oid="e_ii83h">
                                            MySQL 데이터베이스
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}
