export const secondgradeCollection = {
	name: "2ND GRADE CURRICULUM",
	areas: [
		{
			name: "1st semester_required",
			skills: [
				{	
					name: "미래설계구현",
					description: {
						text: "대학생활 전주기적인 관점에서 진로 및 취업 설계를 고학년을 대비 체계적으로 수립할 수 있는 능력을 배양한다."
					}		
				},
				{
					name: "이산수학",
					description: {
						text: "컴퓨터공학 분야의 수학적 기초가 되는 논리, 관계, 함수, 트리, 그래프 이론, 부울대수, 알고리즘 등을 학습한다.",
						links: [
							["BRILLIANT - Discrete Mathematics", "https://brilliant.org/wiki/discrete-mathematics/"],
							["medium - Mathematics For Computer Science", "https://medium.com/@randerson112358/what-is-discrete-math-367a4533fc46"],
							["Youtube - Math for Programmers", "https://youtu.be/1FfX2xW3104"]
						]
					}
				}
			],
		},
		{
			name: "1st semester_elective",
			skills: [
				{
					name: "전자회로 및 설계",
					description: {
						text:  "전기회로 소자 중 선형이며, 집중정수회로소자인 전압원, 전류원, 저항, 인덕턴스, 캐패시턴스 등의 회로 소자의 특성과 단자특성을 소개한다. 또한 Op Amp 의 선형구간을 이용하여 선형 전기회로 해석을 한다. 각 회로소자로 구성된 회로를 해석하기 위하여 키르히호프의 전류 법칙과 전압 법칙을 적용한다. Thevenin 정리와 Norton 정리를 이용하여 등가회로 개념을 도입하고 최대 전력이 전달되는 전기전자회로에 대하여 학습한다.",
						links: [
							["Elprocus", "https://www.elprocus.com/different-electronic-circuit-design-process/"],
							["집중정수회로소자", "http://www.rfdh.com/invite/mwlab/2lumped_ele.htm"],
							["Wikipedia - Op Amp", "https://ko.wikipedia.org/wiki/%EC%97%B0%EC%82%B0_%EC%A6%9D%ED%8F%AD%EA%B8%B0"],
							["키르히호프의 법칙", "https://bjs16.tistory.com/13"]
						]
					}
				},
				{
					name: "오픈소스 기초프로젝트",
					decription: {
						text: "C 프로그래밍 언어를 활용하여 실용 소프트웨어를 개발하고, 개인 및 팀 프로젝트를 통해 오픈소스 저장소에 기여하는 방법을 실습한다.",
						links: [
							["Open Source.guide", "https://opensource.guide/ko/starting-a-project/"],
							["Learn C Programming", "https://www.programiz.com/c-programming"],
							["Contributing to OpenSource","https://git-scm.com/book/ko/v2/GitHub-GitHub-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EA%B8%B0%EC%97%AC%ED%95%98%EA%B8%B0"]
						]
					}
				},
				{
					name: "C&C++프로그래밍",
					decription: {
						text: "C 언어와 C++ 언어의 구문, 프로그램 설계 기법, 알고리즘 개발 기법을 강의하며, 이를 이용하여 고급 프로그램을 개발하는 능력을 배양한다.",
						links: [
							["Programiz - learn C++", "https://www.programiz.com/cpp-programming"],
							["Software Testing Help", "https://www.softwaretestinghelp.com/c-vs-cpp/"],
							["Developing Algorithm", "https://ilyoan.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%BD%94%EB%94%A9%EA%B8%B0%EB%B2%95-1-Introduction"]
						]
					}
				},
				{
					name: "데이터통신",
					decription: {
						text: "인터넷 활용, 통신 모델, 전송 매체의 유형과 특성, 네트워크 장비, 전송 방식, 전송 기술, 오류 제어, 부호화, 정보 압축, 보안 등의 개념에 대하여 학습한다.",
						links: [
							["Tistory Blog - Data communication", "https://wondong2.tistory.com/25"],
							["Web.dev - Data communication", "https://gracefullight.dev/2017/02/15/%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%86%B5%EC%8B%A0-%EC%A0%95%EB%A6%AC/"],
							["Ecomputernotes.com", "https://ecomputernotes.com/computernetworkingnotes/communication-networks/what-is-data-communication"]
						]
					}
				}		
			]
		},
		{
			name: "2st semester_required",
			skills: [
				{
					name: "창업탐색",
				description: {
						text: "대학생활 전주기적인 관점에서 창업에 관한 진로 설계를 저학년에서부터 체계적으로 수립할 수 있는 능력을 배양한다.",
						links: [
							["진로교육에서의 창업활동", "http://webzine-serii.re.kr/%EC%A7%84%EB%A1%9C%EA%B5%90%EC%9C%A1%EC%97%90%EC%84%9C-%EC%B0%BD%EC%97%85%ED%99%9C%EB%8F%99%EC%9D%80-%EB%AF%B8%EB%9E%98-%ED%95%B5%EC%8B%AC-%EC%97%AD%EB%9F%89%EC%9D%84-%ED%82%A4%EC%9A%B0%EB%8A%94/"]
							["진로탐색을 학점으로 인정", "https://www.kbmaeil.com/news/articleView.html?idxno=837230"]
						]
					}
				},
				{
					name: "데이터구조",
					description: {
						text: "컴퓨터에서 처리하는 데이터의 기본 개념과 이를 효율적으로 처리하기 위한 자료 구조인 배열, 스택, 큐, 연결리스트, 해시테이블 등의 자료구조에 대해 공부한다. 또한 트리와 그래프를 사용한 자료 정렬과 검색에 대하여 학습한다.",
						links: [
							["Data structure", "https://velog.io/@bclef25/Data-Structure-mxk54wazza"],
							["Sort and Search", "https://hero84angel.tistory.com/entry/%EC%A0%9C6%EC%9E%A5-%EC%A0%95%EB%A0%AC%EA%B3%BC-%EA%B2%80%EC%83%89-1"],
							["Wikipedia - Stack", "https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%9D"],
							["Stacks & Queues", "https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html"]
						]
					}
				},
				{
					name: "컴퓨터네트워크",
					description: {
						text: "통신 프로토콜의 기능 모델, OSI 참조 모델, TCP/IP 프로토콜, 소켓 인터페이스, IP 라우팅, 차세대 인터넷, 초고속 통신망 등의 개념에 대하여 학습한다.",
						links: [
							["a24s.com - OSI", "http://www.a24s.com/data/jeongbotongsinhakseub/jbts/contents/ch2-4.htm"],
							["Tistory - IP Routing", "https://vitalholic.tistory.com/285"],
							["IBM - TCP/IP", "https://www.ibm.com/support/knowledgecenter/ko/ssw_aix_71/network/tcpip_protocols.html"]
						]
					}
				}
			],
		},
		{
			name: "2st semester_elective",
			skills: [
				{
					name: "오토마타이론",
					description: {
						text: "컴퓨터공학의 기반이 되는 계산 이론(theory of computation)의 이론적 지식, 즉 형식언어, 형식문법, 오토마타 등에 대해 강의한다. 또한 이들과 관련된 고급 프로그래밍 기법을 습득함으로써, 학생들의 문제 해결 능력을 강화한다.",
						links: [
							["Wikipedia", "https://en.wikipedia.org/wiki/Theory_of_computation"],
							["Brunch - Automata", "https://brunch.co.kr/@toughrogrammer/11"],
							["Tistory - 프로그래밍 언어 구현 기법", "https://hcr3066.tistory.com/123"]
						]
					}
				},
				{
					name: "논리회로 및 설계 ",
					description: {
						text: "디지털 하드웨어의 동작을 이해하기 위하여 기본 디지털 소자를 비롯한 다양한 디지털 회로에 대한 이해와 설계 능력을 배양한다.",
						links: [
							["Wikipedia - logic gate", "https://ko.wikipedia.org/wiki/%EB%85%BC%EB%A6%AC_%ED%9A%8C%EB%A1%9C"],
							["Brunch - ML&End of Coding", "https://brunch.co.kr/@gimmesilver/11"]
						]
					}
				},
				{
					name: "선형대수학",
					description: {
						text: "컴퓨터공학 분야에 다양하게 응용되는 행렬과 연립방정식, 행렬식, 벡터공간, 선형변화, 고유값 고유벡터 등을 학습한다.",
						links: [
							["Basic linear algebra", "https://darkpgmr.tistory.com/103"],
							["Medium","https://medium.com/@alvin.h/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%8B%9C%EA%B0%81%EC%9C%BC%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-%EC%84%A0%ED%98%95%EB%8C%80%EC%88%98-1-%EC%97%B0%EB%A6%BD-%EB%B0%A9%EC%A0%95%EC%8B%9D-54fb846baafe"],
							["Matrices for programmers", "http://polymathprogrammer.com/2008/08/11/matrices-for-programmers/"]
						]
					}
				},
				{
					name: "오픈소스개발프로젝트",
					description: {
						text: "객체지향 프로그래밍 언어를 이용하여 실생활에 적용 가능한 소프트웨어를 개발하고, 개발 과정에서 프로그램의 역할과 프로그램 코드의 체계적인 개발에 대한 중요성을 이해한다.",
						links: [
							["Youtube - OOP", "https://youtu.be/dy9yQIx38u8"],
							["velog.io - Reality VS School", "https://velog.io/@zetlos/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%EA%B3%B5%ED%95%99%EA%B3%BC-%EC%8B%A4%EC%A0%9C-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%EC%9D%98-%EA%B1%B0%EB%A6%AC%EA%B0%90"],
							["Wikihow - How to write Algorithm", "https://www.wikihow.com/Write-an-Algorithm-in-Programming-Language"]
						]
					}
				}
			]
		}
	]
}