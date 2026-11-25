import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { BRAND, SOCIAL_ITEMS } from "@/data/brand";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#faf8f5] py-12 text-stone-500">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-base text-stone-900">{BRAND.name}</p>
            <p className="mt-1 text-xs text-stone-400">
              Philippine Coffee &amp; Roastery · Benguet · Batangas · Mt. Apo
            </p>
          </div>

          <ul aria-label="Social media" className="flex items-center gap-5">
            {SOCIAL_ITEMS.map((social) => (
              <li key={social.platform}>
                <button
                  type="button"
                  aria-label={social.label}
                  className="inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-stone-500 transition-colors hover:text-stone-900"
                >
                  <SocialIcon platform={social.platform} />
                  <span className="hidden sm:inline">{social.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-stone-200/80 pt-6">
          <p className="text-xs text-stone-400">
            © {CURRENT_YEAR} {BRAND.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
