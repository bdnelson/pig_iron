require 'test_helper'

class StartupNamespaceTest < Minitest::Test
  def test_startup_namespace_basic
    obj = StartupNamespace.new("static", "test_livereload")
    assert_equal "static.test_livereload", obj.generate
  end

  def test_startup_namespace_does_not_singularize_actions
    obj = StartupNamespace.new("static", "things")
    assert_equal "static.things", obj.generate
  end

  def test_startup_namespace_show
    obj = StartupNamespace.new("apples", "show")
    assert_equal "apple.show", obj.generate
  end

  def test_startup_namespace_renames_create
    obj = StartupNamespace.new("apples", "create")
    assert_equal "apple.new", obj.generate
  end

  def test_startup_namespace_new
    obj = StartupNamespace.new("apples", "new")
    assert_equal "apple.new", obj.generate
  end

  def test_startup_namespace_edit
    obj = StartupNamespace.new("apples", "edit")
    assert_equal "apple.edit", obj.generate
  end

  def test_startup_namespace_renames_update
    obj = StartupNamespace.new("apples", "update")
    assert_equal "apple.edit", obj.generate
  end

  def test_startup_namespace_does_not_singularize_namespaces
    obj = StartupNamespace.new("fruits/apples", "index")
    assert_equal "fruits.apple.index", obj.generate
  end
end
