# echo-webkom.no

Nettsiden til echo Webkom, en undergruppe av **echo – Linjeforeningen for informatikk** på Universitetet i Bergen.

## Utvikle

### Frontend

Nettsiden er åpen kildekode, og vi tar gjerne imot kontribusjoner.

1. Først klon repoet der du ønsker å ha det.

```bash
git clone git@github.com:omfj/echo-webkom.no
```

2. Gå inn i mappen og last ned nødevendige pakker for nettsiden.

```bash
cd echo-webkom.no
yarn
```

3. Start serveren. Normalt starter den på [localhost:3000](http://localhost:3000).

```bash
yarn dev
```

### Backend (Valgfritt)

For søknaden på nettsiden skal funke på du også backenden til [echo.uib.no](https://echo.uib.no/). Den finner du [her](https://github.com/echo-webkom/echo-web/).

1. Klon monorepoet til [echo.uib.no](https://echo.uib.no/) der du ønkser å ha det.

```bash
git clone git@github.com:echo-webkom/echo-web
```

2. Gå til backend-pakken for nettsiden.

```bash
cd echo-web/backend
```

Vi anbefaler å bruke JetBrains IntelliJ IDEA, siden Kotlin er utviklet av JetBrains.
De mest relevante filene for utvikling er `Routing.kt` og `WebkomApplication.kt`.

For å bygge backenden trenger du [docker](https://www.docker.com/)

3. For å starte din lokale server.

```bash
docker-compose up --build
```

Happy hacking.
