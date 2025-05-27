const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Image URLs (using direct Unsplash image links)
const images = {
  'hero-bg.jpg': 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80',
  'about-image.jpg': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  'gallery-1.jpg': 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
  'gallery-2.jpg': 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
  'gallery-3.jpg': 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
  'gallery-4.jpg': 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80'
};

// Download function
async function downloadImage(url, filename) {
  try {
    console.log(`Downloading ${filename}...`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to download ${filename}: ${response.statusText}`);
    }

    const buffer = await response.buffer();
    const filePath = path.join(publicDir, filename);
    
    await fs.promises.writeFile(filePath, buffer);
    console.log(`Successfully downloaded ${filename}`);
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error.message);
  }
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  // Delete existing images first
  for (const filename of Object.keys(images)) {
    const filePath = path.join(publicDir, filename);
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
      console.log(`Deleted existing ${filename}`);
    }
  }

  // Download new images
  const downloadPromises = Object.entries(images).map(([filename, url]) => 
    downloadImage(url, filename)
  );

  await Promise.all(downloadPromises);
  console.log('All images downloaded successfully!');
}

// Run the download
downloadAllImages().catch(console.error); 