1. git init
2. git add .
3. git commit -m "-Initial Commit"
4. git remote add origin git@github.com:ashley-desouza/docker-react.git
5. git push origin main
6. git branch --set-upstream-to=origin/main main


Docker 
1. docker build -t webserver .
2. docker build -f Dockerfile.dev .    
3. docker build . (Optional)
4. docker run -p 3000:80 webserver
5. docker ps
6. docker-compose up --build
7. docker-compose down -v --rmi all
8. docker run -p 3000:3000 7bc827e18024   
9. docker run -p 3000:3000 -v /app/node_modules -v $(pwd)/:/app 7bc827e18024
10. docker exec -it b58740b39503 npm run test
11. docker stop webserver
12. docker stop a5ab88e1f944