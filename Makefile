.PHONY: build deploy clean

build:
	tar cf build.tar *

deploy: build
	scp build.tar server:/app/

clean:
	rm -f build.tar
