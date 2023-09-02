
export type Schedule = {
  time: string 
  title: string
  venue: string
  clothes: string
}

export const schedules: Schedule[][] = [
  [
    { time: "13.00 onwards", title: "Arrival and Checkin", venue: "Hotel", clothes: "Casual"}
  ], [
    { time: "from 6.30", title: "Breakfast", venue: "Hotel", clothes: "Uniform / Formal"},
    {
      time: "9:00 - 12:30", 
      title: "Arrival and Registration", 
      venue: "Rajabhanada Sirinthorn Meeting Room, \nSrisavarindhira Building", 
      clothes: "Uniform / Formal"
    },
    {
      time: "11:00 - 13:00", 
      title: "Lunch", 
      venue: "Srisavarindhira Building, 2nd & 3rd Floor", 
      clothes: "Uniform / Formal"
    },
    {
      time: "12:45", 
      title: "Gathering for Opening Ceremony", 
      venue: "Rajabhanada Sirinthorn Meeting Room, \nSrisavarindhira Building", 
      clothes: "Uniform / Formal"
    },
    {
      time: "13:00 - 14:30", 
      title: "Opening Ceremony", 
      venue: "Rajabhanada Sirinthorn Meeting Room, \nSrisavarindhira Building", 
      clothes: "Uniform / Formal"
    },
    {
      time: "14:30 - 14:45", 
      title: "Briefing on SIMPIC 2024", 
      venue: "Rajabhanada Sirinthorn Meeting Room, \nSrisavarindhira Building", 
      clothes: "Uniform / Formal"
    },
    {
      time: "15:00 - 17:00", 
      title: "Cultural Activities", 
      venue: "Rajapaethayalai Auditorium", 
      clothes: "Uniform / Formal"
    },
    {
      time: "18:15", 
      title: "Gathering for Welcome Dinner", 
      venue: "Rajapaethayalai Auditorium", 
      clothes: "Uniform / Formal"
    },
    {
      time: "19.00 - 21.00", 
      title: "Welcome Dinner", 
      venue: "Chaophraya River Cruise", 
      clothes: "Uniform / Formal"
    },
  ], [
    { time: "from 6:30", title: "Breakfast", venue: "Hotel", clothes: "Uniform / Formal"}, 
    { 
      time: "9:00 - 12:00", 
      title: "Examination: Round 1", 
      venue: "George B. McFarland Laboratory, \nSrisavarindhira Building, 5th floor",
      clothes: "Uniform / Formal"
    },
    { 
      time: "11:30 - 13:30", 
      title: "Lunch", 
      venue: "Srisavarindhira Building, \n2nd & 3rd Floor",
      clothes: "Uniform / Formal"
    }, 
    { time: "13:30 onwards", title: "Free Time", venue: "any", clothes: "any"}
  ], [
    { time: "from 6:30", title: "Breakfast", venue: "Hotel", clothes: "Uniform / Formal \n/ Smart Casual"}, 
    { 
      time: "9:00 - 12:00", 
      title: "Examination: Round 2", 
      venue: "Chulabhorn Conference Room, \nSyamindra Building, 2nd floor", 
      clothes: "Uniform / Formal \n/ Smart Casual"
    }, 
    { 
      time: "11:30 - 13:30", 
      title: "Lunch", 
      venue: "Srisavarindhira Building, \n2nd & 3rd Floor", 
      clothes: "Uniform / Formal \n/ Smart Casual"
    }, 
    { 
      time: "14:00 - 17:00", 
      title: "Examination: Round 3", 
      venue: "Rajabhanada Sirinthorn Meeting Room, \nSrisavarindhira Building", 
      clothes: "Uniform / Formal \n/ Smart Casual"
    }, 
    { 
      time: "18:00 - 21:00", 
      title: "After Party", 
      venue: "Rajapaethayalai Auditorium", 
      clothes: "Uniform / Formal \n/ Smart Casual"
    } 
  ], 
  [
    { time: "from 6:00", title: "Breakfast", venue: "Hotel", clothes: "SIMPIC 2024 T-shirt \nwith trousers"},
    { time: "7:15", title: "Gathering for Cultural Excursion", venue: "Hotel", clothes: "SIMPIC 2024 T-shirt \nwith trousers"},
    { 
      time: "7:30 - 14:15", 
      title: "Cultural Excursion", 
      venue: "Depends on each excursion route", 
      clothes: "SIMPIC 2024 T-shirt \nwith trousers"
    },
    {
      time: "14:30", 
      title: "Gathering for Closing Ceremony", 
      venue: "Rajabhanada Sirinthorn Meeting Room, \nSrisavarindhira Building", 
      clothes: "SIMPIC 2024 T-shirt \nwith trousers"
    }, 
    {
      time: "14:45 - 16:00", 
      title: "Closing Ceremony", 
      venue: "Rajabhanada Sirinthorn Meeting Room, \nSrisavarindhira Building", 
      clothes: "SIMPIC 2024 T-shirt \nwith trousers"
    },
    { time: "16:00 onwards", title: "Departure", venue: "back home", clothes: "any"}
  ]
]
