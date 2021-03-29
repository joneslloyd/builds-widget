export const DATA_API_CHAMPION_QUERY = `
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
    query LolChampionPageStaticQuery($championFilter: String!, $roleDataFilter: String!, $matchupsDataFilter: String!, $buildDataFilter: String!, $comboFilter: String!, $combosListFilter: String!, $matchupSpecificDataFilter: String!, $withCommonData: Boolean!, $withBuildData: Boolean!, $withCountersData: Boolean!, $withMatchupSpecificCountersData: Boolean!, $withCombosData: Boolean!, $withProBuildsData: Boolean!) {
        ...ChampionsCommonStaticDataFragment @include(if: $withCommonData)
        ...ChampionsBuildsStaticDataFragment @include(if: $withBuildData)
        ...ChampionsCountersStaticDataFragment @include(if: $withCountersData)
        ...ChampionsMatchupSpecificStaticDataFragment @include(if: $withMatchupSpecificCountersData)
        ...ChampionsCombosStaticDataFragment @include(if: $withCombosData)
        ...ChampionsProBuildsStaticDataFragment @include(if: $withProBuildsData)
    }

    fragment ChampionsCommonStaticDataFragment on AppQueries {
        championCommonInfo: queryChampionsV1Contents(filter: $championFilter) {
            flatData {
            ...ChampionPageStaticFragment
            __typename
            }
            __typename
        }
        defaultModerators: queryModeratorsV1Contents {
            flatData {
            ...ModeratorFragment
            __typename
            }
            __typename
        }
        __typename
    }

    fragment ChampionPageStaticFragment on ChampionsV1DataFlatDto {
        riotId
        slug
        name
        title
        tags
        type {
            flatData {
            ...ChampionTypeFragment
            __typename
            }
            __typename
        }
        abilities {
            flatData {
            ...LolChampionAbilityFragment
            __typename
            }
            __typename
        }
        difficulty {
            flatData {
            ...ChampionDifficultyFragment
            __typename
            }
            __typename
        }
        customDifficulty {
            flatData {
            ...ChampionDifficultyFragment
            __typename
            }
            __typename
        }
        difficultyLevel
        powerSpikes {
            early
            late
            mid
            __typename
        }
        moderators {
            flatData {
            ...ModeratorFragment
            __typename
            }
            __typename
        }
        damageType
        playStyle
        socialCommunities {
            slug
            url
            __typename
        }
        __typename
    }

    fragment ModeratorFragment on ModeratorsV1DataFlatDto {
        summonerName
        region
        rank
        division
        icon
        links {
            slug
            link
            __typename
        }
        __typename
    }

    fragment ChampionTypeFragment on ChampionTypeV1DataFlatDto {
        slug
        name
        __typename
    }

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

    fragment ChampionAbilityStatFragment on ChampionsAbilitiesV1statsChildDto {
        slug
        value
        __typename
    }

    fragment ChampionAbilityCustomStatFragment on ChampionsAbilitiesV1customStatsChildDto {
        slug
        value
        __typename
    }

    fragment ChampionDifficultyFragment on ChampionDifficultyV1DataFlatDto {
        slug
        name
        color
        level
        __typename
    }

    fragment ChampionsBuildsStaticDataFragment on AppQueries {
        championBuilds: queryChampionsBuildsV1Contents(filter: $buildDataFilter) {
            flatData {
            ...LolChampionCustomBuildFragment
            __typename
            }
            __typename
        }
        buildCombo: queryChampionCombosV1Contents(filter: $comboFilter, top: 1, skip: 0) {
            flatData {
            ...ChampionComboFragment
            __typename
            }
            __typename
        }
        items: queryGameItemsV1Contents(
            top: 200
            skip: 0
            filter: "data/isInStore/iv eq true and data/isMap11Supported/iv eq true and data/situationalDescription/en ne null"
        ) {
            flatData {
            ...ChampionPageItemsFragment
            __typename
            }
            __typename
        }
        quickTips: queryChampionsRoleDataV1Contents(filter: $roleDataFilter) {
            flatData {
            ...ChampionQuickTipFragment
            __typename
            }
            __typename
        }
        __typename
    }

    fragment LolChampionCustomBuildFragment on ChampionsBuildsV1DataFlatDto {
        slug
        champion
        role
        name
        patch
        spells {
            flatData {
            riotId
            __typename
            }
            __typename
        }
        skillOrder
        perks {
            IDs: iDs
            style
            subStyle
            __typename
        }
        items {
            type
            timeToTarget
            items {
            flatData {
                riotId
                __typename
            }
            __typename
            }
            __typename
        }
        __typename
    }

    fragment ChampionComboFragment on ChampionCombosV1DataFlatDto {
        slug
        championSlug
        championSlug
        difficulty {
            flatData {
            ...ChampionComboDifficultyFragment
            __typename
            }
            __typename
        }
        executionText
        notes
        sequence {
            items
            __typename
        }
        shortDescription
        tags
        thumbnailId
        videoUrl
        __typename
    }

    fragment ChampionComboDifficultyFragment on ChampionComboDifficultyV1DataFlatDto {
        slug
        name
        index
        color
        __typename
    }

    fragment ChampionPageItemsFragment on GameItemsV1DataFlatDto {
        riotId
        mainItemTag
        situationalDescription
        type {
            flatData {
            slug
            __typename
            }
            __typename
        }
        __typename
    }

    fragment ChampionQuickTipFragment on ChampionsRoleDataV1DataFlatDto {
        championSlug
        role
        quickTips
        __typename
    }

    fragment ChampionsCountersStaticDataFragment on AppQueries {
        championMatchupsData: queryChampionsMatchupsV1Contents(
            top: 200
            skip: 0
            filter: $matchupsDataFilter
        ) {
            flatData {
            playerChampion
            __typename
            }
            __typename
        }
        championRoleData: queryChampionsRoleDataV1Contents(filter: $roleDataFilter) {
            flatData {
            ...ChampionRoleDataFragment
            __typename
            }
            __typename
        }
        __typename
    }

    fragment ChampionsMatchupsFragment on ChampionsMatchupsV1DataFlatDto {
        matchupTips
        role
        __typename
    }

    fragment ChampionRoleDataFragment on ChampionsRoleDataV1DataFlatDto {
        championSlug
        role
        counterVideo
        counterTips {
            ...ChampionRoleCounterTipFragment
            __typename
        }
        __typename
    }

    fragment ChampionRoleCounterTipFragment on ChampionsRoleDataV1counterTipsChildDto {
        slug
        text
        __typename
    }

    fragment ChampionsCombosStaticDataFragment on AppQueries {
        combosList: queryChampionCombosV1Contents(filter: $combosListFilter) {
            flatData {
            ...ChampionComboFragment
            __typename
            }
            __typename
        }
        __typename
    }

    fragment ChampionsMatchupSpecificStaticDataFragment on AppQueries {
        championMatchupSpecificData: queryChampionsMatchupsV1Contents(
            top: 200
            skip: 0
            filter: $matchupSpecificDataFilter
        ) {
            flatData {
            ...ChampionsMatchupsFragment
            __typename
            }
            __typename
        }
        __typename
    }

    fragment ChampionsProBuildsStaticDataFragment on AppQueries {
        items: queryGameItemsV1Contents(
            top: 200
            skip: 0
            filter: "data/isInStore/iv eq true and data/isMap11Supported/iv eq true"
        ) {
            flatData {
            ...ChampionPageItemsFragment
            __typename
            }
            __typename
        }
        badges: queryPostGameBadgesV1Contents(top: 200) {
            flatData {
            ...PostGameBadgeFragment
            __typename
            }
            __typename
        }
        perks: queryRunesV1Contents(top: 200) {
            flatData {
            ...PerkPostGameFragment
            __typename
            }
            __typename
        }
        __typename
    }

    fragment PostGameBadgeFragment on PostGameBadgesV1DataFlatDto {
        slug
        name
        type
        description
        __typename
    }

    fragment PerkPostGameFragment on RunesV1DataFlatDto {
        childRunes
        riotId
        name
        matchResultStatsLabels
        __typename
    }
`;