
export type Excursion = {
  name: string, 
  places: {
    location: string
    description: string
  }[]
}[]

export const excursion: Excursion = [
  { name: "Heritage of Rattanakosin", places: [
    { location: "Bangkok National Museum", 
      description: "the largest museum in Thailand. This place preserves and displays a vast collection of artifacts, sculptures, arts, and relics, as well as exquisite architecture."
    }, 
    { location: "The Grand Palace", 
      description: "the former official residence of the Kings of Thailand, is made up of many throne halls and pavilions. In the Grand Palace, there is Wat Phra Kaew (Temple of the Emerald Buddha), which enshrines the Emerald Buddha. With elegant architecture and spectacular details, these places are undoubtedly the most visited tourist attractions in Thailand."
    }, 
    { location: "Wat Pho (Temple of the Reclining Buddha)", 
      description: "one of the most prestigious temples in Bangkok. Here, witness the giant reclining Buddha and memorable sculptures such as \"Reusi Dat Ton\" and \"Yak Wat Pho.\""
    }
  ]}, 
  { name: "In Retrospect", 
    places: [
      { location: "Saranrom Park", 
        description: "the public park that has a beautiful garden and some historical places and monuments, such as Khana Ratsadon's Club or Saranrom Palace. You can leisurely walk, rest at pavilions around the park, or visit these places as mentioned before."
      }, 
      { location: "Museum Siam", 
        description: "a place where you can find the definition of Thainess and learn about the dynamic of Thai culture and society through interactive exhibitions and modern technologies."
      }, 
      { location: "Phayathai Palace", 
        description: "the former residences of King Rama VI and royal families. Highlights of this place include the Roman garden, throne halls, and buildings, which are designed and decorated interiorly in classic European style, and Café Narasingh, the antique coffee shop that serves delicious coffee, tea, and various savories and desserts. \n \nCafé Narasingh is optional. Please be aware that expenses for food and beverages are not covered within the scope of your registration fee. You will be responsible for any costs incurred in relation to your consumption of food and drinks during the event."
      }
    ]
  }, 
  { name: "The Green lung of Bangkok", 
    places: [
      { location: "Sri Nakhon Khuean Khan Park and Botanical Garden", 
        description: "many activities are waiting for you. You can wander around, feed the fish, or, most popularly, rent a bike* and ride through lush and shady trails in the park that will make you feel relaxed. And before leaving, don’t forget to check in and take a photo while you’re walking on the bird-view tower!\n \n* Please take note that bike rental is available as an optional service. It's important to be aware that the cost of bike rental will not be included in any fees and will be your responsibility to cover."
      }, 
      { location: "Bang Nam Peung floating market", 
        description: "a Thai-Mon community that lives alongside the canals. Discover many shops that sell local handicrafts, street food, and other unique things as you meander through the floating stalls along the canal." 
      }
    ]
  }, 
  { name: "Art in the heart of town", 
    places: [
      { location: "Chareonkrung street art", 
        description: "Immerse yourself in the dynamic world of street art as our guides take you on a curated tour of Charoenkrung's most captivating murals and urban artworks. Uncover the stories behind the art, the artists, and the messages they convey."
      }, 
      { location: "Pipit Banglamphu Museum", 
        description: "a hidden gem that will bring you back in time to Bangkok's past through art installations and exhibitions. Engage with local guides and enjoy the beauty of contemporary Thai folkways." 
      }, 
      { location: "The National Gallery", 
        description: "where Thailand's artistic legacy resides, is a treasure trove of traditional and contemporary Thai art. Have a look at intricate paintings, sculptures, and other artworks full of the nation's history and culture."
      }
    ]
  }
]
