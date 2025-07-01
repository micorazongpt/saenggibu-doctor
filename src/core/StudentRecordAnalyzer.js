// 학생부 종합 진단 시스템 - 통합 평가 로직

class StudentRecordAnalyzer {
    constructor() {
        // 서울대 합격생 데이터베이스 (추가)
        this.snuSuccessDatabase = [
            {
                major: '건축학과',
                college: '공과대학',
                gpa: 1.3, // 추정
                입시년도: 2023,
                활동패턴: {
                    예술공학융합: "회화에서 건축으로 전환, 예술적 감성과 공학적 정밀성 결합",
                    환경맞춤설계: "블랙홀 골디락스존까지 고려한 극한 환경 건축 설계",
                    재료과학탐구: "콘크리트, 산성비 부식, 곤충 외골격 등 건축 재료의 과학적 분석",
                    친환경철학: "패시브 하우스, 지속가능한 건축을 통한 환경 보호 의식"
                },
                세특특징_건축학: {
                    융합적사고: "물리+화학+생물+미술+수학을 건축학으로 통합",
                    창의적설계: "기생충 영화의 건축학적 분석, 우주식민지 건축 설계",
                    과학적접근: "유토곡선, 측량법, 재료역학 등 수학적/과학적 기반",
                    철학적성찰: "건축이 인간에게 미치는 무의식적 영향에 대한 깊은 사고"
                },
                핵심키워드: [
                    "건축학", "콘크리트", "친환경건축", "패시브하우스", "공간설계",
                    "재료과학", "유토곡선", "측량법", "다시점", "융합설계"
                ],
                자소서특징_건축학: {
                    예술적감성: "회화의 한계 인식하고 건축의 시공간적 특성에 매력 느낌",
                    과학적엄밀성: "환경조건, 재료특성, 측량법 등을 정밀하게 분석하는 태도",
                    미래지향성: "우주건축, 친환경건축 등 미래 건축의 방향 제시",
                    인간중심설계: "공간이 사람에게 미치는 영향을 고려한 설계 철학"
                },
                독서활동_건축학: [
                    "건축을 생각하다 (춤토르)",
                    "길들이는 건축 길들여진 인간 (건축철학)",
                    "나는 풍요로웠고 지구는 달라졌다 (환경의식)",
                    "죄와 벌 (인간에 대한 성찰)"
                ]
            }
        ];

        // 전공별 특화 평가 기준
        this.majorSpecificCriteria = {
            공과대학: {
                필수요소: {
                    수학물리기반: "수학/물리 원리를 실제 문제에 정확히 적용",
                    실험설계능력: "가설설정 → 실험설계 → 데이터수집 → 분석 → 개선",
                    창의적문제해결: "기존 방법의 한계 인식하고 새로운 접근법 고안",
                    정량적분석: "측정, 계산, 오차분석 등 정확한 수치 기반 판단"
                },
                차별화요소: {
                    융합적사고: "서로 다른 분야의 지식을 연결하여 새로운 해결책 도출",
                    지속적개선: "실패를 통해 배우고 지속적으로 개선하는 엔지니어링 마인드",
                    실용적적용: "이론을 현실 문제 해결에 실제로 적용하는 능력",
                    협업리더십: "기술적 프로젝트에서 팀을 이끄는 리더십"
                }
            },
            사회과학대학: {
                필수요소: {
                    과학적방법론: "가설설정→실험설계→데이터분석→결론도출의 체계적 연구",
                    융합적사고: "여러 학문을 통합하여 인간과 사회 현상을 다각도로 이해",
                    현실문제의식: "추상적 이론에 머물지 않고 실제 사회문제 해결 지향",
                    비판적성찰: "기존 통념과 편견에 의문을 제기하고 새로운 관점 모색"
                },
                차별화요소: {
                    실험적사고: "통제된 실험을 통해 인간 행동과 사회 현상의 인과관계 규명",
                    통계적분석: "데이터 기반의 객관적 분석과 통계적 추론 능력",
                    사회적통찰: "개인의 행동을 사회적 맥락에서 이해하고 해석하는 능력",
                    실용적적용: "학문적 성과를 정책이나 제도 개선에 연결하는 실천 의지"
                }
            },
            
        // 입시제도 변화 반영 (2023년도 vs 2025년도)
        this.admissionSystemChanges = {
            2023년도이전: {
                활용가능요소: ["독서활동", "자기소개서", "수상실적", "세특", "창체"],
                특징: "독서활동과 자소서를 통한 깊이 있는 사고과정 확인 가능"
            },
            2025년도현재: {
                활용가능요소: ["세특", "창체활동"],
                특징: "독서활동과 탐구과정이 세특과 창체에 자연스럽게 녹아들어야 함",
                변화포인트: "기존 독서활동 → 교과연계 탐구활동으로 통합"
            }
        };
        };

        // 서울대 합격생 패턴 분석
        this.snuSuccessPatterns = {
            학업역량기준: {
                최소요구: "개념 이해를 넘어선 의미 분석 능력",
                차별화요소: "비판적 사고와 창의적 해석",
                핵심키워드: ["탐구", "분석", "비판", "창의", "적용"]
            },
            진로역량기준: {
                최소요구: "전공 관련 지속적 관심과 활동",
                차별화요소: "이론을 실제로 구현하는 실천력",
                핵심키워드: ["전공연관", "실천", "전문성", "일관성"]
            },
            공동체역량기준: {
                최소요구: "기본적인 협력과 소통 능력",
                차별화요소: "소외된 사람까지 배려하는 포용력",
                핵심키워드: ["배려", "소통", "협력", "리더십", "포용"]
            }
        };

        // 평가 가중치 설정 (표준 학생부종합전형 기준)
        this.weights = {
            academic: 0.4,    // 학업역량 (교과성취도 + 학업태도)
            career: 0.35,     // 진로역량 (전공적합성 + 진로탐색)  
            community: 0.25   // 공동체역량 (협업능력 + 나눔배려)
        };

        // 표준 평가 질문 기준
        this.evaluationCriteria = {
            academic: {
                achievement: [
                    "교과 성적이 우수한가?",
                    "전공 관련 교과목에서 좋은 성취를 보이는가?",
                    "학업 성취의 향상도는 어떠한가?"
                ],
                attitude: [
                    "학습에 대한 열의와 지적 호기심이 있는가?",
                    "수업 시간에 적극적으로 참여하는가?",
                    "어려운 과제도 끝까지 해결하려고 노력하는가?"
                ]
            },
            career: {
                relevance: [
                    "전공 분야에 대한 관심과 이해도가 깊은가?",
                    "전공과 관련된 활동을 지속적으로 해왔는가?",
                    "전공 분야의 사회적 역할을 이해하고 있는가?"
                ],
                exploration: [
                    "진로 탐색을 위한 구체적 노력을 했는가?",
                    "다양한 경험을 통해 진로를 확정해 나가는가?",
                    "미래 계획이 구체적이고 실현 가능한가?"
                ]
            },
            community: {
                cooperation: [
                    "타인과 협력하여 과제를 수행할 수 있는가?",
                    "갈등 상황에서 조정 역할을 할 수 있는가?",
                    "공동체 구성원들과 원활히 소통하는가?",
                    "다양한 배경의 사람들과 함께 활동할 수 있는가?"
                ],
                sharing: [
                    "어려운 이웃을 위해 나눔을 실천하는가?",
                    "공동체 발전을 위해 기여하려고 노력하는가?",
                    "타인의 어려움에 공감하고 도움을 주는가?",
                    "자신의 능력과 재능을 공동체를 위해 활용하는가?"
                ],
                leadership: [
                    "공동체 안에서 리더십을 발휘하는가?",
                    "구성원들의 의견을 수렴하고 조율할 수 있는가?",
                    "어려운 상황에서 솔선수범하는 모습을 보이는가?",
                    "팀의 목표 달성을 위해 헌신하는가?"
                ]
            }
        };
    }

    // 표준 종합전형 분석 실행
    analyzeStudentRecord(studentData) {
        // 표준 3대 역량 분석
        const standardAnalysis = this.analyzeByStandardCriteria(studentData);
        
        // 종합 점수 계산
        standardAnalysis.학업역량.종합점수 = (
            standardAnalysis.학업역량.교과성취도.점수 * 0.6 + 
            standardAnalysis.학업역량.학업태도.점수 * 0.4
        );
        
        standardAnalysis.진로역량.종합점수 = (
            standardAnalysis.진로역량.전공적합성.점수 * 0.6 + 
            standardAnalysis.진로역량.진로탐색.점수 * 0.4
        );
        
        standardAnalysis.공동체역량.종합점수 = (
            standardAnalysis.공동체역량.협업능력.점수 * 0.5 + 
            standardAnalysis.공동체역량.나눔배려.점수 * 0.5
        );

        // 최종 종합 점수
        const finalScore = (
            standardAnalysis.학업역량.종합점수 * this.weights.academic +
            standardAnalysis.진로역량.종합점수 * this.weights.career +
            standardAnalysis.공동체역량.종합점수 * this.weights.community
        );

        return {
            역량별분석: standardAnalysis,
            종합평가: {
                총점: finalScore,
                등급: this.convertToGrade(finalScore),
                백분위: this.convertToPercentile(finalScore)
            },
            상세리포트: this.generateDetailedReport(standardAnalysis, studentData),
            개선방안: this.generateImprovementPlan(standardAnalysis, studentData),
            한줄요약: this.generateOneLinerSummary(standardAnalysis, finalScore)
        };
    }

    // 1. 정량 평가
    calculateQuantitativeScore(data) {
        return {
            gradeScore: this.calculateGradeScore(data.grades),
            awardScore: this.calculateAwardScore(data.awards),
            activityCount: this.calculateActivityScore(data.activities),
            readingScore: this.calculateReadingScore(data.reading)
        };
    }

    calculateGradeScore(grades) {
        const coreSubjects = ['국어', '수학', '영어', '과학', '사회'];
        let totalScore = 0;
        let subjectCount = 0;

        grades.forEach(subject => {
            if (coreSubjects.includes(subject.name)) {
                // 등급을 점수로 변환 (1등급=100점, 2등급=95점...)
                const score = Math.max(0, 105 - (subject.grade * 5));
                totalScore += score;
                subjectCount++;
            }
        });

        return subjectCount > 0 ? totalScore / subjectCount : 0;
    }

    calculateAwardScore(awards) {
        const weights = {
            '전국대회': 10,
            '지역대회': 7,
            '교내경시': 5,
            '학술상': 4,
            '봉사상': 3,
            '기타': 2
        };

        return awards.reduce((score, award) => {
            const weight = weights[award.level] || weights['기타'];
            return score + weight;
        }, 0);
    }

    calculateActivityScore(activities) {
        const typeWeights = {
            '동아리': 3,
            '자율활동': 2,
            '봉사활동': 2,
            '진로활동': 4
        };

        let score = 0;
        activities.forEach(activity => {
            const weight = typeWeights[activity.type] || 1;
            const continuity = this.calculateContinuity(activity);
            score += weight * continuity;
        });

        return score;
    }

    calculateReadingScore(reading) {
        if (!reading || reading.length === 0) return 0;

        const totalBooks = reading.length;
        const academicBooks = reading.filter(book => 
            book.category === '전공관련' || book.category === '학술'
        ).length;

        const ratio = academicBooks / totalBooks;
        return (totalBooks * 0.5) + (ratio * 50); // 권수 + 전공관련도
    }

    // 표준 학생부종합전형 분석 (모든 대학 공통 기준)
    analyzeByStandardCriteria(data) {
        return {
            학업역량: {
                교과성취도: this.evaluateAcademicAchievement(data),
                학업태도: this.evaluateStudyAttitude(data),
                종합점수: 0
            },
            진로역량: {
                전공적합성: this.evaluateMajorRelevance(data),
                진로탐색: this.evaluateCareerExploration(data),
                종합점수: 0
            },
            공동체역량: {
                협업능력: this.evaluateCooperation(data),
                나눔배려: this.evaluateSharing(data),
                종합점수: 0
            }
        };
    }

    evaluateAcademicAchievement(data) {
        const gradeScore = this.calculateGradeScore(data.grades);
        const majorSubjectScore = this.calculateMajorSubjectScore(data.grades, data.targetMajor);
        const improvementScore = this.calculateImprovementTrend(data.grades);
        
        return {
            점수: (gradeScore + majorSubjectScore + improvementScore) / 3,
            세부평가: {
                전체성적: gradeScore,
                전공관련과목: majorSubjectScore,
                성적향상도: improvementScore
            },
            평가의견: this.generateAcademicComment(gradeScore, majorSubjectScore, improvementScore)
        };
    }

    evaluateStudyAttitude(data) {
        const curiosityScore = this.evaluateIntellectualCuriosity(data);
        const participationScore = this.evaluateClassParticipation(data);
        const persistenceScore = this.evaluatePersistence(data);
        
        return {
            점수: (curiosityScore + participationScore + persistenceScore) / 3,
            세부평가: {
                지적호기심: curiosityScore,
                수업참여도: participationScore,
                학습지속성: persistenceScore
            },
            평가의견: this.generateAttitudeComment(curiosityScore, participationScore, persistenceScore)
        };
    }

    evaluateMajorRelevance(data) {
        const keywordMatch = this.calculateMajorKeywordMatch(data, data.targetMajor);
        const activityRelevance = this.calculateActivityRelevance(data, data.targetMajor);
        const understandingDepth = this.evaluateMajorUnderstanding(data);
        
        return {
            점수: (keywordMatch + activityRelevance + understandingDepth) / 3,
            세부평가: {
                전공키워드매칭: keywordMatch,
                관련활동수행: activityRelevance,
                이해깊이: understandingDepth
            },
            평가의견: this.generateMajorRelevanceComment(keywordMatch, activityRelevance, understandingDepth)
        };
    }

    evaluateCareerExploration(data) {
        const explorationEffort = this.calculateExplorationEffort(data);
        const careerPlanning = this.evaluateCareerPlanning(data);
        const experienceQuality = this.evaluateExperienceQuality(data);
        
        return {
            점수: (explorationEffort + careerPlanning + experienceQuality) / 3,
            세부평가: {
                탐색노력: explorationEffort,
                진로계획: careerPlanning,
                경험의질: experienceQuality
            },
            평가의견: this.generateCareerExplorationComment(explorationEffort, careerPlanning, experienceQuality)
        };
    }

    evaluateCooperation(data) {
        const teamworkScore = this.evaluateTeamwork(data);
        const communicationScore = this.evaluateCommunication(data);
        const conflictResolutionScore = this.evaluateConflictResolution(data);
        
        return {
            점수: (teamworkScore + communicationScore + conflictResolutionScore) / 3,
            세부평가: {
                팀워크: teamworkScore,
                의사소통: communicationScore,
                갈등조정: conflictResolutionScore
            },
            평가의견: this.generateCooperationComment(teamworkScore, communicationScore, conflictResolutionScore)
        };
    }

    evaluateSharing(data) {
        const volunteerScore = this.calculateVolunteerScore(data);
        const caringScore = this.evaluateCaring(data);
        const contributionScore = this.evaluateCommunityContribution(data);
        
        return {
            점수: (volunteerScore + caringScore + contributionScore) / 3,
            세부평가: {
                봉사활동: volunteerScore,
                배려: caringScore,
                공동체기여: contributionScore
            },
            평가의견: this.generateSharingComment(volunteerScore, caringScore, contributionScore)
        };
    }

    analyzeMajorRelevance(data) {
        const targetMajor = data.targetMajor;
        const keywords = this.majorKeywords[targetMajor] || [];
        
        let relevanceScore = 0;
        let evidenceCount = 0;

        // 세특에서 전공 키워드 분석
        data.subjectDetails?.forEach(detail => {
            keywords.forEach(keyword => {
                if (detail.content.includes(keyword)) {
                    relevanceScore += 3;
                    evidenceCount++;
                }
            });
        });

        // 활동에서 전공 연관성 분석
        data.activities?.forEach(activity => {
            keywords.forEach(keyword => {
                if (activity.description.includes(keyword)) {
                    relevanceScore += 2;
                    evidenceCount++;
                }
            });
        });

        return {
            score: relevanceScore,
            evidenceCount: evidenceCount,
            consistency: evidenceCount > 5 ? '높음' : evidenceCount > 2 ? '보통' : '낮음'
        };
    }

    analyzeGrowthPattern(data) {
        const timeline = this.createTimeline(data);
        
        return {
            consistency: this.checkConsistency(timeline),
            progression: this.checkProgression(timeline),
            depth: this.checkDepth(timeline)
        };
    }

    analyzeLeadership(data) {
        const leadershipKeywords = ['회장', '부회장', '팀장', '리더', '주도', '기획', '조직'];
        let leadershipScore = 0;

        data.activities?.forEach(activity => {
            leadershipKeywords.forEach(keyword => {
                if (activity.role?.includes(keyword) || 
                    activity.description.includes(keyword)) {
                    leadershipScore += 2;
                }
            });
        });

        return {
            score: leadershipScore,
            level: leadershipScore > 10 ? '뛰어남' : leadershipScore > 5 ? '우수' : '보통'
        };
    }

    analyzePersonality(data) {
        const traits = {
            responsibility: 0,    // 책임감
            cooperation: 0,       // 협력
            creativity: 0,        // 창의성
            persistence: 0        // 끈기
        };

        const keywords = {
            responsibility: ['책임', '성실', '꾸준', '완주'],
            cooperation: ['협력', '팀워크', '소통', '배려'],
            creativity: ['창의', '독창', '새로운', '아이디어'],
            persistence: ['끈기', '인내', '극복', '도전']
        };

        data.teacherComments?.forEach(comment => {
            Object.keys(keywords).forEach(trait => {
                keywords[trait].forEach(keyword => {
                    if (comment.includes(keyword)) {
                        traits[trait]++;
                    }
                });
            });
        });

        return traits;
    }

    // 3. 종합 점수 계산
    calculateComprehensiveScore(analysis) {
        const { quantitative, qualitative } = analysis;
        
        // 학업역량 (40%)
        const academicCapacity = (
            quantitative.gradeScore * 0.6 +
            quantitative.readingScore * 0.4
        ) * this.weights.academic;

        // 진로역량 (35%)
        const careerCapacity = (
            qualitative.majorRelevance.score * 0.7 +
            quantitative.activityCount * 0.3
        ) * this.weights.career;

        // 공동체역량 (25%)
        const communityCapacity = (
            qualitative.leadershipAbility.score * 0.5 +
            quantitative.awardScore * 0.3 +
            Object.values(qualitative.personalityTraits).reduce((a, b) => a + b, 0) * 0.2
        ) * this.weights.community;

        const totalScore = academicCapacity + careerCapacity + communityCapacity;

        return {
            academic: academicCapacity,
            career: careerCapacity,
            community: communityCapacity,
            total: totalScore,
            grade: this.convertToGrade(totalScore)
        };
    }

    // 4. 개선 방안 생성
    generateRecommendations(analysis, data) {
        const recommendations = [];

        // 학업역량 개선
        if (analysis.comprehensive.academic < 30) {
            recommendations.push({
                category: '학업역량',
                priority: 'high',
                suggestion: '내신 성적 향상과 전공 관련 심화 독서 필요',
                details: ['전공 관련 과목 집중 학습', '학술 도서 독서량 증가', '세특 내용 충실화']
            });
        }

        // 진로역량 개선
        if (analysis.qualitative.majorRelevance.consistency === '낮음') {
            recommendations.push({
                category: '진로역량',
                priority: 'high',
                suggestion: '전공 적합성을 보여주는 활동 강화 필요',
                details: ['전공 관련 동아리 활동', '관련 분야 체험 활동', '진로 탐색 활동 확대']
            });
        }

        // 공동체역량 개선
        if (analysis.qualitative.leadershipAbility.level === '보통') {
            recommendations.push({
                category: '공동체역량',
                priority: 'medium',
                suggestion: '리더십 경험과 협력 활동 증대 필요',
                details: ['학급 임원 활동', '팀 프로젝트 주도', '봉사활동 확대']
            });
        }

        return recommendations;
    }

    // 상세 리포트 생성
    generateDetailedReport(analysis, data) {
        return {
            학생기본정보: {
                이름: data.name || '익명',
                학년: data.grade || '3학년',
                희망전공: data.targetMajor || '미정',
                분석일자: new Date().toLocaleDateString()
            },
            
            강점분석: {
                주요강점: this.identifyStrengths(analysis),
                구체적근거: this.provideEvidence(analysis, data, 'strengths'),
                활용방안: this.suggestStrengthUtilization(analysis)
            },
            
            약점분석: {
                개선영역: this.identifyWeaknesses(analysis),
                구체적근거: this.provideEvidence(analysis, data, 'weaknesses'),
                보완전략: this.suggestImprovementStrategies(analysis)
            },
            
            전공적합도분석: {
                적합도점수: analysis.진로역량.전공적합성.점수,
                주요근거: this.getMajorFitEvidence(data),
                부족한부분: this.getMajorFitGaps(analysis, data),
                향후계획: this.suggestMajorRelatedActivities(data.targetMajor)
            }
        };
    }

    // 개선 계획 생성
    generateImprovementPlan(analysis, data) {
        const plans = [];
        
        // 학업역량 개선
        if (analysis.학업역량.종합점수 < 70) {
            plans.push({
                영역: '학업역량',
                우선순위: 1,
                목표: '내신 성적 향상 및 학업 태도 개선',
                구체적실행방안: [
                    '전공 관련 과목 성적 2등급 이내 유지',
                    '세특에서 탐구 과정과 결과를 구체적으로 기록',
                    '수업 시간 적극적 참여 및 질문하기'
                ],
                예상기간: '1-2학기',
                측정방법: '내신 성적 및 세특 내용 질적 평가'
            });
        }

        // 진로역량 개선  
        if (analysis.진로역량.종합점수 < 70) {
            plans.push({
                영역: '진로역량',
                우선순위: analysis.학업역량.종합점수 >= 70 ? 1 : 2,
                목표: '전공 적합성 및 진로 탐색 활동 강화',
                구체적실행방안: [
                    `${data.targetMajor} 관련 동아리 활동 지속`,
                    '전공 관련 도서 월 2권 이상 독서',
                    '관련 분야 전문가 인터뷰 또는 진로체험',
                    '전공 관련 프로젝트 수행 및 포트폴리오 제작'
                ],
                예상기간: '2-3학기',
                측정방법: '관련 활동 횟수 및 깊이, 성과물 질적 평가'
            });
        }

        // 공동체역량 개선
        if (analysis.공동체역량.종합점수 < 70) {
            plans.push({
                영역: '공동체역량',
                우선순위: 3,
                목표: '협업 능력 및 나눔 정신 함양',
                구체적실행방안: [
                    '학급 임원 또는 동아리 리더 역할 수행',
                    '팀 프로젝트에서 조정자 역할 담당',
                    '정기적 봉사활동 참여 (월 1회 이상)',
                    '교내외 나눔 활동 기획 및 실행'
                ],
                예상기간: '1-2학기',
                측정방법: '리더십 경험 횟수 및 봉사활동 시간'
            });
        }

        return plans;
    }

    // 한 줄 요약 생성
    generateOneLinerSummary(analysis, score) {
        const grade = this.convertToGrade(score);
        const topStrength = this.getTopStrength(analysis);
        const mainWeakness = this.getMainWeakness(analysis);
        
        return `${grade} 수준의 ${topStrength} 우수 학생, ${mainWeakness} 영역 집중 보완 필요`;
    }

    // 보조 함수들
    getTopStrength(analysis) {
        const scores = {
            '학업': analysis.학업역량.종합점수,
            '진로': analysis.진로역량.종합점수,
            '공동체': analysis.공동체역량.종합점수
        };
        
        return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    }

    getMainWeakness(analysis) {
        const scores = {
            '학업역량': analysis.학업역량.종합점수,
            '진로역량': analysis.진로역량.종합점수,
            '공동체역량': analysis.공동체역량.종합점수
        };
        
        return Object.keys(scores).reduce((a, b) => scores[a] < scores[b] ? a : b);
    }

    convertToPercentile(score) {
        // 점수를 백분위로 변환
        if (score >= 95) return 99;
        if (score >= 90) return 95;
        if (score >= 85) return 90;
        if (score >= 80) return 80;
        if (score >= 75) return 70;
        if (score >= 70) return 60;
        if (score >= 65) return 50;
        if (score >= 60) return 40;
        if (score >= 55) return 30;
        return 20;
    }

    // 유틸리티 함수들
    calculateContinuity(activity) {
        // 활동 지속성 계산 (1~3년)
        return activity.duration || 1;
    }

    createTimeline(data) {
        // 3년간 활동 타임라인 생성
        const timeline = {};
        data.activities?.forEach(activity => {
            const year = activity.year || '기타';
            if (!timeline[year]) timeline[year] = [];
            timeline[year].push(activity);
        });
        return timeline;
    }

    checkConsistency(timeline) {
        // 활동의 일관성 체크
        const years = Object.keys(timeline);
        return years.length >= 2 ? '높음' : '보통';
    }

    checkProgression(timeline) {
        // 발전성 체크
        const years = Object.keys(timeline).sort();
        let progression = 0;
        
        for (let i = 1; i < years.length; i++) {
            const prevActivities = timeline[years[i-1]];
            const currentActivities = timeline[years[i]];
            
            if (currentActivities.length > prevActivities.length) {
                progression++;
            }
        }
        
        return progression > 0 ? '상승' : '평행';
    }

    checkDepth(timeline) {
        // 활동 깊이 체크
        let totalDepth = 0;
        Object.values(timeline).forEach(activities => {
            activities.forEach(activity => {
                if (activity.description && activity.description.length > 100) {
                    totalDepth++;
                }
            });
        });
        
        return totalDepth > 5 ? '깊음' : totalDepth > 2 ? '보통' : '얕음';
    }

    // 서울대 합격생과 비교 분석
    compareWithSNUSuccessors(studentData) {
        const 유사한합격생 = this.findSimilarSNUSuccessor(studentData);
        const 부족한영역 = this.identifyGapsWithSNU(studentData);
        const 서울대수준도달률 = this.calculateSNUReadiness(studentData);

        return {
            종합평가: {
                서울대수준도달률: 서울대수준도달률,
                합격가능성: this.estimateAdmissionChance(서울대수준도달률),
                현재위치: this.getCurrentPosition(서울대수준도달률)
            },
            벤치마킹: {
                가장유사한합격생: 유사한합격생,
                유사도점수: this.calculateSimilarityScore(studentData, 유사한합격생),
                벤치마킹포인트: this.getBenchmarkingPoints(studentData, 유사한합격생)
            },
            개선영역: {
                즉시개선필요: 부족한영역.critical,
                단기개선목표: 부족한영역.shortTerm,
                장기개선목표: 부족한영역.longTerm
            },
            구체적조언: this.generateSNUSpecificAdvice(studentData, 부족한영역)
        };
    }

    // 서울대 수준 도달률 계산
    calculateSNUReadiness(studentData) {
        const 학업역량점수 = this.evaluateAgainstSNUStandard(studentData, '학업역량');
        const 진로역량점수 = this.evaluateAgainstSNUStandard(studentData, '진로역량');
        const 공동체역량점수 = this.evaluateAgainstSNUStandard(studentData, '공동체역량');

        const 가중평균 = (
            학업역량점수 * 0.4 + 
            진로역량점수 * 0.35 + 
            공동체역량점수 * 0.25
        );

        return {
            총점: Math.round(가중평균),
            학업역량: 학업역량점수,
            진로역량: 진로역량점수,
            공동체역량: 공동체역량점수,
            등급: this.convertToSNUGrade(가중평균)
        };
    }

    // 서울대 기준으로 평가
    evaluateAgainstSNUStandard(studentData, 역량타입) {
        const 기준 = this.snuSuccessPatterns[`${역량타입}기준`];
        let 점수 = 0;

        // 기본 요구사항 충족 여부 (60점)
        if (this.meetsMinimumRequirement(studentData, 기준.최소요구)) {
            점수 += 60;
        }

        // 차별화 요소 보유 여부 (30점)
        if (this.hasDifferentiatingFactor(studentData, 기준.차별화요소)) {
            점수 += 30;
        }

        // 핵심 키워드 매칭도 (10점)
        const 키워드점수 = this.calculateKeywordMatch(studentData, 기준.핵심키워드);
        점수 += 키워드점수;

        return Math.min(점수, 100);
    }

    // 합격 가능성 추정
    estimateAdmissionChance(도달률) {
        const 총점 = 도달률.총점;
        
        if (총점 >= 90) return "매우 높음 (90% 이상)";
        if (총점 >= 80) return "높음 (70-90%)";
        if (총점 >= 70) return "보통 (50-70%)";
        if (총점 >= 60) return "낮음 (30-50%)";
        return "매우 낮음 (30% 미만)";
    }

    // 서울대 특화 조언 생성
    generateSNUSpecificAdvice(studentData, 부족한영역) {
        const 조언 = [];

        // 학업역량 조언
        if (부족한영역.학업역량) {
            조언.push({
                영역: "학업역량",
                핵심메시지: "서울대는 단순 암기가 아닌 개념의 의미를 분석하는 능력을 중시합니다",
                구체적방법: [
                    "세특에서 '분석', '탐구', '적용' 키워드가 포함된 활동 기록",
                    "하나의 개념을 다양한 관점에서 해석하는 경험 쌓기",
                    "실생활 문제에 학습한 이론을 적용하는 프로젝트 수행"
                ]
            });
        }

        // 진로역량 조언  
        if (부족한영역.진로역량) {
            조언.push({
                영역: "진로역량",
                핵심메시지: "이론을 실제로 구현하는 실천력이 서울대 합격의 핵심입니다",
                구체적방법: [
                    "전공 관련 이론을 실제 상황에 적용하는 프로젝트 설계",
                    "모의수업, 실험, 조사연구 등 직접 실행하는 활동 증가",
                    "전공 관련 전문 용어와 방법론을 정확히 이해하고 활용"
                ]
            });
        }

        // 공동체역량 조언
        if (부족한영역.공동체역량) {
            조언.push({
                영역: "공동체역량", 
                핵심메시지: "소외된 사람까지 배려하는 포용력이 서울대가 원하는 인재상입니다",
                구체적방법: [
                    "어려움에 처한 동료를 적극적으로 도와주는 사례 만들기",
                    "갈등 상황에서 중재자 역할을 하는 경험 쌓기",
                    "다양성을 인정하고 포용하는 활동에 참여"
                ]
            });
        }

        return 조언;
    }

    convertToSNUGrade(점수) {
        if (점수 >= 90) return "서울대 상위권";
        if (점수 >= 80) return "서울대 합격권"; 
        if (점수 >= 70) return "서울대 준합격권";
        if (점수 >= 60) return "서울대 도전권";
        return "서울대 미달";
    }
}

// 사용 예시
const analyzer = new StudentRecordAnalyzer();

// 샘플 학생 데이터
const sampleStudent = {
    targetMajor: '의학',
    grades: [
        { name: '국어', grade: 2 },
        { name: '수학', grade: 1 },
        { name: '영어', grade: 2 },
        { name: '화학', grade: 1 },
        { name: '생명과학', grade: 1 }
    ],
    awards: [
        { name: '과학탐구대회', level: '교내경시' },
        { name: '생명과학올림피아드', level: '지역대회' }
    ],
    activities: [
        { 
            type: '동아리', 
            name: '생명과학연구반', 
            duration: 3,
            description: '3년간 지속적인 생명과학 실험 및 탐구 활동 수행. DNA 추출 실험, 세포 관찰 등 다양한 실험을 통해 생명과학에 대한 이해도를 높임.',
            year: 2022
        }
    ],
    reading: [
        { title: '생명과학의 이해', category: '전공관련' },
        { title: '의학의 역사', category: '전공관련' },
        { title: '코스모스', category: '교양' }
    ],
    subjectDetails: [
        { 
            subject: '생명과학',
            content: '세포분열 과정에 대한 심화 탐구를 통해 생명현상의 신비로움을 이해하고, DNA 구조와 복제 과정을 실험으로 확인하며 생명과학에 대한 흥미를 높임.'
        }
    ],
    teacherComments: [
        '성실하고 책임감 있는 학생으로 모든 활동에 적극적으로 참여함. 특히 생명과학 분야에 대한 열정이 뛰어나며 창의적인 사고력을 보임.'
    ]
};

// 분석 실행
const result = analyzer.analyzeStudentRecord(sampleStudent);
console.log('학생부 종합 분석 결과:', result);