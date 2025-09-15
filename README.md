# React Test App

This is a test React application created to verify that the GitHub File Pusher can successfully push React projects to GitHub.

## Features

- ⚛️ React 18 with modern hooks
- 🎨 Responsive design with modern CSS
- ⏰ Real-time clock
- 🔢 Interactive counter
- 📱 Mobile-friendly layout
- 🧩 Modular component structure

## Components

- `App.js` - Main application component
- `Header.js` - Header component with title and subtitle
- `Counter.js` - Interactive counter component
- `Clock.js` - Real-time clock display
- `FeatureList.js` - Features list component
- `Footer.js` - Footer component

## File Structure

```
To-Be-Pushed/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── App.js
    ├── App.css
    ├── index.js
    ├── index.css
    └── components/
        ├── Header.js
        ├── Counter.js
        ├── Clock.js
        ├── FeatureList.js
        └── Footer.js
```

## How to Test

1. Make sure you have a `.env` file with your GitHub credentials:
   ```
   GITHUB_TOKEN=your_github_token_here
   GITHUB_USERNAME=your_github_username
   GITHUB_REPO=your_repository_name
   ```

2. Run the GitHub pusher:
   ```bash
   python github_html_pusher.py
   ```

3. Check your GitHub repository to see all the React files pushed successfully!

## Development

To run this React app locally (if you have Node.js installed):

```bash
npm install
npm start
```

This will start the development server at `http://localhost:3000`.

---

**Note:** This app was created specifically to test the GitHub File Pusher's ability to handle React projects with multiple files and directories.
