Get-ChildItem -Path ./components, ./app -Recurse -Filter *.tsx | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    foreach ($tag in 'span', 'button', 'form', 'table', 'a', 'label', 'input', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'div', 'li', 'ul') {
        $newContent = $newContent -replace "<$tag className="", "<$tag className="font-sans "
        $newContent = $newContent -replace "<$tag>", "<$tag className="font-sans">"
    }
    
    if ($content -ne $newContent) {
        Set-Content -Path $_.FullName -Value $newContent -NoNewline
        Write-Output "Updated $($_.FullName)"
    }
}
