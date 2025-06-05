'use client';

export default function LoginBackground() {
    return (
        <div className="absolute inset-0 z-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

            {/* Red particle effects */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-600 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 right-1/2 w-80 h-80 bg-red-400 rounded-full opacity-10 blur-3xl animate-pulse delay-2000"></div>
        </div>
    );
}
