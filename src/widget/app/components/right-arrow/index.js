

const RightArrow = (props) => {
    return (
        <svg
            width={10}
            height={10}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M8.827 4.668L.56 4.656a.4.4 0 00-.399.39.381.381 0 00.382.392l8.266.012a.4.4 0 00.4-.39.381.381 0 00-.383-.392z"
                fill="#8890B5"
            />
            <path
                d="M6.662 7.149a.402.402 0 10.568.568L9.716 5.23a.402.402 0 000-.568L7.124 2.071a.402.402 0 10-.568.568l2.308 2.308L6.662 7.15z"
                fill="#8890B5"
            />
        </svg>
    );
}

export default RightArrow;