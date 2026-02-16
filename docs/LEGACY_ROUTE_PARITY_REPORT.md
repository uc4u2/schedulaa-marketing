# Legacy Route Parity Report

Generated from legacy source of truth:
- `scheduling-frontend/src/App.js` (`MARKETING_PATHS`)
- `scheduling-frontend/src/components/Footer.js` (Compare column)

## Route Status (MARKETING_PATHS)

| Legacy route | Status | Next behavior | Recommended action |
| --- | --- | --- | --- |
| `/` | exists | Page route | Keep |
| `/features` | exists | Page route | Keep |
| `/platform` | redirected | `-> /features` | Keep redirect |
| `/pricing` | exists | Page route | Keep |
| `/website-builder` | exists | Page route | Keep |
| `/workforce` | exists | Page route | Keep |
| `/booking` | exists | Page route | Keep |
| `/booking/salon` | redirected | `-> /booking` | Keep redirect |
| `/booking/spa` | redirected | `-> /booking` | Keep redirect |
| `/booking/tutor` | redirected | `-> /booking` | Keep redirect |
| `/booking/doctor` | redirected | `-> /booking` | Keep redirect |
| `/marketing` | exists | Page route | Keep |
| `/marketing/email-campaigns` | redirected | `-> /marketing` | Keep redirect |
| `/marketing/analytics-dashboard` | redirected | `-> /marketing` | Keep redirect |
| `/marketing/clients-360` | redirected | `-> /marketing` | Keep redirect |
| `/zapier` | exists | Page route | Keep |
| `/payroll` | exists | Page route | Keep |
| `/payroll/canada` | exists | Page route | Keep |
| `/payroll/usa` | exists | Page route | Keep |
| `/payroll/tools/roe` | exists | Page route | Keep |
| `/payroll/tools/t4` | exists | Page route | Keep |
| `/payroll/tools/w2` | exists | Page route | Keep |
| `/payslips` | exists | Page route | Keep |
| `/compare/adp` | exists | Dynamic compare vendor page | Keep |
| `/compare/gusto` | exists | Dynamic compare vendor page | Keep |
| `/about` | redirected | `-> /features` | Keep redirect |
| `/contact` | exists | Page route | Keep |
| `/demo` | exists | Page route | Keep |
| `/faq` | exists | Page route | Keep |
| `/docs` | exists | Page route | Keep |
| `/help/domains` | redirected | `-> /docs` | Keep redirect |
| `/blog` | exists | Page route | Keep |
| `/blog/category/automation` | exists | Dynamic category route | Keep |
| `/blog/category/payroll` | exists | Dynamic category route | Keep |
| `/status` | exists | Page route | Keep |
| `/terms` | exists | Page route | Keep |
| `/privacy` | exists | Page route | Keep |
| `/cookie` | redirected | `-> /privacy` | Keep redirect |
| `/acceptable-use` | redirected | `-> /terms` | Keep redirect |
| `/data-processing` | redirected | `-> /privacy` | Keep redirect |
| `/security` | redirected | `-> /terms` | Keep redirect |
| `/user-agreement` | redirected | `-> /terms` | Keep redirect |
| `/legal/support-access-consent` | redirected | `-> /terms` | Keep redirect |
| `/industries` | exists | Page route | Keep |

## Footer Compare Column Parity

| Legacy footer compare link | Status in Next |
| --- | --- |
| `/compare` | exists |
| `/alternatives` | exists |
| `/compare/vagaro` | exists |
| `/compare/quickbooks` | exists |
| `/compare/quickbooks-payroll` | exists |
| `/compare/humi` | exists |
| `/compare/square-appointments` | exists |
| `/compare/xero` | exists |
| `/compare/deputy` | exists |
| `/compare/homebase` | exists |
| `/compare/when-i-work` | exists |
| `/compare/schedulaa-vs-acuity-scheduling` | exists |
| `/compare/gusto` | exists |
| `/compare/adp` | exists |
| `/compare/paychex` | exists |

## Notes

- Footer now includes the full legacy Compare list.
- On mobile, footer Compare section shows first 8 links plus `View all comparisons`.
- Locale-prefixed behavior is preserved (`/en/...`, `/fa/...`) through `withLocalePath(...)`.
- No legacy marketing route is intentionally dropped; legacy-only pages without Next equivalents are mapped to closest hub pages via redirects.
