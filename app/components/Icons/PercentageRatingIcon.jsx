const PercentageRatingIcon = ({ progress = 80 }) => {
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

            {/* Centered Percentage Text */}
            <text
                x="18"
                y="21"
                textAnchor="middle"
                fontSize="10"
                stroke="#FF08A0"
                fontWeight="200"
            >
                {normalizedProgress}%
            </text>
        </svg>
    );
};

export default PercentageRatingIcon;
