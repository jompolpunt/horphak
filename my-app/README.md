# Horphak - Apartment/Condo Listing Application

This is a Next.js application designed for listing and managing apartments and condos. It features various components for property display, search, user authentication, and more.

## Technologies Used

*   **Framework**: Next.js 16 (with App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS, PostCSS
*   **UI Components**: Radix UI, Shadcn UI (inferred from `components.json` and Radix dependencies), Lucide React for icons.
*   **State Management/Forms**: React Hook Form, Zod for validation.
*   **Data Visualization**: Recharts
*   **Package Manager**: Bun (indicated by `bun.lock`)

## Project Structure

The project follows a standard Next.js structure with an emphasis on component-based development.

```
.
├── .next/                  # Next.js build output and cache
├── app/                    # App Router root layout, pages, and API routes
│   ├── favicon.ico         # Website favicon
│   ├── globals.css         # Global styles (likely Tailwind base styles)
│   ├── layout.tsx          # Root layout component
│   ├── loading.tsx         # Loading UI for Next.js Suspense
│   └── page.tsx            # Home page component
├── components/             # Reusable UI components
│   ├── daily-apartment-section.tsx # Displays daily apartment listings
│   ├── facilities-list.tsx         # Lists property facilities
│   ├── home-page.tsx               # Main home page layout and content
│   ├── image-gallery.tsx           # Image carousel/gallery for properties
│   ├── location-info.tsx           # Displays location details
│   ├── navbar.tsx                  # Navigation bar
│   ├── popular-condo-section.tsx   # Displays popular condo listings
│   ├── property-detail-page.tsx    # Detailed view for a single property
│   ├── reviews-section.tsx         # User reviews section
│   ├── search-results.tsx          # Displays search results for properties
│   ├── sign-in.tsx                 # Sign-in form/component
│   └── sign-up.tsx                 # Sign-up form/component
├── lib/                    # Utility functions and data handling
│   ├── property-data.ts    # Logic for fetching or managing property data
│   └── utils.ts            # General utility functions
├── public/                 # Static assets (images, fonts, etc.)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── bun.lock                # Bun lock file for dependency management
├── components.json         # Configuration for Shadcn UI components
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # npm lock file (might be vestigial if using Bun primarily)
├── postcss.config.mjs      # PostCSS configuration (for Tailwind CSS)
├── README.md               # This file
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

To get the project up and running on your local machine, follow these steps.

### Prerequisites

*   Node.js (LTS recommended)
*   Bun (package manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/horphak.git
    cd horphak/my-app
    ```
2.  Install dependencies using Bun:
    ```bash
    bun install
    ```

### Running the Development Server

To start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

To build the application for production:

```bash
bun run build
```

This command optimizes the application for production and creates a `.next` folder with the build artifacts.

### Running in Production Mode

To start the built application in production mode:

```bash
bun run start
```