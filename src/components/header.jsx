const Header = () => {
  return (
    <header className="mb-10 mt-4">
    <h1 className="text-3xl font-bold">
        FastLED Matrix 16x16 generator
    </h1>
    <nav>
        <ul className="flex space-x-4">
            <li>
                <a href="https://fastled.io/" title="FastLED" target="_blank" className="text-blue-600 underline hover:no-underline">
                    FastLED
                </a>
            </li>
            <li>
                <a href="https://github.com/sjsd/fastled-16x16-matrix-generator" title="FastLED 16x16 matrix generator" target="_blank" className="text-blue-600 underline hover:no-underline">
                    Github
                </a>
            </li>
            <li>
                <a href="https://github.com/sjsd/fastled-16x16-matrix-generator?tab=readme-ov-file#ino-code" title="FastLED 16x16 matrix generator ino code" target="_blank" className="text-blue-600 underline hover:no-underline">
                    Arduino code
                </a>
            </li>
            <li>
                <a href="https://www.helgejohnsen.no/" title="Helge Johnsen" target="_blank" className="text-blue-600 underline hover:no-underline">
                    helgejohnsen.no
                </a>
            </li>            
        </ul>
    </nav>
    </header>
  )
}

export default Header
