import { useState } from "react";

const MoodMatcher = ({ onSuggestion }) => {
    const [mood, setMood] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mood.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            // We will define this function in ai.js
            const { getMovieSuggestionFromMood } = await import("../api/ai");
            const suggestedTitle = await getMovieSuggestionFromMood(mood);
            onSuggestion(suggestedTitle);
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-900 p-6 rounded-lg max-w-2xl mx-auto my-8 shadow-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                ✨ AI Mood Matcher
            </h2>
            <p className="text-gray-400 mb-4 text-sm">
                Tell me how you're feeling, and I'll find the perfect movie for you.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="text"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    placeholder="e.g., I am feeling sad but want an action movie..."
                    className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition border border-gray-700 placeholder-gray-500"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading || !mood.trim()}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg shadow-purple-500/30"
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Thinking...
                        </span>
                    ) : "Match Mood"}
                </button>
            </form>

            {error && (
                <p className="text-red-400 text-sm mt-3">{error}</p>
            )}
        </div>
    );
};

export default MoodMatcher;
