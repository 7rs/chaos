# Chaos  

  The Minecraft mod pack.  

## Mods  

  See: [MOD List](/MODS.md)  

## Get started  

  Clones the chaos repository and Moves the packwiz directory.  

  ```sh
  git clone git@github.com:7rs/chaos.git
  ```  

  ```sh
  cd packwiz
  ```  

  Exports the modpacak file.

  ```sh
  packwiz modrinth export --output ../dist/chaos-modrinth.mrpack
  ```  

  ```sh
  packwiz curseforge export --output ../dist/chaos-curseforge.zip
  ```  

### Add mod  

  You can add any mods.  

  ```sh
  packwiz modrinth add [URL|Name|ID]
  ```  

  ```sh
  packwiz curseforge add [URL|Name|ID]
  ```  

[better-combat]: https://modrinth.com/mod/better-combat
[forge]: https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html
[neoforge]: https://neoforged.net/

## Errors  

  [Better Combat 1.8.1 and above][better-combat] requires [Forge version 47.2.0][forge],
  so It isn't available with [NeoForge whose latest release is 47.1.105][neoforge].  

  ```sh
  packwiz modrinth add --project-id 5sy6g3kz --version-id hNenqXi9
  ```  
