'use client'
import { Hero } from '../Hero'

/**
 * 
 * @param hero:Hero hero details to show
 * @param id:number hero id
 * @param cb:function callback to call when clicked
 * @param selected:boolean show selected or not 
 * @returns 
 */
const HeroItem = (
  { hero, id, cb, selected }: { hero: Hero, id: string, cb: (id: number) => void, selected:boolean }
) => {

  return (
    <div 
      className={"item " + ((selected)?'selected':'')} 
      key={hero.name} 
      onClick={() => cb(Number(id))}
      title={hero.name}
    >
      <img src={"https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/icons/" + hero.icon}/>
      &nbsp;{hero.name}
    </div>
  );
}

export default HeroItem