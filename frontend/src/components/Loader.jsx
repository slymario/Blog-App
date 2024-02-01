


const Loader = () => {
    return (
        <div role="status">
            <svg
            aria-hidden="true"
            className="inline w-10 h-10 mr-2 text-gray-200 animate-spin fill-[#2d2d2e]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            >
            <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#2d2d2e"
                strokeWidth="8"
                r="35"
                strokeDasharray="164"
                strokeDashoffset="0"
                strokeLinecap="round"
            >
                <animate
                attributeName="stroke-dashoffset"
                dur="2s"
                keyTimes="0;1"
                values="0;164"
                repeatCount="indefinite"
                />
            </circle>
            </svg>
        </div>
        );
};

export default Loader;
