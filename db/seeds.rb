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

    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('boards')
    ApplicationRecord.connection.reset_pk_sequence!('board_memberships')

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

end