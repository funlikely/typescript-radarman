# typescript-radarman
Typescript  レーダーマン

## git commands practice
```
git clone git@github-funlikely:funlikely/typescript-radarman.git
cd typescript-radarman

git checkout -b my-braaaaanch
md my-diiiiir
cd my-diiiiir
ni 0001.ts
git add .
git commit =m "initial commit"
git push -u origin my-braaaaanch
git push

```

## Node commands practice

### Initial steps

Modify the TS file.  Add code.

### Compile, run.

```
tsc .\pe-001.ts
node .\pe-001.js
```

### Fix issues with Node version
```
# ensure admin privileges before installing winget
choco install winget

cd $env:LOCALAPPDATA\Microsoft\WindowsApps\

.\winget.exe install OpenJS.NodeJS.LTS
```

### Additional Node related commands

```
# get tsc version that is being used locally
npx tsc --version

# run tsc on whole project (specified by tsconfig.json values)
tsc

# run tsc on an individual file, compiling TS into JS
tsc pe-001.ts

# run Node on a Javascript file -- note -- cannot be a Typescript file.
node pe-001.js

# Use ts-node to run a .ts file directly
npx ts-node pe-001.ts
```

### Install Angular
Note: in command prompt, the assoc command will work. But not PowerShell.
```
assoc .cmd=cmdfile
ftype cmdfile="%SystemRoot%\System32\cmd.exe" /c "%1" %*

npm install -g @angular/cli

ng version
```

Run some Angular hello-world

```
ng new hello-world-app
cd hello-world-app
ng serve --open
```

### TODO
 - [x]  Ensure one can run winget from somewhere outside the WindowsApps folder.  Add to the path env variable or sommething. *Note, it seems to have required restarting Windows. Getting the path variable to update without a restart was vexing.  There are apparently ways to do it, without restarting. Try harder next time?* Maybe `rundll32.exe sysdm.cpl,EditEnvironmentVariables` or `& cmd /c "setx PATH ""$env:Path"""`
 - [ ] Pick some emoji 🌮