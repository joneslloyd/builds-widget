export const CHAMPION_QUERY = `
    query ChampionQuery($champion: String! = "akali") {
        lol {
            champion(filters: {slug: $champion}) {
                build {
                    championSlug
                    items {
                        type
                        items
                    }
                    name
                    patch
                    role
                    spells
                    skillOrder
                    type
                }
            }
        }
    }
`;