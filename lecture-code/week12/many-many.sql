-- notes from lecture on Tuesday March 1st, 2022

CREATE TABLE "human" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50)
);

INSERT INTO "human" ("name") VALUES ('Koffi'), ('Liz'), ('Brant'), ('Drew'), ('Andy');

SELECT * FROM "human";

CREATE TABLE "hobby" (
  "id" SERIAL PRIMARY KEY,
  "description" VARCHAR(100)
);

INSERT INTO "hobby" ("description")
VALUES ('kayaking'), ('drawing'), ('duct tape crafts'), ('Tech Deck kick flips'), ('cardboard and paper crafts'), ('widdling'), ('coding');

CREATE TABLE "human_hobby" (
  "id" SERIAL PRIMARY KEY,
  "human_id" INT REFERENCES "human",
  "hobby_id" INT REFERENCES "hobby",
  "skill" INT
);

INSERT INTO "human_hobby" ("human_id", "hobby_id", "skill")
VALUES (5, 2, 3), (5, 3, 2), (5, 5, 5),
(4, 4, 2), (4, 5, 2), (2, 7, 1), (2, 6, 3),
(3, 2, 2), (3, 6, 1), (3, 5, 3), (1, 7, 2);

SELECT "human"."name", "hobby"."description" AS "fun thing"
FROM "human" 
JOIN "human_hobby" ON "human"."id" = "human_hobby"."human_id"
JOIN "hobby" ON "human_hobby"."hobby_id" = "hobby"."id"
WHERE "human"."name" = 'Brant';

SELECT count(*) AS "humans" FROM "human";

SELECT MIN("skill") FROM "human_hobby";

SELECT MAX("skill") FROM "human_hobby";

SELECT ROUND(AVG("skill")), "human"."name" 
FROM "human_hobby"
JOIN "human" ON "human"."id" = "human_hobby"."human_id"
GROUP BY "human"."name";


SELECT SUM("skill") FROM "human_hobby";

SELECT "hobby"."description", count("human_hobby"."hobby_id") AS "the count"
FROM "hobby"
JOIN "human_hobby" ON "hobby"."id" = "human_hobby"."hobby_id" 
GROUP BY "hobby"."description"
ORDER BY "the count";

SELECT SUM("human_hobby"."skill"), "human"."name"
FROM "human_hobby" 
JOIN "human" ON "human_hobby"."human_id" = "human"."id"
GROUP BY "human"."name"
ORDER BY "sum" ;


