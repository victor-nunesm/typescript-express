#!/usr/bin/env bash
input="$PWD/.env"
bashrc="/home/node/.bashrc"

while IFS= read -r line
do
  normalizedString="${line//=/"='"}'"
  echo "export $normalizedString" >> $bashrc
done < "$input"

exec bash