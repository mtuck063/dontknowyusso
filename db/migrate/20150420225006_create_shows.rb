class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.date :show_date
      t.time :show_time
      t.string :location
      t.string :title

      t.timestamps null: false
    end
  end
end
