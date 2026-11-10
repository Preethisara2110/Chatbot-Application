# Product Recommendation AI

React chatbot that recommends products from a predefined JSON file (`src/data/replies.json`).

## Run
```bash
npm install
npm start          # dev server
npm run build      # production build
```

## Features
- Chat flow: pick a product -> pick a budget -> get suggestions. Unknown input -> "Sorry, I did not understand your query!"
- Hover over an AI reply for thumbs up / down. Thumbs up -> 5-star rating; thumbs down -> feedback modal (saved in localStorage)
- Save conversation (Save button or "Want new suggestion?") -> stored in localStorage, viewable at `/history`
- Filter saved conversations by star rating
- Light / Dark mode (persisted), responsive layout with mobile drawer
- Current chat persists across refreshes

## Structure
```
src/
  App.js, index.js, styles.css
  components/  Chat, ChatInput, Message, Welcome, StarRating, FeedbackModal, History, Sidebar, Header, Icons
  context/     ChatContext.js   (state + localStorage persistence)
  data/        replies.json
  utils/       reply.js, storage.js
submit.txt     (replace contents with your deployed URL only)
```

## Adding replies
Add `{ "question": "...", "response": ["line 1", "line 2"] }` to `replies.json`. Matching is case-insensitive and exact.
