git -C \\Lincoln\Library\SPEwww\spe_website add .;
git -C \\Lincoln\Library\SPEwww\spe_website commit -m "website updated and committed from desktop shortcut";
git -C \\Lincoln\Library\SPEwww\spe_website push origin master;
Write-Host 'Done!';
Write-Host 'Press any key to continue...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');