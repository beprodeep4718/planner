import { UserPlus, MessageSquare, TrendingUp, Trophy } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Subscribe',
    description: 'Subscribe with a yearly nominal fees for better health of your wealth. we will take care of your wealth building.',
    step: '01'
  },
  {
    icon: MessageSquare,
    title: 'Meet Your Mentor',
    description: 'Get matched with a dedicated financial mentor who understands your goals and income level.',
    step: '02'
  },
  {
    icon: TrendingUp,
    title: 'Start Planning',
    description: 'Build your personalized monthly budget, investment plan, and debt repayment strategy together.',
    step: '03'
  },
  {
    icon: Trophy,
    title: 'Achieve Goals',
    description: 'Stay consistent with ongoing support, track progress, and celebrate milestones throughout the year.',
    step: '04'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes and transform your financial future with our proven four-step process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 -translate-x-1/2 z-0"></div>
                )}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 z-10">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 mb-6 mt-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
