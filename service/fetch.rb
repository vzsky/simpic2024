require "mongo"
require "csv"

def getUserinfo (userinfo) 
  if (!userinfo) then 
    userinfo = {}
  end
  return {
    submit: userinfo["submit"],
    fname: userinfo["fname"],
    lname: userinfo["lname"],
    nname: userinfo["nname"],
    nationality: userinfo["nationality"],
    natId: userinfo["natId"],
    birthday: userinfo["birthday"],
    sex: userinfo["sex"],
    gender: userinfo["gender"],
    email: userinfo["email"],
    phone: userinfo["phone"],
    telegram: userinfo["phone"],
    line: userinfo["line"],
    whatapps: userinfo["whatapps"],
    instagram: userinfo["instagram"],
    facebook: userinfo["facebook"],
    emergencyName: userinfo["emergencyName"],
    emergencyPhone: userinfo["emergencyPhone"],
    medCond: userinfo["medCond"],
    medRequire: userinfo["medRequire"],
    allergy: userinfo["allergy"],
    dietary: userinfo["dietary"],
    seasick: userinfo["seasick"],
    carsick: userinfo["carsick"],
    religion: userinfo["religion"],
    other: userinfo["other"],
  }
end 

client = Mongo::Client.new(ENV["MONGOURI"], :database => "test")
$users = client[:users]
$teams = client[:teams]

def teamIndex (id)
  $teams.find.map{|team| team["_id"]}.find_index(id)
end

result = $users.find
  .map{ |user| {
    role: user["as"],
    userid: user["email"],

    observer_submit: user["observer"] ? user["observer"]["submit"] : nil,
    observer_org: user["observer"] ? user["observer"]["organization"] : nil,
    observer_checkin: user["observer"] ? user["observer"]["checkin"] : nil, 
    observer_exc1: user["observer"] ? user["observer"]["excursion1"] : nil,
    observer_exc2: user["observer"] ? user["observer"]["excursion2"] : nil,
    observer_exc3: user["observer"] ? user["observer"]["excursion3"] : nil,
    observer_exc4: user["observer"] ? user["observer"]["excursion4"] : nil,

    teams: user["teams"] ? user["teams"].map{|team| teamIndex(team)} : nil,
  }.merge(getUserinfo(user["userinfo"]))}

headers = result[0].keys
path = 'users.csv'
CSV.open(path, 'w', headers: headers, write_headers: true) do |csv|
  result.each { |row| csv << row.values }
end


result = $teams.find
  .map{ |team| {
    id: teamIndex(team["_id"]),
    team_submit: team["info"] ? team["info"]["submit"] : nil,

    team_school: team["info"] ? team["info"]["school"] : nil,
    team_address: team["info"] ? team["info"]["address"] : nil,
    team_contactname: team["info"] ? team["info"]["contactname"] : nil,
    team_contactemail: team["info"] ? team["info"]["contactemail"] : nil,
    team_checkin: team["info"] ? team["info"]["checkin"] : nil,
    team_room: team["info"] ? team["info"]["room"] : nil,
    team_excursion1: team["info"] ? team["info"]["excursion1"] : nil,
    team_excursion2: team["info"] ? team["info"]["excursion2"] : nil,
    team_excursion3: team["info"] ? team["info"]["excursion3"] : nil,
    team_excursion4: team["info"] ? team["info"]["excursion4"] : nil 
  }
    .merge(getUserinfo(team["contestant1"]).transform_keys{|key| ('c1_' + key.to_s).to_sym })
    .merge(getUserinfo(team["contestant2"]).transform_keys{|key| ('c2_' + key.to_s).to_sym })
    .merge(getUserinfo(team["contestant3"]).transform_keys{|key| ('c3_' + key.to_s).to_sym })
  }

headers = result[0].keys
path = 'teams.csv'
CSV.open(path, 'w', headers: headers, write_headers: true) do |csv|
  result.each {|row| csv << row.values }
end
