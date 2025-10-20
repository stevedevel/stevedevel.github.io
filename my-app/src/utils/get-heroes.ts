import { cache } from 'react'
import 'server-only'
import { Hero } from '../app/Hero'
import { JSONFilePreset } from 'lowdb/node';
 
export const preload = () => {
  console.log("preload");
  void getHeroes('../data/heroes.json')
}
 
export const getHeroes = cache(async (name: string) => {
  const defaultData: Hero[] = [];
  const db = await JSONFilePreset(name, defaultData);
  return db;
})
