# LinkGenius Dashboard

A modern Persian RTL dashboard built with Next.js, TypeScript, and Tailwind CSS.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/linkgenius-dashboard)
[![Deploy to GitHub Pages](https://github.com/yourusername/linkgenius-dashboard/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://yourusername.github.io/linkgenius-dashboard)

## 🚀 Quick Start

### Option 1: Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/linkgenius-dashboard)

### Option 2: Deploy to GitHub Pages
1. Fork this repository
2. Go to Settings > Pages
3. Select "GitHub Actions" as source
4. Push to main branch to trigger deployment

### Option 3: Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/linkgenius-dashboard.git
cd linkgenius-dashboard

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Features

- **Persian RTL Support**: Full right-to-left layout with Persian typography
- **Modern UI**: Clean, flat design with subtle shadows and rounded corners
- **Interactive Charts**: Sales volume charts using Recharts
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Data**: Dashboard components with live data visualization

## Components

- **TopBar**: Global navigation with search and notifications
- **SecondaryBar**: Add button and logo section
- **Sidebar**: Right-side navigation with dark purple theme
- **DashboardHeader**: Title and edit button
- **SummaryCards**: New leads and deals statistics
- **SalesChart**: Interactive bar chart with Persian month labels
- **NextMeeting**: Meeting details with navigation
- **SalesFunnel**: Vertical funnel chart with conversion rates
- **LeadStatus**: Activity creation and status percentages
- **LeadByStatus**: Lead categorization by status

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Recharts**: Chart library for data visualization

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── TopBar.tsx
│   ├── SecondaryBar.tsx
│   ├── Sidebar.tsx
│   ├── DashboardHeader.tsx
│   ├── SummaryCards.tsx
│   ├── SalesChart.tsx
│   ├── NextMeeting.tsx
│   ├── SalesFunnel.tsx
│   ├── LeadStatus.tsx
│   └── LeadByStatus.tsx
├── .github/workflows/
│   └── deploy.yml
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── README.md
```

## Deployment

### GitHub Pages
The project is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be added in Vercel dashboard

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

## Customization

### Colors
The dashboard uses a purple theme that can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Purple color palette
  },
  purple: {
    // Additional purple shades
  }
}
```

### Fonts
Persian font (Vazir) is loaded from Google Fonts and can be changed in `globals.css`.

### RTL Support
The dashboard is designed for Persian RTL layout. All components use `space-x-reverse` for proper spacing.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, please open an issue on GitHub.
