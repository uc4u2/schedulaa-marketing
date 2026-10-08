import { isSupportedLocale } from "@/utils/locale";

/** Cold-email homepage visits open the existing lead popup after this delay. */
export const MARKETING_LEAD_AUTO_OPEN_MS = 3000;

export const MARKETING_LEAD_OPEN_EVENT = "schedulaa:open-marketing-lead";

export function openMarketingLeadWidget() {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(new Event(MARKETING_LEAD_OPEN_EVENT));
}

export const marketingLeadCopy = {
  launcher: "Get your free demo",
  title: "See Schedulaa for your business",
  description:
    "Answer a few quick questions so we can tailor the demo to your business.",
  submit: "Request personalized demo",
  successTitle: "Your demo request is ready.",
  successBody:
    "We’ll follow up with a guided walkthrough tailored to your business.",
  sendingTitle: "Sending your demo request…",
  sendingBody: "We’re securely saving your details for the Schedulaa team.",
  autoOpenAnnouncement:
    "Schedulaa demo questionnaire opened. Answer a few questions for a personalized walkthrough.",
} as const;

export function isMarketingHomepage(
  pathname: string | null | undefined,
): boolean {
  if (!pathname) {
    return false;
  }

  const withoutHash = pathname.split("#")[0] ?? "";
  const pathOnly = withoutHash.split("?")[0] ?? "";
  const normalized =
    pathOnly.length > 1 && pathOnly.endsWith("/")
      ? pathOnly.slice(0, -1)
      : pathOnly || "/";

  if (normalized === "/") {
    return true;
  }

  const segments = normalized.split("/").filter(Boolean);
  return segments.length === 1 && isSupportedLocale(segments[0]);
}
