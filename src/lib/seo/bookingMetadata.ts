import type { Metadata } from "next";

import { getSeoLanguageAlternates } from "./localization";

const SITE_URL = "https://www.schedulaa.com";

const createBookingMetadata = (
  path: string,
  title: string,
  description: string,
): Metadata => ({
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/en${path}`,
    languages: getSeoLanguageAlternates(SITE_URL, path),
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/en${path}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
});

export const bookingMetadata = createBookingMetadata(
  "/booking",
  "Online Booking Website & Appointment Software | Schedulaa",
  "Launch a branded online booking experience for appointments, team availability, packages, and supported Stripe payment workflows with Schedulaa.",
);

export const salonBookingMetadata = createBookingMetadata(
  "/booking/salon",
  "Salon Website With Online Booking & Payments | Schedulaa",
  "A beautiful salon website with online booking. Help clients book after hours instead of missing walk-ins or relying on an Instagram-only presence.",
);

export const tutorBookingMetadata = createBookingMetadata(
  "/booking/tutor",
  "Tutor Booking Software for Lessons & Classes | Schedulaa",
  "Manage private lessons, recurring classes, instructor availability, packages, and supported payment workflows with Schedulaa tutor booking software.",
);
