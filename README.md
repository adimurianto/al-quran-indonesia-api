# Al-Quran Indonesia API


## About Project
This is an API for the Al-Quran Indonesia project.


## Setup Project

- Clone project

```bash
  git clone https://github.com/adimurianto/al-quran-indonesia-api.git
  cd al-quran-indonesia-api
```

- Install package

```bash
  npm install
```

- Create file **.env** base on file **example.env** and adjust the contents of the variable
  

-  Migrate database and seeder

```bash
  npx prisma migrate dev --name <migrate-name>
  
  npm run seed
```


-  Running Project

```bash
  npm run dev -- --service=rest
```


- Access Swagger API Docs
[http://127.0.0.1:3001/api-docs](http://127.0.0.1:3001/api-docs/)

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/6a237930-2e4b-46b6-9ff3-5ae34e851fa1" />

