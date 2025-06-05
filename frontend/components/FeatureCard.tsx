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

interface FeatureCardProps {
    feature: Feature;
    onClick: (feature: Feature) => void;
}

export default function FeatureCard({ feature, onClick }: FeatureCardProps) {
    const isDisabled = feature.status === 'TBD';

    return (
        <div
            className={`group relative backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                isDisabled
                    ? 'bg-gray-800/30 border-gray-700/30 opacity-60 cursor-not-allowed'
                    : 'bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:transform hover:scale-105 cursor-pointer'
            }`}
            onClick={() => !isDisabled && onClick(feature)}
            data-oid="34_dyad"
        >
            {/* Status Badge */}
            <div className="absolute top-4 right-4" data-oid="toucq_e">
                <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                        feature.status === '완료'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}
                    data-oid="qc-7v1."
                >
                    {feature.status}
                </span>
            </div>

            {/* Icon and Category */}
            <div className="flex items-center gap-3 mb-4" data-oid="pyqw54h">
                <div
                    className="text-4xl p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                    data-oid="trpjx3f"
                >
                    {feature.icon}
                </div>
                <span
                    className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded"
                    data-oid="mtx__ui"
                >
                    {feature.category}
                </span>
            </div>

            {/* Content */}
            <h3
                className={`text-xl font-bold mb-3 transition-colors ${
                    isDisabled ? 'text-gray-500' : 'group-hover:text-blue-400'
                }`}
                data-oid="kp8pzuh"
            >
                {feature.title}
            </h3>
            <p
                className={`text-sm mb-4 leading-relaxed ${
                    isDisabled ? 'text-gray-500' : 'text-gray-400'
                }`}
                data-oid="g2.7j7:"
            >
                {feature.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid="fzcf6_d">
                {feature.tech.slice(0, 3).map((tech, index) => (
                    <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded ${
                            isDisabled
                                ? 'bg-gray-700/30 text-gray-500'
                                : 'bg-gray-700/50 text-gray-300'
                        }`}
                        data-oid="nu7jscj"
                    >
                        {tech}
                    </span>
                ))}
                {feature.tech.length > 3 && (
                    <span className="text-xs text-gray-500" data-oid="2w3:ex7">
                        +{feature.tech.length - 3} more
                    </span>
                )}
            </div>

            {/* Action Buttons */}
            {feature.status === '완료' ? (
                <div className="flex gap-2" data-oid="jnhg01c">
                    <Link
                        href={feature.demo || '#'}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="u5xuqvz"
                    >
                        데모 보기
                    </Link>
                    <button
                        className="px-4 py-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors text-sm flex items-center justify-center"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (feature.github) {
                                window.open(feature.github, '_blank');
                            }
                        }}
                        data-oid=".ji41gf"
                    >
                        <span className="text-lg" data-oid="9bninug">
                            📁
                        </span>
                    </button>
                </div>
            ) : (
                <div className="flex gap-2" data-oid="9ny8iuu">
                    <div
                        className="flex-1 bg-gray-700/30 text-gray-500 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center cursor-not-allowed"
                        data-oid="0fvsr3c"
                    >
                        준비중
                    </div>
                </div>
            )}
        </div>
    );
}
