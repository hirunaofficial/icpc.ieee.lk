export function TimelineCard({ date, title, align, color, highlight }) {
  return (
    <div className={`relative flex items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Center dot */}
      <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${color} rounded-full border-4 border-white shadow-xl z-10`}></div>
      
      {/* Content */}
      <div className={`w-full md:w-5/12 ${align === 'right' ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
        <div className={`${highlight ? 'bg-[#FDBC1D] text-[#143C68]' : 'bg-white'} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
          <div className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">{date}</div>
          <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
        </div>
      </div>
    </div>
  );
}

