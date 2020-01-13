# == Schema Information
#
# Table name: cards
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  due_date    :date
#  list_id     :integer          not null
#  order       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ApplicationRecord

    validates :title, :list_id, :order, presence: true
    validates :order, uniqueness: { scope: :list_id }

    belongs_to :list,
        foreign_key: :list_id,
        class_name: 'List'

    # def set_order
    #     self.order ||= self.lists.cards.length
    # end

end
