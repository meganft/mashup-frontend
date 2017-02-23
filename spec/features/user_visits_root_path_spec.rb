require 'rails_helper'

describe "A user visits the root path" do
  it "and they see appropriate information" do
    visit root_path

    expect(page).to have_content("Cohort Index")
    expect(page).to have_content("Lunch Roulette")
    expect(page).to have_content("Custom Mashup")
  end
end
