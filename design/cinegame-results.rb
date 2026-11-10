# encoding: utf-8
# Results slides for CineGame cases (survey results), in the look of the programmatic results slides:
# a frame from the game behind a dark shade, and glowing numbers in cards. Run from the project root:
#   ruby design/cinegame-results.rb .
# The slide is the second slide of the case (after the video); see images in assets/js/cases.js.
require 'base64'
root = ARGV[0] || '.'
dir = File.join(root, 'assets/cases/cinegame')

CASES = [
  {
    id: 'sygeforsikring-jumper',
    name: 'Sygeforsikringen “danmark”',
    intro: 'The CineGame created noticeable results for Sygeforsikringen “danmark”',
    stats: [
      ['84%', ['The game caught', 'my attention']],
      ['54%', ['I want to tell', 'others about', 'the game']],
      ['40%', ['I prefer the game', 'to other ads']],
      ['58%', ['The game improves', 'my view of', 'the advertiser']],
      ['34%', ['Consider joining', 'after playing']]
    ],
    source: 'Source: DRF Research – Sygeforsikringen “danmark” BioSpil, September 2025 (n=555). Share who answered “to a high degree” or “to a very high degree”.'
  }
]

FONT = %(font-family="'Helvetica Neue', Helvetica, Arial, sans-serif")
esc = ->(s) { s.gsub('&', '&amp;').gsub('<', '&lt;') }

CASES.each do |c|
  photo = Base64.strict_encode64(File.binread(File.join(dir, "#{c[:id]}-photo.jpg")))
  w, gap = 312, 24
  x0 = (1920 - (w * 5 + gap * 4)) / 2
  cards = c[:stats].each_with_index.map do |(value, lines), i|
    label = lines.each_with_index.map { |l, k| %(<tspan x="32" y="#{196 + k * 36}">#{esc.(l)}</tspan>) }.join
    %(<g transform="translate(#{x0 + i * (w + gap)} 560)">
      <rect width="#{w}" height="330" rx="28" fill="#1a1a1a" fill-opacity="0.88" stroke="#3a3a3a" stroke-width="2" filter="url(#shadow)"/>
      <text x="32" y="130" fill="#f869b9" font-size="96" font-weight="900" filter="url(#glow)">#{value}</text>
      <text fill="#d1d5db" font-size="27" font-weight="700">#{label}</text>
    </g>)
  end.join("\n  ")
  svg = <<~SVG
    <?xml version="1.0" encoding="UTF-8"?>
    <!-- Results slide for the #{esc.(c[:name])} CineGame case (made by design/cinegame-results.rb) -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" #{FONT}>
      <defs>
        <linearGradient id="shadeLeft" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1a1a1a" stop-opacity="0.97"/><stop offset="0.6" stop-color="#1a1a1a" stop-opacity="0.85"/><stop offset="1" stop-color="#1a1a1a" stop-opacity="0.6"/></linearGradient>
        <linearGradient id="shadeBottom" x1="0" y1="0" x2="0" y2="1"><stop offset="0.4" stop-color="#1a1a1a" stop-opacity="0"/><stop offset="1" stop-color="#1a1a1a" stop-opacity="0.9"/></linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#000" flood-opacity="0.7"/></filter>
        <filter id="soft"><feGaussianBlur stdDeviation="10"/></filter>\n        <filter id="glow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur in="SourceGraphic" stdDeviation="14" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="1920" height="1080" fill="#1a1a1a"/>
      <image href="data:image/jpeg;base64,#{photo}" width="1920" height="1080" preserveAspectRatio="xMidYMid slice" filter="url(#soft)"/>
      <rect width="1920" height="1080" fill="url(#shadeLeft)"/>
      <rect width="1920" height="1080" fill="url(#shadeBottom)"/>
      <text x="#{x0}" y="200" fill="#f869b9" font-size="34" font-weight="700" letter-spacing="6">CINEGAME CASE · RESULTS</text>
      <text x="#{x0 - 6}" y="330" fill="#ffffff" fill-opacity="0.87" font-size="104" font-weight="900" letter-spacing="-2">#{esc.(c[:name].upcase)}</text>
      <text x="#{x0}" y="410" fill="#d1d5db" font-size="40" font-weight="500">#{esc.(c[:intro])}</text>
      #{cards}
      <text x="#{x0}" y="990" fill="#9ca3af" font-size="20">#{esc.(c[:source])}</text>
    </svg>
  SVG
  File.write(File.join(dir, "#{c[:id]}-results.svg"), svg)
  puts "#{c[:id]}-results.svg #{svg.size / 1024} KB"
end
