import { useState } from "react"

export default function HomePage() {
    const [search, setSearch] = useState("")

    return (
        <div>
            <h1>Home Page</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}