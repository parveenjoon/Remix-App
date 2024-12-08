import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import QuizGrid from '../components/QuizGrid';

export const loader = async () => {
  const quizData = [
    { type: 'Question Text', content: 'What is 2+2?' },
    { type: 'Progress Bar' },
  ]; // Replace with API if necessary
  return json(quizData); // json comes from @remix-run/node
};

export default function QuizRoute() {
  const quizData = useLoaderData<typeof loader>(); // Add type safety for loader
  return <QuizGrid quizData={quizData} />;
}
