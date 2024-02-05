import { GetThreads, CreateThread } from '@/app/services/apiendpoints';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

//Assistant Page where we can chat with that specific assistant
export default async function ThreadsPage({ params }) {
  //Calling apis here and will prop drill them to components
  const { userId } = auth();
  console.log('userid', userId);
  const threads = await GetThreads(params.assistantId, userId);
  console.log('Threads', threads);
  // if (threads.length == 0) {
  //   const currentThread = await CreateThread(params.assistantId, userId)
  //   redirect(`/${params.assistantId}/${currentThread.id}`)
  // } else {
  //   const currentThread = threads[0]
  //   redirect(`/${params.assistantId}/${currentThread.threadId}`)
  // }

  return <main className='relative flex'>Loading</main>;
}
