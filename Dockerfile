FROM ruby:3.4.1-slim-bookworm

ENV TZ=America/New_York
ENV JEKYLL_ENV=production
ENV JEKYLL_CACHE_DIR=/tmp/.jekyll-cache
ENV BUNDLE_PATH=/usr/local/bundle

WORKDIR /code

RUN apt-get update \
	&& apt-get install --no-install-recommends -y build-essential git \
	&& rm -rf /var/lib/apt/lists/* \
	&& gem install bundler --version 2.6.9

COPY Gemfile* ./
RUN bundle config set --local deployment true \
	&& bundle install --jobs 2 --retry 3

COPY . /code
