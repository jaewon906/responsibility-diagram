const dummy = [
    {
        jikchkCd:'CNCL',
        jikchkNm:'이사회',
        lvl:'1',
        userNm:'이사회 의장',
        responsibilityCd: ['1'],
        financeResponsibilityCd: [],
        managementResponsibilityCd: [],
        children:[
            {
                jikchkCd:'CEO',
                jikchkNm:'대표이사',
                lvl:'2',
                userNm:'은행장',
                responsibilityCd: ['2'],
                financeResponsibilityCd: [],
                managementResponsibilityCd: [],
                children:[
                    {
                        jikchkCd:'개인',
                        jikchkNm:'개인그룹1',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['G','K','M','N'],
                    },
                    {
                        jikchkCd:'자산관리',
                        jikchkNm:'자산관리그룹1',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    },
                    {
                        jikchkCd:'CIB',
                        jikchkNm:'CIB그룹1',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['G','K','M','N'],
                    },
                    {
                        jikchkCd:'금융소비자보호',
                        jikchkNm:'금융소비자보호그룹',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    },
                    {
                        jikchkCd:'IT',
                        jikchkNm:'IT그룹',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['G','K','M','N'],
                    },
                    {
                        jikchkCd:'외환',
                        jikchkNm:'외환그룹',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    },
                    {
                        jikchkCd:'연금사업',
                        jikchkNm:'연금사업그룹',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['G','K','M','N'],
                    },
                    {
                        jikchkCd:'HR',
                        jikchkNm:'HR그룹',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    }
                ]
            },
            {
                jikchkCd:'CEO',
                jikchkNm:'대표이사2',
                lvl:'2',
                userNm:'은행장',
                responsibilityCd: ['2'],
                financeResponsibilityCd: [],
                managementResponsibilityCd: [],
                children:[
                    {
                        jikchkCd:'개인',
                        jikchkNm:'개인그룹2',
                        lvl:'3',
                        userNm:'김OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['가', '나'],
                        managementResponsibilityCd: ['G','K','M','N'],
                    },
                    {
                        jikchkCd:'자산관리',
                        jikchkNm:'자산관리그룹2',
                        lvl:'3',
                        userNm:'송OO 부행장',
                        responsibilityCd: ['3'],
                        financeResponsibilityCd: ['마','사','아','자'],
                        managementResponsibilityCd: ['G','K'],
                    }
                ]
            }
        ]
    },
]

export default dummy;