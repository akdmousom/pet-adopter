import PostPetCommunity from '@/components/PostPetCommunity/PostPetCommunity';
import { auth } from '@/app/api/auth';
import React from 'react';

const page = async () => {
  const session = await auth();
  const user = session.user
  // console.log(session.user,'session')

  return (
    <div>
      <PostPetCommunity user={user} />
    </div>
  );
};

export default page;