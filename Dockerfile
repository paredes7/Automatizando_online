FROM php:8.3-cli-alpine

RUN apk add --no-cache \
    git unzip zip curl \
    libzip-dev oniguruma-dev \
    libpng-dev libjpeg-turbo-dev freetype-dev \
    libxml2-dev postgresql-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql pgsql zip mbstring xml gd

# Composer sin imagen extra
RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html

COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction

COPY . .

RUN php artisan package:discover --ansi

RUN if [ -f package.json ]; then npm ci && npm run build; fi

RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 8080
CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]
