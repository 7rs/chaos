# Chaos  

  ![License](https://img.shields.io/github/license/7rs/chaos?labelColor=blue&color=black)
  ![Powered](https://img.shields.io/badge/packwiz-black?label=powered&labelColor=red)
  ![Loader](https://img.shields.io/badge/neoforge-black?label=loader&labelColor=purple)
  ![version](https://img.shields.io/badge/1.20.1-black?label=support&labelColor=green)

  A modpack mixing mods from any genres.  
  Supports only 1.20.1 and Forge.  

  あらゆるジャンルのMODがミックスされたMODパック。  
  Forgeと1.20.1のみをサポートする。  

## License  

  The mod licenses is retained.  
  The toml files by Packwiz and Markdown contents are licensed by CC0.  

  MODのライセンスは保持されます。  
  Packwizによって生成されたtomlやMarkdownファイルはCC0の下配布します。  

## MOD List  

- [Optimization](resources/optimization.md)
- [Fix](resources/fix.md)

## Cloning and Installation  

  ```sh
  git clone git@github.com:7rs/chaos.git --depth 1
  ```  

  ```sh
  cd packwiz/packwiz
  ```  

## Exports modpack

  ```sh
  packwiz modrinth export --output dist/chaos-modrinth.mrpack
  ```  

## Addition mod  

  ```sh
  packwiz modrinth add [ProjectID]
  ```  

  ```sh
  packwiz curseforge add --addon-id [ProjectID]
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
