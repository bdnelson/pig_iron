class StaticController < ApplicationController
  def test_exception
    raise "BOOM BOOM"
  end

  def test_livereload
  end
end
