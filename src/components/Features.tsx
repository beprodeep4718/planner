import { TrendingUp, BookOpen, Users, Target, ShieldCheck, Calendar } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Investment Education',
    description: 'Learn investment options from scratch. No prerequisites needed—we teach everything you need to build wealth.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Calendar,
    title: 'Monthly Salary Planning',
    description: 'Smart budgeting strategies to help you allocate your income effectively and build consistent savings habits.',
    gradient: 'from-teal-500 to-cyan-600'
  },
  {
    icon: ShieldCheck,
    title: 'Loan Repayment Strategy',
    description: 'Tackle high-interest loans efficiently. We help you plan repayments so debt does not burden your financial freedom.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Target,
    title: 'Big Purchase Planning',
    description: 'Planning a wedding, car, or home? We help you save and plan smartly—without taking expensive loans.',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Users,
    title: 'Personal Mentor',
    description: 'Get assigned a dedicated mentor who guides you throughout the year, keeping you consistent and motivated.',
    gradient: 'from-emerald-500 to-green-600'
  },
  {
    icon: BookOpen,
    title: 'Year-Round Support',
    description: 'Stay on track with continuous guidance, resources, and accountability to achieve your financial goals.',
    gradient: 'from-green-500 to-teal-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Everything You Need
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Financial Guidance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From learning the basics to executing advanced strategies, we provide end-to-end support for your financial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
