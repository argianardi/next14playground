import React from 'react';
import Card from './Card';

interface ProfileCardProps {
  name: string;
  age: number;
  bio?: string; // optional bio
}

const ProfileCard = ({ name, age, bio }: ProfileCardProps) => {
  return (
    <Card title="Profile">
      <p className="text-lg"> Name: {name}</p>
      <p className="text-lg">Age: {age}</p>
      {bio && <p className="text-lg">Bio: {bio}</p>}
    </Card>
  );
};

export default ProfileCard;
