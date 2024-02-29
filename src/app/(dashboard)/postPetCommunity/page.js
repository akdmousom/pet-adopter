import PostPetCommunity from '@/components/PostPetCommunity/PostPetCommunity';
import { auth } from '@/app/api/auth';
import React from 'react';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await auth();
  if (!session?.user || !session?.user?.email) {
      redirect('/')
  }
  const user = session?.user
  return (
    <div>
      <PostPetCommunity user={user} />
    </div>
  );
};

export default page;