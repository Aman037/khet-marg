export type Lang = "hi" | "en";

type Entry = { hi: string; en: string };

export const strings = {
  brand: { hi: "खेत", en: "Khet" },
  conceptLabel: { hi: "कॉन्सेप्ट प्रोटोटाइप", en: "Concept prototype" },

  // nav
  navHome: { hi: "होम", en: "Home" },
  navCrop: { hi: "मेरी फसल", en: "My Crop" },
  navHelp: { hi: "मदद", en: "Help" },
  navSettings: { hi: "सेटिंग्स", en: "Settings" },
  langSwitch: { hi: "भाषा", en: "Language" },
  back: { hi: "पीछे", en: "Back" },

  // welcome
  welcomeHeadline: {
    hi: "खेत के लिए सही जानकारी, आसान तरीके से।",
    en: "Useful farming information, made simple.",
  },
  welcomeSupport: {
    hi: "फसल की आम समस्याएँ समझें, काम की जानकारी देखें और अगला कदम तय करें।",
    en: "Understand common crop problems, check useful information and find your next step.",
  },
  welcomeStart: { hi: "शुरू करें", en: "Get started" },
  textSizeShortcut: { hi: "Aa अक्षर का आकार", en: "Aa Text size" },
  noLogin: {
    hi: "कोई खाता या लॉगिन ज़रूरी नहीं है।",
    en: "No account or login needed.",
  },

  // home
  greeting: { hi: "नमस्ते", en: "Namaste" },
  homeQuestion: {
    hi: "आज खेत के लिए क्या जानना है?",
    en: "What do you want to know today?",
  },
  actProblem: { hi: "फसल की समस्या", en: "Crop problem" },
  actProblemSub: {
    hi: "फसल में कुछ अलग दिख रहा है?",
    en: "Something looks different in your crop?",
  },
  actWeather: { hi: "मौसम", en: "Weather" },
  actWeatherSub: {
    hi: "आज और आने वाले दिनों की जानकारी",
    en: "Today and the coming days",
  },
  actWater: { hi: "सिंचाई", en: "Irrigation" },
  actWaterSub: { hi: "पानी देने की जानकारी", en: "When and how to water" },
  actTasks: { hi: "आज के काम", en: "Today's tasks" },
  actTasksSub: { hi: "आज क्या करना है?", en: "What to do today?" },
  myCropShort: { hi: "मेरी फसल", en: "My crop" },
  lastChecked: { hi: "पिछली बार देखा", en: "Last checked" },
  today: { hi: "आज", en: "Today" },
  offlineChip: {
    hi: "ऑफलाइन — कुछ जानकारी अभी भी उपलब्ध है",
    en: "Offline — saved information is still available",
  },
  onlineChip: { hi: "ऑनलाइन", en: "Online" },
  demoOfflineToggle: {
    hi: "ऑफलाइन मोड देखें",
    en: "Try offline mode",
  },

  // crop select
  chooseCropTitle: {
    hi: "आप कौन-सी फसल देख रहे हैं?",
    en: "Which crop are you looking at?",
  },
  chooseCropHelp: {
    hi: "एक फसल चुनें। बाद में बदल सकते हैं।",
    en: "Pick one crop. You can change it later.",
  },
  continue: { hi: "आगे बढ़ें", en: "Continue" },
  next: { hi: "अगला", en: "Next" },
  later: { hi: "बाद में देखें", en: "See later" },

  // problem
  problemTitleWheat: {
    hi: "में क्या समस्या दिख रही है?",
    en: ": what problem do you see?",
  },
  problemHelp: {
    hi: "जो सबसे मिलता-जुलता लगे वही चुनें।",
    en: "Pick whichever is closest to what you see.",
  },
  orAdd: { hi: "या इस तरह बताएं", en: "Or tell us this way" },
  takePhoto: { hi: "फोटो लें", en: "Take a photo" },
  speak: { hi: "बोलकर बताएं", en: "Speak instead" },

  // voice
  voiceIdle: { hi: "बोलकर बताएं", en: "Speak instead" },
  voiceTapToSpeak: {
    hi: "माइक दबाकर बोलें",
    en: "Tap the mic and speak",
  },
  voiceListening: { hi: "सुन रहे हैं...", en: "Listening..." },
  voiceProcessing: { hi: "समझ रहे हैं...", en: "Processing..." },
  voiceYouSaid: { hi: "आपने कहा:", en: "You said:" },
  voiceEditHint: {
    hi: "ज़रूरत हो तो यहाँ बदल सकते हैं।",
    en: "You can edit this if needed.",
  },
  voiceCorrect: { hi: "सही है", en: "That's right" },
  voiceRetry: { hi: "फिर से बोलें", en: "Speak again" },
  voiceError: {
    hi: "आवाज़ साफ़ सुनाई नहीं दी।",
    en: "We couldn't hear that clearly.",
  },

  // photo
  photoTitle: { hi: "फसल की फोटो लें", en: "Take a crop photo" },
  photoHelp: {
    hi: "पत्ते या पौधे का साफ़ फोटो लें।",
    en: "Take a clear photo of the leaf or plant.",
  },
  photoTake: { hi: "फोटो लें", en: "Take photo" },
  photoChoose: { hi: "फोन से चुनें", en: "Choose from phone" },
  photoView: { hi: "फोटो देखें", en: "View photo" },
  photoDemoNote: {
    hi: "यह एक डेमो फोटो है। असली कैमरा ज़रूरी नहीं है।",
    en: "This is a demo photo. No real camera needed.",
  },
  skip: { hi: "अभी छोड़ें", en: "Skip for now" },

  // result
  resultTitle: { hi: "आपकी जानकारी", en: "Your information" },
  yourCrop: { hi: "फसल", en: "Crop" },
  yourObservation: { hi: "आपने बताया", en: "You told us" },
  aiLabel: { hi: "AI-assisted information", en: "AI-assisted information" },
  aiNote: {
    hi: "AI ने आपकी दी गई जानकारी के आधार पर यह सुझाव तैयार किया है।",
    en: "This suggestion was prepared by AI from the information you gave.",
  },
  aiExplain: {
    hi: "पत्तों का पीला होना कई कारणों से हो सकता है। केवल इस जानकारी से सही कारण तय नहीं किया जा सकता।",
    en: "Yellowing leaves can happen for many reasons. The exact cause cannot be decided from this information alone.",
  },
  checksTitle: { hi: "आप क्या देख सकते हैं", en: "What you can check" },
  check1: {
    hi: "देखें कि समस्या किन पत्तों पर है",
    en: "Notice which leaves are affected",
  },
  check2: { hi: "मिट्टी की नमी देखें", en: "Check the soil moisture" },
  check3: {
    hi: "आसपास के पौधों में भी यही समस्या है या नहीं",
    en: "See if nearby plants look the same",
  },
  expertNote: {
    hi: "अगर आप निश्चित नहीं हैं, स्थानीय कृषि विशेषज्ञ से सलाह लें।",
    en: "If you are not sure, ask a local agriculture expert.",
  },
  seeSteps: { hi: "अगले कदम देखें", en: "See next steps" },
  changeInfo: { hi: "जानकारी बदलें", en: "Change information" },
  preparing: { hi: "जानकारी तैयार हो रही है...", en: "Preparing information..." },

  // steps
  stepsTitle: { hi: "अगले कदम", en: "Next steps" },
  stepOf: { hi: "कदम {a} / {b}", en: "Step {a} of {b}" },
  step1: { hi: "पौधे को ध्यान से देखें", en: "Look at the plant closely" },
  step1d: {
    hi: "ऊपर और नीचे के पत्ते अलग-अलग देखें। कहाँ पीलापन ज़्यादा है, यह याद रखें।",
    en: "Compare upper and lower leaves. Note where the yellowing is stronger.",
  },
  step2: { hi: "मिट्टी की नमी जांचें", en: "Check the soil moisture" },
  step2d: {
    hi: "उंगली से 2-3 इंच मिट्टी दबाकर देखें कि वह बहुत सूखी या बहुत गीली तो नहीं है।",
    en: "Press 2-3 inches into the soil and feel whether it is too dry or too wet.",
  },
  step3: {
    hi: "समस्या वाले पत्तों की फोटो रखें",
    en: "Keep a photo of the affected leaves",
  },
  step3d: {
    hi: "कुछ दिनों बाद तुलना करने के लिए फोटो काम आएगी।",
    en: "A photo helps you compare the change after a few days.",
  },
  step4: {
    hi: "जरूरत हो तो विशेषज्ञ से पूछें",
    en: "Ask an expert if needed",
  },
  step4d: {
    hi: "फोटो और अपनी जानकारी साथ ले जाएँ, इससे सलाह बेहतर मिलेगी।",
    en: "Carry your photo and notes along so the advice is more useful.",
  },
  stepsDisclaimer: {
    hi: "यह सामान्य जानकारी है। महत्वपूर्ण निर्णय से पहले विशेषज्ञ की सलाह लें।",
    en: "This is general information. Ask an expert before any important decision.",
  },
  saveObservation: { hi: "जानकारी सेव करें", en: "Save this observation" },
  saved: { hi: "जानकारी सेव हो गई", en: "Observation saved" },
  share: { hi: "साझा करें", en: "Share" },
  shared: { hi: "जानकारी कॉपी हो गई", en: "Information copied" },
  askHelp: { hi: "मदद माँगें", en: "Ask for help" },

  // my crop
  myCropTitle: { hi: "मेरी फसल", en: "My crop" },
  thisWeek: { hi: "इस सप्ताह", en: "This week" },
  lastCheck: { hi: "पिछली जांच", en: "Last check" },
  savedObs: { hi: "सेव की गई जानकारी", en: "Saved observations" },
  pendingActions: { hi: "बाकी काम", en: "Pending actions" },
  addNewInfo: { hi: "नई जानकारी जोड़ें", en: "Add new information" },
  emptyCrop: {
    hi: "अभी कोई फसल नहीं जोड़ी गई है।",
    en: "No crop added yet.",
  },
  addCrop: { hi: "फसल जोड़ें", en: "Add crop" },
  emptyObs: {
    hi: "अभी कोई जानकारी सेव नहीं है।",
    en: "No saved information yet.",
  },
  removeCrop: { hi: "फसल हटाएँ", en: "Remove crop" },

  // help
  helpTitle: { hi: "मदद चाहिए?", en: "Need help?" },
  helpQuestion: { hi: "आप क्या करना चाहते हैं?", en: "What would you like to do?" },
  helpVoice: { hi: "बोलकर पूछें", en: "Ask by speaking" },
  helpVoiceSub: {
    hi: "अपनी बात बोलें, हम लिखकर दिखाएँगे",
    en: "Speak your question, we show it as text",
  },
  helpPhoto: { hi: "फोटो दिखाएं", en: "Show a photo" },
  helpPhotoSub: {
    hi: "फसल की फोटो से जानकारी लें",
    en: "Get information from a crop photo",
  },
  helpHow: { hi: "देखें कि कैसे करें", en: "See how to do it" },
  helpHowSub: { hi: "छोटे-छोटे कदमों में", en: "In small, simple steps" },
  helpExpert: {
    hi: "स्थानीय विशेषज्ञ से पूछें",
    en: "Ask a local expert",
  },
  helpExpertSub: {
    hi: "अपने क्षेत्र के कृषि सलाहकार से बात करें",
    en: "Talk to an agriculture advisor near you",
  },
  helpExpertNote: {
    hi: "यह एक कॉन्सेप्ट प्रोटोटाइप है, इसलिए यहाँ असली संपर्क नहीं दिए गए हैं।",
    en: "This is a concept prototype, so no real contacts are listed here.",
  },
  helpAnswer: {
    hi: "आपकी बात मिल गई। नीचे कुछ आसान कदम दिए गए हैं जिन्हें आप खुद देख सकते हैं।",
    en: "We got your question. Below are simple steps you can check yourself.",
  },

  // settings
  settingsTitle: { hi: "सेटिंग्स", en: "Settings" },
  language: { hi: "भाषा", en: "Language" },
  textSize: { hi: "अक्षर का आकार", en: "Text size" },
  sizeDefault: { hi: "सामान्य", en: "Default" },
  sizeLarge: { hi: "बड़ा", en: "Large" },
  sizeXL: { hi: "और बड़ा", en: "Extra large" },
  preview: { hi: "यह ऐसा दिखेगा", en: "This is how it will look" },
  previewText: {
    hi: "गेहूँ के पत्ते पीले हो रहे हैं।",
    en: "The wheat leaves are turning yellow.",
  },
  voiceAssist: { hi: "आवाज़ से मदद", en: "Voice assistance" },
  highContrast: { hi: "ज़्यादा कंट्रास्ट", en: "High contrast" },
  reduceMotion: { hi: "कम एनिमेशन", en: "Reduce motion" },
  on: { hi: "चालू", en: "On" },
  off: { hi: "बंद", en: "Off" },
  offlineInfo: { hi: "ऑफलाइन जानकारी", en: "Offline information" },
  offlineInfoText: {
    hi: "सहेजी गई जानकारी बिना इंटरनेट के भी उपलब्ध रहेगी।",
    en: "Saved information will remain available without internet.",
  },

  // offline / errors
  offlineTitle: { hi: "आप ऑफलाइन हैं", en: "You are offline" },
  offlineBody: {
    hi: "सहेजी गई जानकारी अभी भी उपलब्ध है।",
    en: "Saved information is still available.",
  },
  needsInternet: {
    hi: "इंटरनेट कनेक्शन की जरूरत है।",
    en: "This needs an internet connection.",
  },
  tryLater: { hi: "बाद में कोशिश करें", en: "Try again later" },
  errorTitle: { hi: "जानकारी अभी लोड नहीं हो सकी।", en: "Could not load this yet." },
  errorBody: {
    hi: "इंटरनेट आने पर फिर कोशिश करें। आपकी दी गई जानकारी सुरक्षित है।",
    en: "Try again when you are back online. What you entered is safe.",
  },
  retry: { hi: "फिर कोशिश करें", en: "Try again" },
  savedOffline: {
    hi: "यह जानकारी ऑफलाइन भी उपलब्ध है",
    en: "Available offline",
  },
  seedNote1: {
    hi: "नीचे के कुछ पत्ते पीले दिखे",
    en: "Some of the lower leaves looked yellow",
  },
  seedNote2: {
    hi: "खेत के कोने में पौधे छोटे हैं",
    en: "Plants in the corner of the field are small",
  },
  daysAgo: { hi: "{n} दिन पहले", en: "{n} days ago" },
} satisfies Record<string, Entry>;

export type StringKey = keyof typeof strings;

export function translate(key: StringKey, lang: Lang, vars?: Record<string, string | number>) {
  let out: string = strings[key][lang];
  if (vars) {
    for (const [k, v] of Object.entries(vars)) out = out.replace(`{${k}}`, String(v));
  }
  return out;

}

export const crops = [
  { id: "wheat", emoji: "🌾", hi: "गेहूँ", en: "Wheat" },
  { id: "rice", emoji: "🌱", hi: "धान", en: "Rice" },
  { id: "maize", emoji: "🌽", hi: "मक्का", en: "Maize" },
  { id: "potato", emoji: "🥔", hi: "आलू", en: "Potato" },
  { id: "pulses", emoji: "🫘", hi: "दाल", en: "Pulses" },
  { id: "other", emoji: "➕", hi: "दूसरी फसल", en: "Other crop" },
] as const;

export const problems = [
  { id: "yellow", hi: "पत्ते पीले हो रहे हैं", en: "Leaves are turning yellow" },
  { id: "spots", hi: "पत्तों पर दाग हैं", en: "There are spots on the leaves" },
  { id: "insects", hi: "कीड़े दिखाई दे रहे हैं", en: "I can see insects" },
  { id: "growth", hi: "पौधा ठीक से बढ़ नहीं रहा", en: "The plant is not growing well" },
  { id: "other", hi: "कुछ और", en: "Something else" },
] as const;

export function cropName(id: string | null, lang: Lang) {
  const c = crops.find((x) => x.id === id);
  return c ? c[lang] : "";
}

export function problemName(id: string | null, lang: Lang) {
  const p = problems.find((x) => x.id === id);
  return p ? p[lang] : "";
}
