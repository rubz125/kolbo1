import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "גלריה | כלבו לקבלן",
  description: "גלריית המוצרים של כלבו לקבלן — ציוד בנייה, חשמל, תאורה, אינסטלציה וכלי עבודה.",
};

const galleryItems = [
  { category: "כלי עבודה", title: "מקדחה מקצועית", color: "from-slate-700 to-slate-900", emoji: "🔧" },
  { category: "חשמל", title: "לוח חשמל ראשי", color: "from-blue-800 to-blue-950", emoji: "⚡" },
  { category: "תאורה", title: "גוף תאורה LED", color: "from-amber-700 to-amber-900", emoji: "💡" },
  { category: "אינסטלציה", title: "ברז מטבח מעוצב", color: "from-cyan-800 to-cyan-950", emoji: "🚰" },
  { category: "חומרי בניין", title: "צבע איכותי", color: "from-green-800 to-green-950", emoji: "🧱" },
  { category: "כלי עבודה", title: "ארגז כלים מלא", color: "from-red-800 to-red-950", emoji: "🗜️" },
  { category: "תאורה", title: "פס לד דקורטיבי", color: "from-purple-800 to-purple-950", emoji: "✨" },
  { category: "חשמל", title: "שקעים ומפסקים", color: "from-indigo-800 to-indigo-950", emoji: "🔌" },
  { category: "אינסטלציה", title: "צינורות PPR", color: "from-teal-800 to-teal-950", emoji: "🔩" },
  { category: "חומרי בניין", title: "חומרי איטום", color: "from-orange-800 to-orange-950", emoji: "🏗️" },
  { category: "כלי עבודה", title: "מברגה חשמלית", color: "from-zinc-700 to-zinc-900", emoji: "🔩" },
  { category: "תאורה", title: "ספוטים שקועים", color: "from-yellow-800 to-yellow-950", emoji: "🔦" },
];

const filterCategories = ["הכל", "כלי עבודה", "חשמל", "תאורה", "אינסטלציה", "חומרי בניין"];

export default function GalleryPage() {
  return (
    <>
      <section className="hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            ה<span className="text-[#f97316]">גלריה</span> שלנו
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            מבחר מהמוצרים המקצועיים שלנו — ציוד בנייה, חשמל, תאורה ועוד.
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap justify-center">
            {filterCategories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                  cat === "הכל"
                    ? "bg-[#1a2744] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br ${item.color} card-hover cursor-pointer`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{item.title}</div>
                    <div className="text-white/60 text-xs mt-1">{item.category}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#f97316] text-xs font-bold">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6">רוצים לראות יותר מוצרים? בקרו בחנות שלנו!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0535239103"
                className="bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg"
              >
                📞 התקשרו עכשיו
              </a>
              <a
                href="https://wa.me/972535239103"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
