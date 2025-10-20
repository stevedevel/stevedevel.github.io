import { JSONFilePreset } from 'lowdb/node';

import { Hero } from './Hero'
import HeroPage from './components/HeroPage'





export async function readHeroes(name: string) {
  const defaultData: Hero[] = [];
  const db = await JSONFilePreset(name, defaultData);
  return db;
}



export default async function Home({
  children,
}: {
  children: React.FC<Hero[]>
}) {

  const db = await readHeroes('./data/heroes.json')
  

  return (
    <HeroPage {...db.data}/>
  );
}
