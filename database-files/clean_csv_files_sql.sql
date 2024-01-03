select * from moneylines;

select split_part(game, ' vs. ', 1) as away_team,
split_part(game, ' vs. ', 2) as home_team,
moneyline
into cleaned_moneylines
from moneylines;

alter table cleaned_moneylines
add primary key (away_team, home_team);

select * from cleaned_moneylines;

select * from overunder;

select split_part(game, ' vs. ', 1) as away_team,
split_part(game, ' vs. ', 2) as home_team,
overunder
into cleaned_overunder
from overunder;

alter table cleaned_overunder
add primary key (away_team, home_team);

select * from cleaned_overunder;
select * from spreads;

select split_part(game, ' vs. ', 1) as away_team,
split_part(game, ' vs. ', 2) as home_team,
spread
into cleaned_spreads
from spreads;

alter table cleaned_spreads
add primary key (away_team, home_team);

select * from cleaned_spreads;

select * from seasonstats;

delete from seasonstats where winner_or_tie is null;

UPDATE seasonstats
SET winner_or_tie = 
    CASE 
        WHEN winner_or_tie = 'Arizona Cardinals' THEN 'Cardinals'
        WHEN winner_or_tie = 'Atlanta Falcons' THEN 'Falcons'
        WHEN winner_or_tie = 'Baltimore Ravens' THEN 'Ravens'
        WHEN winner_or_tie = 'Buffalo Bills' THEN 'Bills'
        WHEN winner_or_tie = 'Carolina Panthers' THEN 'Panthers'
        WHEN winner_or_tie = 'Chicago Bears' THEN 'Bears'
        WHEN winner_or_tie = 'Cincinnati Bengals' THEN 'Bengals'
        WHEN winner_or_tie = 'Cleveland Browns' THEN 'Browns'
        WHEN winner_or_tie = 'Dallas Cowboys' THEN 'Cowboys'
        WHEN winner_or_tie = 'Denver Broncos' THEN 'Broncos'
        WHEN winner_or_tie = 'Detroit Lions' THEN 'Lions'
        WHEN winner_or_tie = 'Green Bay Packers' THEN 'Packers'
        WHEN winner_or_tie = 'Houston Texans' THEN 'Texans'
        WHEN winner_or_tie = 'Indianapolis Colts' THEN 'Colts'
        WHEN winner_or_tie = 'Jacksonville Jaguars' THEN 'Jaguars'
        WHEN winner_or_tie = 'Kansas City Chiefs' THEN 'Chiefs'
        WHEN winner_or_tie = 'Las Vegas Raiders' THEN 'Raiders'
        WHEN winner_or_tie = 'Los Angeles Chargers' THEN 'Chargers'
        WHEN winner_or_tie = 'Los Angeles Rams' THEN 'Rams'
        WHEN winner_or_tie = 'Miami Dolphins' THEN 'Dolphins'
        WHEN winner_or_tie = 'Minnesota Vikings' THEN 'Vikings'
        WHEN winner_or_tie = 'New England Patriots' THEN 'Patriots'
        WHEN winner_or_tie = 'New Orleans Saints' THEN 'Saints'
        WHEN winner_or_tie = 'New York Giants' THEN 'Giants'
        WHEN winner_or_tie = 'New York Jets' THEN 'Jets'
        WHEN winner_or_tie = 'Philadelphia Eagles' THEN 'Eagles'
        WHEN winner_or_tie = 'Pittsburgh Steelers' THEN 'Steelers'
        WHEN winner_or_tie = 'San Francisco 49ers' THEN '49ers'
        WHEN winner_or_tie = 'Seattle Seahawks' THEN 'Seahawks'
        WHEN winner_or_tie = 'Tampa Bay Buccaneers' THEN 'Buccaneers'
        WHEN winner_or_tie = 'Tennessee Titans' THEN 'Titans'
		WHEN winner_or_tie = 'Washington Commanders' THEN 'Commanders'
    END;
UPDATE seasonstats
SET lose_or_tie = 
    CASE 
        WHEN lose_or_tie = 'Arizona Cardinals' THEN 'Cardinals'
        WHEN lose_or_tie = 'Atlanta Falcons' THEN 'Falcons'
        WHEN lose_or_tie = 'Baltimore Ravens' THEN 'Ravens'
        WHEN lose_or_tie = 'Buffalo Bills' THEN 'Bills'
        WHEN lose_or_tie = 'Carolina Panthers' THEN 'Panthers'
        WHEN lose_or_tie = 'Chicago Bears' THEN 'Bears'
        WHEN lose_or_tie = 'Cincinnati Bengals' THEN 'Bengals'
        WHEN lose_or_tie = 'Cleveland Browns' THEN 'Browns'
        WHEN lose_or_tie = 'Dallas Cowboys' THEN 'Cowboys'
        WHEN lose_or_tie = 'Denver Broncos' THEN 'Broncos'
        WHEN lose_or_tie = 'Detroit Lions' THEN 'Lions'
        WHEN lose_or_tie = 'Green Bay Packers' THEN 'Packers'
        WHEN lose_or_tie = 'Houston Texans' THEN 'Texans'
        WHEN lose_or_tie = 'Indianapolis Colts' THEN 'Colts'
        WHEN lose_or_tie = 'Jacksonville Jaguars' THEN 'Jaguars'
        WHEN lose_or_tie = 'Kansas City Chiefs' THEN 'Chiefs'
        WHEN lose_or_tie = 'Las Vegas Raiders' THEN 'Raiders'
        WHEN lose_or_tie = 'Los Angeles Chargers' THEN 'Chargers'
        WHEN lose_or_tie = 'Los Angeles Rams' THEN 'Rams'
        WHEN lose_or_tie = 'Miami Dolphins' THEN 'Dolphins'
        WHEN lose_or_tie = 'Minnesota Vikings' THEN 'Vikings'
        WHEN lose_or_tie = 'New England Patriots' THEN 'Patriots'
        WHEN lose_or_tie = 'New Orleans Saints' THEN 'Saints'
        WHEN lose_or_tie = 'New York Giants' THEN 'Giants'
        WHEN lose_or_tie = 'New York Jets' THEN 'Jets'
        WHEN lose_or_tie = 'Philadelphia Eagles' THEN 'Eagles'
        WHEN lose_or_tie = 'Pittsburgh Steelers' THEN 'Steelers'
        WHEN lose_or_tie = 'San Francisco 49ers' THEN '49ers'
        WHEN lose_or_tie = 'Seattle Seahawks' THEN 'Seahawks'
        WHEN lose_or_tie = 'Tampa Bay Buccaneers' THEN 'Buccaneers'
        WHEN lose_or_tie = 'Tennessee Titans' THEN 'Titans'
        WHEN lose_or_tie = 'Washington Commanders' THEN 'Commanders'
    END;