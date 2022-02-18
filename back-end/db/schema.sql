DROP DATABASE IF EXISTS keyboards_dev;
CREATE DATABASE keyboards_dev;

\c keyboards_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price NUMERIC,
    rating NUMERIC,
    CHECK (rating >=0 AND rating <=5),
    featured BOOLEAN
    -- color TEXT,
    -- layout TEXT,
    -- connectivity TEXT,
    -- winkeyless BOOLEAN,
);
