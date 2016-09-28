source 'https://rubygems.org'
ruby '2.3.1'

# Environment
gem 'dotenv-rails',            '~> 2.1.1', require: 'dotenv/rails-now'
gem 'rails',                   '~> 5.0.0', '>= 5.0.0.1'
gem 'puma',                    '~> 3.6.0'

# Data Store
gem 'pg',                      '~> 0.19.0'
gem 'sqlite3',                 '~> 1.3.11'
gem 'redis',                   '~> 3.3.1'

# Data Layer Additions
gem 'bcrypt',                  '~> 3.1.7'
gem 'paranoia',                '~> 2.2.0.pre'
gem 'paper_trail',             '~> 5.2.2'
gem 'kaminari',                '~> 0.16.2'
gem 'redis-objects',           '~> 1.2.1'
gem 'geokit-rails',            '~> 2.2.0'

# Background
gem 'sidekiq',                 '~> 4.2.1'
gem 'whenever',                '~> 0.9.7', require: false
gem 'seed-fu',                 '~> 2.3.6'

# UI
gem 'sass-rails',              '~> 5.0.6'
gem 'uglifier',                '~> 3.0.2'
gem 'jquery-rails',            '~> 4.2.1'
gem 'turbolinks',              '~> 5.0.1'
gem 'jbuilder',                '~> 2.6.0'
gem 'draper',                  '~> 3.0.0-pre1'
gem 'breadcrumbs_on_rails',    '~> 3.0.1'

# Deployment
group :development do
  gem 'capistrano-rails',      '~> 1.1.8'
  gem 'capistrano-rbenv',      '~> 2.0.4'
end

# Platform specific
gem 'tzinfo-data',             '~> 1.2.2', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Development/Test
group :test do
  gem 'single_cov',            '~> 0.5.2'
  gem 'capybara_minitest_spec','~> 1.0.5'
  gem 'poltergeist',           '~> 1.10.0'
  gem 'fakeredis',             '~> 0.6.0', require: 'fakeredis/minitest'
  gem 'mocha',                 '~> 1.1.0'
  gem 'timecop',               '~> 0.8.1'
end

group :development, :test do
  gem 'fabrication',           '~> 2.5.1'
  gem 'byebug',                '~> 9.0.5', platform: :mri
  gem 'rails-flog',            '1.3.3', require: 'flog'
  gem 'factory_girl_rails',    '~> 4.0'
  gem 'rspec-rails',           '~> 3.5'
end

group :development do
  gem 'awesome_print',         '~> 1.7.0'
  gem 'pry-rails',             '~> 0.3.4'
  gem 'pry-remote'
  gem 'pry-rescue'
  gem 'pry-stack_explorer'
  gem 'listen',                '~> 3.0.5'
  gem 'spring',                '~> 1.7.2'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'meta_request',          '~> 0.4.0'
  gem 'better_errors',         '~> 2.1.1'
  gem 'binding_of_caller',     '~> 0.7.2'
  gem 'rack-livereload',       '~> 0.3.16'
  gem 'guard',                 '~> 2.14.0'
  gem 'guard-livereload',      '~> 2.5.2', require: false
  gem 'guard-ctags-bundler',   '~> 1.4.0'
  gem 'guard-bundler',         '~> 2.1.0', require: false
  gem 'guard-rspec'
  gem 'reek',                  '~> 4.4.2'
  gem 'rails_best_practices',  '~> 1.17.0'
  gem 'brakeman',              '~> 3.4.0'
end

