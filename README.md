# StreamShare - Video Streaming & Photo Sharing Platform

A premium, modern web application for streaming videos and sharing photos with stunning UI/UX and robust backend infrastructure.

## Features

### Frontend

- 🎨 **Eye-catching Design**: Professional color scheme with blues, teals, and oranges
- ✨ **Interactive Animations**: Typing text effects, glitch animations, floating particles
- 🔮 **Glassmorphism**: Modern glass-effect UI components
- 📱 **Responsive**: Fully responsive design for all devices
- 🎬 **Custom Video Player**: HTML5 video player with custom controls
- 🖼️ **Photo Gallery**: Beautiful masonry-style photo grid
- 🎭 **Smooth Transitions**: Framer Motion animations throughout

### Backend

- 🔐 **Authentication**: JWT-based user authentication
- 📹 **Video Management**: Upload, stream, and manage videos
- 📸 **Photo Management**: Upload and share photos
- 💬 **Comments System**: Nested comments with replies
- ❤️ **Likes/Reactions**: Like videos and photos
- 🎯 **Recommendations**: Personalized content recommendations based on user preferences
- 🗄️ **MongoDB**: Scalable database with optimized indexes
- ☁️ **Cloudinary**: Cloud storage for media files

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Vanilla CSS with custom design system
- **Animations**: Framer Motion
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **File Storage**: Cloudinary
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/videostream-platform.git
cd videostream-platform
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/videostream?retryWrites=true&w=majority

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Next.js Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable                | Description                               |
| ----------------------- | ----------------------------------------- |
| `MONGODB_URI`           | MongoDB connection string                 |
| `JWT_SECRET`            | Secret key for JWT token generation       |
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name                |
| `CLOUDINARY_API_KEY`    | Your Cloudinary API key                   |
| `CLOUDINARY_API_SECRET` | Your Cloudinary API secret                |
| `NEXT_PUBLIC_API_URL`   | Public API URL (for client-side requests) |

## Project Structure

```
videostream-platform/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── videos/       # Video endpoints
│   │   ├── photos/       # Photo endpoints
│   │   ├── comments/     # Comments endpoints
│   │   ├── likes/        # Likes endpoints
│   │   └── recommendations/ # Recommendations endpoint
│   ├── videos/           # Videos pages
│   ├── photos/           # Photos pages
│   ├── auth/             # Authentication pages
│   ├── profile/          # User profile pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── VideoPlayer.tsx
│   └── VideoGrid.tsx
├── lib/
│   ├── models/           # Mongoose models
│   │   ├── User.ts
│   │   ├── Video.ts
│   │   ├── Photo.ts
│   │   ├── Comment.ts
│   │   └── Like.ts
│   ├── mongodb.ts        # MongoDB connection
│   └── auth.ts           # Authentication utilities
└── public/               # Static assets
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Videos

- `GET /api/videos` - Get all videos (with pagination, filtering, sorting)
- `POST /api/upload/video` - Upload new video (requires auth)

### Photos

- `GET /api/photos` - Get all photos (with pagination, filtering)
- `POST /api/upload/photo` - Upload new photo (requires auth)

### Comments

- `GET /api/comments?contentId=&contentType=` - Get comments for content
- `POST /api/comments` - Create new comment (requires auth)

### Likes

- `GET /api/likes?contentId=&contentType=` - Get like count and status
- `POST /api/likes` - Toggle like (requires auth)

### Recommendations

- `GET /api/recommendations` - Get personalized recommendations

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import your repository in Vercel

3. Configure environment variables in Vercel dashboard

4. Deploy!

The application will be automatically deployed and available at your Vercel URL.

## Features Roadmap

- [ ] Video upload functionality (Cloudinary integration)
- [ ] Photo upload functionality (Cloudinary integration)
- [ ] User profile editing
- [ ] Video/photo search functionality
- [ ] Advanced filtering and sorting
- [ ] User followers/following system
- [ ] Notifications system
- [ ] Video playlists
- [ ] Photo albums

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, email support@streamshare.com or open an issue in the GitHub repository.

---

Built with ❤️ using Next.js, React, and MongoDB
