require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
  test "startup_namespace_returns_a_namespace" do
    result = startup_namespace("static", "test_livereload")
    assert_equal "static.test_livereload", result
    result = startup_namespace("apples", "edit")
    assert_equal "apple.edit", result
    result = startup_namespace("fruits/apples", "index")
    assert_equal "fruits.apple.index", result
  end
end
