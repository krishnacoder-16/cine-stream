# 📄 CineStream – AI Movie Explorer

**Live Demo**: [https://cine-stream-one-rouge.vercel.app/](https://cine-stream-one-rouge.vercel.app/)

## 📸 Project Preview

### Movies Grid
![Movies Grid](src/assets/pi.png)

---

An **AI-Powered Movie Discovery App** built to help users browse popular movies and get personalized AI recommendations.
This project focuses on **real-world frontend development**, including **AI integration**, **performance optimization**, and **API usage**.

---

## 🚀 Features

### ✅ Level 1 – Core Functionality
- Clean, responsive movie grid interface with Tailwind CSS
- Connects to the **TMDB API** for popular movies
- Real-time searching with dynamic query routing
- Displays movie titles, release dates, and posters

### ✅ Level 2 – Performance & Favorites
- **Debounced Searching**: Reduces unnecessary API calls intelligently
- **Infinite Scroll**: Modern pageless browsing logic using `IntersectionObserver`
- **Favorites List**: Users can save favorite movies to LocalStorage via a heart icon
- **React Router**: Separate route and view for saved favorites

### ✅ Level 3 – AI Integration & Lazy Loading
- **Native Lazy Loading**: Extracts top performance by only downloading movie posters in the viewport
- **AI Mood Matcher**: Powered by **Google Gemini API**
- Takes natural language mood descriptions (e.g., "I want a sad action movie") and returns exact TMDB matches seamlessly!
- Handles loading states and errors securely using `.env` logic.

---

## 🧠 Key Design Decisions
- **Modern UI**: Dark-mode inspired design for a premium streaming feel.
- **Context API for State**: Clean management of the user's favorite movies without prop-drilling.
- **Robust Event Handling**: Safe API calls decoupled using custom React Hooks (`useDebounce`, `useFavorites`).

---

## 📂 Project Structure

```text
cine-stream/
│
├── public/                 # Static assets (Vite logo, etc.)
│   └── vite.svg
│
├── src/
│   ├── api/
│   │   ├── ai.js           # Gemini AI Connection
│   │   └── tmdb.js         # TMDB endpoints
│   │
│   ├── assets/             # Images for README and UI
│   │   ├── react.svg
│   │   ├── pi.png
│   │   ├── account.png
│   │   ├── review.png
│   │   └── ui.png
│   │
│   ├── components/         # Reusable React UI 
│   │   ├── Hero.jsx        
│   │   ├── Loader.jsx      
│   │   ├── MoodMatcher.jsx 
│   │   ├── MovieCard.jsx   
│   │   ├── MovieGrid.jsx   
│   │   ├── Navbar.jsx      
│   │   └── SearchBar.jsx   
│   │
│   ├── context/            # Global State Management
│   │   └── FavoritesContext.jsx 
│   │
│   ├── hooks/              # Custom React Hooks
│   │   ├── useDebounce.js
│   │   ├── useFavorites.js
│   │   └── useInfiniteScroll.js
│   │
│   ├── pages/              # Routing Views 
│   │   ├── Favorites.jsx
│   │   └── Home.jsx
│   │
│   ├── utils/              # Helper functions
│   │   └── localStorage.js
│   │
│   ├── App.css             # Main stylesheet overrides
│   ├── App.jsx             # React Router Setup
│   ├── index.css           # Tailwind directives
│   └── main.jsx            # React DOM Entry Point
│
├── package.json            # Frontend dependencies
├── README.md               # Project documentation
├── prompts.md              # AI interaction log
├── tailwind.config.js      # Tailwind customization
└── vite.config.js          # Vite build configuration
```

---

## 🛠️ Technologies Used

- **Framework**: React 19 (Functional Components & Hooks), Vite
- **Styling**: Tailwind CSS, Vanilla CSS
- **Routing**: `react-router-dom`
- **AI**: Google Gemini API (`@google/genai`)
- **API Requests**: `axios`

---

## 🧪 How to Run the Project

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cine-stream
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root folder and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the Dev Server**
   ```bash
   npm run dev
   ```
   The frontend will start at `http://localhost:5173`.

---

## 🤖 AI Assistance Disclaimer

AI tools were used **for guidance and explanation**, such as:
- Understanding API data flow and asynchronous programming.
- Optimizing performance with custom hooks (debouncing, infinite scroll).
- Integrating Google Gemini for natural language prompt resolution.

All code was implemented, tested, and refined manually to ensure best practices.
Detailed usage is documented in [`prompts.md`](prompts.md).

---

## 👨💻 Author

**Krishna Kumar**  
Frontend Developer Intern – Prodesk IT
