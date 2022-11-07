CREATE TABLE dragon (
    id              SERIAL PRIMARY KEY,
    birthday        TIMESTAMP NO NULL,
    nickname        VARCHAR(64),
    "generationId"    INTEGER,
    FOREIGN KEY ("generationId") REFERENCES generation(id)
);