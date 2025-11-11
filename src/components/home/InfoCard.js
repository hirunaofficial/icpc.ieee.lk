export function InfoCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
      <div className="mb-6 flex justify-center">{icon}</div>
      <div className="text-sm text-gray-600 mb-3 uppercase tracking-wide font-bold">{title}</div>
      <div className="text-4xl font-bold text-[#143C68] mb-2">{value}</div>
      <div className="text-gray-700 text-lg">{subtitle}</div>
    </div>
  );
}

