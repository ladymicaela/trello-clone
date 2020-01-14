# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ApplicationRecord.transaction do

    User.destroy_all
    Board.destroy_all
    BoardMembership.destroy_all
    List.destroy_all
    Card.destroy_all

    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('boards')
    ApplicationRecord.connection.reset_pk_sequence!('board_memberships')
    ApplicationRecord.connection.reset_pk_sequence!('lists')
    ApplicationRecord.connection.reset_pk_sequence!('cards')

    mando = User.create!({email: "DinDjarin@mandalorian.com", username: "Mando", password: "password"})
    greef = User.create!({email: "GreefKarga@theguild.com", username: "Karga", password: "password"})
    cara = User.create!({email: "CaraDune@mercenary.com", username: "Cara", password: "password"})
    baby = User.create!({email: "BabyYoda@forcebewithyou.com", username: "Baby Yoda", password: "password"})
    armorer = User.create!({email: "Armorer@mandalorian.com", username: "Armorer", password: "password"})


    board_1 = Board.create!({title: "The Child", creator_id: mando.id})
    board_2 = Board.create!({title: "Bounties", creator_id: mando.id})
    board_3 = Board.create!({title: "The Guild", creator_id: greef.id})
    board_4 = Board.create!({title: "The Razor Crest", creator_id: mando.id})
    board_5 = Board.create!({title: "This Is The Way", creator_id: armorer.id})

    board_membership_1 = BoardMembership.create!({member_id: mando.id, board_id: board_3.id})
    board_membership_2 = BoardMembership.create!({member_id: baby.id, board_id: board_1.id})
    board_membership_3 = BoardMembership.create!({member_id: cara.id, board_id: board_1.id})
    board_membership_4 = BoardMembership.create!({member_id: greef.id, board_id: board_1.id})
    board_membership_5 = BoardMembership.create!({member_id: greef.id, board_id: board_2.id})
    board_membership_6 = BoardMembership.create!({member_id: mando.id, board_id: board_5.id})
    board_membership_7 = BoardMembership.create!({member_id: mando.id, board_id: board_1.id})
    board_membership_8 = BoardMembership.create!({member_id: mando.id, board_id: board_2.id})
    board_membership_9 = BoardMembership.create!({member_id: greef.id, board_id: board_3.id})
    board_membership_10 = BoardMembership.create!({member_id: mando.id, board_id: board_4.id})
    board_membership_11 = BoardMembership.create!({member_id: armorer.id, board_id: board_5.id})

    list_1 = List.create!({title: "To Do", board_id: board_1.id, order: 1})
    list_2 = List.create!({title: "In Progress", board_id: board_1.id, order: 2})
    list_3 = List.create!({title: "Done", board_id: board_1.id, order: 3})
    
    list_4 = List.create!({title: "To Do", board_id: board_2.id, order: 1})
    list_5 = List.create!({title: "In Progress", board_id: board_2.id, order: 2})
    list_6 = List.create!({title: "Done", board_id: board_2.id, order: 3})

    list_7 = List.create!({title: "To Do", board_id: board_3.id, order: 1})
    list_8 = List.create!({title: "In Progress", board_id: board_3.id, order: 2})
    list_9 = List.create!({title: "Done", board_id: board_3.id, order: 3})

    list_10 = List.create!({title: "To Do", board_id: board_4.id, order: 1})
    list_11 = List.create!({title: "In Progress", board_id: board_4.id, order: 2})
    list_12 = List.create!({title: "Done", board_id: board_4.id, order: 3})

    list_13 = List.create!({title: "To Do", board_id: board_5.id, order: 1})
    list_14 = List.create!({title: "In Progress", board_id: board_5.id, order: 2})
    list_15 = List.create!({title: "Done", board_id: board_5.id, order: 3})

    card_1 = Card.create!({title:"return the child to its home", description: "first have to figure out where that is...", due_date: "2020-10-10", list_id:list_1.id,order:1})
    card_2 = Card.create!({title:"figure out why the child is so special", due_date: "2020-10-10", list_id:list_1.id,order:2})
    card_3 = Card.create!({title:"pick up diapers",description:"extra absorbent",list_id:list_1.id,order:3})
    card_4 = Card.create!({title:"discuss playground rules and force-choking", description: "do not want another incident like the one with Cara", list_id:list_1.id,order:4})
    card_5 = Card.create!({title:"keep the child safe", description: "this might prove difficult.. he seems to like to follow me around and never stays put when I tell him to", list_id:list_2.id,order:1})
    card_6 = Card.create!({title:"look into child-size beskar armor",description:"discuss with Armorer",list_id:list_2.id,order:2})
    card_7 = Card.create!({title:"stock up on bone broth soup and chicky nuggies",description:"don't forget bbq sauce",list_id:list_3.id,order:1})
    card_8 = Card.create!({title:"have Kuiil make new param",due_date:"2019-12-18",list_id:list_3.id,order:2})
    card_9 = Card.create!({title:"rescue child from Dr. Pershing's laboratory", description: "Get in. Rescue kid. Get out", due_date:"2019-11-22",list_id:list_3.id,order:3})
    card_10 = Card.create!({title:"get reinstated",list_id:list_4.id,order:1})
    card_11 = Card.create!({title:"the child",description:"50 years old",list_id:list_5.id,order:1})
    card_12 = Card.create!({title:"Mythrol", description: "I can bring you in warm... or I can bring you in cold", due_date:"2019-11-12",list_id:list_6.id,order:1})
    card_13 = Card.create!({title:"Amon Zarander", description: "I can bring you in warm... or I can bring you in cold", list_id:list_6.id,order:2})
    card_14 = Card.create!({title:"Karesh Carn", description: "I can bring you in warm... or I can bring you in cold", list_id:list_6.id,order:3})
    card_15 = Card.create!({title:"Voka Korr", description: "I can bring you in warm... or I can bring you in cold", list_id:list_6.id,order:4})
    card_16 = Card.create!({title: "Gaff Qorbin", description: "I can bring you in warm... or I can bring you in cold", list_id:list_6.id,order:5})
    card_17 = Card.create!({title:"Rebuild Nevarro",list_id:list_7.id,order:1})
    card_18 = Card.create!({title:"recruit new members for Q3", due_date: "2020-02-28", list_id:list_8.id,order:1})
    card_19 = Card.create!({title:"find Mando and the Child", due_date: "2019-12-18", list_id:list_9.id,order:1})
    card_20 = Card.create!({title:"recruit new members for Q2", due_date: "2019-10-05", list_id:list_9.id,order:2})
    card_21 = Card.create!({title:"recruit new members for Q1",due_date: "2019-05-07", list_id:list_9.id,order:3})
    card_22 = Card.create!({title:"restock supplies", description: "there are two of us now", list_id:list_10.id,order:1})
    card_23 = Card.create!({title:"child proof", description: "add locks on cabinets and hide sharp objects", list_id:list_10.id,order:2})
    card_24 = Card.create!({title:"change passcode to armory door",list_id:list_10.id,order:3})
    card_25 = Card.create!({title:"dust",list_id:list_11.id,order:1})
    card_26 = Card.create!({title:"find gear shift knob",description:"last seen in child's mouth",list_id:list_11.id,order:2})
    card_27 = Card.create!({title:"drop off with Peli Motto for repairs",due_date:"2019-12-06",list_id:list_12.id,order:1})
    card_28 = Card.create!({title:"get parts back from the Jawas",due_date:"2019-11-15",list_id:list_12.id,order:2})
    card_29 = Card.create!({title:"recruit more foundlings",list_id:list_13.id,order:1})
    card_30 = Card.create!({title:"train foundlings",list_id:list_13.id,order:2})
    card_31 = Card.create!({title:"repair secret base",list_id:list_13.id,order:3})
    card_32 = Card.create!({title:"aquire more beskar",list_id:list_14.id,order:1})
    card_33 = Card.create!({title:"protect secret base from Stormtroopers",list_id:list_14.id,order:2})
    card_34 = Card.create!({title:"repair Mando's armor",list_id:list_15.id,order:1})
    card_35 = Card.create!({title:"rescue Mando",due_date:"2019-11-22",list_id:list_15.id,order:2})

end


