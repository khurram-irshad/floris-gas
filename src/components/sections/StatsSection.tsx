import type { StatData } from '@/types';
import './StatsSection.css';

const statsData: StatData[] = [
  {
    number: '1M+',
    label: 'Customers visit',
    sublabel: 'every month'
  },
  {
    number: '93%',
    label: 'Satisfaction rate',
    sublabel: 'from our customers'
  },
  {
    number: '4.9',
    label: 'Average customer',
    sublabel: 'ratings out of 5.00'
  }
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="stat-item"
            >
              <div className="home-stat-number">
                {stat.number}
              </div>
              <div className="stat-text">
                <div >{stat.label}</div>
                <div >{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
