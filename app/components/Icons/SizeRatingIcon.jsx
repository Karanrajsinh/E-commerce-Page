const SizeRatingIcon = ({ progress = 80 }) => {
    // Ensure the progress value is within the valid range
    const normalizedProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <svg width="48" height="48" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            {/* Background Circle */}
            <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="2"
            />

            {/* Progress Circle */}
            <circle
                cx="18"
                cy="18"
                r="15.915"
                fill="none"
                stroke="#FF08A0"
                strokeWidth="2"
                strokeDasharray={`${normalizedProgress}, 100`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
            />

            {/* Centered Inner SVG */}
            <g transform="translate(9, 13)">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.175956 4.57574C-0.058359 4.81005 -0.058359 5.18995 0.175956 5.42426L3.99433 9.24264C4.22865 9.47696 4.60855 9.47696 4.84286 9.24264C5.07718 9.00833 5.07718 8.62843 4.84286 8.39411L1.44875 5L4.84286 1.60589C5.07718 1.37157 5.07718 0.991674 4.84286 0.757359C4.60855 0.523045 4.22865 0.523045 3.99433 0.757359L0.175956 4.57574ZM17.8245 5.42426C18.0588 5.18995 18.0588 4.81005 17.8245 4.57574L14.0061 0.757359C13.7718 0.523045 13.3919 0.523045 13.1576 0.757359C12.9233 0.991674 12.9233 1.37157 13.1576 1.60589L16.5517 5L13.1576 8.39411C12.9233 8.62843 12.9233 9.00833 13.1576 9.24264C13.3919 9.47696 13.7718 9.47696 14.0061 9.24264L17.8245 5.42426ZM0.60022 5.6H17.4002V4.4H0.60022V5.6Z"
                        fill="#FF08A0"
                    />
                </svg>
            </g>
        </svg>
    );
};

export default SizeRatingIcon;
