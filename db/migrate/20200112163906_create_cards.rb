class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.text :description
      t.date :due_date
      t.integer :list_id, null: false
      t.integer :order, null: false
      t.timestamps
    end

     add_index :cards, [:order, :list_id], unique: true

    add_index :cards, :list_id

  end
end
