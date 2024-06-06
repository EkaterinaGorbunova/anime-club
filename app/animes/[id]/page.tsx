import Image from 'next/image';
import BackButton from '../../../components/BackButton';
import { fetchAnimeById } from '@/app/action';
import { redirect } from 'next/navigation';

type Props = {
  params: { id: string };
};

const AnimeDetails = async ({ params: { id } }: Props) => {
  const data: any = await fetchAnimeById(id);
  if (!data) redirect('/');
  return (
    <section className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-center p-4 lg:p-8 bg-gray-900 '>
      <div className='lg:flex-1 relative w-full h-[40vh] md:h-[60vh] flex justify-center items-center mb-4 lg:mb-0 lg:mr-4'>
        <Image
          src={`https://shikimori.one${data.image.original}`}
          alt={data.name}
          fill
          className='object-contain rounded-lg shadow-lg'
        />
      </div>
      <div className='lg:flex-1 p-4 text-white'>
        <h1 className='text-3xl font-bold text-center lg:text-left mb-4'>
          {data.name}
        </h1>
        <p className='mb-4'>{data.description}</p>
        <div className='flex justify-center lg:justify-start'>
          <BackButton />
        </div>
      </div>
    </section>
  );
};

export default AnimeDetails;
