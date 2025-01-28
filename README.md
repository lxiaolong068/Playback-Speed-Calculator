# Playback Speed & Audiobook Progress Calculator

[English](README.md) | [简体中文](README_CN.md)

A modern, user-friendly web application that helps users calculate adjusted durations for media playback and track audiobook progress. Built with React and TypeScript, featuring a clean and responsive design.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🌟 Features

### Playback Speed Calculator
- Calculate adjusted duration based on original length and playback speed
- Real-time calculation of time saved
- Support for various time formats (HH:MM:SS)
- Visual display of results with a modern interface
- Mobile-responsive design

### Audiobook Percentage Calculator
- Track audiobook progress with ease
- Calculate completion and remaining percentages
- Input validation for time formats
- Clear visual representation of progress
- Mobile-friendly interface

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Playback-Speed-Calculator.git
```

2. Navigate to the project directory:
```bash
cd Playback-Speed-Calculator
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🚀 Deployment

This is a static web application that can be deployed to various platforms. Here are some deployment options:

### Build for Production

First, create a production build:
```bash
npm run build
```
This will create a `dist` directory with optimized production files.

### Deployment Options

#### 1. GitHub Pages
1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/Playback-Speed-Calculator/', // Replace with your repository name
  // ... other config
})
```
2. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: dist
```

#### 2. Netlify
1. Sign up for a Netlify account
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy site"

#### 3. Vercel
1. Sign up for a Vercel account
2. Import your GitHub repository
3. The build settings will be auto-detected
4. Click "Deploy"

#### 4. Static Web Hosting
Upload the contents of the `dist` directory to any static web hosting service:
- Amazon S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- Any web hosting supporting static files

### Environment Variables (if needed)
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Playback Speed Calculator
VITE_APP_BASE_URL=https://your-domain.com
```

For production, set these variables in your hosting platform's environment settings.

## 💻 Usage

### Playback Speed Calculator

1. Enter the original duration of your media in hours, minutes, and seconds
2. Select or enter your desired playback speed (e.g., 1.5x, 2x)
3. The calculator will instantly show:
   - Adjusted duration at the selected speed
   - Amount of time you'll save
   - Clear visual representation of the results

### Audiobook Percentage Calculator

1. Enter the total length of your audiobook
2. Input how much you've listened to
3. Get instant calculations of:
   - Completion percentage
   - Remaining percentage
   - Visual progress indicator

## 🛠️ Technical Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Hooks
- **SEO**: React Helmet Async
- **Icons**: Lucide React

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones
- Different screen sizes and orientations

## 🔍 SEO Optimization

- Optimized meta tags for better search engine visibility
- Proper heading hierarchy
- Semantic HTML structure
- Mobile-friendly design (Google mobile-first indexing)
- Fast loading times
- Canonical URLs implementation

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📈 Future Improvements

- User accounts for saving progress
- Export/import functionality for progress data
- Dark mode support
- Additional calculator tools
- Progress visualization improvements
- Integration with popular audiobook platforms

## 👥 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## ✨ Acknowledgments

- React team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- All contributors who have helped make this project better

---

Made with ❤️ by [Your Name/Team Name]
