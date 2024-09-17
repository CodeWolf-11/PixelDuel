

type DuelFormType = {
    title?: string,
    description?: string,
}

type DuelFormTypeError = {
    title?: string,
    description?: string,
    expire_at?: string,
    image?: string
}

type duelResponseType = {
    id: number,
    userId: number,
    title: string,
    description: string,
    image: string,
    created_at: string,
    expire_at: string,
}

type duelItemFormType = {
    image: File | null
}

