# Chatbot UI Source Of Truth

Last updated: 2026-04-05

This document is the source of truth for the chatbot widget used on:

- `https://www.schedulaa.com`

It covers the marketing-site assistant only.

Backend behavior, knowledge routing, and `/api/chat` ownership remain documented in:

- `backend/docs/chatbot.md`

## 1. Scope

This widget lives in the marketing repo and is responsible for the public website chatbot experience.

Primary file:

- `src/components/shared/assistant/SchedulaaAssistant.tsx`

Mount point:

- `src/app/layout.tsx`

This widget should be treated as:

- marketing-site UI
- support/help-center style assistant
- frontend-only surface over the shared backend chatbot endpoint

## 2. Explicit repo boundary

There is another chatbot widget in the product/app frontend:

- `frontend/src/components/ui/ChatBot.js`

That is a different component in a different repo.

Important:

- changes in `scheduling-frontend` do **not** affect `www.schedulaa.com`
- changes for the landing-page chatbot must be made in this marketing repo

## 3. Current UX model

The current marketing assistant is intentionally:

- support-home first
- not transcript-first

The first-open state should feel like a help center panel, not a traditional chat transcript.

Current structure:

1. launcher
2. branded header
3. `Send us a message` card
4. help/search list
5. bottom navigation
6. chat transcript in the `Messages` tab
7. searchable help list in the `Help` tab

## 4. Current tabs

The assistant currently uses:

- `Home`
- `Messages`
- `Help`

### Home

Purpose:

- first-open support surface
- prominent CTA into chat
- quick help topics list

Current home help items:

- `Scheduling & time tracking`
- `Payroll & QuickBooks/Xero`
- `Pricing & plans`
- `Compare Schedulaa with QuickBooks`

### Messages

Purpose:

- transcript view
- starter message
- follow-up responses from `/api/chat`
- composer and send flow

### Help

Purpose:

- searchable list of the same public support topics
- lets the user route into a chat question from a help-style interaction

## 5. Behavior that must remain unchanged

The redesign must not change:

- backend `/api/chat` contract
- response generation flow
- knowledge source flow
- support article prompts as chat input behavior
- keyboard submit behavior
- close/open behavior

This widget is a UI layer only.

## 6. Recent upgrades implemented

Recent marketing-widget upgrades included:

- launcher text changed to `Ask Schedulaa`
- lime-green accent alignment with the landing page
- `Online` badge accent update
- support-home-first layout
- bottom navigation added
- transcript moved to `Messages`
- home/help article surfaces moved out of the chat transcript
- page scroll locking while the assistant is open
- wheel-scroll containment inside the open assistant
- top help list reduced to the four higher-value prompts

## 7. Files to inspect before future edits

- `src/components/shared/assistant/SchedulaaAssistant.tsx`
- `src/app/layout.tsx`
- `backend/docs/chatbot.md`
- `frontend/docs/CHATBOT_UI_SOURCE_OF_TRUTH.md`

## 8. Future edit guardrails

If the issue is:

### UI / layout / color / spacing

Update:

- `src/components/shared/assistant/SchedulaaAssistant.tsx`

### Content quality / answer accuracy / docs source

Update:

- docs used by the backend knowledge builder
- then rebuild backend chatbot knowledge if required

### App chatbot only

Do not change this marketing widget.

Change instead:

- `frontend/src/components/ui/ChatBot.js`

## 9. Deployment note

Changes to this file deploy through the marketing service:

- Render service: `schedulaa-marketing`
- domain: `www.schedulaa.com`

Do not expect app/frontend deploys to change the marketing chatbot.
