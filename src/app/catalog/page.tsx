import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קטלוג מוצרים | כלבו לקבלן",
  description: "קטלוג המוצרים המקצועי של כלבו לקבלן — כלי עבודה, חומרי בניין, חשמל, תאורה, אינסטלציה וציוד לבית.",
};

const categories = [
  {
    id: "כלי-עבודה",
    title: "כלי עבודה",
    icon: "🔧",
    description: "כלי עבודה מקצועיים לכל פרויקט",
    products: [
      { name: "מקדחות", desc: "מקדחות מקצועיות לכל סוגי החומרים — בטון, עץ ומתכת.", category: "כלי עבודה" },
      { name: "מברגות", desc: "מברגות ומברגות פגיעה בגדלים ועוצמות שונות.", category: "כלי עבודה" },
      { name: "דיסקים", desc: "דיסקי חיתוך ושחיקה לאבן, ברזל ובטון.", category: "כלי עבודה" },
      { name: "פטישים", desc: "פטישים, פטישי גומי ופטישי הרס בגדלים שונים.", category: "כלי עבודה" },
      { name: "ארגזי כלים", desc: "ארגזי כלים מקצועיים, גלגלים ותיקי כלים.", category: "כלי עבודה" },
      { name: "מסורים", desc: "מסורי ידני, חשמלי ועגולי לכל סוגי החיתוך.", category: "כלי עבודה" },
    ],
  },
  {
    id: "חומרי-בניין",
    title: "חומרי בניין",
    icon: "🧱",
    description: "חומרי בניין איכותיים לכל שלבי הבנייה",
    products: [
      { name: "שפכטל", desc: "שפכטל פנים וחוץ, שפכטל גמיש ועמיד.", category: "חומרי בניין" },
      { name: "מלט", desc: "מלט רגיל ומהיר התחשלות לכל שימוש.", category: "חומרי בניין" },
      { name: "גבס", desc: "גבס לטיח, גבס לתקרה ולוחות גבס.", category: "חומרי בניין" },
      { name: "צבע", desc: "צבעים לפנים ולחוץ, בסיסי מים ואלקיד.", category: "חומרי בניין" },
      { name: "חומרי איטום", desc: "איטום גג, איטום לחות וחומרי איטום מיוחדים.", category: "חומרי בניין" },
      { name: "דבקים", desc: "דבק אריחים, פוגה, סיליקון ואפוקסי.", category: "חומרי בניין" },
    ],
  },
  {
    id: "חשמל",
    title: "חשמל",
    icon: "⚡",
    description: "ציוד חשמל מקצועי לכל סוג התקנה",
    products: [
      { name: "כבלים", desc: "כבלי חשמל בכל הסקציות לשימוש פנים וחוץ.", category: "חשמל" },
      { name: "שקעים", desc: "שקעים חד ותלת פאזיים, שקעי חוץ וחדר רחצה.", category: "חשמל" },
      { name: "מפסקים", desc: "מפסקים, עמעמים ומפסקי תנועה.", category: "חשמל" },
      { name: "לוחות חשמל", desc: "לוחות חלוקה ופסי מיגון מכל הסוגים.", category: "חשמל" },
      { name: "אביזרי חשמל", desc: "קופסאות חיבור, מוצרי הארקה ואביזרי הכנה.", category: "חשמל" },
      { name: "מכשירי מדידה", desc: "מולטימטרים, מודדי זרם ובודקי מתח.", category: "חשמל" },
    ],
  },
  {
    id: "תאורה",
    title: "תאורה",
    icon: "💡",
    description: "פתרונות תאורה לבית, לגינה ולעסק",
    products: [
      { name: "מנורות בית", desc: "נורות LED חסכוניות לכל הצרכים הביתיים.", category: "תאורה" },
      { name: "מנורות גן", desc: "מנורות חיצוניות, פנסי גינה ומנורות דרך.", category: "תאורה" },
      { name: "ספוטים", desc: "ספוטים שקועים, ספוטים על מסילה ומנורות בריכה.", category: "תאורה" },
      { name: "פסי לד", desc: "פסי לד בצבעים שונים לתאורה דקורטיבית.", category: "תאורה" },
      { name: "גופי תאורה", desc: "גופי תאורה לתקרה, לקיר ולחוץ.", category: "תאורה" },
      { name: "תאורת חירום", desc: "שלטי חירום, תאורת לד חירום ומנורות חירום.", category: "תאורה" },
    ],
  },
  {
    id: "אינסטלציה",
    title: "אינסטלציה",
    icon: "🚰",
    description: "ציוד מים ואינסטלציה מקצועי",
    products: [
      { name: "ברזים", desc: "ברזי מטבח, אמבטיה ומקלחת מכל הסוגים.", category: "אינסטלציה" },
      { name: "צינורות", desc: "צינורות PPR, PVC ונחושת לכל המערכות.", category: "אינסטלציה" },
      { name: "מחברים", desc: "מחברים, אלבועים, מאמות ואביזרי הרחבה.", category: "אינסטלציה" },
      { name: "משאבות", desc: "משאבות מים, משאבות לחץ ומשאבות בוסטר.", category: "אינסטלציה" },
      { name: "אביזרי מים", desc: "מדי מים, שסתומים, מסננים ומפצלים.", category: "אינסטלציה" },
      { name: "אסלות וכיורים", desc: "אסלות, כיורים ואביזרי חדר רחצה.", category: "אינסטלציה" },
    ],
  },
  {
    id: "ציוד-לבית",
    title: "ציוד לבית",
    icon: "🏠",
    description: "מוצרים ואביזרים לתחזוקת הבית",
    products: [
      { name: "מוצרי ניקיון", desc: "חומרי ניקיון מקצועיים לכל פני השטח.", category: "ציוד לבית" },
      { name: "אביזרי אחסון", desc: "ארוניות, מדפים ומערכות אחסון.", category: "ציוד לבית" },
      { name: "כלי גינה", desc: "מזמרות, מכסחות, מחלקי מים ואביזרי השקיה.", category: "ציוד לבית" },
      { name: "אביזרים לבית", desc: "ידיות, תריסים, מנעולים ופרזול.", category: "ציוד לבית" },
      { name: "כלים ידניים", desc: "סרגלים, פלסים, סרטי מדידה ואביזרי סימון.", category: "ציוד לבית" },
      { name: "ציוד בטיחות", desc: "קסדות, כפפות, משקפי מגן וחגורות בטיחות.", category: "ציוד לבית" },
    ],
  },
];

export default function CatalogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            קטלוג <span className="text-[#f97316]">מוצרים</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            מגוון רחב של ציוד מקצועי — כלי עבודה, חומרי בניין, חשמל, תאורה, אינסטלציה וציוד לבית.
          </p>
        </div>
      </section>

      {/* Category nav */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-100 hover:bg-[#1a2744] hover:text-white text-sm font-semibold transition-colors"
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">{cat.icon}</div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1a2744]">{cat.title}</h2>
                <p className="text-gray-500">{cat.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.products.map((product) => (
                <div
                  key={product.name}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 card-hover shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#f97316]/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#f97316] font-black text-sm">{product.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a2744] mb-1 group-hover:text-[#f97316] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
                      <span className="inline-block mt-3 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="bg-[#1a2744] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-black mb-3">לא מצאתם מה שחיפשתם?</h3>
          <p className="text-gray-300 mb-6">צרו איתנו קשר ונעזור לכם למצוא את הציוד המתאים לפרויקט שלכם.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0535239103" className="bg-[#f97316] hover:bg-[#ea6c0a] text-white px-6 py-3 rounded-xl font-bold transition-colors">
              📞 053-523-9103
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-bold transition-colors">
              טופס יצירת קשר
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
