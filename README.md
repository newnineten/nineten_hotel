# New Nine Ten Hotel Website

A simple, fast, one-page website for the hotel in Siliguri. No build tools or frameworks: plain HTML, CSS and JavaScript.

## Features
- Home page with photo, hotel name and tagline
- Booking calendar (check-in, check-out, guests, rooms, room type) that sends the enquiry to WhatsApp
- Rooms with prices, amenities with icons, address and Google Maps link
- Floating WhatsApp button, mobile friendly, light and dark mode support

## Project structure
```
index.html        page content
css/style.css     all styling and colours
js/main.js        booking calendar and WhatsApp link
images/           hero and room photos
```

## Common edits
| What | Where |
| --- | --- |
| WhatsApp number | `js/main.js`, first line: `var WA_NUMBER = "918653535638";` (country code + number, digits only) |
| Room names and prices | `index.html`, the "Rooms" section |
| Amenities | `index.html`, the "Amenities" section |
| Address and map | `index.html`, the "Find us" section |
| Brand colours | `css/style.css`, the `:root` block at the top |
| Hero and room photos | replace the files in `images/` (keep the same file names) |

## Publish on GitHub Pages (free)
1. Create a new repository on GitHub.
2. Drag all the files and folders from this project into the repository page and click **Commit changes**. Keep `index.html` at the top level.
3. Go to **Settings > Pages**, set **Source** to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, then **Save**.
4. After a minute your site appears at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

### Use your own domain (GoDaddy)
In **Settings > Pages**, enter your domain under **Custom domain**. Then in GoDaddy DNS add:
- four **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- a **CNAME** record for `www` pointing to `YOUR-USERNAME.github.io`

For a subdomain such as `stay.yourdomain.com`, add a single **CNAME** record named `stay` pointing to `YOUR-USERNAME.github.io`.

## Photo notes
The hero photo is a placeholder style image. Replace `images/hero.jpg` with a photo you own or have a licence for, ideally a wide landscape image about 1600 px across.
