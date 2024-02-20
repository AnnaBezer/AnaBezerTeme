prima data:
git init
git remote add origin https://github.com/AnnaBezer/AnaBezerTeme.git

cum sa incarci teme de acasa
te duci in folderul teme cu 
1. `cd teme` (optional daca nu esti deja in teme) (ex: aici esti deja: PS C:\Users\annab\Desktop\HRMLDEMO\teme>)
2. creezi un branch nou : `git checkout -b "3.1"`
3. optional sa vrei in care branch esti `"git status"`
4. marchezi spre adaugat in git pe branch tot codul: `"git add ."`
5. adaugi efectiv cu commit (mesajul): `git commit -m "Tema 3.1"`
6. impingi codul spre git: `git push origin 3.1`
7. Creezi un PR din github: Pull Reqests -> New Pull request -> 

Cum sa modifici tema incarcata deja in PR:
1. `git checkout 3.1`
2. `git add .`
3. `git commit -m "Tema 3.1 modificat"`
4. `git push origin 3.1`
5. Verifica in PR modificarile sa apara