import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-br from-gradient-green via-gradient-purple to-gradient-blue py-6">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">© 2025 David Prades López. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/david-prades-lopez" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://github.com/DavidPradesLopez" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="mailto:davidpradeslopez@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
