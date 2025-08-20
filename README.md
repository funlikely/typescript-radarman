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

Modify the TS file.  Add code.

Run the JS file.

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

### TODO
* Ensure one can run winget from somewhere outside the WindowsApps folder.  Add to the path env variable or sommething


