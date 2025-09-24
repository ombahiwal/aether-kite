import React from 'react';
import SectionTitle  from './SectionTitle';

const teamData = [
  { name: "Guilhem Destriau", role: "Président" },
  { name: "Capucine Denis", role: "Vice-Président" },
  // ... add all from the site list :contentReference[oaicite:7]{index=7}
];

const TeamPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <SectionTitle kicker="Team" title="Meet our team" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamData.map((member, i) => (
          <div key={i} className="text-center">
            {/* optionally insert member photo */}
            <div className="text-lg font-semibold">{member.name}</div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
