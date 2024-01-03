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
winner_or_tie VARCHAR,
home_or_away VARCHAR,
lose_or_tie VARCHAR,
PtsW int,
PtsL int);