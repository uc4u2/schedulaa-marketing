import { redirect } from 'next/navigation';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

export default function SignupRedirectPage() {
  redirect(`${APP_ORIGIN}/register`);
}
