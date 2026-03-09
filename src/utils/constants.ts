import {friends} from "../assets";
import main from '../assets/main.jpg';

export const baseURL = 'https://sw-info-api.herokuapp.com';
export const version = '/v1';
export const characters = {
    luke: {
        name: "Luke Skywalker",
        img: main,
        url: `${baseURL+version}/peoples/1`
    },
    c3po:{
        name: "C-3PO",
        img: friends[1],
        url: `${baseURL+version}/peoples/2`
    },
    r2d2:{
        name: "R2-D2",
        img: friends[0],
        url: `${baseURL+version}/peoples/3`
    },
    leia:{
        name: "Leia Organa",
        img: friends[8],
        url: `${baseURL+version}/peoples/5`
    },
    obi_wan:{
        name: "Obi-Wan Kenobi",
        img: friends[7],
        url: `${baseURL+version}/peoples/10`
    },
    chewbacca:{
        name: "Chewbacca",
        img: friends[6],
        url: `${baseURL+version}/peoples/13`
    },
    han_solo:{
        name: "Han Solo",
        img: friends[4],
        url: `${baseURL+version}/peoples/14`
    },
    yoda:{
        name: "Yoda",
        img: friends[5],
        url: `${baseURL+version}/peoples/0`
    },
    ewok:{
        name: "Wicket Systri Warrick",
        img: friends[2],
        url: `${baseURL+version}/peoples/30`
    },
    falcon:{
        name: "Millennium Falcon",
        img: friends[6],
        url: `${baseURL+version}/transports/10`
    }
};

export const defaultHero = 'luke';

export const navItems = ['Home', 'About me', 'Star Wars', 'Contact'];

export const starWarsInfo = `Star Wars is an American epic space opera media franchise created by George Lucas. The franchise began with the original Star Wars film (1977) and quickly became a worldwide pop culture phenomenon. It has expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is the fourth highest-grossing media franchise of all time.

The original film, later retitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).

All nine films, collectively referred to as the "Skywalker Saga", were nominated for Academy Awards, with Oscars going to the first three releases. Together with the spin-off films Rogue One (2016) and Solo (2018), the combined box office revenue of Star Wars theatrical live-action films equals over US$10 billion, making Star Wars the third-highest-grossing film franchise in cinematic history.`

export const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;