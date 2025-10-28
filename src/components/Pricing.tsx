import { Check, Zap } from 'lucide-react';

const features = [
  'Personalized monthly salary planning',
  'Complete investment education from scratch',
  'Smart loan repayment strategies',
  'Big purchase planning (wedding, car, home)',
  'Dedicated personal mentor for 365 days',
  'Unlimited consultations & support',
  'Monthly goal tracking & reviews',
  'Access to exclusive financial tools',
  'Financial education for beginners',
  'Build a corpus worth crores with proper financial planning.'
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Invest In Your Financial Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Less than ₹125 per month for complete financial guidance and mentorship.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>

            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-200">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-amber-400 to-orange-500 text-white px-6 py-2 rounded-bl-3xl font-bold flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>BEST VALUE</span>
              </div>

              <div className="p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Annual Membership</h3>
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-2xl text-gray-500 line-through">₹3,999</span>
                    <span className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">₹1,499<span className='text-2xl'>/ year</span></span>
                  </div>
                  <p className="text-emerald-600 font-semibold text-xl mb-4">Save ₹2,500 - Limited Time Offer!</p>
                  <p className="text-gray-600">Just ₹125/month - Less than a movie ticket!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-xl hover:scale-105 transition-all">
                  subscribe - ₹1,499/year
                </button>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-3xl font-bold text-emerald-600 mb-1">365</div>
                      <div className="text-sm text-gray-600">Days Support</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-teal-600 mb-1">1:1</div>
                      <div className="text-sm text-gray-600">Personal Mentor</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-600 mb-1">100%</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
