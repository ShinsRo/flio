'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OAuthSystemDemo() {
    const [selectedTab, setSelectedTab] = useState('overview');

    const authFlows = [
        {
            name: 'Authorization Code',
            description: '웹 애플리케이션용 표준 플로우',
            security: '높음',
        },
        { name: 'Client Credentials', description: '서버 간 통신용 플로우', security: '높음' },
        {
            name: 'Resource Owner Password',
            description: '신뢰할 수 있는 클라이언트용',
            security: '중간',
        },
        { name: 'Implicit', description: 'SPA용 간소화된 플로우', security: '중간' },
    ];

    const userRoles = [
        { role: 'ADMIN', permissions: ['READ', 'WRITE', 'DELETE', 'MANAGE_USERS'], count: 5 },
        { role: 'MANAGER', permissions: ['READ', 'WRITE', 'MANAGE_TEAM'], count: 12 },
        { role: 'USER', permissions: ['READ', 'WRITE_OWN'], count: 156 },
        { role: 'GUEST', permissions: ['READ'], count: 89 },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
            data-oid="mng3v8p"
        >
            {/* Header */}
            <header
                className="border-b border-gray-800/50 backdrop-blur-sm bg-black/20 px-6 py-4"
                data-oid="vp:r.sa"
            >
                <div className="max-w-7xl mx-auto flex items-center gap-4" data-oid="2-02.1u">
                    <Link
                        href="/?logged=true"
                        className="text-gray-400 hover:text-white transition-colors"
                        data-oid="qxjlk5r"
                    >
                        ← 돌아가기
                    </Link>
                    <div className="flex items-center gap-3" data-oid="cwrksv:">
                        <span className="text-3xl" data-oid=".r08i1x">
                            🔐
                        </span>
                        <div data-oid="f2suwum">
                            <h1 className="text-2xl font-bold" data-oid="4s12pyh">
                                Keycloak OAuth2 아키텍처
                            </h1>
                            <p className="text-sm text-gray-400" data-oid="0m34yvz">
                                보안 인증 시스템 구축 및 통합
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-8" data-oid="wj.iiqe">
                {/* Tab Navigation */}
                <div
                    className="flex gap-1 mb-8 bg-gray-800/50 p-1 rounded-lg w-fit"
                    data-oid="-gs7h8n"
                >
                    {[
                        { id: 'overview', label: '개요' },
                        { id: 'flows', label: 'OAuth 플로우' },
                        { id: 'roles', label: '권한 관리' },
                        { id: 'integration', label: '시스템 통합' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                                selectedTab === tab.id
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                            }`}
                            data-oid="e14yk3i"
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {selectedTab === 'overview' && (
                    <div className="space-y-8" data-oid="w8o.6di">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="j8ryttl">
                            <h2 className="text-2xl font-bold mb-4" data-oid="0k6hb6-">
                                OAuth2 인증 시스템 개요
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6" data-oid="ry24d0:">
                                Keycloak을 중심으로 한 통합 인증 시스템입니다. OAuth2와 OpenID
                                Connect 프로토콜을 지원하며, 다양한 애플리케이션에서 Single
                                Sign-On(SSO)을 제공합니다. JWT 토큰 기반의 무상태 인증으로 확장성을
                                보장합니다.
                            </p>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="622wkyb"
                            >
                                <div data-oid="b290jxg">
                                    <h3 className="font-bold mb-3" data-oid="::7:m5s">
                                        핵심 기능
                                    </h3>
                                    <ul className="space-y-2 text-gray-300" data-oid="iwcgyi-">
                                        <li data-oid="-a7y5fp">• Single Sign-On (SSO)</li>
                                        <li data-oid="l-m9ag7">• 다중 인증 제공자 지원</li>
                                        <li data-oid="6huub12">• 역할 기반 접근 제어 (RBAC)</li>
                                        <li data-oid="ury-4_m">• JWT 토큰 관리</li>
                                        <li data-oid="tjk1rfr">• 세션 관리 및 보안</li>
                                    </ul>
                                </div>
                                <div data-oid="ue316sf">
                                    <h3 className="font-bold mb-3" data-oid="afjt59q">
                                        기술 스택
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="dwiyh:h">
                                        {[
                                            'Keycloak',
                                            'OAuth2',
                                            'JWT',
                                            'Spring Security',
                                            'OpenID Connect',
                                            'LDAP',
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-lg text-sm"
                                                data-oid="dwg9b4j"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="ohm_:aj">
                            <h3 className="text-xl font-bold mb-4" data-oid="onfojgk">
                                보안 특징
                            </h3>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                data-oid="szbi2x8"
                            >
                                <div
                                    className="bg-green-600/10 border border-green-600/30 rounded-lg p-4"
                                    data-oid="p110krh"
                                >
                                    <div className="text-2xl mb-2" data-oid="hn8.7md">
                                        🛡️
                                    </div>
                                    <h4 className="font-bold mb-2" data-oid="0uw8uja">
                                        토큰 기반 인증
                                    </h4>
                                    <p className="text-sm text-gray-400" data-oid=".vj5051">
                                        JWT 토큰으로 무상태 인증 구현
                                    </p>
                                </div>
                                <div
                                    className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4"
                                    data-oid="vmk.oy_"
                                >
                                    <div className="text-2xl mb-2" data-oid="yn-k2:q">
                                        🔒
                                    </div>
                                    <h4 className="font-bold mb-2" data-oid="4lkvoli">
                                        다중 인증
                                    </h4>
                                    <p className="text-sm text-gray-400" data-oid="s.scty3">
                                        2FA, OTP 등 추가 보안 계층
                                    </p>
                                </div>
                                <div
                                    className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4"
                                    data-oid="1yyz:bf"
                                >
                                    <div className="text-2xl mb-2" data-oid="s6x8z3k">
                                        🔑
                                    </div>
                                    <h4 className="font-bold mb-2" data-oid="em7ywl_">
                                        세밀한 권한 제어
                                    </h4>
                                    <p className="text-sm text-gray-400" data-oid="c0kqn5p">
                                        리소스별 세부 권한 관리
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {selectedTab === 'flows' && (
                    <div className="space-y-6" data-oid="qfmkd:u">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="bk_kgv.">
                            <h2 className="text-2xl font-bold mb-6" data-oid="1c9:ouj">
                                OAuth2 인증 플로우
                            </h2>

                            <div className="space-y-4 mb-8" data-oid="kzzb9ki">
                                {authFlows.map((flow, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-700/50 rounded-lg p-4"
                                        data-oid="kj97:8g"
                                    >
                                        <div
                                            className="flex justify-between items-start mb-2"
                                            data-oid="ed5.6zn"
                                        >
                                            <h3 className="font-bold" data-oid="c:txcq8">
                                                {flow.name}
                                            </h3>
                                            <span
                                                className={`px-2 py-1 rounded text-xs ${
                                                    flow.security === '높음'
                                                        ? 'bg-green-600/20 text-green-400'
                                                        : 'bg-yellow-600/20 text-yellow-400'
                                                }`}
                                                data-oid="k7254e4"
                                            >
                                                보안: {flow.security}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 text-sm" data-oid="wxxn442">
                                            {flow.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-900/50 rounded-lg p-6" data-oid="xh3gy6x">
                                <h3 className="font-bold mb-4" data-oid=":h54s:-">
                                    Authorization Code Flow 시퀀스
                                </h3>
                                <div className="text-center" data-oid="r9rxtev">
                                    <div
                                        className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-6"
                                        data-oid="zx_ipqq"
                                    >
                                        <pre
                                            className="text-sm text-gray-300 text-left"
                                            data-oid="p5boy99"
                                        >
                                            {`1. Client → Authorization Server: 인증 요청
   GET /auth?response_type=code&client_id=...

2. User → Authorization Server: 로그인 및 동의

3. Authorization Server → Client: Authorization Code 반환
   Redirect: /callback?code=ABC123

4. Client → Authorization Server: Access Token 요청
   POST /token (code, client_secret)

5. Authorization Server → Client: Access Token 발급
   { "access_token": "...", "token_type": "Bearer" }

6. Client → Resource Server: API 호출
   Authorization: Bearer <access_token>`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {selectedTab === 'roles' && (
                    <div className="space-y-6" data-oid="r02-a4m">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="r.aml_o">
                            <h2 className="text-2xl font-bold mb-6" data-oid="k3f:r-k">
                                역할 기반 접근 제어
                            </h2>

                            <div className="bg-gray-900/50 rounded-lg p-6" data-oid="9z9dn7e">
                                <h3 className="font-bold mb-4" data-oid="-l1a17j">
                                    사용자 역할 현황
                                </h3>
                                <div className="space-y-4" data-oid="s3v576w">
                                    {userRoles.map((roleData, index) => (
                                        <div
                                            key={index}
                                            className="border border-gray-700 rounded-lg p-4"
                                            data-oid="5.g_bj8"
                                        >
                                            <div
                                                className="flex justify-between items-start mb-3"
                                                data-oid="qoyom-v"
                                            >
                                                <div data-oid="wlib3ng">
                                                    <h4
                                                        className="font-bold text-lg"
                                                        data-oid="b9ukxpm"
                                                    >
                                                        {roleData.role}
                                                    </h4>
                                                    <p
                                                        className="text-sm text-gray-400"
                                                        data-oid="lx2cwzq"
                                                    >
                                                        {roleData.count}명의 사용자
                                                    </p>
                                                </div>
                                                <div className="text-right" data-oid="9xu:0ax">
                                                    <div
                                                        className="text-2xl font-bold text-blue-400"
                                                        data-oid="e2:k92v"
                                                    >
                                                        {roleData.count}
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-oid="sjry-wn">
                                                <p
                                                    className="text-sm text-gray-400 mb-2"
                                                    data-oid="nv3f36g"
                                                >
                                                    권한:
                                                </p>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="jv23vbw"
                                                >
                                                    {roleData.permissions.map(
                                                        (permission, pIndex) => (
                                                            <span
                                                                key={pIndex}
                                                                className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs"
                                                                data-oid="hjles2f"
                                                            >
                                                                {permission}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                                data-oid="4oxwk_m"
                            >
                                <div className="bg-gray-900/50 rounded-lg p-6" data-oid="ddd99pr">
                                    <h3 className="font-bold mb-4" data-oid="95yvyqv">
                                        권한 매트릭스
                                    </h3>
                                    <div className="overflow-x-auto" data-oid="tgmz.tx">
                                        <table className="w-full text-sm" data-oid="u_2pin2">
                                            <thead data-oid="5vzm96-">
                                                <tr
                                                    className="border-b border-gray-700"
                                                    data-oid="z9xd586"
                                                >
                                                    <th
                                                        className="text-left pb-2"
                                                        data-oid="xz2k1rt"
                                                    >
                                                        리소스
                                                    </th>
                                                    <th
                                                        className="text-center pb-2"
                                                        data-oid="j040voi"
                                                    >
                                                        READ
                                                    </th>
                                                    <th
                                                        className="text-center pb-2"
                                                        data-oid="qg08u6p"
                                                    >
                                                        WRITE
                                                    </th>
                                                    <th
                                                        className="text-center pb-2"
                                                        data-oid="jtedpn0"
                                                    >
                                                        DELETE
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody data-oid="wwncwa4">
                                                <tr
                                                    className="border-b border-gray-800"
                                                    data-oid="2j9g52f"
                                                >
                                                    <td className="py-2" data-oid="44rtpy_">
                                                        사용자 정보
                                                    </td>
                                                    <td className="text-center" data-oid="t5jd:jr">
                                                        ✅
                                                    </td>
                                                    <td className="text-center" data-oid="odfrqz1">
                                                        👤
                                                    </td>
                                                    <td className="text-center" data-oid="5fk9aco">
                                                        🔒
                                                    </td>
                                                </tr>
                                                <tr
                                                    className="border-b border-gray-800"
                                                    data-oid="fc66x6k"
                                                >
                                                    <td className="py-2" data-oid="itxcmg5">
                                                        시스템 설정
                                                    </td>
                                                    <td className="text-center" data-oid="rnxa:25">
                                                        👤
                                                    </td>
                                                    <td className="text-center" data-oid="frt.3:x">
                                                        🔒
                                                    </td>
                                                    <td className="text-center" data-oid="dafnt30">
                                                        🔒
                                                    </td>
                                                </tr>
                                                <tr data-oid="i27l-:a">
                                                    <td className="py-2" data-oid="dy003n7">
                                                        로그 데이터
                                                    </td>
                                                    <td className="text-center" data-oid="hpgg6js">
                                                        👤
                                                    </td>
                                                    <td className="text-center" data-oid="sd8gec7">
                                                        ❌
                                                    </td>
                                                    <td className="text-center" data-oid="si0e8ov">
                                                        🔒
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4 text-xs text-gray-400" data-oid="hdre6ly">
                                        ✅ 모든 사용자 | 👤 인증된 사용자 | 🔒 관리자만 | ❌ 불가
                                    </div>
                                </div>

                                <div className="bg-gray-900/50 rounded-lg p-6" data-oid="83bpx-t">
                                    <h3 className="font-bold mb-4" data-oid="6.o:e14">
                                        세션 관리
                                    </h3>
                                    <div className="space-y-3" data-oid=":xu8ki:">
                                        <div className="flex justify-between" data-oid="e0w.lip">
                                            <span className="text-gray-400" data-oid="obv8fla">
                                                활성 세션
                                            </span>
                                            <span
                                                className="text-green-400 font-bold"
                                                data-oid="dgs1yy6"
                                            >
                                                247
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="63xeyfm">
                                            <span className="text-gray-400" data-oid="zi-c7tx">
                                                평균 세션 시간
                                            </span>
                                            <span
                                                className="text-blue-400 font-bold"
                                                data-oid="rnlfcyf"
                                            >
                                                2.5시간
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="o22flox">
                                            <span className="text-gray-400" data-oid="bsd6:r_">
                                                토큰 만료 시간
                                            </span>
                                            <span
                                                className="text-yellow-400 font-bold"
                                                data-oid="20wstap"
                                            >
                                                1시간
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="14n6hca">
                                            <span className="text-gray-400" data-oid="2u1lzp-">
                                                리프레시 토큰
                                            </span>
                                            <span
                                                className="text-purple-400 font-bold"
                                                data-oid="w_69zyc"
                                            >
                                                7일
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {selectedTab === 'integration' && (
                    <div className="space-y-6" data-oid="zj956wz">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="bjwhr_4">
                            <h2 className="text-2xl font-bold mb-6" data-oid="nt1w-sr">
                                시스템 통합 아키텍처
                            </h2>

                            <div className="bg-gray-900/50 rounded-lg p-6 mb-8" data-oid="o9flr4_">
                                <div className="text-center" data-oid="s1c2o60">
                                    <div
                                        className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-8"
                                        data-oid="y5:6msk"
                                    >
                                        <pre className="text-sm text-gray-300" data-oid="3itn43g">
                                            {`┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Web App   │    │  Mobile App │    │   API App   │
│             │    │             │    │             │
└──────┬──────┘    └──────┬──────┘    └──────┬──────┘
       │                  │                  │
       └──────────────────┼──────────────────┘
                          │
                ┌─────────▼─────────┐
                │    Keycloak      │
                │ (Auth Server)    │
                └─────────┬─────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
┌───────▼───────┐ ┌───────▼───────┐ ┌───────▼───────┐
│   User Store  │ │  LDAP/AD      │ │  Social Login │
│   (Database)  │ │  Integration  │ │  (OAuth)      │
└───────────────┘ └───────────────┘ └───────────────┘`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="qnkl_8i"
                            >
                                <div data-oid="tlwq3dg">
                                    <h3 className="font-bold mb-4" data-oid=":zvmhom">
                                        통합된 애플리케이션
                                    </h3>
                                    <div className="space-y-3" data-oid="qig0l--">
                                        <div
                                            className="bg-gray-700/50 rounded-lg p-3"
                                            data-oid="odxk3rd"
                                        >
                                            <div
                                                className="flex items-center gap-3"
                                                data-oid="0oifef0"
                                            >
                                                <span className="text-xl" data-oid="ssw_21u">
                                                    🌐
                                                </span>
                                                <div data-oid="8hule_4">
                                                    <div className="font-medium" data-oid="-mveoq4">
                                                        웹 애플리케이션
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-400"
                                                        data-oid=".8j8hy9"
                                                    >
                                                        React + Spring Boot
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-gray-700/50 rounded-lg p-3"
                                            data-oid="dyj4i9l"
                                        >
                                            <div
                                                className="flex items-center gap-3"
                                                data-oid="rfkocjq"
                                            >
                                                <span className="text-xl" data-oid="_e2cttt">
                                                    📱
                                                </span>
                                                <div data-oid="ggeu0o.">
                                                    <div className="font-medium" data-oid="hicjw8c">
                                                        모바일 앱
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-400"
                                                        data-oid="17si828"
                                                    >
                                                        React Native
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-gray-700/50 rounded-lg p-3"
                                            data-oid="x4d6nm9"
                                        >
                                            <div
                                                className="flex items-center gap-3"
                                                data-oid="0owfsre"
                                            >
                                                <span className="text-xl" data-oid="x-p.oys">
                                                    ⚙️
                                                </span>
                                                <div data-oid="b:gq6sw">
                                                    <div className="font-medium" data-oid=".1nnvsy">
                                                        관리자 대시보드
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-400"
                                                        data-oid="cg9mudg"
                                                    >
                                                        Vue.js + Express
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-oid="j2ea8zt">
                                    <h3 className="font-bold mb-4" data-oid="8--x4ms">
                                        인증 제공자
                                    </h3>
                                    <div className="space-y-3" data-oid="0a4vvce">
                                        <div
                                            className="bg-gray-700/50 rounded-lg p-3"
                                            data-oid="9mkn37a"
                                        >
                                            <div
                                                className="flex items-center gap-3"
                                                data-oid="c4xd217"
                                            >
                                                <span className="text-xl" data-oid="-lvct5w">
                                                    🏢
                                                </span>
                                                <div data-oid="x:y.vd5">
                                                    <div className="font-medium" data-oid="eidskwy">
                                                        Active Directory
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-400"
                                                        data-oid="ug8u_42"
                                                    >
                                                        기업 계정 연동
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-gray-700/50 rounded-lg p-3"
                                            data-oid="wfuqfyd"
                                        >
                                            <div
                                                className="flex items-center gap-3"
                                                data-oid="sm1jpl7"
                                            >
                                                <span className="text-xl" data-oid="tapsmy4">
                                                    🔗
                                                </span>
                                                <div data-oid="k7ynlj5">
                                                    <div className="font-medium" data-oid="m8sq0g_">
                                                        소셜 로그인
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-400"
                                                        data-oid="_5uphoi"
                                                    >
                                                        Google, GitHub, Kakao
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-gray-700/50 rounded-lg p-3"
                                            data-oid="h.j::i6"
                                        >
                                            <div
                                                className="flex items-center gap-3"
                                                data-oid="6eh0kpa"
                                            >
                                                <span className="text-xl" data-oid="4lvaxrl">
                                                    🗄️
                                                </span>
                                                <div data-oid="u517e3w">
                                                    <div className="font-medium" data-oid="vs_qa02">
                                                        내부 사용자 DB
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-400"
                                                        data-oid="t:0dpgk"
                                                    >
                                                        PostgreSQL
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
