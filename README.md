# CuraX Healthcare - Complete Website Structure

## Overview

This project demonstrates the **proper Next.js approach** for handling both authentication pages and main website pages with layouts. The entire system has been restructured from client-side state management to use Next.js file-based routing and layouts with **route groups** to separate concerns.

## What Was Wrong Before

❌ **Client-side approach (NOT recommended):**
- Used `useState` to switch between auth pages
- Used `useState` to switch between main website pages
- No proper URLs for each page
- Browser back/forward navigation didn't work
- Didn't leverage Next.js file-based routing
- Mixed routing libraries (react-router-dom + Next.js)
- Header and Footer were showing on ALL pages including auth pages

## What's Right Now

✅ **Next.js file-based routing with route groups (RECOMMENDED):**
- Each page has its own route (`/`, `/about`, `/contact`, etc.)
- **Route groups** separate main website from authentication
- Proper browser navigation (back/forward buttons work)
- SEO-friendly URLs
- Leverages Next.js layouts for consistent UI
- Clean separation of concerns
- Header and Footer only show on main website pages

## Complete File Structure

```
app/
├── layout.tsx              # Root layout (fonts, metadata only)
├── (main)/                 # Route group for main website pages
│   ├── layout.tsx          # Main layout (Header + Footer + Main)
│   ├── page.jsx            # Home page (/)
│   ├── about/
│   │   └── page.jsx        # About page (/about)
│   ├── contact/
│   │   └── page.jsx        # Contact page (/contact)
│   ├── doctors/
│   │   └── page.jsx        # Doctors page (/doctors)
│   ├── pharmacy/
│   │   └── page.jsx        # Pharmacy page (/pharmacy)
│   └── services/
│       └── page.jsx        # Services page (/services)
└── auth/                   # Route group for authentication pages
    ├── layout.tsx          # Auth layout wrapper
    ├── page.jsx            # Login page (/auth)
    ├── signup/
    │   └── page.jsx        # Signup page (/auth/signup)
    ├── forgot-password/
    │   └── page.jsx        # Forgot password (/auth/forgot-password)
    ├── reset-password/
    │   └── page.jsx        # Reset password (/auth/reset-password)
    └── otp/
        └── page.jsx        # OTP verification (/auth/otp)

components/
├── layouts/
│   ├── MainLayout.jsx      # Main website layout (Header + Footer)
│   └── AuthLayout.jsx      # Authentication layout component
├── web/                    # Main website components
│   ├── Header.jsx          # Main website header (navigation)
│   ├── Footer.jsx          # Main website footer
│   ├── LandingPage.jsx     # Home page content
│   ├── AboutPage.jsx       # About page content
│   ├── ContactPage.jsx     # Contact page content
│   ├── DoctorsPage.jsx     # Doctors page content
│   ├── PharmacyPage.jsx    # Pharmacy page content
│   └── ServicesPage.jsx    # Services page content
└── auth/                   # Authentication components
    ├── AuthNavigation.jsx  # Navigation between auth pages
    ├── LoginPage.jsx       # Login form component
    ├── SignupPage.jsx      # Signup form component
    ├── ForgotPasswordPage.jsx
    ├── ResetPasswordPage.jsx
    └── OTPPage.jsx
```

## How It Works

### 1. Route Groups
- **`(main)` route group**: Contains all main website pages with Header + Footer
- **`auth` route group**: Contains all authentication pages with AuthLayout
- **Route groups** are denoted by parentheses and don't affect the URL structure

### 2. Layout System
- **Root Layout** (`app/layout.tsx`): Applies to ALL pages (fonts, metadata only)
- **Main Layout** (`app/(main)/layout.tsx`): Applies to main website pages (Header + Footer + Main content)
- **Auth Layout** (`app/auth/layout.tsx`): Applies to all authentication pages only
- **Page Components**: Focus only on their specific functionality

### 3. Main Website Routing
- `/` → Landing page (Home)
- `/about` → About page
- `/contact` → Contact page
- `/doctors` → Doctors page
- `/pharmacy` → Pharmacy page
- `/services` → Services page

### 4. Authentication Routing
- `/auth` → Login page
- `/auth/signup` → Signup page
- `/auth/forgot-password` → Forgot password page
- `/auth/reset-password` → Reset password page
- `/auth/otp` → OTP verification page

### 5. Navigation
- **Main Website**: Header and Footer appear on all main website pages
- **Auth Pages**: Only AuthLayout appears (no Header/Footer)
- **Cross-Navigation**: Main pages can link to auth pages, auth pages can link back to main website
- Users can navigate between pages using the header navigation
- Browser back/forward buttons work correctly
- Each page has a unique URL that can be bookmarked

## Benefits of This Approach

1. **SEO Friendly**: Each page has a unique URL
2. **Better UX**: Browser navigation works as expected
3. **Maintainable**: Clear separation of concerns
4. **Scalable**: Easy to add new pages
5. **Next.js Best Practices**: Follows framework conventions
6. **Performance**: Better code splitting and lazy loading
7. **Consistent UI**: Header and Footer only on main website pages
8. **Clean Separation**: Auth pages have their own dedicated layout

## Route Groups Explained

### What are Route Groups?
Route groups in Next.js allow you to organize your routes into logical groups without affecting the URL structure. They're denoted by parentheses `(groupName)`.

### Why Use Route Groups?
- **Organize related pages**: Group main website pages together
- **Share layouts**: Apply specific layouts to groups of pages
- **Clean structure**: Keep your app directory organized
- **No URL impact**: URLs remain clean (e.g., `/about` not `/(main)/about`)

### Example Structure:
```
app/
├── (main)/          # Main website pages
│   ├── layout.tsx   # Header + Footer layout
│   ├── page.jsx     # Home page (/)
│   └── about/       # About page (/about)
└── auth/            # Authentication pages
    ├── layout.tsx   # Auth layout
    └── page.jsx     # Login page (/auth)
```

## Usage Examples

### Adding a New Main Website Page

1. Create a new folder in `app/(main)/` (e.g., `app/(main)/blog/`)
2. Add a `page.jsx` file inside it
3. The page will automatically inherit the Header and Footer from the main layout

### Adding a New Auth Page

1. Create a new folder in `app/auth/` (e.g., `app/auth/verify-email/`)
2. Add a `page.jsx` file inside it
3. The page will automatically inherit the AuthLayout

### Customizing the Main Layout

Edit `components/layouts/MainLayout.jsx` to modify the main website structure (Header, Footer, etc.).

### Customizing the Auth Layout

Edit `components/layouts/AuthLayout.jsx` to modify the authentication page design.

## Key Components

- **MainLayout**: Provides Header and Footer for all main website pages
- **AuthLayout**: Provides consistent branding and layout for all auth pages
- **Header**: Provides consistent navigation for all main website pages
- **Footer**: Provides consistent footer for all main website pages
- **AuthNavigation**: Shows current page and allows navigation between auth pages
- **Individual Page Components**: Focus on their specific content and functionality

## Best Practices Applied

1. **Single Responsibility**: Each component has one clear purpose
2. **DRY Principle**: Layout logic is centralized in layouts
3. **Accessibility**: Proper navigation and keyboard support
4. **Responsive Design**: Works on all device sizes
5. **Performance**: Efficient routing and component loading
6. **Consistency**: Header and Footer only on main website pages
7. **Route Groups**: Clean organization without affecting URLs

## Navigation Flow

```
Main Website Pages (with Header + Footer):
Home (/) → About (/about) → Contact (/contact) → Doctors (/doctors) → Pharmacy (/pharmacy) → Services (/services)

Authentication Pages (with AuthLayout only):
Login (/auth) → Signup (/auth/signup) → Forgot Password (/auth/forgot-password) → Reset Password (/auth/reset-password) → OTP (/auth/otp)

Cross-Navigation:
Main pages can link to auth pages (Login/Get Started buttons)
Auth pages can link back to main website (Back to Website button)
```

This structure follows Next.js 13+ App Router conventions with route groups and provides a solid foundation for both main website and authentication systems in Next.js applications.
#   C u r a X - f r o n t e n d  
 