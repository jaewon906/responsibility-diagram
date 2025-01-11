const dummy = [
    {
        groupCd:'CNCL',
        upGroupCd:'',
        groupNm:'이사회',
        lvl:'1',
        userNm:'이사회 의장',
        responsibilityCd: ['1'],
        financeResponsibilityCd: [],
        managementResponsibilityCd: [],
        children:[
            {
                groupCd:'CEO',
                upGroupCd:'CNCL',
                groupNm:'대표이사',
                lvl:'2',
                userNm:'은행장',
                responsibilityCd: ['2'],
                financeResponsibilityCd: [],
                managementResponsibilityCd: [],
                children:[
                    {
                        groupCd:'개인',
                        upGroupCd:'CEO',
                        groupNm:'개인그룹1',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['G','K','M','N'],
                    },
                    {
                        groupCd:'자산관리',
                        upGroupCd:'CEO',
                        groupNm:'자산관리그룹1',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    },
                    {
                        groupCd:'CIB',
                        upGroupCd:'CEO',
                        groupNm:'CIB그룹1',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['G','K','M','N'],
                    },
                    {
                        groupCd:'금융소비자보호',
                        upGroupCd:'CEO',
                        groupNm:'금융소비자보호그룹',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    },
                    {
                        groupCd:'IT',
                        upGroupCd:'CEO',
                        groupNm:'IT그룹',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['G','K','M','N'],
                    },
                    {
                        groupCd:'외환',
                        upGroupCd:'CEO',
                        groupNm:'외환그룹',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    },
                    {
                        groupCd:'연금사업',
                        upGroupCd:'CEO',
                        groupNm:'연금사업그룹',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['G','K','M','N'],
                    },
                    {
                        groupCd:'HR',
                        upGroupCd:'CEO',
                        groupNm:'HR그룹',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    }
                ]
            },
            {
                groupCd:'CEO2',
                upGroupCd:'CNCL',
                groupNm:'대표이사2',
                lvl:'2',
                userNm:'은행장',
                responsibilityCd: ['2'],
                financeResponsibilityCd: [],
                managementResponsibilityCd: [],
                children:[
                    {
                        groupCd:'개인2',
                        upGroupCd:'CEO2',
                        groupNm:'개인그룹2',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['D','E','G','K','M','N'],
                    },
                    {
                        groupCd:'자산관리2',
                        upGroupCd:'CEO2',
                        groupNm:'자산관리그룹2',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['다','사','아','자'],
                        managementResponsibilityCd: ['D','F','G','K'],
                    },
                    {
                        groupCd:'CIB2',
                        upGroupCd:'CEO2',
                        groupNm:'CIB그룹2',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['E','G','K','M','N'],
                    },
                    {
                        groupCd:'금융소비자보호2',
                        upGroupCd:'CEO2',
                        groupNm:'금융소비자보호그룹2',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['다','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    },
                    {
                        groupCd:'IT2',
                        upGroupCd:'CEO2',
                        groupNm:'IT그룹2',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: [],
                    },
                    {
                        groupCd:'외환2',
                        upGroupCd:'CEO2',
                        groupNm:'외환그룹2',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['F','G','K'],
                    },
                    {
                        groupCd:'연금사업2',
                        upGroupCd:'CEO2',
                        groupNm:'연금사업그룹2',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: [],
                    },

                ]
            }
        ]
    },
]

export default dummy;