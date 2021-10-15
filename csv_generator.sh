#!/bin/bash
echo "***Starting...***"
echo "***Cloning repo...***"

git clone https://github.com/thevalueadder/lovelace
cd lovelace

echo "***Mixing personal info...***"
echo "Name,email,slack_username,biostack,twitter_handle,hamming_distance">>team_lovelace.csv
node stage_0_JuanmaGarcia.js >>team_lovelace.csv
node stage_0_ToheebAmoo.js >>team_lovelace.csv

echo "***CSV generated!***"