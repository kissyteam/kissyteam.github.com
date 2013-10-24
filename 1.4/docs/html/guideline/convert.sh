#!/bin/sh

for shname in `find . -name "*.md"`
do
	name=`echo "$shname" | awk -F. '{print $0}'`         
	rstname=`echo $name | sed 's/.md/.rst/g'`
	echo $rstname
	pandoc -f markdown -t rst ${name} > ${rstname}
done
