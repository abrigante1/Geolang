@echo off
:: Created 2016, Mike Lischke (public domain)

:: This script is used to generate source files from the test grammars in the same folder. The generated files are placed
:: into a subfolder "generated" which the demo project uses to compile a demo binary.

:: Download the ANLTR jar and place it in the same folder as this script (or adjust the LOCATION var accordingly).

set LOCATION=antlr-4.8-complete.jar
set GRAMMAR=Geolang.g4



:: JavaScript
java -jar %LOCATION% -Dlanguage=JavaScript -listener -visitor -o ../Geolang/ %GRAMMAR%

:: CPP
::java -jar %LOCATION% -Dlanguage=Cpp -listener -visitor -o ../../main-generated/javascript -XdbgST %GRAMMAR%

:: Java
::java -jar %LOCATION% -o  ../../main-generated/java/ %GRAMMAR%