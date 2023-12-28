--Drop tables if exists
DROP TABLE IF EXISTS spreads;
DROP TABLE IF EXISTS overunder;
DROP TABLE IF EXISTS moneylines;
DROP TABLE IF EXISTS seasonstats;

--Create tables
Create table spreads (
Game VARCHAR,
Spread VARCHAR);

Create table overunder (
Game VARCHAR,
OverUnder VARCHAR);

Create table moneylines (
Game VARCHAR,
Moneyline VARCHAR);

Create table seasonstats (
week int,
day VARCHAR,
date VARCHAR,
time VARCHAR,
winner_or_tie VARCHAR,
home_or_away VARCHAR,
lose_or_tie VARCHAR,
boxscore VARCHAR,
PtsW int,
PtsL int,
YdsW int,
TOW int,
YdsL int,
TOL int
);