UPDATE article SET category = NULL;
ALTER TABLE article DROP IF EXISTS category;
ALTER TABLE article ADD COLUMN category bigint;