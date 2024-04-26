export type Journey = {
    gender: "male" | "female" | "idk",
    hygiene: number,
    days: number,
    type:  "sommer" | "winter" | "zwischen",
    weather: "good" | "middle" | "bad"
}

export type Item = {
    name: string,
    anzahl?: number
}
