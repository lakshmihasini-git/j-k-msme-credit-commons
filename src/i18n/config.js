import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Common
      "welcome": "Welcome back",
      "login": "Login",
      "logout": "Logout",
      "email": "Email",
      "password": "Password",
      "register": "Register",
      "dontHaveAccount": "Don't have an account?",
      "search": "Search",
      "filter": "Filter",
      "save": "Save",
      "cancel": "Cancel",
      "edit": "Edit",
      "loading": "Loading...",
      
      // Dashboard
      "dashboard": "Dashboard",
      "totalMSMEs": "Total MSMEs",
      "totalLEGs": "Total LEGs",
      "applications": "Applications",
      "totalDisbursed": "Total Disbursed",
      "defaultRate": "Default Rate",
      "activeNBFCs": "Active NBFCs",
      "districtWiseApplications": "District-wise Applications",
      "recentApplications": "Recent Applications",
      "fraudAlerts": "Fraud Alerts",
      
      // District Config
      "districtConfiguration": "District Configuration",
      "totalThreshold": "Total Threshold",
      "pendingThreshold": "Pending Threshold",
      "legScore": "LEG Score",
      
      // NBFC
      "marketplace": "Marketplace",
      "portfolio": "Portfolio",
      "loanProducts": "Loan Products",
      "profile": "Profile",
      
      // Reports
      "reportsAnalytics": "Reports & Analytics"
    }
  },
  ur: {
    translation: {
      // Common - Urdu
      "welcome": "واپس خوش آمدید",
      "login": "لاگ ان",
      "logout": "لاگ آؤٹ",
      "email": "ای میل",
      "password": "پاس ورڈ",
      "register": "رجسٹر",
      "dontHaveAccount": "اکاؤنٹ نہیں ہے؟",
      "search": "تلاش کریں",
      "filter": "فلٹر",
      "save": "محفوظ کریں",
      "cancel": "منسوخ کریں",
      "edit": "ترمیم",
      "loading": "لوڈ ہو رہا ہے...",
      
      // Dashboard
      "dashboard": "ڈیش بورڈ",
      "totalMSMEs": "کل ایم ایس ایم ای",
      "totalLEGs": "کل ایل ای جی",
      "applications": "درخواستیں",
      "totalDisbursed": "کل ادا شدہ",
      "defaultRate": "ڈیفالٹ کی شرح",
      "activeNBFCs": "فعال این بی ایف سی",
      "districtWiseApplications": "ضلع وار درخواستیں",
      "recentApplications": "حالیہ درخواستیں",
      "fraudAlerts": "دھوکہ دہی کی انتباہات",
      
      // District Config
      "districtConfiguration": "ضلع کی ترتیب",
      "totalThreshold": "کل حد",
      "pendingThreshold": "زیر التواء حد",
      "legScore": "ایل ای جی سکور",
      
      // NBFC
      "marketplace": "مارکیٹ پلیس",
      "portfolio": "پورٹ فولیو",
      "loanProducts": "قرض کی مصنوعات",
      "profile": "پروفائل",
      
      // Reports
      "reportsAnalytics": "رپورٹس اور تجزیات"
    }
  },
  hi: {
    translation: {
      // Common - Hindi
      "welcome": "वापसी पर स्वागत है",
      "login": "लॉगिन",
      "logout": "लॉगआउट",
      "email": "ईमेल",
      "password": "पासवर्ड",
      "register": "रजिस्टर",
      "dontHaveAccount": "खाता नहीं है?",
      "search": "खोजें",
      "filter": "फ़िल्टर",
      "save": "सहेजें",
      "cancel": "रद्द करें",
      "edit": "संपादित करें",
      "loading": "लोड हो रहा है...",
      
      // Dashboard
      "dashboard": "डैशबोर्ड",
      "totalMSMEs": "कुल एमएसएमई",
      "totalLEGs": "कुल एलईजी",
      "applications": "आवेदन",
      "totalDisbursed": "कुल वितरित",
      "defaultRate": "डिफ़ॉल्ट दर",
      "activeNBFCs": "सक्रिय एनबीएफसी",
      "districtWiseApplications": "जिला-वार आवेदन",
      "recentApplications": "हाल के आवेदन",
      "fraudAlerts": "धोखाधड़ी चेतावनियां",
      
      // District Config
      "districtConfiguration": "जिला विन्यास",
      "totalThreshold": "कुल सीमा",
      "pendingThreshold": "लंबित सीमा",
      "legScore": "एलईजी स्कोर",
      
      // NBFC
      "marketplace": "बाज़ार",
      "portfolio": "पोर्टफोलियो",
      "loanProducts": "ऋण उत्पाद",
      "profile": "प्रोफ़ाइल",
      
      // Reports
      "reportsAnalytics": "रिपोर्ट और विश्लेषण"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;