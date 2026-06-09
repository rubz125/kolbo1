import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותים | כלבו לקבלן",
  description: "שירותי חשמל, אינסטלציה ופתרונות לבית ולעסק — כלבו לקבלן, אשדוד.",
};

const services = [
  {
    icon: "⚡",
    title: "עבודות חשמל",
    subtitle: "התקנות, תיקונים ותחזוקה",
    desc: "צוות חשמלאים מוסמכים מטפל בכל סוגי עבודות החשמל — החל מהתקנות חדשות, דרך תיקון תקלות ועד שדרוג מערכות קיימות.",
    features: [
      "התקנת לוחות חשמל",
      "הנחת כבלים ותעלות",
      "התקנת שקעים ומפסקים",
      "עבודות תאורה",
      "בדיקות מתח ובטיחות",
      "חיבורי מיזוג אוויר",
    ],
  },
  {
    icon: "🚿",
    title: "עבודות מים ואינסטלציה",
    subtitle: "איתור ותיקון תקלות, התקנות ותחזוקה",
    desc: "שרברבים מנוסים לכל סוגי עבודות הצנרת — החל מגילוי נזילות, דרך החלפת ברזים ועד התקנת מערכות מים חדשות.",
    features: [
      "איתור ותיקון נזילות",
      "החלפת ברזים וכיורים",
      "התקנת דודי שמש",
      "הנחת צינורות",
      "תיקון ואסלות",
      "מערכות סינון מים",
    ],
  },
  {
    icon: "🏗️",
    title: "פתרונות לבית ולעסק",
    subtitle: "אספקת ציוד מקצועי",
    desc: "אספקת ציוד מקצועי לקבלנים, בעלי מקצוע ולקוחות פרטיים. יועצים מקצועיים שיעזרו לכם לבחור את הציוד הנכון.",
    features: [
      "ייעוץ מקצועי חינם",
      "מלאי ענק של מוצרים",
      "ציוד בנייה מלא",
      "אספקה מהירה",
      "מחירים תחרותיים",
      "שירות אחרי מכירה",
    ],
  },
];

const whyUs = [
  { icon: "🏆", title: "ניסיון של 15+ שנה", desc: "עשרות שנים של ניסיון בתחום" },
  { icon: "👷", title: "צוות מקצועי", desc: "אנשי מקצוע מוסמכים ומנוסים" },
  { icon: "⚡", title: "זמינות גבוהה", desc: "זמינים בשעות נוחות לכם" },
  { icon: "✅", title: "עבודה מוקפדת", desc: "אחריות על כל עבודה" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            ה<span className="text-[#f97316]">שירותים</span> שלנו
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            פתרונות מקצועיים לבית ולעסק — חשמל, אינסטלציה ואספקת ציוד.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                className={`flex flex-col lg:flex-row gap-8 items-start bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-2/5 bg-[#1a2744] p-10 flex flex-col justify-center min-h-48">
                  <div className="text-6xl mb-4">{svc.icon}</div>
                  <h2 className="text-2xl font-black text-white mb-2">{svc.title}</h2>
                  <p className="text-[#f97316] font-semibold text-sm">{svc.subtitle}</p>
                </div>
                <div className="lg:w-3/5 p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {svc.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-5 h-5 bg-[#f97316] rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {feat}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-block bg-[#f97316] hover:bg-[#ea6c0a] text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                    >
                      לפרטים ולתיאום ←
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center text-[#1a2744] mb-10">
            למה <span className="text-[#f97316]">כלבו לקבלן</span>?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center p-6 bg-white rounded-2xl border border-gray-100 card-hover">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-black text-[#1a2744] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            מעוניינים בשירות? <span className="text-[#f97316]">דברו איתנו!</span>
          </h2>
          <p className="text-gray-300 mb-8">קבלו הצעת מחיר בלי עלות ובלי התחייבות.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0535239103" className="bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
              📞 053-523-9103
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
              שלחו הודעה
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
