# Placement Readiness Platform (PRP)

A premium, high-fidelity SaaS dashboard built with React and Tailwind CSS, designed to help students and professionals prepare for placements with technical practice, mock interviews, and curated resources.

## ✨ Key Features

- **Interactive Dashboard**: Track your weekly goals, "Problems Solved" progress (persisted via localStorage), and recent assessment results.
- **Premium Design System**: Built following the "KodNest Premium Build System" philosophy—modern aesthetics, vibrant glassmorphism, and smooth micro-animations.
- **Practice & Resources**: Access curated DSA roadmaps, system design fundamentals, and mock interview simulators.
- **User Profile**: Manage core competencies (skills) and account settings with real-time persistence.
- **Notification Center**: Functional dropdown for platform alerts and updates.
- **Full Auth Loop**: Complete workflow from Landing Page to Login and secure Logout.

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS & Vanilla CSS (KodNest Spec)
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6+)
- **State**: React Hooks (useState, useEffect) & LocalStorage for persistence

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   ```
2. Navigate to the project directory:
   ```bash
   cd "Placement Readiness Platform"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `src/pages/`: Contains main view components (Dashboard, Profile, Resources, Login, etc.)
- `src/components/`: Reusable UI components and the main Layout Shell.
- `src/components/ui/`: Atomic design components like Cards.
- `index.css`: Global styling and design system tokens.

## 🛡️ License

MIT License - feel free to use this for your own placement preparation or projects!
