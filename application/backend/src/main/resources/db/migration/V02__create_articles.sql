CREATE TABLE ARTICLE
(
    ID            bigserial,
    TITLE         TEXT,
    CATEGORY      TEXT,
    BODY          TEXT,
    CREATION_DATE TIMESTAMPTZ,
    COVER         TEXT
)