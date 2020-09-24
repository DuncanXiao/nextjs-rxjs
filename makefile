APPLICATION_NAME := nextjs-start

version := 1.0.0
env?=qa

docker_image_name = $(APPLICATION_NAME)-$(env):$(version)

build:
	docker build -t $(APPLICATION_NAME)-$(env):$(version) -f docker-file/Dockerfile .

	# docker run -v $(shell pwd)/src:/src -p 3000:3000 --rm $(docker_image_name) sh -c "yarn start"
run:
	docker run -d -p 3000:3000 --rm $(docker_image_name) sh -c "yarn start"

test:
	echo $(shell pwd)

get_image_name:
	echo $(docker_image_name)
