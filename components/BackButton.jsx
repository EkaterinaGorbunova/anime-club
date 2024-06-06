'use client';

import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <button
      onClick={handleGoBack}
      className="px-4 py-2 text-sm text-blue-100 hover:text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow"
    >
      Go Back
    </button>
  );
}

export default BackButton;
