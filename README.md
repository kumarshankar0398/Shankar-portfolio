# Shankar Kumar - Portfolio Website

A modern, animation-rich portfolio website built with React, FastAPI, and Tailwind CSS.

## Features

- **Modern UI/UX**: Dark theme with glass morphism effects and gradient accents
- **Smooth Animations**: Framer Motion animations throughout the site
- **Interactive Background**: Animated particle network with floating orbs
- **Responsive Design**: Fully responsive across all devices
- **Contact Form**: Functional contact form powered by FastAPI backend
- **CV Download**: Easy download option for your resume
- **Profile Picture**: Animated profile picture component with status indicator
- **Project Showcase**: All 5 projects from your CV with filtering
- **Skills Visualization**: Animated proficiency bars and skill categories

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Axios

### Backend
- FastAPI
- Uvicorn
- Pydantic
- Python 3.12

## Project Structure

```
portfolio-shankar/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   └── Dockerfile           # Backend container config
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── public/
│   │   └── cv.pdf           # Your CV (add this file)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── Dockerfile           # Frontend container config
└── docker-compose.yml       # Orchestration config
```

## Quick Start

### Option 1: Using Docker (Recommended)

1. **Add your CV**: Copy your resume PDF to `frontend/public/cv.pdf`
2. **Add your profile picture**: Add `frontend/public/profile.jpg` (optional)
3. **Run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```
4. **Access the site**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

### Option 2: Manual Setup

#### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Customization

### 1. Add Your Profile Picture
Replace the placeholder in `frontend/src/components/ProfilePicture.jsx`:
```jsx
<img 
  src="/profile.jpg" 
  alt="Shankar Kumar" 
  className="w-full h-full object-cover"
/>
```

### 2. Update Social Links
Edit `frontend/src/components/Navbar.jsx` and `Contact.jsx` with your actual social media URLs.

### 3. Add Project Links
Update the `github` and `live` fields in `frontend/src/components/Projects.jsx`.

### 4. Update Contact Info
Modify the contact details in `frontend/src/components/Contact.jsx` and `Hero.jsx`.

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/contact/submissions` - View submissions (admin)
- `GET /api/stats` - API statistics

## Deployment

### Frontend (Netlify/Vercel)
1. Build: `npm run build`
2. Deploy the `dist` folder

### Backend (AWS/Heroku/Railway)
1. Set environment variables
2. Deploy with Docker or directly

## Contact

- Email: shankarkm1707@gmail.com
- Phone: +91-9650360813
- Location: Greater Noida, Delhi NCR
- Portfolio: shankar-kumarportfolio.netlify.app

---

Built with ❤️ by Shankar Kumar
