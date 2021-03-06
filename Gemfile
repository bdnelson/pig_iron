source 'https://rubygems.org'
ruby '2.3.1'

# Environment
gem 'dotenv-rails',            '~> 2.1.1', require: 'dotenv/rails-now'
gem 'rails',                   '~> 5.0.0.1', '>= 5.0.0.1'
gem 'puma',                    '~> 3.6.0'
gem 'json',                    '~> 2.0.2'

# Data Store
gem 'pg',                      '~> 0.19.0'
gem 'sqlite3',                 '~> 1.3.12'
gem 'redis',                   '~> 3.3.1'

# Data Layer Additions
gem 'bcrypt',                  '~> 3.1.11'
gem 'paranoia',                '~> 2.2.0'
gem 'paper_trail',             '~> 5.2.2'
gem 'kaminari',                '~> 0.17.0'
gem 'redis-objects',           '~> 1.2.1'
gem 'geokit-rails',            '~> 2.2.0'

# Background
gem 'sidekiq',                 '~> 4.2.5'
gem 'whenever',                '~> 0.9.7', require: false
gem 'seed-fu',                 '~> 2.3.6'
gem 'paperclip',               '~> 5.1.0'
gem 'active_model_serializers','~> 0.10.2'
gem 'virtus',                  '~> 1.0.5'

# UI
gem 'sass-rails',              '~> 5.0.6'
gem 'uglifier',                '~> 3.0.3'
gem 'jquery-rails',            '~> 4.2.1'
gem 'turbolinks',              '~> 5.0.1'
gem 'jbuilder',                '~> 2.6.0'
gem 'draper',                  '~> 3.0.0.pre1'
gem 'breadcrumbs_on_rails',    '~> 3.0.1'

# Authentication/Authorization
#gem 'omniauth',                '~> 1.3.1'
#gem 'devise',                  '~> 4.2.0'
#gem 'cancancan',               '~> 1.15.0'
#gem 'devise-two-factor',       '~> 3.0.0'
#gem 'devise_token_auth',       '~> 0.1.39'
#gem 'jwt',                     '~> 1.5.6'

# API
#gem 'rack-attack',              '~> 5.0.1'

# Javascript Dependencies
source 'https://rails-assets.org' do
  #gem 'rails-assets-leaflet',  '~> 1.0.0'
end

# Deployment
group :development do
  gem 'autoprefixer-rails',    '~> 6.5.2'
  gem 'capistrano-rails',      '~> 1.2.0'
  gem 'capistrano-rbenv',      '~> 2.0.4'
end

# Monitoring
gem 'skylight',              '~> 1.0.0'
gem 'rollbar',               '~> 2.13.3'

# Platform specific
gem 'tzinfo-data',             '~> 1.2.2', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Development/Test
group :test do
  gem 'single_cov',            '~> 0.5.6'
  gem 'poltergeist',           '~> 1.11.0'
  gem 'fakeredis',             '~> 0.6.0', require: 'fakeredis/rspec'
  gem 'mocha',                 '~> 1.2.1'
  gem 'timecop',               '~> 0.8.1'
end

group :development, :test do
  gem 'byebug',                '~> 9.0.6', platform: :mri
  gem 'rails-flog',            '~> 1.3.3', require: false
  gem 'factory_girl_rails',    '~> 4.7.0'
  gem 'rspec-rails',           '~> 3.5.2'
  gem 'simplecov',             '~> 0.12.0', require: false
end

group :development do
  gem 'awesome_print',         '~> 1.7.0'
  gem 'pry-rails',             '~> 0.3.4'
  gem 'pry-remote',            '~> 0.1.8'
  gem 'pry-rescue',            '~> 1.4.4'
  gem 'pry-stack_explorer',    '~> 0.4.9.2'
  gem 'listen',                '~> 3.1.5'
  gem 'spring',                '~> 2.0.0'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'meta_request',          '~> 0.4.0'
  gem 'better_errors',         '~> 2.1.1'
  gem 'binding_of_caller',     '~> 0.7.2'
  gem 'rack-livereload',       '~> 0.3.16'
  gem 'guard',                 '~> 2.14.0'
  gem 'guard-livereload',      '~> 2.5.2', require: false
  gem 'guard-ctags-bundler',   '~> 1.4.0'
  gem 'guard-bundler',         '~> 2.1.0', require: false
  gem 'guard-rspec',           '~> 4.7.3'
  gem 'reek',                  '~> 4.5.2'
  gem 'rails_best_practices',  '~> 1.17.0'
  gem 'brakeman',              '~> 3.4.1'
  gem 'letter_opener',         '~> 1.4.1'
  gem 'pessimize',             '~> 0.3.0'
end

