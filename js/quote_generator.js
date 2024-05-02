// Array of quotes
const quotes = [
    { title: "The Universe Unveiled", tagline: "Exploring the Mysteries of Time and Space", image: "Blog/blog_quotes/quote_a-brief-history-of-time.png" },
    { title: "Embracing Life's Bright Moments", tagline: "Finding Light in Unexpected Places", image: "Blog/blog_quotes/quote_all-the-bright-places.png" },
    { title: "Holden's Reflections", tagline: "Navigating Adolescence and Identity", image: "Blog/blog_quotes/quote_catcher-in-the-rye.png" },
    { title: "The Cosmic Perspective", tagline: "Journeying Across the Cosmos", image: "Blog/blog_quotes/quote_cosmos.png" },
    { title: "Raskolnikov's Dilemma", tagline: "Exploring the Depths of Guilt and Redemption", image: "Blog/blog_quotes/quote_crime-and-punishment.png" },
    { title: "A Tale of Love and Society", tagline: "Discovering True Love Amidst Social Conventions", image: "Blog/blog_quotes/quote_pride-and-prejudice.png" },
    { title: "Anne's Courageous Diary", tagline: "A Testament to Hope and Resilience", image: "Blog/blog_quotes/quote_the-diary-of-a-young-girl.png" },
    { title: "Hazel and Augustus' Journey", tagline: "Finding Love and Meaning in the Face of Illness", image: "Blog/blog_quotes/quote_the-fault-in-our-stars.png" },
    { title: "Gatsby's Illusion of Greatness", tagline: "Chasing the American Dream in the Roaring Twenties", image: "Blog/blog_quotes/quote_the-great-gatsby.png" },
    { title: "Bilbo's Unexpected Adventure", tagline: "An Epic Journey Across Middle-earth", image: "Blog/blog_quotes/quote_the-hobbit.png" },
    { title: "Stranded on Mars", tagline: "Surviving Against All Odds", image: "Blog/blog_quotes/quote_the-martian.png" },
    { title: "Scout's Coming-of-Age Story", tagline: "Exploring Justice and Morality in the Deep South", image: "Blog/blog_quotes/quote_to-kill-a-mocking-bird.png" }
];

// Function to generate a random quote
function generateRandomQuote() {
    console.log("Generating random quote...");
    
    // Get random index from quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log("Random index:", randomIndex);
    
    // Get the quote object at the random index
    const randomQuote = quotes[randomIndex];
    console.log("Random quote:", randomQuote);
    
    // Update HTML elements with the quote information
    document.getElementById("quote-title").textContent = randomQuote.title;
    console.log("Title updated:", randomQuote.title);
    
    document.getElementById("quote-tagline").textContent = randomQuote.tagline;
    console.log("Tagline updated:", randomQuote.tagline);
    
    document.getElementById("quote-image").src = randomQuote.image;
    console.log("Image updated:", randomQuote.image);
}

// Event listener for button click
document.getElementById("generate-quote-button").addEventListener("click", function() {
    console.log("Button clicked.");
    generateRandomQuote(); // Call the generateRandomQuote function
});

// Initial call to generate a random quote on page load
generateRandomQuote();
