$files = Get-ChildItem -Path . -Filter *.html

$themeIcon = '<i class="bi bi-moon-stars fs-5"></i>'
$rtlIcon = '<i class="bi bi-arrow-left-right fs-5"></i>'

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # replace SVG inside theme-toggle-btn with the moon icon
    $content = $content -replace '(?s)(<button[^>]*class="theme-toggle-btn"[^>]*>).*?(</button>)', "`$1$themeIcon`$2"
    
    # replace SVG inside rtl-toggle-btn with the rtl icon
    $content = $content -replace '(?s)(<button[^>]*class="rtl-toggle-btn"[^>]*>).*?(</button>)', "`$1$rtlIcon`$2"
    
    Set-Content -Path $file.FullName -Value $content -NoNewline -Encoding UTF8
    Write-Host "Updated $($file.Name)"
}
