# UI-component-documentation-tool
![alt text](https://raw.githubusercontent.com/chang90/UI-component-documentation-tool/master/screenshot.png)
## Install

### lerna
```
npm i
```

### cli package
```
cd cd .\packages\cli\
npm i

```

### local-api package
```
cd .\packages\local-api\
npm i

```

### local-client package
```
cd .\packages\local-client\
npm i
npm run build
```

## start project
```
npm start
```

open up another concle
```
cd .\packages\cli\dist
node index.js serve

```
then the React project is host on localhost:4005

## clean up dependency
```
lerna bootstrap
```

## Tech
1. esbuild
2. react
3. axios
