export const colors = {
    transparent: 'transparent',
    text: {
        gold: '#CCAE70',
        white: '#fff',
        purple: '#8991B6',
        darkPurple: '#565697',
        red: '#E54787',
        trueRed: '#bf090d',
        blue: '#3cbdc2',
        green: '#1DC49B',
        oceanBlue: '#85D0FF',
        orange: '#fc7c00',
    },
    arrow: {
        skin1: '#8991B6',
    },
    borderColor: {
        skin1: '#372B60',
        skin2: '#8991B6',
        skin3: '#565697',
        skin4: 'rgba(86, 86, 151, 0.5)',
        skin5: 'rgb(59, 45, 106)',
        green: '#1DC49B',
        red: '#E54787',
        trueRed: '#bf090d',
        blue: '#38C6F4',
        gold: '#CCAE70',
    },
    difficulty: {
        unknown: 'transparent',
        severe: '#bf090d',
        average: '#169ed3',
        easy: '#b2b2b0',
        hard: '#fd7200',
    },
    backgroundColor: {
        skin1: 'rgba(25, 20, 54, 0.7)',
        skin2: 'rgba(49, 41, 85, 0.5)',
        skin3: 'rgba(55, 43, 96, 0.3)',
        skin4: 'rgba(25, 19, 61, 0.5)',
        skin5: '#565697',
        skin6: '#19133D',
        skin7: 'rgba(86, 86, 151, 0.3)',
        skin8: 'rgba(55, 45, 96, 0.85)',
        skin9: '#251B4D',
        skin10: 'rgba(86,86,151,0.2)',
        skin11: 'rgba(86,86,151,0.5)',
        skin12: 'rgba(22,13,51,1)',
        skin13: '#1d1345',
        skin14: '#201b44',
        skin15: '#27204C',
        skin16: 'rgba(49, 41, 85, 0.7)',
        white: '#FFF',
    },
    shadow: {
        skin1: 'rgba(23, 12, 40, 0.15)',
        skin2: 'rgba(21, 11, 37, 0.5) 0px 2px 10px 0px',
    },
    gamePerformance: {
        high: '#1DC49B',
        medium: '#85D0FF',
        low: '#E54787',
        unKnow: 'rgba(0, 0, 0, 0)',
        white: '#fff',

        empty: '#565697',
        labelEmpty: '#fff',
        poor: '#E54787',
        average: '#fff',
        good: '#1DC49B',
        op: '#85D0FF',
    },
    subMenuBorder: '#CCAE70',
    button: {
        search: '#555697',
    },
    skillLetterColor: {
        Q: '#FFC306',
        W: '#38C6F4',
        E: '#47CC42',
        R: '#FF2576',
        P: '#858cb2',
    },
    tierColor: {
        optimal: '#f5a623',
        great: '#3cbdc2',
        'not good': '#e54787',
        bad: '#e54787',
        good: '#4d81db',
    },

    getKdaColor: (kda) => {
        if (kda === 'perfect') {
            return colors.gamePerformance.op;
        }
        const newKda = parseFloat(kda);
        if (newKda && newKda <= 2) {
            return colors.gamePerformance.poor;
        }

        if (newKda && newKda > 2 && newKda <= 3.5) {
            return colors.gamePerformance.average;
        }

        if (newKda && newKda > 3.5 && newKda <= 5) {
            return colors.gamePerformance.good;
        }

        if (newKda && newKda > 5) {
            return colors.gamePerformance.op;
        }

        return colors.text.purple;
    },

    getWinRateColor: (winRate) => {
        if (winRate === undefined) {
            return colors.gamePerformance.unKnow;
        }
        if (winRate < 40) {
            return colors.gamePerformance.poor;
        }
        if (winRate >= 40 && winRate < 60) {
            return colors.gamePerformance.average;
        }
        if (winRate >= 60 && winRate < 80) {
            return colors.gamePerformance.good;
        }
        if (winRate >= 80) {
            return colors.gamePerformance.op;
        }
        return colors.gamePerformance.unKnow;
    },

    getCSAverageColor: (cs) => {
        if (cs === undefined) {
            return colors.gamePerformance.unKnow;
        }
        if (cs < 150) {
            return colors.gamePerformance.poor;
        }
        if (cs >= 150 && cs < 215) {
            return colors.gamePerformance.average;
        }
        if (cs >= 215 && cs < 270) {
            return colors.gamePerformance.good;
        }
        if (cs >= 270) {
            return colors.gamePerformance.op;
        }
        return colors.gamePerformance.unKnow;
    },

    CSMColor: (cs) => {
        if (cs === undefined) {
            return colors.gamePerformance.unKnow;
        }
        if (cs < 5) {
            return colors.gamePerformance.poor;
        }
        if (cs >= 5 && cs < 7) {
            return colors.gamePerformance.average;
        }
        if (cs === 7) {
            return colors.gamePerformance.good;
        }
        if (cs > 7) {
            return colors.gamePerformance.op;
        }
        return colors.gamePerformance.unKnow;
    },

    CSat10Color: (cs) => {
        if (cs === undefined) {
            return colors.gamePerformance.unKnow;
        }
        if (cs <= -15) {
            return colors.gamePerformance.poor;
        }
        if (cs > -15 && cs <= 15) {
            return colors.gamePerformance.average;
        }
        if (cs > 15 && cs <= 30) {
            return colors.gamePerformance.good;
        }
        if (cs > 30) {
            return colors.gamePerformance.op;
        }
        return colors.gamePerformance.unKnow;
    },

    getKPColor: (cs) => {
        if (cs === undefined) {
            return colors.gamePerformance.unKnow;
        }
        if (cs <= -15) {
            return colors.gamePerformance.poor;
        }
        if (cs > -15 && cs <= 15) {
            return colors.gamePerformance.average;
        }
        if (cs > 15 && cs <= 30) {
            return colors.gamePerformance.good;
        }
        if (cs > 30) {
            return colors.gamePerformance.op;
        }
        return colors.gamePerformance.unKnow;
    },

    getSkillsProgress: (progress, isPositiveMetric = true) => {
        if (progress === undefined) {
            return colors.gamePerformance.unKnow;
        }
        if (progress === 0) {
            return colors.gamePerformance.average;
        }
        if (progress > 0 && isPositiveMetric) {
            return colors.gamePerformance.good;
        }
        if (progress < 0 && !isPositiveMetric) {
            return colors.gamePerformance.good;
        }
        return colors.gamePerformance.poor;
    },

    getPerformanceColor: (winRate, games, losses, wins) => {
        if (winRate === undefined) {
            return colors.gamePerformance.empty;
        }

        if (games && games === 1) {
            return colors.gamePerformance.empty;
        }

        if (games && games === 2 && losses !== undefined && wins !== undefined) {
            if (losses > wins) {
                return colors.gamePerformance.poor;
            }
            if (losses === wins) {
                return colors.gamePerformance.average;
            }
            if (losses < wins) {
                return colors.gamePerformance.good;
            }
        }

        if (games && games >= 3) {
            if (winRate < 40) {
                return colors.gamePerformance.poor;
            }
            if (winRate >= 40 && winRate < 60) {
                return colors.gamePerformance.average;
            }
            if (winRate >= 60 && winRate < 80) {
                return colors.gamePerformance.good;
            }
            if (winRate >= 80) {
                return colors.gamePerformance.op;
            }
        }
        return colors.gamePerformance.unKnow;
    },

    getPerksBorderColor: (perk) => {
        if (perk === 8000) {
            return '#c8aa6e';
        }
        if (perk === 8100) {
            return '#ca3e3f';
        }
        if (perk === 8200) {
            return '#9ea9fb';
        }
        if (perk === 8300) {
            return '#49aab9';
        }
        if (perk === 8400) {
            return '#a1d586';
        }
        return '#565697';
    },
};