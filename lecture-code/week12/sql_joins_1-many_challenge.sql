-- Liz's answers to the homework

-- Instructions: Use a combination of aggregates, joins, 
-- limit and group by to complete the following SQL queries. 
-- Each query should have 10 or less rows as a result.

-- 1. Display the total number of countries in the country table.
SELECT COUNT(*) FROM "country";

-- 2. Display the entire world population (research SUM). 
SELECT SUM("population") FROM "country";

-- 3. Displays the name and population for the 10 countries with the highest population.
SELECT "name", "population" FROM "country" 
ORDER BY "population" DESC LIMIT 10;

-- 4. Displays the number of countries in each region.
SELECT "r"."name", COUNT(*) FROM "region" "r" 
JOIN "country" "c" ON "r"."id" = "c"."region_id" 
GROUP BY "r"."name";

-- 5. Displays the total population for each region.
-- SELECT "r"."name", SUM("c"."population") FROM "region" "r" 
-- JOIN "country" "c" ON "r"."id" = "c"."region_id" 
-- GROUP BY "r"."name";

SELECT "region"."name", SUM("country"."population") FROM "region" 
JOIN "country" ON "region"."id" = "country"."region_id" 
GROUP BY "region"."name";

-- 6. Display the name and sq km for the 10 countries with the most land area (sort by land area).
SELECT "c"."name", "l"."sq_km" FROM "land_area" "l" 
JOIN "country" "c" ON "l"."country_code" = "c"."country_code" 
ORDER BY "l"."sq_km" DESC LIMIT 10;

-- Stretch Mode

-- 7. Display the total land area for each region sorted by land area (requires two joins). 
SELECT "r"."name", SUM("l"."sq_km") FROM "land_area" "l" 
JOIN "country" "c" ON "l"."country_code" = "c"."country_code" 
JOIN "region" "r" ON "c"."region_id" = "r"."id" 
GROUP BY "r"."name" ORDER BY SUM("l"."sq_km") DESC LIMIT 10;

-- 8. Display the top 10 countries with the highest population density (greatest population per sq km).
SELECT "c"."name" FROM "country" "c" 
JOIN "land_area" "l" ON "c"."country_code" = "l"."country_code" 
ORDER BY "c"."population" / "l"."sq_km" DESC LIMIT 10;

-- 9. Display the population density for each region (sort by population density).
SELECT "r"."name", SUM("q"."population_density") "sum_population_density"
FROM 
  (SELECT "c"."name" "c_name", "c"."region_id" "c_region_id", 
  "c"."population" / "l"."sq_km" "population_density" 
  FROM "country" "c" 
  JOIN "land_area" "l" ON "c"."country_code" = "l"."country_code") "q" 
JOIN "region" "r" ON "q"."c_region_id" = "r"."id" 
GROUP BY "r"."name" ORDER BY "sum_population_density" DESC;

SELECT "r"."name", SUM("c"."population" / "l"."sq_km") "sum_population_density" 
FROM "country" "c" 
JOIN "land_area" "l" ON "c"."country_code" = "l"."country_code" 
JOIN "region" "r" ON "c"."region_id" = "r"."id" 
GROUP BY "r"."name" ORDER BY "sum_population_density" DESC;

-- 10. Display the population density for the 10 countries with the largest land area.
SELECT "c"."name" "c_name", "l"."sq_km", 
"c"."population" / "l"."sq_km" "population_density" 
FROM "country" "c" 
JOIN "land_area" "l" ON "c"."country_code" = "l"."country_code" 
ORDER BY "l"."sq_km" DESC LIMIT 10;