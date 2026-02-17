import { redirect } from 'next/navigation';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

export default function RegisterRedirectPage() {
  redirect(`${APP_ORIGIN}/register`);
}
