$url = 'https://securityinbuilt.netlify.app/'
$body = 'form-name=contact&name=Test%20User&email=test%40example.com&company=ACME'

Write-Output "Posting to $url"
try {
  $resp = Invoke-WebRequest -Uri $url -Method POST -Body $body -ContentType 'application/x-www-form-urlencoded' -UseBasicParsing -Verbose -ErrorAction Stop
  Write-Output "Status: $($resp.StatusCode) - $($resp.StatusDescription)"
  Write-Output "Response length: $($resp.Content.Length)"
} catch {
  Write-Output "Request failed: $($_.Exception.Message)"
  if ($_.Exception.Response) {
    $r = $_.Exception.Response
    try { $status = $r.StatusCode.value__ } catch { $status = 'unknown' }
    Write-Output "HTTP status: $status"
  }
}
