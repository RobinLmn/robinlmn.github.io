#!/bin/bash
./backup.sh ../backup ../docs

if [ $? -eq 0 ]
then
	rm -r ../docs
	npm run build
	mv ../dist ../docs
	cp ../pdf ../docs
	for f in $(ls ../favicon)
	do
		cp ../favicon/$f ../docs
	done
	exit 0;
else
	exit 1;
fi

