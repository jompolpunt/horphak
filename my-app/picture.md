# 🖼️ AI Prompts: Next.js 16 Image Implementation

ไฟล์นี้รวบรวมคำสั่ง (Prompts) สำหรับให้ AI เขียนโค้ดจัดการรูปภาพในโปรเจกต์ Next.js + Tailwind CSS

---

## 📂 1. Local Static Image (รูปในเครื่อง/Assets)
*ใช้สำหรับ Logo, Banner, หรือ Icon ที่ไฟล์อยู่ในโฟลเดอร์ `public/` หรือ `assets/`*

> **Prompt:**
> "Insert an image here using the **Next.js `<Image />` component**.
> - **Source:** Import the image statically from `@/public/images/[image_name.jpg]`.
> - **Styling:** Use Tailwind CSS to make it responsive (width: 100%, height: auto) and add rounded corners (`rounded-lg`).
> - **Optimization:** Ensure `placeholder='blur'` is added since it's a static import.
> - **Accessibility:** Set the `alt` text to '[Describe the image]'."

---

## 🌐 2. Remote Image (รูปจาก Database/API)
*ใช้สำหรับรูป Listing คอนโด/หอพัก ที่ดึง URL มาจาก Database*

> **Prompt:**
> "Render a dynamic image from a URL string (`props.imageUrl`).
> - **Component:** Use **Next.js `<Image />`** with the `fill` prop (do not hardcode width/height).
> - **Container:** Wrap the image in a `div` with `relative` position and a fixed aspect ratio (e.g., `aspect-video` or `h-64`).
> - **Styling:** Add `object-cover` to the image so it doesn't stretch.
> - **Config Check:** Remind me if I need to update `next.config.ts` to allow this hostname in `remotePatterns`."

---

## 🎨 3. Background Image with Overlay (ภาพพื้นหลัง)
*ใช้สำหรับ Hero Section หรือ Header ที่มีตัวหนังสือทับ*

> **Prompt:**
> "Create a Hero Section with a background image using Next.js.
> - **Structure:** Use a `div` container with `relative` and `h-[500px]`.
> - **Image:** Inside, place a Next.js `<Image />` with `src='...'`, `fill`, `object-cover`, and `-z-10`.
> - **Overlay:** Add a black overlay (`bg-black/50`) on top of the image but behind the text.
> - **Content:** Center the text content vertically and horizontally over the image."

---

## 🎠 4. Image Gallery / Carousel (สำหรับหน้ารายละเอียด)
*ใช้สำหรับ `image-gallery.tsx`*

> **Prompt:**
> "Create a simple image gallery layout using Tailwind Grid.
> - **Input:** Use an array of image URLs string[].
> - **Layout:** Display the first image as a large feature (col-span-2 row-span-2) and the next 4 images as smaller grids on the side.
> - **Attributes:** Use Next.js `<Image />` with `sizes` prop optimized for grid (e.g., `(max-width: 768px) 100vw, 50vw`).
> - **Styling:** Add `hover:opacity-90` and `transition` for interactivity."

---

## 🔧 5. Configuration Helper (ตั้งค่า next.config)
*ใช้เมื่อรูปไม่ขึ้นเพราะติด Permission ของ Next.js*

> **Prompt:**
> "I am getting a 'hostname is not configured' error for my images.
> Please generate the code snippet for `next.config.ts` to allow remote images from these domains:
> 1. `images.unsplash.com`
> 2. `drive.google.com` (or my database storage domain).
     > Use the new `remotePatterns` syntax."

---

### 💡 Quick Tips for Next.js 16 Images
เมื่อสั่ง AI อย่าลืมระบุสิ่งเหล่านี้เพื่อให้โค้ดทำงานได้จริง:
1. **`fill` vs `width/height`:** ถ้ารู้ขนาดใช้ width/height ถ้าต้องยืดหดตามกรอบใช้ `fill` + `parent relative`.
2. **`priority`:** ถ้ารูปนั้นอยู่บนสุดของหน้า (LCP) ให้สั่ง AI ใส่ prop `priority` ด้วยเสมอ เพื่อ Google Lighthouse Score ที่ดี