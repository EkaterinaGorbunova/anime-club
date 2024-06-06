import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

export const fetchAnime = async (page: number) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&&order=popularity`
  );

  const data = await res.json();
  // console.log(data);

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

// https://shikimori.one/system/animes/original/20.jpg
// https://shikimori.one/api/animes/16498-shingeki-no-kyojin

export const fetchAnimeById = async (id: string): Promise<AnimeProp | null> => {
  try {
    const res = await fetch(`https://shikimori.one/api/animes/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch anime with ID ${id}`);
    }

    const data = await res.json();

    return data; // Return the anime data
  } catch (error) {
    console.error('Error fetching anime by ID:', error);
    return null;
  }
};
