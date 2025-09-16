# 💕 Anniversary Website Customization Guide

Welcome to your beautiful anniversary website! Here's how to customize it with your own content:

## 🎵 Background Music
1. Add your favorite love song as `/public/placeholder-love-song.mp3`
2. Supported formats: MP3, WAV, OGG
3. Recommended: Use a romantic instrumental or your special song

## 📸 Photo Gallery
Replace the placeholder images in `/public/` with your own photos:
- `placeholder-memory1.jpg` through `placeholder-memory8.jpg`
- Recommended size: 1200x800px or similar aspect ratio
- Use high-quality images for best results

## 📝 Timeline Milestones
Edit the `milestones` array in `/pages/index.tsx` (around line 41):
```typescript
const milestones: Milestone[] = [
  {
    date: '2022-01-15',
    title: 'Your Special Moment',
    description: 'Add your own description here',
    image: '/your-photo.jpg'
  },
  // Add more milestones...
];
```

## 💌 Love Letters
Customize the `loveLetters` array in `/pages/index.tsx` (around line 80):
```typescript
const loveLetters: LoveLetter[] = [
  {
    date: '2022-03-01',
    title: 'Your Letter Title',
    content: 'Write your heartfelt message here...',
    from: 'Your Name'
  },
  // Add more letters...
];
```

## ⏳ Anniversary Date
Change the anniversary date in `/pages/index.tsx` (line 38):
```typescript
const anniversaryDate = new Date('2024-12-25T00:00:00');
```

## 🎁 Surprise Link
Update the Google Drive link in `/pages/index.tsx` (around line 497):
```typescript
href="https://drive.google.com/your-actual-album-or-video-link"
```

## 🎨 Colors & Styling
The website uses a romantic pink/purple color scheme. To customize:
1. Edit colors in `/styles/globals.css`
2. Main colors used:
   - Pink: `#ec4899`, `#be185d`
   - Purple: `#7c3aed`
   - Background gradients in Tailwind classes

## 👥 Personal Names
Search and replace placeholder text throughout the files:
- "Your Forever Love" → Your actual names
- "Your Soulmate" → Your preferred endearments
- Footer messages

## 🖼️ Adding More Photos
1. Add images to `/public/` folder
2. Update the `galleryImages` array in `/pages/index.tsx`
3. For timeline milestones, add image paths to the milestone objects

## 📱 Mobile Responsiveness
The site is already mobile-friendly, but test on various devices to ensure your content displays well.

## 🚀 Running the Website
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open `http://localhost:3000` in your browser

## 🎵 Music Auto-play Note
Modern browsers require user interaction before playing audio. The music will start playing after the user clicks the play button.

## ✨ Additional Features
- Click the surprise button 3 times to reveal the hidden section
- All animations are optimized for smooth performance
- Floating hearts background adds romantic ambiance
- Scroll animations reveal content as you explore

## 💖 Final Tips
- Use high-quality, compressed images for faster loading
- Write heartfelt, personal content for maximum impact
- Test the countdown timer to ensure it points to your actual anniversary
- Consider adding more milestones as your relationship grows

Enjoy your beautiful anniversary website! 💕