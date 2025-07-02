FROM jekyll/jekyll:4

ENV TZ=America/New_York
ENV JEKYLL_ENV=production

WORKDIR /code

COPY Gemfile* ./
RUN bundle install

COPY . /code

# Build Jekyll site during container build
RUN jekyll build --config _config.yml
