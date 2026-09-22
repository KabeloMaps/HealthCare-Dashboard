# HealthCare-Dashboard

- A web application for managing patient data, tracking health metrics, and visualizing medical appointments.

## Features

Interactive Metrics:

- Real-time health tracking components.

Dynamic Layout:

- Built with CSS Grid for a highly responsive dashboard structure.

Patient Management:

- Easily view, filter, and organize medical records.

## My Processes

### Built with

- Vite + React
- Tailwindcss
- Grid Layout

### What I learned

- How to use props for passing information to components

### What I struggled with

1. Lifting State Up

- Sharing patient data across sibling components was challenging.
- I overcame this by moving the shared state to their closest common parent component, which helped me better understand React's one-way data flow.

2. Production Environment Variable Configurations
   - Encountered fatal deployment build crashes due to locally sandboxed `.env` variables being stripped during the Git repository pushing process.
   - Resolved the issue by explicitly mapping project variables to the host build pipeline and configuring scoping to cover all environments.

3. Static Asset Path Resolutions & URL Encoding Conflicts
   - Experienced 404 image routing errors on deployment servers because `/src/assets/` absolute paths are removed by Vite during production compilation.
   - Solved this by migrating assets straight into the `public/` directory by purging path strings of the word `/public`.

## Continued Development

- Add charts using either Chart.js or D3.js
