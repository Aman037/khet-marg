# Khet Companion

Build a complete, polished, responsive web application called Khet.

1. PRODUCT OVERVIEW

Khet is a simple, accessible, mobile-first digital farming companion designed conceptually for farmers in rural and low-resource settings.

The product explores how agricultural information can be presented in a way that is:

simple

accessible

understandable

Hindi-friendly

mobile-first

usable by people with varying levels of digital literacy

usable in low-connectivity environments

visually calm and trustworthy

focused on reducing cognitive load

This is a UX/UI portfolio project demonstrating:

Human-Centered Design

accessibility

inclusive design

information architecture

user flows

interaction design

responsive design

multilingual UX

low-literacy UX

prototyping

product thinking

AI-assisted interaction

frontend implementation

The product should NOT feel like a generic SaaS dashboard, enterprise application, AI chatbot, or technology demo.

It should feel like a thoughtfully designed real-world mobile product.

2. IMPORTANT PRODUCT BOUNDARY

Khet is a conceptual prototype, not an official agricultural service.

Do NOT claim:

government affiliation

government partnership

real agricultural authority

real disease diagnosis

guaranteed crop recommendations

real agricultural statistics

real farmer adoption numbers

real-world deployment

medical/financial/legal advice

Use realistic but clearly fictional/demo content.

If an AI feature is demonstrated, label it as:

"AI-assisted information"

or

"AI-generated suggestion"

and make it clear that users should verify important agricultural decisions with a qualified local agricultural expert.

The AI should assist the user rather than pretend to be an unquestionable authority.

3. PRIMARY USER

The primary user is a farmer in a rural or low-resource setting using a smartphone.

Design assumptions:

may prefer Hindi

may use an entry-level Android phone

may have intermittent connectivity

may have limited time

may not be comfortable with complicated applications

may prefer visual information over long paragraphs

may be more comfortable with familiar words than technical terminology

may use voice input

may have limited experience with digital forms

may use the application outdoors

may need large touch targets

may have difficulty reading very small text

IMPORTANT:

Do NOT stereotype rural users as unintelligent or incapable.

The design should reduce unnecessary complexity while preserving user control and dignity.

4. CORE UX PROBLEM

The core design question is:

"How might we make agricultural information easier to understand and act on for farmers using smartphones in low-resource environments?"

The product should answer this through design rather than through excessive functionality.

The central UX principle is:

Show less. Explain clearly. Let the user decide what to do next.

5. CORE USER FLOW

The primary flow must be:

HOME
↓
Choose what help is needed
↓
Choose crop
↓
Describe/select problem
↓
Optional photo or voice input
↓
AI-assisted information
↓
Simple explanation
↓
Step-by-step next actions
↓
Save / share / ask for help

The entire flow should be usable without requiring the user to type long paragraphs.

6. DESIGN PERSONALITY

The visual design must feel:

human-centered

calm

trustworthy

modern

warm

editorial

accessible

practical

premium but not luxurious

minimal

intentional

Think:

"high-quality product design for a real-world social-impact product"

NOT:

"AI startup landing page"

NOT:

"SaaS dashboard"

NOT:

"government portal from 2012"

NOT:

"generic chatbot"

7. VISUAL STYLE

Use a warm, natural visual language inspired subtly by agriculture.

Primary colors:

deep forest green

dark charcoal

warm cream/off-white

muted earthy green

restrained amber for warnings

Use color carefully.

Do not use:

neon green

excessive gradients

glassmorphism

glowing cards

excessive shadows

futuristic blue/purple AI gradients

excessive rounded containers

decorative 3D graphics

floating blobs

meaningless animations

The interface should have generous whitespace.

Use strong visual hierarchy.

8. TYPOGRAPHY

Use a highly readable modern sans-serif.

Use:

large page titles

16–18px minimum body text on mobile

generous line height

short labels

clear section headings

strong contrast

Create a clear hierarchy:

Display:
32px

Page title:
26–28px

Section heading:
20px

Body:
16–18px

Secondary:
14–16px

Never use tiny text for important information.

9. SPACING

Use an 8px spacing system.

Preferred spacing:

8
16
24
32
40
48
64

Avoid cramped layouts.

10. DESIGN SYSTEM

Create reusable components.

Components should include:

Primary button

Secondary button

Large option card

Crop card

Problem card

Bottom navigation

Top navigation

Progress indicator

Voice button

Photo upload component

AI result card

Step card

Status badge

Offline indicator

Toast

Modal

Bottom sheet

Form input

Select input

Language switcher

Accessibility controls

Error state

Empty state

Loading state

Success state

All components must use consistent spacing, typography, borders, radius and interaction states.

11. RESPONSIVE DESIGN

The application is primarily mobile-first.

Design first for:

360px
390px
430px

Then support:

768px tablet
1024px+
desktop

The mobile experience is the primary experience.

On mobile:

large touch targets

vertically stacked content

minimal navigation

no horizontal scrolling

fixed bottom navigation where appropriate

clear primary CTA

On desktop:

centered content

max-width around 1100–1200px

preserve mobile-first information hierarchy

do NOT turn the product into a dashboard

12. NAVIGATION

Use simple navigation.

Mobile bottom navigation:

Home
My Crop
Help
Settings

Desktop navigation:

Khet logo
Home
My Crop
Help
Settings

Language switcher:

हिंदी | English

Keep navigation visually quiet.

13. SCREEN 1 — WELCOME

Create a simple onboarding/welcome screen.

Brand:

Khet

Headline:

"खेत के लिए सही जानकारी, आसान तरीके से।"

English equivalent:

"Useful farming information, made simple."

Supporting text:

"Understand common crop problems, check useful information and find your next step."

Show:

हिंदी
English

Accessibility shortcut:

Aa Text size

Primary CTA:

"शुरू करें"

English:

"Get started"

Do not create account/login.

This is a portfolio prototype, so remove unnecessary authentication.

14. SCREEN 2 — HOME

This is the most important screen.

Header:

"नमस्ते 👋"

"आज खेत के लिए क्या जानना है?"

Create four large actions:

🌱 फसल की समस्या
"फसल में कुछ अलग दिख रहा है?"

🌦️ मौसम
"आज और आने वाले दिनों की जानकारी"

💧 सिंचाई
"पानी देने की जानकारी"

📅 आज के काम
"आज क्या करना है?"

Make each option visually distinct but simple.

Below:

"My crop"

Show:

गेहूँ

Small status:

"Last checked: Today"

Also show an offline status indicator.

Example:

"Offline — कुछ जानकारी अभी भी उपलब्ध है"

Do NOT use an error-like red treatment for offline status.

The product should feel resilient.

15. SCREEN 3 — CHOOSE CROP

When the user selects:

"फसल की समस्या"

Show:

"आप कौन-सी फसल देख रहे हैं?"

Create large visual crop options:

🌾 गेहूँ
🌱 धान
🌽 मक्का
🥔 आलू
🫘 दाल
➕ दूसरी फसल

Each card should have:

simple crop illustration/icon

Hindi name

English name as secondary text

Use large tap targets.

Primary action becomes active only after selection.

CTA:

"आगे बढ़ें"

16. SCREEN 4 — DESCRIBE THE PROBLEM

After selecting wheat:

Header:

"गेहूँ में क्या समस्या दिख रही है?"

Show visual options:

पत्ते पीले हो रहे हैं

पत्तों पर दाग हैं

कीड़े दिखाई दे रहे हैं

पौधा ठीक से बढ़ नहीं रहा

कुछ और

Add two secondary input methods:

📷 फोटो लें

🎙️ बोलकर बताएं

The user should NOT have to type.

If they choose voice:

show a large microphone interaction.

State:

"बोलकर बताएं"

Then:

"सुन रहे हैं..."

Then:

"आपने कहा: पत्ते पीले हो रहे हैं"

Buttons:

सही है

फिर से बोलें

The transcript should be editable.

17. SCREEN 5 — PHOTO INPUT

Create a photo-input state.

Header:

"फसल की फोटो लें"

Show a camera-style preview area.

Instructions:

"पत्ते या पौधे का साफ़ फोटो लें।"

Buttons:

Take photo

Choose from phone

After selecting a demo image:

show a preview.

CTA:

"फोटो देखें"

Then:

"जारी रखें"

IMPORTANT:

This is a UI prototype.

Do not require real camera permissions if unnecessary.

Use a demo image/state if needed.

18. SCREEN 6 — AI-ASSISTED RESULT

This is the key AI interaction.

Header:

"आपकी जानकारी"

Show:

Selected crop:
गेहूँ

Selected observation:
पत्ते पीले हो रहे हैं

Photo:
small preview

Then:

"AI-assisted information"

Possible explanation:

"पत्तों का पीला होना कई कारणों से हो सकता है। केवल इस जानकारी से सही कारण तय नहीं किया जा सकता।"

Then:

"आप क्या देख सकते हैं"

Create 3 simple checks:

देखें कि समस्या किन पत्तों पर है

मिट्टी की नमी देखें

आसपास के पौधों में भी यही समस्या है या नहीं

Then:

"अगर आप निश्चित नहीं हैं, स्थानीय कृषि विशेषज्ञ से सलाह लें।"

Primary CTA:

"अगले कदम देखें"

Secondary:

"जानकारी बदलें"

IMPORTANT:

Do NOT claim a definitive disease diagnosis.

Do NOT fabricate scientific certainty.

The purpose of this screen is to demonstrate responsible AI UX.

19. SCREEN 7 — STEP-BY-STEP ACTION

Header:

"अगले कदम"

Use a vertical stepper.

Step 1:

"पौधे को ध्यान से देखें"

Short explanation.

Step 2:

"मिट्टी की नमी जांचें"

Short explanation.

Step 3:

"समस्या वाले पत्तों की फोटो रखें"

Short explanation.

Step 4:

"जरूरत हो तो विशेषज्ञ से पूछें"

Short explanation.

Show:

Step 1 of 4

Primary CTA:

"अगला"

Secondary:

"बाद में देखें"

At the bottom:

"यह सामान्य जानकारी है। महत्वपूर्ण निर्णय से पहले विशेषज्ञ की सलाह लें।"

20. SCREEN 8 — MY CROP

Create a simple crop overview.

Header:

"मेरी फसल"

Show:

गेहूँ

"इस सप्ताह"

Then simple cards:

Last check
Today

Saved observations
2

Pending actions
1

Do NOT create complicated analytics.

This is NOT a dashboard.

The information should be understandable in 2 seconds.

Primary action:

"नई जानकारी जोड़ें"

21. SCREEN 9 — HELP

Header:

"मदद चाहिए?"

Show:

"आप क्या करना चाहते हैं?"

Options:

🎙️ बोलकर पूछें

📷 फोटो दिखाएं

📖 देखें कि कैसे करें

👨‍🌾 स्थानीय विशेषज्ञ से पूछें

The AI assistant should NOT be implemented as a generic chat interface.

If "बोलकर पूछें" is selected, show a focused voice interaction rather than a chatbot conversation.

The design should remain task-oriented.

22. SCREEN 10 — SETTINGS / ACCESSIBILITY

Header:

"सेटिंग्स"

Sections:

Language

हिंदी
English

Text size

Default
Large
Extra large

Voice assistance

On / Off

High contrast

On / Off

Reduce motion

On / Off

Offline information

"Saved information will remain available without internet."

Add a preview when text size changes.

The interface should visibly become larger when Large/Extra Large is selected.

23. OFFLINE EXPERIENCE

This is a critical feature.

The application must have a visible offline state.

When offline:

Show:

"आप ऑफलाइन हैं"

"सहेजी गई जानकारी अभी भी उपलब्ध है।"

Do NOT show:

"Network error"

Do NOT make the entire application unusable.

The user should still be able to:

view saved crop information

view previous observations

view saved guidance

access settings

access basic help

For actions requiring internet, show:

"इंटरनेट कनेक्शन की जरूरत है।"

with:

"बाद में कोशिश करें"

The offline experience should feel like a planned product capability rather than an error.

24. EMPTY STATES

Implement thoughtful empty states.

Example:

My Crop with no crop:

"अभी कोई फसल नहीं जोड़ी गई है।"

CTA:

"फसल जोड़ें"

Saved observations empty:

"अभी कोई जानकारी सेव नहीं है।"

Keep empty states minimal.

25. ERROR STATES

Create clear, human-readable errors.

Bad:

"Error 500"

Good:

"जानकारी अभी लोड नहीं हो सकी।"

"इंटरनेट आने पर फिर कोशिश करें।"

CTA:

"फिर कोशिश करें"

Do not delete user-entered information when an error occurs.

26. LOADING STATES

Use subtle loading states.

Example:

"जानकारी तैयार हो रही है..."

Show a calm progress indicator.

Do NOT use flashy AI animations.

27. ACCESSIBILITY

Accessibility is a core product requirement.

Implement:

WCAG-conscious contrast

large touch targets

visible focus states

keyboard accessibility

semantic HTML

accessible labels

descriptive button names

no color-only status communication

readable typography

adjustable text size

reduced motion

logical heading hierarchy

accessible form controls

clear errors

screen-reader-friendly structure

icons paired with text

Do not make accessibility an afterthought.

28. LOW-DIGITAL-LITERACY UX

Design specifically to reduce unnecessary cognitive load.

Use:

"फसल की समस्या"

instead of:

"Crop health diagnostic assessment"

Use:

"फोटो लें"

instead of:

"Upload visual crop evidence"

Use:

"अगले कदम"

instead of:

"Recommended intervention workflow"

Use:

"फिर से बोलें"

instead of:

"Reinitialize voice input"

Keep sentences short.

Use familiar words.

Use visual hierarchy.

Use progressive disclosure.

Avoid large forms.

Avoid technical terminology.

Avoid dense paragraphs.

Do NOT assume that users with low digital literacy need a childish interface.

The design must remain respectful and professional.

29. HINDI UX

Hindi must not look like an afterthought.

Implement a real language switch.

When Hindi is selected:

Translate all major navigation, headings, buttons and core product content.

Use natural, conversational Hindi.

Avoid overly formal government Hindi.

Example:

Good:

"आपको किस चीज़ में मदद चाहिए?"

Bad:

"कृपया अपनी वांछित कृषि सहायता श्रेणी का चयन करें।"

English can remain available through the language switch.

30. VOICE UX

Voice is an optional interaction method.

Do NOT create a generic AI chatbot.

The user should be able to:

Tap microphone
↓
Speak
↓
See transcript
↓
Edit transcript
↓
Confirm
↓
Continue

States:

Idle
Listening
Processing
Transcript
Error

Example:

User says:

"गेहूँ के पत्ते पीले हो रहे हैं"

UI shows:

"आपने कहा:
गेहूँ के पत्ते पीले हो रहे हैं"

Buttons:

सही है

फिर से बोलें

This demonstrates conversational interaction while maintaining user control.

31. AI UX PRINCIPLES

AI should be:

transparent

assistive

editable

uncertainty-aware

non-authoritative

Use labels such as:

"AI-assisted information"

When AI-generated content is shown, provide a subtle explanation:

"AI ने आपकी दी गई जानकारी के आधार पर यह सुझाव तैयार किया है।"

Never claim certainty where there isn't any.

Do not show fake model names.

Do not show meaningless "98% confidence" scores.

Do not add AI sparkle icons everywhere.

32. INTERACTION STATES

Every important interactive element must have:

Default
Hover
Focus
Pressed
Selected
Disabled
Loading
Success
Error

Mobile should emphasize:

Pressed
Selected
Disabled
Loading
Success
Error

33. MICROINTERACTIONS

Use subtle, purposeful interactions:

card selection

button press

language switch

text-size preview

voice recording

progress transition

save confirmation

offline status change

page transitions

Animation should communicate state.

Avoid decorative animation.

34. DESKTOP EXPERIENCE

Although mobile is primary, make the application responsive on desktop.

Desktop layout:

Centered max-width content.

For the main task flow, use a two-column composition only when useful:

Left:
main task

Right:
context/help

Do not introduce dashboards.

The core flow must remain obvious.

35. CONTENT RULES

Use realistic fictional/demo content.

Never invent:

real government schemes

government logos

government partnerships

real farmer testimonials

fake statistics

fake user numbers

fake research findings

fake impact metrics

fake agricultural experts

fake endorsements

Use a small visible label:

"Concept prototype"

where appropriate.

36. DO NOT BUILD

Do NOT add:

authentication

login/signup

payment

admin dashboard

complex database

social feed

messaging platform

generic chatbot

marketplace

ecommerce

unnecessary analytics

complicated AI dashboard

notification center

gamification

badges

points

leaderboards

excessive settings

unnecessary pages

The goal is a focused UX prototype.

37. PRIMARY SUCCESS CRITERIA

A first-time user should be able to understand:

What Khet does

What they can do next

How to describe their crop problem

How AI is helping

What the next steps are

What works offline

How to change language

How to increase text size

The product should be understandable without reading a long instruction manual.

38. FINAL VISUAL QUALITY BAR

Before considering the project complete, review the entire interface as a senior product designer.

Fix:

inconsistent spacing

inconsistent typography

weak hierarchy

tiny buttons

excessive cards

excessive rounded corners

poor contrast

unnecessary text

confusing navigation

generic AI styling

excessive visual decoration

inconsistent Hindi/English translations

awkward mobile layouts

The final UI should feel intentional.

It should look like a product designer made deliberate choices for a specific user group.

It should NOT look like an AI-generated template.

39. FINAL PRIMARY FLOW TO MAKE FULLY CLICKABLE

Make this complete flow work:

Welcome
→ Home
→ फसल की समस्या
→ गेहूँ
→ पत्ते पीले हो रहे हैं
→ फोटो/voice option
→ demo photo or voice transcript
→ AI-assisted information
→ अगले कदम
→ save observation
→ My Crop

Also make:

Home
→ Settings
→ हिंदी
→ interface changes to Hindi

Settings
→ Text size
→ Large
→ interface visibly increases in size

Home
→ offline mode
→ saved information remains accessible

Help
→ voice
→ listening
→ transcript
→ confirm

Every route must work.

40. FINAL OUTPUT

Build the complete working responsive website.

Prioritize:

UX quality

Accessibility

Mobile usability

Visual hierarchy

Hindi UX

Realistic interaction

Responsible AI UX

Offline experience

Responsive behavior

Visual polish

Do not prioritize backend complexity.

Do not add features simply because they are technically possible.

Build a small, highly polished product rather than a large, mediocre application.

The finished product should be strong enough to be presented as a UX/UI portfolio project demonstrating:

Human-Centered Design + Accessibility + Inclusive Design + Rural UX + Hindi UX + Information Architecture + Interaction Design + Prototyping + AI Product UX + Frontend Implementation.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ee201d9c-0d6a-4448-a8e6-c7d1552c9163).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
