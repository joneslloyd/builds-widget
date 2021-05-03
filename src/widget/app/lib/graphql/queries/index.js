const ChampionAbilityStatFragment = `
    fragment ChampionAbilityStatFragment on ChampionsAbilitiesV1statsChildDto {
        slug
        value
        __typename
    }
`;

const SummonerSpellFragment = `
    fragment SummonerSpellFragment on SummonersSpellsV1DataFlatDto {
        riotId
        slug
        name
        description
        tooltip
        stats {
            slug
            name
            value
            __typename
        }
        __typename
    }
`;

export const ChampionAbilityCustomStatFragment = `
    fragment ChampionAbilityCustomStatFragment on ChampionsAbilitiesV1customStatsChildDto {
        slug
        value
        __typename
    }
`;

const LolChampionAbilityFragment = `
    fragment LolChampionAbilityFragment on ChampionsAbilitiesV1DataFlatDto {
        activationKey
        riotDesc: ddragonDescription
        mobaDesc: description
        name
        slug
        stats {
            ...ChampionAbilityStatFragment
            __typename
        }
        customStats {
            ...ChampionAbilityCustomStatFragment
            __typename
        }
        __typename
    }
    ${ChampionAbilityStatFragment}
    ${ChampionAbilityCustomStatFragment}
`;

export const DATA_API_CHAMPION_QUERY = `
    query ChampionQuery($champion: String! = "akali", $role: Rolename! = UNKNOWN) {
        lol {
            champion(filters: {slug: $champion, role: $role}) {
                build {
                    championSlug
                    items {
                        type
                        items
                    }
                    name
                    patch
                    perks {
                        IDs
                        style
                        subStyle
                    }
                    role
                    skillOrder
                    spells
                    stats {
                        matchCount
                    }
                    type
                }
                stats {
                    tier
                    winRateHistory {
                        x
                        value
                    }
                }
            }
        }
    }
`;

export const SQUIDEX_API_CHAMPION_QUERY = `
    query LolChampionPageStaticQuery($championFilter: String!, $withCommonData: Boolean!) {
        ...ChampionsCommonStaticDataFragment @include(if: $withCommonData)
    }

    fragment ChampionsCommonStaticDataFragment on AppQueries {
        querySummonersSpellsV1Contents {
            flatData {
                riotId
                slug
            }
        }
        championCommonInfo: queryChampionsV1Contents(filter: $championFilter) {
            flatData {
                slug
                name
                title
                abilities {
                    flatData {
                        ...LolChampionAbilityFragment
                    }
                }
            }
        }
    }
    ${LolChampionAbilityFragment}
`;

export const SPELL_BY_FILTER = `
    query LolSummonerSpellByFilter($filter: String!) {
        spells: querySummonersSpellsV1Contents(filter: $filter) {
            flatData {
                ...SummonerSpellFragment
                __typename
            }
            __typename
        }
    }
    ${SummonerSpellFragment}
`;

export const PerkFragment = `
    fragment PerkFragment on RunesV1DataFlatDto {
        riotId
        name
        slug
        shortDescription
        longDescription
        customDescription: customLongDescription
        childRunes
    }
`;

export const PERK_BY_FILTER = `
    query LolPerkByFilter($filter: String!) {
        perks: queryRunesV1Contents(filter: $filter) {
            flatData {
                ...PerkFragment
            }
        }
    }
    ${PerkFragment}
`;

export const GameItemTagsFragment = `
  fragment GameItemTagsFragment on GameItemTagV1DataFlatDto {
    name
    slug
  }
`;


export const GameItemTypeFragment = `
  fragment GameItemTypeFragment on GameItemTypeV1DataFlatDto {
    slug
    name
    description
  }
`;

export const ChampionTypeFragment = `
  fragment ChampionTypeFragment on ChampionTypeV1DataFlatDto {
    slug
    name
  }
`;

export const LolGameItemFragment = `
  fragment LolGameItemFragment on GameItemsV1DataFlatDto {
    riotId
    name
    cost
    tags {
      flatData {
        ...GameItemTagsFragment
      }
    }
    buildsInto
    buildsFrom
    mainItemTag
    effectDescription
    type {
      flatData {
        ...GameItemTypeFragment
      }
    }
    fitForChampionType {
      flatData {
        ...ChampionTypeFragment
      }
    }
  }
  ${GameItemTagsFragment}
  ${GameItemTypeFragment}
  ${ChampionTypeFragment}
`;

export const ITEM_BY_FILTER = `
    query LolGameItemByFilter($filter: String!) {
        items: queryGameItemsV1Contents(filter: $filter) {
            flatData {
                ...LolGameItemFragment
            }
        }
    }
    ${LolGameItemFragment}
`;

export const ABILITY_BY_FILTER = `
  query LolChampionAbilityByFilter($filter: String!) {
    items: queryChampionsAbilitiesV1Contents(filter: $filter) {
      flatData {
        ...LolChampionAbilityFragment
      }
    }
  }
  ${LolChampionAbilityFragment}
`;