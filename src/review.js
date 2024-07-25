function Review() {
    const reviews = [
        "This product is good",
        "This product is bad"
    ];

    return (
        <div>
            <h1>REVIEW</h1>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>
        </div>
    );
}

export default Review;
