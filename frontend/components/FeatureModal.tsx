'use client';

import Link from 'next/link';

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

interface FeatureModalProps {
    feature: Feature | null;
    onClose: () => void;
}

export default function FeatureModal({ feature, onClose }: FeatureModalProps) {
    if (!feature) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            data-oid="3volj8l"
        >
            <div
                className="bg-gray-800 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                data-oid="2k42men"
            >
                <div className="p-6" data-oid="k-jb1zg">
                    <div className="flex justify-between items-start mb-6" data-oid="av9hx_c">
                        <div className="flex items-center gap-4" data-oid="t4pk0cp">
                            <div
                                className="text-4xl p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                                data-oid="vo9q.nq"
                            >
                                {feature.icon}
                            </div>
                            <div data-oid="ujhzy_e">
                                <h3 className="text-2xl font-bold" data-oid="7s8mqd.">
                                    {feature.title}
                                </h3>
                                <span className="text-sm text-gray-400" data-oid="m621zfc">
                                    {feature.category}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white text-2xl"
                            data-oid="--3wulj"
                        >
                            ×
                        </button>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed" data-oid="qmw_15s">
                        {feature.description}
                    </p>

                    <div className="mb-6" data-oid="v45jeyc">
                        <h4 className="font-bold mb-3" data-oid="ib:-bo2">
                            기술 스택
                        </h4>
                        <div className="flex flex-wrap gap-2" data-oid="l97av.y">
                            {feature.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-lg text-sm"
                                    data-oid="w5bmsg3"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {feature.status === '완료' && (
                        <div className="flex gap-3" data-oid="q_4pnq6">
                            <Link
                                href={feature.demo || '#'}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center"
                                data-oid="p7n9:8u"
                            >
                                라이브 데모 보기
                            </Link>
                            <button
                                className="flex-1 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center"
                                onClick={() => {
                                    if (feature.github) {
                                        window.open(feature.github, '_blank');
                                    }
                                }}
                                data-oid="9l913dl"
                            >
                                GitHub 보기
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
