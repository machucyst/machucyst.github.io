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
        images: {
          1: "fgo1.webp ",
          2: "fgo2.webp",
          3: "fgo3.webp",
          4: "fgo4.webp",
        },
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
        images: {
          1: "uma1.webp",
          2: "uma2.webp"
        },
        desc: "i have the played jp before global card yip.",
      },
      3: {
        thumbnail: "ba-d.webp",
        title: "Blue Archive",
        color: "rgb(52, 191, 238)",
        uid: "1889581",
        imageDir: "ba",
        favorite: {
          image: "Aoba.webp",
          name: "Aoba",
        },
        images: {
          1: "ba1.webp",
          2: "ba2.webp",
          3: "ba4.webp",
          4: "ba3.webp"
        },
        desc: "no i do not do the funny emoji shenanigans",
      },
      4: {
        thumbnail: "hsr-d.webp",
        title: "Honkai: Star Rail",
        color: "white",
        uid: "ID",
        imageDir: "hsr",
        favorite: {
          image: "url",
          name: "Seele",
        },
        images: {
          1: "../../../ph.webp ",
          2: "../../../ph2.webp "
        },
        desc: "i quit, and ill come back after a while to see if i can still do the endgames",
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
        images: {
          1: "bc1.webp ",
        },
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
        images: {
          1: "../../../ph.webp ",
          2: "../../../ph2.webp "
        },
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
        images: {
          1: "gfle1.webp ",
          2: "../../../ph2.webp "
        },
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
        images: {
          1: "ss1.webp",
          2: "ss3.webp",
          3: "ss2.webp",
        },
        desc: "trying it out, seems fun",
      },
      8: {
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
        images: {
          1: "ake1.webp",
          2: "../../../ph2.webp"
        }
      }
    }
  },

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

