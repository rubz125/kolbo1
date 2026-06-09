"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-[#1a2744] mb-2">ההודעה נשלחה בהצלחה!</h3>
        <p className="text-gray-500">ניצור אתכם קשר בהקדם. תודה!</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", message: "" }); }}
          className="mt-6 text-[#f97316] font-semibold hover:underline"
        >
          שלחו הודעה נוספת
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">שם מלא *</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="הכנס שם מלא"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">טלפון *</label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="05X-XXXXXXX"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition-all"
          dir="ltr"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">אימייל</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition-all"
          dir="ltr"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">הודעה *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="כתבו את הודעתכם כאן..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#f97316] hover:bg-[#ea6c0a] disabled:opacity-60 text-white py-4 rounded-xl font-black text-lg transition-all hover:scale-[1.02] shadow-lg"
      >
        {loading ? "שולח..." : "שלח הודעה ←"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        * שדות חובה | פרטיכם שמורים ולא יועברו לצד שלישי
      </p>
    </form>
  );
}
