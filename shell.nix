{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [
    nodejs
    python3
  ];
  shellHook = ''
    echo helloworld
  '';
}