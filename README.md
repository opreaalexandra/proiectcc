# proiectcc
# INTRODUCERE 
 Aplicatiile mobile pentru a verifica vremea atunci cand mergem la party, in vacanta sau oriunde altundeva ne face fericiti sunt destul de numeroase. Cu toate acestea, persoanele inca verifica vremea in aplicatii web intrucat este mult mai rapid si stocarea acestora nu este necesara. Procesul de instalare al aplicatiilor pe mobile costa timp si spatiu, astfel ca alegem calea mai usoara. 
# Descriere problema
  Aplicatia WeatherApp a fost creat pentru a afisa vremea in grade C,in ziua curenta, pentru o lista de orase dintr-o baza de date creata in cloud azure. Dintr-un dropdawn list se selecteaza orasul pentru care dorim sa afisam informatiile. 
 
 ![image](https://user-images.githubusercontent.com/83668337/117701543-0b8c7380-b1d0-11eb-8eac-d6c453f71997.png)
![image](https://user-images.githubusercontent.com/83668337/117701638-27901500-b1d0-11eb-8018-8d9c05c9be60.png)

# Descriere API
Aplicatia utilizeaza doua API-uri de tip GET. 
1.Primul API returneaza o lista de orase din baza de date( Bucharest, Mures, Clus, Pitesti etc). 
  ## Request URL https://weatherapp-backend.azurewebsites.net/api/cities
  ## Method: GET
  ## Heardes: -
  ## Authorization: -
  ## ResponseCode: 200-Succes, 500- Eroare interna de server, 403-web app is stopped 
  
  ![image](https://user-images.githubusercontent.com/83668337/117702534-4e028000-b1d1-11eb-81ed-4ca1d20f8575.png)
  
  2. Al doilea API primeste ca parametru - orasul din response-ul primul API si returneaza gradele/vremea pentru orasul respectiv. 
  ##  Request URL: https://api.openweathermap.org/data/2.5/weather?q=Cluj&units=metric&APPID=2da235f212a8d9ffc6139e0b2671113d
  ## Method: GET
  ## Heardes: -
  ## Authorization: -
  ## ResponseCode: 200-Succes, 500- Eroare interna de server, 403-web app is stopped 
  
  ![image](https://user-images.githubusercontent.com/83668337/117702935-d41ec680-b1d1-11eb-98ce-c2a229f30e37.png)


# Flux de date
La incarcarea paginiii, pagina face un request catre backend care returneaza toate orasele din baza de date.  Dupa selectarea unui oras din dropdawn list: se face call catre al doilea API de vreme care returneaza datele despre orasul respectiv.  Aceste informatii sunt afisate pe ecran. 

In cloud am o baza de date mysql cu lista de orase care contine tabela cities si fiecare rand din tabela are un id si un nume de oras care este unic. 

Odata creata baza de date in cloud, backend-ul are un fisier json care contine datele de conectare la baza de date( serverul, username, parola si baza de date). 
Backend-ul se conecteaza la baza de date folosind aceste informatii. In backend exista un crontroler care primeste requestul HTTP si returneaza lista de orase din baza de date sub forma json. 

 Odata creat back-ul si configurat, frontendul trimite requestul catre API-ul care returneaza datele din  backend
Aceste informatii se mapeaza astfel incat sa fie doar o lista de string-uri cu denumirea oraselor. Lista este transmita catre componenta de react care le afiseaza utilizatorului. 

Utilizatorul selecteaza un orasu forntentul facee un request catre API-ul de vreme a carei informatii returnate sunt afisate pe ecran. 

# Servicii cloud utilizate
1.Baza de date mysql in azure.
2.Mediul de stocare in cloud




