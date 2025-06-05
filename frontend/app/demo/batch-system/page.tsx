'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BatchSystemDemo() {
    const [selectedTab, setSelectedTab] = useState('overview');

    const batchJobs = [
        {
            id: 1,
            name: '일일 정산 배치',
            status: '실행중',
            lastRun: '2024-01-15 02:00:00',
            duration: '45분',
        },
        {
            id: 2,
            name: '사용자 통계 배치',
            status: '완료',
            lastRun: '2024-01-15 01:30:00',
            duration: '12분',
        },
        {
            id: 3,
            name: '데이터 백업 배치',
            status: '대기중',
            lastRun: '2024-01-14 23:00:00',
            duration: '30분',
        },
        {
            id: 4,
            name: '로그 정리 배치',
            status: '완료',
            lastRun: '2024-01-15 00:00:00',
            duration: '8분',
        },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
            data-oid="1vp8ua6"
        >
            {/* Header */}
            <header
                className="border-b border-gray-800/50 backdrop-blur-sm bg-black/20 px-6 py-4"
                data-oid=":nb_ymn"
            >
                <div className="max-w-7xl mx-auto flex items-center gap-4" data-oid=":yd4s4m">
                    <Link
                        href="/dashboard"
                        className="text-gray-400 hover:text-white transition-colors"
                        data-oid="awnl2xq"
                    >
                        ← 돌아가기
                    </Link>
                    <div className="flex items-center gap-3" data-oid="m_tx5tz">
                        <span className="text-3xl" data-oid="63gsfvn">
                            ⚡
                        </span>
                        <div data-oid="bht.c8j">
                            <h1 className="text-2xl font-bold" data-oid="na5hm8o">
                                배치 어플리케이션 이중화
                            </h1>
                            <p className="text-sm text-gray-400" data-oid="nybt78a">
                                고가용성 배치 시스템 아키텍처
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-8" data-oid="3s9gpi5">
                {/* Tab Navigation */}
                <div
                    className="flex gap-1 mb-8 bg-gray-800/50 p-1 rounded-lg w-fit"
                    data-oid="gbr1snw"
                >
                    {[
                        { id: 'overview', label: '개요' },
                        { id: 'monitoring', label: '모니터링' },
                        { id: 'architecture', label: '이중화 구조' },
                        { id: 'failover', label: '장애 복구' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                                selectedTab === tab.id
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                            }`}
                            data-oid="-6qhxzl"
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {selectedTab === 'overview' && (
                    <div className="space-y-8" data-oid="flo3dw6">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="n32a8_b">
                            <h2 className="text-2xl font-bold mb-4" data-oid="74.5z55">
                                배치 시스템 개요
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6" data-oid="tu-.a1z">
                                Spring Batch와 Quartz Scheduler를 활용한 고가용성 배치 시스템입니다.
                                Active-Standby 구조로 이중화되어 있으며, 장애 발생 시 자동으로
                                Standby 서버가 작업을 이어받아 무중단 서비스를 제공합니다.
                            </p>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="ax2e25r"
                            >
                                <div data-oid="z25cqp7">
                                    <h3 className="font-bold mb-3" data-oid="anj6fe6">
                                        핵심 기능
                                    </h3>
                                    <ul className="space-y-2 text-gray-300" data-oid="vkk60h1">
                                        <li data-oid="yskx3:2">• Active-Standby 이중화 구조</li>
                                        <li data-oid="2aech1w">• 자동 장애 감지 및 복구</li>
                                        <li data-oid="qgn7ncc">• 배치 작업 스케줄링</li>
                                        <li data-oid="zt.pk7u">• 실시간 모니터링</li>
                                        <li data-oid="4_v:k9h">• 작업 실패 시 재시도 로직</li>
                                    </ul>
                                </div>
                                <div data-oid=":9-kos7">
                                    <h3 className="font-bold mb-3" data-oid="q23pk:e">
                                        기술 스택
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="ug7k750">
                                        {[
                                            'Spring Batch',
                                            'Quartz',
                                            'Docker',
                                            'Kubernetes',
                                            'Prometheus',
                                            'Grafana',
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-green-600/20 text-green-400 px-3 py-1 rounded-lg text-sm"
                                                data-oid="stgfn_m"
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

                {selectedTab === 'monitoring' && (
                    <div className="space-y-6" data-oid="j0vbpxm">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="gt.v24-">
                            <h2 className="text-2xl font-bold mb-6" data-oid="48e-p6w">
                                배치 작업 모니터링
                            </h2>

                            {/* System Status */}
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                                data-oid="_jrr-.0"
                            >
                                <div
                                    className="bg-green-600/20 border border-green-600/30 rounded-lg p-4"
                                    data-oid="uud6d:9"
                                >
                                    <div className="flex items-center gap-3" data-oid="amzgbw0">
                                        <div
                                            className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                                            data-oid="b0yadmg"
                                        ></div>
                                        <span className="font-bold" data-oid="ib:_37z">
                                            Active Server
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-300 mt-2" data-oid="pp8b..-">
                                        서버 1 - 정상 운영중
                                    </p>
                                </div>
                                <div
                                    className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-4"
                                    data-oid=":z3::bw"
                                >
                                    <div className="flex items-center gap-3" data-oid="xw6fgpv">
                                        <div
                                            className="w-3 h-3 bg-yellow-500 rounded-full"
                                            data-oid="0obld-4"
                                        ></div>
                                        <span className="font-bold" data-oid="mfvpdjp">
                                            Standby Server
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-300 mt-2" data-oid="6fzsmss">
                                        서버 2 - 대기중
                                    </p>
                                </div>
                                <div
                                    className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-4"
                                    data-oid=":5dxdqz"
                                >
                                    <div className="flex items-center gap-3" data-oid="7myaiu4">
                                        <div
                                            className="w-3 h-3 bg-blue-500 rounded-full"
                                            data-oid="8iygs6-"
                                        ></div>
                                        <span className="font-bold" data-oid="p3yddx:">
                                            Database
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-300 mt-2" data-oid="2.l4zl6">
                                        연결 상태 양호
                                    </p>
                                </div>
                            </div>

                            {/* Batch Jobs Table */}
                            <div className="bg-gray-900/50 rounded-lg p-6" data-oid="resa7-.">
                                <h3 className="font-bold mb-4" data-oid=":7xnjmt">
                                    배치 작업 현황
                                </h3>
                                <div className="overflow-x-auto" data-oid="nn22.ef">
                                    <table className="w-full text-left" data-oid="wo4169s">
                                        <thead data-oid="klziwp-">
                                            <tr
                                                className="border-b border-gray-700"
                                                data-oid="uhc7zks"
                                            >
                                                <th className="pb-3" data-oid="9mkzit:">
                                                    작업명
                                                </th>
                                                <th className="pb-3" data-oid="b_5_5.0">
                                                    상태
                                                </th>
                                                <th className="pb-3" data-oid="z-6ayd9">
                                                    마지막 실행
                                                </th>
                                                <th className="pb-3" data-oid="jwx28a9">
                                                    소요시간
                                                </th>
                                                <th className="pb-3" data-oid="taie0mf">
                                                    액션
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody data-oid="4b:r-8y">
                                            {batchJobs.map((job) => (
                                                <tr
                                                    key={job.id}
                                                    className="border-b border-gray-800"
                                                    data-oid=":x2vsiv"
                                                >
                                                    <td className="py-3" data-oid="qnpjq_5">
                                                        {job.name}
                                                    </td>
                                                    <td className="py-3" data-oid="g9fi9p1">
                                                        <span
                                                            className={`px-2 py-1 rounded text-xs ${
                                                                job.status === '실행중'
                                                                    ? 'bg-blue-600/20 text-blue-400'
                                                                    : job.status === '완료'
                                                                      ? 'bg-green-600/20 text-green-400'
                                                                      : 'bg-yellow-600/20 text-yellow-400'
                                                            }`}
                                                            data-oid="3lav4jd"
                                                        >
                                                            {job.status}
                                                        </span>
                                                    </td>
                                                    <td
                                                        className="py-3 text-gray-300"
                                                        data-oid="bfb67f_"
                                                    >
                                                        {job.lastRun}
                                                    </td>
                                                    <td
                                                        className="py-3 text-gray-300"
                                                        data-oid="-w:c92b"
                                                    >
                                                        {job.duration}
                                                    </td>
                                                    <td className="py-3" data-oid="e0tnqil">
                                                        <button
                                                            className="text-blue-400 hover:text-blue-300 text-sm"
                                                            data-oid="4:kck7_"
                                                        >
                                                            로그 보기
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
                    <div className="space-y-6" data-oid="7e2s_ot">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="0gbbbz1">
                            <h2 className="text-2xl font-bold mb-6" data-oid=":up1ova">
                                이중화 아키텍처
                            </h2>
                            <div className="bg-gray-900/50 rounded-lg p-6" data-oid="pl-d1h_">
                                <div className="text-center mb-8" data-oid="-_605aj">
                                    <div
                                        className="inline-block bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-8"
                                        data-oid="nxsnh1f"
                                    >
                                        <pre className="text-sm text-gray-300" data-oid="q8slj0p">
                                            {`┌─────────────────┐    ┌─────────────────┐
│   Active Server │    │  Standby Server │
│   (Primary)     │    │   (Secondary)   │
│                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │Spring Batch │ │    │ │Spring Batch │ │
│ │   + Quartz  │ │    │ │   + Quartz  │ │
│ └─────────────┘ │    │ └─────────────┘ │
└─────────┬───────┘    └─────────┬───────┘
          │                      │
          └──────────┬───────────┘
                     │
            ┌────────▼────────┐
            │   Shared DB     │
            │   (Job Store)   │
            └─────────────────┘`}
                                        </pre>
                                    </div>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    data-oid="2r38r-t"
                                >
                                    <div data-oid="ji7s169">
                                        <h4 className="font-bold mb-3" data-oid="o.py03l">
                                            Active Server
                                        </h4>
                                        <ul
                                            className="space-y-2 text-gray-300 text-sm"
                                            data-oid=":pyre2y"
                                        >
                                            <li data-oid="6t7..st">• 모든 배치 작업 실행</li>
                                            <li data-oid="d.3-bne">• 스케줄러 활성화</li>
                                            <li data-oid="4loen6:">• 헬스체크 신호 전송</li>
                                            <li data-oid=":95uv4c">• 작업 상태 모니터링</li>
                                        </ul>
                                    </div>
                                    <div data-oid="0md6nkb">
                                        <h4 className="font-bold mb-3" data-oid="1m87m.v">
                                            Standby Server
                                        </h4>
                                        <ul
                                            className="space-y-2 text-gray-300 text-sm"
                                            data-oid="ytp-8ua"
                                        >
                                            <li data-oid="g._43fa">• 대기 상태 유지</li>
                                            <li data-oid="r59p6ay">• Active 서버 모니터링</li>
                                            <li data-oid="61g.pxg">• 장애 감지 시 즉시 활성화</li>
                                            <li data-oid="id:m71j">• 작업 이어받기 준비</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {selectedTab === 'failover' && (
                    <div className="space-y-6" data-oid="i3bu-gv">
                        <section className="bg-gray-800/30 rounded-xl p-6" data-oid="gprzit9">
                            <h2 className="text-2xl font-bold mb-6" data-oid="0xksumu">
                                장애 복구 시나리오
                            </h2>

                            <div className="space-y-6" data-oid="nhxufkh">
                                <div
                                    className="bg-red-600/10 border border-red-600/30 rounded-lg p-6"
                                    data-oid="ztg67yo"
                                >
                                    <h3 className="font-bold text-red-400 mb-3" data-oid="yfzcb-7">
                                        1. 장애 감지
                                    </h3>
                                    <p className="text-gray-300 text-sm" data-oid="b1x.g_n">
                                        Standby 서버가 Active 서버의 헬스체크 신호를 30초간 받지
                                        못하면 장애로 판단
                                    </p>
                                </div>

                                <div
                                    className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-6"
                                    data-oid="h-b-s6a"
                                >
                                    <h3
                                        className="font-bold text-yellow-400 mb-3"
                                        data-oid="jc-8gdd"
                                    >
                                        2. 자동 전환
                                    </h3>
                                    <p className="text-gray-300 text-sm" data-oid="ips0--e">
                                        Standby 서버가 자동으로 Active 상태로 전환되며, 스케줄러를
                                        활성화
                                    </p>
                                </div>

                                <div
                                    className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-6"
                                    data-oid="_bse2mx"
                                >
                                    <h3 className="font-bold text-blue-400 mb-3" data-oid="a4nrwcw">
                                        3. 작업 복구
                                    </h3>
                                    <p className="text-gray-300 text-sm" data-oid="pbanoae">
                                        실행 중이던 배치 작업의 상태를 확인하고, 필요시 중단된
                                        지점부터 재시작
                                    </p>
                                </div>

                                <div
                                    className="bg-green-600/10 border border-green-600/30 rounded-lg p-6"
                                    data-oid="_k0ekkb"
                                >
                                    <h3
                                        className="font-bold text-green-400 mb-3"
                                        data-oid="ne9w380"
                                    >
                                        4. 정상화
                                    </h3>
                                    <p className="text-gray-300 text-sm" data-oid="f2azcb7">
                                        새로운 Active 서버에서 모든 배치 작업이 정상적으로 실행되며,
                                        알림 발송
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-gray-900/50 rounded-lg p-6" data-oid="bewk909">
                                <h3 className="font-bold mb-4" data-oid="ckv:pjq">
                                    복구 시간 목표
                                </h3>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                    data-oid="ckoo315"
                                >
                                    <div className="text-center" data-oid="9w70z4b">
                                        <div
                                            className="text-2xl font-bold text-blue-400"
                                            data-oid="6joa5qn"
                                        >
                                            1분
                                        </div>
                                        <div className="text-sm text-gray-400" data-oid="ovj.ijf">
                                            장애 감지 시간
                                        </div>
                                    </div>
                                    <div className="text-center" data-oid="440gmn0">
                                        <div
                                            className="text-2xl font-bold text-green-400"
                                            data-oid="jg4v6lg"
                                        >
                                            30초
                                        </div>
                                        <div className="text-sm text-gray-400" data-oid="ss.uhnc">
                                            서버 전환 시간
                                        </div>
                                    </div>
                                    <div className="text-center" data-oid="4:vr2co">
                                        <div
                                            className="text-2xl font-bold text-purple-400"
                                            data-oid="-c95x4-"
                                        >
                                            99.9%
                                        </div>
                                        <div className="text-sm text-gray-400" data-oid="zlm8aew">
                                            가용성 목표
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
