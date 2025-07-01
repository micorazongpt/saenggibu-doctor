 
# 학생부 종합진단 시스템 (생기부닥터)

## 📁 프로젝트 구조

```
student-record-analyzer/
├── README.md
├── package.json
├── src/
│   ├── core/
│   │   ├── StudentRecordAnalyzer.js  # 메인 분석 엔진
│   │   ├── evaluationCriteria.js    # 평가 기준 설정
│   │   └── utils.js                 # 유틸리티 함수
│   ├── components/
│   │   ├── FileUpload.js           # 파일 업로드 컴포넌트
│   │   ├── AnalysisResult.js       # 분석 결과 표시
│   │   └── ReportGenerator.js      # 리포트 생성
│   ├── services/
│   │   ├── ocrService.js           # OCR 처리
│   │   └── pdfParser.js            # PDF 파싱
│   └── data/
│       ├── majorKeywords.json      # 전공별 키워드
│       └── sampleData.json         # 샘플 데이터
├── public/
│   ├── index.html
│   └── styles.css
└── docs/
    ├── API.md                      # API 문서
    └── EVALUATION_GUIDE.md         # 평가 기준 가이드
```

## 🚀 빠른 시작

### 1. 저장소 클론
```bash
git clone https://github.com/[username]/student-record-analyzer.git
cd student-record-analyzer
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm start
```

## 📋 주요 기능

### ✅ 현재 구현된 기능
- [x] 3대 역량 분석 엔진 (학업/진로/공동체)
- [x] 정량/정성 평가 시스템
- [x] 전공별 키워드 매칭
- [x] 성장 패턴 분석
- [x] 개선 방안 제시
- [x] 상세 리포트 생성

### 🔄 개발 예정 기능
- [ ] PDF/이미지 OCR 처리
- [ ] 웹 인터페이스 구현
- [ ] 서울대 합격생 데이터 학습
- [ ] 실시간 분석 API
- [ ] 모바일 앱 연동

## 📊 분석 예시

```javascript
// 기본 사용법
const analyzer = new StudentRecordAnalyzer();
const result = analyzer.analyzeStudentRecord(studentData);

console.log(result.종합평가.총점);        // 85.2
console.log(result.종합평가.등급);        // A
console.log(result.한줄요약);            // "A 수준의 학업 우수 학생, 공동체역량 영역 집중 보완 필요"
```

## 🔧 설정

### 평가 가중치 조정
```javascript
// src/core/evaluationCriteria.js
export const weights = {
    academic: 0.4,    // 학업역량 40%
    career: 0.35,     // 진로역량 35%
    community: 0.25   // 공동체역량 25%
};
```

### 전공별 키워드 추가
```javascript
// src/data/majorKeywords.json
{
  "의학": ["생명과학", "화학", "의료봉사", "생명윤리"],
  "공학": ["수학", "물리", "프로그래밍", "설계"],
  "새전공": ["키워드1", "키워드2", "키워드3"]
}
```

## 📈 성능 최적화

- 대용량 파일 처리: 청크 단위 분석
- 캐싱 시스템: 분석 결과 임시 저장
- 병렬 처리: 다중 파일 동시 분석

## 🤝 기여 방법

1. Fork 저장소
2. 새 브랜치 생성 (`git checkout -b feature/새기능`)
3. 변경사항 커밋 (`git commit -am '새기능 추가'`)
4. 브랜치 푸시 (`git push origin feature/새기능`)
5. Pull Request 생성

## 📝 라이선스

MIT License

## 📞 연락처

- 이슈: [GitHub Issues](https://github.com/[username]/student-record-analyzer/issues)
- 이메일: [your-email@example.com]

---

### 🎯 로드맵

#### Phase 1 (1주차)
- [x] 핵심 분석 엔진 완성
- [ ] 기본 웹 인터페이스
- [ ] MVP 배포

#### Phase 2 (2주차)
- [ ] OCR 기능 통합
- [ ] 합격생 데이터 학습
- [ ] 정확도 개선

#### Phase 3 (3-4주차)
- [ ] 고급 분석 기능
- [ ] 모바일 최적화
- [ ] 상용 서비스 준비