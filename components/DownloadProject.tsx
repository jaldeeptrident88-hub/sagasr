
import React, { useState } from 'react';
import JSZip from 'jszip';

const DownloadProject: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const zip = new JSZip();

      // List of all project files to include in the zip
      const filePaths = [
        'index.html', 'index.tsx', 'metadata.json', 'App.tsx', 'types.ts',
        'constants.tsx', 'manifest.json', 'service-worker.js',
        'components/Header.tsx', 'components/Hero.tsx', 'components/Services.tsx',
        'components/PropertyCard.tsx', 'components/Testimonials.tsx',
        'components/ContactForm.tsx', 'components/Footer.tsx', 'components/Logo.tsx',
        'components/WhatsAppButton.tsx', 'components/ForSaleProperties.tsx',
        'components/ForRentProperties.tsx', 'components/AboutUs.tsx',
        'components/DownloadProject.tsx' // Include this component itself in the download
      ];

      // Add a README file with instructions
      const readmeContent = `
# Arvind and Son Infra - Project Files

Thank you for downloading the project source code.

## How to Run
1.  Unzip this file into a new folder.
2.  To see the website, you can open the \`index.html\` file directly in your web browser.
3.  For the best experience and to ensure all features work correctly (especially with ES modules), it's recommended to use a simple local web server.

## PWA Icons (Required)
This project is configured as a Progressive Web App (PWA). The following icon files are referenced in \`manifest.json\` but are not included in this download:

- \`icon-192.png\` (192x192 pixels)
- \`icon-512.png\` (512x512 pixels)

You must create these two PNG image files and place them in the root directory for the "Add to Home Screen" functionality and the app icon to work correctly.

## Dependencies
This project loads the following libraries from a CDN, so an internet connection is required:
- React & ReactDOM
- TailwindCSS
- JSZip
`;
      zip.file('README.md', readmeContent);

      // Fetch each file and add it to the zip
      for (const path of filePaths) {
        try {
          const response = await fetch(path);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const content = await response.text();
          zip.file(path, content);
        } catch (e) {
          console.error(`Failed to fetch ${path}:`, e);
          // Add a placeholder file with an error message if fetch fails
          zip.file(path, `// Error: Failed to load content for ${path}`);
        }
      }

      // Generate the zip file as a blob
      const content = await zip.generateAsync({ type: 'blob' });

      // Create a temporary link to trigger the download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'arvind-infra-project.zip';
      document.body.appendChild(link);
      link.click();
      
      // Clean up the temporary link
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

    } catch (e) {
      console.error("Failed to generate zip file", e);
      setError("Could not generate ZIP file. Please check the console for errors.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pb-8">
      <a
        href="#"
        onClick={(e) => {
            e.preventDefault();
            if (isLoading) return; // Prevent multiple clicks while loading
            handleDownload();
        }}
        className={`text-slate-300 hover:text-white font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-sm ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-disabled={isLoading}
      >
        {isLoading ? 'Packaging...' : 'Download Project Files (.zip)'}
      </a>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default DownloadProject;
