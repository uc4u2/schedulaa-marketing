'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');

type Company = {
  slug: string;
  name: string;
  tagline?: string;
  industry?: string;
  logo_url?: string;
};

type Preview = {
  hero?: { heading?: string; image?: { url?: string; url_public?: string; href?: string; src?: string } | string };
  page_style?: { linkColor?: string };
  primary_color?: string;
};

const PROFESSION_OPTIONS = [
  { value: 'all', label: 'All industries' },
  { value: 'general', label: 'General / Other' },
  { value: 'salon', label: 'Salon & Beauty' },
  { value: 'spa_medspa', label: 'Spa / Medspa' },
  { value: 'barbershop', label: 'Barbershop' },
  { value: 'fitness', label: 'Fitness & Personal Training' },
  { value: 'yoga_pilates', label: 'Yoga / Pilates Studio' },
  { value: 'wellness', label: 'Wellness & Massage' },
  { value: 'therapy', label: 'Therapy & Counseling' },
  { value: 'medical_clinic', label: 'Medical Clinic' },
  { value: 'dental', label: 'Dental' },
  { value: 'chiropractic', label: 'Chiropractic' },
  { value: 'physiotherapy', label: 'Physiotherapy' },
  { value: 'tattoo_piercing', label: 'Tattoo & Piercing' },
  { value: 'photography', label: 'Photography & Creative' },
  { value: 'event_planning', label: 'Event Planning' },
  { value: 'education_tutoring', label: 'Education & Tutoring' },
  { value: 'music_lessons', label: 'Music & Arts Lessons' },
  { value: 'home_services', label: 'Home Services / Trades' },
  { value: 'cleaning', label: 'Cleaning Services' },
  { value: 'real_estate', label: 'Real Estate' },
  { value: 'legal', label: 'Legal Services' },
  { value: 'tax_accounting', label: 'Tax & Accounting' },
  { value: 'finance_advisory', label: 'Finance & Advisory' },
  { value: 'consulting', label: 'Business Consulting' },
  { value: 'it_services', label: 'IT Services & MSP' },
  { value: 'hr_recruiting', label: 'HR & Recruiting' },
  { value: 'auto_services', label: 'Auto Services' },
  { value: 'pet_care', label: 'Pet Care & Grooming' },
  { value: 'hospitality', label: 'Hospitality & Tourism' },
  { value: 'coaching', label: 'Life / Career Coaching' },
  { value: 'notary', label: 'Notary & Admin Services' },
];

const industryLabel = (value?: string) =>
  PROFESSION_OPTIONS.find((opt) => opt.value === (value || 'general'))?.label || 'General / Other';

export default function IndustryDirectoryLiveSection() {
  const [filter, setFilter] = useState('all');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [previews, setPreviews] = useState<Record<string, Preview | null | undefined>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const loadDirectory = async () => {
      setLoading(true);
      setError('');
      try {
        const params = new URLSearchParams();
        if (filter !== 'all') params.set('industry', filter);
        const url = `${API_ORIGIN}/public/industry-directory${params.toString() ? `?${params.toString()}` : ''}`;
        const response = await fetch(url, { method: 'GET', cache: 'no-store' });
        if (!response.ok) throw new Error('directory_fetch_failed');
        const payload = await response.json();
        const list = Array.isArray(payload?.companies) ? payload.companies : [];
        if (!active) return;
        setCompanies(list);
        if (!list.length) setError('No businesses found for this industry yet.');
      } catch {
        if (!active) return;
        setCompanies([]);
        setError('We could not load the directory right now. Please try again shortly.');
      } finally {
        if (active) setLoading(false);
      }
    };
    loadDirectory();
    return () => {
      active = false;
    };
  }, [filter]);

  useEffect(() => {
    let active = true;
    const loadPreviews = async () => {
      const missing = companies
        .map((company) => company.slug)
        .filter(Boolean)
        .filter((slug) => previews[slug] === undefined)
        .slice(0, 30);
      if (!missing.length) return;

      const results = await Promise.all(
        missing.map(async (slug) => {
          try {
            const response = await fetch(
              `${API_ORIGIN}/api/public/${encodeURIComponent(slug)}/website?fields=preview`,
              { method: 'GET', cache: 'no-store' },
            );
            if (!response.ok) return [slug, null] as const;
            const payload = await response.json();
            return [slug, payload?.preview || null] as const;
          } catch {
            return [slug, null] as const;
          }
        }),
      );

      if (!active) return;
      setPreviews((current) => {
        const next = { ...current };
        results.forEach(([slug, data]) => {
          next[slug] = data;
        });
        return next;
      });
    };

    loadPreviews();
    return () => {
      active = false;
    };
  }, [companies, previews]);

  const visibleCompanies = useMemo(() => companies.slice(0, 24), [companies]);

  return (
    <section className="pb-16 md:pb-20">
      <div className="main-container">
        <div className="rounded-[24px] border border-stroke-1 bg-white p-6 shadow-1 dark:border-stroke-7 dark:bg-background-8 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="badge badge-cyan-v2">Live directory</span>
              <h2 className="text-heading-3">Registered websites by industry</h2>
              <p className="max-w-[860px]">Browse businesses currently using Schedulaa websites and booking flows.</p>
            </div>
            <div className="min-w-[240px] md:max-w-[300px]">
              <label htmlFor="industry-filter" className="mb-1 block text-tagline-2 font-medium text-secondary dark:text-accent">
                Industry
              </label>
              <select
                id="industry-filter"
                className="w-full rounded-[12px] border border-stroke-1 bg-background-1 px-3 py-2 text-tagline-2 dark:border-stroke-7 dark:bg-background-6"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
              >
                {PROFESSION_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error ? <p className="mt-4 rounded-[12px] bg-background-2 px-3 py-2 text-tagline-2 dark:bg-background-6">{error}</p> : null}

          {loading && !visibleCompanies.length ? (
            <p className="mt-6 text-tagline-2">Loading directory...</p>
          ) : (
            <div className="mt-6 grid grid-cols-12 gap-4">
              {visibleCompanies.map((company) => {
                const preview = previews[company.slug];
                const heroImage =
                  typeof preview?.hero?.image === 'string'
                    ? preview.hero.image
                    : preview?.hero?.image?.url ||
                      preview?.hero?.image?.url_public ||
                      preview?.hero?.image?.href ||
                      preview?.hero?.image?.src ||
                      company.logo_url ||
                      '';
                const heading = preview?.hero?.heading || company.tagline || company.name;
                const accent = preview?.page_style?.linkColor || preview?.primary_color || '#0ea5e9';

                return (
                  <article
                    key={company.slug}
                    className="col-span-12 overflow-hidden rounded-[18px] border border-stroke-1 bg-white shadow-1 dark:border-stroke-7 dark:bg-background-7 md:col-span-6 lg:col-span-4"
                  >
                    <div className="relative h-[180px] bg-background-2 dark:bg-background-6">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: heroImage
                            ? `linear-gradient(180deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.62) 100%), url(${heroImage})`
                            : `linear-gradient(180deg, ${accent} 0%, #0f172a 100%)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div className="absolute inset-x-3 bottom-3 text-white">
                        <p className="text-tagline-3 uppercase tracking-[0.12em] text-white/80">{industryLabel(company.industry)}</p>
                        <h3 className="mt-1 text-heading-6 text-white">{company.name}</h3>
                        <p className="mt-1 line-clamp-2 text-tagline-2 text-white/86">{heading}</p>
                      </div>
                    </div>

                    <div className="space-y-3 p-4">
                      <p className="line-clamp-2 text-tagline-2 text-secondary/70 dark:text-accent/72">
                        {company.tagline || 'Book services, sell products, and manage appointments online.'}
                      </p>
                      <Link href={`/${company.slug}?embed=0`} target="_blank" className="btn btn-primary btn-sm hover:btn-secondary dark:hover:btn-accent">
                        View site
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
