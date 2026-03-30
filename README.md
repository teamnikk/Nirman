# /images Folder

## How to Add Images

Replace the placeholder files in this folder with your actual images.

### Required Files:
| File | Purpose | Recommended Size |
|---|---|---|
| `favicon.png` | Browser tab icon | 64×64 px |
| `og-cover.jpg` | Social media share preview | 1200×630 px |
| `gallery1.jpg` | Gallery image 1 | 800×600 px |
| `gallery2.jpg` | Gallery image 2 | 800×600 px |
| `gallery3.jpg` | Gallery image 3 | 800×600 px |
| `gallery4.jpg` | Gallery image 4 | 800×600 px |
| `gallery5.jpg` | Gallery image 5 | 800×600 px |
| `gallery6.jpg` | Gallery image 6 | 800×600 px |

### Tips:
- Use JPG for photos (smaller file size, faster load)
- Use PNG for logos or graphics with transparency
- Compress images before uploading (use https://squoosh.app for free)
- Gallery images look best with a 4:3 aspect ratio

### Adding More Gallery Images:
1. Add the image file to this folder
2. Open `/data/config.js`
3. Add an entry to the `gallery.images` array:
```js
{ src: "images/your-new-image.jpg", caption: "Your Caption" }
```
