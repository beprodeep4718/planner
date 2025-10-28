import { ArrowRight, Sparkles, AlertCircle, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Transform Your Financial Future
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Financial Planning
              </span>
              <br />
              <span className="text-gray-900">For Everyone</span>
            </h1>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Did You Know?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-red-600">
                      You end up paying almost double as loan interest over
                      time.
                    </strong>{" "}
                    A ₹5 lakh loan can cost you ₹9-10 lakhs! We will help you
                    optimize your finances, plan your salary to avoid impulsive
                    buying, and stay on track across 12 months.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Did You Know?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-green-600">
                      With proper planning, even saving ₹10,000 a month can help you build wealth worth crores.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why planning is important
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl">
                  <div className="text-5xl">💰</div>
                </div>
                <h3 className="text-2xl text-gray-900">
                  Avoid Costly Mistakes
                </h3>
                {/* <p className="text-gray-600 leading-relaxed">
                  One wrong financial decision can cost you lakhs. Our guidance
                  prevents expensive errors and helps you avoid debt traps.
                </p> */}
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
                  <div className="text-5xl">📈</div>
                </div>
                <h3 className="text-2xl text-gray-900">
                  Build Real Wealth
                </h3>
                {/* <p className="text-gray-600 leading-relaxed">
                  Learn to invest smartly and watch your money grow month after
                  month, year after year. Compound interest works in your favor.
                </p> */}
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl">
                  <div className="text-5xl">🎯</div>
                </div>
                <h3 className="text-2xl text-gray-900">
                  Achieve Your Dreams
                </h3>
                {/* <p className="text-gray-600 leading-relaxed">
                  Marriage, car, home, retirement - plan for everything without
                  drowning in debt. Smart planning makes dreams affordable.
                </p> */}
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            
            <div className="text-center space-y-4">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Year‑Long Guidance
                </span>
                <span className="block text-gray-700 text-lg font-medium mt-2">
                  Monthly check‑ins • Personalized roadmaps • Measurable results
                </span>
              </h2>
              

              <div className="flex justify-center mt-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-transform"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
