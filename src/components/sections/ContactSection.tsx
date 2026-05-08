import { useState, type ComponentProps } from 'react';
import { Send, Github, Linkedin, Loader2, Contact } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

type FormSubmitHandler = NonNullable<ComponentProps<'form'>['onSubmit']>;

const inputClassName =
  'w-full rounded-lg border border-primary/15 bg-white px-4 py-2.5 text-size-body-sm text-primary placeholder:text-text-muted/60 focus:border-emphasis focus:outline-none focus:ring-2 focus:ring-emphasis/20';

export const ContactSection = () => {
  
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit: FormSubmitHandler = async (e) => {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus('error');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    setStatus('submitting');
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${name}`,
          name,
          email,
          message,
        }),
      });

      if (!res.ok) {
        setStatus('error');
        return;
      }
      
      const data: unknown = await res.json();
      const ok =
        typeof data === 'object' &&
        data !== null &&
        'success' in data &&
        (data as Record<string, unknown>).success === true;

      if (ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <SectionHeading centered subtitle="Open for new opportunities and collaborations. Let's build something beautiful together.">
            Get In Touch
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-primary/5"
            >
              <h3 
                id="contact-form-heading" 
                className="text-size-body-lg font-bold text-primary mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-emphasis" aria-hidden />
                Send a message
              </h3>

              {!ACCESS_KEY && (
                <p className="text-size-body-sm text-text-muted mb-4 rounded-lg bg-accent/10 border border-primary/10 px-3 py-2">
                  Oops, there's an error with your API Keys.
                </p>
              )}

              <form
                className="space-y-4"
                aria-labelledby="contact-form-heading"
                onSubmit={handleSubmit}
                onChange={() => {
                  setStatus((prev) => (prev === 'success' || prev === 'error' ? 'idle' : prev));
                }}
              >
                <div>
                  <label htmlFor="contact-name" className="text-xs uppercase font-bold text-text-muted tracking-widest block mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    className={inputClassName}
                    placeholder="Your name"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-xs uppercase font-bold text-text-muted tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={inputClassName}
                    placeholder="you@example.com"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-xs uppercase font-bold text-text-muted tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    rows={4}
                    className={`${inputClassName} resize-y min-h-[6rem]`}
                    placeholder="What would you like to work on?"
                    disabled={status === 'submitting'}
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full gap-2 mt-2" disabled={status === 'submitting' || !ACCESS_KEY}>
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </Button>

                <div className="min-h-[1.5rem]" aria-live="polite">
                  {status === 'success' && (
                    <p className="text-sm font-medium text-green-600">Thanks! Your message was sent. I&apos;ll get back to you soon.</p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm font-medium text-emphasis">
                      Something went wrong. Please try again later.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 justify-start bg-accent/10 p-8 rounded-2xl shadow-sm border border-primary/5"
              aria-labelledby="contact-social-heading"
            >
              <h3 id="contact-social-heading" className="text-size-body-lg font-bold text-primary mb-2 flex items-center gap-2">
                <Contact className="w-5 h-5 text-emphasis" aria-hidden />
                Social Connections
              </h3>
              <p className="text-text-muted text-size-body-sm mb-4 leading-relaxed">
                Feel free to browse my code or connect with me via professional networks. I&apos;m always happy to chat about tech.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://www.linkedin.com/in/sara-maragoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/5 hover:border-emphasis/30 transition-all group"
                  aria-label="Sara Maragoni on LinkedIn (opens in a new tab)"
                >
                  <div className="w-12 h-12 bg-[#0077b5]/10 rounded-lg flex items-center justify-center text-[#0077b5] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" aria-hidden />
                  </div>
                  <div>
                    <span className="block font-bold text-primary">LinkedIn</span>
                    <span className="text-xs text-text-muted">Let&apos;s connect professionally</span>
                  </div>
                </a>

                <a
                  href="https://github.com/saramar23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/5 hover:border-primary/30 transition-all group"
                  aria-label="Sara Maragoni on GitHub (opens in a new tab)"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6" aria-hidden />
                  </div>
                  <div>
                    <span className="block font-bold text-primary">GitHub</span>
                    <span className="text-xs text-text-muted">Check out my open source work</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
