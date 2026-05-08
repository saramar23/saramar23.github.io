import { Github, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-primary/10 py-12 px-6">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <p className="text-text-muted text-size-body-sm max-w-xs">
              Built with React, TypeScript and Tailwind CSS. Deployed on Github Pages.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-2">
              <a href="https://github.com/saramar23" target="_blank" rel="noopener noreferrer" className="p-2 text-text-muted hover:text-primary transition-colors" aria-label="Sara Maragoni on GitHub (opens in a new tab)">
                <Github className="w-10 h-10 border rounded p-2" aria-hidden />
              </a>
              <a href="https://www.linkedin.com/in/sara-maragoni/" target="_blank" rel="noopener noreferrer" className="p-2 text-text-muted hover:text-primary transition-colors" aria-label="Sara Maragoni on LinkedIn (opens in a new tab)">
                <Linkedin className="w-10 h-10 border rounded p-2" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/5 text-text-muted text-size-body-sm gap-4">
          <p>© {currentYear} Sara Maragoni. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="w-3.5 h-3.5 text-emphasis fill-emphasis" aria-hidden /> by Sara
          </p>
        </div>
      </div>
    </footer>
  );
};
