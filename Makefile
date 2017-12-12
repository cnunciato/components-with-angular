default: clean install

install:
	cd components && npm install && cd .. && \
	cd some-app && npm install && cd .. && \
	$(MAKE) link # This allows us to develop the library alongside the app, with both running, without having to "reinstall" it constantly.

clean:
	rm -rf components/node_modules && \
	rm -rf some-app/node_modules && \
	npm rm --global components

dev-app:
	cd some-app && npm start -- --port 4200

dev-lib:
	cd components && npm start -- --port 4201

link:
	cd components/src/app/lib && npm link && cd ../../.. && \
	cd ../some-app && npm link components && cd ..
