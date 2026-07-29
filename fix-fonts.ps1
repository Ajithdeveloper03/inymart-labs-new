Get-ChildItem -Path ./components, ./app -Recurse -Filter *.tsx | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $newContent = $content -replace '<p className="', '<p className="font-sans '
    $newContent = $newContent -replace '<p>', '<p className="font-sans">'
    
    if ($content -ne $newContent) {
        Set-Content -Path $_.FullName -Value $newContent -NoNewline
        Write-Output "Updated $($_.FullName)"
    }
}
