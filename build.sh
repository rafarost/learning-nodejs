# remove all containers
docker rm -f $(docker ps -a -q)

# build image
docker build -t my_app .

# run app again
docker run -p 49160:8080 -d my_app