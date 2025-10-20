
/**
 * @type Hero
 */
export type Hero = {
    id: number              // unique identifier
    name: string;           // name
    slogan: string;         // slogan
    abstract: string;       // short description
    description: string;    // long description
    href: string;           // url (dota)
    attribute: string;      // dota attribute
    icon: string;
    thumbnail: string;      // preview image
    image: string;          // full image
    attackType: string;     // attack type: melee, ranged, ...
    roles: string[];        // roles of that hero: carry, escape, nuker, ...
    legs: number            // number of legs this hero has
    gender: string
    difficulty: string      // play difficulty: 1 to 3
    weaponType: string      // blade, ...
    aiImages?: string[]      // generated images
}
export interface HeroList {
    heroes: Hero[]          // array of heroes
}

export const PHRASES = {
    PREFIX: "Photorealistic image of ",
    PREFIX_SLOGAN: " hero. ",
    SUFFIX_SLOGAN: ". ",
    STYLE: ", Hyper-realistic photography, Photorealistic, high fidelity, detailed, hyper-realistic, lifelike, realistic lighting and textures, high resolution, high contrast, colorful",
    STYLE_RAW: " --style raw",
    PERSONALIZE: " --personalize beu4jjc",
    QUALITY: "  --quality 0.5"
}

export function getHeroById( heroData:Array<Hero>, id:number): Hero {
    return heroData.find(( hero) => hero.id === id)!
}
