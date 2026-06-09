import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "כלבו לקבלן | ציוד בנייה, חשמל, אינסטלציה ותאורה - אשדוד",
  description: "כל מה שהקבלן צריך במקום אחד. ציוד בנייה, חשמל, אינסטלציה, צבע, כלי עבודה ותאורה באשדוד.",
};

const categories = [
  {
    icon: "🔧",
    title: "כלי עבודה",
    items: ["מקדחות", "מברגות", "דיסקים", "פטישים", "ארגזי כלים"],
    color: "from-blue-900 to-blue-800",
  },
  {
    icon: "🧱",
    title: "חומרי בניין",
    items: ["שפכטל", "מלט", "גבס", "צבע", "חומרי איטום"],
    color: "from-slate-800 to-slate-700",
  },
  {
    icon: "⚡",
    title: "חשמל",
    items: ["כבלים", "שקעים", "מפסקים", "לוחות חשמל", "אביזרי חשמל"],
    color: "from-amber-900 to-amber-800",
  },
  {
    icon: "💡",
    title: "תאורה",
    items: ["מנורות בית", "מנורות גן", "ספוטים", "פסי לד", "גופי תאורה"],
    color: "from-yellow-900 to-yellow-800",
  },
  {
    icon: "🚰",
    title: "אינסטלציה",
    items: ["ברזים", "צינורות", "מחברים", "משאבות", "אביזרי מים"],
    color: "from-cyan-900 to-cyan-800",
  },
  {
    icon: "🏠",
    title: "ציוד לבית",
    items: ["מוצרי ניקיון", "אביזרי אחסון", "כלי גינה", "אביזרים לבית"],
    color: "from-green-900 to-green-800",
  },
];

const services = [
  {
    icon: "⚡",
    title: "עבודות חשמל",
    desc: "התקנות, תיקונים ותחזוקה מלאה על ידי אנשי מקצוע מוסמכים.",
  },
  {
    icon: "🚿",
    title: "עבודות מים ואינסטלציה",
    desc: "איתור ותיקון תקלות, התקנות ותחזוקה לכל סוגי מערכות המים.",
  },
  {
    icon: "🏗️",
    title: "פתרונות לבית ולעסק",
    desc: "אספקת ציוד מקצועי לקבלנים, בעלי מקצוע ולקוחות פרטיים.",
  },
];

const stats = [
  { value: "5000+", label: "מוצרים במלאי" },
  { value: "30+", label: "שנות ניסיון" },
  { value: "1000+", label: "לקוחות מרוצים" },
  { value: "6", label: "קטגוריות מוצרים" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-16 lg:pt-20 bg-white">
        <Image
          src="/hero-banner.png"
          alt="כלבו לקבלן - בונה? משפץ? אל תבזבז זמן יקר! 053-5239103"
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
        {/* Brand trust bar */}
        <div className="bg-white border-b border-gray-100 py-3 overflow-hidden">
          <div className="animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 px-6">
                {["HAMAT", "HUNTER", "SIGMA", "טמבור", "נירלט", "חרסה"].map((brand) => (
                  <span key={brand} className="text-gray-500 font-black text-base sm:text-lg tracking-wide uppercase whitespace-nowrap hover:text-[#f97316] transition-colors cursor-default">
                    {brand}
                  </span>
                ))}
                <span className="text-[#f97316] text-xl">◆</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons below banner */}
        <div className="bg-[#1a2744] py-4 px-4">
          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-3">
            <a
              href="tel:0535239103"
              className="bg-[#f97316] hover:bg-[#ea6c0a] text-white px-6 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              התקשרו עכשיו
            </a>
            <a
              href="https://wa.me/972535239103"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            >
              WhatsApp
            </a>
            <Link
              href="/catalog"
              className="bg-white hover:bg-gray-100 text-[#1a2744] px-6 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            >
              קטלוג מוצרים
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-4">
              קטגוריות <span className="text-[#f97316]">מוצרים</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              מגוון רחב של מוצרים מקצועיים לכל צורך — בנייה, חשמל, תאורה ועוד.
            </p>
            <div className="w-16 h-1 bg-[#f97316] rounded mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={`/catalog#${cat.title}`}
                className="group relative overflow-hidden rounded-2xl p-6 bg-white border border-gray-100 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cat.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-[#1a2744] mb-3 group-hover:text-[#f97316] transition-colors">
                      {cat.title}
                    </h3>
                    <ul className="space-y-1">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#f97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/catalog"
              className="inline-block bg-[#1a2744] hover:bg-[#0f1a33] text-white px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 shadow-lg"
            >
              לקטלוג המלא ←
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-4">
              ה<span className="text-[#f97316]">שירותים</span> שלנו
            </h2>
            <p className="text-gray-500 text-lg">פתרונות מקצועיים לבית ולעסק</p>
            <div className="w-16 h-1 bg-[#f97316] rounded mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 card-hover">
                <div className="text-5xl mb-5">{svc.icon}</div>
                <h3 className="text-xl font-black text-[#1a2744] mb-3">{svc.title}</h3>
                <p className="text-gray-500 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block border-2 border-[#1a2744] text-[#1a2744] hover:bg-[#1a2744] hover:text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              לפרטים נוספים על השירותים
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            מוכנים להתחיל? <span className="text-[#f97316]">צרו קשר עכשיו</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            צוות המומחים שלנו ישמח לעזור לך למצוא את הציוד הנכון לפרויקט שלך.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0535239103"
              className="bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              053-523-9103
            </a>
            <a
              href="https://wa.me/972535239103"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              טופס יצירת קשר
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
