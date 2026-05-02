export function parseLatestVersionImages(data: string[]): string {
    return data[0]
}

export function parseRunes(data: { id: number, icon: string, slots: { runes: { id: number, icon: string }[] }[] }[]) {
    const parsedData: Record<number, string> = {}

    data.forEach((rune) => {
        parsedData[rune.id] = rune.icon

        rune.slots.forEach((slot) => {
            slot.runes.forEach((r) => {
                parsedData[r.id] = r.icon
            })
        })
    })

    return parsedData
}

export function parseSpells(data: Record<string, { key: string, image: { full: string } }>) {
    const parsedData: Record<number, string> = {}

    Object.values(data).forEach((value) => {
        parsedData[Number(value.key)] = value.image.full
    })

    return parsedData
}