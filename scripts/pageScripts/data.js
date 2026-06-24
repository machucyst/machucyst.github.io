let placeholder = "../../../ph.webp"
let placeholder2 = "../../../ph2.webp"
export default {
  anime: getFavorites(),
  games: {
    normal:{
      1:{
        thumbnail: "silksong.webp",
        title:"Hollow Knight: Silksong",
        color:"red",
        imageDir:"silksong",
        desc:"if it wasnt obvious, this place is still under renovation"
      },
      2:{
        thumbnail: "tf2.webp",
        title: "Team Fortress 2",
        color: "orange",
        imageDir:"tf2",
        desc:"test"
      }
    },
    gacha: {
      1: {
        thumbnail: "fgo-d.webp",
        title: "Fate/Grand Order",
        color: "#f4e4a4",
        uid: "589 459 291",
        imageDir: "fgo",
        favorite: {
          image: "Reines.webp",
          name: "Sima Yi (Reines)",
        },
        images: await getImages("fgo"),
        desc: "I have over 1850 logins, i could be investing my life somewhere else but whatever. NP6 Reines in the span of 4 years. I'm aiming for typhon lads raaaaaaaaah",
      },
      2: {
        thumbnail: "uma-d.webp",
        title: "Uma Musume: Pretty Derby",
        color: "pink",
        uid: "508 817 543 194",
        imageDir: "uma",
        favorite: {
          image: "NiceNature.webp",
          name: "Nice Nature",
        },
        images: await getImages("uma"),
        desc: "i have the played jp before global card yip.",
      },
      3: {
        thumbnail: "ba-d.webp",
        title: "Blue Archive",
        color: "rgb(52, 191, 238)",
        uid: "1889581",
        imageDir: "ba",
        favorite: {
          image: "Kei.webp",
          name: "Kei",
        },
        images: await getImages("ba"),
        desc: "Tsunderes are life, they are the light at the end of the tunnel. The Salvation everyone desires, when you are lost you look for Kei, when you are suffering you glee for Kei, when you are in pain you heal with Kei. Tsunderes are the soft spot of every being out there, honest not with their words but with their hearts. The journey is not the endpoint but the road, Indirectiveness brings forth many forks in the road, with many forks come many experiences. Tsunderes for life, Tsunderes for all.",
      },
      4: {
        thumbnail: "hsr-d.webp",
        title: "Honkai: Star Rail",
        color: "white",
        uid: "801140261",
        imageDir: "hsr",
        favorite: {
          image: "SilverWolf.webp",
          name: "Silver Wolf",
        },
        images: await getImages("hsr"),
        desc: "they really put an SW alt and thought they could get away with it",
      },
      5: {
        thumbnail: "tbc-d.webp",
        title: "The Battle Cats",
        color: "red",
        uid: "None",
        imageDir: "bc",
        favorite: {
          image: "kasli.webp",
          name: "Kasli the Scourge",
        },
        images: await getImages("bc"),
        desc: "i lost my account for 7 yrs i managed to get it back using the power of friendship with people i dont talk to anymore",
      },
      6: {
        thumbnail: "ak-d.webp",
        title: "Arknights",
        color: "cyan",
        uid: "38605704",
        imageDir: "ak",
        favorite: {
          image: "Irene.webp",
          name: "Irene",
        },
        images: [placeholder,placeholder2],
        desc: "i advocate for tower offense meta",
      },
      7: {
        thumbnail: "gfle-d.webp",
        title: "Girls Front Line 2: EXILIUM",
        color: "#CEB042",
        uid: "350222",
        imageDir: "gfle",
        favorite: {
          image: "Cheyanne.webp",
          name: "Cheyanne"
        },
        images: await getImages("gfle"),
        desc: "i dont think ill resist the urge to not pay for cheyanne's skin"

      },
      8: {
        thumbnail: "ss-d.webp",
        title: "Stella Sora",
        color: "lightblue",
        uid: "700373424",
        imageDir: "ss",
        favorite: {
          image: "Tyrant.webp",
          name: "Tyrant"
        },
        images: await getImages("ss"),
        desc: "trying it out, seems fun",
      },
      9: {
        thumbnail: "ake-ddd.png",
        title: "Arknights: Endfield",
        color: "gray",
        uid: "4505320934",
        imageDir: "ake",
        favorite: {
          image: "Endmin.webp",
          name: "Endmin",
        },
        desc: "THE FACTORY MUST GROWWWWWWWWWWWWWWW",
        images: await getImages("ake")
      },
      10: {
        thumbnail: "stas-ddd.png",
        title: "Star Savior",
        color: "#545ee9",
        uid: "51203797170",
        imageDir: "stas",
        favorite: {
          image: "BelleRhys.webp",
          name: "Belle Rhys",
        },
        desc: "I am addicted to gambling",
        images: await getImages("stas")
      },
      11:{
        thumbnail: "",
        title: "Counter:Side",
        color: "#4b100c",
        uid: "4717627",
        imageDir: "cs",
        favorite: {
          image:"Christina.webp",
          name: "Christina Brecht"
        },
        desc: "Horizon Finance is such a great sub-story. Such a shame the game went EOS",
        images: await getImages("cs")
      },
    }
  },

}

async function getImages(dirName){
 
  const images = [];
  let i = 1;

  while (true) {
    const url = `../../../../images/Games/Gacha/${dirName}/${dirName}${i}.webp`;
    try{
      const res = await fetch(url, { method: 'HEAD' }); // HEAD is faster, no need to download the image
      
      if (!res.ok) break; // 404 = stop
      
      images.push(`${dirName}${i}.webp`);
      i++;
    }
    catch (error){
      console.log("images found: ="+i-1)
      break;
    }
    }
    // console.log(images)
    return images;
}

async function getFavorites() {
  const query = `
    query ($name: String) {
      User(name: $name) {
        name
        avatar {
          large
        }
        favourites {
          anime {
            nodes {
              id
              title {
                romaji
                english
                native
              }
              coverImage{
                extraLarge
                large
                medium
              }
              bannerImage
            }
          }
          manga{
            nodes{
              id
              title{
                romaji
                english
                native
              }
              coverImage{
                extraLarge
                large
                medium
              }
            }
          }
        }
        
      }
      animeList: MediaListCollection(userName: $name, type: ANIME){
        lists{
           entries{
            status
              media{
                id
                title{
                  romaji
                  english
                  native
                }
                coverImage{
                  extraLarge
                }
              }
          }
        }
      }
      mangaList: MediaListCollection(userName: $name, type: MANGA){
        lists{
          entries{
            status
              media{
                id
                title{
                  romaji
                  english
                  native
                }
                coverImage{
                  extraLarge
                }
              }
          }
        }
      }
    }
  `;
  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables: { name: "machucyst" }
    })
  });

  const data = await response.json();

  return data.data;
}

