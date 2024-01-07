## Project 3
#### NFL Football Stats for Better Betting Outcomes

## Description
Sports betting has skyrocketed since 2018 when the U.S. Supreme Court struck down the PASPA Act of 1992- which now means individual states can legalize sports betting activities.
Currently, there are 4 companies that dominate the market, controlling about 90% of the industry. In July of 2018, Forbes reported that 29 of the NFL's 32 teams are included in their list of the 50 most valuable sports franchises in the world. The NFL was founded in 1920, and currently there is $11 billion dollars generated in revenue from online gambling. 

Types of Betting Data Analyzed:

Moneyline: A moneyline is simply a bet type that only includes odds, as in “odds to win”.
Example: a moneyline of +150, is just +150 odds ($100 to win $150) for the listed team to win.
A moneyline of -150 is just -150 odds ($150 to win $100) for the listed team to win.

Spreads: The point spread is the expected final score difference between two teams.
It is represented as both a negative and positive number; if the spread is 3 points, you'll see that as both -3 and +3.
The team that is the favorite to win gets the minus-number (-3); the underdog gets the plus-number (+3).

Over/Under: A bet on whether a specific statistic for a game will be higher or lower than a quoted value.
This type of bet is also known as a total bet.
The most common type of over-under bet is on the combined score of two teams in a match.

## Data Visualization Process Summary
Project Overview: We were working on the NFL data visualization project using a set of HTML, JavaScript, and JSON files. Our goal was to create an interactive dashboard displaying various NFL statistics in chart form.

File Structure and Review: We created structure for the project, which included an index.html file, a static/js folder with app.js, and a json-files folder with JSON data files. We sought TA assistance with integrating these components.


Dashboard Functionality: We discussed implementing functionality for dynamically displaying charts based on user interaction with a dropdown menu. The charts include "Overs", "Unders", "Covers", "Non-Covers", "Moneyline Wins", and "Moneyline Losses".


Coding Guidance: Kacy provided detailed guidance and complete code blocks for both index.html and app.js. This included JavaScript functions to fetch and process data, create charts using Chart.js, and handle dropdown menu selections.
Troubleshooting and Refinement: We went through several iterations to refine the functionality, addressing issues such as charts not displaying correctly, managing canvas visibility, and ensuring the dropdown menu properly switched between different chart types. We also improved the chart coloring & made them look more cohesive in color scheme.


Final Deployment: We researched about deploying the project to GitHub Pages. We meticulously followed step-by-step instructions for deploying the project on GitHub Pages, ensuring the interactive dashboard is accessible online. As a group we individually opened the link, clearing our machine’s cache as needed to access the site. 


Our team strategically divided into specialized sub-committees to complete tasks more efficiently & ensure we were meeting all of the project’s requirements. Kacy and Christian fetched, cleaned and consolidated the original data. Mallorie and Christian diligently utilized Jupyter Notebook and Python to meticulously analyze and interpret the data. They passed that data on to Kacy, Jonathan, and Tye who collaborated effectively to transform HTML and JavaScript into a dynamic, interactive dashboard. Concurrently, Kirby and Mallorie concentrated on project management, showcasing our team's progress, presentation creation, code troubleshooting, and creation of the Readme file. 

## Table of Contents

To access our data visualization, visit https://christian-a-smith.github.io/NFLproject/

The cleaned csv files can be found in the database-files folders within the main branch. The csv files included in this folder are cleaned_moneylines.csv, cleaned_overunder.csv, cleaned_seasonstats.csv, and cleaned_spreads.csv. The database-files directory also contains the clean_csv_files_sql.sql and initialize_csv_sql.sql files. 

Our json files are contained in the ‘json-files’ directory. These include the modified_covers.json, modified_moneyline_losses.json, modified_moneyline_wins.json, modified_non_covers.json, modified_overs.json, and modified_unders_df.json files. 

The python-files’ directory contains the ‘.ipynb_checkpoints’ directory. This contains our python code checkpoints file ‘python_code-checkpoint.ipynb and python_code.ipynb file.

The README.md file is located on the main directory on our github ‘NFLproject’ repo.

## Installation Instructions
Code utilized for this challenge can be found in the files within the main directory on our github ‘NFLproject’ repo.

## Usage
Can Git Clone all files from our ‘NFLproject’ repo.

## Credits
For this challenge we utilized Google, YouTube, Stack Overflow, TA assistance, Canva, and educational resources related to the unit provided by the bootcamp.

## License
Data extracted and analyzed for this analysis came from https://www.pro-football-reference.com/years/2023/games.htm and https://www.sportsbookreview.com/picks/nfl/week-1-odds/

Information gathered related to the NFL and betting came from: 
https://www.tastylive.com/news-insights/sports-gambling-trading-on-america-s-addiction-to-the-nfl and https://www.forbes.com/sites/forbespr/2018/07/18/forbes-releases-2018-list-of-the-worlds-most-valuable-sports-teams/?sh=2ed697775ff8
