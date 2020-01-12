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

    list_1 = List.create!({title: "To Do", board_id: 1, order: 1})
    list_2 = List.create!({title: "In Progress", board_id: 1, order: 2})
    list_3 = List.create!({title: "Done", board_id: 1, order: 3})
    
    list_4 = List.create!({title: "To Do", board_id: 2, order: 1})
    list_5 = List.create!({title: "In Progress", board_id: 2, order: 2})
    list_6 = List.create!({title: "Done", board_id: 2, order: 3})

    list_7 = List.create!({title: "To Do", board_id: 3, order: 1})
    list_8 = List.create!({title: "In Progress", board_id: 3, order: 2})
    list_9 = List.create!({title: "Done", board_id: 3, order: 3})

    list_10 = List.create!({title: "To Do", board_id: 4, order: 1})
    list_11 = List.create!({title: "In Progress", board_id: 4, order: 2})
    list_12 = List.create!({title: "Done", board_id: 4, order: 3})

    list_13 = List.create!({title: "To Do", board_id: 5, order: 1})
    list_14 = List.create!({title: "In Progress", board_id: 5, order: 2})
    list_15 = List.create!({title: "Done", board_id: 5, order: 3})

    card_1 = Card.create!({title: "rescue child from Dr. Pershing's laboratory", list_id: list_3.id, order: 1 })
    card_2 = Card.create!({title: "return the child to its home", list_id: list_1.id, order: 1})
    card_3 = Card.create!({title: "keep the child safe", list_id: list_2.id, order: 1})
    card_4 = Card.create!({title: "figure out why the child is so special", list_id: list_1.id, order: 2})
    
    card_5 = Card.create!({title: "the child", description: "50 years old", list_id: list_5.id, order: 1})
    card_6 = Card.create!({title: "Mythrol", list_id: list_6.id, order: 1})
    card_7 = Card.create!({title: "Amon Zarander", list_id: list_6.id, order: 2})
    card_8 = Card.create!({title: "Karesh Carn", list_id: list_6.id, order: 3})
    card_9 = Card.create!({title: "Voka Korr", list_id: list_6.id, order: 4})
    card_10 = Card.create!({title: "Gaff Qorbin", list_id: list_6.id, order: 5})

    card_11 = Card.create!({title: "get parts back from the Jawas", list_id: list_12.id, order: 2})
    card_12 = Card.create!({title: "drop off with Peli Motto for repairs" , list_id: list_12.id, order: 1})
    card_13 = Card.create!({title: "restock supplies", list_id: list_10.id, order: 1})
    card_14 = Card.create!({title: "dust", list_id: list_11.id, order: 1})
    card_15 = Card.create!({title: "child proof", list_id: list_10.id, order: 2})

end