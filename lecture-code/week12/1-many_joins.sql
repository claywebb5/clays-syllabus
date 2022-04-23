CREATE TABLE "person" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL
);

CREATE TABLE "social-security" (
  "id" SERIAL PRIMARY KEY,
  "person_id" INT REFERENCES "person",
  "number" INT NOT NULL
);

INSERT INTO "person" ("name") VALUES ('Koffi');
INSERT INTO "social-security" ("person_id", "number") VALUES (2, 12345);

SELECT * FROM "person"
JOIN "social-security" ON "person"."id" = "social-security"."person_id"
WHERE "person"."name" = 'Liz';








CREATE TABLE "cohort" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(25),
  "start_date" DATE
);

CREATE TABLE "student" (
  "id" SERIAL PRIMARY KEY,
  "cohort_id" INT REFERENCES "cohort",
  "name" VARCHAR(100) NOT NULL
);

INSERT INTO "cohort" ("name", "start_date") VALUES ('Adams', '11-29-2021');
INSERT INTO "cohort" ("name", "start_date") VALUES ('Butler', '02-28-2022'), ('Xi', '06-06-2016');

SELECT * FROM "cohort";
SELECT * FROM "student";

INSERT INTO "student" ("cohort_id", "name")
VALUES (1, 'Mark'), (1, 'Adam'), (2, 'Juliette'), (3, 'Liz');

SELECT count(*) FROM "student"
JOIN "cohort" ON "cohort"."id" = "student"."cohort_id"
WHERE "cohort"."name" = 'Adams';

SELECT count(*) as "studentssss" FROM "student"
JOIN "cohort" ON "cohort"."id" = "student"."cohort_id";

-- sum() adds selected fields together

SELECT "cohort"."name", count(*) FROM "student"
JOIN "cohort" ON "cohort"."id" = "student"."cohort_id"
GROUP BY "cohort"."name";
--ORDER BY "cohort"."name"; -- ASC default, or DESC

SELECT "cohort"."name" FROM "cohort"
JOIN "student" ON "cohort"."id" = "student"."cohort_id";

SELECT * FROM "cohort";

INSERT INTO "cohort" ("name") VALUES ('Woodall');

SELECT * FROM "cohort" FULL JOIN "student" on "cohort"."id" = "student"."cohort_id";

