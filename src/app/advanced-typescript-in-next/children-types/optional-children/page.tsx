import ProfileCard from '@/components/advanced_typescript/children_types/optional_children/ProfileCard';
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="p-6 space-y-4">
      <ProfileCard
        name="John Doe"
        age={30}
        bio="Software Engineer at Microsoft"
      />
      <ProfileCard name="Jane Doe" age={25} />
    </div>
  );
};

export default ProfilePage;
