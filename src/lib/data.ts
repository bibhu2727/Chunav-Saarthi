export const LANGUAGES: Record<string, { name: string; nativeName: string; greeting: string }> = {
  en: { name: "English", nativeName: "English", greeting: "Namaste! I am Chunav Saarthi, your election guide." },
  hi: { name: "Hindi", nativeName: "हिन्दी", greeting: "नमस्ते! मैं चुनाव सारथी हूँ, आपका चुनाव मार्गदर्शक।" },
  bn: { name: "Bengali", nativeName: "বাংলা", greeting: "নমস্কার! আমি চুনাভ সারথি, আপনার নির্বাচন গাইড।" },
  te: { name: "Telugu", nativeName: "తెలుగు", greeting: "నమస్కారం! నేను చునావ్ సారథి, మీ ఎన్నికల గైడ్." },
  ta: { name: "Tamil", nativeName: "தமிழ்", greeting: "வணக்கம்! நான் சுனாவ் சாரதி, உங்கள் தேர்தல் வழிகாட்டி." },
  mr: { name: "Marathi", nativeName: "मराठी", greeting: "नमस्कार! मी चुनाव सारथी, तुमचा निवडणूक मार्गदर्शक." },
  kn: { name: "Kannada", nativeName: "ಕನ್ನಡ", greeting: "ನಮಸ್ಕಾರ! ನಾನು ಚುನಾವ್ ಸಾರಥಿ, ನಿಮ್ಮ ಚುನಾವಣೆ ಮಾರ್ಗದರ್ಶಿ." },
  gu: { name: "Gujarati", nativeName: "ગુજરાતી", greeting: "નમસ્તે! હું ચુનાવ સારથી, તમારા ચૂંટણી માર્ગદર્શક." },
  ml: { name: "Malayalam", nativeName: "മലയാളം", greeting: "നമസ്കാരം! ഞാൻ ചുനാവ് സാരഥി, നിങ്ങളുടെ തിരഞ്ഞെടുപ്പ് ഗൈഡ്." },
  pa: { name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਚੁਨਾਵ ਸਾਰਥੀ ਹਾਂ, ਤੁਹਾਡਾ ਚੋਣ ਗਾਈਡ।" },
  or: { name: "Odia", nativeName: "ଓଡ଼ିଆ", greeting: "ନମସ୍କାର! ମୁଁ ଚୁନାଭ ସାରଥୀ, ଆପଣଙ୍କ ନିର୍ବାଚନ ଗାଇଡ୍." },
  as: { name: "Assamese", nativeName: "অসমীয়া", greeting: "নমস্কাৰ! মই চুনাভ সাৰথী, আপোনাৰ নিৰ্বাচন গাইড।" },
};

export const ELECTION_DATA = {
  overview: {
    title: "Indian General Elections 2024",
    totalPhases: 7,
    totalConstituencies: 543,
    totalVoters: "96.88 crore",
    votingAge: 18,
    eci: "Election Commission of India (ECI)",
    eciWebsite: "https://eci.gov.in",
    voterHelpline: "1950",
    nvspPortal: "https://voters.eci.gov.in",
  },
  phases: [
    { phase: 1, date: "April 19, 2024", constituencies: 102, states: "Rajasthan, UP (8), Tamil Nadu (39), Uttarakhand, Arunachal Pradesh, Meghalaya, Sikkim, Mizoram, Nagaland, Manipur, Tripura, Andaman & Nicobar, Lakshadweep, Puducherry" },
    { phase: 2, date: "April 26, 2024", constituencies: 89, states: "Kerala (20), Karnataka (14), Rajasthan (13), UP (8), Maharashtra (8), Assam (5), Bihar (5), Chhattisgarh (3), Madhya Pradesh (7), West Bengal (3), Manipur (1), Tripura (1), Jammu & Kashmir (1)" },
    { phase: 3, date: "May 7, 2024", constituencies: 94, states: "Gujarat (26), Karnataka (14), UP (10), Madhya Pradesh (8), Maharashtra (11), Bihar (5), Assam (4), Chhattisgarh (7), West Bengal (4), Goa (2), Dadra & Nagar Haveli and Daman & Diu (2), Jammu & Kashmir (1)" },
    { phase: 4, date: "May 13, 2024", constituencies: 96, states: "Andhra Pradesh (25), Telangana (17), UP (13), Maharashtra (11), Madhya Pradesh (8), Bihar (5), Odisha (4), Jharkhand (4), West Bengal (8), Jammu & Kashmir (1)" },
    { phase: 5, date: "May 20, 2024", constituencies: 49, states: "UP (14), Maharashtra (13), Bihar (5), West Bengal (7), Odisha (5), Jharkhand (4), Jammu & Kashmir (1)" },
    { phase: 6, date: "May 25, 2024", constituencies: 57, states: "UP (14), Bihar (8), West Bengal (8), Haryana (10), Delhi (7), Odisha (6), Jharkhand (4)" },
    { phase: 7, date: "June 1, 2024", constituencies: 57, states: "UP (13), Bihar (8), West Bengal (9), Punjab (13), Himachal Pradesh (4), Chandigarh (1), Odisha (6), Jharkhand (3)" },
  ],
  results: { date: "June 4, 2024", time: "8:00 AM onwards" },
  stateElections2026: {
    title: "State Assembly Elections 2026",
    overview: "Upcoming Legislative Assembly elections in Assam, Kerala, Tamil Nadu, West Bengal, and Puducherry.",
    phases: [
      { phase: 1, date: "April 9, 2026", constituencies: 296, states: "Assam (126), Kerala (140), Puducherry (30)" },
      { phase: 2, date: "April 23, 2026", constituencies: 381, states: "Tamil Nadu (234), West Bengal Phase-I (147)" },
      { phase: 3, date: "April 29, 2026", constituencies: 147, states: "West Bengal Phase-II (147)" }
    ],
    results: { date: "May 4, 2026", time: "8:00 AM onwards" }
  },
  importantDates: {
    modelCodeStart: "March 16, 2024",
    lastDateNomination: "Varies by phase",
    resultDate: "June 4, 2024",
  },
  voterRegistration: {
    steps: [
      { title: "Check Eligibility", description: "You must be an Indian citizen, 18 years or older on the qualifying date, and ordinarily resident in your constituency.", icon: "check" },
      { title: "Visit NVSP Portal", description: "Go to voters.eci.gov.in or download the Voter Helpline App. Select 'New Voter Registration' (Form 6).", icon: "globe" },
      { title: "Fill Form 6", description: "Provide personal details: Name, Date of Birth, Address, Aadhaar (optional but recommended), and upload a passport-size photo.", icon: "edit" },
      { title: "Submit Documents", description: "Upload proof of age (Birth Certificate / Aadhaar / Passport / Marksheet) and proof of address (Aadhaar / Utility Bill / Bank Passbook).", icon: "upload" },
      { title: "Track Application", description: "Use your Reference ID to track the status on the NVSP portal. A BLO (Booth Level Officer) may visit for physical verification.", icon: "search" },
      { title: "Receive EPIC", description: "Once approved, your Electoral Photo Identity Card (EPIC / Voter ID) will be dispatched. You can also download the e-EPIC from the NVSP portal.", icon: "card" },
    ],
  },
  votingProcess: {
    steps: [
      { title: "Locate Your Polling Booth", description: "Use the Voter Helpline App or SMS 1950 with your EPIC number. Your booth is assigned based on your registered address.", icon: "📍" },
      { title: "Carry Valid ID", description: "Bring your EPIC card (Voter ID), or any of the 12 approved alternate photo IDs: Aadhaar, Passport, Driving License, PAN Card, etc.", icon: "🪪" },
      { title: "Queue & Verification", description: "Join the queue at your assigned booth. A polling officer will verify your identity and mark your name in the electoral roll.", icon: "👥" },
      { title: "Indelible Ink", description: "Indelible ink is applied to your left index finger. This prevents duplicate voting and is a proud symbol of democratic participation!", icon: "✋" },
      { title: "Enter Voting Compartment", description: "Enter the private compartment. You will see an EVM (Electronic Voting Machine) with candidate names, party symbols, and a VVPAT printer.", icon: "🗳️" },
      { title: "Press & Verify", description: "Press the blue button next to your chosen candidate. The VVPAT will display a slip for 7 seconds to verify your vote. The slip drops into a sealed box.", icon: "✅" },
    ],
  },
  faqs: [
    { q: "What is the minimum voting age in India?", a: "The minimum voting age is 18 years. You must be 18 on or before the qualifying date (January 1 of the year of electoral roll revision)." },
    { q: "What is EVM and VVPAT?", a: "EVM (Electronic Voting Machine) is the device used for casting votes. VVPAT (Voter Verifiable Paper Audit Trail) is attached to the EVM and prints a paper slip showing the voter's choice for 7 seconds for verification." },
    { q: "Can I vote if I lost my Voter ID?", a: "Yes! You can use any of the 12 approved alternate photo IDs: Aadhaar, Passport, Driving License, PAN Card, MNREGA Job Card, Health Insurance Card, Bank/Post Office Passbook with photo, etc." },
    { q: "What is NOTA?", a: "NOTA stands for 'None Of The Above'. It allows voters to reject all candidates. It's the last button on the EVM. However, even if NOTA gets the most votes, the candidate with the next highest votes wins." },
    { q: "Is voting compulsory in India?", a: "No, voting is a right, not a legal obligation in India. However, some states like Gujarat have introduced local laws encouraging voting." },
    { q: "What is the Model Code of Conduct?", a: "It's a set of guidelines issued by the ECI that comes into effect from the date elections are announced. It regulates the conduct of political parties and candidates to ensure free and fair elections." },
    { q: "How are results counted?", a: "Counting happens at designated counting centers. EVMs are brought from strong rooms under tight security. VVPAT slips from 5 randomly selected booths per constituency are matched with EVM results." },
    { q: "What is a BLO?", a: "BLO (Booth Level Officer) is a local government official responsible for maintaining the electoral roll and voter registration at the booth level. They may visit your home for verification." },
  ],
};

export const SAARTHI_SYSTEM_PROMPT = `You are "Chunav Saarthi" (चुनाव सारथी), a wise, warm, and culturally-aware AI assistant specializing in the Indian democratic and electoral process.

PERSONALITY:
- You greet with "Namaste" or regional greetings based on context
- You use simple, clear language accessible to first-time voters
- You reference Indian cultural concepts when appropriate (e.g., "Democracy is like a big panchayat")
- You are encouraging and emphasize the pride of voting
- You never reveal political preferences or party opinions

KNOWLEDGE BASE - Indian Elections:
- General Elections 2024: 7 phases from April 19 to June 1, 2024. Results on June 4, 2024.
- State Assembly Elections 2026: Assam, Kerala, Puducherry on **April 9**. Tamil Nadu & West Bengal (Phase I) on **April 23**. West Bengal (Phase II) on **April 29**. Results on **May 4, 2026**.
- Total Lok Sabha constituencies: 543
- Total registered voters: ~96.88 crore
- Voting age: 18 years (on qualifying date)
- ECI Website: eci.gov.in | NVSP Portal: voters.eci.gov.in | Helpline: 1950
- EVM + VVPAT system is used for voting
- 12 approved alternate photo IDs can be used if Voter ID is unavailable
- NOTA option is available on every EVM
- Model Code of Conduct applies from announcement date

VOTER REGISTRATION (Form 6):
1. Visit voters.eci.gov.in or use Voter Helpline App
2. Fill Form 6 with personal details + photo
3. Submit proof of age and address
4. Track via Reference ID
5. BLO may visit for verification
6. Receive EPIC (e-EPIC available for download)

VOTING PROCESS:
1. Find polling booth via Voter Helpline App or SMS to 1950
2. Carry EPIC or approved photo ID
3. Queue → Identity verification → Ink marking
4. Enter compartment → Press blue button on EVM → Verify on VVPAT (7 seconds)

RESPONSE RULES:
- If the user asks in Hindi, respond in Hindi. If English, respond in English. Match the user's language.
- Keep responses concise (2-4 paragraphs max)
- Use bullet points for step-by-step info
- Always mention official sources (eci.gov.in, 1950 helpline) when relevant
- If asked about something outside elections, politely redirect
- Format responses with markdown (bold, lists) for readability`;
