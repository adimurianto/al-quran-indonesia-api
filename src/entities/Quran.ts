export interface QuranDAO {
    id: number
    suraId: number
    verseID: number
    ayahText: string
    indoText: string
    readText: string
}

export interface QuranSearchDTO {
    suraId?: number
    verseID?: number
    keyword?: string
}

export interface QuranResponseDTO {
    id: number
    suraId: number
    verseID: number
    ayahText: string
    indoText: string
    readText: string
}

// Exclude keys from quran
export function exclude<Quran, Key extends keyof Quran>(
    quran: Quran,
    ...keys: Key[]
): Omit<Quran, Key> {
    for (let key of keys) {
        delete quran[key];
    }
    return quran;
}