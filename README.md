# Lexisg-frontend-intern-test

- A React-based simulation of a Lexi-style legal assistant with citation linking and PDF preview.
- The UI shows a legal question, the answer, and a citation with a "View Citation PDF" link.

# Tech Stack
- React.js – UI framework
- Tailwind CSS – Styling
- Iframe – PDF viewer in modal

  # Features
- Ask legal questions in a chat-style UI
- See AI-generated answer
- View clickable legal citation
- Open PDF in modal (scroll to para simulated)
- Responsive, clean design

# How to Run
- git clone https://github.com/Manasi04Tambe/Lexi-Frontend-Task.git
- cd lexisg-frontend-intern-test
- npm install
- npm start

# How citation linking was handled
- Citation Text is displayed inside a yellow highlighted block.
- A "View Citation PDF" button is shown below the citation.
- When clicked, it uses window.open(link, "_blank") to open the PDF in a new browser tab.

const openPdfInNewTab = (link) => {
  window.open(link, "_blank", "noopener,noreferrer");
};

- This method is used because services like SharePoint or OneDrive block embedding PDFs in iframes using security headers like X-Frame-Options: SAMEORIGIN.

# Demo
- You can watch a short screen recording at the link below:
- Demo Video link - https://drive.google.com/file/d/15pVUB6cxbOb9jSU3WF2Nx9sstVzxPHM4/view?usp=sharing

# Deployment
- This project is deployed on Vercel for instant previews.
- Live Demo: https://lexi-frontend-task-mj0t6u9ll-manasi-tambes-projects.vercel.app/


