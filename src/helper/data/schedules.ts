export const selectCheckin = [
  { value: '17', label: '17 Jan 2024' },   
  { value: '18', label: '18 Jan 2024' }, 
]

export type Schedule = {
  time: string 
  title: string
  venue: string
  clothes: string
}

export const schedules: Schedule[][] = [
  [
    { time: "13.00 onwards", title: "Arrival and Check-in", venue: "S.D. Avenue Hotel", clothes: "Casual"}
  ], [
    { time: "from 6.30", title: "Breakfast", venue: "S.D. Avenue Hotel", clothes: "Uniform / Formal"},
    {
      time: "9:00 - 12:30", 
      title: "Arrival and Registration", 
      venue: "Rajapanadda Sirindhorn Auditorium, \n1st floor, Sriravarindhira Building", 
      clothes: "Uniform / Formal"
    },
    {
      time: "11:00 - 13:00", 
      title: "Lunch", 
      venue: "Rajapaethayalai Auditorium", 
      clothes: "Uniform / Formal"
    },
    {
      time: "12:45", 
      title: "Gathering for Opening Ceremony", 
      venue: "Rajapanadda Sirindhorn Auditorium, \n1st floor, Sriravarindhira Building", 
      clothes: "Uniform / Formal"
    },
    {
      time: "13:00 - 14:30", 
      title: "Opening Ceremony", 
      venue: "Rajapanadda Sirindhorn Auditorium, \n1st floor, Sriravarindhira Building", 
      clothes: "Uniform / Formal"
    },
    {
      time: "14:30 - 14:45", 
      title: "Briefing on SIMPIC 2024", 
      venue: "Rajapanadda Sirindhorn Auditorium, \n1st floor, Sriravarindhira Building", 
      clothes: "Uniform / Formal"
    },
    {
      time: "15:00 - 18:00", 
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
    { time: "from 6:30", title: "Breakfast", venue: "S.D. Avenue Hotel", clothes: "Uniform / Formal"}, 
    { 
      time: "9:00 - 12:00", 
      title: "Examination: Round 1", 
      venue: "Srisavarindhira Building",
      clothes: "Uniform / Formal"
    },
    { 
      time: "11:30 - 13:30", 
      title: "Lunch", 
      venue: "Srisavarindhira Building",
      clothes: "Uniform / Formal"
    }, 
    { time: "13:30 onwards", title: "Free Time", venue: "any", clothes: "any"}
  ], [
    { time: "from 6:30", title: "Breakfast", venue: "S.D. Avenue Hotel", clothes: "Uniform / Formal \n/ Smart Casual"}, 
    { 
      time: "9:00 - 11:30", 
      title: "Examination: Round 2", 
      venue: "Sirindhorn Conference Room", 
      clothes: "Uniform / Formal \n/ Smart Casual"
    }, 
    { 
      time: "11:30 - 13:30", 
      title: "Lunch", 
      venue: "Srisavarindhira Building",
      clothes: "Uniform / Formal \n/ Smart Casual"
    }, 
    { 
      time: "14:00 - 17:00", 
      title: "Examination: Round 3", 
      venue: "Rajapanadda Sirindhorn Auditorium, \n1st floor, Sriravarindhira Building", 
      clothes: "Uniform / Formal \n/ Smart Casual"
    }, 
    { 
      time: "18:00 - 21:00", 
      title: "Night Party", 
      venue: "Rajapaethayalai Auditorium", 
      clothes: "Uniform / Formal \n/ Smart Casual"
    } 
  ], 
  [
    { time: "from 6:00", title: "Breakfast", venue: "S.D. Avenue Hotel", clothes: "SIMPIC 2024 T-shirt \nwith trousers"},
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
      venue: "Rajapanadda Sirindhorn Auditorium, \n1st floor, Sriravarindhira Building", 
      clothes: "SIMPIC 2024 T-shirt \nwith trousers"
    }, 
    {
      time: "14:45 - 16:00", 
      title: "Closing Ceremony", 
      venue: "Rajabhanada Sirinthorn Auditorium, 1st floor, \nSrisavarindhira Building", 
      clothes: "SIMPIC 2024 T-shirt \nwith trousers"
    },
    { time: "16:00 onwards", title: "Departure", venue: "back home", clothes: "any"}
  ]
]
